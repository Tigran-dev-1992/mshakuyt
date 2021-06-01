import React, { useEffect } from "react"
import { Building } from "./Building"




type PropsType = {
    buildings: BuildingType[]
    buildingType: string
}
export type BuildingType = {
    name: string
    text: string
    photos: string[]
}

export const Buildings: React.FC<PropsType> = ({ buildings, buildingType }) => {
    useEffect(() => {
        return () => window.scrollTo(0, 0)
    }, [])

    return (
        <div className="buiuldings">
            {buildings.map((building, i) => {
                return <div id={`${buildingType}${i}`}>
                    <Building name={building.name} text={building.text} key={i} photos={building.photos} />
                </div>
            }
            )}
        </div>
    )
}


