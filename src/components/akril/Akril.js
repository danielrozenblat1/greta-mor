import React, { useEffect } from 'react';
import styles from './Akril.module.css';
import Button from '../button/Button';
import ScrollReveal from 'scrollreveal';
import AcrylicCourseKits from '../kits/AkrilKits';
const AcrylicCourse = () => {
  const courseDetails = [
    {
      number: 1,
      title: 'שיעור ראשון - הכרת חומרים ותיאוריה',
      description: 'הכרת חומרים, נוזל, אבקה, פריימר, טיפסים, דבק, קטר, ראש סגירות, מכחול. שיעור עיוני: תורת הציפורן, סוגי מחלות, סטריליזציה. תרגול על דף סיליקון: יחס בין נוזל לאבקה, יצירת כדורים.'
    },
    {
      number: 2,
      title: 'שיעור שני - מריחה ושיוף',
      description: 'מריחה של כדורים על טיפסים ושיוף ידני עם פצירה. תרגול צורות על טיפסים לאחר הנחת חומר.'
    },
    {
      number: 3,
      title: 'שיעור שלישי - בנייה ושיוף',
      description: 'בנייה של אקריל על היד, אימון עבודה ושיוף עם מכונת שיוף. תרגול חשוב ושליטה, למידה על שלבי עבודה.'
    },
    {
      number: 4,
      title: 'שיעור רביעי - בנייה ראשונה',
      description: 'מודליסטית: בנייה ראשונה באקריל, הכנה של ציפורן, הדבקה של טיפס, שיוף מדרגה, הנחת כדורים של אקריל, יצירת בנייה על הציפורן, סגירות, צורה, מניקור וג׳ל.'
    },
    {
      number: 5,
      title: 'שיעור חמישי - מילוי אקריל',
      description: 'מודליסטית: מילוי אקריל, תהליך שלבי עבודה במילוי, הסרה של ג\'ל, הכנת ציפורן לפני המילוי באקריל, סגירות ופינישים לפני הלק.'
    }
  ];

  const courseIncludes = [
    '5 מפגשים',
    '25 שעות לימוד',
    'קבוצת בוטיק עד 4 תלמידות',
    'תעודה מקצועית',
    'ליווי כל הדרך להצלחה'
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
  return <>
    <div className={styles.courseWrapper} id="קורס אקריל">
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>קורס אקריל מתחילות</h1>
        <div className={styles.description}>
          בניית ציפורניים באקריל היא הבנייה הראשונה שיצאה בעולם הציפורניים. זוהי שיטה בה אנחנו בונים את הציפורניים בשילוב אבקת אקריל ונוזל אקריל. חומר קשיח שדרכו אפשר לייצר את כל הסגנונות והצורות של ציפורניים, מציפורניים עדינות ועד אקסטרים. שיטת בנייה באקריל היא אומנות בה את בונה, יוצרת ומעצבת את הציפורניים בסטייל שאת רוצה בכל אורך וצורה.
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
          {courseDetails.map((meeting) => (
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
        <AcrylicCourseKits/>
      </div>

    </div>
    
    <Button text="גרטה, אני רוצה לשמוע עוד"/>
  </>
};

export default AcrylicCourse;