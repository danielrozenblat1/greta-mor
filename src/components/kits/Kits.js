import React from 'react';
import styles from './Kits.module.css';
import kits from "../../images/גרטה מור תלמידות 4.png"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
const CourseKits = () => {
  const personalBenefits = [
    'יחס אישי',
    'ליווי צמוד לאורך כל הקורס',
    'תמיכה מקצועית גם לאחר סיום הקורס',
    'עזרה בהשתלבות בשוק העבודה'
  ];

  const basicKit = [
    'מספריים של סטליקס', 'דוחף עור סטליקס', 'ראש קרחת (הסרה של ג׳ל)',
    'ראש להב גדולה למניקור','ראש כיפה קטנה למניקור', 'ראש להבה קטנה', 'ראש כיפה להחליק את העור',
    'ממיס קטיקולה', '10 פצירות', 'רבר בייס שקוף',
    'רבר בייס בצבע', 'פולי ג׳ל', 'טיפס הפוך', 'אלכוהול 99%',
    'פדים', 'מקלות לנזילות', 'מכחול אפס למבנה אטומי', 'קטר',
    'טופ', 'באפר', '5 ג׳לים של ונליסה (חובה לבן שחור אדום)',
    'מנורת ייבוש סאן 2'
  ];

  const advancedKit = [
    
    'מספריים של סטליקס', 'דוחף עור סטליקס', 'ראש קרחת (הסרה של ג׳ל)',
    'ראש להב גדולה למניקור','ראש כיפה קטנה למניקור', 'ראש להבה קטנה', 'ראש כיפה להחליק את העור',
    'ממיס קטיקולה', 
 , '20 פצירות',
    '2 רבר בייס בצבע', 'פולי ג׳ל שקוף' , 'טיפס הפוך', 'אלכוהול 99%','2 באפר','פדים', 'מקלות לנזילות','מכחול אפס למבנה אנטומי','קטר','טופ','מנורת ייבוש',
   'מכונת שיוף', 'אולטרה סוניק',
    'ברבסייד חומר חיטוי', '30 גוונים של ג׳לים'
  ];

  useEffect(()=>{
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

  },[])
  return (
    <div className={styles.kitsWrapper}>
      <h2 className={styles.kitsTitle}>בשני הקורסים תקבלו ממני:</h2>
      <ul className={styles.benefitsList}>
        {personalBenefits.map((benefit, index) => (
          <li key={index} className={styles.benefitItem}>
            <span className={styles.checkmark}>✓</span> {benefit}
          </li>
        ))}
      </ul>
      <h3 className={styles.kitsSubtitle}>אפשרות בחירה בין שתי ערכות:</h3>
      <div className={styles.imageContainer}>
        <img src={kits} alt="ערכות קורס" className={styles.kitImage} />
      </div>
      <div className={styles.kitsContainer}>
        <div className={styles.kitCard}>
          <h4 className={styles.kitTitle}>ערכה בסיסית למתחילות</h4>
          <ul className={styles.kitList}>
            {basicKit.map((item, index) => (
              <li key={index} className={styles.kitItem}>
                <span className={styles.checkmark}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.kitCard}>
          <h4 className={styles.kitTitle}>ערכת V.P Pro למתחילות</h4>
          <ul className={styles.kitList}>
            {advancedKit.map((item, index) => (
              <li key={index} className={styles.kitItem}>
                <span className={styles.checkmark}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={styles.priceNote}>* מחיר הערכות אינו כלול במחיר הקורס
        <br/>
        ניתן לרכוש ערכה באופן עצמאי לפני ההגעה לקורס
      </p>
    </div>
  );
};
export default CourseKits