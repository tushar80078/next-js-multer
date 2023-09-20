import { trialControllers } from "@/backend/controllers/trailController";
import { trialMiddleware } from "@/backend/middlewares/trailMiddleware";
import { anotherMiddleware } from "@/backend/middlewares/anotherMiddleware";
import { anotherControllers } from "@/backend/controllers/anotherController";
import { createEdgeRouter,createRouter } from "next-connect";
import { multerMiddleware } from "@/backend/middlewares/multer";



const router = createRouter();


router.post( multerMiddleware, trialControllers);

//router.get(anotherMiddleware,anotherControllers);


export async function GET(request, ctx) {
    return router.run(request, ctx);
  }
  
  export async function POST(request, ctx) {
    return router.run(request, ctx);
  }

  
module.exports = { GET, POST };



