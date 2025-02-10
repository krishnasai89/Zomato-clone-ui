import React from 'react'
import { useState } from 'react'
import Header from '../../Components/common/Header/Header'
import TabOptions from '../../Components/common/TabOptions/TabOptions'
import Footer from '../../Components/common/Footer/Footer'
import Delivery from '../../Components/Delivery/Delivery'
import DiningOut from '../../Components/DiningOut/Dining'
import Nightlife from '../../Components/Nightlife/Nightlife'
import ExploreOption from '../../Components/common/ExploreOptionsnearme/ExploreOption'

const HomePages = () => {
  const [activeTab, setActiveTab] = useState("Delivery")
  const getCorrectScreen = ()=>{
    switch (activeTab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <DiningOut />;
      case "Nightlife":
        return <Nightlife />;
      default:
        return <Delivery />;
    }
  }
  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <ExploreOption />
      <Footer />
    </div>
  )
}

export default HomePages