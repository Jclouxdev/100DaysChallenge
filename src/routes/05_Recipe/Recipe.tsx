import { useMemo, useState } from 'react'
import CoffeLatte from '../../assets/005/iced_coffe_1920.webp' 
import { InfoCard, InfoCardContent } from '../../components/InfoCard/InfoCard'

const infoCardContent:InfoCardContent = {
    devTime: '0.5 day'
}

const DEFAULT_SHOPLIST_DATA:ShoplistItems[] = [
    {
        id: 1,
        item: '3 tablespoon Espresso coffee powder',
        state: false
    },
    {
        id: 2,
        item: '1 cup off the boil water',
        state: false
    },
    {
        id: 3,
        item: '1 cup Coconut milk',
        state: false
    },
    {
        id: 4,
        item: '3 tablespoon Espresso cocoa powder',
        state: false
    }
]

type ShoplistItems = {
    id:number,
    item:string, 
    state:boolean
}

export const Recipe = () => {
    const [shoppingList, setShoppingList] = useState<ShoplistItems[]>([])

    useMemo(() => {
        setShoppingList(DEFAULT_SHOPLIST_DATA)
    }, [shoppingList])

    const emptyStar = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-[#FCA619]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    )

    const filledStar = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-[#FCA619]">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
        </svg>
    )

    const getReviewCount = (): number => {
        return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
    }

    const changeState = (id:number) => {
        const filteredOne = shoppingList.filter((elem) => elem.id == id)
        const others = shoppingList.filter((elem) => elem.id !== id)
        if(filteredOne[0].state == true) filteredOne[0].state = false
        else if(filteredOne[0].state == false) filteredOne[0].state = true
        setShoppingList([...others, filteredOne[0]])
        console.log(shoppingList);
    }

    return (
        <div className="flex md:flex-col xl:flex-row">
            <InfoCard infoCardContent={infoCardContent}/>
            <div className='md:w-full xl:w-[40%] md:h-auto xl:h-screen'>
                <img 
                    src={CoffeLatte}
                    alt="Sweet iced Coffe with Coconut Milk" 
                    className='md:w-full xl:h-screen object-cover'
                />
            </div>
            <div className='md:w-full xl:w-[60%] py-24 px-8'>
                <div className="bg-white py-6 px-10 md:-mt-[200px] xl:-ml-[200px] xl:max-w-[500px] xl:-mt-[0px]">
                    <div className='flex flex-row gap-4 mb-2'>
                        <div className='flex flex-row gap-2'>
                            <span>{filledStar()}</span>
                            <span>{filledStar()}</span>
                            <span>{filledStar()}</span>
                            <span>{filledStar()}</span>
                            <span>{emptyStar()}</span>
                        </div>
                        <p className='text-sm'>({getReviewCount()})</p>
                    </div>
                    <h1 className='text-4xl font-bold'>Sweet iced Coffee with Coconut Milk</h1>
                </div>
                <div id='instructions' className='flex gap-10 mt-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className='text-xs'>
                            <p className='uppercase'>Total time</p>
                            <strong className='text-[#FCA619]'>10 minutes</strong>
                        </span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                        </svg>
                        <span className='text-xs'>
                            <p className='uppercase'>Level</p>
                            <strong className='text-[#FCA619]'>Easy</strong>
                        </span>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        <span className='text-xs'>
                            <p className='uppercase'>Budget</p>
                            <strong className='text-[#FCA619]'>10 minutes</strong>
                        </span>
                    </div>
                </div>
                <h3 className='italic mt-8'>Sweet Iced Coffee with coconut milk is easy to make and stores well in fridge. Make a large batch and save yourself a few trips to the coffee shop</h3>
                <section>
                    <h2 className='uppercase font-bold text-xl mt-12'>Ingredients</h2>
                    <ul className='flex flex-col gap-2 mt-2'>
                        {shoppingList.map((ingredient) => {
                            return (
                                <li key={ingredient.id}
                                    className='flex gap-2 cursor-pointer items-center'
                                    onClick={() => {
                                        changeState(ingredient.id)
                                    }}>
                                    <input type="checkbox" value="" checked={ingredient.state} className='w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                    <p>{ingredient.item} </p>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                <section>
                    <h2 className='uppercase font-bold text-xl mt-12'>Instructions</h2>
                    <div className='flex flex-col gap-2'>
                        <p>1. Boil some water and let sit for 1-2 minutes.</p>
                        <p>2. Put the coffee grounds into a cafetiere and pour in the water.</p>
                        <p>3. Let the coffe steep for 5 minutes then slowly press down the plunger on your Cafetiere.</p>
                        <p>4. Pour the coffee into a jug, allow to cool then chill for several hours.</p>
                        <p>5. Whisk in the coconut milk and condensed milk and serve over plenty of ice.</p>
                        <p>6. This coffee can be stored in the fridge for up to 5 days. Shake or stir again before serving.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}