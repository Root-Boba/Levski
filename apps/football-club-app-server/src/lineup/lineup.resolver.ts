import * as graphql from "@nestjs/graphql";
import { LineupResolverBase } from "./base/lineup.resolver.base";
import { Lineup } from "./base/Lineup";
import { LineupService } from "./lineup.service";

@graphql.Resolver(() => Lineup)
export class LineupResolver extends LineupResolverBase {
  constructor(protected readonly service: LineupService) {
    super(service);
  }
}
