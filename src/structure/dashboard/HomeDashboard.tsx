
// React 
import { useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

// CSS Files 
import "../../assets/css/index.css"
import "../../assets/css/dashboard_css/Home_Dashboard.sass"

// Components
import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"
import GlobalPowerMenu from "../../components/globalPowerMenu"
import GlobalAudioMenu from "../../components/globalAudioMenu"

// tile icons
import Rooms   from "../../assets/images/icons/icons8-room.svg"
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import Climate from "../../assets/images/icons/icons8-winter.svg"
import Pool    from "../../assets/images/icons8-swimming-pool.svg"
import Security from "../../assets/images/icons8-smart-home-shield.svg"
import mute from "../../assets/images/icons/icons8-no-audio.svg"
import cross from "../../assets/images/icons/icons8-x.svg"




// icons
import power from "../../assets/images/icons/icons8-power.svg"



const HomeDashboard = () => {

    


    const [tvPowerMenu, setTvPowerMenu] = useState(false)      //  TV Power Menu    
    const [muteMenuGrid, setMuteMenuGrid] = useState(false)    // mute grid
    const [count,setCount] = useState(1)
    const [viewportViewer,setViewportViewer ] = useState(false)

    const ViewPortCounter = () => {
        if(count === 5){  
            setViewportViewer(true)
        }
        setCount(count+1)
    }

    const powerMenu =() => {
      
        setTvPowerMenu(true)
        
      };
    
    const muteMenu = () => {
        setMuteMenuGrid(true)
    }


  

    return (

        <div className="living_room_page">
        
        <div className={tvPowerMenu? "home_power_menu" : "display_none"} >
        
            <div className="golbal_power_close_menu" onClick={() => setTvPowerMenu(false)}> 
                <button className="btn_circle"> <img className="btn_image" src={cross} /> </button>
            </div>

            <GlobalPowerMenu  />
            

        </div>


        <div className={muteMenuGrid? "home_power_menu" : "display_none"} >
          
            <div className="golbal_power_close_menu" onClick={() => setMuteMenuGrid(false)}> 
                <button className="btn_circle"> <img className="btn_image" src={cross} /> </button>
            </div>

            <GlobalAudioMenu  />
        

        </div>

            <div className="home_power_container">
                <button className="home_button" onClick={()=>powerMenu()}>
                    <img  src={power} />
                </button>
            </div>

        <div className="home_power_container" id="home_mute">
            <button className='home_button'  onClick={()=>muteMenu()}>
                <img className ="btn_image"src={mute} style={{filter:"invert(0)"}}/>
            </button>
        </div>
                    

          
                <div className="time_date_info">
                    <div className="clock_info" onClick = {ViewPortCounter} style={{width:"100%"}}>
                        <Clock  />

                        <>
                            {viewportViewer?  <div style={{height:"3rem",width:"20rem", backgroundColor:"rgb(70,70,70)", display:"flex",justifyContent:'center',alignContent:"center"}}> <Link to={"/ScreenSize"}> <p style={{fontSize:"large"}}> Enter ViewPort Viewer  </p> </Link> </div>  : '' }
                        </>
                    </div>

                    <div className="date-info">
                        <DateDisplay />
                    </div>
                </div>
            
                <div className="dashboard_container">
                    <Link  className="card_container" to='/RoomsDashboard' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Rooms}/>
                        <p className="card_title"> Rooms </p>
                    </Link>
                
                    <Link  className="card_container" to='/AudioDashboard' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Audio}/>
                        <p className="card_title"> Audio </p>
                    </Link> 
                
                    <Link  className="card_container" to='/LightDashboard' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Light}/>
                        <p className="card_title"> Lights </p>
                    </Link> 
                
                    <Link  className="card_container" to='/Climate' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Climate}/>
                        <p className="card_title"> Climate </p>
                    </Link> 

                    <Link  className="card_container" to='/Security' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Security}/>
                        <p className="card_title"> Security </p>
                    </Link> 
                
                    <Link  className="card_container" to='/PoolSpa' style={{textDecoration:"none"}}> 
                        <img className="card_image" src={Pool}/>
                        <p className="card_title"> Pool - Spa </p>
                    </Link> 
                </div>


           



              
           
        </div>

    )  
}

export default HomeDashboard