import iconThankYou from "../assets/images/icon-thank-you.svg";
import { useContext } from "react";
import { FormDataContext } from "../context/FormDataProvider";
const Success = () => {
  const { setIsFormComplete, setStageNumber } = useContext(FormDataContext);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      <div className="upper-part absolute -top-8 w-80 h-96 bg-white px-4 py-5 rounded-md flex flex-col items-center justify-center md:top-0 md:w-full md:h-full md:flex md:flex-col md:py-12 md:items-center md:px-12">
        <div className="w-full flex flex-col items-center">
          <div className="w-1/6 flex justify-center mb-2">
            <img className="w-full" src={iconThankYou} alt="Thank you icon" />
          </div>
          <div className="flex flex-col items-center w-80 md:w-96">
            <h2 className="text-marineBlue text-2xl mb-2 font-ubuntuBold ">
              Thank you!
            </h2>
            <p className="text-coolGray text-md text-center px-3">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full bg-white h-48 flex flex-col justify-center items-center mt-5">
        <button
          type="button"
          onClick={() => {
            setIsFormComplete(false);
            setStageNumber(1);
          }}
          className="bg-marineBlue text-white hover:bg-black py-2 px-3 rounded-md font-ubuntuMedium my-2 mx-2"
        >
          Continue
        </button>
        <div className="flex justify-center text-md w-3/4">
          <p className="text-center">
            Challenge by{" "}
            <a
              className="hover:underline text-purplishBlue font-ubuntuBold"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="text-purplishBlue hover:underline font-ubuntuBold"
              href="#"
              target="_blank"
            >
              Mikiyas Kebede
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
