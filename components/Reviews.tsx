import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from '../styles/Reviews.module.scss';

export const Reviews = () => {
  const t = useTranslations('Reviews');

  const reviews = [
    {
      src: 'review.src_1',
      name: 'review.name_1',
      text: 'review.text_1',
    },
    {
      src: 'review.src_2',
      name: 'review.name_2',
      text: 'review.text_2',
    },
    {
      src: 'review.src_3',
      name: 'review.name_3',
      text: 'review.text_3',
    },
  ];
  return (
    <div className={styles.ledneon} id='reviews'>
      <div className='container'>
        <div className='ledneon__title_small'>
          <h2>{t('title')}</h2>
          <div className='ledneon__subtitle'>{t('subTitle')}</div>
        </div>
        <div className='ledneon__component_wrapper'>
          <div className={styles.ledneon__reviews}>
            {reviews.map((review, i) => {
              return (
                <div key={i} className={styles.ledneon__review}>
                  <div className={styles.ledneon__review_image}>
                    <Image
                      src={t(review.src)}
                      width={500}
                      height={500}
                      alt='img'
                    />
                  </div>
                  <div className={styles.ledneon__review_name}>
                    {t(review.name)}
                  </div>
                  <div className={styles.ledneon__review_descr}>
                    <p>{t(review.text)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
