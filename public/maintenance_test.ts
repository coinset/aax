import { any, anyNumber, anyOf, anyString, expect, test } from "../dev_deps.ts";
import { fetchMaintenance } from "./maintenance.ts";
test("fetchMaintenance", async () => {
  await expect(fetchMaintenance()).resolves.toEqual({
    code: 1,
    data: anyOf([null, {
      startTime: any(Date),
      endTime: any(Date),
      description: anyString(),
      haltReason: anyOf([0, 1]),
      systemStatus: {
        spotTrading: anyOf(["disable", "enable", "readOnly", "closeOnly"]),
        futuresTreading: anyOf(["disable", "enable", "readOnly", "closeOnly"]),
        walletOperating: anyOf(["enable", "disable"]),
        otcTrading: anyOf(["enable", "disable"]),
      },
    }]),
    message: "success",
    ts: anyNumber(),
  });
});
