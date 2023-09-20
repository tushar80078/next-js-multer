import multer from "multer";

const storage = multer.diskStorage({
  destination: "./uploads",

  filename: function () {
    return "hello.png";
  },
});

const upload = multer({
  storage,
  limits: { fieldSize: 1024 * 1024 }
});

console.log( "herer",upload.single('file'));

export const multerMiddleware = upload.single('file');
