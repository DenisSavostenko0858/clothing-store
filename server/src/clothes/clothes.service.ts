import { Injectable } from '@nestjs/common';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { Clothes, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClothesService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(createClotheDto: CreateClotheDto) {
    return this.prisma.clothes.create({
      data: createClotheDto
    });
  }

  findAll(){
    return this.prisma.clothes.findMany();
  }

  findOne(id: number) {
    return this.prisma.clothes.findUnique({
      where: {id: id}
    });
  }

  update(id: number, updateClotheDto: UpdateClotheDto) {
    //  return this.Shoes[id] + ' Изменена';
  }

  remove(id: number) {
    return this.prisma.clothes.delete({
      where: {id: id}
    });
  }
}
