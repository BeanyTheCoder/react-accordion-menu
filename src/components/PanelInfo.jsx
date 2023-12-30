export default function PanelInfo({
  state: { isOpen },
}) {
  return (
    <div className={`container__panel__info` + (isOpen ? ` open` : ``)} >
      
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias est
      aspernatur voluptates? Ea unde, sint repellendus vero nemo laudantium
      suscipit.
    </div>
  );
}
