import { ApplicationCommandOption } from "../api/ApplicationCommandOption.interface";
import { CommandType } from "./CommandType.enum";

export type ICommand = {
  name: string;
  description: string;
  options?: ApplicationCommandOption[];
  type: CommandType;
  guildId?: string;
};
