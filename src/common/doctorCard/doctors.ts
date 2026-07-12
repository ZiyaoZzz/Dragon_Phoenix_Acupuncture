import Physician_Xiu_Feng_SearcyImg from '../../assets/Xiu_Feng_Searcy.jpg';
import Physician_Wei_ZhouImg from '../../assets/Physician_Wei_Zhou.jpeg';

export interface DoctorExperienceItem {
  period?: string;
  role: string;
  organization?: string;
}

export interface DoctorEducationItem {
  title: string;
  details?: string[];
}

export interface DoctorData {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  img: string;
  href: string;
  license?: string;
  address?: string;
  certifications?: string[];
  summary?: string;
  description?: string;
  experiences?: DoctorExperienceItem[];
  education?: DoctorEducationItem[];
  continuingEducation?: string[];
  specialties?: string[];
  specialtiesDescription?: string;
  memberships?: string[];
  credentials?: string[];
  imageObjectPosition?: string;
  [key: string]: unknown;
}

export function doctorPortraitObjectStyle(
  doctor: Pick<DoctorData, 'imageObjectPosition'> | undefined
): { objectPosition: string } | undefined {
  const pos = doctor?.imageObjectPosition;
  return pos ? { objectPosition: pos } : undefined;
}

export const doctors: DoctorData[] = [
  {
    id: 'dr-xiu',
    name: 'Dr. Xiu Feng Searcy, LAc',
    title: 'Lead Acupuncturist',
    subtitle: 'Lead Acupuncturist',
    img: Physician_Xiu_Feng_SearcyImg,
    href: '/physicians#dr-xiu',
    license: 'Florida License No: AP 1359',
    address: '2579 Oak Street Kissimmee, FL 34744',
    certifications: ['NCCAOM Acupuncture Certification – November 1999'],
    description:
      'Over 50+ years of experience in Eastern & Western Medicine, 25 years as MD in China, certified by NCCAOM.',
    experiences: [
      { period: '2000 - Present', role: 'Founder, Owner/Operator', organization: 'Dragon Phoenix Acupuncture' },
      { period: '1992 - 1998', role: 'Physician-In-Charge', organization: 'Splendid China Development Co., Ltd.' },
      { period: '1989 - 1992', role: 'Otolaryngology Physician', organization: 'Fourth Hospital of Shaanxi Province' },
      { period: '1988 - 1989', role: 'OB/GYN Physician', organization: 'Fourth Hospital of Shaanxi Province' },
      { period: '1971 - 1982', role: 'Surgical Assistant', organization: 'Operating Room of the Fourth Hospital of Shaanxi Province' },
    ],
    education: [
      {
        title: 'Medical Education',
        details: [
          'Professional title of Chief Physician of Chinese Medicine (2013)',
          'Bachelor of Chinese Medicine (2013)',
          'Acupuncture and Traditional Chinese Medicine, Shaaxi College of Traditional Medicine (1990-1992)',
          'General Medicine and Surgery, Bingzhou Medical College & Shanxi Medical University (1982-1988)',
        ],
      },
      {
        title: 'Specialized Training',
        details: [
          'Quick Stop Pain Relief with Hand Pressure Points (2004)',
          'Release Back, Neck, Shoulder Pain Special Points (2002)',
          'Traditional Chinese Medicine Diagnosis and Treatment (1999)',
          'Trauma Massage, Shaaxi Provincial Hospital (1999)',
        ],
      },
    ],
    continuingEducation: [
      'Neck Pain: Diagnosis And Treatment in TCM (2009)',
      'Low Back Pain: Diagnosis and treatment in TCM (2009)',
      'Clinical Applications of Laboratory Testing (2008)',
      'TCM treatment of Infertility and other common GYN diseases (2008)',
      'Chinese Herbal Medicine: Quality control and management (2008)',
    ],
    memberships: [
      'Florida Acupuncture Association, Inc.',
      'National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM)',
    ],
  },
  {
    id: 'dr-zhou',
    name: 'Dr. Wei Zhou, LAc',
    title: 'Acupuncturist',
    subtitle: 'Acupuncturist',
    img: Physician_Wei_ZhouImg,
    imageObjectPosition: 'center 38%',
    href: '/physicians#dr-zhou',
    credentials: [
      'PhD, Licensed Acupuncturist',
      'A.P. (Florida), Diploma of Acupuncture (NCCAOM), M.D. (China)',
      "Master's Degree in Oriental Medicine - FCIM (USA-2021)",
      "Doctoral's Degree in Acupuncture and Oriental Medicine - ATOM (USA-2025)",
    ],
    description:
    'Dr. Zhou holds a PhD in Traditional Chinese Medicine and is a licensed acupuncturist specialized in traditional Chinese medicine with extensive acupuncture and herbal experience over 45 years.',
    education: [
      {
        title: "Education & Credentials",
        details: [
          "PhD in Traditional Chinese Medicine",
          "Medical Doctor (M.D.) - China",
          "Master's in Oriental Medicine - FCIM, USA",
          'NCCAOM Diploma of Acupuncture',
          'Florida Licensed Acupuncture Physician (A.P.)',
        ],
      },
    ],
    summary: "Dr. Zhou holds a PhD in Traditional Chinese Medicine and has been receiving formal TCM professional education in China university of TCM since 1978. He has practiced Traditional Chinese Medicine in Chinese medical institutions for more than 40+ years. He has a senior professional title and is a member of the Chinese Association of Chinese Medicine.",
    specialties: ['TCM Herbs Formula', 'Acupuncture', 'Cupping', 'Tuina', 'Gua Sha', 'Reflexology'],
    specialtiesDescription: 'Specializes in treating various common and difficult clinical diseases using traditional Chinese medicine techniques.',
    memberships: [
      'Chinese Association of Chinese Medicine',
      'National Certification Commission for Acupuncture and Oriental Medicine (NCCAOM)',
    ],
  },
];


