import './images.css'
import Image2 from './imgconp'

function Imgrender(){
    return(
<div className='imgsdiv'>
    <Image2 src={["./images/tech_mic.jpg","./images/tech_phone.jpg","./images/tech_drone.jpg","./images/tech_sound.jpg","./images/tech_tablet.jpg","./images/tech_camera.jpg","./images/tech_typewriter.jpg","./images/tech_tableturner.jpg"]}/>
</div>
    )
}


export default Imgrender