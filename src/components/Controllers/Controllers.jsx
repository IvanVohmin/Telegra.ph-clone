import React from 'react';
import styles from './Controllers.module.css'
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";


function Controllers(props) {

    const buttons = [
        {
            type: "IMAGE_ADD",
            i: <IoImageOutline />,
        },
        {
            type: "COMPLETE",
            i: <MdOutlineDone />,
        },
    ]
    return (
        <div className={styles.controllers}>
            <div className={styles.inner}>
                {buttons?.map((button, idx) => (
                    <div className={styles.el}>
                        <button className={styles.btn} key={idx}>
                            <div className={styles.box}>
                                {button.i}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Controllers;
