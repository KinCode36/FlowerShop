import React from 'react'
import Middlebuttuns from '../../MiddleTop/MiddleTopContent/Middlebuttuns'

const MiddleBottomcontent = () => {
    const sidebarButtons = [
    {
      id: 1,
      title: "Add Products",
      icon: "➕",
      path: "/add_Products",
    },
    {
      id: 2,
      title: "Settings",
      icon: "⚙️",
      path: "/settings"
    },
  ];
  return (
    <div>
      <Middlebuttuns sidebarButtons={sidebarButtons}/>
      
    </div>
  )
}

export default MiddleBottomcontent
