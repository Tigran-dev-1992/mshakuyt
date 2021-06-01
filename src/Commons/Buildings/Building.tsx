import { Dispatch, useEffect } from "react"
import { useDispatch } from "react-redux"
import { modaleActions } from "../../store/reducers/modale-reducer"
import { BuildingType } from "./Buildings"

function removeActiveClasses() {
    const arrows = document.querySelectorAll(".active")
    arrows.forEach(arrow => {
        arrow.classList.remove("active")
    })
    const activeItem = document.querySelector(".item-active")
    activeItem?.classList.remove("item-active")
}

export const useClear= (dispatch:Dispatch<any>)=>  useEffect(() => {
    return () => { 
        dispatch(modaleActions.setModalVizible(false)) 
        removeActiveClasses()
    }
}, [])

export const Building: React.FC<BuildingType> = ({ name, text, photos }) => {
    const dispatch = useDispatch()
    useClear(dispatch)
    const hendlerClick = (i: number, photos: string[]) => {
        dispatch(modaleActions.setModalVizible(true))
        dispatch(modaleActions.setModalPhotoArray(photos))
        dispatch(modaleActions.setCurrentIndex(i))
    }

    return (
        <div className="building text-center">
            <div className="building__name">
                {name}
            </div>
            <div className="building__text">
                {text}
            </div>
            <div className="building__photos d-flex flex-wrap justify-content-center">
                {photos.map((photo, i) => {
                    return <img src={photo} key={i} alt="" className="building__photo" onClick={() => hendlerClick(i, photos)} />
                })}
            </div>
        </div>
    )
}
