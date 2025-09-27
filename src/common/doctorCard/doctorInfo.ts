import Physician_Xiu_Feng_SearcyImg from '../../asserts/Xiu_Feng_Searcy.jpg';
import Physician_Wei_ZhouImg from '../../asserts/Physician_Wei_Zhou.jpeg';

export interface DoctorInfo {
  id: string;
  name?: string;
  nameKey?: string;
  title?: string;
  titleKey?: string;
  img: string;
  href: string;
  description?: string;
  descriptionKey?: string;
}

export const doctors: DoctorInfo[] = [
  {
    id: 'dr-xiu',
    nameKey: 'doctorProfiles:dr-xiu.name',
    titleKey: 'doctorProfiles:dr-xiu.title',
    img: Physician_Xiu_Feng_SearcyImg,
    href: '/physicians#dr-xiu',
    descriptionKey: 'doctorProfiles:dr-xiu.description'
  },
  {
    id: 'dr-zhou',
    nameKey: 'doctorProfiles:dr-zhou.name',
    titleKey: 'doctorProfiles:dr-zhou.title',
    img: Physician_Wei_ZhouImg,
    href: '/physicians#dr-zhou',
    descriptionKey: 'doctorProfiles:dr-zhou.description'
  }
];
