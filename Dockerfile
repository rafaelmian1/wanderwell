FROM node:hydrogen-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm i

COPY . .

CMD ["pnpm", "run", "dev"]
