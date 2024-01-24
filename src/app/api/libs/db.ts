import { PrismaClient as MongoClient } from '@prisma/client';
import { Prisma } from '@prisma/client';
import { DefaultArgs } from "@prisma/client/runtime/library";

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();