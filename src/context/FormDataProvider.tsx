import { useState, createContext, ReactNode } from "react";
import { FormDataContextProps } from "../types";
import { FormData } from "../types";

const FormDataContext = createContext<FormDataContextProps>({
  stageNumber: 1,
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
  },
  setFormData: () => {},
});

const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [stageNumber, setStageNumber] = useState(2);
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
  });

  return (
    <FormDataContext.Provider
      value={{
        stageNumber,
        setStageNumber,
        formData,
        setFormData,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataProvider, FormDataContext };
