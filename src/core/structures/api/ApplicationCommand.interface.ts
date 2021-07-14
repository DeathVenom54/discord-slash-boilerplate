import { snowflake } from './snowflake.type';
import { ApplicationCommandOption } from './ApplicationCommandOption.interface';

export interface ApplicationCommand {
  id: snowflake;
  application_id: snowflake;
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  default_permission?: boolean;
}
