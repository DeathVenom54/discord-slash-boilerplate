import { snowflake } from '../structures/snowflake.type';
import { ApplicationCommandOption } from '../structures/ApplicationCommandOption.interface';
import Interaction from './Interaction';

/** Class representing a slash command */
class Command {
  public default_permission?: boolean = true;

  /**
   * Create a new slash command
   * @param {snowflake} name The name of the command containing lowercase characters and numbers only
   * @param {string} description A brief description of the command
   * @param {(interaction: Interaction) => void} execute The callback triggered when a user uses the command
   * @param {ApplicationCommandOption[]} options The options to provide with the command
   */
  constructor(
    public name: snowflake,
    public description: snowflake,
    public execute: (interaction: Interaction) => void,
    public options?: ApplicationCommandOption[]
  ) {}
}

export default Command;
