-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'GUEST');

-- CreateTable
CREATE TABLE "admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "identification" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberCard" TEXT DEFAULT '',
    "pass" TEXT,
    "zipCode" TEXT,
    "userType" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotel" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cityCountry" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TIMESTAMP(3) NOT NULL,
    "image" TEXT NOT NULL,
    "services" INTEGER NOT NULL,

    CONSTRAINT "hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accommodation" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "cost" MONEY NOT NULL,
    "hotelId" TEXT NOT NULL,

    CONSTRAINT "accommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "servicesAccommodation" (
    "id" TEXT NOT NULL,
    "serviceId" INTEGER NOT NULL,
    "accommodationId" TEXT NOT NULL,

    CONSTRAINT "servicesAccommodation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "excursion" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cost" MONEY NOT NULL,

    CONSTRAINT "excursion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activityType" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "activityType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "descripton" TEXT NOT NULL,
    "stock" INTEGER,
    "minimunDuration" TEXT NOT NULL,
    "rating" DECIMAL(65,30) NOT NULL,
    "cost" MONEY NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activityPictures" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,

    CONSTRAINT "activityPictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activityOnExcursion" (
    "id" TEXT NOT NULL,
    "activityId" TEXT NOT NULL,
    "excursionId" TEXT NOT NULL,

    CONSTRAINT "activityOnExcursion_pkey" PRIMARY KEY ("activityId","excursionId")
);

-- CreateTable
CREATE TABLE "ticket" (
    "id" TEXT NOT NULL,
    "fligthId" TEXT,
    "class" TEXT NOT NULL,
    "chair" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "cost" MONEY NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "contact" TEXT NOT NULL,

    CONSTRAINT "company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "purchase" (
    "id" TEXT NOT NULL,
    "payId" TEXT NOT NULL,
    "payCost" MONEY NOT NULL,

    CONSTRAINT "purchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "touristPackage" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    "excursionId" TEXT NOT NULL,
    "cost" MONEY NOT NULL,
    "purchaseId" TEXT NOT NULL,

    CONSTRAINT "touristPackage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customer_identification_key" ON "customer"("identification");

-- CreateIndex
CREATE UNIQUE INDEX "customer_email_key" ON "customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hotel_email_key" ON "hotel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "activityType_name_key" ON "activityType"("name");

-- AddForeignKey
ALTER TABLE "accommodation" ADD CONSTRAINT "accommodation_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicesAccommodation" ADD CONSTRAINT "servicesAccommodation_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "servicesAccommodation" ADD CONSTRAINT "servicesAccommodation_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity" ADD CONSTRAINT "activity_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "activityType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activityPictures" ADD CONSTRAINT "activityPictures_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activityOnExcursion" ADD CONSTRAINT "activityOnExcursion_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activityOnExcursion" ADD CONSTRAINT "activityOnExcursion_excursionId_fkey" FOREIGN KEY ("excursionId") REFERENCES "excursion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "touristPackage" ADD CONSTRAINT "touristPackage_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
