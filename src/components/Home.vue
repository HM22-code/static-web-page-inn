<script setup>
import Bedrooms from './Bedrooms.vue';
import Booking from './Booking.vue';
import Contact from './Contact.vue';
import ParalllaxBanner from './ParalllaxBanner.vue';
</script>

<template>
    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true">
		<ParalllaxBanner />
        <div class="box">
			<div id="summary" class="container p-4">
				<h1>Bienvenue à l'Auberge Peillon</h1>
                <p>Hôtel 3 étoiles - restaurant gastronomique - bistrot de pays</p>
				<p>
					Située dans l'un des plus beaux villages de la Côte d'Azur, l'auberge de Peillon vous reçoit dans son parc de 5 hectares de vergers et d'oliviers.
					Notre table saura satisfaire les gourmets les plus exigeants. Nous privilégions les saveurs locales et de saison.
					Vous pourrez profiter de l'espace de remise en forme dans un cadre idyllique qui est accessible gratuitement à tous les clients de l'hôtel.
				</p>
				<h1>Le village de Peillon</h1>
				<p>
					A 20 km de Nice et 28 km de Monaco, Peillon est un petit bijou dans l’écrin de l’arrière-pays.
					Considéré comme l’un des plus beaux villages perchés des Alpes-Maritimes, il possède une architecture typiquement médiévale
					avec ses arcades bâties, ses ruelles tortueuses et fleuries entrelacées de passages voûtés et d’escaliers en calades.
					Au fil de ses ruelles en calade, vous pourrez admirer le riche patrimoine de ce joyau de la Côte d'Azur.
					La fontaine remarquable qui orne la place Arnulf date de 1800 et depuis 1941, elle est inscrite à l'inventaire des Monuments historiques.
					Montez jusqu'en haut du village et vous serez récompensé par le superbe panorama sur la région niçoise qui s'offrira à vous depuis la Plaça de la Gleia.
					C'est sur cette place qu'a été édifiée, sur les ruines d'un ancien château, l'Eglise de la Transfiguration.
					Si vous avez la chance d'y entrer, vous pourrez apprécier son mobilier baroque.
					C'est aussi sur cette place que se trouve l'ancienne école du village. Elle abrite une fresque de Charles Rocher de Gérigné : "Lux in Tenebris".
					Ne manquez pas de visiter également la Chapelle des Pénitents Blancs qui se situe juste à coté de notre auberge.
					Elle est réputée pour la grande qualité de ses peintures murales.
					Vous pourrez ensuite poursuivre votre promenade jusqu'à la Chapelle Saint-Roch et l'Oratoire de la Merla.
				</p>
			</div>
			<div id="carousel" class="carousel slide">
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="../assets/img/centre.jpg" class="d-block w-100" alt="balcon">
					</div>
					<div class="carousel-item">
						<img src="../assets/img/calade.jpg" class="d-block w-100" alt="centre de Peillon">
					</div>
					<div class="carousel-item">
						<img src="../assets/img/lucioles.jpg" class="d-block w-100" alt="chambre">
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<Contact id="contact" />
		<Bedrooms id="bedrooms" />
		<Booking id="booking" />
    </div>
</template>

<style scoped>
.box {
    display: flex;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
}
#carousel {
	flex: 0 0 50%; /* Adjusts the panel width to 50% of the container */
    overflow-y: auto; /* Scrollable if content overflows */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Optional shadow for separation */
}
#summary {
	flex: 1; /* Takes up the remaining 50% of the container */
    position: relative;
}
p {
	text-align: justify;
}
@media (max-width: 1024px) {
	.box {
		flex-direction: column;
	}
	#carousel {
		flex: 0 0 auto;
		width: 100%;
	}
	#summary {
		flex: 1;
	}
}
</style>