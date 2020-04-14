import { shallowMount } from '@vue/test-utils';
import List from '@/views/List.vue';

const ListItemStub = {
  template: '<li>{{ movie }}</li>',
  props: ['movie'],
};

describe('List.vue stubs', () => {
  it('should list element using shallowMount and Stub component', async () => {
    const wrapper = shallowMount(List, {
      stubs: {
        ListItem: ListItemStub,
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
