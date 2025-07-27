import Image from "next/image";

function Banner() {
  return (
    <div className="relative w-full h-[119px] mb-6 sm:h-[200px] md:h-[250px] lg:h-[350px]">
      <Image
        src="/images/banner.webp"
        fill
        sizes="100vw"
        alt="banner"
        className="object-fill"
        priority={true}
      />
    </div>
  );
}

export default Banner;
