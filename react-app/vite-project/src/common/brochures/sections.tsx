import { useTranslation } from 'react-i18next';

export type BrochureSectionId = 'intro' | 'fertility' | 'fibromyalgia' | 'lower-back-pain' | 'stop-smoking' | 'weight-loss';

const P: React.FC<{ k: string; d: string; className?: string }> = ({ k, d, className }) => {
  const { t } = useTranslation('brochures');
  return <p className={className}>{t(k, { defaultValue: d })}</p>;
};

const IntroSection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="intro" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.intro.title')}</h2>
      <P
        k="sections.intro.p1"
        d="Traditional acupuncture is based on ancient Chinese theories of the flow of Qi (pronounced Chee) – energy and Xue (blood) through distinct meridians or pathways that cover the body somewhat like the way nerves and blood vessels do. According to ancient theory, acupuncture allows Qi to flow to areas where Qi is deficient and away from areas where Qi is excessive. It is in this manner, that acupuncture regulates and restores the harmonious energetic balance of the body."
        className="text-gray-700 leading-relaxed mb-6"
      />
      <blockquote className="border-l-4 border-brand-primary pl-4 italic text-gray-700 mb-8">{t('sections.intro.quote')}</blockquote>

      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('sections.intro.whatIs')}</h2>
      <P
        k="sections.intro.p2"
        d="Acupuncture is the practice of inserting fine needles at specific points into the body and has been shown through the centuries as an effective method of treatment for various health problems. These points have been revealed, studied, and mapped by the Chinese over thousands of years. Electromagnetic research has also confirmed these points."
        className="text-gray-700 leading-relaxed mb-8"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('sections.intro.commonQuestions')}</h2>
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('sections.intro.needleDepth')}</h3>
      <P
        k="sections.intro.p3"
        d="The depth of insertion depends on several factors: the location of the points selected, the patient's size, age and condition, as well as, the acupuncturist's style or school. Needles are normally inserted 1/4 to 1 inch into the skin."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('sections.intro.doesItHurt')}</h3>
      <P
        k="sections.intro.p4"
        d="In Chinese, acupuncture is bu tong – translated into English – painless. Some people may categorize the sensation as a form of pain, yet if any sensation or discomfort is experienced, it is usually mild. Patients might feel some mild cramping, heaviness, distention, tingling or electric sensations around the area where the needles have been inserted or traveling up or down the affected energy pathway (or Meridian)."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{t('sections.intro.areNeedlesClean')}</h3>
      <P
        k="sections.intro.p5"
        d="Only sterilized, individually packaged, disposable needles are utilized. Needles are not saved and are not reused at a later date. This eliminates the possibility of transmitting diseases through the reuse of a potentially contaminated needle. Florida Law requires disposable Needles."
        className="text-gray-700 leading-relaxed mb-8"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.intro.conditions')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.lists.ent')}</h3>
          <P k="sections.intro.entDesc" d="Toothaches, earaches, sinus inflammation, nasal inflammation, etc." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.lists.respiratory')}</h3>
          <P k="sections.intro.respiratoryDesc" d="Such as uncomplicated bronchial asthma in children or adults." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.lists.gastro')}</h3>
          <P k="sections.intro.gastroDesc" d="Digestive tract problems, hiccups, inflammation of the stomach, chronic duodenal ulcers, inflammation of the colon, constipation, diarrhea, or even dysentery caused by certain bacteria." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.lists.eye')}</h3>
          <P k="sections.intro.eyeDesc" d="Inflammation of the conjunctiva, inflammation of the central retina, nearsightedness, and uncomplicated cataracts." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.lists.neuroMuscular')}</h3>
          <P k="sections.intro.neuroDesc" d="Headaches, migraines, certain facial paralysis or nerve pain, partial weakness after a stroke, inflammation of nerve endings, bed wetting, frozen shoulder, tennis elbow, sciatica, lower back pain, and even osteoarthritis." className="text-gray-700" />
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{t('sections.intro.whatToExpect')}</h2>
      <P
        k="sections.intro.p6"
        d="Following an acupuncture treatment, patients experience a sense of well being, relaxation, and often energized. As a sign of obtaining the vital energy, some patients may experience a slight sensation of soreness, numbness, distention or heaviness around the needle area. Patients should be comfortable and relaxed during treatment to attain the desired results."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.intro.p7"
        d="The reaction usually starts during the first four or five visits. As with any other medical treatment, not all cases can be cured. However, there is no harmful effect from the therapy in common practice. Therefore, patients who suffer from lingering or chronic diseases that haven't responded well to orthodox medicine intervention are particularly encouraged to try this promising Chinese art of healing."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('sections.intro.additionalMethods')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.methods.auricular')}</h3>
          <P k="sections.intro.auricularDesc" d="Auricular Acupuncture (ear Points), is used with body acupuncture as a means of drug and alcohol detoxification and withdrawal, weight control and relaxation promotion." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.methods.herbology')}</h3>
          <P k="sections.intro.herbologyDesc" d="Herbology is the preparation and use of all natural plants and minerals as prescribed medicine in classical and modern prescriptive formulas to treat many disorders and diseases. Like food, herbs affect blood and Qi disorders through nourishment and assimilation. We use prepacked Herbs and do not prepare them for each individual." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.methods.tuina')}</h3>
          <P k="sections.intro.tuinaDesc" d="Tuina is Traditional Chinese soft tissue massage and structural adjustment to treat deformity and chronic muscle disorder. Tuina treats tissues, bones, ligaments and tendons to enhance and regulate the flow of Qi, blood and fluids in the body." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.methods.dietary')}</h3>
          <P k="sections.intro.dietaryDesc" d="Dietary Medicine is recommended to treat disharmonies in the blood, fluids, digestive system and for post labor care using an energetic profile of foods." className="text-gray-700" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{t('sections.intro.methods.qigong')}</h3>
          <P k="sections.intro.qigongDesc" d="Musical Qi-Gong is also a positive healing power to influence and adjust the flow of blood, energizes the spirit and make the body resonate in harmony." className="text-gray-700" />
        </div>
      </div>

      <P
        k="sections.intro.note"
        d="NOTE: There are many obscure medical conditions that can benefit from Acupuncture and/or Traditional Chinese Medicine that are not listed above. We will be glad to give you a free consultation to see if Acupuncture can help you in your quest for better health without Prescription medications."
        className="text-gray-700 leading-relaxed mt-6"
      />
    </section>
  );
};

const FertilitySection: React.FC = () => {
  const { t } = useTranslation('brochures');
  return (
    <section id="fertility" className="bg-white rounded-xl shadow-lg p-8 md:p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('sections.fertility.title')}</h2>
      
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.fertility.ivfSupport')}</h3>
      <P
        k="sections.fertility.p1"
        d="If you are like many women, you have probably heard that acupuncture combined with In Vitro Fertilization (IVF) can help increase the chance of a successful pregnancy. Many women are having great results utilizing acupuncture to complement the IVF cycle. A recent study found acupuncture improves pregnancy success rate by 50% in women undergoing IVF. So how does this 3,000-year-old medicine actually help support IVF?"
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.fertility.tcmApproach')}</h3>
      <P
        k="sections.fertility.p2"
        d="According to Traditional Chinese Medicine, disease and malfunction in the body result from a blockage in the flow of vital Qi (energy) and Blood. By removing these blockages and restoring a smooth normal flow, the body is able to restore health and optimum organ function. Through the use of hair-thin needles and Chinese herbs, Acupuncture Physicians are able to find and remove these blockages of Qi and Blood, allowing tissues and organs to heal themselves."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.fertility.p3"
        d="Traditional Chinese Medicine treats the body as a whole. When a woman receives acupuncture care for fertility, her entire picture of health is taken into consideration. By restoring the smooth flow of Qi and Blood within the body, her general well-being will improve and she will respond better to the I.V.F. process."
        className="text-gray-700 leading-relaxed mb-6"
      />

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.fertility.researchFindings')}</h3>
      <P
        k="sections.fertility.p4"
        d="Researchers from The Center for Reproductive Medicine and Infertility, Weill Medical College of Cornell University, New York, NY have found that acupuncture helps:"
        className="text-gray-700 leading-relaxed mb-4"
      />
      <ul className="list-disc pl-6 mb-6">
        <li className="text-gray-700 mb-2">{t('sections.fertility.researchList1')}</li>
        <li className="text-gray-700 mb-2">{t('sections.fertility.researchList2')}</li>
        <li className="text-gray-700 mb-2">{t('sections.fertility.researchList3')}</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('sections.fertility.benefits')}</h3>
      <P
        k="sections.fertility.p5"
        d="Researchers determined stress to be a key factor in infertility. Acupuncture appears to reduce stress by releasing endorphins in the brain. Endorphins are chemicals that the body releases that suppress pain naturally, as well as affect hormones that influence the menstrual cycle. Acupuncture also influences levels of FSH and LH and has been found to regulate the communication between the brain and ovaries, known as the hypothalamic-pituitary-ovarian axis."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.fertility.p6"
        d="Chinese herbal remedies and acupuncture aim at promoting the growth and maturation of ovarian follicles as well as induce ovulation. When used in conjunction with IVF Chinese medicine improves the quality of follicles. Endometrial thickness and uterine artery blood flow are important for implantation of human embryos during the transfer stage of IVF. With its central effect on the nervous system, acupuncture may contribute by dilating uterine arteries and blood vessels, thereby increasing blood flow to the endometrium. With a healthy endometrial lining, chances of a stable implantation and healthy pregnancy are increased."
        className="text-gray-700 leading-relaxed mb-4"
      />
      <P
        k="sections.fertility.p7"
        d="Acupuncture in non-toxic, affordable and is increasingly being used as a successful complement to In Vitro Fertilization."
        className="text-gray-700 leading-relaxed"
      />
    </section>
  );
};

export const renderBrochureSection = (sectionId: BrochureSectionId): React.ReactElement => {
  switch (sectionId) {
    case 'intro':
      return <IntroSection />;
    case 'fertility':
      return <FertilitySection />;
    case 'fibromyalgia':
      return <div>Fibromyalgia section - TODO</div>;
    case 'lower-back-pain':
      return <div>Lower back pain section - TODO</div>;
    case 'stop-smoking':
      return <div>Stop smoking section - TODO</div>;
    case 'weight-loss':
      return <div>Weight loss section - TODO</div>;
    default:
      return <IntroSection />;
  }
};
