import React from "react"
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {waitForElementToBeRemoved} from "@testing-library/react";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2>MY SKILLS</h2>

                <div className={style.skills}>
                    <Skill title={"HTML"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                    <Skill title={"CSS"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                    <Skill title={"JS"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                    <Skill title={"REACT"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                    <Skill title={"TIPESCRIPT"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                    <Skill title={"REDUX"}
                           description={"Fusce suscipit, ante a hendrerit thelery ullamcorper vivense comtersa risus " +
                           "nisl cursus nurus the viverra ante nulla."}/>
                </div>
            </div>
        </div>
    )
}