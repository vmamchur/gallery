import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

import { ImagesService } from './images.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }))
  upload(@UploadedFile() file: Express.Multer.File) {
    const response = {
      originalname: file.originalname,
      filename: file.filename,
    };

    return response;
  }

  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':imgpath')
  findOne(@Param('imgpath') image: string, @Res() res: Response) {
    return res.sendFile(image, { root: process.env.UPLOAD_PATH });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(+id);
  }
}
