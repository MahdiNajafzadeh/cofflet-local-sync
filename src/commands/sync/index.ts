import { Command } from "commander";
import { sync } from "./sync"

export function addSyncCommand(program: Command) {
	program.command(`sync`).action(() => {

    })
}
