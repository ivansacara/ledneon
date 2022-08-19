import styles from '../styles/Offer.module.scss';

export default function Offer() {
  return (
    <div className={styles.offer__images}>
      <img
        className={`${styles.offer__image_desktop} ${styles.offer__image}`}
        src='/desktop.jpg'
        alt='image'
      />
      <img
        className={`${styles.offer__image_mobile} ${styles.offer__image}`}
        src='/mobile.jpg'
        alt='image'
      />
    </div>
  );
}
