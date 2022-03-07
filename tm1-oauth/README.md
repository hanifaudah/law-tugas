# OAuth Service

## How to run

1. Create a `.env` file using the provided `.env.example`
2. Start a postgresql database based on the keys in `.env`
3. Install dependencies
   ```
   npm install
   ```
4. Apply migrations to the database

   ```
   npx prisma migrate deploy
   ```

5. Generate prisma client
   ```
   npm run generate
   ```
6. Run server
   ```
   npm run dev
   ```
