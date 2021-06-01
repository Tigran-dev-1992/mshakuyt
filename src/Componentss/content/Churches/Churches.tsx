import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Buildings } from "../../../Commons/Buildings/Buildings"
import { churchesSelector } from "../../../store/selectors/churchesSelector"




const Churches = () => {
    const churches = useSelector(churchesSelector)
    return (
        <div className="churches">
          {Buildings({buildings:churches,buildingType:"church"})}
        </div>
    )
}

export default Churches

