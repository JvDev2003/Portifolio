import { useState, useEffect } from "react";
import styles from "./TypingText.module.css";

const TypingText = ({text, speed = 100}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText((prevText) => prevText + text[index]);
          setIndex(index + 1);
        }, speed);
  
        return () => clearTimeout(timeoutId);
      }
    }, [index, text, speed]);
  
    return(
        <div className={styles.typing_container}>
            <h1>{displayedText}</h1>
        </div>
    )
;
}

export default TypingText