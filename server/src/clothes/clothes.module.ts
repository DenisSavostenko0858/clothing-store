import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ClothesController],
  providers: [ClothesService, PrismaService],
})
export class ClothesModule {}
