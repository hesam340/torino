import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import defaultOptions from "@/configs/reactQuery";
import ToursPage from "@/components/templates/ToursPage";

async function Tours({ searchParams }) {
  const queryClient = new QueryClient(defaultOptions);

  const { destinationId, originId, startDate, endDate } = searchParams;

  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`);

  if (destinationId) url.searchParams.append("destinationId", destinationId);
  if (originId) url.searchParams.append("originId", originId);
  if (startDate) url.searchParams.append("startDate", startDate);
  if (endDate) url.searchParams.append("endDate", endDate);

  const fetchTours = async () => {
    const res = await fetch(url.href.toString(), { cache: "no-store" });
    const json = await res.json();
    return json;
  };

  const tours = await queryClient.fetchQuery({
    queryKey: ["searchTours"],
    queryFn: fetchTours,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ToursPage tours={tours} searchParams={searchParams} />
    </HydrationBoundary>
  );
}

export default Tours;
