import { useState, createContext, ReactNode } from "react";
import { FormDataContextProps } from "../types";
import { FormData } from "../types";

const FormDataContext = createContext<FormDataContextProps>({
  stageNumber: 0,
  setStageNumber: () => {},
  formData: {
    name: "",
    email: "",
    phone: "",
    plan: {
      id: "",
      name: "",
      groupName: "",
      price: 0,
    },
    addOns: [],
  },
  setFormData: () => {},
  isFormComplete: false,
  setIsFormComplete: () => {}
});

const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [stageNumber, setStageNumber] = useState(1);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    plan: {
      id: "",
      name: "",
      groupName: "",
      price: 0,
    },
    addOns: [],
  });

  return (
    <FormDataContext.Provider
      value={{
        stageNumber,
        setStageNumber,
        formData,
        setFormData,
        isFormComplete,
        setIsFormComplete,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataProvider, FormDataContext };
