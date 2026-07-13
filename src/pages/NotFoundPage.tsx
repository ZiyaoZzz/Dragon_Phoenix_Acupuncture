import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { useTranslation } from 'react-i18next';
import { usePageSeo } from '../common/seo/usePageSeo';

export const NotFoundPage: React.FC = () => {
  usePageSeo('notFound', '/404', { noindex: true });
  const { t } = useTranslation('notFoundPage');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-surface flex items-center justify-center">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-gray-300 mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-clinic-green-dark transition-colors"
            >
              {t('goHome')}
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-brand-primary border-2 border-brand-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-brand-light transition-colors"
            >
              {t('contactUs')}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;

