import { fetchOrderBook } from "./order_book.ts";
import { anyArray, anyNumber, anyString, expect, test } from "../dev_deps.ts";

test("fetchOrderBook", async () => {
  await expect(fetchOrderBook({ symbol: "BTCUSDFP", level: 20 })).resolves
    .toEqual({
      asks: anyArray([anyNumber(), anyNumber()]),
      bids: anyArray([anyNumber(), anyNumber()]),
      e: anyString(),
      t: anyNumber(),
    });
});
