import logo from "../../assets/images/logos/logo.png";
// import logo from "../../images/logo.png"
import {BsInstagram} from "react-icons/bs"
export function Logos() {
  return (
    <>
      <div className="logo">
        <BsInstagram/>
        <div className="separador"></div>
        <img src={logo} alt="logo do instagram" />
      </div>

      <div className="logo-mobile">
        <BsInstagram/>
      </div>

      <div className="instagram-mobile">
        <img src={logo} alt="logo do instagram" />
      </div>
    </>
  );
}
