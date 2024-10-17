import './RoundedSwitch.css'

export const RoundedSwitch = ({setOption, optionState}:{setOption:React.Dispatch<React.SetStateAction<boolean>>,optionState:boolean}) => {
    return (
        <label className="switch"
        >
            <input type="checkbox" 
                checked={optionState}
                onClick={() =>  {
                    setOption(!optionState)
                }}/>
            <span className="slider round"></span>
        </label>
    )
}