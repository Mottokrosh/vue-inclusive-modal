import Modal from 'src/Modal.vue';
import { createVM } from '../helpers/utils.js';

describe('Modal.vue', () => {
  it('should render correctly', () => {
    const vm = createVM(this, `<modal></modal>`, { components: { Modal }});
    vm.$el.querySelectorAll('.modal').length.should.eql(1);
  });
});
