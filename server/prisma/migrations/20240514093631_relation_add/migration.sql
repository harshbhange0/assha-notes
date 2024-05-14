/*
  Warnings:

  - Added the required column `ashaId` to the `Child` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Child" ADD COLUMN     "ashaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Child" ADD CONSTRAINT "Child_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
