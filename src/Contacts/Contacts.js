import React from "react"
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";



export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>CONTACTS</h2>
                <form className={style.contactsForm} action="" method="post">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className={style.formButton} type="submit">SUBMIT</button>
                </form>

            </div>
        </div>
    )
}