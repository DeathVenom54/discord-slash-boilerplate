import { snowflake } from '../structures/snowflake.type';
import { ApplicationCommandOption } from '../structures/ApplicationCommandOption.interface';
import Interaction from './Interaction';

class Command {
  public default_permission?: boolean = true;

  constructor(
    public name: snowflake,
    public description: snowflake,
    public execute: (interaction: Interaction) => void,
    public options?: ApplicationCommandOption[]
  ) {}
}

export default Command;
