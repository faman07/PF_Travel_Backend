/*
  Warnings:

  - You are about to drop the column `address` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `cityCountry` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `hotel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hotel" DROP COLUMN "address",
DROP COLUMN "cityCountry",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "image",
DROP COLUMN "services";
