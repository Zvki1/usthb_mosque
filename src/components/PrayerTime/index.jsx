
import MobileOnePrayer from './MobileOnePrayer'
import OnePrayer from './OnePrayer'

const index = () => {
  
  return (
    <div >
    <div className='hidden md:flex items-center justify-center gap-10 relative z-20 bottom-16 inset-x-0 overflow-x-hidden pb-5'>
        <OnePrayer isNext={true}/>
        <OnePrayer isNext={false}/>
        <OnePrayer isNext={false}/>
        <OnePrayer isNext={false}/>
        <OnePrayer isNext={false}/>
    </div>
    <div className='md:hidden flex flex-col items-center relative bottom-8 gap-3'>
      <MobileOnePrayer isNext={true}/>
      <MobileOnePrayer isNext={false}/>
      <MobileOnePrayer isNext={false}/>
      <MobileOnePrayer isNext={false}/>
      <MobileOnePrayer isNext={false}/>
    </div>
    </div>
  )
}

export default index