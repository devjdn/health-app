import Gemini from '../public/gemini.png';
import Chartjs from '../public/chartjs.png';
import Mind from '../public/mind.png';
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
          <div className="site-intro">
            <div className="intro-text">
              <h1>Empower your health journey</h1>
              <h3>Zen has a collection of features to push you a step closer to maintaining a healthy lifestyle.</h3>
            </div>
            <div className="cta-btns">
              <button className="about-cta"><p>About Zen</p></button>
              <button className="get-started-cta"><p>Get Started</p></button>
            </div>
          </div>
          <div className="features">
            <article>
              <div className="feature-info">
                <h3>Statistics and tracking</h3>
                <h2>Nutrition? Exercise? Stay on top of it.</h2>
              </div>
              <div className="feature-imgs">
                <div className="img-wrapper">
                  <Image src={Chartjs} height={200} alt="Chart.js" />
                </div>
              </div>
              <div className="feature-description">
                <p>We allow users to research information and data on different foods, exercises, so on and so forth. As well as this, when users sign up, they can track their calories, exercise data, and other statistics to help stay on the right track.</p>
              </div>
            </article>
            <article>
              <div className="feature-info">
                <h3>Let the future work for you</h3>
                <h2>AI assistance for all your needs, via Gemini AI.</h2>
              </div>
              <div className="feature-imgs">
                <div className="img-wrapper">
                  <Image src={Gemini} height={100} alt="Gemini AI" />
                </div>
              </div>
              <div className="feature-description">
                <p>We decided to implement the Google Gemini AI API to allow users to interact with, and be suggested new foods and exercises etc. by an external source. Just in case you&apos;re a little stuck for ideas.</p>
              </div>
            </article>
            <article>
              <div className="feature-info">
                <h3>Managing the moment</h3>
                <h2>Wellness resources to help you through.</h2>
              </div>
              <div className="feature-imgs">
                <div className="img-wrapper">
                  <Image src={Mind} height={100} alt="Mind Charity" />
                </div>
              </div>
              <div className="feature-description">
                <p>We believe that your physical health and mental health go hand in hand, and both need to be treated with equal amounts of care. This is why we decided to include a series of resources and links to mental health support, and general wellness resources.</p>
              </div>
            </article>
          </div>
    </div>
  );
}
