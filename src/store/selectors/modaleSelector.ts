import { RootStateType } from "../store";

export const modaleVizibleSelector = (state:RootStateType)=>{return state.modale.modaleVizible}
export const currentPhotoSelector = (state:RootStateType)=>{return state.modale.currentPhoto}
export const currentIndexSelector = (state:RootStateType)=>{return state.modale.currentIndex}
export const modalePhotosSelector = (state:RootStateType)=>{return state.modale.modalPhotosArray}