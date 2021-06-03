import { InferActionsType } from "../store"
import { LanguageType } from "./church-reducer"
import { Dispatch } from "react"
import { BuildingType } from "../../Commons/Buildings/Buildings"
import { templesData } from "./MainData"

const TEMPLE_LANGUAGE_CHANGE = "TEMPLE_LANGUAGE_CHANGE"

const templeInitialState = {
    temples: [] as BuildingType[]
}


type TempleInitialStateType = typeof templeInitialState


export const templesReducer = (state: TempleInitialStateType = templeInitialState, action: TempleActionsType): TempleInitialStateType => {
    switch (action.type) {
        case TEMPLE_LANGUAGE_CHANGE:
            return {
                ...action.newState
            }
        default:
            return state
    }
}

const templesActions = {
    changeLanguage: (newState: TempleInitialStateType) => ({ type: TEMPLE_LANGUAGE_CHANGE, newState } as const)
}
type TempleActionsType = InferActionsType<typeof templesActions>
export const getTemplesNewLanguageState = (lng: LanguageType) => (dispatch: Dispatch<any>) => {
    const newState = templesData[lng]
    dispatch(templesActions.changeLanguage(newState))
}

