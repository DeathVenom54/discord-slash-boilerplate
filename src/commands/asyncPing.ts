import Command from "Command";

/** A basic async command which responds after 5 seconds */
const asyncPing = new Command('asyncping', 'Play ping pong but with a delay of 5 seconds', async interaction => {
    // note that the callback must be async for this to work
    setTimeout(() =>{
        interaction.respondText('Pong!');
    }, 5000);
});

export default asyncPing;