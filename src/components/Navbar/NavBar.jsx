import mobileLogo from "../../assets/navbar/LOGO.svg";
import desktopLogo from "../../assets/navbar/desktop_logo.svg";
import MenuBurger from "./MenuBurger";


const NavBar = () => {
  return (
    <nav className="relative z-10">
      <div className="md:hidden w-full flex justify-between items-center p-5">
        <img src={mobileLogo} alt="Logo" />
        <MenuBurger/>
        {/* <button>
          <img src={menu} alt="hamburger-menu" />
        </button> */}
      </div>
      {/* --------------------------------------------- */}
      <div className="hidden md:flex  items-center  h-24">
        {/* logo */}
        <div className=" w-1/6 flex items-center justify-center   h-full">
          <img src={desktopLogo} alt="logo" width={130} />
        </div>
        {/* navbar */}
        <div className="bg-white w-5/6 rounded-br-[40px]  flex  items-center justify-evenly  px-14 xl:gap-24 h-full font-Tajawal text-[26px]  font-[500] text-[#2A3A4C]">
          <button>الرئيسية</button>
          <button>حولنا</button>
          <button>نشاطتنا</button>
          <button>مقالات</button>
          <button>القرآن</button>
          <button>اتصل بنا</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
