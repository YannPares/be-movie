
import { NextApiRequest, NextApiResponse } from 'next';
import { mongoClient } from '../../libs/db'

import { NextResponse } from "next/server"

export async function POST(req: NextApiRequest) {
    try {
        const {name, image, score, genres, user} = req.body

       const movie = await mongoClient.movies.create({
            data: {
                name,
                image,
                score,
                genres,
                user,
                
            }
        })
        return NextResponse.json(movie, {status: 200})
        
    } catch (error) {
        return new NextResponse("Internal server error, movie was not created" , { status: 500 })
    }
}




