import TickCircle from "../../../public/icons/tick-circle.svg";
import MaskGroup from "../../../public/cards/Mask Group.png";
import MaskGroup2 from "../../../public/cards/Mask Group-1.svg";
import MaskGroup3 from "../../../public/cards/Mask Group3.svg";
import timer from "../../../public/icons/timer-start.svg";
import calendar from "../../../public/icons/calendar-white.svg";
import "./trio.scss";

export const Trio = (props: any) => {
  return (
    <>
      <div className="classCust container flex flex-col md:container md:mx-auto gap-y-6">
        <div className="box_d">
          <div className="rectangle">
            <img className="flow-img" src={MaskGroup} alt="group" />
            <p>قراءات تانية</p>
            <div className="flx-item">
              <span>35</span>
              <img src={timer} alt="icons" />
            </div>
          </div>
        </div>

        <div className="box_b">
          <div className="rectangle">
            <img className="flow-img" src={MaskGroup2} alt="group" />
            <p>قراءات تانية</p>
            <div className="flx-item">
              <span>35</span>
              <img className="" src={calendar} alt="icons" />
            </div>
          </div>
        </div>

        <div className="box_g">
          <div className="rectangle">
            <img className="flow-img" src={MaskGroup3} alt="group" />
            <p>قراءات تانية</p>
            <div className="flx-item">
              <span>35</span>
              <img src={TickCircle} alt="icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
