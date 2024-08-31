import { Sequelize } from "sequelize";
import { PlayerTable } from "../data/model/player.model";
import { BorrowingRuleTable } from "../data/model/borrowingRule.model";
import { CompetitionTable } from "../data/model/competition.model";
import { DivisionTable } from "../data/model/division.model";
import { PlayerBorrowingTable } from "../data/model/playerBorrowing.model";
import { FinalsEligibilityRuleTable } from "../data/model/finalsEligibilityRule.model";
import { PlayerTeamAssociationTable } from "../data/model/playerTeamAssociation.model";
import { TeamTable } from "../data/model/team.model";

export const tablesConnection = (databaseConnection: Sequelize) => {
  PlayerTable(databaseConnection);
  BorrowingRuleTable(databaseConnection);
  CompetitionTable(databaseConnection);
  DivisionTable(databaseConnection);
  PlayerBorrowingTable(databaseConnection);
  FinalsEligibilityRuleTable(databaseConnection);
  PlayerTeamAssociationTable(databaseConnection);
  TeamTable(databaseConnection);
};
