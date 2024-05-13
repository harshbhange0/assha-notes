-- CreateTable
CREATE TABLE "Asha" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Asha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "addrace" TEXT NOT NULL,
    "totle_meambers" TEXT NOT NULL,
    "male_meamber" INTEGER NOT NULL,
    "female_meamber" INTEGER NOT NULL,
    "ashaId" TEXT NOT NULL,
    "house_meamberId" TEXT[],

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House_meamber" (
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

    CONSTRAINT "House_meamber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kid" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "midelName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "ashaId" TEXT NOT NULL,
    "houseId" TEXT NOT NULL,
    "dob" TEXT NOT NULL,

    CONSTRAINT "Kid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_House_meamberToKid" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_House_meamberToKid_AB_unique" ON "_House_meamberToKid"("A", "B");

-- CreateIndex
CREATE INDEX "_House_meamberToKid_B_index" ON "_House_meamberToKid"("B");

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House_meamber" ADD CONSTRAINT "House_meamber_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House_meamber" ADD CONSTRAINT "House_meamber_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kid" ADD CONSTRAINT "Kid_ashaId_fkey" FOREIGN KEY ("ashaId") REFERENCES "Asha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kid" ADD CONSTRAINT "Kid_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_House_meamberToKid" ADD CONSTRAINT "_House_meamberToKid_A_fkey" FOREIGN KEY ("A") REFERENCES "House_meamber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_House_meamberToKid" ADD CONSTRAINT "_House_meamberToKid_B_fkey" FOREIGN KEY ("B") REFERENCES "Kid"("id") ON DELETE CASCADE ON UPDATE CASCADE;
