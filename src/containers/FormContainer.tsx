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
    <div className="w-3/4 bg-alabaster border-sm flex flex-col items-start">
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
      <button className="bg-marineBlue text-lightBlue py-2 px-3 rounded-md self-end font-ubuntuMedium my-2 mx-2">
        Next Step
      </button>
      {
        stageNumber >= 2 && (<button>Back</button>)
      }
    </div>
  );
};

export default FormContainer;
