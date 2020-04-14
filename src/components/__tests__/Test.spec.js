import { mount } from '@vue/test-utils';
import Test from '@/components/Test.vue';

describe('Test.vue', () => {
  it('renders without any prop passed', () => {
    const wrapper = mount(Test);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders props.value when passed', () => {
    const wrapper = mount(Test, {
      propsData: {
        value: 'Joe',
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
