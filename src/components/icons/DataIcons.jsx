import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faThermometerHalf } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";

const DataIcons = ({ type }) => {
  let icon;
  let color;
  let bgColor;
  if (type === "water") {
    icon = faDroplet;
    color = "#646e95";
    bgColor = "#cbd7ff";
  }
  if (type === "temp") {
    icon = faThermometerHalf;
    color = "#b77f53";
    bgColor = "#f3c097";
  }
  if (type === "humid") {
    icon = faWater;
    color = "#58896b";
    bgColor = "#c1f0d1";
  }
  if (type === "plant") {
    icon = faSeedling;
    color = "#58896b";
    bgColor = "#c1f0d1";
  }
  if (type === "pump") {
    return (
      <>
        <div className="box">
          <Icon icon_name="pump.png" h="50px" w="50px" />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="box" style={{ backgroundColor: `${bgColor}` }}>
        <FontAwesomeIcon
          style={{ fontSize: "30px", color: `${color}` }}
          icon={icon}
        />
      </div>
    </>
  );
};

export default DataIcons;
