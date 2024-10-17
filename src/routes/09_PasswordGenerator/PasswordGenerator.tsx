import { useMemo, useState } from "react"
import { SwitchWithLabel } from "./SwitchWithLabel/SwitchWithLabel"
import { passwordGeneration } from "./utils/passwordGeneration"
import { Slider } from "./Slider/Slider"
import { Notification } from "./Notification/Notification"

export const PasswordGenerator = () => {
    const [optionUpper, setOptionUpper] = useState(true)
    const [optionLower, setOptionLower] = useState(true)
    const [optionNumber, setOptionNumber] = useState(true)
    const [optionSymbol, setOptionSymbol] = useState(true)
    const [passwordLenght, setPasswordLenght] = useState<number>(12)
    const [generatedPassword, setGeneratedPassword] = useState<string>("")
    const [notificationState, setNotificationState] = useState(false)

    const generate = () => {
        setGeneratedPassword(passwordGeneration(passwordLenght, optionUpper, optionLower, optionNumber, optionSymbol))
    }

    const showNotification = () => {
        setNotificationState(true);
        setTimeout(() => {
            setNotificationState(false);
        }, 2000);
    };

    useMemo(() => {
        generate()
    }, [optionLower, optionNumber, optionSymbol, optionUpper, passwordLenght])
    
    return (
        <div className="bg-[#F7E7FF] w-full h-full overflow-y-hidden relative md:flex md:items-center md:justify-center">
            <Notification state={notificationState} content={"Content copied to clipboard!"}/>
            <div className="bg-[#090212] w-full p-0 md:w-96 h-full overflow-y-hidden md:h-min pt-20 md:pt-auto md:p-6 md:rounded-xl text-[#F7E7FF] px-6 flex flex-col gap-8">
                <h1 className="font-medium text-2xl">Generate password</h1>
                <div className="grid gap-2">
                    <p className="uppercase text-[#87808E] text-xs">Generated password</p>
                    <div className="flex flex-row items-center bg-[#26173C] rounded-xl px-4 py-3 justify-between gap-4">
                        <input type="text" value={generatedPassword} className="bg-transparent w-full text-xl"  disabled/>
                        <div className="flex flex-row text-[#CE5FFF] gap-2 justify-self-right">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 cursor-pointer"
                                onClick={() => {
                                    navigator.clipboard.writeText(generatedPassword)
                                    showNotification()
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 cursor-pointer"
                                onClick={generate}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid gap-2">
                    <p className="uppercase text-[#87808E] text-xs">Caracter length</p>
                    <div className="flex flex-row items-center bg-[#26173C] rounded-2xl px-4 py-3 justify-between gap-4">
                        <p>12</p>
                        <Slider value={passwordLenght} setValue={setPasswordLenght}/>
                        <p>32</p>
                    </div>
                </div>
                <div className="grid gap-2">
                    <p className="uppercase text-[#87808E] text-xs">Settings</p>
                    <SwitchWithLabel label="Include uppercase letters" setOption={setOptionUpper} optionState={optionUpper}/>
                    <SwitchWithLabel label="Include lowercase letters" setOption={setOptionLower} optionState={optionLower}/>
                    <SwitchWithLabel label="Include numbers" setOption={setOptionNumber} optionState={optionNumber}/>
                    <SwitchWithLabel label="Include symbols" setOption={setOptionSymbol} optionState={optionSymbol}/>
                </div>
                <button 
                    className="bg-[#CE5FFF] rounded-xl px-4 py-3 font-bold"
                    onClick={generate}
                >Generate Password</button>
            </div>
        </div>
    )
}