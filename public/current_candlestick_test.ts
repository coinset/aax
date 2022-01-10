import { fetchCurrentCandlestick } from "./current_candlestick.ts";
import { anyNumber, anyString, expect, test } from "../dev_deps.ts";

test("fetchCurrentCandlestick", async () => {
  await expect(fetchCurrentCandlestick({ symbol: "BTCUSDFP", timeFrame: "1d" }))
    .resolves.toEqual({
      c: anyNumber(),
      e: anyString(),
      h: anyNumber(),
      l: anyNumber(),
      o: anyNumber(),
      s: anyNumber(),
      t: anyNumber(),
      v: anyNumber(),
    });
});
