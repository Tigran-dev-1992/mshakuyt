import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { Buildings } from "../../../Commons/Buildings/Buildings"
import { churchesSelector } from "../../../store/selectors/churchesSelector"




const Churches = () => {
  const churches = useSelector(churchesSelector)
  return (
    <div>
      {Buildings({ buildings: churches, buildingType: "church" })}
    </div>
  )
}

export default Churches

