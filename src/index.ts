import { WSEventType, Client } from 'discord.js';
import handleInteraction from './core/command/handleInteraction';
import setupCommands from './core/command/commands';
import { botToken as token, applicationId } from './config.json';

const client = new Client();

client.login(token);

client.on('ready', () => {
  console.log(`${client.user?.username} is online`);
  client.guilds.cache.forEach(async guild => {
    await setupCommands(guild.id, applicationId);
  });
});

client.ws.on(<WSEventType>'INTERACTION_CREATE', handleInteraction);
