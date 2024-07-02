

export default function GlobalSidebar() {
    return(
        <div className="global-sidebar">
            <div className="prompt-form">
                <div className="tab-btns">
                    <button className="tab active" id="fitnessTab">Fitness</button>
                    <button className="tab" id="foodTab">Food</button>
                </div>
                <div className="inputs">
                    <input type="number" id="age" name="age" min={11} max={100} placeholder="Age"/>
                    <input min={40} type="number" id="weight" name="weight" placeholder="Weight"/>
                    <input type="number" id="calories" name="calories" placeholder="Maintenance calories" min={0}/>
                    <textarea id="goals" name="goals" placeholder="Goals and milestones for your journey"></textarea> 
                </div>
            </div>
        </div>
    );
}