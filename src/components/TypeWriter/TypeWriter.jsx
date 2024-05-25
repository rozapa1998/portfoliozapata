import {useEffect, useState} from 'react'

const TypeWriter = ({text, delay}) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIdex, setCurrentIndex] = useState(0);

    useEffect(()=>{
        if (currentIdex < text.length){
            const timeout = setTimeout(()=> {
                setCurrentText(prevText => prevText + text[currentIdex]);
                setCurrentIndex(prevIndex=> prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout)
        }
    }, [currentIdex, delay, text])
  
    return (
    <div className='ibm-plex-mono-regular pt-5' style={{fontSize: "25px"}}>{currentText}</div>
  )
}

export default TypeWriter