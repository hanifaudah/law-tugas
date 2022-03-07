#!/bin/sh

# start db
sudo service postgresql start

# server setup
npm ci
npx prisma migrate
npx prisma generate
tsc

# start server
pm2 start dist/index.js