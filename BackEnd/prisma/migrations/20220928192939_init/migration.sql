/*
  Warnings:

  - You are about to drop the column `company` on the `ticket` table. All the data in the column will be lost.
  - Made the column `hotelId` on table `accommodation` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `companyId` to the `ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "accommodation" ALTER COLUMN "hotelId" SET NOT NULL,
ALTER COLUMN "hotelId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "ticket" DROP COLUMN "company",
ADD COLUMN     "companyId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accommodation" ADD CONSTRAINT "accommodation_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
