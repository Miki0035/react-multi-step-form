import { FormEvent, useContext, useState, useEffect } from "react";
import { FormDataContext } from "../context/FormDataProvider";
import { monthlyPlans, yearlyPlans } from "../constants/data";
import { Plan } from "../types";

const FormStageTwo = () => {
  const { setFormData, setStageNumber, formData } = useContext(FormDataContext);
  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState({
    id: "arcade",
    groupName: "monthly",
    name: "Arcade",
    price: 9,
  });

  const handlePlanSelect = ({ id, groupName, name, price }: Plan) => {
    setSelectedPlan({ ...selectedPlan, id, groupName, name, price });
  };

  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      plan: {...selectedPlan},
    }));
    setStageNumber((prevStage) => prevStage + 1)
  };

  useEffect(() => {
  },[formData])

  return (
    <form
      onSubmit={handleForm}
      className="relative w-full h-full flex flex-col items-center"
    >
      <div className="upper-part absolute -top-8 w-80 h-40vh bg-white px-4 py-5 rounded-md">
        <div className="text-upper w-72 my-4">
          <h1 className="text-marineBlue text-xl font-ubuntuBold">
            Select your plan
          </h1>

          <p className="flex flex-wrap text-coolGray text-md font-700 my-1">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="upper-form w-full">
          {isMonthlyPlan
            ? monthlyPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`my-4 flex flex-col border  rounded-md ${
                    selectedPlan.id === plan.id
                      ? "border-purplishBlue bg-magnolia"
                      : "border-lightGray"
                  } py-3`}
                  onClick={() => {
                    handlePlanSelect(plan);
                  }}
                >
                  <div className="flex justify-start items-center cursor-pointer">
                    <input
                      type="radio"
                      name={plan.groupName}
                      id={plan.id}
                      value={plan.id}
                      onChange={() => handlePlanSelect(plan)}
                      checked={selectedPlan.id === plan.id}
                      className="hidden"
                    />
                    <div className="w-23 mx-3">
                      <img
                        src={plan.icon}
                        alt={`${plan.name} icon`}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="arcade"
                        className="text-marineBlue font-ubuntuBold text-lg font-500"
                      >
                        {plan.name}
                      </label>
                      <p className="text-coolGray text-md">${plan.price}/mo</p>
                    </div>
                  </div>
                </div>
              ))
            : yearlyPlans.map((plan, index) => (
                <div
                  key={index}
                  onClick={() => handlePlanSelect(plan)}
                  className={`my-4 flex flex-col border rounded-md py-3
                  ${
                    selectedPlan.id === plan.id
                      ? "border-purplishBlue bg-magnolia"
                      : "border-lightGray"
                  }
                  `}
                >
                  <div className="flex justify-start items-center cursor-pointer">
                    <input
                      type="radio"
                      name={plan.groupName}
                      id={plan.id}
                      value={plan.id}
                      className="hidden"
                      onChange={() => handlePlanSelect(plan)}
                    />
                    <div className="w-23 mx-3">
                      <img
                        src={plan.icon}
                        alt={`${plan.name} icon`}
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="arcade"
                        className="text-marineBlue font-ubuntuBold text-lg"
                      >
                        {plan.name}
                      </label>
                      <p className="text-coolGray text-md">${plan.price}/yr</p>
                      <p className="text-marineBlue font-ubuntuMedium text-sm ">
                        {plan.warrenty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

          <div className="flex justify-center items-center w-full my-2">
            <div className="bg-magnolia items-center py-5 px-5 rounded-lg flex justify-evenly w-full">
              <span
                className={`${
                  isMonthly
                    ? "text-marineBlue font-ubuntuBold font-500"
                    : "text-coolGray"
                } `}
              >
                Monthly
              </span>
              <div
                className="inline w-12 h-6 flex  bg-marineBlue rounded-xl px-1 py-1 cursor-pointer"
                onClick={() => {
                  setIsMonthly(!isMonthly);
                  setIsMonthlyPlan(!isMonthlyPlan);
                }}
              >
                <span
                  className={`${
                    isMonthly
                      ? "transition ease-in-out delay-80"
                      : "translate-x-6 transition   ease-in-out delay-80"
                  } inline-block w-4 h-4 rounded-full bg-white`}
                ></span>
              </div>
              <span
                className={`${
                  !isMonthly
                    ? "text-marineBlue font-ubuntuBold font-700"
                    : "text-coolGray"
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white h-24 py-5 flex justify-between mt-5">
        <button
          type="button"
          className="capitalize text-coolGray mx-3"
          onClick={() => setStageNumber((prevStage) => prevStage - 1)}
        >
          go back
        </button>
        <button
          type="submit"
          className="bg-marineBlue text-lightBlue py-2 px-3 rounded-md self-end font-ubuntuMedium my-2 mx-2"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default FormStageTwo;
