import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/button';
import cls from './PageErorr.module.scss';

interface PageErrorProps {
 className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Что-то пошло не так.')}</p>
            <Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
        </div>

    );
};
