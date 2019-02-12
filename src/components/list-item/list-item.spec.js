import { shallowMount } from '@vue/test-utils'
import ListItem from './list-item';

describe('ListItem', () => {
  const listItem = shallowMount(ListItem, {
    propsData: {
      title: 'I am a title'
    }
  });

  expect(listItem.vm.title).toMatch('I am a title');
})