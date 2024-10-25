<script setup>
import Bedrooms from './Bedrooms.vue';
import Booking from './Booking.vue';
import Contact from './Contact.vue';
import InfoCard from './InfoCard.vue';
import ParalllaxBanner from './ParalllaxBanner.vue';

</script>

<template>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
		<ParalllaxBanner />
        <div>
			<div class="container m-4 p-4">
				<h1>Bienvenue à l'Auberge Peillon</h1>
                <p>Hôtel 3 étoiles - restaurant gastronomique - bistrot de pays</p>
				<p>
					Située dans l'un des plus beaux villages de la Côte d'Azur, l'auberge de Peillon vous reçoit dans son parc de 5 hectares de vergers et d'oliviers.
					Notre table saura satisfaire les gourmets les plus exigeants. Nous privilégions les saveurs locales et de saison.
					Vous pourrez profiter de l'espace de remise en forme qui est accessible gratuitement à tous les clients de l'hôtel.
				</p>
			</div>
			<img src="../assets/img/auberge.jpg" class="img-fluid" alt="auberge">
		</div>
		<InfoCard />
		<Bedrooms id="bedrooms" />
		<Booking id="booking" />
		<Contact id="contact" />
    </div>
</template>

<style scoped>
</style>