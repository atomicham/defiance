
import { BaseComponent } from "../BaseComponent";
import { Roles, GameData } from "../../../../../shared/constants";
import { Game, GamePlayData, Role, Faction } from "../../../../../shared/models";

export class PercivalRoleComponent extends BaseComponent {
    constructor() {
        super();
    }

    setupGame(game: Game, gamePlayData: GamePlayData) {
        let goodGenericPlayers: string[] = [];

        for (let playerName in gamePlayData.assignedRoles) {
            let role = gamePlayData.assignedRoles[playerName];
            if (role.faction === Faction.Good && role.name === Roles.GenericGood.name)
                goodGenericPlayers.push(playerName);
        }

        if (goodGenericPlayers.length > 0) {
            let random: number = Math.floor(Math.random() * goodGenericPlayers.length);
            gamePlayData.assignedRoles[goodGenericPlayers[random]] = Roles.Percival;
        }

        return gamePlayData;
    }

    setupOath(gamePlayData: GamePlayData): GamePlayData {
        let knownPlayers: string[] = [];
        let percivalPlayer: string;

        for (let player in gamePlayData.assignedRoles) {
            let role: Role = gamePlayData.assignedRoles[player];

            if (role.name === Roles.Morgana.name || role.name === Roles.Merlin.name)
                knownPlayers.push(player);

            if (role.name === Roles.Percival.name)
                percivalPlayer = player;
        }

        gamePlayData.oaths[percivalPlayer] = knownPlayers;

        return gamePlayData;
    }
}