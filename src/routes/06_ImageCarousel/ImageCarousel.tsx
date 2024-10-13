import { useMemo, useState } from "react"

import Slider1 from '../../assets/006/slider-1.jpg'
import Slider2 from '../../assets/006/slider-2.jpg'
import Slider3 from '../../assets/006/slider-3.jpg'
import Slider4 from '../../assets/006/slider-4.jpg'
import Slider5 from '../../assets/006/slider-5.jpg'
import Slider6 from '../../assets/006/slider-6.jpg'
import Carousel from "./Carousel/Carousel"
import { InfoCard, InfoCardContent } from "../../components/InfoCard/InfoCard"

const infoCardContent:InfoCardContent = {
    devTime: '1 day',
    notes: 'Images are not optimized, and responsive is not greatly done.'
}

export const ImageCarousel = () => {
    const [images, setImages] = useState<string[]>()
    
    useMemo(() => {
        const imagesTbl:string[] = []
        imagesTbl.push(Slider1)
        imagesTbl.push(Slider2)
        imagesTbl.push(Slider3)
        imagesTbl.push(Slider4)
        imagesTbl.push(Slider5)
        imagesTbl.push(Slider6)
        setImages(imagesTbl)
    }, [])

    return (
        <div className="bg-[#0C0C0C] w-full h-full justify-center text-gray-50 p-12 gap-8">
            <InfoCard infoCardContent={infoCardContent}/>
            <Carousel images={images!}/>
        </div>
    )
} 