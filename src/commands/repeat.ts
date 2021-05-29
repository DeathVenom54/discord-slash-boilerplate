import Command from '../core/classes/Command';
import { ApplicationCommandOptionType } from '../core/structures/ApplicationCommandOptionType.enum';

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
