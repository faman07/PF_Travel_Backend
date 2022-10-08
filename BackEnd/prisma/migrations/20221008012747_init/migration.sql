/*
  Warnings:

  - You are about to drop the column `cityCountry` on the `hotel` table. All the data in the column will be lost.
  - Added the required column `city` to the `hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotel" DROP COLUMN "cityCountry",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL;
