-- CreateTable
CREATE TABLE "Checkin" (
    "id" SERIAL NOT NULL,
    "clientname" TEXT NOT NULL,
    "ckeckindate" TEXT NOT NULL,
    "checkoutedate" TEXT NOT NULL,
    "guest" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "adharno1" TEXT NOT NULL,
    "adharno2" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Checkin_pkey" PRIMARY KEY ("id")
);
