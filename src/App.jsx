import Panel from "./components/Panel";
import "./stylesheets/App.scss"

export default function App() {
  return (
    <div id="app">
      <h1>React accordion menu</h1>
      <div className="container">
        {/* they are have the same text, will change later */}
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
        <Panel />
      </div>
    </div>
  );
}
