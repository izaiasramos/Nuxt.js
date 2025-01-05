<script setup lang="ts">
    const { diasPassados, diferencaEmDias } = useFormatacao();
    const dataVideo = new Date(2024, 11, 1);

   diasPassados(dataVideo);

</script>
<template>
    <h1>Componentes - Nuxt 3</h1>
    <h3>Autor: Izaias Ramos</h3>
    <h3>Data: 12/05/2022</h3>
    <p>{{ diferencaEmDias }} dias atras</p>
    <p>para chamar esse componante < VideoDetalhes/> o nome da pasta que ele ta com a primeira letra sendo maiuscula: 'Video' e o nome do componente 'Detalhes'.</p>
</template>