import { useCallback, useState } from "react";
import { v4 } from "uuid";
import { RequestDto } from "../models/Request";

export interface UseRequest {
  requests: RequestDto[];
  runRequest: <T>(action: () => Promise<T>, message: string) => Promise<T>;
}

export const useRequest = (): UseRequest => {
  const [requests, setRequests] = useState<RequestDto[]>([]);

  const runRequest = useCallback(
    async <T>(action: () => Promise<T>, message: string = "") => {
      const request = new RequestDto(v4(), message);
      setRequests((requests) => [...requests, request]);
      try {
        return await action();
      } catch (ex) {
      } finally {
        setRequests((requests) => requests.filter((r) => r.id !== request.id));
      }
    },
    [setRequests]
  );

  return {
    requests,
    runRequest,
  };
};
