import { Collection } from "discord.js";

declare module "discord.js" {
    export interface Client {
        commands: Collection<unknown, Command>
    }

    export interface Command {
        name: string,
        description: string,
        execute: (message: CommandInteraction, args: string[]) => void 
    }
}