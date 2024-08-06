import Offers from '@/components/offers-content';
import { Instrument_Serif } from 'next/font/google';

const instrument = Instrument_Serif({weight: ["400"], subsets: ["latin"]});

export default function Home() {
  return (
    <main className='home'>
      <section className="intro">
        <div className="section-text">
          <h1 className={instrument.className}>Empower your health journey</h1>
          <p>Push yourself to achieving the healthy body, and mind, that you deserve.</p>
        </div>
        <div className='cta-btns'>
          <a href="">
            <button className="nutrition">
              <p>Nutrition</p>
            </button>
          </a>
          <button className="signup">
            <p>Sign Up</p>
          </button>
        </div>
      </section>
      <section className="what-we-offer">
        <div className="section-text">
          <h2 className={instrument.className}>What we offer to you</h2>
        </div>
        <Offers/>
      </section>
      <section className="how-we-do-it">
        <div className="section-text">
          <h2 className={instrument.className}>How we do it</h2>
          <p>We use the Edamam API to get detailed nutritional information about the food and drinks you consume. Imagine being able to look up almost any food item or recipe and instantly see how many calories it has, along with its protein, fat, and carbohydrate content. You can also check for vitamins and minerals. Whether you&apos;re counting calories, tracking your protein intake, or just curious about what&apos;s in your food, the Edamam API provides the information you need. This helps you make healthier choices and better understand your diet. Our app makes it easier for you to eat well and live a healthier life.</p>
          <p>With our app, you can use the Gemini AI API to get personalized advice from an AI assistant. This powerful tool allows you to ask questions and receive thoughtful, tailored responses on a wide range of topics, from health and fitness to career guidance and personal development. By integrating the Gemini AI API, we enable you to have a conversational experience where the AI understands your queries and provides helpful, relevant advice. Whether you need tips on improving your diet, strategies for stress management, or insights on advancing in your career, the AI assistant is here to support you. This makes it easier for you to get the information and guidance you need, right at your fingertips.</p>
        </div>
      </section>
    </main>
  );
}
