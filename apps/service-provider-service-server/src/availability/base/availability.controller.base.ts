/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AvailabilityService } from "../availability.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AvailabilityCreateInput } from "./AvailabilityCreateInput";
import { Availability } from "./Availability";
import { AvailabilityFindManyArgs } from "./AvailabilityFindManyArgs";
import { AvailabilityWhereUniqueInput } from "./AvailabilityWhereUniqueInput";
import { AvailabilityUpdateInput } from "./AvailabilityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AvailabilityControllerBase {
  constructor(
    protected readonly service: AvailabilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Availability })
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAvailability(
    @common.Body() data: AvailabilityCreateInput
  ): Promise<Availability> {
    return await this.service.createAvailability({
      data: data,
      select: {
        createdAt: true,
        date: true,
        end: true,
        id: true,
        provider: true,
        start: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Availability] })
  @ApiNestedQuery(AvailabilityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async availabilities(
    @common.Req() request: Request
  ): Promise<Availability[]> {
    const args = plainToClass(AvailabilityFindManyArgs, request.query);
    return this.service.availabilities({
      ...args,
      select: {
        createdAt: true,
        date: true,
        end: true,
        id: true,
        provider: true,
        start: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async availability(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    const result = await this.service.availability({
      where: params,
      select: {
        createdAt: true,
        date: true,
        end: true,
        id: true,
        provider: true,
        start: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAvailability(
    @common.Param() params: AvailabilityWhereUniqueInput,
    @common.Body() data: AvailabilityUpdateInput
  ): Promise<Availability | null> {
    try {
      return await this.service.updateAvailability({
        where: params,
        data: data,
        select: {
          createdAt: true,
          date: true,
          end: true,
          id: true,
          provider: true,
          start: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Availability })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAvailability(
    @common.Param() params: AvailabilityWhereUniqueInput
  ): Promise<Availability | null> {
    try {
      return await this.service.deleteAvailability({
        where: params,
        select: {
          createdAt: true,
          date: true,
          end: true,
          id: true,
          provider: true,
          start: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
