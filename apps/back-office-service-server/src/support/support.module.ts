import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SupportModuleBase } from "./base/support.module.base";
import { SupportService } from "./support.service";
import { SupportController } from "./support.controller";
import { SupportResolver } from "./support.resolver";

@Module({
  imports: [SupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [SupportController],
  providers: [SupportService, SupportResolver],
  exports: [SupportService],
})
export class SupportModule {}
