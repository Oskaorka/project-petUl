import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nFortests from 'shared/config/i18n/i18nFortests';

export function renderWithTranslation(component: ReactNode) {
    return render(
        <I18nextProvider i18n={i18nFortests}>
            {component}
        </I18nextProvider>,
    );
}
