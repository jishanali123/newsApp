import Enzyme from 'enzyme';

import enzymeAdapter17 from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({
  adapter: new enzymeAdapter17()
});
