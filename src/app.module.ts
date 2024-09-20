import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.services';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
