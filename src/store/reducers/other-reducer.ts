import { Dispatch } from "react"
import { BuildingType } from "../../Commons/Buildings/Buildings"
import { InferActionsType } from "../store"
import { LanguageType } from "./church-reducer"
import { otherData } from "./MainData"


const OTHER_LANGUAGE_CHANGE = "OTHER_LANGUAGE_CHANGE"

const otherInitialState = {
    others: [] as BuildingType[]
}

type OtherInitialStateType = typeof otherInitialState


export const otherReducer = (state: OtherInitialStateType = otherInitialState, action: OtherActionType): OtherInitialStateType => {
    switch (action.type) {
        case OTHER_LANGUAGE_CHANGE:
            return {
                ...action.newState
            }
        default:
            return state
    }
}

const otherActions = {
    changeLanguage: (newState: OtherInitialStateType) => ({ type: OTHER_LANGUAGE_CHANGE, newState } as const)
}
export const getOtherNewLanguageState = (lng:LanguageType)=>(dispatch:Dispatch<any>)=>{
    const newState = otherData[lng]
    dispatch(otherActions.changeLanguage(newState))
}
type OtherActionType = InferActionsType<typeof otherActions>


