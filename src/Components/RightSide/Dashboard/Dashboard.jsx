import React from 'react'
import DashboardTopContent from './DashboardContent/DashboardTopContent/DashboardTopContent'
import DashboardTable from './DashboardContent/DashboardMidContent/DashboardTable/DashboardTable'
import DashboardMidContent from './DashboardContent/DashboardMidContent/DashboardMidContent'
import DashboardFooterContent from './DashboardContent/DashboardFooterContent/DashboardFooterContent'
import { useOutletContext } from 'react-router-dom'


const Dashboard = () => {
const { orders } = useOutletContext()

   const mid = [
    {
      label: "Revenue (June)",
      value: "₹2,90,500",
      change: "-18.4%",
      dir: "up",
      icon: "💰",
      cls: "green",
      color: "bg-[#4A7A52]"
    },
    {
      label: "Orders Today",
      value: "24",
      change: "+6 from yesterday",
      dir: "up",
      icon: "🛍️",
      cls: "blush",
      color: "bg-[#C8897A]"
    },
    {
      label: "Pending Bookings",
      value: "7",
      change: "2 need action",
      dir: "down",
      icon: "📅",
      cls: "amber",
      color: "bg-[#E6A817]"
    },
    {
      label: "Low Stock Items",
      value: "3",
      change: "Restock needed",
      dir: "down",
      icon: "⚠️",
      cls: "purple",
      color: "bg-[#7A6BA8]"
    }
  ];
  return (
    <div>
     <DashboardTopContent mid={mid}/>
     <DashboardFooterContent/>
     <DashboardMidContent orders={orders.slice(1,5)} />
    </div>
  )
}

export default Dashboard
