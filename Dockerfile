FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

COPY out/ ./

RUN chmod +x /app/start.sh

EXPOSE 3000

CMD ["./start.sh"]