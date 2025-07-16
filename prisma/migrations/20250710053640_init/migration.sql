-- CreateTable
CREATE TABLE `Shop_Details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shop_name` VARCHAR(191) NOT NULL,
    `short_name` VARCHAR(191) NULL,
    `mobile_number` BIGINT NOT NULL,
    `email` VARCHAR(191) NULL,
    `address` VARCHAR(191) NOT NULL,
    `subscription_status` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Shop_Details_mobile_number_key`(`mobile_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Owners` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shop_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mobile_number` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Owners_mobile_number_key`(`mobile_number`),
    UNIQUE INDEX `Owners_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Shop_logo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shop_id` INTEGER NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `shop_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mobile_number` BIGINT NOT NULL,
    `email` VARCHAR(191) NULL,
    `role_name` VARCHAR(191) NOT NULL,
    `access` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Roles_mobile_number_key`(`mobile_number`),
    UNIQUE INDEX `Roles_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `shop_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `mobile_number` BIGINT NOT NULL,
    `email` VARCHAR(191) NULL,
    `total_boxes` INTEGER NULL,
    `total_amount` BIGINT NULL,
    `total_discount_amount` BIGINT NULL,
    `settled_boxes` INTEGER NULL,
    `remaining_boxes` INTEGER NULL,
    `settled_amount` BIGINT NULL,
    `remaining_amount` BIGINT NULL,
    `min_amount_for_one_box` VARCHAR(191) NULL,
    `max_amount_for_one_box` VARCHAR(191) NULL,
    `average_amount_one_box` VARCHAR(191) NULL,
    `min_dis_for_one_box` VARCHAR(191) NULL,
    `max_dis_for_one_box` VARCHAR(191) NULL,
    `average_dis_one_box` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Customer_details_mobile_number_key`(`mobile_number`),
    UNIQUE INDEX `Customer_details_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer_logo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `shop_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `file_name` VARCHAR(191) NOT NULL,
    `file_path` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sales_details` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `shop_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `sold_boxes` INTEGER NOT NULL,
    `sold_amount` BIGINT NOT NULL,
    `applied_dis` INTEGER NOT NULL,
    `total_amount` BIGINT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Box_collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER NOT NULL,
    `shop_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `collected_boxes` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Owners` ADD CONSTRAINT `Owners_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shop_logo` ADD CONSTRAINT `Shop_logo_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Roles` ADD CONSTRAINT `Roles_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer_details` ADD CONSTRAINT `Customer_details_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer_details` ADD CONSTRAINT `Customer_details_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer_logo` ADD CONSTRAINT `Customer_logo_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer_logo` ADD CONSTRAINT `Customer_logo_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customer_logo` ADD CONSTRAINT `Customer_logo_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer_details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales_details` ADD CONSTRAINT `Sales_details_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales_details` ADD CONSTRAINT `Sales_details_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales_details` ADD CONSTRAINT `Sales_details_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer_details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Box_collection` ADD CONSTRAINT `Box_collection_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `Roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Box_collection` ADD CONSTRAINT `Box_collection_shop_id_fkey` FOREIGN KEY (`shop_id`) REFERENCES `Shop_Details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Box_collection` ADD CONSTRAINT `Box_collection_customer_id_fkey` FOREIGN KEY (`customer_id`) REFERENCES `Customer_details`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
