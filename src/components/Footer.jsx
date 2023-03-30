import React from "react";
import {GrFacebookOption} from "react-icons/gr"
import {AiOutlineTwitter} from "react-icons/ai"
import {ImLinkedin2} from "react-icons/im"
import {FiInstagram} from "react-icons/fi"

const Footer = () => {
	return (
		<>
			<div className="wrapper a mt-[40rem] text-white">
				<div className="contain py-9">
					<div className="grid xl:flex xl:w-full  xl:gap-0 xl:justify-between xl:items-stretch grid-cols-1 w-full place-content-between place-items-stretch md:grid-cols-2 gap-6 md:gap-8  lg:grid-cols-3 xl:grid-cols-5">
						<ul className="flex flex-col gap-2 md:gap-4 w-full xl:w-auto">
							<li className="text-base font-semibold">Company</li>
							<li className="text-[#e6e6e6] opacity-70 desM md: mt-4">
								About us
							</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Terms of use</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Privacy Policy</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Disclaimer</li>
						</ul>
						<ul className="flex flex-col gap-2 md:gap-4 w-full xl:w-auto">
							<li className="text-base font-semibold">Businesses</li>
							<li className="text-[#e6e6e6] opacity-70 desM md: mt-4">Prime</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Custody</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Asset Hub</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Commerce</li>
						</ul>
						<ul className="flex flex-col gap-2 md:gap-4 w-full xl:w-auto">
							<li className="text-base font-semibold">Exchange</li>
							<li className="text-[#e6e6e6] opacity-70 desM md: mt-4">
								Exchange Home
							</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Margin Trading</li>
							<li className="text-[#e6e6e6] opacity-70 desM">
								Derivatives Trading
							</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Trading Arena</li>
						</ul>
						<ul className="flex flex-col gap-2 md:gap-4 w-full xl:w-auto">
							<li className="text-base font-semibold">Blockchain</li>
							<li className="text-[#e6e6e6] opacity-70 desM md: mt-4">
								Chain Explorer
							</li>
							<li className="text-[#e6e6e6] opacity-70 desM">The Syndicate</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Security</li>
							<li className="text-[#e6e6e6] opacity-70 desM">
								Cryptous Credit
							</li>
						</ul>
						<ul className="flex flex-col gap-2 md:gap-4 w-full xl:w-auto">
							<li className="text-base font-semibold">Resources</li>
							<li className="text-[#e6e6e6] opacity-70 desM md: mt-4">
								Prices
							</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Site Widgets</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Tax</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Blog</li>
							<li className="text-[#e6e6e6] opacity-70 desM">Research</li>
						</ul>
					</div>
				</div>
				<div className="contain">
					<div className="w-full h-[2px] bg-[#bcbcbc63]"></div>
				</div>
				<div className="contain my-[40px] flex-col-reverse gap-2 md:gap-0 md:flex-row md:justify-between items-center justify-center">
					<div className="text-[14px] text-[#bcbcbc] opacity-70">
						Copyright 2023, Cryptous
					</div>
					<div className="flex gap-4 items-center text-[#bcbcbc]   hover:text-white transition-all duration-300">
						<div className="h-[30px] w-[30px] hover:bg-red  hover:cursor-pointer border-[1px] rounded-md transition-all duration-300 flex justify-center items-center border-red">
              <GrFacebookOption/>
            </div>
            <div className="h-[30px] w-[30px] hover:bg-red  hover:cursor-pointer border-[1px] rounded-md transition-all duration-300 flex justify-center items-center border-red">
              <AiOutlineTwitter/>
            </div>
            <div className="h-[30px] w-[30px] hover:bg-red  hover:cursor-pointer border-[1px] rounded-md transition-all duration-300 flex justify-center items-center border-red">
              <ImLinkedin2/>
            </div>
            <div className="h-[30px] w-[30px] hover:bg-red  hover:cursor-pointer border-[1px] rounded-md transition-all duration-300 flex justify-center items-center border-red">
              <FiInstagram/>
            </div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
