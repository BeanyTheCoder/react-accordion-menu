export default function PanelInfo({ text } = props) {
  return (
    <div className="container__panel__info">
      <div className="container__panel__info__text">
        <p>{text}</p>
      </div>
    </div>
  );
}
