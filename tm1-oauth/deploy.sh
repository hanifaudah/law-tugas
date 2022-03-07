#!/bin/sh

# start db
sudo service postgresql start

# install dep
npm ci

# server setup
npx tsc
npx prisma migrate
npx prisma generate
tsc

# start server
pm2 start dist/index.js