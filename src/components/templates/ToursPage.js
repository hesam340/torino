import Card from "@/modules/Card";
import Banner from "@/modules/Banner";
import SearchToursForm from "@/modules/SearchToursForm";
import ShowMoreWrapper from "@/modules/ShowMoreWrapper";

function ToursPage({ tours, searchParams }) {
  return (
    <>
      <Banner />
      <div className="container m-auto px-8">
        <SearchToursForm />
        <div className="mt-10">
          {searchParams.originId ? (
            <>
              <p className="text-[20px] md:text-3xl font-light md:font-normal mb-2">
                نتایج جستجو
              </p>
              {tours?.length ? (
                <ShowMoreWrapper initialCount={4}>
                  {tours.map((tour, index) => (
                    <Card key={tour.id} data={tour} index={index} />
                  ))}
                </ShowMoreWrapper>
              ) : (
                <p className="text-base text-center md:text-2xl font-light md:font-normal mt-4 mb-4">
                  نتیجه ای یافت نشد !
                </p>
              )}
            </>
          ) : (
            <>
              <p className="text-[20px] md:text-3xl font-light md:font-normal mb-2">
                همه تور ها
              </p>
              <ShowMoreWrapper initialCount={4}>
                {tours.map((tour, index) => (
                  <Card key={tour.id} data={tour} index={index} />
                ))}
              </ShowMoreWrapper>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ToursPage;
