import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceManagementModuleBase } from "./base/serviceManagement.module.base";
import { ServiceManagementService } from "./serviceManagement.service";
import { ServiceManagementController } from "./serviceManagement.controller";
import { ServiceManagementResolver } from "./serviceManagement.resolver";

@Module({
  imports: [ServiceManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceManagementController],
  providers: [ServiceManagementService, ServiceManagementResolver],
  exports: [ServiceManagementService],
})
export class ServiceManagementModule {}
