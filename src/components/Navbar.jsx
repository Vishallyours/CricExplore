function Navbar(){

    return(
        <>
            <div className="
                            bg-black/50
                            backdrop-blur-3xl 
                            sticky 
                            top-0
                            z-50
                            h-16 
                            flex
                            justify-between">

                <div className="
                                flex
                                items-center 
                                font-black
                                text-2xl
                                mx-8
                                cursor-default">

                    <span className="text-white ml-4">
                        Cric
                    </span>
                    
                    <span className="text-yellow-500    ">
                    Explore
                    </span>
                    
            </div>
            
            <div className="
                            hidden
                            md:flex
                            justify-end
                            items-center
                            cursor-pointer
                            font-bold
                            mx-4

                            ">
                <button className="hover:text-yellow-300/90
                                     hover:bg-yellow-100/10
                                     text-white
                                     flex
                                     mx-2
                                     px-4
                                     py-2
                                     rounded-4xl
                                     ">
                    Home
                </button> 
             
                <button className="
                                    hover:text-yellow-300/90
                                    hover:bg-yellow-100/10
                                     text-white
                                     flex
                                     mx-2
                                     px-4
                                     py-2
                                     rounded-4xl
                                     
                                     ">
                    Privacy
                </button> 
            </div>
            
            
            </div>
        </>
    )

};
export default Navbar; 