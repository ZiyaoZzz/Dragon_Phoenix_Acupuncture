import React from 'react';
import type { BrochureSectionId } from './types';
import { IntroSection, FertilitySection, FibromyalgiaSection } from './sections';
import {
  LowerBackPainSection,
  SciaticaSection,
  StopSmokingSection,
  WeightLossSection,
  MigraineSection,
  JointPainSection,
  SportsInjuriesSection,
  InsomniaSection,
  AnxietySection,
  MenopauseSection,
  DryEyeSection,
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
    case 'sciatica':
      return <SciaticaSection />;
    case 'stop-smoking':
      return <StopSmokingSection />;
    case 'weight-loss':
      return <WeightLossSection />;
    case 'migraine':
      return <MigraineSection />;
    case 'joint-pain':
      return <JointPainSection />;
    case 'sports-injuries':
      return <SportsInjuriesSection />;
    case 'insomnia':
      return <InsomniaSection />;
    case 'anxiety':
      return <AnxietySection />;
    case 'menopause':
      return <MenopauseSection />;
    case 'dry-eye':
      return <DryEyeSection />;
    default:
      return <IntroSection />;
  }
};
