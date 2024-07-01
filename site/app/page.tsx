import Gemini from '../public/gemini.png';
import Chartjs from '../public/chartjs.png';
import Mind from '../public/mind.png';
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <section className="site-intro">
        <div className="intro-text">
          <h1>Empower your health journey</h1>
          <h4>Zen has a collection of services to push you a step closer to maintaining a healthy lifestyle.</h4>
        </div>
        <div className="cta-btns">
          <button className="about-cta"><p>About Zen</p></button>
          <button className="get-started-cta"><p>Get Started</p></button>
        </div>
      </section>
      <section className="services">
        {/* <div className="section-intro">
          <h2>A quick snapshot</h2>
        </div> */}
        <ul className="service-list">
          <li className="service-list-item">
            <div className="service-info">
              <h4>Statistics and tracking</h4>
              <h3>Nutrition? Exercise? Stay on top of it.</h3>
            </div>
            <div className="service-imgs">
              <div className="img-wrapper">
                <Image src={Chartjs} height={200} alt="Chart.js" />
              </div>
            </div>
            <div className="service-description">
              <p>We allow users to research information and data on different foods, exercises, so on and so forth. As well as this, when users sign up, they can track their calories, exercise data, and other statistics to help stay on the right track.</p>
            </div>
          </li>
          <li className="service-list-item">
            <div className="service-info">
              <h4>Let the future work for you</h4>
              <h3>AI assistance for all your needs.</h3>
            </div>
            <div className="service-imgs">
              <div className="img-wrapper">
                <Image src={Gemini} height={100} alt="Gemini AI" />
              </div>
            </div>
            <div className="service-description">
              <p>We decided to implement the Google Gemini AI API to allow users to interact with, and be suggested new foods and exercises etc. by an external source. Just in case you&apos;re a little stuck for ideas.</p>
            </div>
          </li>
          <li className="service-list-item">
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
              <p>We believe that your physical health and mental health go hand in hand, and both need to be treated with equal amounts of care. This is why we decided to include a series of resources and links to mental health support, and general wellness resources.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="guide">
        <div className="section-intro">
          <h2>How Zen works</h2>
        </div>
      </section>
    </div>
  );
}
