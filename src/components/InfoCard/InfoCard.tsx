import { useMemo, useState } from "react"

export type InfoCardContent = {
    devTime: string,
    notes?: string,
    librairies?: string[],
}

export const InfoCard = ({
    infoCardContent: { devTime, notes, librairies },
  }: {
    infoCardContent: InfoCardContent;
  }) => {
    const [showState, setShowState] = useState(false)

    useMemo(() => {
        setShowState(false)
    }, [])

    return (
        <div className="absolute left-4 md:left-[330px] top-18 md:top-6 z-50 text-black">
            {!showState ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                className="size-8 cursor-pointer animate-bounce bg-white p-1 rounded-full text-gray-600 border-[1px] border-gray-200 shadow-md"
                onClick={() => {
                    setShowState(!showState)
                }}
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="size-8 cursor-pointer bg-white p-1 rounded-full text-red-400 border-[1px] border-gray-200 shadow-md"
                    onClick={() => {
                        setShowState(!showState)
                    }}
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )}
            {showState && (
                <div className="w-96 bg-white p-4 mt-2 flex flex-col gap-2 rounded-xl shadow-lg shadow-gray-300">
                    <h1 className="font-bold text-2xl">Context</h1>
                    <hr className="my-2" />
                    <p><strong>Developed in:</strong> {devTime}</p>
                    {librairies && (
                        <div>
                            <p className="font-bold text-md">Libraries used:</p>
                            <ul className="pl-8">
                                {librairies.map((lib) => {
                                    return (
                                        <li className="list-disc">{lib}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                    {notes && (
                        <p className="pb-2"><strong>Additionnals infos:</strong> <br />{notes}</p>
                    )}
                </div>
            )}
        </div>
    )
}