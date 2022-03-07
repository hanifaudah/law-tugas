#!/bin/sh

# stop server
pm2 stop dist/index.js

# start db
sudo service postgresql start

# install dep
npm ci

# server setup
npx tsc
npx prisma migrate deploy
npx prisma generate
tsc

# start server
pm2 start dist/index.js