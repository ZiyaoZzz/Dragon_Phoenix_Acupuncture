import React from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from '../common/header';
import { Footer } from '../common/footer';

export const ConditionsPage: React.FC = () => {
  const { t } = useTranslation('conditions');

  const provenConditions = [
    t('proven.allergicRhinitis'),
    t('proven.biliaryColic'),
    t('proven.depression'),
    t('proven.dysentery'),
    t('proven.dysmenorrhoea'),
    t('proven.epigastralgia'),
    t('proven.facialPain'),
    t('proven.headache'),
    t('proven.hypertension'),
    t('proven.hypotension'),
    t('proven.inductionOfLabor'),
    t('proven.kneePain'),
    t('proven.leukopenia'),
    t('proven.lowBackPain'),
    t('proven.malpositionOfFetus'),
    t('proven.menstrualCramps'),
    t('proven.morningSickness'),
    t('proven.nauseaAndVomiting'),
    t('proven.neckPain'),
    t('proven.painInDentistry'),
    t('proven.periarthritisOfShoulder'),
    t('proven.postoperativePain'),
    t('proven.renalColic'),
    t('proven.rheumatoidArthritis'),
    t('proven.sciatica'),
    t('proven.sprain'),
    t('proven.stroke'),
    t('proven.tennisElbow')
  ];

  const probableConditions = [
    t('probable.abdominalPain'),
    t('probable.acneVulgaris'),
    t('probable.alcoholDependence'),
    t('probable.bellsPalsy'),
    t('probable.bronchialAsthma'),
    t('probable.cancerPain'),
    t('probable.cardiacNeurosis'),
    t('probable.cholecystitis'),
    t('probable.cholelithiasis'),
    t('probable.competitionStress'),
    t('probable.craniocerebralInjury'),
    t('probable.diabetesMellitus'),
    t('probable.earache'),
    t('probable.epidemicHemorrhagicFever'),
    t('probable.epistaxis'),
    t('probable.eyePain'),
    t('probable.femaleInfertility'),
    t('probable.facialSpasm'),
    t('probable.femaleUrethralSyndrome'),
    t('probable.fibromyalgia'),
    t('probable.gastrokineticDisturbance'),
    t('probable.goutyArthritis'),
    t('probable.hepatitisB'),
    t('probable.herpesZoster'),
    t('probable.hyperlipaemia'),
    t('probable.hypoOvarian'),
    t('probable.insomnia'),
    t('probable.labourPain'),
    t('probable.lactationDeficiency'),
    t('probable.maleSexualDysfunction'),
    t('probable.meniereDisease'),
    t('probable.neuralgia'),
    t('probable.neurodermatitis'),
    t('probable.obesity'),
    t('probable.opiumDependence'),
    t('probable.osteoarthritis'),
    t('probable.painDueToEndoscopy'),
    t('probable.painInThromboangiitis'),
    t('probable.polycysticOvarySyndrome'),
    t('probable.postExtubation'),
    t('probable.postoperativeConvalescence'),
    t('probable.premenstrualSyndrome'),
    t('probable.prostatitis'),
    t('probable.pruritus'),
    t('probable.radicularPain'),
    t('probable.raynaudSyndrome'),
    t('probable.recurrentLowerUrinaryTract'),
    t('probable.reflexSympatheticDystrophy'),
    t('probable.retentionOfUrine'),
    t('probable.schizophrenia'),
    t('probable.sialism'),
    t('probable.sjogrenSyndrome'),
    t('probable.soreThroat'),
    t('probable.spinePain'),
    t('probable.stiffNeck'),
    t('probable.temporomandibularJoint'),
    t('probable.tietzeSyndrome'),
    t('probable.tobaccoDependence'),
    t('probable.touretteSyndrome'),
    t('probable.ulcerativeColitis'),
    t('probable.urolithiasis'),
    t('probable.vascularDementia'),
    t('probable.whoopingCough')
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-[#f1f9f0]">
        <section className="max-w-6xl mx-auto px-5 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">{t('title')}</h1>
            <p className="text-gray-600 text-xl mb-4">{t('intro.p1')}</p>
            <p className="text-gray-600 text-xl">{t('intro.p2')}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('provenTitle')}</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{t('provenDescription')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              {provenConditions.map((condition, index) => (
                <li key={index} className="text-gray-700 text-lg bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">{t('probableTitle')}</h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{t('probableDescription')}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
              {probableConditions.map((condition, index) => (
                <li key={index} className="text-gray-700 text-lg bg-gray-50 p-3 rounded border-l-4 border-green-500">
                  {condition}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConditionsPage;
