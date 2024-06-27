import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MonitoringServiceBase } from "./base/monitoring.service.base";

@Injectable()
export class MonitoringService extends MonitoringServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
