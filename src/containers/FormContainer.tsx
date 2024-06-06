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
  const { stageNumber } = useContext(FormDataContext);
  return (
    <div className="relative w-full h-screen bg-magnolia rounded-md flex flex-col items-start">
      {stageNumber === 1 ? (
        <FormStageOne />
      ) : stageNumber === 2 ? (
        <FormStageTwo />
      ) : stageNumber === 3 ? (
        <FormStageThree />
      ) : stageNumber === 4 ? (
        <FormStageFour />
      ) : (
        <Success />
      )}
    </div>
  );
};

export default FormContainer;
