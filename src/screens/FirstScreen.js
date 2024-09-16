import React from 'react';
import styles from './FirstScreen.module.css';
import greta from "../images/גרטה מור ליווי.png";
import Button from '../components/button/Button';
import { ChevronDown } from 'lucide-react';
const FirstScreen = ({ scrolled }) => {
    return (
      <div className={scrolled ? styles.wrapperP : styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.descriptionWrapper}>
            <p className={styles.description}>
              לאחר שליוותה עשרות נשים להגשמה עצמית ולשגשוג כלכלי מהתחום
            </p>
          </div>
          <img src={greta} alt="גרטה מור" className={styles.image} />
          <div className={styles.contentSection}>
            <h1 className={styles.title}>גרטה מור מציגה</h1>
            <div className={styles.divider}></div>
            <h2 className={styles.subtitle}>
              קורסים והשתלמויות ללימוד ציפורניים
            </h2>
          </div>
          <div className={styles.arrowContainer}>
            <ChevronDown className={styles.arrow} size={38} />
          </div>
        </div>
      </div>
    );
  };
  
export default FirstScreen;