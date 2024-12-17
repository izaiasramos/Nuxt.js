1. $route é o quê?
$route é um objeto fornecido pelo Vue Router, a biblioteca de roteamento que o Nuxt utiliza internamente. Ele contém informações sobre a rota atual, como os parâmetros da URL, a query string, o nome da rota e outros dados.

2. É nativo do Nuxt/Vue?
No Vue.js: $route é acessível diretamente nos componentes porque o Vue Router integra essa funcionalidade.
No Nuxt.js: Como o Nuxt é construído em cima do Vue, ele também usa o Vue Router por padrão, e o objeto $route fica automaticamente disponível para ser usado.
3. O que são "parâmetros da URL"?
Parâmetros da URL são partes dinâmicas da rota que você define no arquivo de roteamento. No Nuxt, as rotas dinâmicas são criadas com base na estrutura dos arquivos no diretório pages.

Por exemplo:

Se você tiver o arquivo:

bash
Copiar código
pages/video/[id].vue
Isso cria automaticamente uma rota dinâmica:

bash
Copiar código
/video/:id
Quando você acessar:

bash
Copiar código
/video/123
O parâmetro id será capturado e ficará disponível no objeto $route.params.
Assim, em {{ $route.params.id }}, você recupera o valor 123.

4. Quais parâmetros posso recuperar do $route?
O objeto $route tem várias propriedades úteis, incluindo:

Propriedade	Descrição
params	Parâmetros dinâmicos da rota (ex.: /video/:id).
query	Parâmetros de query string (ex.: /video?id=123).
path	O caminho completo da rota (ex.: /video/123).
fullPath	O caminho completo com query string (ex.: /video/123?name=abc).
name	Nome da rota (se definida no roteamento).
hash	Fragmento da URL (ex.: /video/123#section1).
matched	Matriz com informações sobre as rotas correspondentes.
meta	Metadados definidos nas rotas.
5. Como recuperar os parâmetros em script setup no Nuxt 3?
No Nuxt 3, o objeto $route não está mais diretamente disponível dentro do setup.
No lugar disso, você usa o composable useRoute para acessar os parâmetros da rota.

Aqui está a versão do seu código usando useRoute no Nuxt 3:

vue
Copiar código
<template>
  <h2>Rota dinâmica, puxa o vídeo de acordo com o ID digitado na URL</h2>
  <div>Você está no vídeo de número {{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute(); // Composable para acessar o objeto da rota
</script>

