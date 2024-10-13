// v1
//  - Temps de dev : 0.5d

import profilePic from "../../assets/001/profile-pic.webp"
import wave1 from "../../assets/001/wave-1.svg"
import wave2 from "../../assets/001/wave-2.svg"
import wave3 from "../../assets/001/wave-3.svg"
import logoFacebook from "../../assets/001/logo-facebook.svg"
import logoLinkedin from "../../assets/001/logo-linkedin.svg"
import logoTwitter from "../../assets/001/logo-twitter.svg"
import logoInstagram from "../../assets/001/logo-instagram.svg"
import logoBaskter from "../../assets/001/basketball-outline.svg"
import { InfoCard, InfoCardContent } from "../../components/InfoCard/InfoCard"

const infoCardContent:InfoCardContent = {
    devTime: '0.5 day'
}

const ProfileCard = () => {
    return (
        <div className="bg-[#F0F3C0] w-full h-full flex items-center justify-center">
            <InfoCard infoCardContent={infoCardContent}/>
            <div id="card" className="card bg-white max-w-[400px] rounded-[50px] relative overflow-hidden shadow-xl">
                <div className="card__header p-6 bg-[#983250] w-full">
                    <img src={profilePic} alt="Profile picture." className="relative z-30 max-w-32 rounded-full m-auto shadow-2xl" />
                    <img 
                        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png" 
                        alt="Beaming Face with Smiling Eyes" 
                        width="30"
                        height="30"
                        className="absolute z-40 left-[58%] top-[20%] shadow-md rounded-full"
                    />
                    <div className="absolute left-0 w-full">
                        <img src={wave1} alt="Background wave-1" className="absolute top-0 z-20"/>
                        <img src={wave2} alt="Background wave-2" className="absolute top-0 z-10"/>
                        <img src={wave3} alt="Background wave-3" className="absolute top-0 z-0"/>
                    </div>
                </div>
                <div className="card__body mt-12 p-8 text-center">
                    <h1 className="text-3xl font-medium tracking-widest">Jhonny Rogers</h1>
                    <p className="text-sm text-gray-600">@jhonnyrogers</p>
                    <div className="card__body__socials mt-8 mb-8 flex flex-row justify-center gap-8">
                        <img src={logoFacebook} alt="Facebook link." width={24} />
                        <img src={logoLinkedin} alt="Facebook link." width={24}/>
                        <img src={logoTwitter} alt="Facebook link." width={24}/>
                        <img src={logoInstagram} alt="Facebook link." width={24}/>
                        <img src={logoBaskter} alt="Facebook link." width={24}/>
                    </div>
                    <p className="text-sm font-medium">
                        Crafting brand and communication strategies, creating visual designs, 
                        leading art direction, and capturing portraits through photography.
                    </p>
                </div>
                <div className="card__footer pb-10 pl-10 pr-10 py-6 flex flex-row gap-6">
                    <button className="w-1/2 bg-[#E03F8C] text-white rounded-3xl p-2">Follow</button>
                    <button className="w-1/2 border-[1px] border-gray-400 rounded-3xl p-2">Message</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;