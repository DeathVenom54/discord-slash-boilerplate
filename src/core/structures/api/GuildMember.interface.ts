import { snowflake } from './snowflake.type';
import { timestamp } from './timestamp.type';
import { User } from './User.interface';

/** A member in a guild */
export interface GuildMember {
  user?: User;
  nick?: string;
  roles: snowflake[];
  joined_at: timestamp;
  premium_since?: timestamp | null;
  deaf: boolean;
  mute: boolean;
  pending?: boolean;
  permissions?: string;
}
