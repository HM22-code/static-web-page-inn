<script setup>
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-primary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Auberge Peillon</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/bedrooms">Chambres</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/booking">Réservation</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
                <div class="d-flex">
                    <button class="btn btn-outline-success" type="submit">Réseaux</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>