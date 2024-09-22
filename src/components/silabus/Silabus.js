import React, { useEffect } from 'react';
import styles from './Silabus.module.css';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';
import CourseKits from '../kits/Kits';
const Syllabus = () => {
  const meetings = [
    {
      number: 1,
      title: 'שיעור ראשון - שיעור עיוני ומעשי',
      description: 'מבנה הציפורן, תהליך ייצור של לוחית הציפורן, מושגים מקצועיים, מחלות ציפורניים, הכרת מוצרים וכלי עבודה. תרגול מעשי: שיוף צורות, מריחת ג׳ל, מניקור.'
    },
    {
      number: 2,
      title: 'שיעור שני - מניקור ומבנה אנטומי',
      description: 'מניקור, דחיפת עור, ראשי מניקור, אחיזה נכונה במספריים. מבנה אנטומי מורחב, אזור האפקס, נקודות סטרס של לקוחה.'
    },
    {
      number: 3,
      title: 'שיעור שלישי - טכניקות מתקדמות',
      description: 'הסרת ג׳ל, כיווני שיוף במכונה, הבדלים בג׳לים, עבודה עם סוגי בייסים שונים, מניקור עם ראשי מניקור ומבנה אנטומי.'
    },
    {
      number: 4,
      title: 'שיעור רביעי - סיכום ויישום',
      description: 'הסרת ג׳ל בצורה נכונה ומדויקת, מניקור מתקדם, מבנה אנטומי עם רבר בייס, השלמת סדקים בפול ג׳ל או השלמת ציפורן בטיפס ג׳ל.'
    }
  ];

  const courseIncludes = [
    '4 מפגשים',
    '16 שעות לימוד + שעה נוספת בכל שיעור',
    'קבוצת בוטיק של עד 4 תלמידות',
    'יחס אישי וצמוד לכל תלמידה',
    'תעודה מקצועית מטעם האקדמיה "NAIL ACADEMY" בהנהלת גרטה מור',
    'ליווי לאחר הקורס עד להצלחת התלמידה והשתלבותה בשוק העבודה'
  ];
  useEffect(()=>{
    ScrollReveal().reveal(`.${styles.meetingTitle}`, {
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
    ScrollReveal().reveal(`.${styles.meetingNumber}`, {
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
      ScrollReveal().reveal(`.${styles.meetingDescription}`, {
        duration: 1000,
        distance: "50px",
        origin: "bottom",
        easing: "ease-out",
        reset: false,
        viewFactor: 0.2,
        interval: 300,
        delay: 200,
        scale: 1,
      });
  },[])
  return (
    <>
      <div className={styles.syllabusWrapper} id="קורס לק גל">
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>קורס לק ג׳ל למתחילות</h1>
          <div className={styles.description}>
            קורס בסיסי להתחלה בעולם הציפורניים שבו לומדים
            חיזוק המבנה הציפורניים בעזרת בסיס ולק ג׳יל בשילוב עם
            מניקור מכשירי וידני בשביל ליצור ציפורן נקייה ומחוזקת
            בעזרת עיצוב מבנה הציפורן ומניקור לאסתטיקה ויופי.
          </div>
          <div className={styles.courseInfo}>
            <h3>הקורס כולל:</h3>
            {courseIncludes.map((item, index) => (
              <p key={index} className={styles.courseItem}>
                <span className={styles.checkmark}>✓</span> {item}
              </p>
            ))}
          </div>
          <div className={styles.meetingsContainer}>
            {meetings.map((meeting) => (
              <div key={meeting.number} className={styles.meetingCard}>
                <div className={styles.meetingContent}>
                  <h2 className={styles.meetingTitle}>
                    <span className={styles.meetingNumber}>{meeting.number}</span>
                    {meeting.title}
                  </h2>
                  <p className={styles.meetingDescription}>{meeting.description}</p>
                </div>
              </div>
            ))}
          </div>
          <CourseKits/>
        </div>
      </div>
      <Button text="גרטה, אני רוצה לשמוע עוד" />
    </>
  );
};

export default Syllabus;