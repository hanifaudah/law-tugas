/*
  Warnings:

  - Added the required column `clientId` to the `Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Token" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fullName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ClientApp" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientSecret" TEXT NOT NULL,

    CONSTRAINT "ClientApp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClientApp_clientId_key" ON "ClientApp"("clientId");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "ClientApp"("clientId") ON DELETE RESTRICT ON UPDATE CASCADE;
