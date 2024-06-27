import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServiceRequestModuleBase } from "./base/serviceRequest.module.base";
import { ServiceRequestService } from "./serviceRequest.service";
import { ServiceRequestController } from "./serviceRequest.controller";
import { ServiceRequestResolver } from "./serviceRequest.resolver";

@Module({
  imports: [ServiceRequestModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService, ServiceRequestResolver],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {}
