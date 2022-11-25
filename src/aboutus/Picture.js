import styles from "./Picture.module.css";
import background from "./table.jpg";

const Picture = () => {
    return (
      <article className={styles.article_abt_us}>
        <picture className={styles.picture} style={{filter:"brightness(40%)"}}>
          <img src={background} alt="background" class="img-fluid" width={'100%'}/>
        </picture>
        <h1 className={styles.header} width={'100%'}>MAVS- Redefine your Experience</h1>
      </article>
    );
  };
  
export default Picture;