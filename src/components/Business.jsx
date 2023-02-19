import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb:6" : "mb-0"} feature-card mr-20  `}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}
    bg-dimblue`}>
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain
      `} />
    </div>
    <div className={`flex-1 flex flex-col ml-3 `}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite  text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>


  </div>
)







const business = () => {
  return (
    <section id="features" className={`${layout.section} ml-14`}>
      <div className={`${layout.sectionInfo}`} >
        <h2 className={`${styles.heading2} `}>You do the business,<br className="sm:block hidden" />
          we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5  `}>I live in the American Gardens building on West 81st Street, on the 11th floor.
          My name is Patrick Bateman.
          I'm 27 years old.
          I believe in taking care of myself, in a balanced diet, in a rigorous exercise routine.
          In the morning, if my face is a little puffy, I'll put on an icepack while doing my stomach crunches.
          I can do a thousand now.</p>

        <Button styles="mt-10 " />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((features, index) => (
          <FeatureCard key={features.id}{...features} index={index} />
        ))}
      </div>





    </section>
  )
}

export default business