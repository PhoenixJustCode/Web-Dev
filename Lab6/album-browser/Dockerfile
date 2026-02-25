# Stage 1: Build
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve
FROM nginx:alpine
# In Angular 17+, the build output goes to dist/album-browser/browser
COPY --from=build /app/dist/album-browser/browser /usr/share/nginx/html
# Custom nginx config to handle SPA routing if needed (optional but recommended)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
