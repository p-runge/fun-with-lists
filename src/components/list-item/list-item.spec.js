import { shallowMount } from '@vue/test-utils'
import ListItem from '@/components/list-item'

describe('ListItem', () => {
  const listItem = shallowMount(ListItem, {
    propsData: {
      title: 'I am a title'
    }
  });

  it('title appears in DOM', () => {
    expect(listItem.text()).toBe('I am a title');
  });

  it('item has right html markup', () => {
    expect(listItem).toEqual(listItem.find('li'));
  });
})
