FROM node:18

WORKDIR /usr/test

COPY package*.json .

RUN yarn install
# set up prisma , sequelize kg cần 2 dòng này
COPY prisma ./prisma/
RUN yarn prisma generate

COPY . .

EXPOSE 8080

CMD ["yarn", "start"] 

# docker build . -t img-node

# docker run -d -p 8080:8080 --name cons-node img-node 