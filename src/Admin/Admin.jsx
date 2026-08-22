import React, { useEffect, useState } from "react";
import LeftSide from "../Components/LeftSide/LeftSide";
import Nav from "../Components/NavBar/Nav";
import { Outlet } from "react-router-dom";

const initialOrders = [
  {
    id: "#FL-4821",
    initials: "PS",
    avatarColor: "#C8897A",
    name: "Priya Sharma",
    email: "priya123@gmail.com",
    product: "Red Rose Bouquet × 2",
    amount: "₹2,598",
    status: "Confirmed",
    date: "08 Jun",
  },
  {
    id: "#FL-4822",
    initials: "RK",
    avatarColor: "#6D8BAA",
    name: "Rahul Kumar",
    email: "rahul@gmail.com",
    product: "White Lily Bouquet × 1",
    amount: "₹1,799",
    status: "Pending",
    date: "09 Jun",
  },
  {
    id: "#FL-4823",
    initials: "AS",
    avatarColor: "#A77BD9",
    name: "Anjali Singh",
    email: "anjali@gmail.com",
    product: "Orchid Vase × 3",
    amount: "₹4,250",
    status: "Cancelled",
    date: "10 Jun",
  },
  {
    id: "#FL-4824",
    initials: "AM",
    avatarColor: "#5DAE8B",
    name: "Aman Mishra",
    email: "aman@gmail.com",
    product: "Sunflower Basket × 2",
    amount: "₹2,199",
    status: "Delivered",
    date: "11 Jun",
  },
  {
    id: "#FL-4825",
    initials: "NK",
    avatarColor: "#E09A5A",
    name: "Neha Kapoor",
    email: "neha@gmail.com",
    product: "Pink Tulip Bouquet × 1",
    amount: "₹1,499",
    status: "Confirmed",
    date: "12 Jun",
  },
  {
    id: "#FL-4826",
    initials: "VS",
    avatarColor: "#7B8FE8",
    name: "Vikas Singh",
    email: "vikas@gmail.com",
    product: "Mixed Flower Basket × 3",
    amount: "₹3,899",
    status: "Pending",
    date: "13 Jun",
  },
  {
    id: "#FL-4827",
    initials: "KS",
    avatarColor: "#7A6BA8",
    name: "Khushi Sharma",
    email: "khushi@gmail.com",
    product: "Mixed Flower Basket × 3",
    amount: "₹3,499",
    status: "Out-for-delivery",
    date: "13 Jun",
  },
];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : initialOrders;
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  return (
    <>
      <div className="flex">
        <Nav onMenuClick={() => setSidebarOpen(true)} />
        <LeftSide isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 min-w-0 ml-60 pt-24 pb-10 px-7 min-h-screen bg-[#F4F3EF]">

          <div onClick={() => sidebarOpen && setSidebarOpen(false)}>
            <Outlet
              context={{
                orders,
                setOrders,
              }}
            />
          </div>

        </main>

      </div>
    </>
  );
};

export default Admin;