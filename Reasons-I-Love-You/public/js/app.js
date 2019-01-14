new Vue ({
    el: '#root',
    data: {
        reasons: [
            "You love me",
            "The way you look at me",
            "How your skin feels against mine",
        ],
        newReason: "",
    },
    // mounted() {
    //     axios.get('/features').then(response => this.reasons = response.data));
    //     axios.get('/').then(response => console.log(response));
    // }
});