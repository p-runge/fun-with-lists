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
    },
    errorMessage: String,
    validator: Function,
  },
  data() {
    return {
      buttonLabel: 'Hinzufügen',
      elementTitle: ''
    }
  },
  methods: {
    clickHandlerWithValidator(elementTitle) {
      if(
        (this.validator && this.validator()) ||
        !this.validator
      ) {
        this.clickHandler(elementTitle);
        this.elementTitle = null;
      }
    }
  }
}
