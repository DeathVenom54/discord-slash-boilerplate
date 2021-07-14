import { ApplicationCommand } from '../../structures/api/ApplicationCommand.interface';
import { snowflake } from '../../structures/api/snowflake.type';
import { applicationId } from '../../../config.json';
import req from '../../utils/req';

/**
 * Returns a list of all Global Commands or Guild Commands of a specific Guild
 * @param {snowflake} guildId Guild ID(For getting Guild Commands only)
 */
export default async function ListApplicationCommand(
  guildId?: snowflake
): Promise<ApplicationCommand[] | null> {
  if (guildId === null) {
    return await req.GET(`/applications/${applicationId}/commands`);
  } else {
    return await req.GET(`/applications/${applicationId}/guilds/${guildId}/commands`);
  }
}
