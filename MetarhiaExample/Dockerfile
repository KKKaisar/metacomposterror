FROM node:16-alpine
WORKDIR /usr/server
COPY . .
RUN npm ci --only=production
EXPOSE 8000
EXPOSE 8001
EXPOSE 8002
CMD ["node", "server.js"]
