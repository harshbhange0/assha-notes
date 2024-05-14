/*
  Warnings:

  - You are about to drop the column `addrace` on the `House` table. All the data in the column will be lost.
  - Added the required column `adders` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "House" DROP COLUMN "addrace",
ADD COLUMN     "adders" TEXT NOT NULL;
