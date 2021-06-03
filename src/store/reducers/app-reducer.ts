import { Dispatch } from "react"
import { InferActionsType } from "../store"
import { getChurchesNewLanguageState, LanguageType } from "./church-reducer"
import { getFortressesNewLanguageState } from "./fortresses-reducer"
import { getOtherNewLanguageState } from "./other-reducer"
import { getTemplesNewLanguageState } from "./temple-reducer"

const SET_INITIALAZED = "SET_INITIALAZED"
const SET_LANGUAGE = "SET_LANGUAGE"

const appInitialeState = {
    isInitialized: false,
    language: "arm"
}

type AppInitialStateType = typeof appInitialeState




export const appReducer = (state = appInitialeState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case SET_INITIALAZED:
            return {
                ...state,
                isInitialized: action.initialazed
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.lng
            }
        default:
            return state
    }
}


const appActions = {
    setInitialized: (initialazed: boolean) => ({ type: SET_INITIALAZED, initialazed } as const),
    setLanguage: (lng: LanguageType) => ({ type: SET_LANGUAGE, lng } as const)
}
export const getInitialazed = (lng: LanguageType = "arm") => (dispatch: Dispatch<any>) => {
    dispatch(appActions.setInitialized(false))
    Promise.all([
        dispatch(getChurchesNewLanguageState(lng)),
        dispatch(getFortressesNewLanguageState(lng)),
        dispatch(getTemplesNewLanguageState(lng)),
        dispatch(getOtherNewLanguageState(lng))
    ]).then(() => {
        setTimeout(() => {
            dispatch(appActions.setInitialized(true))
            dispatch(appActions.setLanguage(lng))
        }, 500)

    })
}

type AppActionsType = InferActionsType<typeof appActions>