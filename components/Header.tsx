import styles from '../styles/Header.module.scss';
import Image from 'next/image';
import { LangSwitcher } from './LangSwitcher';
import Link from 'next/link';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export const Header = () => {
  const t = useTranslations('Header');
  const menu = [
    {
      title: 'works',
      url: 'worksHref',
    },
    {
      title: 'about',
      url: 'aboutHref',
    },
    {
      title: 'reviews',
      url: 'reviewsHref',
    },
    {
      title: 'contacts',
      url: 'contactsHref',
    },
    {
      title: 'phone',
      url: 'phoneHref',
    },
  ];

  const [toggleClass, setToggleClass] = useState(false);

  const toggleClassActive = () => {
    setToggleClass(!toggleClass);
    if (document.body.clientWidth <= 768) {
      !toggleClass
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.inner}>
          <div
            className={`${styles.burger} ${toggleClass ? styles.isActive : ''}`}
            onClick={() => toggleClassActive()}
          >
            <span></span>
          </div>
          <div className={styles.logo_wrap}>
            <Link href='/'>
              <a>
                <Image
                  className={styles.logo}
                  src='/logo.png'
                  alt='LOGO'
                  width={220}
                  height={40}
                />
              </a>
            </Link>
          </div>
          <nav
            className={`${styles.nav} ${toggleClass ? styles.isActive : ''}`}
          >
            {menu.map((item, i, arr) => {
              if (i + 1 === arr.length) {
                return (
                  <Link key={i} href={t(item.url)}>
                    <a
                      className={styles.nav_phone}
                      onClick={() => toggleClassActive()}
                    >
                      {t(item.title)}
                    </a>
                  </Link>
                );
              }
              return (
                <Link key={i} href={t(item.url)}>
                  <a
                    className={styles.nav_link}
                    onClick={() => toggleClassActive()}
                  >
                    {t(item.title)}
                  </a>
                </Link>
              );
            })}
          </nav>
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
};
