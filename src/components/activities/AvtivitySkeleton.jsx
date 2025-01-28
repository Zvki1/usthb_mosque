

const CardSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-1/3  rtl md:hover:scale-105 transition-transform duration-500 ease-in-out">
      <div className="relative h-48 md:h-48 bg-gray-300 animate-pulse">
        {/* Image placeholder */}
        <div className="w-full h-full bg-gray-400 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#48B09F] via-[#48b09f21] to-transparent"></div>
      </div>
      <div className="bg-white dark:bg-gray-950 p-4 md:p-6 space-y-3 text-right">
        {/* Title placeholder */}
        <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
        
        {/* Paragraph placeholder */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
        </div>

        {/* Button placeholder */}
        <div className="flex justify-center px-14">
          <div className="w-full h-9 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;