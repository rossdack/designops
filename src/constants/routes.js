import CustomModalDemo from '@/pages/CustomModalDemo';
import CustomCardDemo from '@/pages/CustomCardDemo';
import SignInDemo from '@/pages/SignInDemo';
import StickyFooterDemo from '@/pages/StickyFooterDemo';
import ColorPalette from '@/pages/ColorPalette';
import FontSizeDemo from '@/pages/FontSizeDemo';

const ROUTES = [
  {
    path: '/color',
    name: 'Color Palette',
    exact: true,
    component: ColorPalette,
  },
  {
    path: '/fontsize',
    name: 'Font Size',
    exact: true,
    component: FontSizeDemo,
  },
  {
    path: '/signin',
    name: 'SignIn',
    exact: true,
    component: SignInDemo,
  },
  {
    path: '/stickyfooter',
    name: 'Sticky Footer',
    exact: true,
    component: StickyFooterDemo,
  },
  {
    path: '/modal',
    name: 'Modal',
    exact: true,
    component: CustomModalDemo,
  },
  {
    path: '/card',
    name: 'Card',
    exact: true,
    component: CustomCardDemo,
  },
];

export default ROUTES;
