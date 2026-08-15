import React from "react";

const DashboardTopElement = ({
  color,
  icon,
  label,
  value,
  change,
  dir,
}) => {
  return (
    <div className="bg-white font-dm border border-[#E0DDD6] rounded-xl py-5 px-[22px] relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-xl ${color}`}
      />

      <div className="absolute top-[18px] right-[18px] text-2xl opacity-15">
        {icon}
      </div>

      <div className="text-[11px] font-semibold tracking-widest uppercase text-[#7A7A76] mb-2">
        {label}
      </div>

      <div className="text-2xl font-semibold text-[#2C2C2A] mb-1.5">
        {value}
      </div>

      <div
        className={`text-sm font-medium flex items-center gap-1 ${dir === "up" ? "text-[#27AE60]" : "text-[#E74C3C]"
          }`}
      >
        {dir === "up" ? "▲" : "▼"} {change}
      </div>
    </div>
  );
};

export default DashboardTopElement;