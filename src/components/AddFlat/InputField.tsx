interface InputFieldProps {
  label: string;
  icon: string;
}

const InputField = ({ label, icon }: InputFieldProps) => {
  return (
    <div className="flex gap-8">
      <div className="flex gap-2">
        <i className={`${icon} content-center`}></i>
        <h3>{label}</h3>
      </div>
      <input className="border-2 border-sky-700 bg-sky-600 focus:outline-none"></input>
    </div>
  );
};

export default InputField;
