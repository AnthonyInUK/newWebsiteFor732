import { AnimatedTestimonials } from '../animatedForUsers/animated';

export function AnimatedTestimonialsController() {
  const testimonials = [
    {
      quote:
        'During this period, he completed data selection and cleaning, Amazon product data visualization, review polarity model creation, and representative words analysis.',
      name: 'Eric',
      designation: '',
      src: '/images/user1.jpg',
    },
    {
      quote:
        'He worked on Amazon rating and category predictions using neural networks, the BART model, and random forest, and integrated the saved model into the project website for a demo.',
      name: 'Larry',
      designation: '',
      src: '/images/user2.jpg',
    },
    {
      quote: 'She was doing data cleaning and take the final presentation.',
      name: 'Meng xia',
      designation: '',
      src: '/images/user3.jpg',
    },
    {
      quote:
        'I am doing data cleaning and build the website for final presentation',
      name: 'Anthony',
      designation: '',
      src: '/images/user4.jpg',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
