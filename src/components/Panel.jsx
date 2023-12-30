import { useState } from "react";

import PanelInfo from "./PanelInfo";
import PanelTitle from "./PanelTitle";
import "../stylesheets/Panel.scss";

export default function Panel() {
  let [isOpen, setIsOpen] = useState(false);
  let propset = {
    state: {
      isOpen,
    },
    setState: {
      setIsOpen,
    },
  };

  return (
    <div className="container__panel">
      <PanelTitle {...propset} />
      <PanelInfo {...propset} />
    </div>
  );
}
