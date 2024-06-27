import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MonitoringModuleBase } from "./base/monitoring.module.base";
import { MonitoringService } from "./monitoring.service";
import { MonitoringController } from "./monitoring.controller";
import { MonitoringResolver } from "./monitoring.resolver";

@Module({
  imports: [MonitoringModuleBase, forwardRef(() => AuthModule)],
  controllers: [MonitoringController],
  providers: [MonitoringService, MonitoringResolver],
  exports: [MonitoringService],
})
export class MonitoringModule {}
