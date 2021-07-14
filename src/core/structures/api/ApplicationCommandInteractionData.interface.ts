import { snowflake } from './snowflake.type';
import { ApplicationCommandInteractionDataOption } from './ApplicationCommandInteractionDataOption.interface';

/** The command data sent along with an interaction */
export interface ApplicationCommandInteractionData {
  id: snowflake;
  name: string;
  resolved?: Record<string, unknown>;
  options?: ApplicationCommandInteractionDataOption[];
}
