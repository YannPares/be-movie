
import { NextApiRequest } from 'next';
import { mongoClient } from '../../libs/db'
import { NextResponse} from "next/server"

export async function POST(req: NextApiRequest) {
    try {
        const { name, image, score, genres, user } = req.body;
        console
    
        // Validaciones de datos
        if (!name || !image || !score || !genres || !user || !user.id) {
          return new NextResponse("Missing or invalid fields in the request", { status: 400 });
        }
    
        const movieData = {
          name,
          image,
          score,
          genres,
          user,
        };
    
        const movie = await mongoClient.movies.create({
          data: movieData,
        });
    
        return NextResponse.json(movie, { status: 200 });
    
      } catch (error) {
        console.error("Error creating movie:", error);
        return new NextResponse("Internal server error, movie was not created", { status: 500 });
      }
}




