import { bindActionCreators } from "redux"
import { InferActionsType } from "../store"


const SET_MODAL_VIZIBLE = "SET_MODAL_VIZIBLE"
const SET_MODAL_PHOTO_ARRAY = "SET_MODAL_PHOTO_ARRAY"
const SET_CURREN_INDEX = "SET_CURREN_INDEX"



const modaleInitialState = {
    modaleVizible: false,
    currentPhoto: "",
    currentIndex: 0,
    modalPhotosArray: [] as string[]
}


type ModalInitialStateType = typeof modaleInitialState

export const modaleActions = {
    setModalVizible: (modaleVizible: boolean) => ({ type: SET_MODAL_VIZIBLE, modaleVizible } as const),
    setModalPhotoArray: (modalePhotosArray: string[]) => ({ type: SET_MODAL_PHOTO_ARRAY, modalePhotosArray } as const),
    setCurrentIndex: (currentIndex: number) => ({ type: SET_CURREN_INDEX, currentIndex } as const),
}


type ModaleActionsType = InferActionsType<typeof modaleActions>

export const modaleReducer = (state: ModalInitialStateType = modaleInitialState, action: ModaleActionsType): ModalInitialStateType => {
    switch (action.type) {
        case SET_MODAL_VIZIBLE:
            return {
                ...state,
                modaleVizible: action.modaleVizible
            }
        case SET_MODAL_PHOTO_ARRAY:
            return {
                ...state,
                modalPhotosArray: action.modalePhotosArray
            }
        case SET_CURREN_INDEX:
            return {
                ...state,
                currentIndex: action.currentIndex
            }
        default:
            return state
    }
}

