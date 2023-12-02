import PanelInfo from "./PanelInfo";
import PanelTitle from "./PanelTitle";

export default function Panel() {
  return (
    <div className="container__panel">
      <PanelTitle />
      <PanelInfo />
    </div>
  );
}
