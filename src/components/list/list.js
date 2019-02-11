/*
 * ATTENTION!
 * Only fill ListItem components in the default slot of this component
 */

export default {
  name: 'List',
  components: {},
  props: {
    title: String
  },
  data() {
    return {
      itemCounter: 0
    };
  },
  mounted() {
    this.updateItemCounter();
  },
  methods: {
    updateItemCounter() {
      this.$slots.default.forEach(() => {
        this.itemCounter++;
      })
    }
  }
}
