import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";




// export const POST = async (request) => {
//     try {
//         const body = await request.json();
//         const { name } = body

//         const newMovie = await prisma.movies.create({
//             data: {
//                 name: name,
//             }
//         })
//         return NextResponse.json(newMovie);
//     } catch (error) {
//         return NextResponse.json({ message: "POST error", error }, { status: 500 })

//     }
// }

export const GET = async () => {
    try {
        const movies = await prisma.movies.findMany();
        return NextResponse.json(movies);
    } catch (error) {
        return NextResponse.json({ message: "GET error", error }, { status: 500 })
    }
}


