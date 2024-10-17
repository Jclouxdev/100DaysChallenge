import { RoundedSwitch } from "../RoundedSwitch/RoundedSwitch"

export const SwitchWithLabel = ({label, setOption, optionState}:{label:string, setOption:React.Dispatch<React.SetStateAction<boolean>>, optionState:boolean}) => {
    return (
        <div className="flex flex-row items-center bg-[#26173C] rounded-2xl px-4 py-3 justify-between">
            <p>{label}</p>
            <RoundedSwitch setOption={setOption} optionState={optionState}/>
        </div>
    )
}