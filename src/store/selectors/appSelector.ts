import { RootStateType } from "../store";

export const isInitializedSelector = (state:RootStateType)=>{return state.app.isInitialized}
export const langugeSelector = (state:RootStateType)=>{return state.app.language}