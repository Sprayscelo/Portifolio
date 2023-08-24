<template>
    <div id="experienciaRoot">
        <h1>Experiencias</h1>
        <div>
            <h2>
                Desenvolvedor front-end
            </h2>
            <p>Experiencias como desenvolvedor front-end são apenas em projetos demonstrado neste portifólio,
               ainda não tive a oportunidade de atuar profissionalmente como desenvolvedor front-end, 
               no entanto aguardo uma oportunidade!
            </p>
        </div>
        <div>
            <h2>
                Desenvolvedor de ferramentas internas
            </h2>
            <p>
                Atualmente trabalhando como desenvolvedor de ferramentas internas, 
                estou trabalhando na parte de automação de processos utilizando as linguagens de programação demonstrada em 
                <router-link to="/habilidades"> 
                    <strong>habilidades</strong>
                </router-link>, desenvolvi um grande projeto empresarial e PESSOAL com relação a automatizações.
            </p>
            <p>
                Iniciei um projeto para automação de atendimento de tecnicos internos, fiz um bot através da plataforma "Botmaker" 
                para realizar validações automaticas de nossos atendimentos de intalação, manutenção e retirada no qual era integrado com 3 diferentes API's.
                <ul>
                    <li>Mix telematics</li>
                    <li>CRM Tiger open source</li>
                    <li>Wikidados (Esta era a API da empresa que eu trabalhava)</li>
                </ul>
                Esta automatização consistia em certificar de que as informações estavam vindo corretamente dos rastreadores e 
                ajudar os tecnicos e preencher todas as informações na plataforma assim que a validação era finalizada.
            </p>
            <p>
                Posteriormente integrei com nosso aplicativo em Flutter, nos já tínhamos um aplicativo em flutter no qual era para clientes externos,
                no entanto fiz uma nova aba para nossos técnicos internos, no qual eles poderiam visualizar suas ordens de serviço e iniciar validação, ir para o bot validar e finalizar através do aplicativo.
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'my-experiencia',
        data() {
            return {
                
            }
        }
    }
</script>

<style>
#experienciaRoot {
    padding: 2rem;
}
</style>