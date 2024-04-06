import { Injectable } from '@nestjs/common';

import { CreateImageDto } from './dto/create-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}
  async create(createImageDto: CreateImageDto) {
    return this.prisma.image.create({
      data: createImageDto,
      include: { author: true },
    });
  }

  findAll() {
    return this.prisma.image.findMany({
      include: {
        author: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.image.findUnique({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.image.delete({ where: { id } });
  }
}
