import React from "react"
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Work} from "./work/Work";


export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2>MY WORKS</h2>

                <div className={style.works}>
                    <Work photo={""} title={"TODOLIST"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus nisl cursus nurus the viverra ante nulla."}/>
                    <Work photo={""} title={"SOCIAL-NETWORK"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus nisl cursus nurus the viverra ante nulla."}/>
                </div>
            </div>
        </div>
    )
}