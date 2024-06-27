/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Support } from "./Support";
import { SupportCountArgs } from "./SupportCountArgs";
import { SupportFindManyArgs } from "./SupportFindManyArgs";
import { SupportFindUniqueArgs } from "./SupportFindUniqueArgs";
import { CreateSupportArgs } from "./CreateSupportArgs";
import { UpdateSupportArgs } from "./UpdateSupportArgs";
import { DeleteSupportArgs } from "./DeleteSupportArgs";
import { SupportService } from "../support.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Support)
export class SupportResolverBase {
  constructor(
    protected readonly service: SupportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async _supportsMeta(
    @graphql.Args() args: SupportCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Support])
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "any",
  })
  async supports(
    @graphql.Args() args: SupportFindManyArgs
  ): Promise<Support[]> {
    return this.service.supports(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Support, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "read",
    possession: "own",
  })
  async support(
    @graphql.Args() args: SupportFindUniqueArgs
  ): Promise<Support | null> {
    const result = await this.service.support(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "create",
    possession: "any",
  })
  async createSupport(
    @graphql.Args() args: CreateSupportArgs
  ): Promise<Support> {
    return await this.service.createSupport({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "update",
    possession: "any",
  })
  async updateSupport(
    @graphql.Args() args: UpdateSupportArgs
  ): Promise<Support | null> {
    try {
      return await this.service.updateSupport({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Support)
  @nestAccessControl.UseRoles({
    resource: "Support",
    action: "delete",
    possession: "any",
  })
  async deleteSupport(
    @graphql.Args() args: DeleteSupportArgs
  ): Promise<Support | null> {
    try {
      return await this.service.deleteSupport(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
