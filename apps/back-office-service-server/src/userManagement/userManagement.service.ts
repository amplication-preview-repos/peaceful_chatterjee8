import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserManagementServiceBase } from "./base/userManagement.service.base";

@Injectable()
export class UserManagementService extends UserManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
