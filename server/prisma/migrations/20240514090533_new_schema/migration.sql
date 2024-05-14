-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "totalMember" INTEGER NOT NULL,
    "femaleMember" INTEGER NOT NULL,
    "maleMember" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Members" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "isHead" BOOLEAN NOT NULL,
    "isHeadWife" BOOLEAN NOT NULL,
    "isMarrid" BOOLEAN NOT NULL,
    "isHusband" BOOLEAN NOT NULL,
    "isWife" BOOLEAN NOT NULL,
    "houseId" TEXT NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Child" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "Child_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParentChild" (
    "childId" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,

    CONSTRAINT "ParentChild_pkey" PRIMARY KEY ("childId","parentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "House_name_key" ON "House"("name");

-- AddForeignKey
ALTER TABLE "Members" ADD CONSTRAINT "Members_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentChild" ADD CONSTRAINT "ParentChild_childId_fkey" FOREIGN KEY ("childId") REFERENCES "Child"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParentChild" ADD CONSTRAINT "ParentChild_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
