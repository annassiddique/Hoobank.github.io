import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4 ml-[40px]`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} flex-wrap w-full`} >
          <img src={client.logo} alt="client"
            className="sm:w-[192px] w-[100px] first-letter:object-contain" />
        </div>
      ))}
    </div>

  </section>
)


export default Clients