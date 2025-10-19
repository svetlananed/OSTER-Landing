import { useState } from "react";
import { steps } from "../data/Steps"

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
                            className="flex flex-row gap-5 cursor-pointer"
                            onClick={() => setSelected(item.number)}
                        >
                            <div className={`group flex items-center justify-center overflow-hidden rounded-xl h-20 w-90 
                                ${selected === item.number ? "bg-[#866226] text-[#f6f54f] border-[#f6f54f] border hover:bg-[#63491d]" : "border border-slate-300 dark:border-slate-900" }
                            `}>
                                <div className={`
                                    ${selected === item.number ? "" : "dark:group-hover:drop-shadow-[0_0_20px_#22d3ee,0_0_40px_#22d3ee,0_0_60px_#22d3ee] group-hover:drop-shadow-[0_0_20px_#4c5a6d,0_0_40px_#4c5a6d,0_0_60px_#4c5a6d]" }
                                `}>
                                    {item.name}
                                </div>
                            </div>
                            <div className={`flex items-center justify-center border  rounded-xl h-20  w-20
                                
                                ${selected === item.number ? 
                                    "bg-[#866226] text-[#f6f54f] border-[#f6f54f] border hover:bg-[#63491d]" 
                                    : 
                                    "hover:bg-cyan-950/40 border-slate-300 dark:border-slate-900"}
                                `}>
                                <div className={
                                `
                                leading-none`}>
                                    {item.number}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right column */}

                <div className="">
                    {selected && (() => {
                        const step = steps.find((s) => s.number === selected);
                        if (!step) return null;

                        return (
                            <div className="   bg-black drop-shadow-[0_0_20px_#a6a533] rounded-xl p-[60px] h-full flex flex-col gap-5">
                                {/* Number */}
                                <div className="text-4xl font-bold">
                                    {step.number}
                                </div>
                                {/* Title */}
                                <div className="text-2xl font-semibold">
                                    {step.name}
                                </div>
                                {/* Description */}
                                <div className="text-xl">
                                    {step.description}
                                </div>
                            </div>
                        );
                    })()}
                </div>
                
            </div>
            
        </>
    )
}

export default Sign