import { snowflake } from '../structures/api/snowflake.type';
import { InteractionResponseCallbackData } from '../structures/api/InteractionResponseCallbackData.interface';
import req from '../utils/req';
import { InteractionResponseType } from '../structures/api/InteractionResponseType.enum';
import {applicationId} from '../../config.json';

/**
 * Mark a response as async and show a loading state until the Promise is resolved
 * @param id The id of the interaction
 * @param token The token of the interaction
 */
export const markResponseAsync = async (id: snowflake, token: string) => {
  await req.POST(`/interactions/${id}/${token}/callback`, { type: InteractionResponseType.AsyncResponse }, true);
};

/**
 * Send a sync response
 * @param id The id of the interaction
 * @param token The token of the interaction
 * @param data The data to send
 */
export const sendResponse = async (id: snowflake, token: string, data: InteractionResponseCallbackData) => {
  await req.POST(`/interactions/${id}/${token}/callback`, { type: InteractionResponseType.Response, data }, true);
};

/**
 * Send an async response
 * @param id The id of the interaction
 * @param token The token of the interaction
 * @param data The data to send
 */
export const sendAsyncResponse = async (id: snowflake, token: string, data: InteractionResponseCallbackData) => {
  await req.PATCH(`/webhooks/${applicationId}/${token}/messages/@original`, data);
};
