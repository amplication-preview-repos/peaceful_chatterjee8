import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceManagementServiceBase } from "./base/serviceManagement.service.base";

@Injectable()
export class ServiceManagementService extends ServiceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
