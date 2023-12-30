import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function PanelTitle({
  state: { isOpen },
  setState: { setIsOpen },
}) {
  return (
    <div className="container__panel__title" onClick={() => {
      setIsOpen(!isOpen)
    }}>
      Lorem, ipsum dolor.{" "}
      {isOpen ? (
        <FontAwesomeIcon icon={faXmark} />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} />
      )}
    </div>
  );
}
