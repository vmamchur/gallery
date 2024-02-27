import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image, ImageDocument } from './schemas/image.schema';

@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image.name) private imageModel: Model<ImageDocument>) {}
  async create(createImageDto: CreateImageDto): Promise<ImageDocument> {
    const createdImage = new this.imageModel(createImageDto);

    return createdImage.save();
  }

  findAll() {
    return this.imageModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
