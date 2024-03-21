import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, UseGuards, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Response } from 'express';

import { ImagesService } from './images.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { editFileName, filterImageFile } from 'src/utils/file-uploading.utils';
import { CreateImageDto } from './dto/create-image.dto';
import { AccessTokenGuard } from 'src/common/guards/access-token.guard';
import { RequestWithUser } from 'src/common/interfaces/request-with-user.interface';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @UseGuards(AccessTokenGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: editFileName,
    }),
    fileFilter: filterImageFile,
  }))
  create(@Body() createImageDto: CreateImageDto, @UploadedFile() file: Express.Multer.File, @Req() req: RequestWithUser) {
    const { userId } = req.user;
    const { filename } = file;

    createImageDto.userId = userId;
    createImageDto.filename = filename;

    return this.imagesService.create(createImageDto);
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
