function StatSection() {
    return(
        <>

<div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 p-4 ">

    
    <div className="lg:w-1/2 mt-16 flex flex-col gap-4 p-4 ">

        <span className="text-4xl text-yellow-300 font-black px-4 ">
            Unleash Your cricket explore
        </span>

        <span className="text-white px-4 max-w-144">
            Dive into the world of cricket with exclusive content, player stats, and match predictions. Whether you're a fan of Premier League, La Liga, or Champions League, GoalZone has it all.
        </span>
        
        <ul className="flex flex-col text-white ">

        <li className="flex gap-4 p-4   ">
             <img src="assets/check.png" alt="ckeck" className="max-w-6 max-h-6" />
        <span>
            Exclusive interviews with cricket stars
        </span>
    </li>

        <li className="flex gap-4 p-4">
            <img src="assets/check.png" alt="check" className="max-w-6 max-h-6" />
        <span>
             Detailed player and team statistics
        </span>
        </li>

        <li className="flex gap-4 p-4">
             <img src="assets/check.png" alt="ckeck" className="max-w-6 max-h-6" />
            <span>
            Comprehensive coverage of all major leagues
            </span>
            </li>
        </ul>
        <button className="
                        flex
                        max-w-36 
                        cursor-pointer
                        p-4
                        mx-2
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


    <img src="assets/img5.jpg" alt="img" className="object-cover lg:w-1/2 flex w-96 h-auto rounded-2xl m-4 "/>
</div>
        

        </>
    )
}
export default StatSection;