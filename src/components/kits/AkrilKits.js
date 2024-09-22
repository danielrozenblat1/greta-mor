import React from 'react';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Kits.module.css';
import kits from "../../images/ערכה קורס אקריל.jpg"; // You'll need to replace this with the actual image for acrylic course kits

const AcrylicCourseKits = () => {


  const beginnerKit = [
    'נוזל אקריל',
    'אבקת אקריל',
    'פריימר',
    'טיפסים',
    'דבק',
    'קטר',
    'פצירות',
    'ראש סגירות',
    'מכונת שיוף',
    'אולטרה סוניק'
  ];

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.kitsTitle}`, {
      duration: 1000,
      distance: "50px",
      origin: "left",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.kitsWrapper}>


      <div className={styles.imageContainer}>
        <img src={kits} alt="ערכות קורס אקריל" className={styles.kitImage} />
      </div>
      <div className={styles.kitsContainer}>
        <div className={styles.kitCard}>
          <h4 className={styles.kitTitle}>ערכה למתחילות</h4>
          <ul className={styles.kitList}>
            {beginnerKit.map((item, index) => (
              <li key={index} className={styles.kitItem}>
                <span className={styles.checkmark}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.priceNote}>
        * מחיר הערכה אינו כלול במחיר הקורס
        <br />
      ניתן לרכוש ערכה עצמאית לפני ההגעה לקורס
      </p>

    </div>
  );
};

export default AcrylicCourseKits;