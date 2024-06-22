import { ArrowBigRightDash, ArrowBigUp, Brain, BrainCogIcon, BrainIcon, CornerRightUp, MenuSquare } from "lucide-react";

export default function AI() {

    return(  
        <section className="ai-section">
            <ul>
                <li>
                    <div className="question">
                        <p>What is your age?</p>
                    </div>
                    <input type="number" />
                </li>
                <li>
                    <div className="question">
                        <p>What is your weight?</p>
                    </div>
                    <input type="number" />
                </li>
            </ul>
            <div className="ai-input">
                <button className="prompt-menu-btn"><BrainIcon /></button>
                <div className="ai-text-wrapper">
                    <textarea placeholder="Ask Gemini..." rows={1}></textarea>
                </div>
                <button className="ai-send-btn"><ArrowBigUp /></button>
            </div>
        </section>
    );
}