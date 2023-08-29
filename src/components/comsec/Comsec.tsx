import leftArrow from "../../../public/icons/Arrow - Left.svg";
import "./comsec.scss";
const Comsec = (props: any) => {
  return (
    <>
      <div
        className="box boxv2"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="group">
          <div className="overlap-group">
            <p className="p" style={{ color: props.color }}>
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى
            </p>
            <div className="span-wrapperr">
              <img className="clock" src={props.src} />
              <span className="text-wrapper" style={{ color: props.color }}>
                05:00
              </span>
              <span className="span">&nbsp;</span>
              <span className="text-wrapper" style={{ color: props.color }}>
                - 06:00
              </span>
              <span className="span" style={{ color: props.color }}>
                م{" "}
              </span>
            </div>
          </div>
          <div className="overlap-group__2">
            <div className="flex ">
              <img src={props.img} alt="icon" />
              <span className="w-24 mr-2">{props.name}</span>
            </div>
            <div className="box-icon">
              <img src={leftArrow} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comsec;
