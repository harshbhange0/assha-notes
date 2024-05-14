/*
  Warnings:

  - You are about to drop the column `isMarride` on the `Members` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Members" DROP COLUMN "isMarride",
ADD COLUMN     "isMarried" BOOLEAN;
