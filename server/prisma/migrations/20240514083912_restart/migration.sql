/*
  Warnings:

  - You are about to drop the `House` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `House_members` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_House_membersToKid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "House" DROP CONSTRAINT "House_ashaId_fkey";

-- DropForeignKey
ALTER TABLE "House_members" DROP CONSTRAINT "House_members_ashaId_fkey";

-- DropForeignKey
ALTER TABLE "House_members" DROP CONSTRAINT "House_members_houseId_fkey";

-- DropForeignKey
ALTER TABLE "Kid" DROP CONSTRAINT "Kid_ashaId_fkey";

-- DropForeignKey
ALTER TABLE "Kid" DROP CONSTRAINT "Kid_houseId_fkey";

-- DropForeignKey
ALTER TABLE "_House_membersToKid" DROP CONSTRAINT "_House_membersToKid_A_fkey";

-- DropForeignKey
ALTER TABLE "_House_membersToKid" DROP CONSTRAINT "_House_membersToKid_B_fkey";

-- DropTable
DROP TABLE "House";

-- DropTable
DROP TABLE "House_members";

-- DropTable
DROP TABLE "Kid";

-- DropTable
DROP TABLE "_House_membersToKid";
