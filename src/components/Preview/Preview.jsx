import styles from "./Preview.module.css";

const Preview = () => {
  return (
    <div className={styles.container}>
      <picture className={styles.picture}>
        <source
          media="(min-width: 1440px)"
          srcSet="/images/authscreens/phone_desk@1x.webp 1x, /images/authscreens/phone_desk@2x.webp 2x"
          type="image/webp"
        />
        <source
          media="(min-width: 1440px)"
          srcSet="/images/authscreens/phone_desk@1x.png 1x, /images/authscreens/phone_desk@2x.png 2x"
          type="image/png"
        />
        <source
          sizes="(max-width: 767px)"
          srcSet="/images/authscreens/phone_mob@1x.webp 1x, /images/authscreens/phone_mob@2x.webp 2x"
          type="image/webp"
        />
        <source
          sizes="(max-width: 767px)"
          srcSet="/images/authscreens/phone_mob@1x.png 1x, /images/authscreens/phone_mob@2x.png 2x"
          type="image/png"
        />
        <img
          src="/images/authscreens/phone_desk@1x.png"
          alt="App Preview"
          loading="lazy"
          className={styles.image}
        />
      </picture>
    </div>
  );
};

export default Preview;
