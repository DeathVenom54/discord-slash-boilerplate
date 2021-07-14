import Command from "../core/classes/Command";
import { ApplicationCommandOptionType } from "../core/structures/api/ApplicationCommandOptionType.enum";
import { CommandType } from "../core/structures/custom/CommandType.enum";

/** A basic command using options which repeats the string input */
const repeat = new Command(
  {
    name: "repeat",
    description: "Make me repeat something",
    type: CommandType.AllGuild,
    options: [
      {
        name: "input",
        description: "The text you want me to repeat",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },
  (interaction) => {
    // you can access the values entered by the
    // user through interaction.optionValues
    interaction.respondText(interaction.optionValues![0]);
  }
);

// all commands need to be exported as default
export default repeat;
