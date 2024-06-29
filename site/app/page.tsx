import { MoveRight } from "lucide-react";
import { BookOpenText } from "lucide-react";

export default function Home() {
  return (
    <>
          <div className="site-intro">
            <div className="intro-text">
              <h1>Empower your health journey</h1>
              <p>Zen has a collection of features to push you a step closer to maintaining a healthy lifestyle.</p>
            </div>
            <button className="get-started-btn"><p>Get Started</p><MoveRight /></button>
          </div>
          {/* <div className="features">
            <article>
              <h2>Nutrition tracking</h2>
              <p>On Zen, we utilise a set of carefully picked APIs (Application Programming Interfaces), to present users with accurate, up-to-date, and descriptive information for foods they&apos;re eating. Users can search for foods, and be presented with corresponding nutritional data.</p>
            </article>
            <article>
              <h2>Exercise advice</h2>
              <p>As well as aiding with dietary changes and tracking, we also have features which allow users to interact with more carefully picked APIS that can provide information of exercises and their impacts on the body, as well as what they are best for.</p>
            </article>
            <article>
              <h2>AI assistance</h2>
              <p>We have implemented a chat feature, with prompts to help you, courtesy of Google Gemini AI. This can be used to be recommended meals, snacks, drinks, exercises; you name it! It will give you a response based on what you input.</p>
            </article>
          </div> */}
    </>
  );
}
