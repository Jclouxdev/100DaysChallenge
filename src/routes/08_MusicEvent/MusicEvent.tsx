import { useMemo, useState } from "react"
import { MusicEventType } from "./types/MusicEvent"
import { musicEventData } from "./Data"
import { Card } from "./component/Card"

export const MusicEvent = () => {
    const [data, setData] = useState<MusicEventType[]>()
    
    useMemo(() => {
        // Fetch
        setData(musicEventData)
    }, [setData])

    return (
        <div className="bg-[#E8EBF3] w-full h-auto md:h-full pt-20 px-6 pb-6">
            <h1 className="text-3xl font-bold">Music events</h1>
            <p className="font-medium">in London, United Kingdom</p>
            {data && data.length > 0 && (
                <div className="grid grid-cols-1 gap-8 mt-8">
                    {data.map((event) => {
                        return (
                            <Card {...event} key={event.id} setData={setData} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}