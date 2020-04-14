import FruitBasket from '@/components/FruitBasket.vue';
import { mount } from '@vue/test-utils';

describe('Fruitbasket.vue', () => {
  it('can add fruits to basket with DOM', () => {
    const wrapper = mount(FruitBasket);

    const inputText = wrapper.find('input');
    const button = wrapper.find('button');

    inputText.element.value = 'banana';
    inputText.trigger('input'); // This line allows to trigger the event to vue could be able to change its state
    expect(wrapper.vm.fruit).toBe('banana');

    button.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.fruit).toBe('');
      expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['banana']));
      expect(wrapper.findAll('li').length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should call addToBasket when the button is clicked', () => {
    const wrapper = mount(FruitBasket);

    const addToBasketMuck = jest.fn().mockReturnValue('It was clicked');

    wrapper.setMethods({
      addToBasket: addToBasketMuck,
    });

    const inputText = wrapper.find('input');
    const button = wrapper.find('button');

    inputText.element.value = 'banana';
    inputText.trigger('input'); // This line allows to trigger the event to vue could be able to change its state

    button.trigger('click');
    wrapper.vm.$nextTick(() => {
      expect(addToBasketMuck).toHaveBeenCalled();
    });
  });
});
