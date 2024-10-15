<template lang="">
    <div class="container">
        <!-- Content here -->
        <form action="mailto:contact@aubergepeillon.fr" enctype="text/plain" method="post">
			<fieldset>
				<label for="monsieur">Monsieur</label>
				<input type="radio" id="monsieur" name="genre" value="Monsieur">
				<label for="madame">Madame</label>
				<input type="radio" id="madame" name="genre" value="madame">
				<p>
					<label for="nom">Nom</label>
					<input type="text" id="nom" required  name="nom" >
					<label for="prenom">Prénom</label>
					<input type="text" id="prenom" required name="prenom" >
				</p>
				<p>
					<label for="mail">Mail</label>
					<input type="email" id="mail" required name="mail" >
					<label for="tel">Téléphone</label>
					<input type="tel" id="tel" name="telephone" placeholder="Sans points,ni espaces" required>
				</p>
				<select id="chambre" name="Chambre">
					<option value="La Calade">La Calade</option>
					<option value="les Lucioles">Les Lucioles</option>
					<option value="Les Myrtes">Les Myrtes</option>
					<option value="La Fontaine">La Fontaine</option>
					<option value="Les Oliviers">Les Oliviers</option>
				</select>
				<p>
					<label for="datearrive">Date d'arrivée</label>
					<input type="date" id="datearrive" required name="date d'arrivé" >
					<label for="datedepart">Date de départ</label>
					<input type="date" id="datedepart" required name="date de départ" >
				</p>
				<p>
					<label for="npersonne">Nombre de personnes</label>
					<input type="number" id="npersonne" name="nombre de personnes" min="1" max="4">
				</p>
				<p>
					<label for="npetitdejeuner">Nombre de petits déjeuners</label>
					<input type="number" id="npetitdejeuner" name="nombre de petits déjeuners" min="0" max="4">
				</p>
				<p>
					<label for="parking">Parking</label>
					<input type="checkbox" id="parking" name="parking">
				</p>
				<p>Commentaires:</p>
				<textarea>placeholder="Vous pouvez nous laisser ici un message"</textarea>
				<p>
				<label for="confidentialite"></label>
				<input type="checkbox" id="confidentialite" required name=" confidentialité">
				En cochant cette case,vous acceptez notre <a href="confidentialite.html">politique de confidentialité</a>
				</p>
				<p>
					<input type="submit" value="Valider">
				</p>
			</fieldset>
		</form>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>