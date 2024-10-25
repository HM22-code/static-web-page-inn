<script setup>
</script>

<template>
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <router-link id="footer-home" class="col-md-4 mb-0 text-body-secondary" to="/">© 2024 Auberge Peillon</router-link>
        <div class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <a href="https://vite.dev/" class="logo vite">
                <img src="../assets/svg/vite.svg" alt="vite logo" class="bi me-2" width="40" height="32"></img>
            </a>
            <a href="https://vuejs.org/" class="logo vue">
                <img src="../assets/svg/vue.svg" alt="vue logo" class="bi me-2" width="40" height="32"></img>
            </a>
            <a href="https://getbootstrap.com/" class="logo bootstrap">
                <img src="../assets/svg/bootstrap.svg" alt="bootstrap logo" class="bi me-2" width="40" height="32"></img>
            </a>
        </div>
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><router-link class="nav-link px-2 text-body-secondary" to="/legal">Mentions légales</router-link></li>
            <li class="nav-item"><router-link class="nav-link px-2 text-body-secondary" to="/confidentiality">Politique de confidentialité</router-link></li>
        </ul>
    </footer>
</template>

<style scoped>
#footer-home {
    text-decoration: none;
}
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo.vite:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.bootstrap:hover {
    filter: drop-shadow(0 0 2em #c65af8aa);
}
</style>