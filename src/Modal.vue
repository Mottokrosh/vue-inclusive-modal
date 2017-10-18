<template>
  <div class="modal" v-if="show">
    <button v-if="!componentData.hideCloseButton" class="transparent close" @click="close">
      <x-icon></x-icon>
    </button>
    <component :is="component" :component-data="componentData"></component>
  </div>
</template>

<script>
  import { XIcon } from 'vue-feather-icons';
  import events from './events';

  export default {
    data() {
      return {
        component: null,
        componentData: null,
        show: false,
      };
    },

    components: {
      XIcon,
    },

    methods: {
      open(comp, compData) {
        this.component = comp;
        this.componentData = compData;
        this.show = true;
      },

      close() {
        this.show = false;
        this.component = null;
        this.componentData = null;
      },
    },

    created() {
      events.$on('show', (comp, compData) => {
        this.open(comp, compData);
      });

      events.$on('hide', () => {
        this.close();
      });
    },

    watch: {
      show(val) {
        if (val) {
          document.body.classList.add('frozen');
          document.onkeydown = (evt) => {
            const event = evt || window.event;
            if (event.keyCode === 27) {
              this.close();
            }
          };
        } else {
          document.body.classList.remove('frozen');
          document.onkeydown = null;
          this.close();
        }
      },
    },
  };
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    overflow: auto;
    overflow-scrolling: touch;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
  }

  .modal button.close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 3;
    background-color: var(--main);
    border-radius: 50%;
    display: flex;
    padding: 0.5rem;
  }

  .modal button.close:not(:disabled):hover {
    background-color: var(--mainLighter);
    color: var(--whiteDarker);
  }
</style>