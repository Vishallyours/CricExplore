import { useNavigate } from 'react-router-dom';

function Footer(){
    const navigate = useNavigate();

    return (
    <>
    <div className="flex flex-col text-white bg-black/50 h-24 justify-center gap-2 ">


    <div className="flex gap-4 justify-center">
        <button onClick={() => navigate('/')}  className="hover:text-yellow-300/90 flex rounded-4xl">
            Home
        </button> 
             
        <button onClick = {() => navigate('/PrivacyPolicy')} className="hover:text-yellow-300/90 flex rounded-4xl">
            Privacy
        </button> 
    </div>
            <span className="flex justify-center text-white/50"> &copy; 2024 CricExplore. All Right Reserved</span>
        </div>
    </>
    );
}
export default Footer;