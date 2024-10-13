import { useEffect, useState, forwardRef } from "react";
import { FieldError, RegisterOptions, useFormContext } from "react-hook-form";

type InputType =
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';

type IconType =
    | 'id'
    | 'email'
    | 'password'

interface InputProps {
    type: InputType;
    name: string;
    id?: string;
    icon?: IconType;
    label: string;
    error: FieldError | undefined;
}

// Utiliser forwardRef pour recevoir la référence fournie par React Hook Form
export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, name, id, icon, label, error }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [passwordSwitch, setPasswordSwitch] = useState<'password' | 'text'>('password');
    const [currentError, setCurrentError] = useState<FieldError | undefined>();

    useEffect(() => {
        setCurrentError(error);
    }, [error]);

    const INPUT_STYLE_UNFOCUSED = 'flex flex-row items-center bg-[#E9ECF8] border-2 border-transparent rounded-xl px-4 py-2 gap-2';
    const INPUT_STYLE_FOCUSED = 'flex flex-row items-center bg-white border-2 border-[#406AFE] rounded-xl px-4 py-2 gap-2';
    const INPUT_STYLE_ERROR = 'flex flex-row items-center bg-white border-2 border-red-400 rounded-xl px-4 py-2 gap-2';

    const getIcon = (iconType: string | undefined) => {
        if (iconType == 'id') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-400">
                    <path fillRule="evenodd" d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z" clipRule="evenodd" />
                </svg>
            )
        }
        if (iconType == 'email') {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-400">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
            )
        }
        if (iconType == 'password') {
            if (passwordSwitch == 'password') {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-700 cursor-pointer"
                        onClick={() => {
                            setPasswordSwitch("text")
                        }}
                    >
                        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                    </svg>
                )
            }
            if (passwordSwitch == 'text') {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-700 cursor-pointer"
                        onClick={() => {
                            setPasswordSwitch("password")
                        }}
                    >
                        <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                        <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                        <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                    </svg>
                )
            }

        }
    }

    const getInputStyle = () => {
        if (isFocused) return INPUT_STYLE_FOCUSED;
        if (currentError) return INPUT_STYLE_ERROR;
        return INPUT_STYLE_UNFOCUSED;
    };

    const {register} = useFormContext();

    return (
        <div className={`${getInputStyle()} transition-all`}>
            <div className="flex flex-col w-full">
                <label htmlFor={name} className={`text-xs text-[#969696] font-medium`}>
                    {label}
                </label>
                <input
                    type={type === "password" ? passwordSwitch : type}
                    {...register(name)}
                    id={id}
                    className={`bg-transparent font-bold focus:outline-none`}
                    onFocus={() => {
                        setIsFocused(true);
                    }}
                    onBlur={() => {
                        setIsFocused(false);
                        if (error) setCurrentError(undefined);
                    }}
                />
            </div>
            <div className="">
                {getIcon(icon)}
            </div>
        </div>
    );
});

// Pour utiliser ref dans les composants fonctionnels avec TypeScript
Input.displayName = 'Input';
