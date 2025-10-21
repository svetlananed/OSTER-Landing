import { useState } from "react";
import { steps } from "../data/Steps"
import cord from "../assets/img/cord.png"
import cordBlue from "../assets/img/cord-blue.png"


function Sign () {
    const [selected, setSelected] = useState(steps[0]?.number || null);

    return (
        <>
            <div className="text-main flex w-full gap-30">

                {/* Left column */}

                <div className="flex flex-col gap-5 ">
                    {steps.map((item) => (
                        <div
                            key={item.number}
                            className="flex flex-row gap-5 cursor-pointer relative"
                            onClick={() => setSelected(item.number)}
                        >
                            {/* Name */}
                            <div className={`group flex items-center justify-center overflow-hidden rounded-xl border h-20 w-90 
                                ${selected === item.number ? 
                                    "bg-slate-200 dark:bg-black text-[#2d98a8] dark:text-[#f6f54f] border-3 dark:border-1 border-[#1cc0d9] dark:border-[#f6f54f] hover:bg-[#e1f4f7] dark:hover:bg-[#101314]" 
                                    : 
                                    "border-slate-300 dark:border-slate-900 hover:bg-slate-100 dark:hover:bg-black" }
                            `}>
                                <div className={`
                                    ${selected === item.number ? "" 
                                        : 
                                        "dark:group-hover:drop-shadow-[0_0_20px_#22d3ee,0_0_30px_#22d3ee,0_0_40px_#22d3ee] " }
                                `}>
                                    {item.name}
                                </div>
                            </div>

                            {/* Number */}
                            <div className={`group flex items-center justify-center overflow-hidden rounded-xl border h-20 w-20
                                ${selected === item.number ? 
                                    "bg-slate-200 dark:bg-black text-[#2d98a8] dark:text-[#f6f54f] border-3 border-[#1cc0d9] dark:border-1 dark:border-[#f6f54f] hover:bg-[#e1f4f7] dark:hover:bg-[#101314]" : "border-slate-300 dark:border-slate-900 hover:bg-slate-100 dark:hover:bg-black" }
                            `}>
                                <div className={`
                                    ${selected === item.number ? "" : "dark:group-hover:drop-shadow-[0_0_15px_#22d3ee,0_0_20px_#22d3ee,0_0_30px_#22d3ee] " }
                                `}>
                                        {item.number}
                                </div> 
                            </div>

                            {/* Cord */}
                            {selected === item.number && (
                                <div className="absolute left-42 top-8 -translate-y-1/2 flex flex-col justify-between h-[20px] w-[700px] -z-10">
                                    <img
                                        src={cord}
                                        alt="cord"
                                        className={`absolute opacity-0 dark:opacity-100 ${Number(selected) <= 4 ? "" : "-translate-y-[168px] scale-y-[-1]"}`}
                                    />
                                    <img
                                        src={cordBlue}
                                        alt="cord"
                                        className={`absolute opacity-100 dark:opacity-0 ${Number(selected) <= 4 ? "" : "-translate-y-[168px] scale-y-[-1]"}`}
                                    />
                                </div>
                            )}
                            
                        </div>
                    ))}
                </div>

                {/* Right column */}

                <div className="">
                    {selected && (() => {
                        const step = steps.find((s) => s.number === selected);
                        if (!step) return null;

                        return (
                            <div className="relative h-full">
                                
                                <div className="rounded-xl p-[60px] h-[650px] flex flex-col gap-5
                                bg-slate-200 dark:bg-black drop-shadow-[0_0_20px_#36b3c6] dark:drop-shadow-[0_0_20px_#6e6d22]">
                                    {/* Number */}
                                    <div className="text-4xl text-[#2d98a8] dark:text-[#f6f54f]">
                                        {step.number}
                                    </div>
                                    
                                    {/* Title */}
                                    <div className="text-2xl text-[#2d98a8] dark:text-[#f6f54f]">
                                        {step.name}
                                    </div>
                                    
                                    {/* Description */}
                                    <div className="text-xl leading-relaxed">
                                        {step.description}
                                    </div>
                                </div>

                                <img src={step.image} 
                                    alt={step.name} 
                                    className="absolute left-1/2 -translate-x-1/2 bottom-0 object-contain w-auto h-[390px] rounded-xl 
                                    drop-shadow-[0_0_20px_#36b3c6] dark:drop-shadow-[0_0_20px_#6e6d22] "/>
                                
                            </div>
                            
                        );
                    })()}
                </div>
                
            </div>
            
        </>
    )
}

export default Sign