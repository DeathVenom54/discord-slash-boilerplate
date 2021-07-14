import { snowflake } from "../../structures/api/snowflake.type";
import req from "../../utils/req";
import { applicationId } from "../../../config.json";

/**
 * Removes a Global Command or Guild Command of a specific Guild
 * @param commandId ID of Command to be Removed
 * @param guildId Guild ID(For getting Guild Commands only)
 */
export default async function RemoveApplicationCommand(
  commandId: snowflake,
  guildId?: string
): Promise<void> {
  if (guildId) {
    return await req.DELETE(
      `/applications/${applicationId}/guilds/${guildId}/commands/${commandId}`
    );
  }

  return await req.DELETE(
    `/applications/${applicationId}/commands/${commandId}`
  );
}
