import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY}  flex-col mr-[50px] ml-[100px]  `}>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img src={logo} alt="Hoobank"
          className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[410px]`}>
          All it takes is one bad day to reduce the sanest man alive to lunacy. That's how far the world is from where I am. Just one bad day.
        </p>
      </div>

    </div>

    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-[40px] mt-10 mr-[50px] mb-[30px]">
      {footerLinks.map((footerLink) => (
        <div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[160px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white " >{footerLink.title}</h4>
          <ul className="list-none mt-4">
            {footerLink.links.map((link, index) => (
              <li key={link.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                  ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="w-full flex justify-center items-center 
    flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ">
        2023 HooBank. All Right Reserved.
      </p>

      <div className="flex flex-row md:mt-10 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer 
          ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
          />
        ))}
      </div>
    </div>

  </section >


)


export default Footer