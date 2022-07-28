-- CreateTable
CREATE TABLE `Confession` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `withWebsteLink` BOOLEAN NOT NULL,
    `websiteName` VARCHAR(191) NULL,
    `websiteLink` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
