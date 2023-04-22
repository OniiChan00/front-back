FROM node:18.12.1

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm install

EXPOSE 2000

CMD ["npm", "start"]


#docker network create backend

#docker build -t docker-node .

#docker run -it --rm --network backend -d -p 2000:2000 docker-node

#docker run --name mysql --network backend -v C:/data-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -d  -p 3306:3306 mysql

#docker run --name phpmyadmin-server -d --network backend --link mysqlr:db -p 8080:80 phpmyadmin

