import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from '../styles/About.module.scss';

export const About = () => {
  const t = useTranslations('About');
  const servicesListFirst = [
    {
      text: 'servicesListFirst.itemFirst',
    },
    {
      text: 'servicesListFirst.itemSecond',
    },
    {
      text: 'servicesListFirst.itemThird',
    },
  ];
  const servicesListSecond = [
    {
      text: 'servicesListSecond.itemFirst',
    },
    {
      text: 'servicesListSecond.itemSecond',
    },
    {
      text: 'servicesListSecond.itemThird',
    },
  ];
  const equipment = [
    {
      title: 'equipment.stripTitle',
      text: 'equipment.stripText',
      image: 'equipment.stripImage',
    },
    {
      title: 'equipment.blockTitle',
      text: 'equipment.blockText',
      image: 'equipment.blockImage',
    },
    {
      title: 'equipment.controlTitle',
      text: 'equipment.controlText',
      image: 'equipment.controlImage',
    },
  ];
  return (
    <div className={styles.ledneon} id='about'>
      <div className='container'>
        <div className='ledneon__title_bigger'>
          <h2>
            {t('title')}
            <span>{t('title')}</span>
          </h2>
        </div>
        <div className='ledneon__component_wrapper'>
          <div
            className={`${styles.ledneon__image_plus} ${styles.ledneon__image}`}
          ></div>
          <div
            className={`${styles.ledneon__image_triangle} ${styles.ledneon__image}`}
          ></div>
          <div
            className={`${styles.ledneon__image_flash} ${styles.ledneon__image}`}
          ></div>
          <div
            className={`${styles.ledneon__logo_text_left} ${styles.ledneon__logo_text}`}
          >
            <span>ledneon.md</span>
          </div>
          <div
            className={`${styles.ledneon__logo_text_right} ${styles.ledneon__logo_text}`}
          >
            <span>ledneon.md</span>
          </div>
          <div className={styles.ledneon__text_container}>
            <div className={styles.ledneon__text_block}>
              <p className={styles.ledneon__text}>{t('text_1')}</p>
              <p className={styles.ledneon__text}>{t('text_2')}</p>
              <p className={styles.ledneon__text}>{t('text_3')}</p>
            </div>

            <p className={styles.ledneon__text}>{t('text_4')}</p>
          </div>
          <div className={styles.ledneon__services}>
            <ul className={styles.ledneon__services_list}>
              {servicesListFirst.map((item, i) => {
                return (
                  <li key={i} className={styles.ledneon__services_list_item}>
                    {t(item.text)}
                  </li>
                );
              })}
            </ul>
            <ul className={styles.ledneon__services_list}>
              {servicesListSecond.map((item, i) => {
                return (
                  <li key={i} className={styles.ledneon__services_list_item}>
                    {t(item.text)}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.ledneon__equipments}>
            {equipment.map((equipment, i) => {
              return (
                <div key={i} className={styles.ledneon__equipment}>
                  <div className={styles.ledneon__equipment_heading}>
                    <div className={styles.ledneon__equipment_image}>
                      <div className={styles.ledneon__equipment_image_borders}>
                        <Image
                          src={t(equipment.image)}
                          width={200}
                          height={200}
                          alt='img'
                        />
                      </div>
                    </div>
                    <div className={styles.ledneon__equipment_title}>
                      {t(equipment.title)}
                    </div>
                  </div>
                  <p className={styles.ledneon__equipment_text}>
                    {t(equipment.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
