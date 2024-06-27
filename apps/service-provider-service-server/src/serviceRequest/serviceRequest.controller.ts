import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceRequestService } from "./serviceRequest.service";
import { ServiceRequestControllerBase } from "./base/serviceRequest.controller.base";

@swagger.ApiTags("serviceRequests")
@common.Controller("serviceRequests")
export class ServiceRequestController extends ServiceRequestControllerBase {
  constructor(
    protected readonly service: ServiceRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
