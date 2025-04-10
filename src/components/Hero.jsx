import HeroImage from "../assets/Crickter.jpg";
function Hero() {
    return (
    <>
        <div className="md:flex
                        md:justify-center
                        md:items-center
                        bg-blue-800 
                        text-white
                        h-screen w-full
                     ">
                        
            <img className="md:flex object-cover aspect-[16/9]
            w-full h-screen" src={HeroImage} alt="Hero"/>
        </div>
    </>
    )
}
export default Hero;