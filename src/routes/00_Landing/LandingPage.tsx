import { useMemo } from 'react'
import WaveBg from '../../assets/000/bg.jpg'

export const LandingPage = () => {
    useMemo(() => {
        localStorage.clear()
    }, [])

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-[#F7F7F7] w-full h-full relative">
            <section id="hero" className="w-full md:w-[680px] mx-auto h-screen flex flex-col justify-center md:justify-normal md:pt-40 md:items-start px-6 gap-6">
                <h1 className="text-3xl font-montserat font-bold z-10">Je releve un défi de 100 jours pour devenir un expert du développement <strong className='text-[#2F8ED0]'>front-end</strong> !</h1>
                <p className='text-gray-400 font-light z-10'>Mon objectif est d'améliorer mes compétences en front-end en me lançant dans un challenge quotidien pendant 100 jours</p>
                <button onClick={handleScrollToAbout} className="bg-[#2F8ED0] text-white py-3 px-6 rounded font-bold z-10">
                    En apprendre plus sur ce défi
                </button>
                <img src={WaveBg} alt="" className='absolute bottom-20 md:bottom-0 left-0 z-0' />
            </section>
            <section className='pb-12 px-6 md:px-32 text-[#F7F7F7] -translate-y-20'
                style={{
                    background:'rgb(0,29,112) linear-gradient(180deg, rgba(0,29,112,1) 0%, rgba(0,12,46,1) 100%)',
                }}
            >
                <h2 id="about" className="text-xl font-bold font-montserat mb-4 pt-40">Pourquoi ai-je décidé de relever ce défi de 100 jours ?</h2>
                <p className='font-light'>J'ai choisi de consacrer 100 jours à ce défi pour me focaliser sur le développement front-end et acquérir des habitudes et réflexes solides. En codant quotidiennement, je compte repousser mes limites, créer des composants modernes et cohérents, et construire un portfolio qui reflète mes compétences actuelles</p>
                <div className='grid gap-4 mt-4'>
                    <span className='flex gap-2 items-center text-[#2F8ED0]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                        </svg>
                        <h3 className='font-bold text-xl'>Apprendre à estimer les couts</h3>
                    </span>
                    <span className='flex gap-2 items-center text-[#2F8ED0]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                        <h3 className='font-bold text-xl'>Construire des automatismes</h3>
                    </span>
                    <span className='flex gap-2 items-center text-[#2F8ED0]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <h3 className='font-bold text-xl'>Faire ce que j'aime</h3>
                    </span>
                </div>
                <div>
                    <h2 className="text-xl font-bold font-montserat mb-4 mt-20">Dans quelles conditions ?</h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className='md:w-1/3'>
                            <span className='flex gap-2 items-center text-[#2F8ED0]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                <h3 className='font-bold text-xl'>Une alternance back-end Java</h3>
                            </span>
                            <p className='font-light'>Ce défi a été relevé sur mon temps personnel, en parallèle de mon alternance en tant que développeur back-end Java, sur un projet où je n'avais pas l'opportunité de faire du front-end</p>
                        </div>
                        <div className='md:w-1/3'>
                            <span className='flex gap-2 items-center text-[#2F8ED0]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                <h3 className='font-bold text-xl'>Un titre de "Software Engineer"</h3>
                            </span>
                            <p className='font-light'>En parallèle de mon alternance, je suivais également une formation en Master 2 à l'école de développement Ynov, préparant mon titre de "Software Engineer" avec une spécialisation en "Développement Web"</p>
                        </div>
                        <div className='md:w-1/3'>
                            <span className='flex gap-2 items-center text-[#2F8ED0]'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h3 className='font-bold text-xl'>Un temps limité</h3>
                            </span>
                            <p className='font-light'>Étant donné mon emploi du temps chargé, je me suis imposé des limites de temps pour chaque composant (avec la possibilité de les retravailler plus tard), afin de donner la priorité à mon alternance et à l'obtention de mon titre</p>
                        </div>
                    </div>
                </div>
                <div className='pb-6'>
                    <h2 className="text-xl font-bold font-montserat mb-4 mt-20">Les règles du challenge</h2>
                    <div className='grid md:grid-cols-3 gap-4'>
                        <div className='bg-[#2F8ED0] p-6 rounded text-center font-bold font-montserat text-[#001d70]'>
                            <p>Un minimum de librairies</p>   
                        </div>
                        <div className='bg-[#2F8ED0] p-6 rounded text-center font-bold font-montserat text-[#001d70]'>
                            <p>Le plus fidele possible</p>   
                        </div>
                        <div className='bg-[#2F8ED0] p-6 rounded text-center font-bold font-montserat text-[#001d70]'>
                            <p>Apprendre des exercices précédents</p>   
                        </div>
                    </div>
                </div>
            </section>
            <footer className='bg-[#000616] text-[#616779] flex w-full justify-evenly p-4 -translate-y-20'>
                <p>© Jclouxdev</p>
                <a href="https://github.com/Jclouxdev" className='flex gap-2'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd"/>
                    </svg>
                    Github
                </a>
            </footer>
        </div>
    )
}