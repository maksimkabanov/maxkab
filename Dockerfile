FROM node:20-alpine
WORKDIR /app

# Copy the ready contents of the deploy folder
COPY . .

# Disable Next.js telemetry
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Run the built-in server directly without npm
CMD ["node", "server.js"]