import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styles from '../styles/Contacts.module.scss';

// interface CustomEvent {
//   target: {
//     value: any;
//   };
// }

export const Contacts = () => {
  const [form, setForm] = useState({ name: '', phone: '', text: '' });

  const handleChangeForm =
    (formKey: string) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setForm({
        ...form,
        [formKey]: e.target.value,
      });
    };

  const sendMesage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let message = `<b>Новый Запрос:</b>%0A <b>Имя:</b> <i>"${form.name}"</i>%0A <b>Телефон:</b> <i>${form.phone}</i>%0A <b>Сообшение:</b> <i>"${form.text}"</i>`;

    let token = '5480669760:AAHbHSai7FzFe8IwmN6YwwXt6k6O2N4Ujfs';
    let chat_id = -1001777955089;
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;
    const api = new XMLHttpRequest();
    api.open('GET', url, true);
    api.send();
    setForm({ name: '', phone: '', text: '' });
  };

  const t = useTranslations('Contacts');

  return (
    <div className={styles.ledneon} id='contacts'>
      <div className='container'>
        <div className='ledneon__title_small'>
          <h2>{t('title')}</h2>
        </div>
        <div className='ledneon__subtitle'>{t('subtitle')}</div>
        <div className='ledneon__subtitle_text'>
          <p>{t('subtitleText_1')}</p>
          <p>{t('subtitleText_2')}</p>
        </div>
        <div className='ledneon__component_wrapper'>
          <form className={styles.ledneon__form} onSubmit={sendMesage}>
            <input
              className={styles.ledneon__input}
              type='text'
              placeholder={t('formName')}
              onChange={handleChangeForm('name')}
              value={form.name}
            />
            <input
              className={styles.ledneon__input}
              type='text'
              onChange={handleChangeForm('phone')}
              onKeyPress={(event) => {
                if (!/[0-9, +]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={form.phone}
              placeholder={t('formPhone')}
            />
            <textarea
              className={styles.ledneon__textarea}
              name='message'
              cols={30}
              rows={10}
              placeholder={t('formTextarea')}
              onChange={handleChangeForm('text')}
              value={form.text}
            ></textarea>
            <button className={styles.ledneon__btn} type='submit'>
              {t('formBtn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
