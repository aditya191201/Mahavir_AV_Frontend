import styles from "./Picture.module.css";

const Picture = () => {
    return (
      <article className={styles.article_abt_us}>
        <picture className={styles.picture} style={{filter:"brightness(40%)"}}>
          <img src="https://raw.githubusercontent.com/aditya191201/MAVS_SRC/master/About Us/table.jpg" alt="background" class="img-fluid" width={'100%'}/>
        </picture>
        <h1 className={styles.header} width={'100%'}>MAVS- Redefine your Experience</h1>
      </article>
    );
  };
  
export default Picture;