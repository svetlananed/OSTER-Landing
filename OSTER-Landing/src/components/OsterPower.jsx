function OsterPower({ titleImg, text }) {
    return (
        <div
        className="border relative group rounded-lg h-30 w-70 flex items-center justify-center text-2xl
        border-slate-300 dark:border-slate-950
        bg-slate-200 dark:bg-transparent hover:bg-fuchsia-950/10 dark:hover:bg-cyan-950/30 
        hover:border-fuchsia-600/20 dark:hover:border-cyan-950
        transition-all duration-300 overflow-hidden"
        >
        {/* Image */}
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
            <img
            src={titleImg}
            alt="Title"
            className="max-h-[50%] max-w-[50%] object-contain 
                large-shadow"
            />
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-center px-3">
            {text}
        </div>
        </div>
    );
}

export default OsterPower;
