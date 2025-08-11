import { motion } from "framer-motion";
import { styles } from "../styles";

import '../index.css';
import ComputersCanvas from "../components/canvas/Computers"
import download from '../assets/download.svg';
import Scroll from "./Scroll";
import mobilephone from "../assets/phone.jpg";
import mail from "../assets/mail.jpg";
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github3.png";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-3/10 h-screen">
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Mohit</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a
              <span className="text-[#915EFF]"> Full Stack </span>
              <br className='sm:block hidden' />
              Web Developer
            </p>

            {/* Resume Button */}
            <button class="bg-white hover:bg-[#915EFF] text-black font-bold py-2 px-4 rounded mt-4 mb-4 text-[20px] flex"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = 'https://drive.google.com/file/d/1k_OIsM67_BzeriPxlzjauZZ5dMI12HNg/view?usp=sharing';
              }}>
              <img src={download} alt="Icon" className="w-6 h-6 mr-2 mt-0.5" />
              Resume
            </button>


            <div className=" flex  space-x-3 mt-2 ">

              <a href="https://www.linkedin.com/in/mohit-jatav-6819a0260/" className="flex"><img src={linkedin} alt="mobile" className="h-8 w-8" /></a>

              <a href="https://github.com/git-dev-crs" className="flex"><img src={github} alt="mobile" className="h-8 w-8" /></a>

              <a href="tel:+917489417866" className="flex"><img src={mobilephone} alt="mobile" className="h-8 w-8" /></a>

              <a href="https://leetcode.com/u/MohitJ111/" ><img src={leetcode} alt="leetcode" className="h-8 w-8" /></a>

              <a href="mailto:mohitjatav326@gmail.com" ><img src={mail} alt="Mail" className="h-8 w-8" /></a>
            </div>

          </div>

        </div>

      </div>

      {/* Content for the right div */}
      <div className="w-7/10 h-screen hidden lg:block ">
        <ComputersCanvas />
      </div>


      <Scroll nextSection="about" />

    </div>

  );
};

export default Hero;
