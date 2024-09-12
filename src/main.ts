import {  createCommand } from "commander";

const program = createCommand();
/**
 * Add Info for CLI App
 */
program.name(`cofflet-local-sync`);
program.description(`sync cloudflare DNS with SSH config & Host file`);


program.parse(process.argv);