import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
	return (
		<>
			<div className="wrapper  bg-blue ">
				<div className="wrapper lg:bg-[url(/hero-bg.png)] bg-cover lg:bg-[length:100%_100%] bg-center bg-no-repeat w-full">
					<div className="contain flex-col lg:h-[650px] xl:h-[750px] 2xl:h-[870px] 4xl:h-[900px]">
						<Navbar />
						<div className="flex w-full mt-[3rem] lg:justify-between lg:mt-[5rem] text-white  items-center  lg:flex-row">
							<div className="w-full lg:w-[48%]">
								<h1 className="heading  text-center lg:text-left">
									Make better business with Cryptocurrency
								</h1>
								<p className="text-[14px] md:text-base my-3 xl:my-5 font-normal text-center lg:text-left">
									We offers users a fully operational long-term rental platform.
									It plans to leverages blockchain technology.
								</p>
								<button className="flex justify-center text-sm items-center h-[38px] md:h-[44px] w-[170px] md:w-[199px] rounded-[50px] bg-red text-white mx-auto lg:mx-0">
									Get Whitelisted
								</button>
							</div>
							<div className="hidden lg:block w-full lg:w-[45%] ">
								<div className=" flex w-full">
									<img
										src="/hero.png"
										className="hidden lg:inline-block xl:mb-6  lg:w-full"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
