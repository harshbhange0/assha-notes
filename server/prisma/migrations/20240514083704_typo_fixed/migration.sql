/*
  Warnings:

  - You are about to drop the column `house_membersId` on the `House` table. All the data in the column will be lost.
  - The `total_members` column on the `House` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "House" DROP COLUMN "house_membersId",
DROP COLUMN "total_members",
ADD COLUMN     "total_members" INTEGER;
