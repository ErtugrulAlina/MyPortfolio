import React from "react"
import style from "./Main.module.css"
import styleContainer from "./../common/styles/Container.module.css"


export const Main = () => {
    return (
        <div className={style.main}>
                <div className={styleContainer.container}>
                    <div className={style.text}>
                        <span>Hi there</span>
                        <h1>I am Alina Ertugrul</h1>
                        <p>I am Frontend Developer</p>
                    </div>
                    <div className={style.photo}></div>
                </div>
        </div>
    )
}