import "./skills.css"

function Skills(){

    return(
        <div className="skills">
            <div className="skilltext">
                <h3 className="our">Our Skills.</h3>
                <p className="textour">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                tempor incididunt ut labore et dolore.</p>

                <p className="textour">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                tempor incididunt ut labore et dolore.</p>
            </div>

            <div className="percent">
                <p>Photography</p>
                <div className="border">
                    <div className="completed">90%</div>
                </div>

                <p>Web Design</p>
                <div className="border">
                    <div className="completed w">85%</div>
                </div>

                <p>Photoshop</p>
                <div className="border">
                    <div className="completed w2">75%</div>
                </div>

            </div>


            
        </div>
    )


}

export default Skills