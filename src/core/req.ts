import fetch from 'node-fetch';
import { botToken } from '../config.json';

const urlPrefix = 'https://discord.com/api/v8';
const headers = { Authorization: `Bot ${botToken}` };

/**
 * Send a GET request to the Discord endpoint
 * @param {string} endpoint The relative endpoint to send the request
 * @return response The returned response
 */
const GET = async (endpoint: string) => {
  const res = await fetch(urlPrefix + endpoint, { headers });
  return await res.json();
};

/**
 * Send a POST request to the Discord endpoint
 * @param {string} endpoint The relative endpoint to send the request
 * @param data The data to send
 * @param noResponse If no response needs to be sent
 * @return response The returned response
 */
const POST = async (endpoint: string, data: any, noResponse?: boolean) => {
  const body = JSON.stringify(data);
  const res = await fetch(urlPrefix + endpoint, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body,
  });
  if (noResponse) return;
  return await res.json();
};

/**
 * Send a PUT request to the Discord endpoint
 * @param {string} endpoint The relative endpoint to send the request
 * @param data The data to send
 * @param noResponse If no response needs to be sent
 * @return response The returned response
 */
const PUT = async (endpoint: string, data: any, noResponse?: boolean) => {
  const body = JSON.stringify(data);
  const res = await fetch(urlPrefix + endpoint, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body,
  });
  if (noResponse) return;
  return await res.json();
};

/**
 * Send a PATCH request to the Discord endpoint
 * @param {string} endpoint The relative endpoint to send the request
 * @param data The data to send
 * @return response The returned response
 */
const PATCH = async (endpoint: string, data: any) => {
  const body = JSON.stringify(data);
  const res = await fetch(urlPrefix + endpoint, {
    method: 'PATCH',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body,
  });
  return await res.json();
};

/**
 * Send a DELETE request to the Discord endpoint
 * @param {string} endpoint The relative endpoint to send the request
 */
const DELETE = async (endpoint: string) => {
  await fetch(urlPrefix + endpoint, { headers, method: 'DELETE' });
};

const req = { GET, POST, PUT, PATCH, DELETE };

export default req;
