import React from "react"
import style from "./Skill.module.css"

export const Skill = (props) => {
    return(
        <div className={style.skillBlock}>
            <div className={style.skillIcon}></div>
            <h3>{props.title}</h3>
            <span className={style.skillDescription}>{props.description}</span>
        </div>
    )
}