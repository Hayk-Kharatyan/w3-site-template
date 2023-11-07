
function Image(props){
    let arr = props.src
   let maparr = arr.map((img)=>{
    return(
        
<img key={img} alt="img" src={img}></img>
    )
   })
   return maparr
    }
    
    
    export default Image