import multer from "multer";
import sharp from "sharp";

// determine if uploaded file is an image
const isUploadedFileAnImage = (_req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

// file storage location and filename
// This can be used if we are not resizing user uploaded images

// const photoStorageLocation = multer.diskStorage({
//   destination: (_req, _file, cb) => {
//     cb(null, "public/img/users");
//   },
//   filename: (req: any, file, cb) => {
//     const ext = file.mimetype.split("/")[1];
//     cb(null, `user-${req.user.userId}-${Date.now()}.${ext}`);
//   }
// });

// image file stored in server memory rather than disk because
// we need to further process the image - image resize
const photoStorageLocation = multer.memoryStorage();

const upload = multer({
  storage: photoStorageLocation,
  fileFilter: isUploadedFileAnImage
});

export const uploadUserPhoto = upload.single("photo");

// resize incoming photo
export const resizeUserPhoto = async (req: any, _res: any, next: any) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.userId}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
};
