import { Dispatch } from "react"
import { BuildingType } from "../../Commons/Buildings/Buildings"
import { InferActionsType } from "../store"
import { LanguageType } from "./church-reducer"
import { fortessesData } from "./MainData"

const FORTRESSES_LANGUAGE_CHANGE = "FORTRESSES_LANGUAGE_CHANGE"

const fortressesInitialState = {
    fortresses: []as BuildingType[]
}

type FortessesInitialStateType = typeof fortressesInitialState


export const fortressesReducer = (state: FortessesInitialStateType = fortressesInitialState, action: FortressesActionsType): FortessesInitialStateType => {
    switch (action.type) {
        case FORTRESSES_LANGUAGE_CHANGE:
            return {
                   ...action.newState
            }
            default:
                return state
    }
   
}
const fortressesActions = {
    changeLanguage: (newState: FortessesInitialStateType) => ({ type: FORTRESSES_LANGUAGE_CHANGE , newState } as const)
}

export const getFortressesNewLanguageState = (lng:LanguageType)=>(dispatch:Dispatch<any>)=>{
    const newState = fortessesData[lng]
    dispatch(fortressesActions.changeLanguage(newState))
}

type FortressesActionsType = InferActionsType<typeof fortressesActions>



