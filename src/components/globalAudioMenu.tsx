import {useState, useEffect} from 'react'
import "../assets/css/componets_css/globalAudioMenu.css"
import "../assets/css/componets_css/globalPowerMenu.css"
import arrow from "../assets/images/icons/icons8-triangle-arrow.svg"
import MuteIcon from "../assets/images/icons/icons8-no-audio.svg"


const GlobalAudioMenu = () =>{

   
// Zone 1
const [zone1_vol, setZone1_vol] = useState(0);
const [zone1_mute, setZone1_mute] = useState(false);
const [zone_music_1_state, setZone_music_1_state] = useState(false);
const zone_music_1    = "503"; // zone_1_music
const zone_off_1      = "21";  // Zone1_off_fb
const zone_decrease_1 = "500"; // zone_1_decrease
const zone_mute_1     = "501"; // zone_1_mute
const zone_increase_1 = "502"; // zone_1_increase
const zone_name_1     = "Living Room";

// Zone 2
const [zone2_vol, setZone2_vol] = useState(0);
const [zone2_mute, setZone2_mute] = useState(false);
const [zone_music_2_state, setZone_music_2_state] = useState(false);
const zone_music_2    = "507"; // zone_2_music
const zone_off_2      = "22";  // Zone2_off_fb
const zone_decrease_2 = "504"; // zone_2_decrease
const zone_mute_2     = "505"; // zone_2_mute
const zone_increase_2 = "506"; // zone_2_increase
const zone_name_2     = "Dinning Room";

// Zone 3
const [zone3_vol, setZone3_vol] = useState(0);
const [zone3_mute, setZone3_mute] = useState(false);
const [zone_music_3_state, setZone_music_3_state] = useState(false);
const zone_music_3    = "511"; // zone_3_music
const zone_off_3      = "23";  // Zone3_off_fb
const zone_decrease_3 = "508"; // zone_3_decrease
const zone_mute_3     = "509"; // zone_3_mute
const zone_increase_3 = "510"; // zone_3_increase
const zone_name_3     = "Kitchen";

// Zone 4
const [zone4_vol, setZone4_vol] = useState(0);
const [zone4_mute, setZone4_mute] = useState(false);
const [zone_music_4_state, setZone_music_4_state] = useState(false);
const zone_music_4    = "515"; // zone_4_music
const zone_off_4      = "24";  // Zone4_off_fb
const zone_decrease_4 = "512"; // zone_4_decrease
const zone_mute_4     = "513"; // zone_4_mute
const zone_increase_4 = "514"; // zone_4_increase
const zone_name_4     = "Breakfast";

// Zone 5
const [zone5_vol, setZone5_vol] = useState(0);
const [zone5_mute, setZone5_mute] = useState(false);
const [zone_music_5_state, setZone_music_5_state] = useState(false);
const zone_music_5    = "519"; // zone_5_music
const zone_off_5      = "25";  // Zone5_off_fb
const zone_decrease_5 = "516"; // zone_5_decrease
const zone_mute_5     = "517"; // zone_5_mute
const zone_increase_5 = "518"; // zone_5_increase
const zone_name_5     = "Library";

// Zone 6
const [zone6_vol, setZone6_vol] = useState(0);
const [zone6_mute, setZone6_mute] = useState(false);
const [zone_music_6_state, setZone_music_6_state] = useState(false);
const zone_music_6    = "523"; // zone_music (from table)
const zone_off_6      = "26";  // Zone6_off_fb
const zone_decrease_6 = "520"; // zone_decrease
const zone_mute_6     = "521"; // zone_mute
const zone_increase_6 = "522"; // zone_increase
const zone_name_6     = "Bar";

// Zone 7
const [zone7_vol, setZone7_vol] = useState(0);
const [zone7_mute, setZone7_mute] = useState(false);
const [zone_music_7_state, setZone_music_7_state] = useState(false);
const zone_music_7    = "527"; // zone_music
const zone_off_7      = "27";  // Zone7_off_fb
const zone_decrease_7 = "524"; // zone_decrease
const zone_mute_7     = "525"; // zone_mute
const zone_increase_7 = "526"; // zone_increase
const zone_name_7     = "Patio";

// Zone 8
const [zone8_vol, setZone8_vol] = useState(0);
const [zone8_mute, setZone8_mute] = useState(false);
const [zone_music_8_state, setZone_music_8_state] = useState(false);
const zone_music_8    = "531"; // zone_music
const zone_off_8      = "28";  // Zone8_off_fb
const zone_decrease_8 = "528"; // zone_decrease
const zone_mute_8     = "529"; // zone_mute
const zone_increase_8 = "530"; // zone_increase
const zone_name_8     = "Master bed";

// Zone 9
const [zone9_vol, setZone9_vol] = useState(0);
const [zone9_mute, setZone9_mute] = useState(false);
const [zone_music_9_state, setZone_music_9_state] = useState(false);
const zone_music_9    = "535"; // zone_music
const zone_off_9      = "29";  // Zone9_off_fb
const zone_decrease_9 = "532"; // zone_decrease
const zone_mute_9     = "533"; // zone_mute
const zone_increase_9 = "534"; // zone_increase
const zone_name_9     = "Master Bath";

// Zone 10
const [zone10_vol, setZone10_vol] = useState(0);
const [zone10_mute, setZone10_mute] = useState(false);
const [zone_music_10_state, setZone_music_10_state] = useState(false);
const zone_music_10   = "539"; // zone_music
const zone_off_10     = "30";  // Zone10_off_fb
const zone_decrease_10 = "536"; // zone_decrease
const zone_mute_10    = "537"; // zone_mute
const zone_increase_10 = "538"; // zone_increase
const zone_name_10    = "Office";

// Zone 11
const [zone11_vol, setZone11_vol] = useState(0);
const [zone11_mute, setZone11_mute] = useState(false);
const [zone_music_11_state, setZone_music_11_state] = useState(false);
const zone_music_11   = "543"; // zone_music
const zone_off_11     = "31";  // Zone11_off_fb
const zone_decrease_11 = "540"; // zone_decrease
const zone_mute_11    = "541"; // zone_mute
const zone_increase_11 = "542"; // zone_increase
const zone_name_11    = "Game";

// Zone 12
const [zone12_vol, setZone12_vol] = useState(0);
const [zone12_mute, setZone12_mute] = useState(false);
const [zone_music_12_state, setZone_music_12_state] = useState(false);
const zone_music_12   = "547"; // zone_music
const zone_off_12     = "32";  // Zone12_off_fb
const zone_decrease_12 = "544"; // zone_decrease
const zone_mute_12    = "545"; // zone_mute
const zone_increase_12 = "546"; // zone_increase
const zone_name_12    = "Gym";

// Zone 13
const [zone13_vol, setZone13_vol] = useState(0);
const [zone13_mute, setZone13_mute] = useState(false);
const [zone_music_13_state, setZone_music_13_state] = useState(false);
const zone_music_13   = "551"; // zone_music
const zone_off_13     = "33";  // Zone13_off_fb
const zone_decrease_13 = "548"; // zone_decrease
const zone_mute_13    = "549"; // zone_mute
const zone_increase_13 = "550"; // zone_increase
const zone_name_13    = "Playroom";

// Zone 14
const [zone14_vol, setZone14_vol] = useState(0);
const [zone14_mute, setZone14_mute] = useState(false);
const [zone_music_14_state, setZone_music_14_state] = useState(false);
const zone_music_14   = "555"; // zone_music
const zone_off_14     = "34";  // Zone14_off_fb
const zone_decrease_14 = "552"; // zone_decrease
const zone_mute_14    = "553"; // zone_mute
const zone_increase_14 = "554"; // zone_increase
const zone_name_14    = "BBQ";

// Zone 15
const [zone15_vol, setZone15_vol] = useState(0);
const [zone15_mute, setZone15_mute] = useState(false);
const [zone_music_15_state, setZone_music_15_state] = useState(false);
const zone_music_15   = "559"; // zone_music
const zone_off_15     = "35";  // Zone15_off_fb
const zone_decrease_15 = "556"; // zone_decrease
const zone_mute_15    = "557"; // zone_mute
const zone_increase_15 = "558"; // zone_increase
const zone_name_15    = "Pool House";

// Zone 16
const [zone16_vol, setZone16_vol] = useState(0);
const [zone16_mute, setZone16_mute] = useState(false);
const [zone_music_16_state, setZone_music_16_state] = useState(false);
const zone_music_16   = "563"; // zone_music
const zone_off_16     = "36";  // Zone16_off_fb
const zone_decrease_16 = "560"; // zone_decrease
const zone_mute_16    = "561"; // zone_mute
const zone_increase_16 = "562"; // zone_increase
const zone_name_16    = "Backyard";

// Zone 17
const [zone17_vol, setZone17_vol] = useState(0);
const [zone17_mute, setZone17_mute] = useState(false);
const [zone_music_17_state, setZone_music_17_state] = useState(false);
const zone_music_17   = "567"; // zone_music
const zone_off_17     = "37";  // Zone17_off_fb
const zone_decrease_17 = "564"; // zone_decrease
const zone_mute_17    = "565"; // zone_mute
const zone_increase_17 = "566"; // zone_increase
const zone_name_17    = "Family Room";

// Zone 18
const [zone18_vol, setZone18_vol] = useState(0);
const [zone18_mute, setZone18_mute] = useState(false);
const [zone_music_18_state, setZone_music_18_state] = useState(false);
const zone_music_18   = "571"; // zone_music
const zone_off_18     = "38";  // Zone18_off_fb
const zone_decrease_18 = "568"; // zone_decrease
const zone_mute_18    = "569"; // zone_mute
const zone_increase_18 = "570"; // zone_increase
const zone_name_18    = "Media Room";








const muteAll = async () => {
    for (let i = 1; i < 19; i++) {
        
        switch (i) {
            case 1:
                if(zone1_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_1,true)
                    window.CrComLib.publishEvent("b",zone_mute_1,false)
                    console.log(i)
                }
                break;
            case 2:
                if(zone2_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_2,true)
                    window.CrComLib.publishEvent("b",zone_mute_2,false)
                    console.log(i)
                }
                break;
            case 3:
                if(zone3_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_3,true)
                    window.CrComLib.publishEvent("b",zone_mute_3,false)
                    console.log(i)
                }
                break;
            case 4:
                if(zone4_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_4,true)
                    window.CrComLib.publishEvent("b",zone_mute_4,false)
                    console.log(i)
                }
                break;
            case 5:
                if(zone5_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_5,true)
                    window.CrComLib.publishEvent("b",zone_mute_5,false)
                    console.log(i)
                }
                break;
            case 6:
                if(zone6_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_6,true)
                    window.CrComLib.publishEvent("b",zone_mute_6,false)
                    console.log(i)
                }
                break;
            case 7:
                if(zone7_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_7,true)
                    window.CrComLib.publishEvent("b",zone_mute_7,false)
                    console.log(i)
                }
                break;
            case 8:
                if(zone8_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_8,true)
                    window.CrComLib.publishEvent("b",zone_mute_8,false)
                    console.log(i)
                }
                break;
            case 9:
                if(zone9_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_9,true)
                    window.CrComLib.publishEvent("b",zone_mute_9,false)
                    console.log(i)
                }
                break;
            case 10:
                if(zone10_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_10,true)
                    window.CrComLib.publishEvent("b",zone_mute_10,false)
                    console.log(i)
                }
                break;
            case 11:
                if(zone11_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_11,true)
                    window.CrComLib.publishEvent("b",zone_mute_11,false)
                    console.log(i)
                }
                break;
            case 12:
                if(zone12_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_12,true)
                    window.CrComLib.publishEvent("b",zone_mute_12,false)
                    console.log(i)
                }
                break;
            case 13:
                if(zone13_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_13,true)
                    window.CrComLib.publishEvent("b",zone_mute_13,false)
                    console.log(i)
                }
                break;
            case 14:
                if(zone14_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_14,true)
                    window.CrComLib.publishEvent("b",zone_mute_14,false)
                    console.log(i)
                }
                break;
            case 15:
                if(zone15_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_15,true)
                    window.CrComLib.publishEvent("b",zone_mute_15,false)
                    console.log(i)
                }
                break;
            case 16:
                if(zone16_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_16,true)
                    window.CrComLib.publishEvent("b",zone_mute_16,false)
                    console.log(i)
                }
                break;
            case 17:
                if(zone17_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_17,true)
                    window.CrComLib.publishEvent("b",zone_mute_17,false)
                    console.log(i)
                }
                break;
            case 18:
                if(zone18_mute === false){
                    window.CrComLib.publishEvent("b",zone_mute_18,true)
                    window.CrComLib.publishEvent("b",zone_mute_18,false)
                    console.log(i)
                }
                break;
            default:
  
                break;
         
        }
        
 
  
      await new Promise(resolve => setTimeout(resolve, 250));
    }
};


const unMuteAll = async () => {
    for (let i = 1; i < 19; i++) {
        
        switch (i) {
            case 1:
                if(zone1_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_1,true)
                    window.CrComLib.publishEvent("b",zone_mute_1,false)
                    console.log(i)
                }
                break;
            case 2:
                if(zone2_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_2,true)
                    window.CrComLib.publishEvent("b",zone_mute_2,false)
                    console.log(i)
                }
                break;
            case 3:
                if(zone3_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_3,true)
                    window.CrComLib.publishEvent("b",zone_mute_3,false)
                    console.log(i)
                }
                break;
            case 4:
                if(zone4_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_4,true)
                    window.CrComLib.publishEvent("b",zone_mute_4,false)
                    console.log(i)
                }
                break;
            case 5:
                if(zone5_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_5,true)
                    window.CrComLib.publishEvent("b",zone_mute_5,false)
                    console.log(i)
                }
                break;
            case 6:
                if(zone6_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_6,true)
                    window.CrComLib.publishEvent("b",zone_mute_6,false)
                    console.log(i)
                }
                break;
            case 7:
                if(zone7_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_7,true)
                    window.CrComLib.publishEvent("b",zone_mute_7,false)
                    console.log(i)
                }
                break;
            case 8:
                if(zone8_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_8,true)
                    window.CrComLib.publishEvent("b",zone_mute_8,false)
                    console.log(i)
                }
                break;
            case 9:
                if(zone9_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_9,true)
                    window.CrComLib.publishEvent("b",zone_mute_9,false)
                    console.log(i)
                }
                break;
            case 10:
                if(zone10_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_10,true)
                    window.CrComLib.publishEvent("b",zone_mute_10,false)
                    console.log(i)
                }
                break;
            case 11:
                if(zone11_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_11,true)
                    window.CrComLib.publishEvent("b",zone_mute_11,false)
                    console.log(i)
                }
                break;
            case 12:
                if(zone12_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_12,true)
                    window.CrComLib.publishEvent("b",zone_mute_12,false)
                    console.log(i)
                }
                break;
            case 13:
                if(zone13_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_13,true)
                    window.CrComLib.publishEvent("b",zone_mute_13,false)
                    console.log(i)
                }
                break;
            case 14:
                if(zone14_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_14,true)
                    window.CrComLib.publishEvent("b",zone_mute_14,false)
                    console.log(i)
                }
                break;
            case 15:
                if(zone15_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_15,true)
                    window.CrComLib.publishEvent("b",zone_mute_15,false)
                    console.log(i)
                }
                break;
            case 16:
                if(zone16_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_16,true)
                    window.CrComLib.publishEvent("b",zone_mute_16,false)
                    console.log(i)
                }
                break;
            case 17:
                if(zone17_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_17,true)
                    window.CrComLib.publishEvent("b",zone_mute_17,false)
                    console.log(i)
                }
                break;
            case 18:
                if(zone18_mute === true){
                    window.CrComLib.publishEvent("b",zone_mute_18,true)
                    window.CrComLib.publishEvent("b",zone_mute_18,false)
                    console.log(i)
                }
                break;
            default:
  
                break;
         
        }
        
 
  
      await new Promise(resolve => setTimeout(resolve, 250));
    }
};








    useEffect(() => {


   
      const zone_1  = window.CrComLib.subscribeState("b", zone_mute_1,  (value: boolean) => { setZone1_mute(value); });
      const zone_2  = window.CrComLib.subscribeState("b", zone_mute_2,  (value: boolean) => { setZone2_mute(value); });
      const zone_3  = window.CrComLib.subscribeState("b", zone_mute_3,  (value: boolean) => { setZone3_mute(value); });
      const zone_4  = window.CrComLib.subscribeState("b", zone_mute_4,  (value: boolean) => { setZone4_mute(value); });
      const zone_5  = window.CrComLib.subscribeState("b", zone_mute_5,  (value: boolean) => { setZone5_mute(value); });
      const zone_6  = window.CrComLib.subscribeState("b", zone_mute_6,  (value: boolean) => { setZone6_mute(value); });
      const zone_7  = window.CrComLib.subscribeState("b", zone_mute_7,  (value: boolean) => { setZone7_mute(value); });
      const zone_8  = window.CrComLib.subscribeState("b", zone_mute_8,  (value: boolean) => { setZone8_mute(value); });
      const zone_9  = window.CrComLib.subscribeState("b", zone_mute_9,  (value: boolean) => { setZone9_mute(value); });
      const zone_10 = window.CrComLib.subscribeState("b", zone_mute_10, (value: boolean) => { setZone10_mute(value); });
      const zone_11 = window.CrComLib.subscribeState("b", zone_mute_11, (value: boolean) => { setZone11_mute(value); });
      const zone_12 = window.CrComLib.subscribeState("b", zone_mute_12, (value: boolean) => { setZone12_mute(value); });
      const zone_13 = window.CrComLib.subscribeState("b", zone_mute_13, (value: boolean) => { setZone13_mute(value); });
      const zone_14 = window.CrComLib.subscribeState("b", zone_mute_14, (value: boolean) => { setZone14_mute(value); });
      const zone_15 = window.CrComLib.subscribeState("b", zone_mute_15, (value: boolean) => { setZone15_mute(value); });
      const zone_16 = window.CrComLib.subscribeState("b", zone_mute_16, (value: boolean) => { setZone16_mute(value); });
      const zone_17 = window.CrComLib.subscribeState("b", zone_mute_17, (value: boolean) => { setZone17_mute(value); });
      const zone_18 = window.CrComLib.subscribeState("b", zone_mute_18, (value: boolean) => { setZone18_mute(value); });

// --- Subscribe to Volume States for Zones 1-18 ---
      const zone_vol_1  = window.CrComLib.subscribeState("n", "100", (value: number) => { setZone1_vol(value); });
      const zone_vol_2  = window.CrComLib.subscribeState("n", "101", (value: number) => { setZone2_vol(value); });
      const zone_vol_3  = window.CrComLib.subscribeState("n", "102", (value: number) => { setZone3_vol(value); });
      const zone_vol_4  = window.CrComLib.subscribeState("n", "103", (value: number) => { setZone4_vol(value); });
      const zone_vol_5  = window.CrComLib.subscribeState("n", "104", (value: number) => { setZone5_vol(value); });
      const zone_vol_6  = window.CrComLib.subscribeState("n", "105", (value: number) => { setZone6_vol(value); });
      const zone_vol_7  = window.CrComLib.subscribeState("n", "106", (value: number) => { setZone7_vol(value); });
      const zone_vol_8  = window.CrComLib.subscribeState("n", "107", (value: number) => { setZone8_vol(value); });
      const zone_vol_9  = window.CrComLib.subscribeState("n", "108", (value: number) => { setZone9_vol(value); });
      const zone_vol_10 = window.CrComLib.subscribeState("n", "109", (value: number) => { setZone10_vol(value); });
      const zone_vol_11 = window.CrComLib.subscribeState("n", "110", (value: number) => { setZone11_vol(value); });
      const zone_vol_12 = window.CrComLib.subscribeState("n", "111", (value: number) => { setZone12_vol(value); });
      const zone_vol_13 = window.CrComLib.subscribeState("n", "112", (value: number) => { setZone13_vol(value); });
      const zone_vol_14 = window.CrComLib.subscribeState("n", "113", (value: number) => { setZone14_vol(value); });
      const zone_vol_15 = window.CrComLib.subscribeState("n", "114", (value: number) => { setZone15_vol(value); });
      const zone_vol_16 = window.CrComLib.subscribeState("n", "115", (value: number) => { setZone16_vol(value); });
      const zone_vol_17 = window.CrComLib.subscribeState("n", "116", (value: number) => { setZone17_vol(value); });
      const zone_vol_18 = window.CrComLib.subscribeState("n", "117", (value: number) => { setZone18_vol(value); });


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

   
        window.CrComLib.unsubscribeState("b", zone_mute_1,  zone_1);
        window.CrComLib.unsubscribeState("b", zone_mute_2,  zone_2);
        window.CrComLib.unsubscribeState("b", zone_mute_3,  zone_3);
        window.CrComLib.unsubscribeState("b", zone_mute_4,  zone_4);
        window.CrComLib.unsubscribeState("b", zone_mute_5,  zone_5);
        window.CrComLib.unsubscribeState("b", zone_mute_6,  zone_6);
        window.CrComLib.unsubscribeState("b", zone_mute_7,  zone_7);
        window.CrComLib.unsubscribeState("b", zone_mute_8,  zone_8);
        window.CrComLib.unsubscribeState("b", zone_mute_9,  zone_9);
        window.CrComLib.unsubscribeState("b", zone_mute_10, zone_10);
        window.CrComLib.unsubscribeState("b", zone_mute_11, zone_11);
        window.CrComLib.unsubscribeState("b", zone_mute_12, zone_12);
        window.CrComLib.unsubscribeState("b", zone_mute_13, zone_13);
        window.CrComLib.unsubscribeState("b", zone_mute_14, zone_14);
        window.CrComLib.unsubscribeState("b", zone_mute_15, zone_15);
        window.CrComLib.unsubscribeState("b", zone_mute_16, zone_16);
        window.CrComLib.unsubscribeState("b", zone_mute_17, zone_17);
        window.CrComLib.unsubscribeState("b", zone_mute_18, zone_18);
      
        window.CrComLib.unsubscribeState("n", "100", zone_vol_1);
        window.CrComLib.unsubscribeState("n", "101", zone_vol_2);
        window.CrComLib.unsubscribeState("n", "102", zone_vol_3);
        window.CrComLib.unsubscribeState("n", "103", zone_vol_4);
        window.CrComLib.unsubscribeState("n", "104", zone_vol_5);
        window.CrComLib.unsubscribeState("n", "105", zone_vol_6);
        window.CrComLib.unsubscribeState("n", "106", zone_vol_7);
        window.CrComLib.unsubscribeState("n", "107", zone_vol_8);
        window.CrComLib.unsubscribeState("n", "108", zone_vol_9);
        window.CrComLib.unsubscribeState("n", "109", zone_vol_10);
        window.CrComLib.unsubscribeState("n", "110", zone_vol_11);
        window.CrComLib.unsubscribeState("n", "111", zone_vol_12);
        window.CrComLib.unsubscribeState("n", "112", zone_vol_13);
        window.CrComLib.unsubscribeState("n", "113", zone_vol_14);
        window.CrComLib.unsubscribeState("n", "114", zone_vol_15);
        window.CrComLib.unsubscribeState("n", "115", zone_vol_16);
        window.CrComLib.unsubscribeState("n", "116", zone_vol_17);
        window.CrComLib.unsubscribeState("n", "117", zone_vol_18);

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
    }, []);









    return(

        <>
        <p className="global-audio-title">Active Audio Locations</p>

        <div className='global-audio-menu'>       
            <div className='zone_container' id={zone_music_8_state? "active_btn":"display_none"} >
            <div className='power_on_off'>
                <button className={zone_music_8_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_8, true), window.CrComLib.publishEvent("b", zone_music_8, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_8_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_8, true), window.CrComLib.publishEvent("b", zone_off_8, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_8}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_8, true), window.CrComLib.publishEvent("b", zone_decrease_8, false), console.log(zone_decrease_8))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_8, true), window.CrComLib.publishEvent("b", zone_mute_8, false), console.log(zone_mute_8))}>
                {zone8_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone8_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_8, true), window.CrComLib.publishEvent("b", zone_increase_8, false), console.log(zone_increase_8))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_9_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_9_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_9, true), window.CrComLib.publishEvent("b", zone_music_9, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_9_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_9, true), window.CrComLib.publishEvent("b", zone_off_9, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_9}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_9, true), window.CrComLib.publishEvent("b", zone_decrease_9, false), console.log(zone_decrease_9))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_9, true), window.CrComLib.publishEvent("b", zone_mute_9, false), console.log(zone_mute_9))}>
                {zone9_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone9_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_9, true), window.CrComLib.publishEvent("b", zone_increase_9, false), console.log(zone_increase_9))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_10_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_10_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_10, true), window.CrComLib.publishEvent("b", zone_music_10, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_10_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_10, true), window.CrComLib.publishEvent("b", zone_off_10, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_10}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_10, true), window.CrComLib.publishEvent("b", zone_decrease_10, false), console.log(zone_decrease_10))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_10, true), window.CrComLib.publishEvent("b", zone_mute_10, false), console.log(zone_mute_10))}>
                {zone10_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone10_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_10, true), window.CrComLib.publishEvent("b", zone_increase_10, false), console.log(zone_increase_10))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_17_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_17_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_17, true), window.CrComLib.publishEvent("b", zone_music_17, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_17_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_17, true), window.CrComLib.publishEvent("b", zone_off_17, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_17} </p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_17, true), window.CrComLib.publishEvent("b", zone_decrease_17, false), console.log(zone_decrease_17))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_17, true), window.CrComLib.publishEvent("b", zone_mute_17, false), console.log(zone_mute_17))}>
                {zone17_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone17_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_17, true), window.CrComLib.publishEvent("b", zone_increase_17, false), console.log(zone_increase_17))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_1_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_1_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_1, true), window.CrComLib.publishEvent("b", zone_music_1, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_1_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_1, true), window.CrComLib.publishEvent("b", zone_off_1, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_1}</p>

            <div className='zone_controls'>
            <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_1, true), window.CrComLib.publishEvent("b", zone_decrease_1, false), console.log(zone_decrease_1))}>
                <img className="btn_image" src={arrow} />
            </button>

            <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_1, true), window.CrComLib.publishEvent("b", zone_mute_1, false), console.log(zone_mute_1))}>
                {zone1_mute ? (
                <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                </>
                ) : (
                <>
                    <p className="volume_txt">{ ((zone1_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                </>
                )}
            </button>

            <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_1, true), window.CrComLib.publishEvent("b", zone_increase_1, false), console.log(zone_increase_1))}>
                <img className="btn_image" src={arrow} id="flip" />
            </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_2_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_2_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_2, true), window.CrComLib.publishEvent("b", zone_music_2, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_2_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_2, true), window.CrComLib.publishEvent("b", zone_off_2, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_2}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_2, true), window.CrComLib.publishEvent("b", zone_decrease_2, false), console.log(zone_decrease_2))}>
                <img className="btn_image" src={arrow} />
                </button>
                
                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_2, true), window.CrComLib.publishEvent("b", zone_mute_2, false), console.log(zone_mute_2))}>
                {zone2_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone2_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_2, true), window.CrComLib.publishEvent("b", zone_increase_2, false), console.log(zone_increase_2))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_3_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_3_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_3, true), window.CrComLib.publishEvent("b", zone_music_3, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_3_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_3, true), window.CrComLib.publishEvent("b", zone_off_3, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_3}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_3, true), window.CrComLib.publishEvent("b", zone_decrease_3, false), console.log(zone_decrease_3))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_3, true), window.CrComLib.publishEvent("b", zone_mute_3, false), console.log(zone_mute_3))}>
                {zone3_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone3_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_3, true), window.CrComLib.publishEvent("b", zone_increase_3, false), console.log(zone_increase_3))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_4_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_4_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_4, true), window.CrComLib.publishEvent("b", zone_music_4, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_4_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_4, true), window.CrComLib.publishEvent("b", zone_off_4, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_4}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_4, true), window.CrComLib.publishEvent("b", zone_decrease_4, false), console.log(zone_decrease_4))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_4, true), window.CrComLib.publishEvent("b", zone_mute_4, false), console.log(zone_mute_4))}>
                {zone4_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone4_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_4, true), window.CrComLib.publishEvent("b", zone_increase_4, false), console.log(zone_increase_4))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_5_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_5_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_5, true), window.CrComLib.publishEvent("b", zone_music_5, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_5_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_5, true), window.CrComLib.publishEvent("b", zone_off_5, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_5}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_5, true), window.CrComLib.publishEvent("b", zone_decrease_5, false), console.log(zone_decrease_5))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_5, true), window.CrComLib.publishEvent("b", zone_mute_5, false), console.log(zone_mute_5))}>
                {zone5_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone5_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_5, true), window.CrComLib.publishEvent("b", zone_increase_5, false), console.log(zone_increase_5))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_6_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_6_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_6, true), window.CrComLib.publishEvent("b", zone_music_6, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_6_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_6, true), window.CrComLib.publishEvent("b", zone_off_6, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_6}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_6, true), window.CrComLib.publishEvent("b", zone_decrease_6, false), console.log(zone_decrease_6))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_6, true), window.CrComLib.publishEvent("b", zone_mute_6, false), console.log(zone_mute_6))}>
                {zone6_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone6_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_6, true), window.CrComLib.publishEvent("b", zone_increase_6, false), console.log(zone_increase_6))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_18_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_18_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_18, true), window.CrComLib.publishEvent("b", zone_music_18, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_18_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_18, true), window.CrComLib.publishEvent("b", zone_off_18, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_18}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_18, true), window.CrComLib.publishEvent("b", zone_decrease_18, false), console.log(zone_decrease_18))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_18, true), window.CrComLib.publishEvent("b", zone_mute_18, false), console.log(zone_mute_18))}>
                {zone18_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone18_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_18, true), window.CrComLib.publishEvent("b", zone_increase_18, false), console.log(zone_increase_18))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_11_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_11_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_11, true), window.CrComLib.publishEvent("b", zone_music_11, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_11_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_11, true), window.CrComLib.publishEvent("b", zone_off_11, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_11}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_11, true), window.CrComLib.publishEvent("b", zone_decrease_11, false), console.log(zone_decrease_11))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_11, true), window.CrComLib.publishEvent("b", zone_mute_11, false), console.log(zone_mute_11))}>
                {zone11_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone11_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_11, true), window.CrComLib.publishEvent("b", zone_increase_11, false), console.log(zone_increase_11))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_12_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_12_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_12, true), window.CrComLib.publishEvent("b", zone_music_12, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_12_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_12, true), window.CrComLib.publishEvent("b", zone_off_12, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_12}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_12, true), window.CrComLib.publishEvent("b", zone_decrease_12, false), console.log(zone_decrease_12))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_12, true), window.CrComLib.publishEvent("b", zone_mute_12, false), console.log(zone_mute_12))}>
                {zone12_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone12_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_12, true), window.CrComLib.publishEvent("b", zone_increase_12, false), console.log(zone_increase_12))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_13_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_13_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_13, true), window.CrComLib.publishEvent("b", zone_music_13, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_13_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_13, true), window.CrComLib.publishEvent("b", zone_off_13, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_13}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_13, true), window.CrComLib.publishEvent("b", zone_decrease_13, false), console.log(zone_decrease_13))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_13, true), window.CrComLib.publishEvent("b", zone_mute_13, false), console.log(zone_mute_13))}>
                {zone13_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone13_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_13, true), window.CrComLib.publishEvent("b", zone_increase_13, false), console.log(zone_increase_13))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_7_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_7_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_7, true), window.CrComLib.publishEvent("b", zone_music_7, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_7_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_7, true), window.CrComLib.publishEvent("b", zone_off_7, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_7}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_7, true), window.CrComLib.publishEvent("b", zone_decrease_7, false), console.log(zone_decrease_7))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_7, true), window.CrComLib.publishEvent("b", zone_mute_7, false), console.log(zone_mute_7))}>
                {zone7_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone7_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_7, true), window.CrComLib.publishEvent("b", zone_increase_7, false), console.log(zone_increase_7))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_14_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_14_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_14, true), window.CrComLib.publishEvent("b", zone_music_14, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_14_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_14, true), window.CrComLib.publishEvent("b", zone_off_14, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_14}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_14, true), window.CrComLib.publishEvent("b", zone_decrease_14, false), console.log(zone_decrease_14))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_14, true), window.CrComLib.publishEvent("b", zone_mute_14, false), console.log(zone_mute_14))}>
                {zone14_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone14_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_14, true), window.CrComLib.publishEvent("b", zone_increase_14, false), console.log(zone_increase_14))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_15_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_15_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_15, true), window.CrComLib.publishEvent("b", zone_music_15, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_15_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_15, true), window.CrComLib.publishEvent("b", zone_off_15, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_15}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_15, true), window.CrComLib.publishEvent("b", zone_decrease_15, false), console.log(zone_decrease_15))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_15, true), window.CrComLib.publishEvent("b", zone_mute_15, false), console.log(zone_mute_15))}>
                {zone15_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone15_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_15, true), window.CrComLib.publishEvent("b", zone_increase_15, false), console.log(zone_increase_15))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className='zone_container' id={zone_music_16_state? "active_btn":"display_none"}>
            <div className='power_on_off'>
                <button className={zone_music_16_state ? "display_none" : "power_on"} onClick={() => (window.CrComLib.publishEvent("b", zone_music_16, true), window.CrComLib.publishEvent("b", zone_music_16, false), console.log("turning off"))}>
                <p>Power On</p>
                </button>
                <button className={zone_music_16_state ? "power_off" : "display_none"} onClick={() => (window.CrComLib.publishEvent("b", zone_off_16, true), window.CrComLib.publishEvent("b", zone_off_16, false), console.log("turning off"))}>
                <p>Power Off</p>
                </button>
            </div>

            <p className='zone_title'>{zone_name_16}</p>

            <div className='zone_controls'>
                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_decrease_16, true), window.CrComLib.publishEvent("b", zone_decrease_16, false), console.log(zone_decrease_16))}>
                <img className="btn_image" src={arrow} />
                </button>

                <button className="btn_square_wide" onClick={() => (window.CrComLib.publishEvent("b", zone_mute_16, true), window.CrComLib.publishEvent("b", zone_mute_16, false), console.log(zone_mute_16))}>
                {zone16_mute ? (
                    <>
                    <img src={MuteIcon} className="volume_mute_btn" />
                    <p className="mute_btn_txt">Click to Unmute</p>
                    </>
                ) : (
                    <>
                    <p className="volume_txt">{ ((zone16_vol/65535) * 100).toFixed(0)}</p>
                    <p className="mute_btn_txt">Click to Mute</p>
                    </>
                )}
                </button>

                <button className="btn_circle" onClick={() => (window.CrComLib.publishEvent("b", zone_increase_16, true), window.CrComLib.publishEvent("b", zone_increase_16, false), console.log(zone_increase_16))}>
                <img className="btn_image" src={arrow} id="flip" />
                </button>
            </div>
            </div>

            <div className={zone_music_1_state || zone_music_2_state ||zone_music_3_state ||zone_music_4_state ||zone_music_5_state ||zone_music_6_state ||zone_music_7_state ||zone_music_8_state ||zone_music_9_state ||zone_music_10_state ||zone_music_11_state ||
                zone_music_12_state ||zone_music_13_state ||zone_music_14_state ||zone_music_15_state ||zone_music_16_state ||zone_music_17_state ||zone_music_18_state?"display_none":"all-off-banner"}>
                <h1> There are no active music zones.</h1>
            </div>
        </div>



        <div className={zone_music_1_state || zone_music_2_state ||zone_music_3_state ||zone_music_4_state ||zone_music_5_state ||zone_music_6_state ||zone_music_7_state ||zone_music_8_state ||zone_music_9_state ||zone_music_10_state ||zone_music_11_state ||
            zone_music_12_state ||zone_music_13_state ||zone_music_14_state ||zone_music_15_state ||zone_music_16_state ||zone_music_17_state ||zone_music_18_state?"global-all-mute":"display_none"}>
           
    
            <div>
                <button className='mute-all' onClick={muteAll}> 
                    <p > Mute All Zones </p>
                </button>

                <button className='unmute-all' onClick={unMuteAll} >
                    <p > Unmute All Zones </p>
                </button>
               
               
            </div>
          
        
        </div>
        
        </>
       
    )
}


export default GlobalAudioMenu