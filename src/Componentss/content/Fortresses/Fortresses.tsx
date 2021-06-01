import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Buildings } from "../../../Commons/Buildings/Buildings"
import { fortressesSelector } from "../../../store/selectors/fortressesSelector"




const Fortresses = () => {
    const fortresses = useSelector(fortressesSelector)
    return (
        <div className="churches">
          {Buildings({buildings:fortresses,buildingType:"fortresse"})}
        </div>
    )
}

export default Fortresses

