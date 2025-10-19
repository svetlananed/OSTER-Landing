import triangles from "../../assets/img/triangles.png"
import RotatingText from "../RotatingText";
import ContactBtn from "../ContactBtn";
import OsterPower from "../OsterPower";
import oIcon from "../../assets/img/o.png";
import sIcon from "../../assets/img/s.png";
import tIcon from "../../assets/img/t.png";
import eIcon from "../../assets/img/e.png";
import rIcon from "../../assets/img/r.png";

function Hero () {
    return (
        <>
            <div className="section-container first-section-spacing flex flex-col justify-between">

                {/* UPPER BLOCK */}
                <div className="flex w-full justify-center gap-18 items-center">

                    {/* HERO TEXT */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col text-5xl md:text-8xl uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-300 
                        bg-clip-text text-transparent font-medium [text-shadow:_-4px_-4px_0_black] dark:[text-shadow:none]">
                            <div>Website</div>
                            <div>development</div> 
                        </div>
                        <div className="flex flex-col gap-7">
                            <div className="flex items-center gap-2 mt-5 uppercase font-medium text-2xl md:text-3xl">
                                <div>
                                    From idea to launch:
                                </div>
                                <div className="w-60">
                                    <RotatingText
                                    texts={['Landing', 'Visuals', 'Maintenance']}
                                    mainClassName="px-2 mt-1 sm:px-2 md:px-3 text-fuchsia-600 overflow-hidden py-0.5 sm:py-1 md:py-2  rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={3000}
                                    />
                                </div>
                            </div>
                            <div className="text-2xl flex gap-4">
                                <div>We are building experience</div>
                                <div className="text-slate-400">// not just IT product</div>
                                {/*<div className="text-lg text-slate-400 mt-2">
                                    // to unlock the tomorrow’s opportunities
                                </div>*/}
                            </div>
                            <div className="mt-5">
                                <ContactBtn
                                    message={"Ready to scale? Let’s talk"}
                                    fontClass={"text-sm 2xl:text-2xl px-6 py-5"}
                                />
                            </div>
                        </div>
                    </div>

                    {/* IMAGE */}
                    <div>
                        <img src={triangles}
                            className="2xl:h-[530px]"/>
                    </div>
                </div>

                {/* SLIDER */}
                <div className="flex flex-row gap-10 w-full justify-between">
                    <OsterPower 
                        titleImg={oIcon}
                        text={"Open Solutions"}/>
                    <OsterPower 
                        titleImg={sIcon}
                        text={"Strategic thinking"}/>
                    <OsterPower 
                        titleImg={tIcon}
                        text={"Technology"}/>
                    <OsterPower 
                        titleImg={eIcon}
                        text={"Evolution"}/>
                    <OsterPower 
                        titleImg={rIcon}
                        text={"Results"}/>
                </div>
            </div>
        </>
    )
}

export default Hero;