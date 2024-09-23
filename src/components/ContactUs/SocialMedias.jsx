import { Link } from "react-router-dom";
import facebookMobile from "../../assets/contactus/facebookMobile.svg";
import instaMobile from "../../assets/contactus/instaMobile.svg";
const SocialMedias = () => {
  return (
    <div className="pt-10 flex flex-row md:flex-col md:w-2/4  gap-8 md:gap-12 items-center justify-center">
     
        <Link to="https://www.instagram.com/usthb_mosque" target="_blank">
          <img src={instaMobile} alt="instagram" className="w-14 md:w-20"/>
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100087484116032"
          target="_blank"
        >
          <img src={facebookMobile} alt="facebook" className="w-14 md:w-20"/>
        </Link>
     
    </div>
  );
};

export default SocialMedias;
