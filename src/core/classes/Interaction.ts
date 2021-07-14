import { Interaction as RawInteraction } from '../structures/api/Interaction.interface';
import { snowflake } from '../structures/api/snowflake.type';
import { InteractionType } from '../structures/api/InteractionType.enum';
import { ApplicationCommandInteractionData } from '../structures/api/ApplicationCommandInteractionData.interface';
import { GuildMember } from '../structures/api/GuildMember.interface';
import { User } from '../structures/api/User.interface';
import { sendAsyncResponse, sendResponse } from '../command/response';
import { MessageEmbed } from 'discord.js';
import {ApplicationCommandInteractionDataOption} from "../structures/api/ApplicationCommandInteractionDataOption.interface";

let isAsync: boolean;

/** Class representing the interaction sent when a slash command is triggered */
class Interaction {
  readonly id: snowflake;
  readonly application_id: snowflake;
  readonly type: InteractionType;
  readonly data?: ApplicationCommandInteractionData;
  readonly options: ApplicationCommandInteractionDataOption[] | undefined;
  readonly optionValues: any[] | undefined;
  readonly guild_id?: snowflake;
  readonly channel_id?: snowflake;
  readonly member?: GuildMember;
  readonly user?: User;
  private readonly token: string;
  readonly version: number;

  constructor(interaction: RawInteraction, async: boolean) {
    this.id = interaction.id;
    this.application_id = interaction.application_id;
    this.type = interaction.type;
    this.data = interaction.data;
    this.options = interaction.data?.options;
    this.optionValues = interaction.data?.options?.map(op => op.value);
    this.guild_id = interaction.guild_id;
    this.channel_id = interaction.channel_id;
    this.member = interaction.member;
    this.user = interaction.user;
    this.token = interaction.token;
    this.version = interaction.version;
    isAsync = async;
  }

  /**
   * Respond to the slash command with text or embed(s)
   * @param data The raw response. Structure: { content?: string; embeds?: MessageEmbed[] }
   */
  respond(data: { content?: string; embeds?: MessageEmbed[] }) {
    const body = {
      content: data.content,
      embeds: data.embeds?.length
        ? data.embeds.map(embed => {
            return embed.toJSON();
          })
        : [],
    };

    if (isAsync) return sendAsyncResponse(this.id, this.token, body);

    sendResponse(this.id, this.token, body).then();
  }

  /**
   * Respond to the slash command with text
   * @param {string} message The message to send
   */
  respondText(message: string) {
    const content = { content: message };
    if (isAsync) return sendAsyncResponse(this.id, this.token, content);
    sendResponse(this.id, this.token, content).then();
  }

  /**
   * Respond to the slash command with embed(s)
   * @param {MessageEmbed | MessageEmbed[]} embed The embed(s) to send
   */
  respondEmbed(embed: MessageEmbed | MessageEmbed[]) {
    const content = Array.isArray(embed)
      ? { embeds: embed.map(em => em.toJSON()) }
      : { embeds: [embed.toJSON()] };
    if (isAsync) return sendAsyncResponse(this.id, this.token, content);
    sendResponse(this.id, this.token, content).then();
  }
}

export default Interaction;
