<template>
    <h2>Rota dinamica, puxa o video de acordo com o id digitado na url</h2>
    
    <div>Voce esta no video de numero {{ idParams }}</div>
</template>

<script setup>
    const route = useRoute();//importa o useRoute para poder recuperar parametros da url/rota

    const idParams = computed(() => route.params.id);//

</script>

<style lang="scss" scoped>
    
</style>