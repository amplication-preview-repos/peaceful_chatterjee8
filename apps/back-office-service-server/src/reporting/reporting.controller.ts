import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReportingService } from "./reporting.service";
import { ReportingControllerBase } from "./base/reporting.controller.base";

@swagger.ApiTags("reportings")
@common.Controller("reportings")
export class ReportingController extends ReportingControllerBase {
  constructor(
    protected readonly service: ReportingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
