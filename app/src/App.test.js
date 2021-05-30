
import { shallow, mount } from 'enzyme';
import App from './App';
import NewsList from './component/news-list/NewsList';

test('render non-empty component without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

test('should contain newList component', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(NewsList).length).toBe(1);
});
