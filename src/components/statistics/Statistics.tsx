import "./statistics.scss";
import groupstats from "../../../public/icons/Groupstats.svg";
import Line1 from "../../../public/icons/Line 1.svg";
import Line2 from "../../../public/icons/Line 2.svg";

const Statistics = () => {
  return (
    <div className="stats">
      <div className="heading">
        <h3>إحصائيات</h3>
      </div>
      <div className="group__layout">
        <div className="group__img pb-12">
          <img src={groupstats} alt="img" />
        </div>
        <div className="w-52 h-7 pt-4 relative">
          <div className="w-16 h-7 left-[140px] top-0 absolute">
            <img src={Line1} alt="icon" />
            <div className="left-[28.25px] top-0 absolute text-gray-900 text-sm font-medium leading-none">
              108
            </div>
            <div className="left-0 top-[18.38px] absolute text-neutral-300 text-xs font-normal leading-none">
              الخيار الأول
            </div>
          </div>
          <div className="w-20 h-7 left-0 top-0 absolute">
            <img src={Line2} alt="icon" />
            <div className="left-[30.93px] top-0 absolute text-gray-900 text-sm font-medium leading-none">
              108
            </div>
            <div className="left-0 top-[19.38px] absolute text-neutral-300 text-xs font-normal leading-none">
              الخيار الثاني
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
