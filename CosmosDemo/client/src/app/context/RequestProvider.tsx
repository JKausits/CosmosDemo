import { resolve } from "node:path";
import React, { useContext } from "react";
import { useRequest, UseRequest } from "../hooks/request";

async function runRequestStub<T>(action: () => Promise<T>, message: string) {
  return new Promise<T>(() => resolve());
}

const RequestContext = React.createContext<UseRequest>({
  requests: [],
  runRequest: runRequestStub,
});

export const RequestProvider = ({ children }) => {
  let value = useRequest();

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
};

export const useRequestContext = () => useContext(RequestContext);
