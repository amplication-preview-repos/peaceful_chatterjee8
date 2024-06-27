import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReportingModuleBase } from "./base/reporting.module.base";
import { ReportingService } from "./reporting.service";
import { ReportingController } from "./reporting.controller";
import { ReportingResolver } from "./reporting.resolver";

@Module({
  imports: [ReportingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReportingController],
  providers: [ReportingService, ReportingResolver],
  exports: [ReportingService],
})
export class ReportingModule {}
