import "./imgconp2.css"
function Image2(props){
    let arr = props.src
   let maparr = arr.map((img)=>{
    return(
            <img className="render" key={img} alt="img" src={img}></img>
    )
   })
   return maparr
    }
    
    
    export default Image2