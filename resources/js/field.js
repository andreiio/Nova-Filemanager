import VueLazyload from 'vue-lazyload';

Nova.booting(Vue => {
    Vue.component('index-filemanager-field', require('./field/IndexField'));
    Vue.component('detail-filemanager-field', require('./field/DetailField'));
    Vue.component('form-filemanager-field', require('./field/FormField'));

    Vue.use(VueLazyload, {
        observer: true,
        observerOptions: {
            rootMargin: '0px',
            threshold: 1.0,
        },
    });
});
