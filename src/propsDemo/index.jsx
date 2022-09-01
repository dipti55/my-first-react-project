import React from 'react'
import UserCard from "../components/UserCard/UserCard";


const Props = () => {
  return (
    <div >
    <div id="userCards">
    <UserCard name = "Akash Malape" 
              number = "9856478515" 
              email="akashmalape@gmail.com" 
              address="Wagle Industrial Estate, Thane, Maharashtra 400604" 
              age={22} 
    // obj = {{name : "test", gender : "male"}}
    />
    <UserCard name = "Dipti Patil" 
              number = "9956214852" 
              email="diptipatil@gmail.com" 
              address="Metrotech Center, Brooklyn, Mumbai, 11201" 
              age={24} />
    <UserCard name = "Deepak Ohol" 
              number = "8521475956" 
              email="deepakohol@gmail.com" 
              address="East 14th Street, Ganesh road, Pune, 10003" 
              age={21} />
    <UserCard name = "Feros Bhagwan" 
              number = "7455228231" 
              email="feros bhagwan@gmail.com" 
              address="Rubin Residence Hall, MIDC, USA, 10003" 
              age={25} />
    </div>
    {/* <div id="userCards">
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div>
    <div id="userCards">
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div> */}
    
    </div>
  )
}

export default Props