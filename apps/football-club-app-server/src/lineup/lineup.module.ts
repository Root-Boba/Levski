import { Module } from "@nestjs/common";
import { LineupModuleBase } from "./base/lineup.module.base";
import { LineupService } from "./lineup.service";
import { LineupController } from "./lineup.controller";
import { LineupResolver } from "./lineup.resolver";

@Module({
  imports: [LineupModuleBase],
  controllers: [LineupController],
  providers: [LineupService, LineupResolver],
  exports: [LineupService],
})
export class LineupModule {}
