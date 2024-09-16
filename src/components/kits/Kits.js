import React from 'react';
import styles from './Kits.module.css';
import kits from "../../images/גרטה מור תלמידות 4.png"
const CourseKits = () => {
  const personalBenefits = [
    'יחס אישי',
    'ליווי צמוד לאורך כל הקורס',
    'תמיכה מקצועית גם לאחר סיום הקורס',
    'עזרה בהשתלבות בשוק העבודה'
  ];

  const basicKit = [
    'מספריים של סטליקס', 'דוחף עור סטליקס', 'ראש תירס (הסרה של ג׳ל)',
    'ראש להב גדולה למניקור', 'ראש להב הקטנה', 'ראש כיפה לחליק את העור',
    'ממיס קטיקולה', '10 פצירות פרפר', 'רבר בייס שקוף קומינו פו',
    'רבר בייס בצבע koyo', 'פול ג׳ל', 'טיפס הפוך', 'אלכוהול 99%',
    'פדים', 'מקלות לנזילות', 'מכחול אפס למבנה אטומי', 'קטר',
    'טופ', 'באפר', '5 ג׳לים של ונליס (חובה לבן שחור אדום)',
    'מנורת ייבוש סאן 2'
  ];

  const advancedKit = [
    'כל מה שכלול בערכה הבסיסית', '20 פצירות פרפר במקום 10',
    '2 רבר בייס בצבע koyo', 'פול ג׳ל שקוף', '2 באפר',
    'מכונת שיוף של boba או vivdrim', 'אולטרה סוניק',
    'ברבסייד חומר חיטוי', '30 גוונים של ג׳לים koyo'
  ];

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
      <p className={styles.priceNote}>* מחיר הערכות אינו כלול במחיר הקורס</p>
    </div>
  );
};
export default CourseKits