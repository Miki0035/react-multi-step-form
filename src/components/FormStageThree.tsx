import { FormEvent, useContext, useEffect, useState } from "react";
import { FormDataContext } from "../context/FormDataProvider";
import { monthlyAddOns, yearlyAddOns } from "../constants/data";
import { AddOns } from "../types";
const FormStageThree = () => {
  const { formData, setFormData, setStageNumber } = useContext(FormDataContext);
  const [selectedAddOn, setSelectedAddOn] = useState<AddOns[]>([]);

  useEffect(() => {}, [formData]);

  const handleAddonSelect = (addOn: AddOns) => {
    if (selectedAddOn.includes(addOn)) {
      setSelectedAddOn((prevSelectedAddon) =>
        prevSelectedAddon.filter((item) => item !== addOn)
      );
    } else {
      setSelectedAddOn([...selectedAddOn, addOn]);
    }
  };

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      addOns: [...selectedAddOn],
    }));
    setStageNumber((prevStage) => prevStage + 1);
  };
  return (
    <form
      onSubmit={handleForm}
      className="relative w-full h-full flex flex-col items-center"
    >
      <div className="upper-part absolute -top-8 w-80 h-40vh bg-white px-4 py-5 rounded-md md:top-0 md:w-full md:h-full md:flex md:flex-col md:py-12 md:items-center md:px-12">
        <div className="text-upper w-72 my-4  md:w-full">
          <h1 className="text-marineBlue text-2xl font-ubuntuBold md:text-3xl">
            Pick add-ons
          </h1>
          <p className="flex flex-wrap text-coolGray text-md font-700 my-1">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="upper-form w-full">
          {formData.plan.groupName === "monthly"
            ? monthlyAddOns.map((add, index) => (
                <div
                  key={index}
                  className={`my-4 flex flex-col border  rounded-md ${
                    selectedAddOn.includes(add)
                      ? "border-purplishBlue bg-magnolia"
                      : "border-lightGray"
                  } py-3 md:py-4 `}
                  onClick={() => {
                    handleAddonSelect(add);
                  }}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-23 mx-4">
                        <input
                          type="checkbox"
                          name={add.name}
                          id={add.id}
                          value={add.id}
                          onChange={() => handleAddonSelect(add)}
                          checked={selectedAddOn.includes(add)}
                          className="w-4 h-4"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="arcade"
                          className="text-marineBlue font-ubuntuBold text-md"
                        >
                          {add.name}
                        </label>
                        <p className="text-coolGray text-xs font-ubuntuMedium">
                          {add.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mx-2">
                      <p className="text-sm text-purplishBlue font-ubuntuMedium ">
                        +${add.price}/mo
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : yearlyAddOns.map((add, index) => (
                <div
                  key={index}
                  className={`my-4 flex flex-col border  rounded-md ${
                    selectedAddOn.includes(add)
                      ? "border-purplishBlue bg-magnolia"
                      : "border-lightGray"
                  } py-3 `}
                  onClick={() => {
                    handleAddonSelect(add);
                  }}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-23 mx-4">
                        <input
                          type="checkbox"
                          name={add.name}
                          id={add.id}
                          value={add.id}
                          onChange={() => handleAddonSelect(add)}
                          checked={selectedAddOn.includes(add)}
                          className="w-4 h-4"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="arcade"
                          className="text-marineBlue font-ubuntuBold text-md"
                        >
                          {add.name}
                        </label>
                        <p className="text-coolGray text-xs font-ubuntuMedium">
                          {add.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mx-2">
                      <p className="text-sm text-purplishBlue font-ubuntuMedium ">
                        +${add.price}/yr
                      </p>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white h-24 py-5 flex justify-between mt-5 md:mt-0 md:px-10">
        <button
          type="submit"
          onClick={() => setStageNumber((prevStage) => prevStage - 1)}
          className="capitalize text-coolGray mx-3"
        >
          go back
        </button>
        <button
          type="submit"
          className="bg-marineBlue text-white py-2 px-3 rounded-md self-end font-ubuntuMedium my-2 mx-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default FormStageThree;
