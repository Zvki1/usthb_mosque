/* eslint-disable react/prop-types */
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import menu from "../../assets/navbar/menu-02.svg";

const MenuBurger = ({
  scrollToAbout,
  scrollToActivities,
  scrollToArticles,
  scrollToQuran,
}) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <img src={menu} alt="hamburger-menu" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-[#2A3A4C] border-0  rounded-lg font-Tajawal text-[26px]  font-[500] text-white"
        >
          <SheetHeader>
            <SheetTitle className="text-white text-[32px]  font-[500] text-center">روابط</SheetTitle>
            <div className="  pt-10 flex  flex-col gap-4 items-start    font-Tajawal text-[32px]  font-[500] text-white">
              <button>الرئيسية</button>
              <button onClick={scrollToActivities}>نشاطتنا</button>
              <button>اتصل بنا</button>
              <button onClick={scrollToArticles}>مقالات</button>
              <button onClick={scrollToQuran}>القرآن</button>
              <button onClick={scrollToAbout}>حولنا</button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuBurger;
