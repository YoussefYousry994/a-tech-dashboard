import "./employees.scss";
import iconDown from "../../../public/icons/arrow down.svg";
import employee from "../../../public/avatars/employee.svg";
const Employees = () => {
  return (
    <>
      <div className="employees">
        <div className="employees__header">
          <h3>الشخص الاول</h3>
          <div className="Group__1">
            <span>10 مايو- 10يونيو</span>
            <img src={iconDown} alt="icon" />
          </div>
        </div>
      </div>
      <div className="group__2">
        <div className="circle1"></div>
        <p className="p-txt-1 absolute">قراءة رقم 1</p>
        <p className="p-num absolute">254</p>
        <div className="circle2"></div>
        <p className="p-txt-2 absolute">قراءة رقم 3</p>
        <p className="p-num-2 absolute">120</p>
        <div className="circle3"></div>
        <p className="p-txt-3 absolute">قراءة رقم 2</p>
        <p className="p-num-3 absolute">25</p>
        <img className="imgy" src={employee} alt="img" />
      </div>
    </>
  );
};

export default Employees;
