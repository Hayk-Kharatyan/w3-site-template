import "./iphone.css"
import Image from "./imgconp"
function Iphone(){
    return(
<div className="ipdiv">
    <div className="iptext">
        <h3>We know design.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
tempor incididunt ut labore et dolore.</p>
        <button> View Our Works</button>
    </div>
    <div className="image"><Image src={["./images/phone.jpg"]}/></div>
</div>
    )
}

export default Iphone