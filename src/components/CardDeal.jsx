import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const carddeal = () => (
  <section className={`${layout.section} ml-12`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden' />
        in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>My punishment continues to elude me and I gain no deeper knowledge of myself. No new knowledge can be extracted from my telling. This confession has meant nothing.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]   sm:ml-[140px] ml-[140px] sm:mr-[130px]  mr-[160px]' />

    </div>




  </section>

)


export default carddeal