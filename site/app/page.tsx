import Gemini from '../public/gemini.png';
import Chartjs from '../public/chartjs.png';
import Nutritionix from '../public/nutritionix.png';
import Strava from '../public/strava.png'
import Mind from '../public/mind.png';
import Image from "next/image";
import ScrollContainer from './ui/containers/scroll-container';
import TallCard from './ui/containers/tall-card';
import WideCard from './ui/containers/wide-card';

export default function Home() {
  return (
    <div className="home-page">
      <section className="site-intro">
        <div className="intro-text">
          <h1>Empower your health journey</h1>
          <h4>Zen has a collection of services to push you a step closer to leading a healthy lifestyle.</h4>
        </div>
        <div className="cta-btns">
          <button className="about-cta"><p>About Zen</p></button>
          <button className="get-started-cta"><p>Get Started</p></button>
        </div>
      </section>
      <section className="services">
        <div className="intro">
          <h2>What we provide</h2>
        </div>
        <ScrollContainer>
          <ul className="service-list">
            <li className="service-list-item">
              <TallCard>
                <div className="service-info">
                  <h4>Food and diet</h4>
                  <h3>Nutritional data at the click of a finger.</h3>
                </div>
                <div className="service-imgs">
                  <div className="img-wrapper">
                    <Image src={Nutritionix} height={200} alt="Nutritionix" />
                  </div>
                </div>
                <div className="service-description">
                  <p>To ensure you can reach your goals, you need to know what you&apos;re consuming. We provide you with nutritional information on, just about, any food imaginable.</p>
                </div>
              </TallCard>
            </li>
            <li className="service-list-item">
              <TallCard>
                <div className="service-info">
                  <h4>Getting active</h4>
                  <h3>Workout plans for all your needs.</h3>
                </div>
                <div className="service-imgs">
                  <div className="img-wrapper">
                    <Image src={Strava} height={200} alt="Chart.js" />
                  </div>
                </div>
                <div className="service-description">
                  <p>Thanks to the array of fitness gurus around the world that share their insights on the best exercises, we allow you to research fitness plans to guide you to your health goals.</p>
                </div>
              </TallCard>
            </li>
            <li className="service-list-item">
              <TallCard>
                <div className="service-info">
                  <h4>AI assistance</h4>
                  <h3>Let the future work for you, with AI.</h3>
                </div>
                <div className="service-imgs">
                  <div className="img-wrapper">
                    <Image src={Gemini} height={100} alt="Gemini AI" />
                  </div>
                </div>
                <div className="service-description">
                  <p>The future is here. Use Google Gemini AI to interact with, and be suggested new foods and exercises etc. Just in case you&apos;re a little stuck for ideas.</p>
                </div>
              </TallCard>
            </li>
            <li className="service-list-item">
              <TallCard>
                <div className="service-info">
                  <h4>Managing the moment</h4>
                  <h3>Wellness resources to help you through.</h3>
                </div>
                <div className="service-imgs">
                  <div className="img-wrapper">
                    <Image src={Mind} height={100} alt="Mind Charity" />
                  </div>
                </div>
                <div className="service-description">
                  <p>We believe that your physical health and mental health go hand in hand. We provide resources and links to mental health support, and general wellness resources.</p>
                </div>
              </TallCard>
            </li>
            <li className="service-list-item">
              <TallCard>
                <div className="service-info">
                  <h4>Statistics and tracking</h4>
                  <h3>Track your progress and set goals.</h3>
                </div>
                <div className="service-imgs">
                  <div className="img-wrapper">
                    <Image src={Chartjs} height={200} alt="Chart.js" />
                  </div>
                </div>
                <div className="service-description">
                  <p>You should know what&apos;s going on. Track your progress throughout your journey, as well setting exercise and dietary milestones to have a star to shoot for.</p>
                </div>
              </TallCard>
            </li>
          </ul>
        </ScrollContainer>
      </section>
      <section className="more-info-on-features">
        <div className="intro">
          <h2>More info on our features</h2>
        </div>
        <ScrollContainer>
          <ul>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Fetching data</h3>
                </div>
                <div className="feature-description">
                  <p>To provide you with accurate, and up to date data, we utilise APIs from companies like Nutritionix, Strava, and more. This allows us to securely receive information, with the guarantee that it is accurate and from a reliable source. From this, we have search bar functionality, which provides you with the ability to quickly find the information you desire.</p>
                </div>
              </WideCard>
            </li>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Using Gemini</h3>
                </div>
                <div className="feature-description">
                  <p>When you may be stuck for ideas for a meal, or a workout plan, we have Gemini AI here to help. We have made this possible via Google's Gemini AI API. Similar to the data fetching, we use over the browser HTTP requests to their API to provide you with this functionality. You can use the prompts we provide to help guide you to the information you want, or enter your own request into the text input at the bottom of the screen.</p>
                </div>
              </WideCard>
            </li>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Tracking progress</h3>
                </div>
                <div className="feature-description">
                  <p></p>
                </div>
              </WideCard>
            </li>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Wellness resources</h3>
                </div>
                <div className="feature-description">
                  <p></p>
                </div>
              </WideCard>
            </li>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Why the glossary?</h3>
                </div>
                <div className="feature-description">
                  <p>We understand that not everyone will be as accustomed to the different definitions and terminology being used in the health and wellness scene. Because of this, we decided to make a page with a list of all the common terminology, and their definitions, to help you along the journey.</p>
                </div>
              </WideCard>
            </li>
            <li>
              <WideCard>
                <div className="feature-name">
                  <h3>Accounts</h3>
                </div>
                <div className="feature-description">
                  <p></p>
                </div>
              </WideCard>
            </li>
          </ul>
        </ScrollContainer>
      </section>
    </div>
  );
}
