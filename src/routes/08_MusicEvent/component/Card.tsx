import { useState } from "react";
import { MusicEventType } from "../types/MusicEvent";
import { convertDateDayToWritedDay } from "../utils/DateUtils";
import { Modal } from "./Modal";

interface CardProps extends MusicEventType {
    setData: React.Dispatch<React.SetStateAction<MusicEventType[] | undefined>>
  }

export const Card = ({title, description, eventDate, id, availablePlaces, setData}:CardProps) => {
    const [modalState, setModalState] = useState(false)

    const getBgColor = (id:number): string => {
        const colors = ['#F7DAD4', '#D3E5F6', '#EDF7D2', '#E1D2F7'];
        return colors[id % colors.length];
    }

    return (
        <div className="bg-white rounded-xl p-4 grid grid-cols-1 gap-2">
            {modalState && (
                <Modal 
                    title={title}
                    description={description}
                    id={id}
                    availablePlaces={availablePlaces}
                    eventDate={eventDate}
                    setModalState={setModalState}
                    setData={setData}
                />
            )}
            <span 
                className="w-min px-3 py-1 -mt-7 rounded-xl text-sm"
                style={{ backgroundColor: getBgColor(id) }}
            >
                {convertDateDayToWritedDay(eventDate)}
                <strong className="ml-1">
                    {eventDate.getHours()}:{eventDate.getMinutes()}
                </strong>
            </span>
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="font-medium">{description}</p>
            {availablePlaces > 0 || localStorage.getItem("bookEventId:" + id) ? (
                <button 
                    className="flex flex-row items-center gap-2 bg-[#101010] justify-center text-white px-8 py-3 rounded-xl mt-2 place-self-end"
                    onClick={() => {
                        setModalState(!modalState)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg>
                    <p className="font-medium">Take my Ticket</p>
                </button>
            ) : (
                <p className="font-bold place-self-end pr-6">Sould out!</p>
            )}
        </div>
    )
}