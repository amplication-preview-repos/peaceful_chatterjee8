import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MonitoringResolverBase } from "./base/monitoring.resolver.base";
import { Monitoring } from "./base/Monitoring";
import { MonitoringService } from "./monitoring.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Monitoring)
export class MonitoringResolver extends MonitoringResolverBase {
  constructor(
    protected readonly service: MonitoringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
