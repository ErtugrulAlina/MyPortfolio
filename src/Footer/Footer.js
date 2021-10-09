import React from "react"
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";



export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Alina Ertugrul</h2>
                <div className={style.footerIcons}>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>
                    <div className={style.footerIcon}></div>

                </div>
            </div>
        </div>
    )
}