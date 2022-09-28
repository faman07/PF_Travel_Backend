/*
  Warnings:

  - Added the required column `lastName` to the `customer` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "customer" ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;
