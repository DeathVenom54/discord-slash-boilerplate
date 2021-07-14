import fs from "fs";
import path from "path";
import Command from "../classes/Command";
import req from "../utils/req";
import { ApplicationCommand } from "../structures/api/ApplicationCommand.interface";
import { CommandType } from "../structures/custom/CommandType.enum";
import RegisterApplicationCommand from "../api/ApplicationCommand/RegisterApplicationCommand";
import RemoveApplicationCommand from "../api/ApplicationCommand/RemoveApplicationCommand";

const commands: Command[] = [];

/**
 * Read the commands from the commands directory and register them to the guild
 * @param guildId The ID of the guild to register the commands
 * @param applicationId The Application ID of the bot
 */
const setupCommands = async (guildId: string, applicationId: string) => {
  // get commands from commands directory
  const commandFiles = fs
    .readdirSync(path.join(__dirname, "../commands"))
    .filter((f) => f.endsWith(".js"));
  for (const file of commandFiles) {
    const command = await import(`../commands/${file}`);
    commands.push(command.default);
  }
  // register commands
  commands.forEach((command) => {
    switch (command.type) {
      case CommandType.Global:
        RegisterApplicationCommand(command.toJson());
        break;
      case CommandType.AllGuild:
        RegisterApplicationCommand(command.toJson(), guildId);
        break;
      case CommandType.SingleGuild:
        if (guildId === command.guildId)
          RegisterApplicationCommand(command.toJson(), guildId);
    }
  });

  // unregister other commands
  const registeredGlobalCommands = (await req.GET(
    `/applications/${applicationId}/commands`
  )) as ApplicationCommand[];
  const registeredGuildCommands = (await req.GET(
    `/applications/${applicationId}/guilds/${guildId}/commands`
  )) as ApplicationCommand[];
  // remove global commands
  for (const command of registeredGlobalCommands) {
    const found = commands.find(
      (c) => c.name === command.name && c.type === CommandType.Global
    );
    if (!found) RemoveApplicationCommand(command.id);
  }
  //remove guild commands
  for (const command of registeredGuildCommands) {
    const found = commands.find(
      (c) =>
        c.name === command.name &&
        [CommandType.SingleGuild, CommandType.AllGuild].includes(c.type)
    );
    if (!found) RemoveApplicationCommand(command.id);
  }
};

export default setupCommands;

/** Get the registered commands */
export const getCommands = () => commands;
