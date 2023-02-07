import { Module } from "@nestjs/common";
import { CustomerTypeModuleBase } from "./base/customerType.module.base";
import { CustomerTypeService } from "./customerType.service";
import { CustomerTypeController } from "./customerType.controller";
import { CustomerTypeResolver } from "./customerType.resolver";

@Module({
  imports: [CustomerTypeModuleBase],
  controllers: [CustomerTypeController],
  providers: [CustomerTypeService, CustomerTypeResolver],
  exports: [CustomerTypeService],
})
export class CustomerTypeModule {}
