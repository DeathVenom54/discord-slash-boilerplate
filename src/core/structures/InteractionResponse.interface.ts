import { InteractionResponseType } from './InteractionResponseType.enum';
import { InteractionResponseCallbackData } from './InteractionResponseCallbackData.interface';

export interface InteractionResponse {
  type: InteractionResponseType;
  data?: InteractionResponseCallbackData;
}
