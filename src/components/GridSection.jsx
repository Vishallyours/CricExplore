
function GridSection(){
    return(
        <>
        <div className="
            w-full
            h-full
            flex
            justify-center
            text-3xl
            text-yellow-500
            font-bold
            mt-16
        ">
            
            Cricket In action
            
            </div>
        
                
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-24">
                <img src={`${import.meta.env.BASE_URL}assets/img1.jpg`} className="rounded-xl object-cover w-96 h-48 "></img>           
                <img src={`${import.meta.env.BASE_URL}assets/img2.jpg`} className="rounded-xl object-cover w-96 h-48 "></img>           
                <img src={`${import.meta.env.BASE_URL}assets/img3.jpg`} className="rounded-xl object-cover w-96 h-48 "></img>           
                <img src={`${import.meta.env.BASE_URL}assets/img4.jpg`} className="rounded-xl object-cover w-96 h-48 "></img>           
            </div>
       
            <div className=" text-yellow-500 w-full h-full flex justify-center text-3xl font-bold pt-24 ">
                Why Choose CricExplore?
            </div>

            
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">

                    <div className="bg-gray-900 flex flex-col max-w-96 gap-2 text-white mx-12 my-4 p-8 border border-yellow-500/10 rounded-2xl hover:border-yellow-500 cursor-default" >
                         <span className="text-1xl font-bold text-yellow-300">Live Score</span>
                         <span className="font-medium">Get real-time updates and minute-by-minute commentary for every match.</span>
                    </div>

                    <div className="bg-gray-900 flex flex-col max-w-96 gap-2 text-white mx-12 my-4 p-8 border border-yellow-500/10 rounded-2xl hover:border-yellow-500 cursor-default"> 
                        <span className="text-1xl font-bold text-yellow-300">Expert Insight</span>
                        <span className="font-medium">In-depth analysis and opinions from cricket legends.</span>
                    </div>

                    <div className="bg-gray-900 flex flex-col max-w-96 gap-2 text-white mx-12 my-4 p-8 border border-yellow-500/10 rounded-2xl hover:border-yellow-500 cursor-default">
                         <span className="flex font-bold text-1xl text-yellow-300">Global Coverage</span>
                         <span className="flex font-medium">From Premier League to World Cup, we cover it all.</span>
                    </div>
</div>

            <div className="mt-16 mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                
                <div className="flex flex-col items-center justify-center max-w-96 gap-2 text-white mx-2 my-4 px-8 py-4 border border-yellow-500/40 rounded-xl">
                    <span className="flex text-3xl text-yellow-300 font-bold">1000+</span>
                    <span className="flex text-white font-medium text-1xl">Match Covered</span>
                </div>

                <div className="flex flex-col items-center justify-center max-w-96 gap-2 text-white mx-2 my-4 px-8 py-4 border border-yellow-500/40 rounded-xl">
                    <span className="text-3xl text-yellow-300 font-bold">2M+</span>
                    <span className="text-white font-medium text-1xl">Active Fans</span>
                </div>
             
                <div className="flex flex-col items-center justify-center max-w-96 gap-2 text-white mx-2 my-4 px-8 py-4 border border-yellow-500/40 rounded-xl">
                    <span className="text-3xl text-yellow-300 font-bold">100+</span>
                    <span className="text-white font-medium text-1xl">Expert Analysis</span>
                </div>
             
                <div className="flex flex-col items-center justify-center max-w-96 gap-2 text-white mx-2 my-4 px-8 py-4 border border-yellow-500/40 rounded-xl">
                    <span className="text-3xl text-yellow-300 font-bold">24/7</span>
                    <span className="text-white font-medium text-1xl">Live Updates</span>
                </div>
             
             </div>

                
        </>
    )
}
export default GridSection;