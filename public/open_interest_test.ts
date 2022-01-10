import { fetchOpenInterest } from "./open_interest.ts";
import { anyNumber, anyString, expect, test } from "../dev_deps.ts";

test("fetchOpenInterest", async () => {
  await expect(fetchOpenInterest({ symbol: "BTCUSDFP" })).resolves.toEqual({
    code: 1,
    data: {
      symbol: anyString(),
      openInterest: anyNumber(),
      openInterestUSD: anyNumber(),
    },
    message: "success",
    ts: anyNumber(),
  });
});
