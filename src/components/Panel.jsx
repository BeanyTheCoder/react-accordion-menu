import { useState } from "react";

import PanelInfo from "./PanelInfo";
import PanelTitle from "./PanelTitle";
import "../stylesheets/Panel.scss";

export default function Panel({text, heading} = props) {
  let [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={isOpen ? "container__panel open" : "container__panel"} onClick={toggle}>
      <PanelTitle heading={heading} {...{isOpen}} />
      <PanelInfo text={text}/>
    </div>
  );
}
