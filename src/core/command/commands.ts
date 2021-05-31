import fs from 'fs';
import path from 'path';
import Command from '../classes/Command';
import req from '../utils/req';
import { ApplicationCommand } from '../structures/ApplicationCommand.interface';

const commands: Command[] = [];

/**
 * Read the commands from the commands directory and register them to the guild
 * @param guildId The ID of the guild to register the commands
 * @param applicationId The Application ID of the bot
 */
const setupCommands = async (guildId: string, applicationId: string) => {
  // get commands from commands directory
  const commandFiles = fs
    .readdirSync(path.join(__dirname, '../commands'))
    .filter(f => f.endsWith('.js'));
  for (const file of commandFiles) {
    const command = await import(`../commands/${file}`);
    commands.push(command.default);
  }
  // register commands
  commands.forEach(command => {
    req.POST(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      command
    );
  });
  // unregister other commands
  const registeredCommands = await req.GET(
    `/applications/${applicationId}/guilds/${guildId}/commands`
  );
  for (const rc of (registeredCommands as ApplicationCommand[])) {
    const foundExistingCommand = commands.find(c => c.name === rc.name);
    if (!foundExistingCommand) await req.DELETE(
        `/applications/${applicationId}/guilds/${guildId}/commands/${rc.id}`
    );
  }
};

export default setupCommands;

/** Get the registered commands */
export const getCommands = () => commands;
