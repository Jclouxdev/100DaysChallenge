import './Slider.css'

export const Slider = ({value, setValue}:{value:number,setValue:React.Dispatch<React.SetStateAction<number>>}) => {
    return (
        <div className="slider-container w-full">
            <input 
                type="range" 
                min="12" 
                max="32" 
                value={value} 
                className="inputSlider" 
                onChange={(e) => {   
                    setValue(Number(e.currentTarget.value))
                }}
                id="myRange" 
            />
        </div>
    )
}