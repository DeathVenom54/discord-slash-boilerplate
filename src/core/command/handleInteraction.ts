import { Interaction } from '../structures/Interaction.interface';
import { getCommands } from './commands';
import InteractionClass from '../classes/Interaction';
import { markResponseAsync } from './response';

/**
 * Look for the associated command and execute it when it is triggered
 * @param interaction The received interaction
 */
const handleInteraction = async (interaction: Interaction) => {
  const commands = getCommands();
  const command = commands.find(c => c.name === interaction.data?.name);
  if (command) {
    if (command.execute.constructor.name === 'AsyncFunction') {
      // command is async
      await markResponseAsync(interaction.id, interaction.token);
      await command.execute(new InteractionClass(interaction, true));
    }
    command.execute(new InteractionClass(interaction, false));
  }
};

export default handleInteraction;
