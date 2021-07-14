import Command from "../core/classes/Command";
import { CommandType } from "../core/structures/custom/CommandType.enum";

/** A basic async command which responds after 5 seconds */
const asyncPing = new Command(
  {
    name: "asyncping",
    description: "Play ping pong but with a delay of 5 seconds",
    type: CommandType.Global,
  },
  // note that the callback must be async for this to work
  async (interaction) => {
    setTimeout(() => {
      interaction.respondText("Pong!");
    }, 5000);
  }
);

// all commands need to be exported as default
export default asyncPing;
