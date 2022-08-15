import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getInstagramPhotos } from '../pages';
import styles from '../styles/Works.module.scss';

export const Works = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getInstagramPhotos()
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const instaContent = data;

  const images = instaContent.filter((item: any) =>
    item ? item.media_url.includes('scontent.cdninstagram.com') : null
  );

  const getRandomOne = (imagesArray: any[]) => {
    return imagesArray[Math.floor(Math.random() * imagesArray.length)];
  };

  function removeItemOnce(arr: any[], value: any) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
  const makeRandomArray = () => {
    const newImagesArray: any[] = [];
    let imagesLeft: any[] = images;

    for (let i = 0; i < 9; i++) {
      const image = getRandomOne(imagesLeft);
      imagesLeft = removeItemOnce(imagesLeft, image);
      if (image) {
        newImagesArray.push(image);
      }
    }

    return newImagesArray;
  };
  const imagesLength = makeRandomArray();

  const t = useTranslations('Works');

  return (
    <div className={styles.ledneon} id='our_works'>
      <div className='container'>
        <div className='ledneon__title_bigger'>
          <h2>
            {t('title')}
            <span>{t('title')}</span>
          </h2>
        </div>
        <div className='ledneon__component_wrapper'>
          <div className={styles.ledneon__photos}></div>
          <div className={styles.ledneon__photos}>
            {imagesLength.map((image: any) => {
              return (
                <div key={image.id} className={styles.ledneon__photo}>
                  <Link href={image.permalink}>
                    <a className={styles.ledneon__photo_link} target='_blank'>
                      <Image
                        className={styles.ledneon__img}
                        width={500}
                        height={500}
                        objectFit='cover'
                        src={image.media_url}
                        alt={image.caption}
                      />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className={styles.ledneon__insta_wrapper}>
            <Link href={'https://www.instagram.com/ledneon.md/'}>
              <a className={styles.ledneon__insta_link} target='_blank'>
                <span className={styles.ledneon__insta_text}>
                  {t('instaLink')}
                </span>
                <span className={styles.ledneon__insta_icon}>
                  <svg
                    fill='#000000'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 100 100'
                    width='27px'
                    height='27px'
                  >
                    <path d='M 31 17 C 23.27961 17 17 23.27961 17 31 L 17 69 C 17 76.72039 23.27961 83 31 83 L 69 83 C 76.72039 83 83 76.72039 83 69 L 83 31 C 83 23.27961 76.72039 17 69 17 L 31 17 z M 31 19 L 69 19 C 75.63961 19 81 24.36039 81 31 L 81 69 C 81 75.63961 75.63961 81 69 81 L 31 81 C 24.36039 81 19 75.63961 19 69 L 19 31 C 19 24.36039 24.36039 19 31 19 z M 40 26 C 32.28482 26 26 32.28482 26 40 L 26 60 C 26 67.71518 32.28482 74 40 74 L 60 74 C 67.71518 74 74 67.71518 74 60 L 74 40 C 74 32.28482 67.71518 26 60 26 L 40 26 z M 40 27 L 60 27 C 67.17282 27 73 32.82718 73 40 L 73 60 C 73 67.17282 67.17282 73 60 73 L 40 73 C 32.82718 73 27 67.17282 27 60 L 27 40 C 27 32.82718 32.82718 27 40 27 z M 40 30 C 34.490777 30 30 34.490777 30 40 L 30 60 C 30 65.509223 34.490777 70 40 70 L 60 70 C 65.509223 70 70 65.509223 70 60 L 70 40 C 70 34.490777 65.509223 30 60 30 L 40 30 z M 40 31 L 60 31 C 64.966777 31 69 35.033223 69 40 L 69 60 C 69 64.966777 64.966777 69 60 69 L 40 69 C 35.033223 69 31 64.966777 31 60 L 31 40 C 31 35.033223 35.033223 31 40 31 z M 62.5 34 C 61.375 34 60.468589 34.439878 59.876953 35.105469 C 59.285317 35.77106 59 36.638889 59 37.5 C 59 38.361111 59.285317 39.22894 59.876953 39.894531 C 60.468589 40.560122 61.375 41 62.5 41 C 63.625 41 64.531411 40.560122 65.123047 39.894531 C 65.714683 39.22894 66 38.361111 66 37.5 C 66 36.638889 65.714683 35.77106 65.123047 35.105469 C 64.531411 34.439878 63.625 34 62.5 34 z M 62.5 35 C 63.375 35 63.96859 35.310122 64.376953 35.769531 C 64.785317 36.22894 65 36.861111 65 37.5 C 65 38.138889 64.785317 38.77106 64.376953 39.230469 C 63.96859 39.689878 63.375 40 62.5 40 C 61.625 40 61.03141 39.689878 60.623047 39.230469 C 60.214683 38.77106 60 38.138889 60 37.5 C 60 36.861111 60.214683 36.22894 60.623047 35.769531 C 61.03141 35.310122 61.625 35 62.5 35 z M 50 38 C 43.378501 38 38 43.378506 38 50 C 38 56.621494 43.378501 62 50 62 C 56.621499 62 62 56.621494 62 50 C 62 43.378506 56.621499 38 50 38 z M 50 39 C 56.081059 39 61 43.918945 61 50 C 61 56.081055 56.081059 61 50 61 C 43.918941 61 39 56.081055 39 50 C 39 43.918945 43.918941 39 50 39 z M 50 42 C 45.587642 42 42 45.587645 42 50 C 42 54.412355 45.587642 58 50 58 C 54.412358 58 58 54.412355 58 50 C 58 45.587645 54.412358 42 50 42 z M 50 43 C 53.871919 43 57 46.128084 57 50 C 57 53.871916 53.871919 57 50 57 C 46.128081 57 43 53.871916 43 50 C 43 46.128084 46.128081 43 50 43 z' />
                  </svg>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
