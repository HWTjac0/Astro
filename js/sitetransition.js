barba.init({
    transitions: [{
        async leave() {
            await loadIn();
        },
        enter() {
            loadOut();
        }
    }]
});