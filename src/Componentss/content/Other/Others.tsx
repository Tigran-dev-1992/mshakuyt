import React from "react"
import { useSelector } from "react-redux"
import { Buildings } from "../../../Commons/Buildings/Buildings"
import { otherSelector } from "../../../store/selectors/churchesSelector"






const Others = () => {
    const others= useSelector(otherSelector)
    return(
        <div>
            {Buildings({buildings:others,buildingType:"temple"})}
        </div>
    )
}

export default Others