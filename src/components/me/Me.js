import React from 'react';
import styles from './Me.module.css';
import meshi from "../../images/גרטה מור.jpeg"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">נעים מאוד</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={meshi} alt="גרטה מור" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>גרטה מור</h1>

        <p className={styles.description}>
         אני גרטה, מלמדת קרוב ל-8 שנים וליוויתי עשרות בנות שהפכו לעצמאיות בתחום הציפורניים ולהגשמה עצמית - אני עוסקת בתחום כבר מעל ל-20 שנה ותמיד אהבתי את התחום! הוא תמיד סקרן אותי וגרם לי לרצות רק להכיר אותו ולדעת עליו עוד 
והיום - אני מעבירה את הידע שצברתי בתחום לכל אחת שנמצאת במקום שאני הייתי בו - נחושה להצליח, נחושה להגשים את עצמי ונחושה לעסוק במקצוע שאני הכי אוהבת בעולם! 
        </p>


      </div>
    
    </div>

    </>
};

export default AboutMe;