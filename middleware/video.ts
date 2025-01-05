export default defineNuxtRouteMiddleware((to, from) =>{ //essa propriedade defineNuxtRouteMiddleware possui como paramentro o to e o from que é aonde estou 'to', e para onde estou indo 'from'.
    const valorParametro = +to.params.id; //o arquivo [id].vue possue o id eviado pela url, e aqui capturamos ele, +to é para converter o id enviado em numero, se não for numero ele vai retornar o num ou not a number.
    if (isNaN(valorParametro) || valorParametro < 0) { // isNaN = se o valor passado na url é um  not a number
        return navigateTo("/videos");
    }
});
//E aqui vou criar a logica de verificar se ao teentar acessar videos/10 se é um numero ou um caractére, se for um numero ele vai exibir o video correspondente, caso seja um caractere ele redirecionará para a página de videos.
//Na pagina que desejo executar esse middleware coloco: 
//   definePageMeta({
//        middleware: 'video',
//    });