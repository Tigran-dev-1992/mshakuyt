import React, { useEffect} from "react"
import { useSelector } from "react-redux"
import { Buildings } from "../../../Commons/Buildings/Buildings"
import { templesSelector } from "../../../store/selectors/templeSelectors"





const Temples = () => {
    const temples = useSelector(templesSelector)
    return(
        <div>
            {Buildings({buildings:temples,buildingType:"temple"})}
        </div>
    )
}

export default Temples