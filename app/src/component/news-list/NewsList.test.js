import { shallow, mount } from 'enzyme';
import NewsList from './NewsList';
import Filter from '../filter/Filter';
import Header from '../header/Header';

test('render non-empty component without crashing', () => {
  const wrapper = shallow(<NewsList />);
  expect(wrapper.exists()).toBe(true);
});

test('should contain Header and Filter component', () => {
  const wrapper = mount(<NewsList />);
  expect(wrapper.find(Header).length).toBe(1);
  expect(wrapper.find(Filter).length).toBe(1);
});