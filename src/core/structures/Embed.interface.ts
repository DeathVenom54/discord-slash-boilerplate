import { timestamp } from './timestamp.type';
import { EmbedAuthor } from './EmbedAuthor.interface';
import { EmbedField } from './EmbedField.interface';
import { EmbedFooter } from './EmbedFooter.interface';
import { EmbedImage } from './EmbedImage.interface';
import { EmbedProvider } from './EmbedProvider.interface';
import { EmbedThumbnail } from './EmbedThumbnail.interface';
import { EmbedVideo } from './EmbedVideo.interface';
import { EmbedType } from './EmbedType.enum';

/** Object representing a Discord Embed*/
export interface Embed {
  title?: string;
  type?: EmbedType;
  description?: string;
  url?: string;
  timestamp?: timestamp;
  color?: number;
  footer?: EmbedFooter;
  image?: EmbedImage;
  thumbnail?: EmbedThumbnail;
  video?: EmbedVideo;
  provider?: EmbedProvider;
  author?: EmbedAuthor;
  fields?: EmbedField[];
}
