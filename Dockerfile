# syntax=docker/dockerfile:1

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=development \
    HOST=0.0.0.0 \
    PORT=3000

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]
