import ElementCreator from '../element-creator';
import List from '../list'
import ListItem from '../list-item'

export default {
  name: 'Dashboard',
  components: {
    ElementCreator,
    List,
    ListItem
  },
  data() {
    return {
      title: 'Spaß mit Listen',
      elementCreators: [
        {
          title: 'Elemente',
          placeholder: 'z.B. Karotten',
          clickHandler: (elementTitle) => {
            this.createListItem({
              title: elementTitle
            })
          }
        },
        {
          title: 'Listen',
          placeholder: 'z.B. Obst',
          clickHandler: (elementTitle) => {
            this.createList({
              title: elementTitle,
              items: []
            })
          },
          errorMessage: 'Es können maximal 3 Listen erstellt werden',
          validator: () => {
            return this.lists.length < this.maxListAmount;
          }
        }
      ],
      unassingedItems: [],
      lists: [],
      maxListAmount: 3
    };
  },
  methods: {
    createListItem(listItem) {
      this.unassingedItems.push(listItem);
    },
    createList(list) {
      this.lists.push(list);
    }
  }
}
