<template lang="">
    <div class="container">
        <!-- Content here -->
        <table>
            <tr>
                <th>Nom</th>
                <th>Type de chambre</th>
                <th>Prix par nuit</th>
            </tr>
            <tr>
                <td>La Calade</td>
                <td class="colonnedeux">Chambre simple (1 pers)</td>
                <td class="colonnetrois">65</td>
            </tr>
            <tr>
                <td>Les Lucioles</td>
                <td class="colonnedeux">Chambre double (2 lits)</td>
                <td class="colonnetrois">95</td>
            </tr>
            <tr>
                <td>Les Myrtes</td>
                <td class="colonnedeux" rowspan="2">Chambre double (1 lit)</td>
                <td class="colonnetrois" rowspan="2">95</td>
            </tr>
            <tr>
                <td>La Fontaine</td>
            </tr>
            <tr>
                <td>Les Oliviers</td>
                <td class="colonnedeux">Familiale (1 gd lit + 2 petits)</td>
                <td class="colonnetrois">135</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>