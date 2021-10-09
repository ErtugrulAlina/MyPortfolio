import React from "react"
import style from "./Work.module.css"

export const Work = (props) => {
    return(
        <div className={style.workBlock}>
            <div className={style.workPhotoBlock}>
           <a className={style.buttonWork} href="">View</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.workDescription}>{props.description}</span>

        </div>
    )
}