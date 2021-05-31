import { ApplicationCommand } from '../../structures/ApplicationCommand.interface';
import { snowflake } from '../../structures/snowflake.type';
import { applicationId } from '../../../config.json';
import req from '../../utils/req';

/**
 * Overwrites the global or guild commands
 * @param {ApplicationCommand[]} commands Array of Commands Write over Existing Commands
 * @param {snowflake} guildId Guild ID(For getting Guild Commands only)
 */
export default async function BulkOverwriteApplicationCommands(
  commands: ApplicationCommand[],
  guildId?: snowflake
): Promise<ApplicationCommand[]> {
  if (guildId === null) {
    return await req.POST(
      `/applications/${applicationId}/commands`,
      commands
    );
  } else {
    return await req.POST(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      commands
    );
  }
}
