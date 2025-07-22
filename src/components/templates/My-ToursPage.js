"use client";

import { toast } from "react-toastify";

import { useUserTours } from "@/hooks/queries";
import UserToursCard from "@/modules/UserToursCard";
import ProfileSkeleton from "@/skeletons/ProfileSkeleton";

function MyToursPage() {
  const { data, error, isPending } = useUserTours();

  if (error) return toast.error("مشکلی پیش آمده ، بعدا دوباره وارد شوید");

  return (
    <div className="mt-5 lg:mt-0 lg:w-[68%] xl:w-[72%] lg:border lg:border-[#00000033] lg:rounded-[10px] lg:px-3 lg:pt-5 lg:mb-5 min-h-lvh">
      {isPending ? (
        <>
          <ProfileSkeleton />
          <ProfileSkeleton />
          <ProfileSkeleton />
        </>
      ) : (
        data?.map((tour) => <UserToursCard key={tour.id} tour={tour} />)
      )}
    </div>
  );
}

export default MyToursPage;
