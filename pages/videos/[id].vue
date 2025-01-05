<template>
    <h2>Rota dinamica, puxa o video de acordo com o id digitado na url</h2>
    
    <div>Voce esta no video de numero {{ idParams }}</div>
    <VideoDetalhes/>
    <VideoControlePlay/>
</template>

<script setup>
    definePageMeta({
        layout: 'exibicao',
        middleware: ["video", "auth"],//puxando o middleware local, quando tenho que chamar na pagina desejada é um middleware local.
    });
    const route = useRoute();//importa o useRoute para poder recuperar parametros da url/rota

    const idParams = computed(() => route.params.id);//

</script>

<style lang="scss" scoped>
    
</style>