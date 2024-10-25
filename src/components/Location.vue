<script setup>
</script>

<template>
    <div class="map-box">
        <div class="map-content">
            <h3>Coordonnées</h3>
            <p>Téléphone : <a href="tel:0412131415">04 12 13 14 15</a></p>
            <p>Courriel : <a href="mailto:contact@aubergedepeillon.fr">contact@aubergedepeillon.fr</a></p>
            <h3>Dates d'ouverture</h3>
            <p>L'auberge de Peillon vous accueille tous les jours du 01 mai au 31 octobre.</p>
            <p>Elle est fermée de 02 janvier au 31 janvier pour congés annuels.</p>
            <p>Le reste de l'année, nous sommes fermés du lundi au mercredi</p>
            <h3>Adresse</h3>
            <p><small>Auguste Arnulf, 06440 Peillon village</small></p>
            <p><small><a href="https://www.openstreetmap.org/?mlat=43.77862&amp;mlon=7.38206#map=16/43.77862/7.38206">Afficher la carte sur OpenStreetMap</a></small></p>
        </div>
        <div class="map">
            <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=7.373178005218507%2C43.77275173679235%2C7.390944957733154%2C43.78449530512994&amp;layer=mapnik&amp;marker=43.778623809275445%2C7.38206148147583"></iframe>
        </div>
	</div>
</template>

<style scoped>
/* Container to hold the panel and map */
.map-box {
    display: flex;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
}

/* Content panel on the left */
.map-content {
    flex: 0 0 30%; /* Adjusts the panel width to 30% of the container */
    padding: 20px;
    overflow-y: auto; /* Scrollable if content overflows */
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* Optional shadow for separation */
}

/* Map area on the right */
.map {
    flex: 1; /* Takes up the remaining 70% of the container */
    position: relative;
}

.map iframe {
    width: 100%;
    height: 100%;
    border: none;
}

@media (max-width: 768px) {
.map-box {
    flex-direction: column;
}
.map-content {
    flex: 0 0 auto;
    width: 100%;
}
.map {
    flex: 1;
}
}
</style>