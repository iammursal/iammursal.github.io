import iphone11 from '~/assets/iphone-11.glb';
import macbookPro from '~/assets/macbook-pro.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: '/app/assets/smartphone-blank-screen.png',
    width: '60%',
    height: 'auto',
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp, 
  },
  laptop: {
    url: '/app/assets/laptop-blank-screen.png',
    width: '80%',
    height: 'auto',
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen, 
  },
};
