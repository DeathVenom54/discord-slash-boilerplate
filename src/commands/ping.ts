import Command from 'Command';

/** A basic command which sends back "Pong!" */
const ping = new Command('ping', 'Play ping pong with me', interaction => {
  interaction.respondText('Pong!');
});

export default ping;
