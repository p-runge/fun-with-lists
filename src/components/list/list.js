import draggable from 'vuedraggable'

import ListItem from '../list-item';

export default {
  name: 'List',
  components: {
    draggable,
    ListItem
  },
  props: {
    title: String,
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    itemCounter() {
      return this.items.length;
    }
  }
}
