import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


export const GET = async () => {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ message: "GET error", error }, { status: 500 })
    }
}