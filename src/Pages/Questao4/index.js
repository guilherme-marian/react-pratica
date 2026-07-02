import Movies from "../../Components/Questao4/movies"
import './questao4.css'

function Questao4(){
    return(
        <>
            <Movies
            movie ="Meu Amigo Totoro"
            card = "https://ingresso-a.akamaihd.net/prd/img/movie/ghibli-fest-2025-meu-amigo-totoro/e41339ce-ce11-433a-8bb2-67863cdbe6bd.webp"
            genre="Animação, Infantil, Documentário, Ação, Comédia, Aventura, Fantasia, Drama, filme familiar, Sobrenatural" 
            description="As irmãs Satsuki e Mei se mudam para o campo para ficar mais perto do hospital onde sua mãe está internada. Lá conhecem os Totoros, adoráveis criaturas místicas e alegres, que só podem ser vistas pelas crianças. Com eles, as duas irmãs viverão mágicas aventuras no campo."/>

            <Movies 
            movie ="A Viagem de Chihiro"
            card="https://br.web.img3.acsta.net/pictures/210/527/21052756_20131024195513383.jpg"
            genre="Animação, Fantasia, Infantil, Documentário, Ação" 
            description="Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los."/>

            <Movies
            movie="O Servioço de Entregas da Kiki"
            card="https://ingresso-a.akamaihd.net/prd/img/movie/ghibli-fest-2025-o-servico-de-entregas-da-kiki/fb7946b4-0e91-4f6a-8392-9719ca9fd89b.webp"
            genre="fantasia, aventura e amadurecimento"
            description="Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal. Infelizmente, os hotéis locais não aceitam bruxas e a polícia a flagra fazendo algumas travessuras."
            />
        </>

    );
}

export default Questao4;