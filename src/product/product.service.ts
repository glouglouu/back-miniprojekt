import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService){}
  
  async create(createProductDto: Prisma.ProductsCreateInput) {
    return this.databaseService.products.create({
      data: createProductDto
    })
  }

  async findAll() {
    return this.databaseService.products.findMany()
  }

  async findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  async update(id: number, updateProductDto: Prisma.ProductsUpdateInput) {
    return `This action updates a #${id} product`;
  }

  async remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
