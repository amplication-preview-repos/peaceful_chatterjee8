import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceManagementService } from "./serviceManagement.service";
import { ServiceManagementControllerBase } from "./base/serviceManagement.controller.base";

@swagger.ApiTags("serviceManagements")
@common.Controller("serviceManagements")
export class ServiceManagementController extends ServiceManagementControllerBase {
  constructor(
    protected readonly service: ServiceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
