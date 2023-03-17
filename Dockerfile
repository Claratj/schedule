FROM node:16-alpine3.16
WORKDIR /schedule
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]
