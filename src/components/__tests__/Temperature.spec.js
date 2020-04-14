import { mount } from '@vue/test-utils';
import Temperature from '@/components/Temperature.vue';

describe('Temperature.vue', () => {
  it('should work properly with the celsius computed property', () => {
    const wrapper = mount(Temperature);
    expect(wrapper.vm.celsius).toBe(0);

    wrapper.setData({
      degrees: 23,
    });
    expect(wrapper.vm.celsius).toBe(23);

    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should work properly with the fahrenheit computed property', () => {
    const wrapper = mount(Temperature);
    expect(wrapper.vm.fahrenheit).toBe(32);

    wrapper.setData({
      degrees: 16,
    });
    expect(wrapper.vm.fahrenheit).toBe(60.8);

    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should set properly the temperature type property depending on the temp prop', () => {
    const wrapper = mount(Temperature, {
      propsData: {
        temp: 40,
      },
    });

    const { vm } = wrapper;
    expect(vm.degrees).toBe(40);
    expect(vm.type).toBe('celsius');

    wrapper.setProps({
      temp: '50f',
    });

    wrapper.vm.$nextTick(() => {
      expect(vm.degrees).toBe(50);
      expect(vm.type).toBe('fahrenheit');
      expect(wrapper).toMatchSnapshot();
    });
  });
});
