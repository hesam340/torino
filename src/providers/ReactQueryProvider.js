"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import defaultOptions from "@/configs/reactQuery";

const makeQueryClient = () => new QueryClient({ defaultOptions });

let browserQueryClient;

const getQueryClient = () => {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient();
    }
    return browserQueryClient;
  }
};

function ReactQueryProvider({ children }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
