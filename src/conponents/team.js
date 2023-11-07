import './team.css'
let team = ["John Doe","Jane Doe","Mike Ross","Dan Star"]
let profession = ["CEO & Founder","Architect","Architect","Architect"]

let imgsrc=["./images/team1.jpg","./images/team2.jpg","./images/team3.jpg","./images/team4.jpg"]

function Team(props){

let array = []

for(let i = 0;i<props.num;i++){
array.push(i)
}

let mapedarray = array.map((e,i)=>{
    return(
        <div key={e} className="teamdiv">
            <img alt="team" className="teamimage" src={imgsrc[i]}></img>
            <h3 className="name">{team[i]}</h3>
            <p className="proffesion">{profession[i]}</p>
            <p className="textt">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
            <div className="btndiv">
            <button className="btn">Contact</button>
            </div>
        </div>
    )
})
return mapedarray

}

export default Team