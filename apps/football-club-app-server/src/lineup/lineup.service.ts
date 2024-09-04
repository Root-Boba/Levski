import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LineupServiceBase } from "./base/lineup.service.base";

@Injectable()
export class LineupService extends LineupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
