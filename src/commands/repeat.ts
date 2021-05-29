import Command from 'Command';
import { ApplicationCommandOptionType } from 'ApplicationCommandOptionType';

/** A basic command using options which repeats the string inputted */
const repeat = new Command(
  'repeat',
  'Repeats what you said',
  async interaction => interaction.respondText(interaction.optionValues![0]),
  [
    {
      name: 'input',
      description: 'The text you want me to repeat',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ]
);

export default repeat;
