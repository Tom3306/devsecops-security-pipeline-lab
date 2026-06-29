FROM node:22-alpine AS runtime

ENV NODE_ENV=production
WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src

USER node
EXPOSE 3000

CMD ["node", "src/server.js"]

