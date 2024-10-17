export const Notification = ({state, content}:{state:boolean, content:string}) => {
    return (
        <>
         {state && (
            <div className="absolute top-20 left-1/2 w-[90%] -translate-x-1/2 rounded-xl bg-[#CE5FFF] text-white font-bold shadow-xl shadow-[#cf5fff17] p-6">
                <p>{content}</p>
            </div>
        )}
        </>
    )
}