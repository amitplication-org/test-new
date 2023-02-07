import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CustomerTypeResolverBase } from "./base/customerType.resolver.base";
import { CustomerType } from "./base/CustomerType";
import { CustomerTypeService } from "./customerType.service";

@graphql.Resolver(() => CustomerType)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CustomerTypeResolver extends CustomerTypeResolverBase {
  constructor(
    protected readonly service: CustomerTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
