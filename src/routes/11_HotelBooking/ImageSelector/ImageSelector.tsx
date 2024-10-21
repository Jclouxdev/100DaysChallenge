type Props = {
    setImageSelected: React.Dispatch<React.SetStateAction<string>>,
    imageSelected: string,
    images: string[]
}

export const ImageSelector = ({setImageSelected, imageSelected, images}:Props) => {
    const IMAGE_DEFAULT_STYLE = "w-1/3 border-2"
    const IMAGE_SELECTED_STYLE = IMAGE_DEFAULT_STYLE + " border-orange-500"
    let i = 0;

    return (
        <div>
            <img src={imageSelected} alt={"Image principale"} className="mb-4"/>
            <div className="w-full flex flex-row gap-2 overflow-x-scroll">
                {images.map((image) => {
                    i++
                    return (
                        <img 
                            key={i} 
                            src={image} 
                            alt={image} 
                            onClick={() => {
                                setImageSelected(image)
                            }}
                            className={image == imageSelected ? IMAGE_SELECTED_STYLE : IMAGE_DEFAULT_STYLE}
                        />
                    )
                })}
            </div>
        </div>
    )
}