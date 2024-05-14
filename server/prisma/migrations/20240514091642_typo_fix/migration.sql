/*
  Warnings:

  - You are about to drop the column `isMarrid` on the `Members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Members" DROP COLUMN "isMarrid",
ADD COLUMN     "isMarride" BOOLEAN;
