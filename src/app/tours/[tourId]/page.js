import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import defaultOptions from "@/configs/reactQuery";
import TourDetailsPage from "@/components/templates/TourDetailsPage";

async function TourDetails({ params }) {
  const { tourId } = params;

  const queryClient = new QueryClient(defaultOptions);

  const fetchTours = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${tourId}`,
      {
        next: { revalidate: 1 * 60 * 60 },
      }
    );
    const json = await res.json();
    return json;
  };

  const tour = await queryClient.fetchQuery({
    queryKey: ["tours", tourId],
    queryFn: fetchTours,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TourDetailsPage tour={tour} />
    </HydrationBoundary>
  );
}

export default TourDetails;

export const generateMetadata = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.tourId}`
  );
  const json = await res.json();

  return {
    title: json.title,
    description: json.options,
  };
};
