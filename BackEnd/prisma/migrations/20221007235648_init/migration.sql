/*
  Warnings:

  - A unique constraint covering the columns `[userName]` on the table `customer` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `hotel` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "customer" ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "address" SET DEFAULT '';

-- AlterTable
ALTER TABLE "hotel" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT,
ALTER COLUMN "services" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "customer_userName_key" ON "customer"("userName");
