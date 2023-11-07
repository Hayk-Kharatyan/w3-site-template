
import "./nav.css"

function Nav({setOpen,open}) {
    return (
        <div className="nav-bar">
            
                <li className="leftli">
                    Logo
                </li>
   
            <ul className="right">
                <li>
                    About
                </li>
                <li>
                    Team
                </li>
                <li>
                    Work
                </li>
                <li>
                    Pricing
                </li>
                <li> Concact</li>
               
            </ul>
            <button onClick={()=>{
                setOpen(!open)
            }} className="btn-nav">
                <img alt="nav" width="30px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"></img>
            </button>
        </div>
    )
}

export default Nav