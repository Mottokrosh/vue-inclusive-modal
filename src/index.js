import Modal from './Modal';
import events from './events';

const defaultComponentName = 'modal';

const Plugin = {
  install(Vue, options = {}) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    // eslint-disable-next-line
    Vue.prototype.$modal = {
      show(comp, compData) {
        events.$emit('show', comp, compData);
      },

      hide() {
        events.$emit('hide');
      },
    };

    const componentName = options.componentName || defaultComponentName;
    Vue.component(componentName, Modal);
  },
};

export default Plugin;

const version = '__VERSION__';

// Export all components too
export {
  Modal,
  version
};
