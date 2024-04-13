CREATE TABLE IF NOT EXISTS "travels" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"description" varchar(256),
	"startDate" date,
	"endDate" date
);
