import React from 'react';
import LeftSideBar from './component/LeftSideBar';
import RightSideBar from './component/RightSideBar';
import MidSection from './component/MidSection';
import Menu from './component/Menu';
import Login from './component/Login';



function App() {
  return (
   <>

   <Menu />
   <div class="row">
   <div class="col-lg-3  col-md-3  col-xs-0 text-white">
   <LeftSideBar/>
   </div>
   <div class="col-lg-7 col-md-9 col-xs-12 bg-light text-white">
   <MidSection/>
   </div>
   <div class="col-lg-2 col-md-9 col-xs-12">
   <RightSideBar/>
   </div>
   </div>
    
   
  
   


   </>
  )
}
export default App;