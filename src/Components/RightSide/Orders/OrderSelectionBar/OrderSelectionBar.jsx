import React from 'react';

const OrderSelectionBar = ({ selectedCount }) => {
    return (
        <div className="box-border bg-[#EAF2EB] border border-solid border-[#a8c5ad] rounded-lg py-2.5 px-4 mb-3 flex gap-2.5 items-center text-[13px]">

            <span className="text-[#2e5235] font-semibold">
                {selectedCount} Selected
            </span>

            <button className="py-[5px] px-3 rounded-[6px] text-[12px] font-medium cursor-pointer border border-solid border-[#E0DDD6] bg-white text-[#4A4A47] font-dm transition-all duration-150 mr-1 hover:border-[#6B8F71] hover:text-[#2E5235] hover:bg-[#EAF2EB]">
                Mark as Confirmed
            </button>

            <button className="py-[5px] px-3 rounded-[6px] text-[12px] font-medium cursor-pointer border border-solid border-[#E0DDD6] bg-white text-[#4A4A47] font-dm transition-all duration-150 mr-1 hover:border-[#6B8F71] hover:text-[#2E5235] hover:bg-[#EAF2EB]">
                Mark as Preparing
            </button>

            <button className="py-[5px] px-3 rounded-[6px] text-[12px] font-medium cursor-pointer border border-solid border-[#E0DDD6] bg-white text-[#4A4A47] font-dm transition-all duration-150 mr-1 hover:border-[#C0392B] hover:text-[#C0392B] hover:bg-[#FDECEC]">
                Cancel Orders
            </button>

        </div>
    );
};

export default OrderSelectionBar;