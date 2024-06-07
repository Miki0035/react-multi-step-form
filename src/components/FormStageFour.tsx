import { FormEvent, useContext, useEffect } from "react";
import { FormDataContext } from "../context/FormDataProvider";

const FormStageFour = () => {
  const { formData, setStageNumber, setIsFormComplete } = useContext(FormDataContext);
  let sum = 0;

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    setIsFormComplete(true)
  };

  const totalPrice = () => {
    formData.addOns.forEach((item) => (sum += item.price));
    return sum;
  };

  useEffect(() => {}, [formData]);

  return (
    <form
      onSubmit={handleForm}
      className="relative w-full h-full flex flex-col items-center"
    >
      <div className="upper-part absolute -top-8 w-80 h-40vh bg-white px-4 py-5 rounded-md md:top-0 md:w-full md:h-full md:flex md:flex-col md:py-12 md:items-center md:px-12">
        <div className="text-upper w-72 my-4  md:w-full">
          <h1 className="text-marineBlue text-2xl font-ubuntuBold">
            Finishing up
          </h1>
          <p className="flex flex-wrap text-coolGray text-md font-700 my-1">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="upper-form w-full">
          <div className="bg-alabaster flex flex-col rounded-md py-4 px-3 ">
            <div className="flex justify-between items-center border-b-2">
              <div>
                <h2 className="capitalize text-marineBlue font-ubuntuBold">
                  {formData.plan.id} ({formData.plan.groupName})
                </h2>
                <h3 className="underline text-coolGray mb-3 hover:underline hover:text-purplishBlue cursor-pointer">Change</h3>
              </div>
              <div>
                <p className="text-marineBlue font-ubuntuBold">
                  ${formData.plan.price}/
                  {formData.plan.groupName === "monthly" ? "mo" : "yr"}
                </p>
              </div>
            </div>
            <div>
              {formData.addOns.map((addOn, index) => (
                <div key={index} className="flex justify-between my-4">
                  <p className="text-md text-coolGray">{addOn.name}</p>
                  <p className="text-md text-marineBlue">
                    +${addOn.price}/
                    {formData.plan.groupName === "monthly" ? "mo" : "yr"}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between my-5 mx-2">
            <p className="text-md text-coolGray">Total (per month)</p>
            <p className="font-ubuntuBold text-purplishBlue">
              +${formData.plan.price + totalPrice()}/
              {formData.plan.groupName === "monthly" ? "mo" : "yr"}
            </p>
          </div>
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
          className="bg-purplishBlue text-alabaster py-2 px-3 rounded-md self-end my-2 mx-2 md:px-8 hover:bg-pastelBlue"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default FormStageFour;
