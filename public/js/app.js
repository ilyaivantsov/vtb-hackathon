new Vue({
    el: '#app',
    data: () => ({
        dialog_auth: true,
        username: "",
        password: null,
    }),
    methods: {
        login() { },
    },
    vuetify: new Vuetify(),
})