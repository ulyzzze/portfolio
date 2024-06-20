import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import "../components/ui/linkedin.css";
import "../components/ui/github.css";

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

      <div className="flex mt-[-4rem] md:flex-row flex-row justify-center items-center pb-[8rem] gap-10">
      {/* LinkedIn Tooltip */}
        <div className="tooltip-container">
          <div className="tooltip">
            <div className="profile">
              <div className="user">
                <div className="img-ui">Ui</div>
                <div className="details">
                  <div className="name">Ulysse</div>
                  <div className="pl-[0.4rem]"> Couchoud</div>
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
                <span className="p-[0.8rem]"><FaLinkedinIn size={30}/>
                </span>
              </div>
              <div className="text">LinkedIn</div>
            </a>
          </div>
        </div>

        {/* Github Tooltip */}
        <div className="tooltip-container-github">
          <div className="tooltip-github">
            <div className="profile-github">
              <div className="user-github">
                <div className="img-ui-github">Ui</div>
                <div className="details-github">
                  <div className="name-github pt-[0.9rem]" >@ulyzzze</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-github">
            <a className="icon-github" href="https://github.com/ulyzzze">
              <div className="layer-github">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="p-[0.8rem]"><FaGithub size={30}/>
                </span>
              </div>
              <div className="text-github">Github</div>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 text-red-500">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-sm">bash</p>
          </div>
          <div className="mt-4">
            <p className="text-purple">$ help</p>
            <p className="text-white"> You want to know more about me ?</p>
            <br></br>
            <p className="text-white"> Contact me on phone : +33 6 49 01 01 98</p>
            <p className="text-white"> Contact me on email : ulysse.couchoud@epitech.eu</p>
            <p className="text-purple">$</p>
          </div>
        </aside>

        <a href="#about" className="pt-[3rem]">
          <MagicButton
            title="One more time ?"
            icon={<FaLocationArrow />}
            position="left"
          />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
