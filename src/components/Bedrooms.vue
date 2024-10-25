<script setup lang="js">
import { Carousel } from 'bootstrap'
import { onMounted } from 'vue'

onMounted(() => {
    const myCarouselElement = document.querySelector('#carousel-bedrooms')
    const carousel = new Carousel(myCarouselElement)
    myCarouselElement.addEventListener('slid.bs.carousel', event => {
        document.querySelector('#row-'+event.to).classList.add('table-active')
        document.querySelector('#row-'+event.from).classList.remove('table-active')
    })
})
</script>

<template>
    <div>
        <div id="carousel-bedrooms" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carousel-bedrooms" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel-bedrooms" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel-bedrooms" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carousel-bedrooms" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carousel-bedrooms" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/img/calade.jpg" class="d-block w-100" alt="chambre">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>La Calade</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/lucioles.jpg" class="d-block w-100" alt="chambre">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Les Lucioles</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/myrtes.jpg" class="d-block w-100" alt="chambre">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Les Myrtes</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/fontaine.jpg" class="d-block w-100" alt="chambre">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>La Fontaine</h5>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../assets/img/oliviers.jpg" class="d-block w-100" alt="chambre">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Les Oliviers</h5>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel-bedrooms" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel-bedrooms" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Type de chambre</th>
                    <th scope="col">Prix par nuit</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr id="row-0">
                    <td scope="row">La Calade</td>
                    <td>Chambre simple (1 pers)</td>
                    <td>65 €</td>
                </tr>
                <tr id="row-1">
                    <td scope="row">Les Lucioles</td>
                    <td>Chambre double (2 lits)</td>
                    <td>95 €</td>
                </tr>
                <tr id="row-2">
                    <td scope="row">Les Myrtes</td>
                    <td>Chambre double (1 lit)</td>
                    <td>95 €</td>
                </tr>
                <tr id="row-3">
                    <td scope="row">La Fontaine</td>
                    <td>Chambre double (1 lit)</td>
                    <td>95 €</td>
                </tr>
                <tr id="row-4">
                    <td>Les Oliviers</td>
                    <td>Familiale (1 gd lit + 2 petits)</td>
                    <td>135 €</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
</style>