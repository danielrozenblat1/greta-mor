import React from 'react';
import styles from './Me.module.css';
import meshi from "../../images/גרטה מור.png"

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
         אני גרטה מור,בעלת 3 תארים כמדריכה מקצועית של אקריל וג'ל,מתמקצעת בבנייה באקריל אקסטרים ,עברתי השתלמויות בארץ ובחו''ל ואני מלמדת קרוב ל-8 שנים ,ליוויתי עשרות בנות שהפכו לעצמאיות בתחום הציפורניים ולהגשמה עצמית - אני עוסקת בתחום כבר מעל ל-20 שנה ותמיד אהבתי את התחום! הוא תמיד סקרן אותי וגרם לי לרצות רק להכיר אותו ולדעת עליו עוד.  
והיום - אני מעבירה את הידע שצברתי בתחום לכל אחת שנמצאת במקום שאני הייתי בו - נחושה להצליח,להגשים את עצמה ולעסוק במקצוע שהיא הכי אוהבת בעולם! 
        </p>


      </div>
    
    </div>

    </>
};

export default AboutMe;