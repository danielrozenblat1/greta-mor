import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import change from "../Icons/wired-outline-35-edit-hover-circle.json"
import locked from "../Icons/wired-outline-2093-prison-hover-pinch.json"
import nails from "../Icons/wired-outline-1594-manicure-hover-pinch.json"
import money from "../Icons/wired-outline-414-money-bag-dollar-hover-shake.json"
import girls from "../Icons/wired-outline-273-three-female-avatars-hover-nodding.json"
import diary from '../Icons/wired-outline-739-notebook-3-hover-pinch.json'
import IconText from "../components/cant/Cant"
const SecondScreen=()=>{


    return <>
    <div className={styles.description}>לפני 20 שנה</div>
    <div className={styles.title}>הייתי בדיוק במקום שאת נמצאת עכשיו!</div>
    <div className={styles.row}>
    <IconTextComponent icon={nails} text="נמשכת לתחום הציפורניים ורוצה ללמוד אותו יותר ברצינות"/>  
    <IconTextComponent icon={locked} text="נמצאת במסגרת שמגבילה את החופש שלך"/>
    <IconTextComponent icon={money} text="רוצה להרוויח מתחום הציפורניים סכומים שתמיד חלמת עליהם"/>
    </div>
    <div className={styles.title}>ומצד שני..</div>
    <div className={styles.row}>
    <IconText icon={girls} text="מפחדת שיש יותר מדי בנות שעוסקות בתחום"/>  
    <IconText icon={change} text="מפחדת משינוי בחיים שלך"/>
    <IconText icon={diary} text="מפחדת שלא תצליחי למלא את היומן בלקוחות"/>
    </div>
    <div className={styles.title}>וזה לגיטימי!</div>
    <div className={styles.descriptionL}>לכן, אספתי את 20 שנות הנסיון שלי כדי להרכיב את כמה קורסים מדוייקים, מקיפים ויעילים שיעבירו לך את כל הידע שצברתי בתחום!</div>
    </>
}
export default SecondScreen