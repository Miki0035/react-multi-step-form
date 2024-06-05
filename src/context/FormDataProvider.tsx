import {useState, createContext, ReactNode } from 'react'
import { FormDataContextProps } from '../types';

const FormDataContext = createContext<FormDataContextProps>({
    stageNumber:  1,
    setStageNumber: () => {}
});

const FormDataProvider = ({children}: {children: ReactNode}) => {
    const [stageNumber, setStageNumber] = useState(1);
  return (
    <FormDataContext.Provider value={{
        stageNumber,
        setStageNumber
    }}
    >
        {children}
    </FormDataContext.Provider>
  )
}

export {FormDataProvider, FormDataContext }