/* import { useState, useEffect } from "react"; */
import { useLoaderData } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import styles from "./DetailsPage.module.css";



export default function ImgOfTheDayPage() {
    
    const imgDay = useLoaderData();


        return (
            <div className={styles.detailMainContainer}>
            <NavBar />
            <h1>{imgDay.title}</h1>
            <h2>{imgDay.date}</h2>
            <div className={styles.imgContainer}>
              <img
                alt={imgDay.title}
                className={styles.catchfullImg}
                src={imgDay.url.replaceAll(" ","%20")}
              />
            </div>
            <p className={styles.explanation}>{imgDay.explanation}</p>
            </div>
        )

}