import { NewType } from "./models/new";

export type NewResponse = {
  message?: string;
  error?: string;
  data?: NewType;
};
