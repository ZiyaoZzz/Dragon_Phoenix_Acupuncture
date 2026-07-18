import React from 'react';
import { useTranslation } from 'react-i18next';

const P: React.FC<{ k: string; d: string; className?: string }> = ({ k, d, className }) => {
  const { t } = useTranslation('brochures');
  return <p className={className}>{t(k, { defaultValue: d })}</p>;
};

export const LowerBackPainSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="lower-back-pain" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.lowerBackPain.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.overview')}</h3>
      <P
        k="sections.lowerBackPain.p1"
        d="More and more Western doctors are now considering acupuncture treatment to relieve both acute and chronic lower back pain. Most acupuncturists here in the United States use a combination of acupuncture, massage, Chinese herbs (either internally administered or applied topically), Chinese diet therapy, and various types of Chinese exercise therapy. Any one of these forms of treatment can significantly improve, and often help manage, lower back pain."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.summaryHeading')}</h3>
      <P
        k="sections.lowerBackPain.p2"
        d="Lower back pain is one of the most common complaints. It accounts for millions of lost hours from work and even more spent on treatment and medication. It can either be acute (such as an acute lumbar sprain) or chronic (such as degenerative disc disease), and can range from mildly annoying to physically and emotionally debilitating."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.researchHeading')}</h3>
      <P
        k="sections.lowerBackPain.p3"
        d="In 2017, the American College of Physicians (ACP) published a clinical practice guideline recommending that patients with chronic low back pain try non-drug approaches — including acupuncture, exercise, and multidisciplinary rehabilitation — before turning to medication. The guideline was based on a systematic review of randomized controlled trials and found moderate-quality evidence that acupuncture improves pain, with effects on function ranging from none to moderate depending on what it was compared against."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.lowerBackPain.p4"
        d="More recently, a 2025 study led by Kaiser Permanente researchers and funded by the National Institutes of Health found that acupuncture is a safe and effective treatment for older adults with persistent (chronic) low back pain — one of the more rigorous trials of its kind in this age group."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.treatmentHeading')}</h3>
      <P
        k="sections.lowerBackPain.p5"
        d="At Dragon Phoenix Acupuncture, treatment for lower back pain typically combines acupuncture with Tuina massage, moxibustion or cupping, and Chinese herbal support as needed, addressing both acute flare-ups (such as an acute lumbar sprain) and chronic conditions like degenerative disc disease or sciatica."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.expectHeading')}</h3>
      <P
        k="sections.lowerBackPain.p6"
        d="Treatment length depends on whether the pain is acute or chronic. Acute lumbar sprains often respond within a handful of sessions, while chronic conditions typically call for a longer course of 10–15 treatments, followed by maintenance visits as needed."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.lowerBackPain.sourceNote"
        d="Sources: American College of Physicians, 2017 Clinical Practice Guideline (Annals of Internal Medicine); Kaiser Permanente Washington Health Research Institute / National Institutes of Health, 2025."
      />
    </section>
  );
};

export const StopSmokingSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="stop-smoking" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.stopSmoking.title')}</h2>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.stopSmoking.problems')}</h3>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.stopSmoking.miscarriage')}</h4>
      <P
        k="sections.stopSmoking.p1"
        d="Smoking interferes with the supply of oxygen and nutrients to the fetus."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.stopSmoking.p2"
        d="Carbon monoxide inhaled from smoking is passed through the bloodstream and may cause miscarriage, premature birth or even infant death."
        className="text-gray-700 leading-relaxed mb-4"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.stopSmoking.skinDamage')}</h4>
      <P
        k="sections.stopSmoking.p3"
        d="One of the most easily recognizable signs of a heavy smoker is the 'smoker's face'. These people have a wrinkled, tired and haggard appearance."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.stopSmoking.p4"
        d="This wrinkling and other facial damage is due to the skin's inability to get the oxygen it needs from the bloodstream to maintain its elasticity."
        className="text-gray-700 leading-relaxed mb-4"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.stopSmoking.radioactivity')}</h4>
      <P
        k="sections.stopSmoking.p5"
        d="A person who smokes at least one pack of cigarettes a day receives a radiation dose equivalent to 300 chest X-rays per year."
        className="text-gray-700 leading-relaxed mb-4"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.stopSmoking.nutritional')}</h4>
      <P
        k="sections.stopSmoking.p6"
        d="Nicotine deprives the smoker's body of much-needed vitamins and minerals after years of smoking."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.stopSmoking.health')}</h3>
      <P
        k="sections.stopSmoking.p7"
        d="It is well known that smokers have a significantly increased chance of developing many types of diseases; even death may be caused by smoking. Over the years, smoking has been linked to lung cancer, chronic lung disease, cardiovascular disease, angina and arteriosclerosis as well as many other health disorders."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p8"
        d="This year, smoking will cause approximately 300,000 American deaths – six times the number of deaths in the 10-year Vietnam War."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p9"
        d="Cigarette smoke contains many toxic chemicals. Carbon monoxide deprives the blood of oxygen leading to high blood pressure. Nicotine is an addictive substance that raises blood pressure. Both carbon monoxide and nicotine can lead to heart attacks and strokes. Tar contains cancer-causing chemicals that accumulate in lung tissue."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p10"
        d="Strokes and fatal heart attacks occur more easily in smokers than in non-smokers"
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.stopSmoking.help')}</h3>
      <P
        k="sections.stopSmoking.p11"
        d="Electroacupuncture combined with stress reduction, auricular acupuncture (ear acupuncture) and detoxification will help smokers quit. Dragon Phoenix Acupuncture's electroacupuncture and auricular acupuncture program can effectively eliminate the habitual desire to smoke."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p12"
        d="Research on acupuncture for smoking cessation is genuinely mixed. A Cochrane systematic review found that acupuncture-based techniques appeared more effective than sham (placebo) acupuncture in the short term, but did not show a clear long-term quitting effect, and acupuncture alone was found to be less effective than nicotine replacement therapies such as gum or patches. We are upfront about this with patients: acupuncture works best as one part of a quit-smoking plan — often alongside, not instead of, other evidence-based approaches — and many patients find it a helpful, medication-free way to manage cravings and withdrawal symptoms."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p13"
        d="One proposed reason acupuncture helps with cravings is that treatment induces endorphins, which are associated with relaxation, both mentally and physically, in addition to a feeling of overall well-being."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p14"
        d="For patients concerned about weight gain while quitting smoking, Dragon Phoenix Acupuncture now offers weight control acupuncture along with smoking cessation treatment at no additional cost."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.stopSmoking.whyCant')}</h3>
      <P
        k="sections.stopSmoking.p15"
        d="Over 29 million Americans have already quit smoking. People who smoke have everything to gain and nothing to lose by giving up the habit."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p16"
        d="The choice is yours. Do you want to quit smoking? Or would you rather risk cancer, heart or lung disease or even death? Take the first step today and make an appointment."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p17"
        d="If you smoke - please try to quit"
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p18"
        d="Advertising agencies and tobacco companies show smokers happily puffing away in natural settings. These ads are lies."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p19"
        d="If smokers could simply give up the habit, they would be better off."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p20"
        d="Over the years, millions of people have tried to quit smoking. Only 3% succeed without professional help."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p21"
        d="The desire to quit is good, yet many people make the mistake of confusing good intentions or wishes with willpower. The inability to quit has little to do with willpower and more to do with following a plan that helps smokers successfully overcome tobacco addiction."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p22"
        d="No matter how convincing the facts against smoking are – smokers need a plan to help them quit."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p23"
        d="Quit forever with no side effects, withdrawal symptoms or weight gain."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p24"
        d="Dragon Phoenix Acupuncture has a unique, effective plan that has helped hundreds of smokers quit."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.stopSmoking.sourceNote"
        d='Source: Cochrane systematic review, "Acupuncture and related interventions for smoking cessation."'
      />
    </section>
  );
};

export const WeightLossSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="weight-loss" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.weightLoss.title')}</h2>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.whyLose')}</h3>
      <P
        k="sections.weightLoss.p1"
        d="Overweight or obesity is a proven medical and even social problem. Thousands of people are unhappy because of their weight. Many are discriminated against in society. Obesity is:"
        className="text-gray-700 leading-relaxed mb-4"
      />
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p2')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p3')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p4')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p5')}</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.health')}</h3>
      <P
        k="sections.weightLoss.p6"
        d="Obesity is a gateway to a host of serious medical conditions such as high blood pressure, heart disease, heart attacks, arthritis, gallbladder disease and diabetes. People who are 50 pounds or more overweight have an increased risk of death from heart problems; stroke increases by about 5%."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.sensible')}</h3>
      <P
        k="sections.weightLoss.p7"
        d="Weight loss is difficult and involves not only the doctor but the patient as well. Dragon Phoenix Acupuncture's personalized weight management program, if strictly adhered to, provides a reasonable solution. Patients cannot expect to lose weight and improve their health if they continue poor eating habits and wrong lifestyle. To lose 20-40 pounds, approximately 30-90 days of treatment is needed. Once started, patients must stick to it to reach their goal."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p8"
        d="It is strongly recommended that patients reserve and spend time for themselves, besides becoming active."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.goals')}</h3>
      <ul className="list-disc pl-6 mb-6">
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p9')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p10')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p11')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p12')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p13')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p14')}</li>
        <li className="text-gray-700 mb-2">{t('sections.weightLoss.p15')}</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.obesityAndAcupuncture')}</h3>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.weightLoss.whatIs')}</h4>
      <P
        k="sections.weightLoss.p16"
        d="Today's most common and preventable health problem in America is obesity. In the United States, one in every four adults is obese. Recently, Science magazine stated that Americans are 30% heavier than their ideal weight. Unfortunately, obesity is affecting children and young adults in increasing numbers. Obesity is not just about looking bad; it is a disease that can lead to major health problems."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p17"
        d="The body's normal digestive, metabolic and hormonal activities are severely impaired by weight gain. Obesity may be caused by side effects of prescription drugs, mental and physical illness, aging or lifestyle (eating the wrong foods at the wrong time, lack of exercise or improper digestion). Poor diet (too much candy, greasy foods and red meat) reduces the digestive system's function of cleaning body toxins, which may lead to body poisoning. Long-term effects may lead to loss of interest in work, depression, irritability, nervousness, bad breath, body odor, coated tongue, sleep disorders, headaches, chest pain, shortness of breath, dizziness, vascular spasms (cold hands and/or feet), fatigue and excessive sweating. Other problems caused by obesity are fat-related additional diseases, poor posture and premature death."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p18"
        d="Acupuncture, auricular acupuncture (ear acupuncture) and herbs are the best defense against obesity and normalizing body functions. According to Traditional Chinese Medicine, obesity is due to insufficient biological energy and spleen and stomach dampness. By sticking to the program, patients will not experience the traditional 'yo-yo' syndrome and will continue to lose weight."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.researchHeading')}</h3>
      <P
        k="sections.weightLoss.p35"
        d="A systematic review of 8 randomized controlled trials (403 participants) found that acupuncture led to modest average reductions of 1.85 kg in body weight and 1.0 kg/m² in BMI compared with sham acupuncture. A larger review of 23 trials (1,808 participants) similarly found acupuncture more effective than sham treatment or no treatment for weight reduction, with or without lifestyle changes."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p36"
        d="These effects are real but modest, and reviewers note that many of the underlying studies have clinical heterogeneity and methodological limitations — acupuncture is best thought of as a potential support for a weight-management plan that also includes diet and exercise, not a stand-alone solution."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.program')}</h3>
      <P
        k="sections.weightLoss.p19"
        d="An effective weight management program includes the following:"
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p20"
        d="A review of the patient's current condition, past medical history, eating habits and lifestyle. Based on this, an appropriate treatment plan is formulated."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p21"
        d="Electroacupuncture, auricular acupuncture and massage therapy are essential. Nutritional supplements including herbs are prescribed to assist in weight loss and improve the patient's overall health."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p22"
        d="Patients must religiously use ear beads to maintain proper therapeutic effects and improve the willpower not to snack."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p23"
        d="Patients are responsible for changing their daily eating habits by following the recommended food guide listed below. When dining out, patients must only order low-fat or vegetable dishes."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p24"
        d="Patients must begin a light exercise program with at least three moderate activities per week (i.e. brisk walking, bicycling, recreational sports, aerobic dancing, etc.). Relaxation is the key to success. Physical activity should become part of the patient's daily routine."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p25"
        d="Intestinal cleansing, detoxification and strategic fasting are essential (except for diabetics). Special abdominal treatments are important for improving overall health as well as weight loss."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.weightLoss.p26"
        d="Patients must stick to the program to be successful."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.weightLoss.foodGuide')}</h3>
      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.weightLoss.avoid')}</h4>
      <P
        k="sections.weightLoss.p27"
        d="Candy/Sweets/Sugar: Various candies, chocolate, baked goods, ice cream, chocolate milk, milkshakes, etc..."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p28"
        d="Red Meat/Fat: Beef, pork, duck, hamburgers, meat patties, bacon, ham, sausage, ribs, butter, cheese, lard, margarine and hydrogenated fats and oils."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p29"
        d="Fried Foods/Nuts: Peanuts, cashews, almonds, sunflower seeds, chips, French fries, fried meat, fried seafood, salted fish and salted meat."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p30"
        d="Beverages: Alcoholic beverages, sweet soft drinks."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.weightLoss.eat')}</h4>
      <P
        k="sections.weightLoss.p31"
        d="High Fiber Foods: 2 cups or more vegetables daily (bean sprouts, soybean sprouts, alfalfa sprouts, asparagus, tomatoes, lettuce, snow peas, seaweed, broccoli, green beans, Chinese winter vegetables, cabbage, Chinese cabbage, bamboo shoots, scallions, cucumbers, radishes, beets, spinach, carrots and celery)"
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p32"
        d="High Protein Foods: Tofu, chicken, fish or turkey (steamed, boiled, grilled or barbecued), boiled eggs, rice noodles, stir-fried Oriental foods, low-fat milk (1-2 cups daily), low-fat yogurt, cottage cheese and buttermilk."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p33"
        d="Natural Grains: Brown rice (steamed or boiled), rice noodles, barley, red beans and black beans."
        className="text-gray-700 leading-relaxed mb-2"
      />
      <P
        k="sections.weightLoss.p34"
        d="Fruits: 1 grapefruit, apple, plum, papaya daily. Avoid bananas, grapes, pineapple and cantaloupe."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.weightLoss.sourceNote"
        d="Sources: systematic reviews and meta-analyses of acupuncture for weight management, published in peer-reviewed journals including Frontiers in Medicine and the Journal of Pain Research."
      />
    </section>
  );
};

const SourceNote: React.FC<{ k: string; d: string }> = ({ k, d }) => (
  <P k={k} d={d} className="text-sm text-gray-600 italic mt-6 pt-4 border-t border-gray-200" />
);

export const MigraineSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="migraine" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.migraine.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.migraine.overview')}</h3>
      <P
        k="sections.migraine.p1"
        d="Migraine is one of the most common neurological conditions in the United States, affecting more than 40 million Americans — about 1 in 4 households has someone who lives with migraine. It typically causes throbbing, often one-sided head pain along with nausea and sensitivity to light and sound, and can last anywhere from a few hours to several days."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.migraine.p2"
        d="For many people, migraine is more than an occasional headache — it is a recurring condition that can interfere with work, family life, and daily activities. Frequent use of pain medication can also lead to its own complications, which is why many patients look for complementary approaches like acupuncture to reduce how often migraines occur."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.migraine.causesHeading')}</h3>
      <P
        k="sections.migraine.p3"
        d="In Traditional Chinese Medicine, headaches and migraines are commonly associated with an imbalance in the flow of Qi and Blood, often described as Liver Yang rising, Liver Qi stagnation, or invasion of Wind — patterns that can be aggravated by stress, poor sleep, and diet. Western medicine points to triggers such as hormonal changes, stress, certain foods, and sleep disruption. Acupuncture addresses both pictures: calming the nervous system while also treating the underlying pattern of imbalance."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.migraine.researchHeading')}</h3>
      <P
        k="sections.migraine.p4"
        d="The National Center for Complementary and Integrative Health (NCCIH), part of the National Institutes of Health, reports moderate-quality evidence that acupuncture can reduce how often migraines occur, based on a 2016 review of 22 clinical trials involving nearly 5,000 people."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.migraine.p5"
        d="A 2020 review comparing acupuncture with medications commonly used to prevent migraine found acupuncture was slightly more effective, and patients receiving acupuncture were far less likely to drop out of treatment due to side effects than those taking preventive medication."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.migraine.treatmentHeading')}</h3>
      <P
        k="sections.migraine.p6"
        d="At Dragon Phoenix Acupuncture, migraine treatment typically combines body acupuncture with auricular (ear) acupuncture to calm the nervous system, along with points selected to address the individual pattern behind each patient's headaches. Cupping or Tuina may be added for patients whose migraines are linked to neck and shoulder tension."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.migraine.expectHeading')}</h3>
      <P
        k="sections.migraine.p7"
        d="Most patients begin with acupuncture sessions once or twice a week. Because migraine is a recurring condition, a course of 8–10 treatments is often recommended before reassessing frequency and severity, and many patients continue with maintenance visits during high-stress seasons."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.migraine.sourceNote"
        d="Sources: National Center for Complementary and Integrative Health (NCCIH), National Institutes of Health."
      />
    </section>
  );
};

export const JointPainSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="joint-pain" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.jointPain.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.overview')}</h3>
      <P
        k="sections.jointPain.p1"
        d="Osteoarthritis is the most common form of arthritis in the United States, affecting an estimated 32.5 million adults according to the Centers for Disease Control and Prevention. It develops when the cartilage that cushions joints — most often the knees, hips, hands, and spine — gradually wears down, leading to pain, stiffness, and reduced range of motion."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.symptomsHeading')}</h3>
      <P
        k="sections.jointPain.p2"
        d="Joint pain from osteoarthritis often worsens with activity and improves with rest in the early stages, but can become more constant over time. Many patients also notice stiffness after sitting still, swelling around the joint, and a grinding or creaking sensation with movement."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.causesHeading')}</h3>
      <P
        k="sections.jointPain.p3"
        d="Traditional Chinese Medicine describes joint pain as a form of Bi syndrome — an obstruction of Qi and Blood in and around the joints, often brought on by the invasion of Wind, Cold, or Dampness, or by a gradual decline in Kidney and Liver energy that naturally occurs with age. Acupuncture and Tuina work to restore circulation to the affected joint and relieve the obstruction causing pain and stiffness."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.researchHeading')}</h3>
      <P
        k="sections.jointPain.p4"
        d="A 2018 research review found that acupuncture was more effective than no treatment across 10 studies (2,413 participants), and more effective than sham (placebo) acupuncture across 9 studies (2,376 participants), for osteoarthritis pain."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.jointPain.p5"
        d="In 2019, the American College of Rheumatology and the Arthritis Foundation issued a clinical practice guideline that conditionally recommends acupuncture for arthritis of the hand, hip, or knee — with the strongest evidence for knee osteoarthritis specifically."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.treatmentHeading')}</h3>
      <P
        k="sections.jointPain.p6"
        d="Dragon Phoenix Acupuncture treats joint pain with a combination of acupuncture and electroacupuncture directly at and around the affected joint, along with moxibustion or cupping to improve local circulation and Tuina massage to relax surrounding muscles and improve mobility."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.jointPain.expectHeading')}</h3>
      <P
        k="sections.jointPain.p7"
        d="Because osteoarthritis is a chronic, progressive condition, treatment is usually structured as an initial series of 10–15 sessions to reduce pain and improve mobility, followed by periodic maintenance visits to help manage symptoms long-term."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.jointPain.sourceNote"
        d="Sources: Centers for Disease Control and Prevention (CDC); American College of Rheumatology and Arthritis Foundation, 2019 Clinical Practice Guideline."
      />
    </section>
  );
};

export const InsomniaSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="insomnia" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.insomnia.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.overview')}</h3>
      <P
        k="sections.insomnia.p1"
        d="Sleep problems are widespread in the United States — the CDC reports that roughly 1 in 3 adults regularly get less sleep than recommended, and a large share of adults report symptoms of chronic insomnia, including trouble falling asleep, waking frequently during the night, or waking too early."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.impactHeading')}</h3>
      <P
        k="sections.insomnia.p2"
        d="Poor sleep does not stay contained to the night — it affects mood, concentration, and immune function, and can worsen existing pain conditions and cardiovascular health over time. Many patients try sleep medication first, but are looking for an approach without next-day grogginess or dependency."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.causesHeading')}</h3>
      <P
        k="sections.insomnia.p3"
        d="In Traditional Chinese Medicine, insomnia is generally linked to an imbalance among the Heart, Spleen, Liver, and Kidney systems — commonly described as Heart-Kidney disharmony, Blood deficiency failing to nourish the Shen (spirit/mind), or excess Heat disturbing the mind at night. Treatment is tailored to which pattern is present, rather than treating all insomnia the same way."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.researchHeading')}</h3>
      <P
        k="sections.insomnia.p4"
        d="Multiple systematic reviews, including a 2025 meta-analysis of randomized controlled trials, found that acupuncture significantly improves subjective sleep quality — measured by tools such as the Pittsburgh Sleep Quality Index — compared with sham acupuncture, and is also associated with improvements in anxiety, depression, and fatigue that commonly accompany insomnia."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.insomnia.p5"
        d="Researchers note that acupuncture's effect on objective sleep measures, such as data from sleep-tracking devices, is less consistently proven than its effect on how rested patients feel — an important distinction we discuss with patients when setting expectations. Across the available studies, acupuncture has shown a strong safety profile with minimal side effects."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.treatmentHeading')}</h3>
      <P
        k="sections.insomnia.p6"
        d="At Dragon Phoenix Acupuncture, insomnia treatment combines body acupuncture points selected to calm the Shen and address the underlying pattern (such as nourishing Blood or clearing excess Heat), often paired with auricular (ear) acupuncture, which many patients find especially calming."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.insomnia.expectHeading')}</h3>
      <P
        k="sections.insomnia.p7"
        d="Most patients notice improved sleep onset and fewer awakenings within the first few sessions, though a full course of 8–10 treatments is typically recommended to build a lasting improvement, alongside simple sleep-hygiene guidance."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.insomnia.sourceNote"
        d="Sources: Centers for Disease Control and Prevention (CDC); peer-reviewed systematic reviews and meta-analyses on acupuncture for chronic insomnia disorder."
      />
    </section>
  );
};

export const AnxietySection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="anxiety" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.anxiety.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.overview')}</h3>
      <P
        k="sections.anxiety.p1"
        d="Stress and anxiety are among the fastest-growing health concerns in the United States. CDC survey data shows the share of young adults reporting depression symptoms rose from 16.4% to 25.0% between 2019 and 2023, and stress-related complaints — tension, racing thoughts, trouble unwinding — are one of the most common reasons patients seek acupuncture."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.symptomsHeading')}</h3>
      <P
        k="sections.anxiety.p2"
        d="Chronic stress and anxiety can show up as more than worry — many patients also experience muscle tension (especially in the neck and shoulders), disrupted sleep, digestive upset, fatigue, and a general sense of being unable to relax."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.causesHeading')}</h3>
      <P
        k="sections.anxiety.p3"
        d="Traditional Chinese Medicine most often links stress and anxiety to Liver Qi stagnation and a disturbance of the Shen (spirit/mind) housed in the Heart. When Qi does not flow smoothly, patients commonly experience the tightness, irritability, and racing thoughts associated with stress."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.researchHeading')}</h3>
      <P
        k="sections.anxiety.p4"
        d="Research on acupuncture specifically for anxiety and stress is still developing compared to research on pain conditions, but studies point to a plausible mechanism: acupuncture has been shown to trigger the release of endorphins and to help regulate the body's stress-response (HPA axis) activity, which may explain why many patients report feeling calmer and more relaxed after treatment."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.anxiety.p5"
        d="Acupuncture is best used as a complementary approach alongside — not a replacement for — care from your primary care physician or a licensed mental health provider, particularly for anxiety that is persistent, severe, or affecting daily functioning."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.treatmentHeading')}</h3>
      <P
        k="sections.anxiety.p6"
        d="Dragon Phoenix Acupuncture's approach to stress and anxiety combines body acupuncture to release Liver Qi stagnation with auricular (ear) acupuncture, a protocol widely used for relaxation and stress reduction, sometimes paired with Tuina for patients carrying tension in the neck and shoulders."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.anxiety.expectHeading')}</h3>
      <P
        k="sections.anxiety.p7"
        d="Many patients notice a sense of calm during and immediately after their first session. For lasting change, a series of weekly treatments is typically recommended, and many patients continue with periodic visits during particularly stressful periods."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.anxiety.sourceNote"
        d="This information is educational and not a substitute for medical or mental health advice. If you are experiencing severe anxiety, please also consult your physician or a licensed mental health provider."
      />
    </section>
  );
};

export const MenopauseSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="menopause" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.menopause.title')}</h2>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.overview')}</h3>
      <P
        k="sections.menopause.p1"
        d="Menopause is a natural life stage every woman eventually goes through — roughly 6,000 women in the United States reach menopause every day, about 1.3 million a year. The years leading up to and following menopause, known as perimenopause, often bring a range of physical and emotional symptoms as hormone levels shift."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.symptomsHeading')}</h3>
      <P
        k="sections.menopause.p2"
        d="Vasomotor symptoms are the most common complaint: surveys find that about 81% of menopausal women experience hot flashes and 80% experience night sweats. Sleep disturbances affect 70–80% of women during this transition, and joint or muscular discomfort affects roughly two-thirds. Despite how common these symptoms are, many women never discuss them with a healthcare provider or seek treatment."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.causesHeading')}</h3>
      <P
        k="sections.menopause.p3"
        d="In Traditional Chinese Medicine, menopause is understood as the natural decline of Kidney essence (Tian Gui) that occurs with age. As Kidney Yin declines, it can no longer balance Yang, leading to what is described as empty heat rising — the pattern most closely associated with hot flashes and night sweats. Liver Qi stagnation is often involved as well, contributing to the irritability, mood swings, and sleep disruption many women experience during this transition."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.researchHeading')}</h3>
      <P
        k="sections.menopause.p4"
        d="A Cochrane systematic review of 16 randomized controlled trials involving 1,155 women found that acupuncture reduced the frequency and severity of hot flashes, and improved quality of life, compared with no treatment or being placed on a waiting list."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.menopause.p5"
        d="The same review found acupuncture's advantage over sham (placebo) acupuncture was less clear, meaning some of the benefit may come from factors beyond the specific acupuncture points used. A separate 2018 systematic review supported by the North American Menopause Society concluded that acupuncture meaningfully reduces hot flash frequency and severity, with effects that persist over time."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.treatmentHeading')}</h3>
      <P
        k="sections.menopause.p6"
        d="At Dragon Phoenix Acupuncture, treatment for menopausal symptoms focuses on nourishing Kidney Yin and calming empty heat, with points selected to also address Liver Qi stagnation when mood or sleep symptoms are prominent. Auricular (ear) acupuncture and Chinese herbal support may be added depending on each patient's presentation."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.menopause.expectHeading')}</h3>
      <P
        k="sections.menopause.p7"
        d="Many patients notice a reduction in hot flash frequency and improved sleep within the first several sessions. Because menopause is a multi-year transition, an initial course of 8–10 treatments is typically recommended, followed by periodic visits to manage symptoms as they change over time."
        className="text-gray-700 leading-relaxed"
      />

      <SourceNote
        k="sections.menopause.sourceNote"
        d="Sources: Cochrane systematic review of acupuncture for menopausal hot flushes; 2018 systematic review supported by the North American Menopause Society (NAMS)."
      />
    </section>
  );
};
