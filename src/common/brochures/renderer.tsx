import React from 'react';
import type { BrochureSectionId } from './types';
import { IntroSection, FertilitySection, FibromyalgiaSection } from './sections';
import {
  LowerBackPainSection,
  StopSmokingSection,
  WeightLossSection,
  MigraineSection,
  JointPainSection,
  InsomniaSection,
  AnxietySection,
  MenopauseSection,
} from './additional-sections';

export const renderBrochureSection = (sectionId: BrochureSectionId): React.ReactElement => {
  switch (sectionId) {
    case 'intro':
      return <IntroSection />;
    case 'fertility':
      return <FertilitySection />;
    case 'fibromyalgia':
      return <FibromyalgiaSection />;
    case 'lower-back-pain':
      return <LowerBackPainSection />;
    case 'stop-smoking':
      return <StopSmokingSection />;
    case 'weight-loss':
      return <WeightLossSection />;
    case 'migraine':
      return <MigraineSection />;
    case 'joint-pain':
      return <JointPainSection />;
    case 'insomnia':
      return <InsomniaSection />;
    case 'anxiety':
      return <AnxietySection />;
    case 'menopause':
      return <MenopauseSection />;
    default:
      return <IntroSection />;
  }
};
