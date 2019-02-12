import { shallowMount } from '@vue/test-utils'

import draggable from 'vuedraggable'

import List from './'
import ListItem from '../list-item'

describe('List', () => {
  const list = shallowMount(List, {
    propsData: {
      title: 'I am a list title',
      items: [
        {
          title: 'Item 1'
        },
        {
          title: 'Item 2'
        },
        {
          title: 'Item 3'
        }
      ]
    }
  });

  it('title appears in DOM', () => {  
    expect(list.find('.header .title').text()).toBe('I am a list title');
  });

  it('item counter shows right amount of items', () => {
    expect(list.find('.header .item-counter').text()).toBe('3');
  });

  it('all items appear in DOM', () => {
    expect(list.find('.list-item-wrapper').findAll(ListItem)).toHaveLength(3);
  });

  it('list wrapper gets affected by vuedraggable plugin', () => {
    expect(list.find('.list-item-wrapper')).toEqual(list.find(draggable));
  });
})
