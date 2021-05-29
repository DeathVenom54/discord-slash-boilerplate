import { bitFlags } from './bitFlags.type';
import { Embed } from './Embed.interface';

export interface InteractionResponseCallbackData {
  content?: string;
  embeds?: Embed[];
  tts?: boolean;
  allowed_mentions?: any;
  flags?: bitFlags;
}
