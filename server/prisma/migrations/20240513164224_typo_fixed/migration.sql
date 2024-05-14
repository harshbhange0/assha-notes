-- AlterTable
ALTER TABLE "House" ALTER COLUMN "female_members" DROP NOT NULL,
ALTER COLUMN "male_members" DROP NOT NULL,
ALTER COLUMN "total_members" DROP NOT NULL;
