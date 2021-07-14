import { ApplicationCommandOption } from "../structures/api/ApplicationCommandOption.interface";
import Interaction from "./Interaction";
import { ICommand } from "../structures/custom/ICommand";
import { CommandType } from "../structures/custom/CommandType.enum";
import { ApplicationCommand } from "../structures/api/ApplicationCommand.interface";

/** Class representing a slash command */
class Command {
  public default_permission?: boolean = true;
  public name: string;
  public description: string;
  public type: CommandType;
  public options?: ApplicationCommandOption;
  public guildId?: string;

  /**
   * Create a new slash command
   * @param options The details of the slash command
   * @param {(interaction: Interaction) => void} execute The callback triggered when a user uses the command
   */
  constructor(
    options: ICommand,
    public execute: (interaction: Interaction) => void
  ) {
    this.name = options.name;
    this.description = options.description;
    this.type = options.type;
    this.guildId = options.guildId;

    if (this.type === CommandType.SingleGuild && !this.guildId)
      throw new Error("Commands of type guild must have a guildId");
  }

  toJson() {
    return {
      name: this.name,
      description: this.description,
      options: this.options,
    } as ApplicationCommand;
  }
}

export default Command;
