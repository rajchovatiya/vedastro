export type TarotPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const tarotPlans: TarotPlan[] = [
  {
    id: '1-question',
    name: '1 Question',
    price: '₹111',
    description: 'Perfect for one clear question',
    image: '/images/tarot/RWS_Tarot_00_Fool.jpg',
  },
  {
    id: '3-questions',
    name: '3 Questions',
    price: '₹333',
    description: 'Get clarity on multiple concerns',
    image: '/images/tarot/RWS_Tarot_01_Magician.jpg',
    featured: true,
  },
  {
    id: '10-minute',
    name: '10 Minute Reading',
    price: '₹888',
    description: 'Focused guidance for your situation',
    image: '/images/tarot/RWS_Tarot_10_Wheel_of_Fortune.jpg',
  },
  {
    id: 'love',
    name: 'Love Reading',
    price: '₹1,111',
    description: 'Deep guidance for love & relationships',
    image: '/images/tarot/Cups02.jpg',
  },
];
