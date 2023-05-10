import { Module } from "@nestjs/common";
import { ProductController } from "./products.controler";
import { ProductService } from "./products.service";

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})

export class ProductsModule {}