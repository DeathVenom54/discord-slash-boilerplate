import { ApplicationCommand } from '../../structures/ApplicationCommand.interface';
import { snowflake } from '../../structures/snowflake.type';
import { applicationId } from '../../../config.json';
import req from '../../utils/req';

/**
 * Edits a global or guild command
 * @param commandId
 * @param command
 * @param guildId
 * @returns The updated ApplicationCommand or null if there's an error
 */
export default async function PatchApplicationCommand(
  commandId: snowflake,
  command: ApplicationCommand,
  guildId?: snowflake
): Promise<ApplicationCommand | null> {
  if (!guildId) {
    const existingComm = await req.GET(
      `/applications/${applicationId}/commands/${commandId}`
    );
    if (!existingComm)
      throw new Error(`The global command with id ${commandId} doesn't exist`);

    return await req.POST(
      `/applications/${applicationId}/commands/${commandId}`,
      command
    );
  } else {
    if (
      await req.GET(
        `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`
      )
    )
      throw new Error(`The guild command with id ${commandId} doesn't exist`);
    return await req.POST(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`,
      command
    );
  }
}
