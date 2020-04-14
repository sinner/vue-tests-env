import { mount } from '@vue/test-utils';
import List from '@/views/List.vue';

describe('List.vue', () => {
  it('should list element using mount', async () => {
    const wrapper = mount(List);
    const movies = wrapper.vm.marvelMovies;

    wrapper.setData({
      marvelMovies: [...movies, 'Endgame'],
    });
    expect(wrapper.vm.marvelMovies.length).toBe(4);

    wrapper.vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
