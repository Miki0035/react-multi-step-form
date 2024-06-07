import { useContext } from "react";
import { FormDataContext } from "../context/FormDataProvider";
import {
  FormStageFour,
  FormStageOne,
  FormStageTwo,
  FormStageThree,
  Success,
} from "../components";
const FormContainer = () => {
  const { stageNumber, isFormComplete } = useContext(FormDataContext);
  return (
    <div className="relative w-full h-screen bg-magnolia rounded-md flex flex-col items-start md:h-[600px]">
      {!isFormComplete && stageNumber === 1 ? (
        <FormStageOne />
      ) : !isFormComplete && stageNumber === 2 ? (
        <FormStageTwo />
      ) : !isFormComplete && stageNumber === 3 ? (
        <FormStageThree />
      ) : !isFormComplete && stageNumber === 4 ? (
        <FormStageFour />
      ) : (
        isFormComplete && <Success />
      )}
    </div>
  );
};

export default FormContainer;
