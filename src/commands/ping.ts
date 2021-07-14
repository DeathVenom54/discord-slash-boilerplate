import Command from "../core/classes/Command";
import { CommandType } from "../core/structures/custom/CommandType.enum";

/** A basic command which sends back "Pong!" */
const ping = new Command(
  {
    name: "ping",
    description: "Check if I'm available to play ping pong",
    type: CommandType.Global,
  },
  (interaction) => {
    interaction.respondText("Pong!");
  }
);

// all commands need to be exported as default
export default ping;
