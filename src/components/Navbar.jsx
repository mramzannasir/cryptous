/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const onclick = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className="contain pt-2">
				<div className=" flex  h-[4rem] w-[100%] items-center justify-center ">
					{open ? (
						<div className="absolute top-0 left-0 h-full w-full bg-[#00000067] lg:hidden"></div>
					) : (
						""
					)}
					<nav className="flex w-[100%] items-center justify-between">
						<div className="logo">
							<img className="h-[2rem] lg:h-auto" src="/logo.png" />
						</div>
						{/* Close btn */}
						<div
							onClick={onclick}
							className="cursor-pointer transition-all duration-500 lg:hidden">
							{open ? (
								<div className="lg:hidden">
									{" "}
									<IoMdClose size={25} color="#ffffff" />
								</div>
							) : (
								<FiMenu size={25} color="white" />
							)}
						</div>
						{/* Navbar */}
						<div
							className={`absolute top-0 z-[100]  flex h-screen w-full ease left-0    gap-4 font-normal transition-all duration-[800ms] sm:w-[60%] lg:w-auto  lg:gap-6 lg:bg-inherit xl:gap-8  flex-col items-center   justify-center  bg-black pt-8 text-[14px]  leading-[180%] lg:static lg:h-auto lg:flex-row  lg:pt-0 
						${open ? "left-0" : "left-[-1080px]"}  `}>
							<div
								onClick={onclick}
								className="absolute right-1 top-5 z-[99] cursor-pointer text-2xl transition-all duration-500 lg:hidden">
								{open ? <IoMdClose size={36} color="#ffffff" /> : ""}
							</div>
							<div className="flex flex-col w-full lg:flex-row gap-8 lg:gap-6">
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									Home
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									Company
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									About
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									Pricing
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									Team
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light cursor-pointer text-white text-center lg:text-left">
									Contact
								</div>
								<div
									onClick={() => setOpen(!open)}
									className="text-base font-light text-white text-center lg:text-left">
									Blog
								</div>
							</div>
							<div className="lg:hidden">
								<button className="rounded-[50px] border-red border-[2px] hover:bg-red transition-all duration-500 text-white w-[147px] h-[40px]">Book a Demo</button>
							</div>
						</div>
						{/* Cart */}
						<div className="hidden lg:block">
							<button className=" rounded-[50px] border-red border-[2px] hover:bg-red transition-all duration-500 text-white w-[147px] h-[40px]">Book a Demo</button>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};
export default Navbar;
