import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerTypeServiceBase } from "./base/customerType.service.base";

@Injectable()
export class CustomerTypeService extends CustomerTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
