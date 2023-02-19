import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id='product' className={`${layout.sectionReverse} sm:mr-[20px] mr-[20px] sm:ml-[20px] ml-[20px]  `}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[100%] h-[100%] sm:ml-[80px] ml-[80px]
      relative z-[5] '/>

      <div className='absolute z-[3] -left-1/2 top-0
    w-[50%] h-[50%] rounded-full white__gradient'/>

      <div className="absolute z-[0] -left-1/2 bottom-0
    w-[50%] h-[50%] rounded-full pink__gradient"/>

    </div>
    <div className={`${layout.sectionInfo} sm:ml-[110px]`}>
      <h2 className={styles.heading2}>Easily Control Your <br className='sm:block hidden' />
        billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] ml-3 mt-5`}>
        There are no more barriers to cross. All I have in common with the uncontrollable and the insane, the vicious and the evil, all the mayhem I have caused and my utter indifference toward it I have now surpassed. My pain is constant and sharp and I do not hope for a better world for anyone. In fact, I want my pain to be inflicted on others. I want no one to escape, but even after admitting this, there is no catharsis
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className={`w-[128px] h-[42px]
        object-contain mr-5 cursor-pointer`} />
        <img src={google} alt="google" className={`w-[128px] h-[42px]
        object-contain mr-5 cursor-pointer`} />
      </div>


    </div>


  </section>
)


export default Billing;
