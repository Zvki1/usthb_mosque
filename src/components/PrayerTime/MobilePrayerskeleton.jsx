
const MobilePrayerskeleton = () => {
  return (
<div className="flex items-center w-4/6 justify-between p-3 rounded-xl bg-gray-200 animate-pulse">
  <div className="flex items-center gap-2 sm:gap-4">
    <div className="h-7 w-7 bg-gray-300 rounded-full"></div>
    <div className="h-6 w-24 bg-gray-300 rounded"></div>
  </div>
  <div className="h-6 w-16 bg-gray-300 rounded"></div>
</div>
  )
}

export default MobilePrayerskeleton