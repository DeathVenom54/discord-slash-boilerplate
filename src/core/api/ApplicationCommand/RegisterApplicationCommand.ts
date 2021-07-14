import { ApplicationCommand } from "../../structures/api/ApplicationCommand.interface";
import { snowflake } from "../../structures/api/snowflake.type";
import { applicationId } from "../../../config.json";
import req from "../../utils/req";

/**
 * Registers a Global/Guild Slash Command
 * @param {ApplicationCommand} command Application Command Object
 * @param {snowflake} guildId Guild ID(For Guild Commands only)
 */
export default async (
  command: ApplicationCommand,
  guildId?: snowflake
): Promise<ApplicationCommand | null> => {
  if (guildId) {
    // register as guild command
    return await req.POST(
      `/applications/${applicationId}/guilds/${guildId}/commands`,
      command
    );
  }

  // register as global command
  return await req.POST(`/applications/${applicationId}/commands`, command);
};
