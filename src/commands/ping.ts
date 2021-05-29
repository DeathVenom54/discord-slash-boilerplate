import Command from '../core/classes/Command';

const ping = new Command('ping', 'Play ping pong with me', interaction => {
  interaction.respondText('Pong!');
});

export default ping;
