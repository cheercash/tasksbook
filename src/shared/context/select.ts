import { Dispatch, SetStateAction, createContext } from "react";
import { SelectState } from "../ui/molecules/select";

type SelectContext = {
  state: SelectState | null;
  setState: Dispatch<SetStateAction<SelectState | null>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const SelectContext = createContext<SelectContext | null>(null);
