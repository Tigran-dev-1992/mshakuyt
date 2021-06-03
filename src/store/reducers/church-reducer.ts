import { InferActionsType } from "../store"
import { Dispatch } from "react"
import { BuildingType } from "../../Commons/Buildings/Buildings"
import { charchesData } from "./MainData"


const CHURCHES_CHANGE_LANGUAGE = "CHURCHES_CHANGE_LANGUAGE "


const churchInitialState = {
    churches: [] as BuildingType[]
}

type ChurchInitialStateType = typeof churchInitialState


export const churchesReducer = (state: ChurchInitialStateType = churchInitialState, action: ChurchesActionsType): ChurchInitialStateType => {
    switch (action.type) {
        case CHURCHES_CHANGE_LANGUAGE :
            return {
                ...action.newState
            }
            default: 
            return state
    }
}


const churchesActions = {
    changeLanguage: (newState: ChurchInitialStateType) => ({ type: CHURCHES_CHANGE_LANGUAGE , newState } as const)
}
export type LanguageType = "arm"|"en"|"ru"
export const getChurchesNewLanguageState = (lng:LanguageType)=>(dispatch:Dispatch<any>)=>{
    const newState = charchesData[lng]
    dispatch(churchesActions.changeLanguage(newState))
}

type ChurchesActionsType = InferActionsType<typeof churchesActions>


