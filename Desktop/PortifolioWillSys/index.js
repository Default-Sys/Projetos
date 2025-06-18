const tap1 = document.getElementById('tap1');
const tap2 = document.getElementById('tap2');
const meuVideo = document.getElementById('meuVideo');
let videoAnterior = './Futuristic_digital__social_media_abstract_cyber_security_connection.mp4';
let videoNovo = './142363 (Original).mp4';
let timeoutID = null;
let podeTrocar = true;

function Visibility(){
    const minhaDiv = document.getElementById('minhaDiv')
    
    if (podeTrocar) 
        if (minhaDiv.classList.contains('visible')) {
            minhaDiv.classList.remove('visible');
            minhaDiv.classList.add('hidden');
            meuVideo.src = videoAnterior; // Retorna para o vídeo anterior

            setTimeout(function() {
                const divsProjeto = document.querySelectorAll('.projeto');
                divsProjeto.forEach(div => {
                    div.classList.remove('hidden');
                });
            }, 5000); // 5 segundos = 5000 milissegundos
            podeTrocar = true; // Impede a troca até que o timeout expire
        

        } else {
            minhaDiv.classList.remove('hidden');
            minhaDiv.classList.add('visible');
            meuVideo.src = videoNovo; // Define o novo vídeo
            // Define um timeout para voltar ao vídeo anterior após 5 segundos (5000 milissegundos)
            timeoutID = setTimeout(function() {
                meuVideo.src = videoAnterior; // Volta para o vídeo anterior
                podeTrocar = true; // Permite a troca novamente
            }, 6000); // 5 segundos = 5000 milissegundos
            podeTrocar = false; // Impede a troca até o timeout expirar
        }
    }

    function Visibility1(){
        const HiddenArticle = document.getElementById('art1');

        if (HiddenArticle.classList.contains('visible')) 
        {
            HiddenArticle.classList.remove('visible');
            HiddenArticle.classList.add('hidden');
        }
        
        else { 
            HiddenArticle.classList.remove('hidden');
            HiddenArticle.classList.add('visible');
        }}


tap1.addEventListener('click', Visibility)
tap2.addEventListener('click', Visibility1)