import {useState,useEffect} from "react" 
import "../assets/css/componets_css/globalPowerMenu.css"

import power from "../assets/images/icons/icons8-power.svg"

const GlobalPowerMenu = () => {

    const [roomActiveSource1, setRoomActiveSource1] = useState(0) // breaskfast -- zone 4
    const [roomActiveSource2, setRoomActiveSource2] = useState(0) // gym -- zone 12
    const [roomActiveSource3, setRoomActiveSource3] = useState(0) // game room -- zone 11
    const [roomActiveSource4, setRoomActiveSource4] = useState(0) // master bed -- zone 8
    const [roomActiveSource5, setRoomActiveSource5] = useState(0) // master bath -- zone 9
    const [roomActiveSource6, setRoomActiveSource6] = useState(0) // office -- zone 10
    const [roomActiveSource7, setRoomActiveSource7] = useState(0) // media room -- zone 18
    const [roomActiveSource8, setRoomActiveSource8] = useState(0) // family room -- zone 17
    const [roomActiveSource9, setRoomActiveSource9] = useState(0) // bar -- zone 6



    // Zone 1
    const [zone_music_1_state, setZone_music_1_state] = useState(false);
    const zone_music_1    = "503"; // zone_1_music
    const zone_name_1     = "Living Room";
    
    // Zone 2
    const [zone_music_2_state, setZone_music_2_state] = useState(false);
    const zone_music_2    = "507"; // zone_2_music
    const zone_name_2     = "Dinning Room";
    
    // Zone 3
    const [zone_music_3_state, setZone_music_3_state] = useState(false);
    const zone_music_3    = "511"; // zone_3_music
    const zone_name_3     = "Kitchen";
    
    // Zone 4
    const [zone_music_4_state, setZone_music_4_state] = useState(false);
    const zone_music_4    = "515"; // zone_4_music
    
    // Zone 5
    const [zone_music_5_state, setZone_music_5_state] = useState(false);
    const zone_music_5    = "519"; // zone_5_music
    const zone_name_5     = "Library";
    
    // Zone 6
    const [zone_music_6_state, setZone_music_6_state] = useState(false);
    const zone_music_6    = "523"; // zone_music (from table)
    
    // Zone 7
    const [zone_music_7_state, setZone_music_7_state] = useState(false);
    const zone_music_7    = "527"; // zone_music
    const zone_name_7     = "Patio";
    
    // Zone 8

    const [zone_music_8_state, setZone_music_8_state] = useState(false);
    const zone_music_8    = "531"; // zone_music
    
    // Zone 9
    const [zone_music_9_state, setZone_music_9_state] = useState(false);
    const zone_music_9    = "535"; // zone_music
    
    // Zone 10
    const [zone_music_10_state, setZone_music_10_state] = useState(false);
    const zone_music_10   = "539"; // zone_music
    
    // Zone 11
    const [zone_music_11_state, setZone_music_11_state] = useState(false);
    const zone_music_11   = "543"; // zone_music
    
    // Zone 12
    const [zone_music_12_state, setZone_music_12_state] = useState(false);
    const zone_music_12   = "547"; // zone_music
    
    // Zone 13
    const [zone_music_13_state, setZone_music_13_state] = useState(false);
    const zone_music_13   = "551"; // zone_music
    const zone_name_13    = "Playroom";
    
    // Zone 14
    const [zone_music_14_state, setZone_music_14_state] = useState(false);
    const zone_music_14   = "555"; // zone_music
    const zone_name_14    = "BBQ";
    
    // Zone 15
    const [zone_music_15_state, setZone_music_15_state] = useState(false);
    const zone_music_15   = "559"; // zone_music
    const zone_name_15    = "Pool House";
    
    // Zone 16
    const [zone_music_16_state, setZone_music_16_state] = useState(false);
    const zone_music_16   = "563"; // zone_music
    const zone_name_16    = "Backyard";
    
    // Zone 17
    const [zone_music_17_state, setZone_music_17_state] = useState(false);
    const zone_music_17   = "567"; // zone_music
    
    // Zone 18
    const [zone_music_18_state, setZone_music_18_state] = useState(false);
    const zone_music_18   = "571";
    
    
    
    
    


    useEffect(()=>{


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

        //-----------
        const zone_music_state_1  = window.CrComLib.subscribeState("b", zone_music_1,  (value: boolean) => { setZone_music_1_state(value); });
        const zone_music_state_2  = window.CrComLib.subscribeState("b", zone_music_2,  (value: boolean) => { setZone_music_2_state(value); });
        const zone_music_state_3  = window.CrComLib.subscribeState("b", zone_music_3,  (value: boolean) => { setZone_music_3_state(value); });
        const zone_music_state_4  = window.CrComLib.subscribeState("b", zone_music_4,  (value: boolean) => { setZone_music_4_state(value); });
        const zone_music_state_5  = window.CrComLib.subscribeState("b", zone_music_5,  (value: boolean) => { setZone_music_5_state(value); });
        const zone_music_state_6  = window.CrComLib.subscribeState("b", zone_music_6,  (value: boolean) => { setZone_music_6_state(value); });
        const zone_music_state_7  = window.CrComLib.subscribeState("b", zone_music_7,  (value: boolean) => { setZone_music_7_state(value); });
        const zone_music_state_8  = window.CrComLib.subscribeState("b", zone_music_8,  (value: boolean) => { setZone_music_8_state(value); });
        const zone_music_state_9  = window.CrComLib.subscribeState("b", zone_music_9,  (value: boolean) => { setZone_music_9_state(value); });
        const zone_music_state_10 = window.CrComLib.subscribeState("b", zone_music_10, (value: boolean) => { setZone_music_10_state(value); });
        const zone_music_state_11 = window.CrComLib.subscribeState("b", zone_music_11, (value: boolean) => { setZone_music_11_state(value); });
        const zone_music_state_12 = window.CrComLib.subscribeState("b", zone_music_12, (value: boolean) => { setZone_music_12_state(value); });
        const zone_music_state_13 = window.CrComLib.subscribeState("b", zone_music_13, (value: boolean) => { setZone_music_13_state(value); });
        const zone_music_state_14 = window.CrComLib.subscribeState("b", zone_music_14, (value: boolean) => { setZone_music_14_state(value); });
        const zone_music_state_15 = window.CrComLib.subscribeState("b", zone_music_15, (value: boolean) => { setZone_music_15_state(value); });
        const zone_music_state_16 = window.CrComLib.subscribeState("b", zone_music_16, (value: boolean) => { setZone_music_16_state(value); });
        const zone_music_state_17 = window.CrComLib.subscribeState("b", zone_music_17, (value: boolean) => { setZone_music_17_state(value); });
        const zone_music_state_18 = window.CrComLib.subscribeState("b", zone_music_18, (value: boolean) => { setZone_music_18_state(value); });




   
        return () => {
    
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

        // --------------
        window.CrComLib.unsubscribeState("b", zone_music_1,  zone_music_state_1);
        window.CrComLib.unsubscribeState("b", zone_music_2,  zone_music_state_2);
        window.CrComLib.unsubscribeState("b", zone_music_3,  zone_music_state_3);
        window.CrComLib.unsubscribeState("b", zone_music_4,  zone_music_state_4);
        window.CrComLib.unsubscribeState("b", zone_music_5,  zone_music_state_5);
        window.CrComLib.unsubscribeState("b", zone_music_6,  zone_music_state_6);
        window.CrComLib.unsubscribeState("b", zone_music_7,  zone_music_state_7);
        window.CrComLib.unsubscribeState("b", zone_music_8,  zone_music_state_8);
        window.CrComLib.unsubscribeState("b", zone_music_9,  zone_music_state_9);
        window.CrComLib.unsubscribeState("b", zone_music_10, zone_music_state_10);
        window.CrComLib.unsubscribeState("b", zone_music_11, zone_music_state_11);
        window.CrComLib.unsubscribeState("b", zone_music_12, zone_music_state_12);
        window.CrComLib.unsubscribeState("b", zone_music_13, zone_music_state_13);
        window.CrComLib.unsubscribeState("b", zone_music_14, zone_music_state_14);
        window.CrComLib.unsubscribeState("b", zone_music_15, zone_music_state_15);
        window.CrComLib.unsubscribeState("b", zone_music_16, zone_music_state_16);
        window.CrComLib.unsubscribeState("b", zone_music_17, zone_music_state_17);
        window.CrComLib.unsubscribeState("b", zone_music_18, zone_music_state_18);
        
        }
    })





    const turnAllOff = async () => {
        for (let i = 1; i < 19; i++) {
        
            switch (i) {
                case 1:
                
                        window.CrComLib.publishEvent("b","21",true)
                        window.CrComLib.publishEvent("b","21",false)
                        console.log(i)
                    break;
                case 2:
                
                        window.CrComLib.publishEvent("b","22",true)
                        window.CrComLib.publishEvent("b","22",false)
                        console.log(i)
                    break;
                case 3:
                
                        window.CrComLib.publishEvent("b","23",true)
                        window.CrComLib.publishEvent("b","23",false)
                        console.log(i)
                    break;
                case 4:
                
                        window.CrComLib.publishEvent("b","24",true)
                        window.CrComLib.publishEvent("b","24",false)
                        console.log(i)
                    break;
                case 5:
                
                        window.CrComLib.publishEvent("b","25",true)
                        window.CrComLib.publishEvent("b","25",false)
                        console.log(i)
                    break;
                case 6:
                
                        window.CrComLib.publishEvent("b","26",true)
                        window.CrComLib.publishEvent("b","26",false)
                        console.log(i)
                    break;
                case 7:
                
                        window.CrComLib.publishEvent("b","27",true)
                        window.CrComLib.publishEvent("b","27",false)
                        console.log(i)
                    break;
                case 8:
                
                        window.CrComLib.publishEvent("b","28",true)
                        window.CrComLib.publishEvent("b","28",false)
                        console.log(i)
                    break;
                case 9:
                
                        window.CrComLib.publishEvent("b","29",true)
                        window.CrComLib.publishEvent("b","29",false)
                        console.log(i)
                    break;
                case 10:
                    
                        window.CrComLib.publishEvent("b","30",true)
                        window.CrComLib.publishEvent("b","30",false)
                        console.log(i)
                    break;
                case 11:
                    
                        window.CrComLib.publishEvent("b","31",true)
                        window.CrComLib.publishEvent("b","31",false)
                        console.log(i)
                    break;
                case 12:
                    
                        window.CrComLib.publishEvent("b","32",true)
                        window.CrComLib.publishEvent("b","32",false)
                        console.log(i)
                    break;
                case 13:
                    
                        window.CrComLib.publishEvent("b","33",true)
                        window.CrComLib.publishEvent("b","33",false)
                        console.log(i)
                    break;
                case 14:
                    
                        window.CrComLib.publishEvent("b","34",true)
                        window.CrComLib.publishEvent("b","34",false)
                        console.log(i)
                    break;
                case 15:
                    
                        window.CrComLib.publishEvent("b","35",true)
                        window.CrComLib.publishEvent("b","35",false)
                        console.log(i)
                    break;
                case 16:
                    
                        window.CrComLib.publishEvent("b","36",true)
                        window.CrComLib.publishEvent("b","36",false)
                        console.log(i)
                    break;
                case 17:
                    
                        window.CrComLib.publishEvent("b","37",true)
                        window.CrComLib.publishEvent("b","37",false)
                        console.log(i)
                    break;
                case 18:
                    
                        window.CrComLib.publishEvent("b","38",true)
                        window.CrComLib.publishEvent("b","38",false)
                        console.log(i)
                    break;
                default:
      
                    break;
             
            }
            
     
      
          await new Promise(resolve => setTimeout(resolve, 250));
        }
      };





    return(
    
    <>



       
        <p className="global_power_title">Active Locations</p>

        <div className="global_power_grid">
            <div className="global_power_card" id={roomActiveSource1 > 0 || zone_music_4_state? "active_btn_power": "display_none"}> 
                <p id="global-item-1"> Breakfast </p>
                <p id="global-item-2"> {zone_music_4_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3" onClick={()=> (window.CrComLib.publishEvent("b","24",true),(window.CrComLib.publishEvent("b","24",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource2 > 0 || zone_music_12_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Gym</p>
                <p id="global-item-2"> {zone_music_12_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","32",true),(window.CrComLib.publishEvent("b","32",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource3 > 0 || zone_music_11_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Game Room</p>
                <p id="global-item-2"> {zone_music_11_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","31",true),(window.CrComLib.publishEvent("b","31",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource4 > 0 || zone_music_8_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Master Bedroom</p>
                <p id="global-item-2"> {zone_music_8_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","28",true),(window.CrComLib.publishEvent("b","28",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource5 > 0 || zone_music_9_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Master Bathroom</p>
                <p id="global-item-2"> {zone_music_9_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","29",true),(window.CrComLib.publishEvent("b","29",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource6 > 0 || zone_music_10_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Office</p>
                <p id="global-item-2"> {zone_music_10_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","30",true),(window.CrComLib.publishEvent("b","30",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource7 > 0 || zone_music_18_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Media Room</p>
                <p id="global-item-2"> {zone_music_18_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","38",true),(window.CrComLib.publishEvent("b","38",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource8 > 0 || zone_music_17_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Family Room </p>
                <p id="global-item-2"> {zone_music_17_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","37",true),(window.CrComLib.publishEvent("b","37",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={roomActiveSource9 > 0 || zone_music_6_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> Bar </p>
                <p id="global-item-2"> {zone_music_6_state? "listening to music" : "Wathcing TV "}</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","26",true),(window.CrComLib.publishEvent("b","26",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>



            {/* Audio Only Section*/}

            <div className="global_power_card" id={zone_music_1_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_1} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","21",true),(window.CrComLib.publishEvent("b","21",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_2_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_2} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","22",true),(window.CrComLib.publishEvent("b","22",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_3_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_3} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","23",true),(window.CrComLib.publishEvent("b","23",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_5_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_5} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","25",true),(window.CrComLib.publishEvent("b","25",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_7_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_7} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","27",true),(window.CrComLib.publishEvent("b","27",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_13_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_13} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","33",true),(window.CrComLib.publishEvent("b","33",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_14_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_14} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","34",true),(window.CrComLib.publishEvent("b","34",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_15_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_15} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","35",true),(window.CrComLib.publishEvent("b","35",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>

            <div className="global_power_card" id={zone_music_16_state? "active_btn_power":"display_none"}> 
                <p id="global-item-1"> {zone_name_16} </p>
                <p id="global-item-2">listening to music</p>
                <div id="global-item-3"  onClick={()=> (window.CrComLib.publishEvent("b","36",true),(window.CrComLib.publishEvent("b","36",false)))}>
                    <button className="btn_circle" >
                        <img className="btn_image" src={power} />
                    </button>
                </div>
            </div>


            <div className={roomActiveSource1>0 || roomActiveSource2>0 ||roomActiveSource3>0 ||roomActiveSource4>0 ||roomActiveSource5>0 ||roomActiveSource6>0 ||roomActiveSource7>0 ||roomActiveSource8>0 ||roomActiveSource9>0 || 
            zone_music_1_state || zone_music_2_state ||zone_music_3_state ||zone_music_4_state ||zone_music_5_state ||zone_music_6_state ||zone_music_7_state ||zone_music_8_state ||zone_music_9_state ||zone_music_10_state ||
            zone_music_11_state ||zone_music_12_state ||zone_music_13_state ||zone_music_14_state ||zone_music_15_state ||zone_music_16_state ||zone_music_17_state ||zone_music_18_state?
            "display_none":"all-off-banner"}>
            <h1> All locations are turned off.</h1>
        </div>




        </div>




        <div className={roomActiveSource1>0 || roomActiveSource2>0 ||roomActiveSource3>0 ||roomActiveSource4>0 ||roomActiveSource5>0 ||roomActiveSource6>0 ||roomActiveSource7>0 ||roomActiveSource8>0 ||roomActiveSource9>0 || 
            zone_music_1_state || zone_music_2_state ||zone_music_3_state ||zone_music_4_state ||zone_music_5_state ||zone_music_6_state ||zone_music_7_state ||zone_music_8_state ||zone_music_9_state ||zone_music_10_state ||
            zone_music_11_state ||zone_music_12_state ||zone_music_13_state ||zone_music_14_state ||zone_music_15_state ||zone_music_16_state ||zone_music_17_state ||zone_music_18_state?
            "global-all-off":"display_none"}>
            <button onClick={turnAllOff}><p> Turn All Rooms Off</p></button>
        </div>


    
    
    </>

    )


}

export default GlobalPowerMenu