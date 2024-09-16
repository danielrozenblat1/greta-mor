import React from 'react';
import styles from './ForthScreen.module.css';
import FAQItem from '../components/questions/Questions';
import Button from '../components/button/Button';


const ForthScreen = () => {
  return <>
    <div className={styles.title} id="שאלות תשובות">אתן שואלות ואני עונה</div>
    <div className={styles.container}>
      <FAQItem 
        question="המחיר של הקורס כולל ערכה?"
        answer="בקורס את מקבלת אפשרות בחירה בין שתי ערכות - ערכת הבסיס וערכת הפרו
        - והן נרכשות אצלנו בקורס
        - ברגע שסיימת את הקורס יחד עם ערכה את כבר יכולה להתחיל לעבוד!
        - כל מה שתצטרכי זה רק כיסא ומנורה"
      />

      <FAQItem
        question="אני נמצאת בתקופה עמוסה בחיים שלי - אני דואגת שלא אצליח לשלב את הלימודים אצלך?"
        answer="תמיד אמרתי שאם רוצים משהו, מפנים זמן ומשיגים אותו!
        - אף פעם לא יגיע הרגע המושלם ותמיד ויהיה משהו שיהווה מכשול
        - אני מזמינה אותך לשיחת ייעוץ ללא עלות ונראה איך אנחנו פותרים את הבעיה יחד"
      />

      <FAQItem
        question="מה קורה איתי יום לאחר הקורס?"
        answer="לאחר הקורס את תתקלי בסוגי מקרים שלא בהכרח נתקלת בהם בקורס עצמו ובעוד שאלות שתמיד יהיו
        - בשביל זה אני כאן - לענות ולעזור בכל התלבטות, שאלה ומענה לכל בעיה שיש לך
        - ובנוסף, אם את מרגישה לא מספיק מוכנה לאחר הקורס, אשלב אותך בקורס הבא לחיזוק הנושא שפחות חזק אצלך - ללא עלות"
      />

      <FAQItem
        question="מה יביא אותי להצלחה בתחום?"
        answer="רק ההתמדה והתרגול יביאו אותך להצלחה בתחום!
        - לא תתמידי ותתרגלי? - כל הידע שרכשת במהלך הקורס ייזרק לפח!
        - את מקבלת ממני את הידע הכי ממוקד כדי להצליח ביום שאחרי
        - וככל שתשקיעי ותתמידי יותר כך תצליחי בוודאות!"
      />

      <FAQItem
        question="אני יכולה להכנס לתחום גם אם אין לי רקע מקדים?"
        answer="כן! וזה מה שהכי יפה בתחום הזה! את צריכה רק לאהוב את התחום ולתרגל אותו בעזרת הידע שאת מקבלת - זה עניין של תרגול והתמדה ולא רק של כשרון"
      />
      <Button text="גרטה, בואי נדבר!"/>
    </div>
 
    </>
};

export default ForthScreen;