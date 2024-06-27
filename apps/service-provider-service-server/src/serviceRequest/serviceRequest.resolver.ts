import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServiceRequestResolverBase } from "./base/serviceRequest.resolver.base";
import { ServiceRequest } from "./base/ServiceRequest";
import { ServiceRequestService } from "./serviceRequest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServiceRequest)
export class ServiceRequestResolver extends ServiceRequestResolverBase {
  constructor(
    protected readonly service: ServiceRequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
