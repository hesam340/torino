import Card from "@/modules/Card";
import Banner from "@/modules/Banner";
import WhyTorino from "@/modules/WhyTorino";
import CartoonPart from "@/modules/CartoonPart";
import SupportTitles from "@/modules/SupportTitles";
import SearchToursForm from "@/modules/SearchToursForm";
import ShowMoreWrapper from "@/modules/ShowMoreWrapper";

function HomePage({ tours }) {
  return (
    <>
      <Banner />
      <main className="container m-auto px-8">
        <h1 className="text-base text-[#595959] text-center font-medium w-full md:text-xl lg:text-[28px]">
          <span className="text-primary">تورینو</span> برگزار کننده بهترین تور
          های داخلی و خارجی
        </h1>
        <SearchToursForm />
        <div className="mt-10 mb-10">
          <p className="text-[20px] md:text-3xl font-light md:font-normal mb-2">
            همه تور ها
          </p>
          <ShowMoreWrapper initialCount={4}>
            {tours.map((tour, index) => (
              <Card key={tour.id} data={tour} index={index} />
            ))}
          </ShowMoreWrapper>
        </div>
        <CartoonPart />
        <WhyTorino />
      </main>
      <SupportTitles />
    </>
  );
}

export default HomePage;
