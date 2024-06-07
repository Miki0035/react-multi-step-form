import { Dispatch, SetStateAction } from "react";

export type Plan = {
  id: string | "";
  name: string | "";
  groupName: string | "";  
  price: number | 0;
}

export type AddOns = {
  id: string;
  name: string,
  desc: string,
  price: number,
}

export type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  addOns: AddOns[]
}

export type FormDataContextProps = {
  stageNumber: number;
  setStageNumber: Dispatch<SetStateAction<number>>;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
  isFormComplete: boolean;
  setIsFormComplete: Dispatch<SetStateAction<boolean>>;
};
