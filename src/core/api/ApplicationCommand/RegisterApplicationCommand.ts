import { ApplicationCommand } from '../../structures/ApplicationCommand.interface';
import { snowflake } from '../../structures/snowflake.type';
import { applicationId } from '../../../config.json';
import req from '../../utils/req';

/**
 * Registers a Global/Guild Slash Command
 * @param {ApplicationCommand} command Application Command Object
 * @param {snowflake} guildId Guild ID(For Guild Commands only)
 */
export default async function RegisterApplicationCommand(
  command: ApplicationCommand,
  guildId?: snowflake
): Promise<ApplicationCommand | null> {
  if (!guildId) {
    return await req.POST(
      `/applications/${applicationId}/commands`,
      command
    );
  } else {
    return await req.POST(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      command
    );
  }
}
