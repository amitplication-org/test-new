import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerTypeService } from "./customerType.service";
import { CustomerTypeControllerBase } from "./base/customerType.controller.base";

@swagger.ApiTags("customerTypes")
@common.Controller("customerTypes")
export class CustomerTypeController extends CustomerTypeControllerBase {
  constructor(
    protected readonly service: CustomerTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
