import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootReducerType } from "../store/reducers/index";

export const useTypedSelector: TypedUseSelectorHook<rootReducerType> = useSelector;
