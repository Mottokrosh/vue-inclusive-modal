# vue-inclusive-modal

## Install

    npm i vue-inclusive-modal

## Usage

In mains.js:

    import Vue from 'vue';
    import Modal from 'vue-inclusive-modal';

    Vue.use(Modal);

    // Or: Vue.use(Modal, { componentName: 'my-modal' })

In App.vue:

    <modal></modal>

In any Vue component instance:

    this.$modal.show(comp, compData);

    this.$modal.hide();

`comp` is a component that will be rendered inside the modal. `compData` is an object containing any desired data that will be passed to `comp` as property `componentData`.