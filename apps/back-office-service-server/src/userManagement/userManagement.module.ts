import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserManagementModuleBase } from "./base/userManagement.module.base";
import { UserManagementService } from "./userManagement.service";
import { UserManagementController } from "./userManagement.controller";
import { UserManagementResolver } from "./userManagement.resolver";

@Module({
  imports: [UserManagementModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserManagementController],
  providers: [UserManagementService, UserManagementResolver],
  exports: [UserManagementService],
})
export class UserManagementModule {}
