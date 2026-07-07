FROM node:22-slim AS builder
WORKDIR /app

RUN npm install -g npm@11.6.1
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG SANITY_PROJECT_ID
ARG SANITY_DATASET
ENV SANITY_PROJECT_ID=$SANITY_PROJECT_ID
ENV SANITY_DATASET=$SANITY_DATASET

RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
