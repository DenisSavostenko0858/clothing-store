import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClothesModule } from './clothes/clothes.module';
import { LoggerMiddlewareClothes } from './middleware/logger';
import { BrandModule } from './brand/brand.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [ClothesModule, BrandModule, CategoryModule],
})

export class AppModule implements NestModule{ 
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(LoggerMiddlewareClothes).forRoutes('clothes');
  }
}
