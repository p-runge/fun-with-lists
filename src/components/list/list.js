import draggable from 'vuedraggable'

import ListItem from '../list-item';

export default {
  name: 'List',
  components: {
    draggable,
    ListItem
  },
  props: {
    title: String
  },
  data() {
    return {
      items: [
        {
          title: 'Test 1'
        },
        {
          title: 'Test 2'
        },
        {
          title: 'Test 3'
        },
      ]
    };
  },
  computed: {
    itemCounter() {
      return this.items.length;
    }
  }
}
