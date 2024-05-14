/*
  Warnings:

  - You are about to drop the column `female_meamber` on the `House` table. All the data in the column will be lost.
  - You are about to drop the column `house_meamberId` on the `House` table. All the data in the column will be lost.
  - You are about to drop the column `male_meamber` on the `House` table. All the data in the column will be lost.
  - You are about to drop the column `totle_meambers` on the `House` table. All the data in the column will be lost.
  - You are about to drop the `House_meamber` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_House_meamberToKid` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `female_members` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `male_members` to the `House` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_memberss` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "House_meamber" DROP CONSTRAINT "House_meamber_ashaId_fkey";

-- DropForeignKey
ALTER TABLE "House_meamber" DROP CONSTRAINT "House_meamber_houseId_fkey";

-- DropForeignKey
ALTER TABLE "_House_meamberToKid" DROP CONSTRAINT "_House_meamberToKid_A_fkey";

-- DropForeignKey
ALTER TABLE "_House_meamberToKid" DROP CONSTRAINT "_House_meamberToKid_B_fkey";

-- AlterTable
ALTER TABLE "House" DROP COLUMN "female_meamber",
DROP COLUMN "house_meamberId",
DROP COLUMN "male_meamber",
DROP COLUMN "totle_meambers",
ADD COLUMN     "female_members" INTEGER NOT NULL,
ADD COLUMN     "house_membersId" TEXT[],
ADD COLUMN     "male_members" INTEGER NOT NULL,
ADD COLUMN     "total_memberss" TEXT NOT NULL;

-- DropTable
DROP TABLE "House_meamber";

-- DropTable
DROP TABLE "_House_meamberToKid";

-- CreateTable
CREATE TABLE "House_members" (
    "id" TEXT NOT NULL,
    "dead" BOOLEAN NOT NULL,
    "head" BOOLEAN NOT NULL,
    "married" BOOLEAN NOT NULL,
    "wife_of" TEXT,
    "husbend_of" TEXT,
    "firstName" TEXT NOT NULL,
    "midelName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ashaId" TEXT NOT NULL,
    "houseId" TEXT NOT NULL,
    "dob" TEXT NOT NULL,

    CONSTRAINT "House_members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_House_membersToKid" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_House_membersToKid_AB_unique" ON "_House_membersToKid"("A", "B");

-- CreateIndex
CREATE INDEX "_House_membersToKid_B_index" ON "_House_membersToKid"("B");

-- AddForeignKey
ALTER TABLE "House_members" ADD CONSTRAINT "House_members_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House_members" ADD CONSTRAINT "House_members_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_House_membersToKid" ADD CONSTRAINT "_House_membersToKid_A_fkey" FOREIGN KEY ("A") REFERENCES "House_members"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_House_membersToKid" ADD CONSTRAINT "_House_membersToKid_B_fkey" FOREIGN KEY ("B") REFERENCES "Kid"("id") ON DELETE CASCADE ON UPDATE CASCADE;
