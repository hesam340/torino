function CardSkeleton() {
  return (
    <div className="flex flex-col rounded-[12px] w-[329px] md:w-[280px]">
      <div className="skeleton w-full h-[159px]"></div>
      <div className="flex flex-col">
        <div className="skeleton w-[150px] h-2 mb-2 px-2 pt-2 mt-2"></div>
        <div className="skeleton w-[200px] h-2 mb-2 px-2"></div>
        <div className="skeleton w-full h-[1px]"></div>
        <div className="flex items-center justify-between px-2 py-1">
          <div className="skeleton w-[99px] h-[29px] rounded-[4px]"></div>
          <div className="skeleton w-[100px] h-2"></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
