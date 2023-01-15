var n1 = []
for (var i = 0; i <= 3; i++) {
    n1.push("CSS/pagina principal/imagens/img" + i + ".jpg");
}
function prox() {
    if (i < n1.length) {
        document.getElementById("name").innerHTML = ""
        document.getElementById("sinopse").innerHTML = "";
        document.getElementById("img").src = n1[i];
        i++
        switch (i) {
            case 1:
                document.getElementById("name").innerHTML = `<td >
                <h2>One Piece:</h2>
            </td>`
                document.getElementById("sinopse").innerHTML = `Em um vilarejo onde um pirata chamado Shanks está com seu grupo.
        Um garoto do vilarejo, Monkey D. Luffy, quer virar pirata do grupo de Shanks.
        Depois de tanto gritar ele fica com fome, e abre uma caixinha que Shanks tinha guardado,
        e acha uma fruta. Ele a come e a acha gostosa. Ele não sabia que essa era uma Akuma no Mi (fruta
        do diabo),
        a Gomu Gomu no Mi, Fruta da Borracha. Com isso ele ganhou o poder de se esticar que nem
        borracha,
        só que ele nunca mais iria poder nadar. Depois de ser sequestrado, Shanks o salva, perdendo um
        braço,
        e é quando Ruffy entende o que é um pirata. Shanks dá para Ruffy seu chapéu de palha, e espera
        que Ruffy um dia devolva ele, e como um pirata.
        Vários anos depois, Ruffy parte de sua cidade para ser o maior pirata, indo atrás de uma
        tripulação e de um barco.`
                document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/onepiece.html" target="_blank">
                <label><img class="imgep" src="CSS/pagina principal/imagens/img0.jpg"></label>
                <h2> Episodio 1 </h2>
            </a></td>`
                document.getElementById("op").innerHTML = `<td class="optd">
                 <h3>Openings One Piece:</h3>
                 <hr>
                 <labeL>
                 <h3>Opening 1 :</h3>
                </labeL>
                 <audio preload="preload" controls>
                 <source src="CSS/audios/OnePiece1.mp3" type="audio/mp3" controls>
                 </audio> 
                 <br>
                 <br>
                 <br>
                 <hr>
                 <label>
                 <h3>Ending 1 :</h3>
                 </label>
             <audio preload="preload" controls>
              <source src="" type="audio/mp3">
              </audio>
             </td>`
                break;
            case 2:
                document.getElementById("name").innerHTML = `<td>
                <h2>Arifureta:</h2>
            </td>`
                document.getElementById("sinopse").innerHTML = `Hajime Nagumo junto com o resto de sua turma foram convocados para um mundo de fantasia.
        Eles foram tratados como Heróis e receberam a tarefa de salvar a raça humana de sua extinção.
        Mas o que deveria ser um sonho para um otaku rapidamente se transformou em um pesadelo para
        Hajime.
        Enquanto o resto de sua turma foi abençoado com poderes divinos,ele tinha uma simples
        habilidades de transmutação.
        Ridicularizado e intimidado por seus colegas de classe por ser fraco,ele logo se encontrou no
        desespero.
        Ele será capaz de sobreviver neste mundo perigoso cheio de monstros e demônios com apenas a
        força de um ferreiro?`
                document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/arifureta.html" target="_blank">
        <label><img class="imgep" src="CSS/pagina principal/imagens/img1.jpg"></label>
        <h2>Episodio 1</h2>
    </a></td>`
                document.getElementById("op").innerHTML = `<td class="optd">
    <h3>Openings Arifureta:</h3>
    <hr>
    <labeL>
    <h3>Opening 1 :</h3>
</labeL>
<audio preload="preload" controls>
    <source src="CSS/audios/Arifureta1.mp3" type="audio/mp3">
</audio> 
<br>
<br>
<br>
<hr>
<label>
<h3>Ending 1:</h3>
</label>
<audio preload="preload" controls>
 <source src="" type="audio/mp3"></audio>
</td>`
                break;
            case 3:
                document.getElementById("name").innerHTML = ` <td>
                <h2>Black Clover:</h2>
            </td>`
                document.getElementById("sinopse").innerHTML = `Black Clover apresenta um mundo onde poderes mágicos fazem parte da vida da população.
            Um dia, Asta e Yuno são abandonados em uma igreja na mesma noite.
            Enquanto Yuno possui poderes mágicos excepcionais, Asta não possui poder mágico algum.
            Aos quinze anos, os dois recebem o seus grimórios – livros mágicos que amplificam os poderes do
            detentor.
            Asta recebe um raro grimório de anti-magia, capaz de negar e repelir os feitiços do oponente.
            Dois opostos que nutrem uma rivalidade amigável,
            Yuno e Asta estão prontos para encarar os mais difíceis desafios para conquistar seu sonho em
            comum:
            tornar-se o Rei dos Magos`
                document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/blackclover.html" target="_blank">
            <label><img class="imgep" src="CSS/pagina principal/imagens/img2.jpg"></label>
            <h2>Episodio 1</h2>
        </a></td>`
                document.getElementById("op").innerHTML = ` <td class="optd">
        <h3>Openings Black Clover:</h3>
        <hr>
        <labeL>
        <h3>Opening 1 :</h3>
    </labeL>
    <audio preload="preload" controls>
        <source src="CSS/audios/BlackClover1.mp3" type="audio/mp3">
    </audio> 
    <br>
    <br>
    <br>
    <hr>
    <label><h3>Ending 1 :</h3>
    </label>
    <audio preload="preload" controls>
     <source src="" type="audio/mp3"></audio>

    </td>`
                break;
            case 4:
                document.getElementById("name").innerHTML = `<td>
                <h2>Ansatsusha Isekai:</h2>
            </td>`
                document.getElementById("sinopse").innerHTML = ` O assassino número um do mundo foi reencarnou como o filho mais velho de uma família de
                assassinos aristocratas.
                Em troca de reencarnar em outro mundo, uma deusa lhe impôs uma condição.
                “Mate o Herói que pela profecia destruirá o mundo“.
                Esta deveria ser a missão em sua nova vida.
                O efeito sinérgico do vasto conhecimento e experiência que ele adquiriu e que tornou possível
                todo tipo de assassinatos no mundo moderno,
                e as técnicas secretas e mágicas da família de assassinos mais poderosa do mundo da fantasia o
                transformam no maior assassino de todos os tempos`
                document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/Ansatsusha.html" target="_blank">
                <label><img class="imgep"
                        src="CSS/pagina principal/imagens/img3.jpg"></label>
                <h2>Episodio 1</h2>
            </a></td>`
                document.getElementById("op").innerHTML = `<td class="optd">
            <h3>Openings Ansatsusha:</h3>
            <hr>
            <labeL>
            <h3>Opening 1 :</h3>
        </labeL>
        <audio preload="preload" controls>
            <source src="CSS/audios/Ansatsusha1.mp3" type="audio/mp3">
        </audio>
        <br>
        <br>
        <br>
        <hr>
         <label>
         <h3>Ending 1 :</h3>
         </label>
        <audio preload="preload" controls>
         <source src="" type="audio/mp3"></audio>
    
        </td>`
                break;
        }
    }
    else {
        i = 0;
    }
}
function voltar() {
    if (i > 0) {
        i--
    }
    else {
        i = n1.length - 1;
        i = n1.length
    }
    switch (i) {
        case 1:
            document.getElementById("name").innerHTML = `<td >
            <h2>One Piece:</h2>
        </td>`
            document.getElementById("sinopse").innerHTML = `Em um vilarejo onde um pirata chamado Shanks está com seu grupo.
            Um garoto do vilarejo, Monkey D. Luffy, quer virar pirata do grupo de Shanks.
            Depois de tanto gritar ele fica com fome, e abre uma caixinha que Shanks tinha guardado,
            e acha uma fruta. Ele a come e a acha gostosa. Ele não sabia que essa era uma Akuma no Mi (fruta
            do diabo),
            a Gomu Gomu no Mi, Fruta da Borracha. Com isso ele ganhou o poder de se esticar que nem
            borracha,
            só que ele nunca mais iria poder nadar. Depois de ser sequestrado, Shanks o salva, perdendo um
            braço,
            e é quando Ruffy entende o que é um pirata. Shanks dá para Ruffy seu chapéu de palha, e espera
            que Ruffy um dia devolva ele, e como um pirata.
            Vários anos depois, Ruffy parte de sua cidade para ser o maior pirata, indo atrás de uma
            tripulação e de um barco.`
            document.getElementById("img").src = n1[0];
            document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/onepiece.html" target="_blank">
                <label><img class="imgep" src="CSS/pagina principal/imagens/img0.jpg"></label>
                <h2>Episodio 1</h2>
            </a></td>`
            document.getElementById("op").innerHTML = `<td class="optd">
            <h3>Openings One Piece:</h3>
            <hr>
            <labeL>
            <h3>Opening 1 :</h3>
        </labeL>
        <audio preload="preload" controls>
            <source src="CSS/audios/OnePiece1.mp3" type="audio/mp3" controls>
        </audio> 
        <br>
        <br>
        <br>
        <hr>
        <label>
        <h3>Ending 1 :</h3>
        </label>
        <audio preload="preload" controls>
         <source src="" type="audio/mp3"></audio>
    
        </td>`
            break;
        case 2:
            document.getElementById("name").innerHTML = `<td>
            <h2>Arifureta:</h2>
        </td>`
            document.getElementById("sinopse").innerHTML = `Hajime Nagumo junto com o resto de sua turma foram convocados para um mundo de fantasia.
            Eles foram tratados como Heróis e receberam a tarefa de salvar a raça humana de sua extinção.
            Mas o que deveria ser um sonho para um otaku rapidamente se transformou em um pesadelo para
            Hajime.
            Enquanto o resto de sua turma foi abençoado com poderes divinos,ele tinha uma simples
            habilidades de transmutação.
            Ridicularizado e intimidado por seus colegas de classe por ser fraco,ele logo se encontrou no
            desespero.
            Ele será capaz de sobreviver neste mundo perigoso cheio de monstros e demônios com apenas a
            força de um ferreiro?`
            document.getElementById("img").src = n1[1];
            document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/arifureta.html" target="_blank">
        <label><img class="imgep" src="CSS/pagina principal/imagens/img1.jpg"></label>
        <h2>Episodio 1</h2>
    </a></td>`
            document.getElementById("op").innerHTML = `<td class="optd">
    <h3>Openings Arifureta:</h3>
    <hr>
    <labeL>
    <h3>Opening 1 :</h3>
</labeL>
<audio preload="preload" controls>
    <source src="CSS/audios/Arifureta1.mp3" type="audio/mp3">
</audio>
<br>
<br>
<br>
<hr> 
<label>
<h3>Ending 1 :</h3>
</label>
<audio preload="preload" controls>
 <source src="" type="audio/mp3"></audio>
</td>`
            break;
        case 3:
            document.getElementById("name").innerHTML = ` <td>
            <h2>Black Clover:</h2>
        </td>`
            document.getElementById("sinopse").innerHTML = `Black Clover apresenta um mundo onde poderes mágicos fazem parte da vida da população.
                Um dia, Asta e Yuno são abandonados em uma igreja na mesma noite.
                Enquanto Yuno possui poderes mágicos excepcionais, Asta não possui poder mágico algum.
                Aos quinze anos, os dois recebem o seus grimórios – livros mágicos que amplificam os poderes do
                detentor.
                Asta recebe um raro grimório de anti-magia, capaz de negar e repelir os feitiços do oponente.
                Dois opostos que nutrem uma rivalidade amigável,
                Yuno e Asta estão prontos para encarar os mais difíceis desafios para conquistar seu sonho em
                comum:
                tornar-se o Rei dos Magos`
            document.getElementById("img").src = n1[2];
            document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/blackclover.html" target="_blank">
            <label><img class="imgep" src="CSS/pagina principal/imagens/img2.jpg"></label>
            <h2>Episodio 1</h2>
        </a></td>`
            document.getElementById("op").innerHTML = ` <td class="optd">
        <h3>Openings Black Clover:</h3>
        <hr>
        <labeL>
        <h3>Opening 1 :</h3>
    </labeL>
    <audio preload="preload" controls>
        <source src="CSS/audios/BlackClover1.mp3" type="audio/mp3">
    </audio>
    <br>
    <br>
    <br>
    <hr>
     <label>
     <h3>Ending 1 :</h3>
     </label>
    <audio preload="preload" controls>
     <source src="" type="audio/mp3"></audio>

    </td>`
            break;
        case 4:
            document.getElementById("name").innerHTML = `<td>
            <h2>Ansatsusha Isekai:</h2>
        </td>`
            document.getElementById("sinopse").innerHTML = `O assassino número um do mundo foi reencarnou como o filho mais velho de uma família de
                    assassinos aristocratas.
                    Em troca de reencarnar em outro mundo, uma deusa lhe impôs uma condição.
                    “Mate o Herói que pela profecia destruirá o mundo“.
                    Esta deveria ser a missão em sua nova vida.
                    O efeito sinérgico do vasto conhecimento e experiência que ele adquiriu e que tornou possível
                    todo tipo de assassinatos no mundo moderno,
                    e as técnicas secretas e mágicas da família de assassinos mais poderosa do mundo da fantasia o
                    transformam no maior assassino de todos os tempos`
            document.getElementById("img").src = n1[3];
            document.getElementById("link").innerHTML = `<td class="eptd"><a href="videos/Ansatsusha.html" target="_blank">
                <label><img class="imgep"
                        src="CSS/pagina principal/imagens/img3.jpg"></label>
                <h2>Episodio 1</h2>
            </a></td>`
            document.getElementById("op").innerHTML = `<td class="optd">
            <h3>Openings Ansatsusha:</h3>
            <hr>
            <labeL>
            <h3>Opening 1 :</h3>
        </labeL>
        <audio preload="preload" controls>
            <source src="CSS/audios/Ansatsusha1.mp3" type="audio/mp3">
        </audio> 
        <br>
        <br>
        <br>
        <hr>
        <label>
        <h3>Ending 1 :</h3>
        </label>
        <audio preload="preload" controls>
         <source src="" type="audio/mp3"></audio>
    
        </td>`
            break;
    }
}
