import { Request } from 'express';
import { randomUUID } from 'crypto';
import { extname } from 'path';

export const filterImageFile = (
  _req: Request,
  file: Express.Multer.File,
  callback: any,
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }

  callback(null, true);
};

export const editFileName = (
  req: Request,
  file: Express.Multer.File,
  callback: any,
) => {
  const fileExtName = extname(file.originalname);
  const randomName = randomUUID();

  callback(null, `${randomName}${fileExtName}`);
};
