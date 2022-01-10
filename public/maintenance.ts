import { BASE_URL } from "./constants.ts";
import { jsonFetch, SuccessResponse } from "./_utils.ts";

const ANNOUNCEMENT_MAINTENANCE = "announcement/maintenance";

type maintenanceResponse = SuccessResponse<
  {
    startTime: Date;
    endTime: Date;
    description: string;
    haltReason: 0 | 1;
    systemStatus: {
      spotTrading: "disable" | "enable" | "readOnly" | "closeOnly";
      futuresTreading: "disable" | "enable" | "readOnly" | "closeOnly";
      walletOperating: "disable" | "enable";
      otcTrading: "disable" | "enable";
    };
  } | null
>;

export function fetchMaintenance(
  init?: RequestInit,
): Promise<maintenanceResponse> {
  const url = new URL(ANNOUNCEMENT_MAINTENANCE, BASE_URL);

  return jsonFetch(url, init);
}
