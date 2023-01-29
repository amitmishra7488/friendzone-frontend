import {FiSend} from 'react-icons/fi'
import {IoCompassOutline,IoPersonOutline} from 'react-icons/io5'
import {AiOutlineHeart} from 'react-icons/ai'
export function Icons() {
  return (
    <>
      <div className="icones">
        <FiSend/>
        <IoCompassOutline/>
        <AiOutlineHeart/>
        <IoPersonOutline/>
        {/* <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon> */}
      </div>

      <div className="icones-mobile">
        <FiSend/>

        {/* <ion-icon name="paper-plane-outline"></ion-icon> */}
      </div>
    </>
  );
}
