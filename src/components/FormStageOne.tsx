import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { FormDataContext } from "../context/FormDataProvider";

const FormStageOne = () => {
  const { setFormData, setStageNumber } = useContext(FormDataContext);
  const [localFormData, setlocalFormData] = useState({
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setlocalFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleForm = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log("No send");
    } else {
      console.log("submitte");
      setFormData(localFormData);
      setStageNumber((prevState) => prevState + 1);
    }
  };

  const validateForm = () => {
    let tempErrors = { name: "", email: "", phone: "" };
    if (localFormData.name === "") {
      tempErrors.name = "This field is required";
    }
    if (localFormData.email === "") {
      tempErrors.email = "This field is required";
    }
    if (localFormData.phone === "") {
      tempErrors.phone = "This field is required";
    } else if (isNaN(Number(localFormData.phone))) {
      tempErrors.phone = "Must be phone number";
    }
    setErrors(tempErrors);

    if (tempErrors.name || tempErrors.email || tempErrors.phone) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form
      onSubmit={handleForm}
      className="relative w-full h-full flex flex-col items-center"
    >
      <div className="upper-part absolute -top-8 w-96 h-[28rem] bg-white px-4 py-5 rounded-md md:top-0 md:w-full md:h-full md:flex md:flex-col md:py-24 md:items-center md:px-12">
        <div className="text-upper w-72 my-4 md:w-full">
          <h1 className="text-marineBlue text-xl font-ubuntuBold md:text-3xl">
            Personal info
          </h1>
          <p className="flex flex-wrap text-coolGray text-md font-700 my-1">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="upper-form w-full">
          <div className="my-4 flex flex-col md:my-6">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="md:text-lg text-marineBlue text-md"
              >
                Name
              </label>
              {errors.name && (
                <span className="md:text-md text-strawberryRed text-sm font-ubuntuMedium">
                  {errors.name}
                </span>
              )}
            </div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="e.g. Stephen King"
              className={`py-2 px-4 border mb-1 ${
                errors.name ? "border-strawberryRed" : "border-lightGray"
              }  rounded-md w-full md:w-5/6`}
            />
          </div>
          <div className="my-2 flex flex-col  md:my-6">
            <div className="flex justify-between">
              <label
                htmlFor="email"
                className="md:text-lg text-marineBlue text-md"
              >
                Email Address
              </label>
              {errors.email && (
                <span className="md:text-md text-strawberryRed text-sm font-ubuntuMedium">
                  {errors.email}
                </span>
              )}
            </div>

            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="e.g. stephenking@lorem.com"
              className={`py-2 px-4 border mb-1  ${
                errors.email ? "border-strawberryRed" : "border-lightGray"
              } rounded-md w-full md:w-5/6`}
            />
          </div>
          <div className="my-2 flex flex-col  md:my-6">
            <div className="flex flex-row justify-between">
              <label
                htmlFor="phone"
                className="md:text-lg text-marineBlue text-md"
              >
                Phone Number
              </label>
              {errors.phone && (
                <span className="text-strawberryRed text-sm font-ubuntuMedium">
                  {errors.phone}
                </span>
              )}
            </div>
            <input
              type="text"
              name="phone"
              id="phone"
              onChange={handleChange}
              placeholder="e.g. +1 234 567 890"
              className={`py-2 px-4 border mb-1  ${
                errors.name ? "border-strawberryRed" : "border-lightGray"
              } rounded-md w-full md:w-5/6`}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white h-24 flex justify-end mt-5 md:h-16 md:mt-0">
        <button
          type="submit"
          className="bg-marineBlue text-white h-12 mt-3 py-2 px-3 rounded-md font-ubuntuMedium my-2 mx-2 md:mr-10"
        >
          Next Step
        </button>
      </div>
    </form>
  );
};

export default FormStageOne;
