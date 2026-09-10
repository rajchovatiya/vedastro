export type Review = {
  id: string;
  quote: string;
  name: string;
  rating: number;
  avatar: string;
};

export const reviews: Review[] = [
  {
    id: 'priya',
    quote:
      'The reading was so accurate and helpful. I found clarity in a very confusing time of my life. Thank you!',
    name: 'Priya S.',
    rating: 5,
    avatar: '/images/reviews/priya.jpg',
  },
  {
    id: 'rahul',
    quote:
      'Amazing experience! The guidance really helped me with my career decision. Highly recommended!',
    name: 'Rahul M.',
    rating: 5,
    avatar: '/images/reviews/rahul.jpg',
  },
  {
    id: 'neha',
    quote:
      'Such a positive and healing session. I feel more peaceful and confident now. Thank you!',
    name: 'Neha T.',
    rating: 5,
    avatar: '/images/reviews/neha.jpg',
  },
  {
    id: 'krupa',
    quote: 'Apse spell leke bahut acha laga! Sach me apki spell work kr rhi he!',
    name: 'Krupa S.',
    rating: 5,
    avatar: '/images/reviews/krupa.jpg',
  },
];
