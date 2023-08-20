import { MigrationInterface, QueryRunner } from "typeorm";

export class CustomersEntity1692564593180 implements MigrationInterface {
    name = 'CustomersEntity1692564593180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "cpf" text NOT NULL, "email" text NOT NULL, "favoriteColor" text NOT NULL, "notes" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_413de651cfd9c576b99cec83fd3" UNIQUE ("cpf"), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customers"`);
    }

}
