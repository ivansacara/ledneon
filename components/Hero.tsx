import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.scss';

export const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <div className='container'>
      <div className={styles.hero}>
        <div className={styles.images_top}>
          <div className={styles.circle_wrap}>
            <Image
              className={styles.circle}
              width={500}
              height={500}
              alt='circle'
              src='/circle.png'
            />
          </div>
        </div>
        <div className={styles.hero_feedback}>
          <div className={styles.hero_img_wrap}>
            <Image
              className={styles.hero_img}
              width={700}
              height={130}
              alt='circle'
              src='/cover.png'
            />
          </div>
          <div className={styles.feedback}>
            <h3>{t('title')}</h3>
            <p>{t('text')}</p>
            <Link href='#contacts'>
              <a>{t('btnText')}</a>
            </Link>
          </div>
        </div>
        <div className={styles.images_bottom}>
          <div className={styles.image_cub}>
            <Image width={450} height={450} alt='cub' src='/cub.png' />
          </div>

          <div className={styles.image_star}>
            <Image width={350} height={350} alt='star' src='/star.png' />
          </div>

          <div className={styles.image_plus}>
            <Image width={150} height={150} alt='plus' src='/plus.png' />
          </div>
        </div>
      </div>
    </div>
  );
};
