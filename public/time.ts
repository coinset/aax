import { BASE_URL } from "./constants.ts";
import { jsonFetch, SuccessResponse } from "./_utils.ts";

const TIME = "time";

export type TimeResponse = SuccessResponse<
  number
>;

export function fetchTime(
  init?: RequestInit,
): Promise<TimeResponse> {
  const url = new URL(TIME, BASE_URL);

  return jsonFetch(url, init);
}
