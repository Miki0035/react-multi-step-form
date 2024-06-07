import { formStages } from "../constants/data";
import { useContext } from "react";
import { FormDataContext } from "../context/FormDataProvider";
const FormNavbar = () => {
  const { stageNumber } = useContext(FormDataContext);
  return (
    <nav className="bg-nav-mobile-img bg-cover w-full h-[150px] flex justify-center items-center md:bg-nav-desktop-img md:h-[600px] md:w-[500px] md:mx-2 md:rounded-lg md:flex-col md:py-5 md:justify-start">

      {formStages.map((stage, index) => (
        <div className="flex md:w-full md:px-5 md:my-4">
          <div
            key={index}
            className={`rounded-full w-10 h-10 flex justify-center items-center ${
              stageNumber === stage.stageNumber
                ? "bg-lightBlue text-marineBlue font-ubuntuBold"
                : "bg-transparent text-white"
            }  border border-white mx-3  font-700`}
          >
            {stage.stageNumber}
          </div>
          <div className="hidden md:flex flex-col">
            <p className="uppercase text-sm text-coolGray">step {stage.stageNumber}</p>
            <p className="uppercase text-md text-white">{stage.stageInfo}</p>
          </div>
        </div>
      ))}

    </nav>
  );
};

export default FormNavbar;
