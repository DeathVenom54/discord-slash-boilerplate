import { InteractionType } from './InteractionType.enum';

/** An option of the command data sent along with an interaction */
export interface ApplicationCommandInteractionDataOption {
  name: string;
  type: InteractionType;
  value: any;
  options?: ApplicationCommandInteractionDataOption[];
}
