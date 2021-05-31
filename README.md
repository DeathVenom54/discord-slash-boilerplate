# discord-slash-boilerplate

Boilerplate code for making slash command bots using discord.js and typescript

## Installation

 - Run these commands in order:

    `npm install` or `yarn install`

    `tsc`

- Edit `src/config.json` to include the bot token and application id, which can be found at the [Discord developer portal](https://discord.com/developers/applications).

## Usage

Look at the sample commands in `src/commands`. Creating a new command is as simple as adding a new file in that directory with a default exported instance of the Command class.

To start the bot, run `npm start` or `yarn start`

This code currently supports only guild commands but this will be expanded to global commands in the near future.

