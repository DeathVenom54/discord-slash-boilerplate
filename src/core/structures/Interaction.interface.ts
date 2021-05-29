import { snowflake } from './snowflake.type';
import { InteractionType } from './InteractionType.enum';
import { ApplicationCommandInteractionData } from './ApplicationCommandInteractionData.interface';
import { GuildMember } from './GuildMember.interface';
import { User } from './User.interface';

/** The object sent when an interaction is created */
export interface Interaction {
  id: snowflake;
  application_id: snowflake;
  type: InteractionType;
  data?: ApplicationCommandInteractionData;
  guild_id?: snowflake;
  channel_id?: snowflake;
  member?: GuildMember;
  user?: User;
  token: string;
  version: number;
}
