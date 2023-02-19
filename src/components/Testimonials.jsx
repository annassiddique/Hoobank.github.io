import { feedback } from "../constants";
import styles from "../style";
import Feedback from './Feedback';


const Testimonials = () => (
  <section id="Clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full 
    blue__gradient" />

    <div className="w-full flex 
    justify-between items-center
     md:flex-row flex-col 
     sm:mb-16 mb-6 sm:ml-[80px] ml-[80px] sm:mr-[30px] mr-[30px]  relative z-[1]">
      <h1 className={styles.heading2}>
        What people are 
        <br className="sm:block hidden" />
         saying about us
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph} text-left max-w-[450px] `}>
            In '87, Huey released this; Fore!, their most accomplished album. I think their undisputed masterpiece is "Hip To Be Square". A song so catchy, most people probably don't listen to the lyrics.
          </p>
        </div>
      </h1>
    </div>

    <div className={`flex flex-wrap sm:ml-[10px] ml-[10px] sm:justify-start justify-center w-full feedback-container relative z-[1] `}>
      {feedback.map((card) => (
        <Feedback key={card.id}{...card} />
      ))}
    </div>






  </section>


)


export default Testimonials