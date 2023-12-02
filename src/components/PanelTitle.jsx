import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PanelTitle() {
  let { isOpen, setIsOpen } = useState(false);
  return (
    <div className="container__panel__title">
      Lorem, ipsum dolor.{" "}
      {isOpen ? (
        <FontAwesomeIcon icon={faXmark} />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} />
      )}
    </div>
  );
}
