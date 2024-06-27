import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserManagementService } from "./userManagement.service";
import { UserManagementControllerBase } from "./base/userManagement.controller.base";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController extends UserManagementControllerBase {
  constructor(
    protected readonly service: UserManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
