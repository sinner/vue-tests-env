import { mount } from '@vue/test-utils';
import AlertMessage from '@/components/AlertMessage.vue';

// testing lifecycle methods
jest.useFakeTimers();
describe('AlertMessage.vue', () => {
  it('mounted component should assign interval', () => {
    const wrapper = mount(AlertMessage);
    expect(wrapper.vm.interval).not.toBe(undefined);
  });

  it('should counter', () => {
    const wrapper = mount(AlertMessage);
    expect(wrapper.vm.counter).toBe(0);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(1);
    jest.advanceTimersByTime(1000);
    expect(wrapper.vm.counter).toBe(2);
  });

  it('should call properly its destroy lifecycle method', () => {
    const beforeDestroySpy = jest.spyOn(AlertMessage, 'beforeDestroy');
    const wrapper = mount(AlertMessage);
    wrapper.vm.counter = wrapper.vm.timer - 1;
    jest.advanceTimersByTime(1000);
    expect(beforeDestroySpy).toHaveBeenCalled();
  });
});
