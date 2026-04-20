#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/out"

cd "$ROOT_DIR"

echo "==> Cleaning output folder"
rm -rf "$OUT_DIR"
mkdir -p "$OUT_DIR/.next"

echo "==> Building Next.js"
NODE_ENV=production npm run build

echo "==> Verifying standalone build exists"
if [ ! -d ".next/standalone" ]; then
  echo "ERROR: .next/standalone not found"
  echo "Make sure next.config.js contains: output: 'standalone'"
  exit 1
fi

echo "==> Copying standalone server"
cp -R .next/standalone/. "$OUT_DIR/"

echo "==> Copying static assets"
if [ -d ".next/static" ]; then
  cp -R .next/static "$OUT_DIR/.next/"
fi

echo "==> Copying public assets"
if [ -d "public" ]; then
  cp -R public "$OUT_DIR/"
fi

echo "==> Creating start script"
cat > "$OUT_DIR/start.sh" <<'EOF'
#!/usr/bin/env sh
set -eu
export NODE_ENV=production
export PORT="${PORT:-3000}"
exec node server.js
EOF

cp Dockerfile "$OUT_DIR/"

chmod +x "$OUT_DIR/start.sh"

echo "==> Done. Docker-ready build is in: $OUT_DIR"
find "$OUT_DIR" -maxdepth 2 | sed 's|^\./||'