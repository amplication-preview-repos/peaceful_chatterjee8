import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceManagementResolverBase } from "./base/serviceManagement.resolver.base";
import { ServiceManagement } from "./base/ServiceManagement";
import { ServiceManagementService } from "./serviceManagement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceManagement)
export class ServiceManagementResolver extends ServiceManagementResolverBase {
  constructor(
    protected readonly service: ServiceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
