(global as any).requestAnimationFrame = (cb: any) => {
  setTimeout(cb, 0);
};

import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

export const mount = Enzyme.mount;
export const shallow = Enzyme.shallow;
