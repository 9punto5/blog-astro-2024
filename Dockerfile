# Build Stage
FROM node:20.11.0-alpine AS builder
WORKDIR /app

# Set Yarn cache folder and create a volume for it
ENV YARN_CACHE_FOLDER=/usr/local/yarn-cache
VOLUME /usr/local/yarn-cache

# Ensure yarn is at its latest version
RUN yarn global add yarn@1.22.21

# Copy package.json, yarn.lock, and other necessary files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy necessary files for the build
COPY . .

# Perform the build
RUN yarn build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 8080