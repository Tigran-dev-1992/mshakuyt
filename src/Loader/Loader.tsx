import React  from "react"
import loader from "../images/loader.gif"


const Loader = ()=>{
    return(
        <div className = "loader d-flex align-items-center justify-content-center">
            <img src={loader} alt="" />
        </div>
    )
}

export default Loader