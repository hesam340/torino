import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import HomePage from "@/templates/HomePage";
import defaultOptions from "@/configs/reactQuery";

export default async function Home() {
  const queryClient = new QueryClient(defaultOptions);

  const fetchTours = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`, {
      cache: "no-store",
    });
    const json = await res.json();
    return json;
  };

  const tours = await queryClient.fetchQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage tours={tours} />
    </HydrationBoundary>
  );
}
