import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReportingServiceBase } from "./base/reporting.service.base";

@Injectable()
export class ReportingService extends ReportingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
