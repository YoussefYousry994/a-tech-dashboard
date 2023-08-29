import BarChartBox from "../../components/barChartBox/BarChartBox";
// import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
// import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import avatar from "../../../public/avatars/Image-35.svg";
import avatar1 from "../../../public/avatars/Image-35-1.svg";
import avatar2 from "../../../public/avatars/Image-35-2.svg";
import avatar3 from "../../../public/avatars/Image-35-3.svg";
import Calendar from "../../components/calendar/Calendar";
import Employees from "../../components/employees/Employees";
import Statistics from "../../components/statistics/Statistics";
import clockwhite from "../../../public/icons/clockwhite.svg";
import clock from "../../../public/icons/clock.svg";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  // chartBoxProduct,
  // chartBoxRevenue,
  // chartBoxUser,
} from "../../data";
import "./home.scss";
import Users from "../users/Users";
import Comsec from "../../components/comsec/Comsec";
import { Trio } from "../../components/trio/Trio";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        {/* <ChartBox {...chartBoxUser} /> */}
        <Employees />
      </div>
      <div className="box box3">
        {/* <ChartBox {...chartBoxProduct} /> */}
        <Statistics />
      </div>
      <div className="box box4">
        <div className="comsec-container">
          <Calendar />
          {/* <PieChartBox /> */}
          <div
            className="comsec-component-1"
            style={{ backgroundColor: "#F2F5F1" }}
          >
            {/* <img src={card1} alt="" className="card-flow" /> */}
            <Comsec
              img={avatar}
              backgroundColor="#F2F5F1"
              src={clock}
              name="احمد محمد"
            />
          </div>
          <div className="comsec-component-2">
            <Comsec
              img={avatar1}
              backgroundColor="#FFF6E3"
              src={clock}
              name="كريم عبد العزيز "
            />
          </div>
          <div className="comsec-component-3">
            <Comsec
              img={avatar2}
              backgroundColor="#7661E2"
              color="#fff"
              src={clockwhite}
              name=" ميرا محسن"
            />
          </div>
          <div className="comsec-component-4">
            <Comsec
              img={avatar3}
              backgroundColor="#F1ECFE"
              src={clock}
              name="محمود الغريب"
            />
          </div>
        </div>
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        {/* <ChartBox {...chartBoxRevenue} /> */}
        <div className="flex gap-y-3 gap-x-4">
          <Trio />
          <Trio />
        </div>
      </div>
      <div className="box box7">
        {/* <BigChartBox /> */}
        <Users />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};
export default Home;
