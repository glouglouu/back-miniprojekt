import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { CreateProductDto } from 'src/dto/creat-product.dto';
import { UpdateProductDto } from 'src/dto/update-product.dto';
@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: CreateProductDto) {
    return this.databaseService.products.create({
      data: createProductDto,
    });
  }

  async findAll() {
    return this.databaseService.products.findMany();
  }

  async findOne(id: number) {
    const product = await this.databaseService.products.findUnique({
      where: { id },
    });
    
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.databaseService.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.databaseService.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    const product = await this.databaseService.products.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return this.databaseService.products.delete({
      where: { id },
    });
  }
}
