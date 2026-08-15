import React from 'react'

const Gallary = () => {
    return (
        <section className="py-20 bg-[#F9F5EF]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-bold text-[#2C2C2C]">
                        Our <span className="italic text-[#6B8F71]">Work</span>
                    </h2>
                    <button className="text-[#6B8F71] font-medium hover:underline">
                        Full Gallery →
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <div className="group relative col-span-2 aspect-[2/1] overflow-hidden rounded-xl bg-[#D9B382] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">💐</span>
                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Wedding
                            </span>
                        </div>
                    </div>

                    <div className="group relative aspect-square overflow-hidden rounded-xl bg-[#F7D9C4] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">🌹</span>

                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Roses
                            </span>
                        </div>
                    </div>

                    <div className="group relative aspect-square overflow-hidden rounded-xl bg-[#CFE8D5] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">🌿</span>

                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Plants
                            </span>
                        </div>
                    </div>

                    <div className="group relative aspect-square overflow-hidden rounded-xl bg-[#FFE6E6] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">🌷</span>

                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Tulips
                            </span>
                        </div>
                    </div>

                    <div className="group relative col-span-2 aspect-[2/1] overflow-hidden rounded-xl bg-[#E7D7F5] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">🌸</span>

                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Bouquet
                            </span>
                        </div>
                    </div>

                    <div className="group relative aspect-square overflow-hidden rounded-xl bg-[#FFF0C9] flex items-center justify-center cursor-pointer transition duration-300 hover:scale-[1.02]">
                        <span className="text-5xl">🌼</span>

                        <div className="absolute inset-0 flex items-end p-4 bg-black/0 transition duration-300 group-hover:bg-black/45">
                            <span className="rounded-full bg-white/15 backdrop-blur-md px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/0 transition duration-300 group-hover:text-white">
                                Daisy
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Gallary
