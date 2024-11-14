import { useEffect } from "react"; 
import { useNavigate } from 'react-router-dom';
import auth from "../utils/auth";

const inactivityTime = 30000;

const inactivityLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutID: NodeJS.Timeout;
        const resetTimer = () => {
            clearTimeout(timeoutID);
            timeoutID = setTimeout(() => {
                auth.logout();
                navigate('/login')

            }, inactivityTime)
        }
        window.addEventListener('mousemove', resetTimer);
        window.addEventListener('keypress', resetTimer);
        window.addEventListener('click', resetTimer);

        resetTimer()

        return () => {
            clearTimeout(timeoutID);
            window.removeEventListener('mousemove', resetTimer);
            window.removeEventListener('keypress', resetTimer);
            window.removeEventListener('click', resetTimer);
          };
    }, [navigate])

}
export default inactivityLogout;