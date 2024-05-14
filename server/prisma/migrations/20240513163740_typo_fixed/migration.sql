/*
  Warnings:

  - You are about to drop the column `total_memberss` on the `House` table. All the data in the column will be lost.
  - Added the required column `total_members` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "House" DROP COLUMN "total_memberss",
ADD COLUMN     "total_members" TEXT NOT NULL;
