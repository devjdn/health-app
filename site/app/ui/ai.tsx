export default function AI() {

    return(  
        <section>
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
        </section>
    );
}