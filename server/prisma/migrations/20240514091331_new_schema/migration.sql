/*
  Warnings:

  - Added the required column `ashaId` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ashaId` to the `Members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "House" ADD COLUMN     "ashaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Members" ADD COLUMN     "ashaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
