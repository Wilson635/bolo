import { BiSearch } from "react-icons/bi";
import { FaPeriscope } from "react-icons/fa";

const HeroFindCompagnie = () => {
    return (
        <>
            <div 
                className="
                    bg-[url('/assets/bgc.jpg')] 
                    bg-cover
                    mx-auto
                    justify-center 
                    text-center
                    h-[400px]
                "
            >
                <div 
                    className="
                        py-12
                        lg:py-8
                        font-bold
                        text-4xl
                    "
                >
                    Find your <span className="text-blue-500/50 underline"> dream compagny </span>
                </div>

                <div className="text-md">
                    Find the dream compagnies, you dream work for
                </div>
                
                <div className="flex flex-col justify-center items-center">
                    <div 
                        className="
                        bg-white 
                            lg:w-[50rem] sm:w-[40rem] 
                            shadow-md 
                            justify-between 
                            items-center 
                            h-16 
                            mt-8
                            flex
                            grid-cols-3
                            rounded-lg
                            divider 
                            "
                    >
                        <div 
                            className="
                                flex 
                                gap-3
                            "
                        >
                            <BiSearch className="text-3xl ml-3 text-slate mt-2"/>
                            <input 
                                type="text" 
                                name="category" 
                                placeholder="Company name or keyword"
                                className="text-slate-500 sm:text-xs text-md outline-none w-[15rem] h-9 border-b-[1px] border-b-slate-500"
                            />
                        </div>
                        <div className="flex border-l-[1px] border-l-slate-500 h-9"></div>
                        <div 
                            className="
                            flex 
                            gap-3
                            "
                            >
                            <FaPeriscope className="text-3xl text-slate mt-2"/>
                            <input 
                                type="text" 
                                name="category" 
                                placeholder="Florance, Italy"
                                className="text-slate-500 sm:text-xs text-md outline-none lg:w-[15rem] h-9 border-b-[1px] border-b-slate-500"
                                />
                        </div>
                        <div 
                            className="
                            flex 
                            gap-3
                            bg-blue-500
                            px-8
                            py-2
                            mr-2.5
                                rounded-md
                                text-white
                            "
                        >
                            Search
                        </div>
                    </div>

                    <div className="text-md flex justify-start items-start text-slate-600">
                        
                        <p>Popular : Twitter, Apple, Facebook, Microsoft</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroFindCompagnie;