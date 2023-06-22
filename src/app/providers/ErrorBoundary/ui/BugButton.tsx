import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const toggleError = () => {
    setError((prev) => !prev);
  };

  useEffect(() => {
    if (error) {
      throw new Error('something went wrong');
    }
  }, [error]);

  return (
    <button
      type="button"
      onClick={toggleError}
    >
      {t('ошибка')}
    </button>
  );
};
