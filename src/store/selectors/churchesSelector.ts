import { RootStateType } from "../store";

export const churchesSelector = (state:RootStateType)=>{return state.churches.churches}
export const otherSelector = (state:RootStateType)=>{return state.others.others}