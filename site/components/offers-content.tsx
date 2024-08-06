import Gemini from '../public/gemini.png';
import Chartjs from '../public/chartjs.png';
import Nutritionix from '../public/nutritionix.png';
import Mind from '../public/mind.png';
import Image from "next/image";

export default function Offers() {
    return(
        <div className="offers">
            <ul className='offers-list'>
                <li className='offers-list-item'>
                    <div className="offer-text">
                        <h3>Nutritional data</h3>
                        <p>Access nutritional facts and data from any food imaginable.</p>
                    </div>
                    <div className='img-container'>
                        <Image sizes="100%" fill={true} src={Nutritionix} alt='Nutritionix logo'/>
                    </div>
                </li>
                <li className='offers-list-item'>
                    <div className="offer-text">
                        <h3>Progress tracking</h3>
                        <p>We allow you to track your progress via your favourite apps.</p>
                    </div>
                    <div className='img-container'>
                        <Image sizes="100%" fill={true} src={Chartjs} alt='Chartjs logo'/>
                    </div>
                </li>
                <li className='offers-list-item'>
                    <div className="offer-text">
                        <h3>Advice from AI</h3>
                        <p>We allow you to track your progress via your favourite apps.</p>
                    </div>
                    <div className='img-container'>
                        <Image sizes="100%" fill={true} src={Gemini} alt='Google Gemini AI logo'/>
                    </div>
                </li>
                <li className='offers-list-item'>
                    <div className="offer-text">
                        <h3>Mindfulness resources</h3>
                        <p>The mind and body go hand in hand. Look after it.</p>
                    </div>
                    <div className='img-container'>
                        <Image sizes="100%" fill={true} src={Mind} alt='Mind charity logo'/>
                    </div>
                </li>
            </ul>
        </div>
    );
}