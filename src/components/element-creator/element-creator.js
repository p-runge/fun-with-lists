export default {
  name: 'ElementCreator',
  components: {},
  props: {
    title: {
      type: String,
      required: true
    },
    placeholder: String,
    clickHandler: {
      /* 
       * PARAMS
       *
       * elementTitle: String
       */
      type: Function,
      required: true
    }
  },
  data() {
    return {
      buttonLabel: 'Hinzufügen',
      elementTitle: ''
    }
  }
}
