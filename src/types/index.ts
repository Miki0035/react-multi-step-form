import { Dispatch, SetStateAction } from "react";

export type FormDataContextProps = {
    stageNumber: number;
    setStageNumber: Dispatch<SetStateAction<number>>;
}
