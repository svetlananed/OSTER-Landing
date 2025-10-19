function ContactBtn ({ message, fontClass }) {
    return (
        <>
        <button className={`w-fit rounded-tr-lg rounded-bl-lg flex items-center justify-center dark:border-1 
        text-white bg-black 
        dark:border-fuchsia-900 
        hover:bg-fuchsia-600 dark:hover:bg-black dark:hover:drop-shadow-[0_0_15px_#fc1bfb] 
        ${fontClass}`}>
            {message}
        </button>
        </>
    )
}

export default ContactBtn;