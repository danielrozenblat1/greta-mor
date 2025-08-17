import styles from './FormScreen.module.css';
import { useState, useRef } from 'react';
import PrivacyPolicy from '../privacy/Privacy';

const FormScreen = () => {
    const [submitted, setSubmitted] = useState(false);
    const [agreed, setAgreed] = useState(false);
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const reciver = "Gretamor7@gmail.com";

    const submitHandler = async (e) => {
        e.preventDefault();

        // בדיקה אם המשתמש אישר את תנאי השימוש ומדיניות הפרטיות
        if (!agreed) {
            alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
            return;
        }

        const name = nameRef?.current?.value;
        const phone = phoneRef?.current?.value;
        const email = emailRef?.current?.value;

        if (name.trim().length <= 2) {
            alert("אנא הכניסי שם מלא ");
            return;
        }
        if (phone.trim().length !== 10) {
            alert("אנא הכניסי מספר טלפון הכולל 10 ספרות ");
            return;
        }
        if (!email.includes("@")) {
            alert("אנא הכניסי מייל תקין ");
            return;
        }

        const formData = {
            name: name,
            phone: phone,
            email: email,
            reciver: reciver
        };

        const response = await fetch('https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("שמרנו את הפרטים שלך, ניצור קשר בימים הקרובים");
            nameRef.current.value = "";
            phoneRef.current.value = "";
            emailRef.current.value = "";
            setSubmitted(true);
            setAgreed(false);
        }
    };

    // פונקציה שמונעת מהטופס להגיב על קליק בקישור
    const handlePrivacyClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    return (
        <>
            <div className={styles.title} id="צרי קשר">רוצה לדעת עוד פרטים לגבי הקורסים?</div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="מה השם שלך?"
                        ref={nameRef}
                    />
                    <input
                        type="tel"
                        className={styles.input}
                        placeholder="מה המספר שלך?"
                        ref={phoneRef}
                    />
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="מה המייל שלך?"
                        ref={emailRef}
                    />

                    {/* תיבת האישור למדיניות הפרטיות */}
                    <div className={styles.privacyContainer}>
                        <label className={styles.privacyLabel}>
                            <input
                                type="checkbox"
                                checked={agreed}
                                onChange={() => setAgreed(!agreed)}
                                className={styles.checkbox}
                            />
                            קראתי את
                            <span onClick={handlePrivacyClick}>
                                <PrivacyPolicy
                                    ownerName="גרטה מור"
                                    phone="+972 54-426-4453"
                                    email="Gretamor7@gmail.com"
                                    domain="https://gretamoracademy.co.il/"
                                />
                            </span>
                            ואני מאשר/ת
                        </label>
                    </div>

                    <button onClick={submitHandler} className={styles.button}>
                        גרטה,תתקשרי אלי!
                    </button>
                </form>
            </div>
        </>
    );
};

export default FormScreen;