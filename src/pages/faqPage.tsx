import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../common/header';
import { Footer } from '../common/footer';
import { FAQCard } from '../common/faqCard';

export const FAQPage: React.FC = () => {
  const { t } = useTranslation('faq');

  const faqData = [
    {
      question: t('questions.techniques'),
      solution: [
        t('answers.techniques.p1'),
        t('answers.techniques.p2')
      ]
    },
    {
      question: t('questions.criteria'),
      solution: [
        t('answers.criteria.p1'),
        t('answers.criteria.p2')
      ]
    },
    {
      question: t('questions.treatments'),
      solution: t('answers.treatments')
    },
    {
      question: t('questions.necessary'),
      solution: t('answers.necessary')
    },
    {
      question: t('questions.training'),
      solution: t('answers.training')
    },
    {
      question: t('questions.sideEffects'),
      solution: t('answers.sideEffects')
    },
    {
      question: t('questions.insurance'),
      solution: t('answers.insurance')
    },
    {
      question: t('questions.cost'),
      solution: t('answers.cost')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('title')}</h1>
            <p className="text-gray-600 text-xl">{t('subtitle')}</p>
          </div>

          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                solution={faq.solution}
                className="text-lg"
              />
            ))}
          </div>

          <div className="bg-white border border-green-100 rounded-lg p-10 mt-16 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">{t('moreQuestions.title')}</h3>
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">{t('moreQuestions.description')}</p>
            <a 
              href="/contact" 
              className="inline-block bg-brand-primary text-white px-10 py-4 rounded-lg text-xl font-medium hover:bg-green-600 transition-colors"
            >
              {t('moreQuestions.cta')}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
