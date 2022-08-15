import styles from '../styles/LangSwitcher.module.scss';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const LangSwitcher = () => {
  const t = useTranslations('LocaleSwitcher');

  const { locale, locales, route } = useRouter();

  const otherLocale = locales?.find((cur) => cur !== locale);

  return (
    <div className='langs'>
      <Link scroll={false} href={route} locale={otherLocale}>
        <a className={styles.lang}>
          {t('switchLocale', { locale: otherLocale })}
        </a>
      </Link>
    </div>
  );
};
