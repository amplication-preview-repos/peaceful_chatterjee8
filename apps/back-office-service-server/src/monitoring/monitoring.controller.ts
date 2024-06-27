import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MonitoringService } from "./monitoring.service";
import { MonitoringControllerBase } from "./base/monitoring.controller.base";

@swagger.ApiTags("monitorings")
@common.Controller("monitorings")
export class MonitoringController extends MonitoringControllerBase {
  constructor(
    protected readonly service: MonitoringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
