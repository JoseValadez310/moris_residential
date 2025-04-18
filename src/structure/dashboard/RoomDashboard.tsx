// React 
import { useState, useEffect } from "react"



// React Router 
import { Link,useLocation  } from "react-router-dom"
// CSS 
import "../../assets/css/dashboard_css/Room_Dashboard.css"
import "../../assets/css/index.css"

// icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import portraitMode from "../../assets/images/icons/icons8-iphone-16-pro.svg"


// Test icons
import Audio   from "../../assets/images/icons/icons8-music.svg"
import Light   from "../../assets/images/icons/noun-light-bulb-2216273.svg"
//import Climate from "../../assets/images/icons/icons8-winter.svg"
import TV          from "../../assets/images/icons/icons8-tv.svg"




const RoomsDashboard = () => {

    

    const location = useLocation();
    const previousLocation = location.state?.previousLocation || "Unknown";



    const [location1, setLocation1] = useState(false) // upstairs
    const [location2, setLocation2] = useState(true) // main 
    const [location3, setLocation3] = useState(false) // down stairs - backyard


    const [roomActiveSource1, setRoomActiveSource1] = useState(0) // breaskfast
    const [roomActiveSource2, setRoomActiveSource2] = useState(0) // gym 
    const [roomActiveSource3, setRoomActiveSource3] = useState(0) // game room
    const [roomActiveSource4, setRoomActiveSource4] = useState(0) // master bed 
    const [roomActiveSource5, setRoomActiveSource5] = useState(0) // master bath
    const [roomActiveSource6, setRoomActiveSource6] = useState(0) // office
    const [roomActiveSource7, setRoomActiveSource7] = useState(0) // media room
    const [roomActiveSource8, setRoomActiveSource8] = useState(0) // family room
    const [roomActiveSource9, setRoomActiveSource9] = useState(0) // bar

    const [roomMusicActive1, setRoomMusicActive1] = useState(false) // dining room
    const [roomMusicActive2, setRoomMusicActive2] = useState(false) // living room




    useEffect(()=>{

        const roomMusic1 = window.CrComLib.subscribeState("b","507",(value:boolean)=>{setRoomMusicActive1(value)})
        const roomMusic2 = window.CrComLib.subscribeState("b","503",(value:boolean)=>{setRoomMusicActive2(value)})

        //------------
        const room1 = window.CrComLib.subscribeState("n","1",(value:number)=>{setRoomActiveSource1(value)})
        const room2 = window.CrComLib.subscribeState("n","2",(value:number)=>{setRoomActiveSource2(value)})
        const room3 = window.CrComLib.subscribeState("n","3",(value:number)=>{setRoomActiveSource3(value)})
        const room4 = window.CrComLib.subscribeState("n","4",(value:number)=>{setRoomActiveSource4(value)})
        const room5 = window.CrComLib.subscribeState("n","5",(value:number)=>{setRoomActiveSource5(value)})
        const room6 = window.CrComLib.subscribeState("n","6",(value:number)=>{setRoomActiveSource6(value)})
        const room7 = window.CrComLib.subscribeState("n","7",(value:number)=>{setRoomActiveSource7(value)})
        const room8 = window.CrComLib.subscribeState("n","8",(value:number)=>{setRoomActiveSource8(value)})
        const room9 = window.CrComLib.subscribeState("n","9",(value:number)=>{setRoomActiveSource9(value)})
  

        return () => {

            window.CrComLib.unsubscribeState("b","507",roomMusic1)
            window.CrComLib.unsubscribeState("b","503",roomMusic2)

            window.CrComLib.unsubscribeState("n","1",room1)
            window.CrComLib.unsubscribeState("n","2",room2)
            window.CrComLib.unsubscribeState("n","3",room3)
            window.CrComLib.unsubscribeState("n","4",room4)
            window.CrComLib.unsubscribeState("n","5",room5)
            window.CrComLib.unsubscribeState("n","6",room6)
            window.CrComLib.unsubscribeState("n","7",room7)
            window.CrComLib.unsubscribeState("n","8",room8)
            window.CrComLib.unsubscribeState("n","9",room9)

        }
    })

   

    const changeLocation = (id:string) => {

                if(id === "1"){

            setLocation1(true)
            setLocation2(false)
            setLocation3(false)

        } else if(id === "2"){

            setLocation1(false)
            setLocation2(true)
            setLocation3(false)

        }  else if(id === "3"){

            setLocation1(false)
            setLocation2(false)
            setLocation3(true)

        }
    }


    useEffect( ()=>{ 
        
        if(previousLocation === 'Up Stairs'){
            setLocation1(true)
            setLocation2(false)
            setLocation3(false)
        } else if (previousLocation === "Down Stairs"){
            setLocation1(false)
            setLocation2(false)
            setLocation3(true)
        } else {
            setLocation1(false)
            setLocation2(true)
            setLocation3(false)
        }

        

    },[])
   
    



    const upStairs = ( 
        <>
            <Link to={`/masterbathroom`} className="room_card" id={roomActiveSource5 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Master Bathroom</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/masterbedroom`} className="room_card" id={roomActiveSource4 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Master Bedroom</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
    
            <Link to={`/gameroom`} className="room_card" id={roomActiveSource3 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Game Room</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
          
            <Link to={`/office`} className="room_card" id={roomActiveSource6 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Office</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/kidsroom`} className="room_card" id={false?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Kid's Room</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>
        </>
    )

    const mainFloor = ( 
        <>
            <Link to={`/familyroom`} className="room_card" id={roomActiveSource8 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Family Room</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/breakfastnook`} className="room_card" id={roomActiveSource1 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Breakfast Nook</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/bar`} className="room_card" id={roomActiveSource9 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Bar</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/diningroom`} className="room_card" id={false?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Dining Room</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/livingroom`} className="room_card" id={false?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Living Room</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/foyer`} className="room_card" id={false?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Foyer</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

          
        </>
    )

    const downStairs = ( 
        <>
            <Link to={`/mediaroom`} className="room_card" id={roomActiveSource7 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Media Room</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/gym`} className="room_card" id={roomActiveSource2 > 0?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Gym </p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/backyard`} className="room_card" id={false?"active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Bar</p>

                    <div className="icon_preview">
                        <img src={TV} style={{ height: "1.25rem" }} />                           
                        <img src={Light} style={{ height: "1.25rem" }} />
                        <img src={Audio} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

          
          
        </>
    )





   

  


    



    return (
        <div className="rooms_dashboard">

 
<div className="room_back_corner" >
                <Link to={"/"}  > 
                    <button className="back_button" >
                        <img src={menu_button}/>
                    </button>
                </Link>  
            </div>
           

       
        <div className="nav_container">
              

            <div className="nav">
                <button className={location1 ? "btn_selected" : 'btn_not_selected'}   onClick={()=> changeLocation("1")}> <p> Up Stairs   </p> </button>
                <button className={location2 ? "btn_selected" : 'btn_not_selected'}  onClick={()=> changeLocation("2")}>  <p> Main        </p> </button>
                <button className={location3 ? "btn_selected" : 'btn_not_selected'}  onClick={()=> changeLocation("3")}>  <p> Down Stairs </p> </button>
            </div>
            

          

        </div>

        <h1 className="title_info"> Room Selection </h1>
        
        
   
        <div className="room_selection_options">

            {location1? upStairs  :<></>}
            {location2? mainFloor :<></>}
            {location3? downStairs:<></>}
            
        </div>
      

             

        <div className="landscape_warning">
                <h1> Please rotate your device back to portrait mode. </h1>
                <img src={portraitMode}  />
        </div>

                    
        </div>
    )
}



export default RoomsDashboard