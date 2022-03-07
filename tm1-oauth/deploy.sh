#!/bin/sh

npm ci
npx prisma generate
tsc
pm2 start dist/index.js