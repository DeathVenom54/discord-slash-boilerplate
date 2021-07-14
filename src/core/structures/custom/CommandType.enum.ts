/**
 * The type of command
 * Global: A global application command
 * Guild: A command for a particular guild
 * AllGuild: A command available in all guilds as a guild command
 */
export enum CommandType {
    Global = 'global',
    SingleGuild = 'guild',
    AllGuild = 'global_guild'
}