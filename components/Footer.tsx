import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import "../components/ui/linkedin.css";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ulysse.couchoud@epitech.eu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        {/* LinkedIn Tooltip */}
        <div className="tooltip-container">
          <div className="tooltip">
            <div className="profile">
              <div className="user">
                <div className="img-ui">Ui</div>
                <div className="details">
                  <div className="name">Ulysse</div>
                  <div className="username">@username</div>
                </div>
              </div>
              <div className="about">100+ Connections</div>
            </div>
          </div>
          <div className="text">
            <a className="icon" href="https://www.linkedin.com/in/ulysse-couchoud">
              <div className="layer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="p-[0.4rem]"><FaLinkedinIn size={40}/>
                </span>
              </div>
              <div className="text">LinkedIn</div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
