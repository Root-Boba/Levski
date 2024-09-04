import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LineupService } from "./lineup.service";
import { LineupControllerBase } from "./base/lineup.controller.base";

@swagger.ApiTags("lineups")
@common.Controller("lineups")
export class LineupController extends LineupControllerBase {
  constructor(protected readonly service: LineupService) {
    super(service);
  }
}
