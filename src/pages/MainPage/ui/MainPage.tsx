import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/provider/ErrorBondary';
import { Counter } from 'entities/Counter';
// import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
