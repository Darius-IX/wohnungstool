// Wohnung bearbeiten symbol, wieder alle felder wie bei add flat.
// alle wohnungen auflisten untereinander, attribute nach wichtigkeit
// sortiert zeigen. responsive grid

import { NavLink } from "react-router-dom";
import FlatCard from "./FlatCard";
import { exampleFlatData } from "../../ExampleFlatData";
import { flatDataKeyConstants } from "../../FlatDataKeyConstants";

function OpenAllLinks() {
  for (const key in exampleFlatData) {
    window.open(exampleFlatData[key][flatDataKeyConstants.link]);
  }
}

const Home = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-sky-400 to-sky-600">
      <h1 className="text-center text-5xl pb-4">Übersicht</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Object.keys(exampleFlatData).map((key) => {
          return <FlatCard flatKey={key}></FlatCard>;
        })}
      </div>
      <div className="p-4"></div>
      <NavLink
        className="text-center border-2 border-sky-700 rounded-md bg-sky-500 p-2 fixed bottom-12 right-12 w-48"
        to="/hinzufuegen"
      >
        Wohnung hinzufügen
      </NavLink>
      <button
        className="border-2 border-sky-700 rounded-md bg-sky-500 p-2 fixed bottom-24 right-12 w-48"
        onClick={() => OpenAllLinks()}
      >
        Alle öffnen
      </button>
    </div>
  );
};

export default Home;
