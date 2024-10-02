import { useEffect, useState } from "react";
import { BsCalendar2DateFill } from "react-icons/bs";


export const TodoData =()=>{
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formatedDate = now.toLocaleDateString();
            const formatedTime = now.toLocaleTimeString();
            setDateTime(`${formatedDate} - ${formatedTime}`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return(
        <>
        <h3 className="date-time">
                        <BsCalendar2DateFill />
                        {dateTime}
                    </h3>
        </>
    );
};