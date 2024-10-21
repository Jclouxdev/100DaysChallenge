import { useState } from "react"
import { ImageSelector } from "./ImageSelector/ImageSelector"
import Hotel1 from '../../assets/011/hotel-1.jpg'
import Hotel2 from '../../assets/011/hotel-2.jpg'
import Hotel3 from '../../assets/011/hotel-3.jpg'
import Hotel4 from '../../assets/011/hotel-4.jpg'
import Hotel5 from '../../assets/011/hotel-5.jpg'
import Hotel6 from '../../assets/011/hotel-6.jpg'
import { DatePickerInput } from "./DatePickerInput/DatePickerInput"

const IMAGES:string[] = [
    Hotel1,
    Hotel2,
    Hotel3,
    Hotel4,
    Hotel5,
    Hotel6,
]

export const HotelBooking = () => {
    const [imageSelected, setImageSelected] = useState<string>(Hotel1)

    return (
        <div className="bg-[#E7B389] w-full h-full overflow-y-hidden relative md:flex md:items-center md:justify-center">
            <div className="bg-[#F2F2F2] w-full p-0 md:w-96 h-full overflow-y-hidden md:h-min pt-16 md:pt-auto md:p-6 md:rounded-xl px-6 flex flex-col gap-8">
                <a href="" className="text-sm text-gray-400">Hotel list / Hotel Doe</a>
                <div className="grid grid-cols-1">
                    <ImageSelector setImageSelected={setImageSelected} imageSelected={imageSelected} images={IMAGES}/>
                    <div>
                        <DatePickerInput label={"Check in"} />
                    </div>
                </div>
            </div>
        </div>
    )
}