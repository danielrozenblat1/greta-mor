import React, { useEffect } from 'react';
import styles from './More.module.css';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';

const AdvancedTrainingCourses = () => {
  const coursesDetails = [
    {
      title: "השתלמות של 5 שעות",
      description: "השתלמות שתשפר את רמת העבודה שלך, תלמד אותך טכניקות חדשות ותצמצם את זמני העבודה שלך.",
      benefits: [
        "מניקור בראש אחד",
        "מבנה אנטומי בשיטה קלה",
        "מריחה צמודה לקטיקולה",
        "צילום אינסטגרמי"
      ]
    },
    {
      title: "השתלמות של 2 שיעורים (4 שעות כל אחד)",
      description: "למדי את הטכניקה החדשה והקלה ביותר לבניית ציפורניים בג'ל בתבניות הפוכות.",
      benefits: [
        "טכניקה חדשה לבניית ציפורניים בג'ל",
        "שילוב יצירתיות, נצנצים ופרנצ'ים",
        "טכניקות מובילות בעולם הציפורניים",
        "שיפור טכניקות העבודה הקיימות"
      ]
    },
    {
      title: "השתלמות אקריל",
      description: "שפרי את רמת העבודה שלך באקריל ולמדי את הטכניקות הנכונות.",
      benefits: [
        "שיפור ודיוק של רמת עבודה",
        "הנחת חומר בצורה מסודרת",
        "היחס הנכון בין נוזל לאבקה",
        "סגירות נכונות ופינישים מקצועיים",
        "צורה חדה ומדויקת"
      ]
    }
  ];

  const generalBenefits = [
    "שיפור רמת העבודה",
    "למידת טכניקות חדשות ומתקדמות",
    "צמצום זמני עבודה",
    "יעילות מוגברת",
    "שירות איכותי יותר ללקוחות",
    "אפשרות להעלאת מחירים",
    "הרחבת קהל הלקוחות"
  ];

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.courseTitle}`, {
      duration: 1000,
      distance: "50px",
      origin: "right",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
 

  }, []);

  return <>
    <div className={styles.courseWrapper} id="השתלמויות">
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>השתלמויות מקצועיות</h1>
        <div className={styles.description}>
          ההשקעה בהשתלמות היא המפתח להצלחה! כשאנחנו מתמקצעים ולומדים טכניקות חדשות, זה לא רק מעשיר את הידע והמיומנויות שלנו - זה גם מאפשר לנו לעבוד ביעילות רבה יותר ולחסוך בזמנים.
        </div>
        <div className={styles.courseInfo}>
          <h3>יתרונות ההשתלמויות:</h3>
          {generalBenefits.map((item, index) => (
            <p key={index} className={styles.courseItem}>
              <span className={styles.checkmark}>✓</span> {item}
            </p>
          ))}
        </div>
        <div className={styles.coursesContainer}>
          {coursesDetails.map((course, index) => (
            <div key={index} className={styles.courseCard}>
              <div className={styles.courseContent}>
                <h2 className={styles.courseTitle}>{course.title}</h2>
                <p className={styles.courseDescription}>{course.description}</p>
                <ul className={styles.benefitsList}>
                  {course.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className={styles.benefitItem}>
                      <span className={styles.checkmark}>✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.conclusion}>
          השתלמות אחת יכולה להביא לך רווח משמעותי: צמצום זמנים מאפשר לך להכניס יותר לקוחות, ושיפור הטכניקה מאפשר להעלות מחירים בהתאם לרמת העבודה. זהו המפתח להצלחה - להתפתח ולהצליח!
        </p>
      </div>
  
    </div>
        <Button text="גרטה, בואי נדבר!" message="היי גרטה,אשמח לשמוע עוד לגבי ההשתלמויות אצלך"/>
  </>
};

export default AdvancedTrainingCourses;