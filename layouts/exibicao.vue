<template>
    <div>
        <NuxtLink to="/">Voltar</NuxtLink> -------->>>>>>>>>>>> < Nuxtlink to="/">< /Nuxtlink> redireciona para uma pagina especifica, funciona como o < a href="">< /a>, nesse caso redireciona para a home que é a / barra.
        <slot></slot>
        Rodapé Exibição         <br/><br/>
        e na pagina que queira exibir esse layout exibicao coloco: <br/><br/>
        < script setup>         <br/>
    definePageMeta({            <br/>
        layout: 'exibicao',     <br/>
    });                         <br/>
    </div>
</template>