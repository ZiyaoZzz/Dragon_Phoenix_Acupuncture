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
      
      <P
        k="sections.lowerBackPain.p1"
        d="More and more Western doctors are now considering acupuncture treatment to relieve both acute and chronic lower back pain. Most acupuncturists here in the United States use a combination of acupuncture, massage, Chinese herbs (either internally administered or applied topically), Chinese diet therapy, and various types of Chinese exercise therapy. Anyone of these forms of treatment can significantly improve or even cure lower back pain."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.research')}</h3>
      <P
        k="sections.lowerBackPain.p2"
        d="Qiu Wan-Xing, in Zhe Jiang Zhong Yi Za Zhi (Zhejiang Journal of Chinese Medicine – 1993), studied twenty patients with acute lumbar sprain with a formula first recorded in Chinese medical literature in 200 AD. Six patients were cured in 3 days; the remaining fourteen were cured in less than 6 days. When combined with other treatments, Chinese methods provide one of the best and most effective treatment protocols available in the world today."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.summary')}</h3>
      <P
        k="sections.lowerBackPain.p3"
        d="Lower back pain is one of the most common complaints. It accounts for millions of lost hours from work and even more spent on treatment and medication."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.lowerBackPain.p4"
        d="Lower back pain can either be acute (i.e. Acute lumbar sprain) or chronic (i.e. Chronic degenerative disc disease). It can be annoying or irritating or can produce unbearable physical and emotional suffering."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.lowerBackPain.p5"
        d="Acupuncture and its adjunctive therapies can indeed treat both acute and chronic back pain, including sciatica, successfully."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.insight')}</h3>
      <P
        k="sections.lowerBackPain.p6"
        d="The following studies were conducted in China in the early 1990s, showing the success rate of acupuncture treatment for lower back pain."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.generalFindings')}</h4>
      <P
        k="sections.lowerBackPain.p7"
        d="Wang Wen-Yuan et al., in Beijing Zhong Yi (Beijing Chinese Medicine – 1993), studied 5,461 patients with neck, shoulder, lower back and knee pain. The patients studied were between the ages of 28-85; 55% were male, 45% were female. Of these, 215 patients had acute lumbar sprain, 186 patients had sciatica. Patients received acupuncture treatment once daily for a total of ten treatments. Overall, 76% of the patients were cured, 97% of the patients showed significant improvement."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.acuteFindings')}</h4>
      <P
        k="sections.lowerBackPain.p8"
        d="Shu Hong-Wen, in Shanghai Zhen Jiu Za Zhi (Shanghai Acupuncture Journal – 1994), studied 129 patients with acute lumbar sprain (ages 19-82). Most patients had been ill for periods ranging from two hours to fifteen days, with an average of three days. Patients were treated with acupuncture needles at a single point. A control group was treated with needles at several points. Both groups of patients were either completely cured or greatly improved:"
        className="text-gray-700 leading-relaxed mb-4"
      />
      
      <div className="ml-6 mb-4">
        <h5 className="text-lg font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.p9')}</h5>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p10')}</li>
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p11')}</li>
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p12')}</li>
        </ul>
        <P
          k="sections.lowerBackPain.p13"
          d="Overall, this group had 114 patients cured, with a success rate of 88%."
          className="text-gray-700 mb-4"
        />
        
        <h5 className="text-lg font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.p14')}</h5>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p15')}</li>
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p16')}</li>
          <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p17')}</li>
        </ul>
      </div>

      <P
        k="sections.lowerBackPain.p18"
        d="Kan Jin-Qi et al., in Shanghai Zhen Jiu Za Zhi (Shanghai Acupuncture Journal – 1994), conducted another study that further supported the success rate of the first study. Jin-Qi treated 130 patients with acute lower back pain (ages 27-82). Patients had been ill for periods ranging from a few hours to seven days. Of these, 110 patients were cured after one treatment, with a success rate of 85%. Meanwhile, the remaining 20 patients were cured after two treatments."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.degenerative')}</h4>
      <P
        k="sections.lowerBackPain.p19"
        d="Guo Jian-Hua, in Jiang Su Zhong Yi (Jiangsu Chinese Medicine – 1994), reported treating 78 patients with disc protrusion using a combination of acupuncture, massage, heat therapy and acupoint pressure:"
        className="text-gray-700 leading-relaxed mb-4"
      />
      <ul className="list-disc pl-6 mb-4">
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p20')}</li>
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p21')}</li>
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p22')}</li>
      </ul>

      <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('sections.lowerBackPain.protrusion')}</h4>
      <P
        k="sections.lowerBackPain.p23"
        d="Wu Shi-Qian, in Tian Jin Zhong Yi (Tianjin Chinese Medicine – 1994), treated 50 patients with lumbar disc protrusion (ages 30-60) with acupuncture. Patients were treated daily for ten days, with 4-6 points per treatment, for a total of one course or cycle of treatment. Patients typically received three complete courses or cycles of treatment."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <ul className="list-disc pl-6 mb-6">
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p24')}</li>
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p25')}</li>
        <li className="text-gray-700 mb-1">{t('sections.lowerBackPain.p26')}</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.lowerBackPain.canHelp')}</h3>
      <P
        k="sections.lowerBackPain.p5"
        d="Acupuncture and its adjunctive therapies can indeed treat both acute and chronic back pain, including sciatica, successfully."
        className="text-gray-700 leading-relaxed"
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
        d="90-95% quit smoking after 3 or 4 consecutive treatments."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.stopSmoking.p13"
        d="The effectiveness of this program, therefore the most important aspect is the treatment induces endorphins, which are key to mental and physical relaxation, as well as a general sense of well-being."
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
    </section>
  );
};
