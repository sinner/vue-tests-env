import { mount } from '@vue/test-utils';
import GithubCard from '@/components/GithubCard.vue';

describe('GithubCard.vue', () => {
  it('should work properly the composeUrl method', () => {
    const wrapper = mount(GithubCard);

    const { vm } = wrapper;
    const { composeUrl } = GithubCard.methods;

    expect(composeUrl(123)).toBe('https://api.github.com/users/123');

    vm.$nextTick(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should work properly the fetchData method', async () => {
    const jsonMock = jest.fn().mockResolvedValue('Github Data');
    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock,
    });

    const wrapper = mount(GithubCard, {
      methods: {
        composeUrl: () => 'url',
      },
    });

    const { vm } = wrapper;

    await vm.fetchData();

    expect(window.fetch).toHaveBeenCalledWith('url');
    expect(jsonMock).toHaveBeenCalled();
    expect(vm.data).toBe('Github Data');

    // vm.$nextTick(() => {
    //   expect(vm.degrees).toBe(50);
    //   expect(vm.type).toBe('fahrenheit');
    //   expect(wrapper).toMatchSnapshot();
    // });
  });
});
