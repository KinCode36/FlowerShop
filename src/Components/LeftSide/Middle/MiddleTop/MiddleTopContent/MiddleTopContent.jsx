import React from 'react'
import Middlebuttuns from './Middlebuttuns'


const MiddleTopContent = () => {
const sidebarButtons = [
  {
    id: 1,
    title: "Dashboard",
    icon: "📊",
    path: "/",
  },
  {
    id: 2,
    title: "Orders",
    icon: "🛍️",
    path: "/orders",
  },
  {
    id: 3,
    title: "Products",
    icon: "🌸",
    path: "/products",
  },
  {
    id: 4,
    title: "Bookings",
    icon: "📅",
    path: "/bookings",
  }
];

    return (
        <div>
            <Middlebuttuns sidebarButtons={sidebarButtons}/>
        </div>
    )
}

export default MiddleTopContent
