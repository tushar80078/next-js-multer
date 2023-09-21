import { trialControllers } from "@/backend/controllers/trailController";
import { trialMiddleware } from "@/backend/middlewares/trailMiddleware";
import { anotherMiddleware } from "@/backend/middlewares/anotherMiddleware";
import { anotherControllers } from "@/backend/controllers/anotherController";
import { createEdgeRouter,createRouter } from "next-connect";
import { multerUpload } from "@/backend/middlewares/multer";
import { config } from "./config";
import multer from "multer";



const router = createEdgeRouter();

// router.use(multerUpload.single('file'));


const upload = multer({ // Disk Storage option
  storage: multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    console.log("Atilitst")
    return cb(null, file.originalname)},
  }),
  });

  router.use(upload.single('file'));

router.post( upload.single('file'), trialControllers);

//router.get(anotherMiddleware,anotherControllers);


export async function GET(request, ctx) {
  
    return router.run(request, ctx);
  }
  
  export async function POST(request, ctx) {
    return router.run(request, ctx);
  }

  
module.exports = {...config, GET, POST };



