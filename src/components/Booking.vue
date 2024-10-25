<script setup>
</script>

<template>
    <div>
		<div class="card m-4 p-4">
			<form action="mailto:contact@aubergepeillon.fr" enctype="text/plain" method="post">
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" id="monsieur" name="genre" value="Monsieur">
					<label class="form-check-label" for="monsieur">Monsieur</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" id="madame" name="genre" value="Madame">
					<label class="form-check-label" for="madame">Madame</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" id="other" name="genre" value="Autres">
					<label class="form-check-label" for="other">Autres</label>
				</div>
				<div class="row">
					<div class="mb-3 col">
						<label class="form-label" for="lastname">Nom</label>
						<input class="form-control" type="text" id="lastname" required name="lastname" >
					</div>
					<div class="mb-3 col">
						<label class="form-label" for="firstname">Prénom</label>
						<input class="form-control" type="text" id="firstname" required name="firstname" >
					</div>
				</div>
				<div class="row">
					<div class="mb-3 col">
						<label class="form-label" for="mail">Mail</label>
						<input class="form-control" type="email" id="mail" required name="mail" >
					</div>
					<div class="mb-3 col">
						<label class="form-label" for="tel">Téléphone</label>
						<input class="form-control" type="tel" id="tel" name="telephone" placeholder="Sans points, ni espaces" required>
					</div>
				</div>
				<div class="mb-3">
					<label class="form-label" for="chambre">Chambre</label>
					<select class="form-select" id="chambre" name="Chambre">
						<option value="La Calade">La Calade</option>
						<option value="les Lucioles">Les Lucioles</option>
						<option value="Les Myrtes">Les Myrtes</option>
						<option value="La Fontaine">La Fontaine</option>
						<option value="Les Oliviers">Les Oliviers</option>
					</select>
				</div>
				<div class="row">
					<div class="mb-3 col">
						<label class="form-label" for="datearrive">Date d'arrivée</label>
						<input class="form-control" type="date" id="datearrive" required name="date d'arrivé" >
					</div>
					<div class="mb-3 col">
						<label class="form-label" for="datedepart">Date de départ</label>
						<input class="form-control" type="date" id="datedepart" required name="date de départ" >
					</div>
				</div>
				<div class="row">
					<div class="mb-3 col">
						<label class="form-label" for="npersonne">Nombre de personnes</label>
						<input class="form-control" type="number" id="npersonne" name="nombre de personnes" min="1" max="4">
					</div>
					<div class="mb-3 col">
						<label class="form-label" for="npetitdejeuner">Nombre de petits déjeuners</label>
						<input class="form-control" type="number" id="npetitdejeuner" name="nombre de petits déjeuners" min="0" max="4">
					</div>
				</div>
				<div class="mb-3 form-check">
					<input class="form-check-input" type="checkbox" id="parking" name="parking">
					<label class="form-check-label" for="parking">Parking</label>
				</div>
				<div class="mb-3">
					<label class="form-label" for="commentaires">Message</label>
					<textarea class="form-control" id="commentaires" placeholder="Vous pouvez nous laisser ici un message"></textarea>
				</div>
				<div class="mb-3 form-check">
					<input class="form-check-input" type="checkbox" id="confidentialite" required name="confidentialité" />
					<label class="form-check-label" for="confidentialite">
						En cochant cette case,vous acceptez notre
						<router-link to="/confidentiality" target="_blank" rel="noopener noreferrer">Politique de confidentialité</router-link>
					</label>
				</div>
				<div class="mb-3">
					<input class="btn btn-primary" type="submit" value="Valider" />
				</div>
			</form>
		</div>
    </div>
</template>

<style scoped>
</style>