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

    console.log(roomMusicActive1)
    console.log(roomMusicActive2)

    const [light1, setLight1] = useState(false) // Kids room 
    const [light2, setLight2] = useState(false) // Kids room 
    const [light3, setLight3] = useState(false) // Kids room 
    const [light4, setLight4] = useState(false) // Kids room 
    const [light5, setLight5] = useState(false) // Kids room 

    const [light6,  setLight6]  = useState(false) // Dining room 
    const [light7,  setLight7]  = useState(false) // Dining room 
    const [light8,  setLight8]  = useState(false) // Dining room 
    const [light9,  setLight9]  = useState(false) // Dining room 
    const [light10, setLight10] = useState(false) // Dining room 

    const [light11, setLight11] = useState(false) // Living room 
    const [light12, setLight12] = useState(false) // Living room 
    const [light13, setLight13] = useState(false) // Living room 
    const [light14, setLight14] = useState(false) // Living room  
    const [light15, setLight15] = useState(false) // Living room 

    const [light16, setLight16] = useState(false) // Foyer room 
    const [light17, setLight17] = useState(false) // Foyer room 
    const [light18, setLight18] = useState(false) // Foyer room 
    const [light19, setLight19] = useState(false) // Foyer room 
    const [light20, setLight20] = useState(false) // Foyer room 

    const [light21, setLight21] = useState(false) // Backyard
    const [light22, setLight22] = useState(false) // Backyard
    const [light23, setLight23] = useState(false) // Backyard
    const [light24, setLight24] = useState(false) // Backyard
    const [light25, setLight25] = useState(false) // Backyard





    useEffect(()=>{
        //------------
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

        //------------
        const light1 = window.CrComLib.subscribeState("b","299",(value:boolean)=>{setLight1(value)}) // kids room 
        const light2 = window.CrComLib.subscribeState("b","300",(value:boolean)=>{setLight2(value)}) // kids room 
        const light3 = window.CrComLib.subscribeState("b","301",(value:boolean)=>{setLight3(value)}) // kids room 
        const light4 = window.CrComLib.subscribeState("b","302",(value:boolean)=>{setLight4(value)}) // kids room 
        const light5 = window.CrComLib.subscribeState("b","303",(value:boolean)=>{setLight5(value)}) // kids room 

        const light6 = window.CrComLib.subscribeState("b","278",(value:boolean)=>{setLight6(value)})   // Dining room 
        const light7 = window.CrComLib.subscribeState("b","279",(value:boolean)=>{setLight7(value)})   // Dining room 
        const light8 = window.CrComLib.subscribeState("b","280",(value:boolean)=>{setLight8(value)})   // Dining room 
        const light9 = window.CrComLib.subscribeState("b","281",(value:boolean)=>{setLight9(value)})   // Dining room 
        const light10 = window.CrComLib.subscribeState("b","282",(value:boolean)=>{setLight10(value)}) // Dining room 

        const light11 = window.CrComLib.subscribeState("b","315",(value:boolean)=>{setLight11(value)}) // Living room 
        const light12 = window.CrComLib.subscribeState("b","316",(value:boolean)=>{setLight12(value)}) // Living room 
        const light13 = window.CrComLib.subscribeState("b","317",(value:boolean)=>{setLight13(value)}) // Living room 
        const light14 = window.CrComLib.subscribeState("b","318",(value:boolean)=>{setLight14(value)}) // Living room 
        const light15 = window.CrComLib.subscribeState("b","319",(value:boolean)=>{setLight15(value)}) // Living room 

        const light16 = window.CrComLib.subscribeState("b","292",(value:boolean)=>{setLight16(value)}) // Foyer room 
        const light17 = window.CrComLib.subscribeState("b","293",(value:boolean)=>{setLight17(value)}) // Foyer room 
        const light18 = window.CrComLib.subscribeState("b","294",(value:boolean)=>{setLight18(value)}) // Foyer room 
        const light19 = window.CrComLib.subscribeState("b","295",(value:boolean)=>{setLight19(value)}) // Foyer room 
        const light20 = window.CrComLib.subscribeState("b","296",(value:boolean)=>{setLight20(value)}) // Foyer room 

        const light21 = window.CrComLib.subscribeState("b","250",(value:boolean)=>{setLight21(value)}) // Backyard
        const light22 = window.CrComLib.subscribeState("b","251",(value:boolean)=>{setLight22(value)}) // Backyard
        const light23 = window.CrComLib.subscribeState("b","252",(value:boolean)=>{setLight23(value)}) // Backyard
        const light24 = window.CrComLib.subscribeState("b","253",(value:boolean)=>{setLight24(value)}) // Backyard
        const light25 = window.CrComLib.subscribeState("b","254",(value:boolean)=>{setLight25(value)}) // Backyard 
 
        return () => {
        //------------
            window.CrComLib.unsubscribeState("b","507",roomMusic1)
            window.CrComLib.unsubscribeState("b","503",roomMusic2)
        //------------
            window.CrComLib.unsubscribeState("n","1",room1)
            window.CrComLib.unsubscribeState("n","2",room2)
            window.CrComLib.unsubscribeState("n","3",room3)
            window.CrComLib.unsubscribeState("n","4",room4)
            window.CrComLib.unsubscribeState("n","5",room5)
            window.CrComLib.unsubscribeState("n","6",room6)
            window.CrComLib.unsubscribeState("n","7",room7)
            window.CrComLib.unsubscribeState("n","8",room8)
            window.CrComLib.unsubscribeState("n","9",room9)
        //------------
            window.CrComLib.unsubscribeState("b","299",light1)
            window.CrComLib.unsubscribeState("b","300",light2)
            window.CrComLib.unsubscribeState("b","301",light3)
            window.CrComLib.unsubscribeState("b","302",light4)
            window.CrComLib.unsubscribeState("b","303",light5)

            window.CrComLib.unsubscribeState("b","278",light6)
            window.CrComLib.unsubscribeState("b","279",light7)
            window.CrComLib.unsubscribeState("b","280",light8)
            window.CrComLib.unsubscribeState("b","281",light9)
            window.CrComLib.unsubscribeState("b","282",light10)

            window.CrComLib.unsubscribeState("b","315",light11)
            window.CrComLib.unsubscribeState("b","316",light12)
            window.CrComLib.unsubscribeState("b","317",light13)
            window.CrComLib.unsubscribeState("b","318",light14)
            window.CrComLib.unsubscribeState("b","319",light15)

            window.CrComLib.unsubscribeState("b","292",light16)
            window.CrComLib.unsubscribeState("b","293",light17)
            window.CrComLib.unsubscribeState("b","294",light18)
            window.CrComLib.unsubscribeState("b","295",light19)
            window.CrComLib.unsubscribeState("b","296",light20)

            window.CrComLib.unsubscribeState("b","250",light21)
            window.CrComLib.unsubscribeState("b","251",light22)
            window.CrComLib.unsubscribeState("b","252",light23)
            window.CrComLib.unsubscribeState("b","253",light24)
            window.CrComLib.unsubscribeState("b","254",light25)

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

            <Link to={`/kidsroom`} className="room_card" id={light1 || light2 || light3 || light4 || light5?"" : "" }>
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

            <Link to={`/diningroom`} className="room_card" id={light6 || light7 || light8 || light9 || light10?"" : "" }>
                <div className="test">
                    <p className="room_name">Dining Room</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/livingroom`} className="room_card" id={light11 || light12 || light13 || light14 || light15?"" : "" }>
                <div className="test">
                    <p className="room_name">Living Room</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
                    </div>
                </div>
            </Link>

            <Link to={`/foyer`} className="room_card" id={light16 || light17 || light18 || light19 || light20?"" : "" }>
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

            <Link to={`/backyard`} className="room_card" id={light21 || light22 || light23 || light24 || light25? "active_btn" : "" }>
                <div className="test">
                    <p className="room_name">Backyard</p>

                    <div className="icon_preview">
                        <img src={Light} style={{ height: "1.25rem" }} />
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