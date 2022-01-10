import { fetchTime } from "./time.ts";
import { anyNumber, expect, test } from "../dev_deps.ts";

test("fetchTime", async () => {
  await expect(fetchTime()).resolves.toEqual({
    code: 1,
    data: anyNumber(),
    message: "success",
    ts: anyNumber(),
  });
});
