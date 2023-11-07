import "./inputs.css"

function Inputs(){

    return(
        <div className="inputsdiv">
            <div className="poscen">
            <h3>CONTACT</h3>
            <p>Lets get in touch. Send us a message:</p>
            </div>
              <input className="input " placeholder="Name" type="text"/>
              <input className="input mar" placeholder="E-mail" type="text"/>
              <input className="input mar" placeholder="Subject" type="text"/>
              <input className="input mar" placeholder="Comment" type="text"/>
              <input value="Send Message" className="btn" type="button"/>
        </div>
      
    )
    
    }
    
    export default Inputs