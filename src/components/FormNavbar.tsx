import { formStages } from "../data";
import { useContext } from "react";
import { FormDataContext } from "../context/FormDataProvider";
const FormNavbar = () => {
    const { stageNumber } = useContext(FormDataContext);
  return (
    <nav className="bg-nav-img bg-no-repeat w-full h-[150px] flex justify-center items-center">
      {formStages.map((stage, index) => (
        <div className={`rounded-full w-10 h-10 flex justify-center items-center ${stageNumber === stage ? "bg-lightBlue text-marineBlue font-ubuntuBold" : "bg-transparent"}  border border-white mx-3 text-white font-700`} >{stage}</div>
      ))}
    </nav>
  );
};

export default FormNavbar;
