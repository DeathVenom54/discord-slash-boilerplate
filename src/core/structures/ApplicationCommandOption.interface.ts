import { ApplicationCommandOptionType } from './ApplicationCommandOptionType.enum';
import { ApplicationCommandOptionChoice } from './ApplicationCommandOptionChoice.interface';

export interface ApplicationCommandOption {
  name: string;
  description: string;
  type: ApplicationCommandOptionType;
  required?: boolean;
  choices?: ApplicationCommandOptionChoice[];
  options?: ApplicationCommandOption[];
}
