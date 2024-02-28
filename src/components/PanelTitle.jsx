import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PanelTitle({ heading, isOpen } = props) {
  return (
    <div className="container__panel__title">
      {heading}{" "}
      {isOpen ? (
        <FontAwesomeIcon icon={faXmark} />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} />
      )}
    </div>
  );
}
