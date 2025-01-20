import './assets/css/Index.css'
import 'animate.css';
import {useMemo } from 'react';
import useWebXPanel from './hooks/useWebXPanel';

import {createHashRouter, RouterProvider} from 'react-router-dom'


// Dashboard
import Home from './structure/dashboard/HomeDashboard';
import RoomsDashboard from './structure/dashboard/RoomDashboard';
import AudioDashboard from './structure/dashboard/AudioDashboard'
import LightDashboard from './structure/dashboard/LightDashboard'
import Climate  from './structure/dashboard/ClimateDashboard';

// Pages

import Mediaroom from './structure/page/mediaroom';
import Gym from './structure/page/gym';

import BreakfastNook from './structure/page/breakfastnook';
import FamilyRoom from './structure/page/familyroom';
import Bar from './structure/page/bar'

import GameRoom from './structure/page/gameroom';
import MasterBedroom from './structure/page/masterbedroom';
import MasterBathroom from './structure/page/masterbathroom'
import Office from './structure/page/office';

      
// Tools
import ScreenSize from './structure/tools/ScreenSize';

       
     
        
        
        
   

function App() {

  const router = createHashRouter ([
  {
    path: '/',
    element: <Home />
  },

  // ------------------------------------ Dashboards
  {
    path: '/roomsDashboard',
    element: <RoomsDashboard />
  },
  {
    path: '/AudioDashboard',
    element: <AudioDashboard />
  },
  {
    path: '/LightDashboard',
    element: <LightDashboard />
  },
  {
    path: '/Climate',
    element: <Climate />
  },
  
   //------------------------------------ Basement Floor
  {
    path: '/mediaroom',
    element: <Mediaroom />
  },
  {
    path: '/gym',
    element: <Gym />
  },
   //------------------------------------ Main Floor
  {
    path: '/breakfastnook',
    element: <BreakfastNook />
  },
  {
    path: '/familyroom',
    element: <FamilyRoom />
  },
  {
    path: '/bar',
    element: <Bar />
  },

  //------------------------------------ Second Floor
  {
    path: '/gameroom',
    element: <GameRoom />
  },
  {
    path: '/masterbedroom',
    element: <MasterBedroom />
  },
  {
    path: '/masterbathroom',
    element: <MasterBathroom />
  },
  {
    path: '/office',
    element: <Office />
  },


  //------------------------------------ Tools

  {
    path: '/ScreenSize',
    element: <ScreenSize />
  },

])


  
  const webXPanelConfig = useMemo(() => ({
    ipId: '0x03',
    host: '0.0.0.0',
    roomId: '',
    authToken: ''
  }), []); // Dependencies array is empty, so this object is created only once

  useWebXPanel(webXPanelConfig);
  return (
  <body>
    <RouterProvider router={router}/>
  </body>
    
  )
}

export default App