import { NavLink } from "react-router-dom";
import InputField from "./InputField";

const AddFlat = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-sky-400 to-sky-600">
      <h1 className="text-center pb-4">Wohnung hinzufügen</h1>
      <div className="grid grid-cols-2 gap-2">
        <InputField label="Link" icon=""></InputField>
        <InputField label="Adresse" icon="bx bx-map-pin"></InputField>
        <h3>Titel</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Miete</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Distanz UKE</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Dauer UKE</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Distanz Bahn</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Email</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Telefon</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <h3>Notizen</h3>
        <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
        <NavLink
          className="rounded-md border-2 border-sky-700 bg-sky-500 text-center p-1 text-xl"
          to="/"
        >
          Abbrechen
        </NavLink>
        <button className="rounded-md border-2 border-sky-700 bg-sky-500 p-1 text-xl">
          Hinzufügen
        </button>
      </div>
      <div className="content-center flex flex-col pt-4 gap-2"></div>
    </div>
  );
};

export default AddFlat;
