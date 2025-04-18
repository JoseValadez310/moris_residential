import CrComLib from '@crestron/ch5-crcomlib';


const HeartBeat = () =>{

    const HEARTBEAT_REQUEST_JOIN = 'Csig.HeartbeatRequest';
    const HEARTBEAT_RESPONSE_JOIN = 'Csig.HeartbeatResponse';

 

// Function to send a heartbeat response

        const sendHeartbeatResponse = () => {

        console.log("Sending Heartbeat Response...");

        CrComLib.publishEvent('n', HEARTBEAT_RESPONSE_JOIN, 1); // Send response

        setTimeout(() => {

        CrComLib.publishEvent('n', HEARTBEAT_RESPONSE_JOIN, 0); // Reset after a short delay

        }, 1000);

        };

 

// Subscribe to the heartbeat request

        CrComLib.subscribeState('n', HEARTBEAT_REQUEST_JOIN, (value:number) => {
            console.log(`Received Heartbeat Request: ${value}`);
            if (value === 1) {
            sendHeartbeatResponse();
            }
        });


    return(

        <>
        </>
    )
}

export default HeartBeat