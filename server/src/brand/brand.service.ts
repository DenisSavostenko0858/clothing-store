import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({
      data: createBrandDto
      });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: number) {
    return this.prisma.brand.findUnique({
      where: {id: id}
    });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    // return `This action updates a #${id} brand`;
  }

  remove(id: number) {
    return this.prisma.brand.delete({
      where: {id: id}
    });
  }
}
