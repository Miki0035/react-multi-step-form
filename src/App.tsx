import { FormDataProvider } from "./context/FormDataProvider";
import FormNavbar from "./components/FormNavbar";
import FormContainer from "./containers/FormContainer";

const App = () => {
  return (
    <FormDataProvider>
      <main className="relative bg-alabaster w-full h-full flex flex-col items-center md:flex-row md:w-[900px] md:rounded-xl md:my-5 md:h-[650px] xl:w-[1200px]">
        <FormNavbar />
        <FormContainer />
      </main>
    </FormDataProvider>
  );
};

export default App;
