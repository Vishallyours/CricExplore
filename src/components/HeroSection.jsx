import image from "../assets/Image_Hero.jpg";
function HeroSection() {
    return (
    <>      
    <div className="relative h-screen w-full overflow-hidden ">
            <img className="
            flex 
            -my-16
            overflow-x-hidden
            absolute 
            object-cover
            max-w-full
            h-full 
            w-full"
             src={image} alt="Hero">
                
            </img> 
            
            <div className="absolute -my-16 inset-0 h-screen bg-black/60"></div>
            
            <div className="flex absolute
                    flex-col
                    px-8
                    gap-4
                    justify-center
                    items-start
                    text-white
                    max-w-full 
                    text-[clamp(.5rem,6vw,1.5rem)]
                    inset-0
                    ">
                    
                <h1 className="
                    text-white
                    max-w-full
                    justify-start
                    items-center
                    inset-0
                    text-[clamp(2rem,6vw,5rem)]
                    text-8xl font-bold 
                    "> Feel the Passion of <br/>Cricket
                </h1>

                <p className="
                   text-white
                   flex 
                   max-w-full
                   text-[clamp(.5rem,6vw,1.5rem)]
                   ">
                    Your ultimate destination for live scores, breaking news, and expert analysis on all<br/> things cricket.
                </p>        

                <button className="
                        flex 
                        cursor-pointer
                        p-4
                        mx-2
                        my-4
                        text-black
                        text-2xl
                        font-bold
                        bg-yellow-500
                        hover:bg-yellow-100/10
                        hover:text-yellow-500
                        rounded-full
                        
                        ">
                Click here
            </button>
        
        </div>
        </div>     
    </>
    )
}
export default HeroSection;