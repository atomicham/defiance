
import { IGame } from "./IGame";
import { Player } from "./player";
import { GameOptions } from "./game-options";
import { GamePlayData } from "./game-play-data";
import { IIndexable } from "./IIndexable";

export class Game implements IGame, IIndexable {
    id?: string | number;

    name: string;

    numberOfPlayers: number;

    createdBy: string;

    roles: string[] = [];

    players: string[] = [];

    items: string[] = [];

    options: GameOptions = new GameOptions();

    isPlayerInGame(player: Player): boolean {
        return this.players && this.players.indexOf(player.name) >= 0;
    }
}