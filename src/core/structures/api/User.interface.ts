import { bitFlags } from './bitFlags.type';
import { snowflake } from './snowflake.type';
import { PremiumType } from './PremiumType.enum';

/** A user account on Discord */
export interface User {
  id: snowflake;
  username: string;
  discriminator: string;
  avatar: string | null;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  locale?: string;
  verified?: boolean;
  email?: string | null;
  flags?: bitFlags;
  premium_type?: PremiumType;
  public_flags?: bitFlags;
}
