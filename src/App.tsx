import { FormDataProvider } from "./context/FormDataProvider";
import FormNavbar from "./components/FormNavbar";
import FormContainer from "./containers/FormContainer";

const App = () => {
  return (
    <FormDataProvider>
      <main className="relative bg-alabaster w-full h-full flex flex-col items-center">
        <FormNavbar />
        <FormContainer />
      </main>

      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div> */}
    </FormDataProvider>
  );
};

export default App;
