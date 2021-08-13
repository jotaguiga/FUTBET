adImagens = new Array ("1divisao/americamg_bra.png", "1divisao/atleticopr_bra.png", "1divisao/atleticogo_bra.png", "1divisao/atleticomg_bra.png", "1divisao/bahia.png", "1divisao/bragantino_bra.png", "1divisao/ceara_bra.png", "1divisao/chapecoense_bra.png", "1divisao/corinthians_bra.png", "1divisao/cuiaba_bra.png", "1divisao/flarj.png", "1divisao/flurj.png", "1divisao/fortaleza.png", "1divisao/gremio.png", "1divisao/internacional_bra.png", "1divisao/juventude.png", "1divisao/palmeiras.png", "1divisao/santos.png", "1divisao/saopaulo_bra.png", "1divisao/sport.png");
            thisAd = 0;
            imgCt = adImagens.length ;
            function alternar(){   
                document.getElementById('duelo').style.opacity="1.0";

                if (document.images)   {		if (thisAd == imgCt)	   {			thisAd = 0;	   }	   document.adBanner.src=adImagens[thisAd];
            	document.adBanner.alt=adImagens[thisAd];
                setTimeout("alternar()", 0.2 * 1000)
                thisAd++;}}

        function mouseEmCima1(imagem) {
            document.getElementById('espadas').src="espadas1.png";
            } 
        function mouseFora1(imagem) {
            document.getElementById('espadas').src="espadas.png";
            }

        function mouseEmCima2(imagem) {
            document.getElementById('bola').src="bolafutebol1.png";
            } 
        function mouseFora2(imagem) {
            document.getElementById('bola').src="bolafutebol.png";
            }

            function mouseEmCima3(imagem) {
            document.getElementById('jogador').src="jogador1.png";
            } 
        function mouseFora3(imagem) {
            document.getElementById('jogador').src="jogador.png";
            }

        function mudar(){
            var valor = $("#times").find(':selected').attr('value');
            var dado = $("#times").find(':selected').attr('data-dado');
            document.getElementById('img-mandante').src=valor;
            document.getElementById('estadio').innerHTML=dado;
        };

        function mudar1(){
            document.getElementById('img-visitante').src=document.getElementById('times1').value
        };

        function mudar2(){
            var team = $("#divisao").find(':selected').text();
                if (team=="Série A"){
                    const team1 = document.querySelector('#team1');
                    team1.textContent = 'América-MG';
                    team1.value = '1divisao/americamg_bra.png';
                    team1.setAttribute('data-dado', 'Independência');

                    const team2 = document.querySelector('#team2');
                    team2.textContent = 'Athletico-PR';
                    team2.value = '1divisao/atleticopr_bra.png';
                    team2.setAttribute('data-dado', 'Arena da Baixada');

                    const team3 = document.querySelector('#team3');
                    team3.textContent = 'Atlético-GO';
                    team3.value = '1divisao/atleticogo_bra.png';
                    team3.setAttribute('data-dado', 'Antônio Accioly');

                    const team4 = document.querySelector('#team4');
                    team4.textContent = 'Atlético-MG';
                    team4.value = '1divisao/atleticomg_bra.png';
                    team4.setAttribute('data-dado', 'Mineirão');

                    const team5 = document.querySelector('#team5');
                    team5.textContent = 'Bahia';
                    team5.value = '1divisao/bahia.png';
                    team5.setAttribute('data-dado', 'Arena Fonte Nova');

                    const team6 = document.querySelector('#team6');
                    team6.textContent = 'Bragantino RedBull';
                    team6.value = '1divisao/bragantino_bra.png';
                    team6.setAttribute('data-dado', 'Nabi Abi Chedid');

                    const team7 = document.querySelector('#team7');
                    team7.textContent = 'Ceará';
                    team7.value = '1divisao/ceara_bra.png';
                    team7.setAttribute('data-dado', 'Arena Castelão');

                    const team8 = document.querySelector('#team8');
                    team8.textContent = 'Chapecoense';
                    team8.value = '1divisao/chapecoense_bra.png';
                    team8.setAttribute('data-dado', 'Arena Condá');

                    const team9 = document.querySelector('#team9');
                    team9.textContent = 'Corinthians';
                    team9.value = '1divisao/corinthians_bra.png';
                    team9.setAttribute('data-dado', 'Neo Química Arena');

                    const team10 = document.querySelector('#team10');
                    team10.textContent = 'Cuiabá';
                    team10.value = '1divisao/cuiaba_bra.png';
                    team10.setAttribute('data-dado', 'Arena Pantanal');

                    const team11 = document.querySelector('#team11');
                    team11.textContent = 'Flamengo';
                    team11.value = '1divisao/flarj.png';
                    team11.setAttribute('data-dado', 'Maracanã');

                    const team12 = document.querySelector('#team12');
                    team12.textContent = 'Fluminense';
                    team12.value = '1divisao/flurj.png';
                    team12.setAttribute('data-dado', 'Maracanã');

                    const team13 = document.querySelector('#team13');
                    team13.textContent = 'Fortaleza';
                    team13.value = '1divisao/fortaleza.png';
                    team13.setAttribute('data-dado', 'Arena Castelão');

                    const team14 = document.querySelector('#team14');
                    team14.textContent = 'Grêmio';
                    team14.value = '1divisao/gremio.png';
                    team14.setAttribute('data-dado', 'Arena do Grêmio');

                    const team15 = document.querySelector('#team15');
                    team15.textContent = 'Internacional';
                    team15.value = '1divisao/internacional_bra.png';
                    team15.setAttribute('data-dado', 'Beira-Rio');

                    const team16 = document.querySelector('#team16');
                    team16.textContent = 'Juventude';
                    team16.value = '1divisao/juventude.png.png';
                    team16.setAttribute('data-dado', 'Alfredo Jaconi');

                    const team17 = document.querySelector('#team17');
                    team17.textContent = 'Palmeiras';
                    team17.value = '1divisao/palmeiras.png';
                    team17.setAttribute('data-dado', 'Allianz Parque');

                    const team18 = document.querySelector('#team18');
                    team18.textContent = 'Santos';
                    team18.value = '1divisao/santos.png';
                    team18.setAttribute('data-dado', 'Vila Belmiro');

                    const team19 = document.querySelector('#team19');
                    team19.textContent = 'São Paulo';
                    team19.value = '1divisao/saopaulo_bra.png';
                    team19.setAttribute('data-dado', 'Morumbi');

                    const team20 = document.querySelector('#team20');
                    team20.textContent = 'Sport';
                    team20.value = '1divisao/sport.png';
                    team20.setAttribute('data-dado', 'Ilha do retiro');
                };

                if (team=="Série B"){
                    const team1 = document.querySelector('#team1');
                    team1.textContent = 'Avaí';
                    team1.value = '2divisao/avai_bra.png';
                    team1.setAttribute('data-dado', 'Ressacada');

                    const team2 = document.querySelector('#team2');
                    team2.textContent = 'Botafogo';
                    team2.value = '2divisao/botafogorj_bra.png';
                    team2.setAttribute('data-dado', 'Nilton Santos');

                    const team3 = document.querySelector('#team3');
                    team3.textContent = 'Brasil de Pelotas';
                    team3.value = '2divisao/brasilpelotas_bra.png';
                    team3.setAttribute('data-dado', 'Bento Freitas');

                    const team4 = document.querySelector('#team4');
                    team4.textContent = 'Brusque';
                    team4.value = '2divisao/brusquesc_bra.png';
                    team4.setAttribute('data-dado', 'Augusto Bauer');

                    const team5 = document.querySelector('#team5');
                    team5.textContent = 'Confiança';
                    team5.value = '2divisao/confianca_se.png';
                    team5.setAttribute('data-dado', 'Batistão');

                    const team6 = document.querySelector('#team6');
                    team6.textContent = 'Coritiba';
                    team6.value = '2divisao/coritiba_bra.png';
                    team6.setAttribute('data-dado', 'Couto Pereira');

                    const team7 = document.querySelector('#team7');
                    team7.textContent = 'CRB';
                    team7.value = '2divisao/crb_bra.png';
                    team7.setAttribute('data-dado', 'Rei Pelé');

                    const team8 = document.querySelector('#team8');
                    team8.textContent = 'Cruzeiro';
                    team8.value = '2divisao/cruzeiro_bra.png';
                    team8.setAttribute('data-dado', 'Mineirão');

                    const team9 = document.querySelector('#team9');
                    team9.textContent = 'CSA';
                    team9.value = '2divisao/csa_bra.png';
                    team9.setAttribute('data-dado', 'Rei Pelé');

                    const team10 = document.querySelector('#team10');
                    team10.textContent = 'Goias';
                    team10.value = '2divisao/goias.png';
                    team10.setAttribute('data-dado', 'Serrinha');

                    const team11 = document.querySelector('#team11');
                    team11.textContent = 'Guarani';
                    team11.value = '2divisao/guaranisp_bra.png';
                    team11.setAttribute('data-dado', 'Brinco de Ouro');

                    const team12 = document.querySelector('#team12');
                    team12.textContent = 'Londrina';
                    team12.value = '2divisao/londrina_pr.png';
                    team12.setAttribute('data-dado', 'Estádio do Café');

                    const team13 = document.querySelector('#team13');
                    team13.textContent = 'Náutico';
                    team13.value = '2divisao/nautico.png';
                    team13.setAttribute('data-dado', 'Aflitos');

                    const team14 = document.querySelector('#team14');
                    team14.textContent = 'Operário-PR';
                    team14.value = '2divisao/operario_pr.png';
                    team14.setAttribute('data-dado', 'Germano Krüger');

                    const team15 = document.querySelector('#team15');
                    team15.textContent = 'Ponte Preta';
                    team15.value = '2divisao/pontepreta_bra.png';
                    team15.setAttribute('data-dado', 'Moisés Lucarelli');

                    const team16 = document.querySelector('#team16');
                    team16.textContent = 'Remo';
                    team16.value = '2divisao/remo.png';
                    team16.setAttribute('data-dado', 'Baenão');

                    const team17 = document.querySelector('#team17');
                    team17.textContent = 'Sampaio Corrêa';
                    team17.value = '2divisao/samapaiocorrea_ma.png';
                    team17.setAttribute('data-dado', 'Castelão');

                    const team18 = document.querySelector('#team18');
                    team18.textContent = 'Vasco da Gama';
                    team18.value = '2divisao/Vasco.png';
                    team18.setAttribute('data-dado', 'São Januário');

                    const team19 = document.querySelector('#team19');
                    team19.textContent = 'Vila Nova';
                    team19.value = '2divisao/vilago.png';
                    team19.setAttribute('data-dado', 'OBA');

                    const team20 = document.querySelector('#team20');
                    team20.textContent = 'Vitória';
                    team20.value = '2divisao/vitoria.png';
                    team20.setAttribute('data-dado', 'Barradão');

                };

                if (team=="Série C"){
                    const team1 = document.querySelector('#team1');
                    team1.textContent = 'Altos';
                    team1.value = '3divisao/altos_pi.png';
                    team1.setAttribute('data-dado', 'Felipão');

                    const team2 = document.querySelector('#team2');
                    team2.textContent = 'Botafogo-PB';
                    team2.value = '3divisao/botafogopb_bra.png';
                    team2.setAttribute('data-dado', 'Almeidão');

                    const team3 = document.querySelector('#team3');
                    team3.textContent = 'Botafogo-SP';
                    team3.value = '3divisao/botafogosp_bra.png';
                    team3.setAttribute('data-dado', 'Santa Cruz');

                    const team4 = document.querySelector('#team4');
                    team4.textContent = 'Criciúma';
                    team4.value = '3divisao/criciuma_bra.png';
                    team4.setAttribute('data-dado', 'Heriberto Hülse');

                    const team5 = document.querySelector('#team5');
                    team5.textContent = 'Ferroviário';
                    team5.value = '3divisao/ferroviarioce_bra.png';
                    team5.setAttribute('data-dado', 'Arena Castelão');

                    const team6 = document.querySelector('#team6');
                    team6.textContent = 'Figueirense';
                    team6.value = '3divisao/figueirense.png';
                    team6.setAttribute('data-dado', 'Orlando Scarpelli');

                    const team7 = document.querySelector('#team7');
                    team7.textContent = 'Floresta';
                    team7.value = '3divisao/florestace.png';
                    team7.setAttribute('data-dado', 'Domingão');

                    const team8 = document.querySelector('#team8');
                    team8.textContent = 'Ituano';
                    team8.value = '3divisao/ituano_sp.png';
                    team8.setAttribute('data-dado', 'Novelli Júnior');

                    const team9 = document.querySelector('#team9');
                    team9.textContent = 'Jacuipense';
                    team9.value = '3divisao/jacuipense_bra.png';
                    team9.setAttribute('data-dado', 'Valfredão');

                    const team10 = document.querySelector('#team10');
                    team10.textContent = 'Manaus';
                    team10.value = '3divisao/manaus_bra.png';
                    team10.setAttribute('data-dado', 'Arena da Amazônia');

                    const team11 = document.querySelector('#team11');
                    team11.textContent = 'Mirassol';
                    team11.value = '3divisao/miirassol_sp.png';
                    team11.setAttribute('data-dado', 'Maião');

                    const team12 = document.querySelector('#team12');
                    team12.textContent = 'Novohorizontino';
                    team12.value = '3divisao/novorinzontino_sp.png';
                    team12.setAttribute('data-dado', 'Jorge Ismael de Biasi');

                    const team13 = document.querySelector('#team13');
                    team13.textContent = 'Oeste';
                    team13.value = '3divisao/oestesp_bra.png';
                    team13.setAttribute('data-dado', 'Arena Barueri');

                    const team14 = document.querySelector('#team14');
                    team14.textContent = 'Paraná';
                    team14.value = '3divisao/parana.png';
                    team14.setAttribute('data-dado', 'Vila Capanema');

                    const team15 = document.querySelector('#team15');
                    team15.textContent = 'Paysandu';
                    team15.value = '3divisao/paysandu.png';
                    team15.setAttribute('data-dado', 'Curuzu');

                    const team16 = document.querySelector('#team16');
                    team16.textContent = 'Santa Cruz';
                    team16.value = '3divisao/santa.png';
                    team16.setAttribute('data-dado', 'Arruda');

                    const team17 = document.querySelector('#team17');
                    team17.textContent = 'São José-RS';
                    team17.value = '3divisao/saojosers_bra.png';
                    team17.setAttribute('data-dado', "Passo d'Areia");

                    const team18 = document.querySelector('#team18');
                    team18.textContent = 'Tombense';
                    team18.value = '3divisao/tombense_mg.png';
                    team18.setAttribute('data-dado', 'Almeidão');

                    const team19 = document.querySelector('#team19');
                    team19.textContent = 'Volta Redonda';
                    team19.value = '3divisao/voltaredondarj_bra.png';
                    team19.setAttribute('data-dado', 'Raulino de Oliveira');

                    const team20 = document.querySelector('#team20');
                    team20.textContent = 'Ypiranga de Erechim';
                    team20.value = '3divisao/ypiranga_rs.png';
                    team20.setAttribute('data-dado', 'Colosso da Lagoa');
                };

                
        };


        function mudar3(){
            var teamv = $("#divisao1").find(':selected').text();
                if (teamv=="Série A"){
                    const team21 = document.querySelector('#team21');
                    team21.textContent = 'América-MG';
                    team21.value = '1divisao/americamg_bra.png';
                   

                    const team22 = document.querySelector('#team22');
                    team22.textContent = 'Athletico-PR';
                    team22.value = '1divisao/atleticopr_bra.png';
                   

                    const team23 = document.querySelector('#team23');
                    team23.textContent = 'Atlético-GO';
                    team23.value = '1divisao/atleticogo_bra.png';
                   

                    const team24 = document.querySelector('#team24');
                    team24.textContent = 'Atlético-MG';
                    team24.value = '1divisao/atleticomg_bra.png';
                   

                    const team25 = document.querySelector('#team25');
                    team25.textContent = 'Bahia';
                    team25.value = '1divisao/bahia.png';
                   

                    const team26 = document.querySelector('#team26');
                    team26.textContent = 'Bragantino RedBull';
                    team26.value = '1divisao/bragantino_bra.png';
                   

                    const team27 = document.querySelector('#team27');
                    team27.textContent = 'Ceará';
                    team27.value = '1divisao/ceara_bra.png';
                   

                    const team28 = document.querySelector('#team28');
                    team28.textContent = 'Chapecoense';
                    team28.value = '1divisao/chapecoense_bra.png';
                   

                    const team29 = document.querySelector('#team29');
                    team29.textContent = 'Corinthians';
                    team29.value = '1divisao/corinthians_bra.png';
                   

                    const team30 = document.querySelector('#team30');
                    team30.textContent = 'Cuiabá';
                    team30.value = '1divisao/cuiaba_bra.png';
                    

                    const team31 = document.querySelector('#team31');
                    team31.textContent = 'Flamengo';
                    team31.value = '1divisao/flarj.png';
                    

                    const team32 = document.querySelector('#team32');
                    team32.textContent = 'Fluminense';
                    team32.value = '1divisao/flurj.png';
                    

                    const team33 = document.querySelector('#team33');
                    team33.textContent = 'Fortaleza';
                    team33.value = '1divisao/fortaleza.png';
                    

                    const team34 = document.querySelector('#team34');
                    team34.textContent = 'Grêmio';
                    team34.value = '1divisao/gremio.png';
                   

                    const team35 = document.querySelector('#team35');
                    team35.textContent = 'Internacional';
                    team35.value = '1divisao/internacional_bra.png';
                    

                    const team36 = document.querySelector('#team36');
                    team36.textContent = 'Juventude';
                    team36.value = '1divisao/juventude.png.png';
                    

                    const team37 = document.querySelector('#team37');
                    team37.textContent = 'Palmeiras';
                    team37.value = '1divisao/palmeiras.png';
                    

                    const team38 = document.querySelector('#team38');
                    team38.textContent = 'Santos';
                    team38.value = '1divisao/santos.png';
                    

                    const team39 = document.querySelector('#team39');
                    team39.textContent = 'São Paulo';
                    team39.value = '1divisao/saopaulo_bra.png';
                    

                    const team40 = document.querySelector('#team40');
                    team40.textContent = 'Sport';
                    team40.value = '1divisao/sport.png';
                    
                };

                if (teamv=="Série B"){
                    const team21 = document.querySelector('#team21');
                    team21.textContent = 'Avaí';
                    team21.value = '2divisao/avai_bra.png';
                   

                    const team22 = document.querySelector('#team22');
                    team22.textContent = 'Botafogo';
                    team22.value = '2divisao/botafogorj_bra.png';
                    

                    const team23 = document.querySelector('#team23');
                    team23.textContent = 'Brasil de Pelotas';
                    team23.value = '2divisao/brasilpelotas_bra.png';
                   

                    const team24 = document.querySelector('#team24');
                    team24.textContent = 'Brusque';
                    team24.value = '2divisao/brusquesc_bra.png';
                   

                    const team25 = document.querySelector('#team25');
                    team25.textContent = 'Confiança';
                    team25.value = '2divisao/confianca_se.png';
                   

                    const team26 = document.querySelector('#team26');
                    team26.textContent = 'Coritiba';
                    team26.value = '2divisao/coritiba_bra.png';
                   

                    const team27 = document.querySelector('#team27');
                    team27.textContent = 'CRB';
                    team27.value = '2divisao/crb_bra.png';
                   

                    const team28 = document.querySelector('#team28');
                    team28.textContent = 'Cruzeiro';
                    team28.value = '2divisao/cruzeiro_bra.png';
                  

                    const team29 = document.querySelector('#team29');
                    team29.textContent = 'CSA';
                    team29.value = '2divisao/csa_bra.png';
                   

                    const team30 = document.querySelector('#team30');
                    team30.textContent = 'Goias';
                    team30.value = '2divisao/goias.png';
                    

                    const team31 = document.querySelector('#team31');
                    team31.textContent = 'Guarani';
                    team31.value = '2divisao/guaranisp_bra.png';
                     

                    const team32 = document.querySelector('#team32');
                    team32.textContent = 'Londrina';
                    team32.value = '2divisao/londrina_pr.png';
                   

                    const team33 = document.querySelector('#team33');
                    team33.textContent = 'Náutico';
                    team33.value = '2divisao/nautico.png';
                   

                    const team34 = document.querySelector('#team34');
                    team34.textContent = 'Operário-PR';
                    team34.value = '2divisao/operario_pr.png';
                    

                    const team35 = document.querySelector('#team35');
                    team35.textContent = 'Ponte Preta';
                    team35.value = '2divisao/pontepreta_bra.png';
                     

                    const team36 = document.querySelector('#team36');
                    team36.textContent = 'Remo';
                    team36.value = '2divisao/remo.png';
                    

                    const team37 = document.querySelector('#team37');
                    team37.textContent = 'Sampaio Corrêa';
                    team37.value = '2divisao/samapaiocorrea_ma.png';
                   

                    const team38 = document.querySelector('#team38');
                    team38.textContent = 'Vasco da Gama';
                    team38.value = '2divisao/Vasco.png';
                    

                    const team39 = document.querySelector('#team39');
                    team39.textContent = 'Vila Nova';
                    team39.value = '2divisao/vilago.png';
                    

                    const team40 = document.querySelector('#team40');
                    team40.textContent = 'Vitória';
                    team40.value = '2divisao/vitoria.png';
                    

                };

                if (teamv=="Série C"){
                    const team21 = document.querySelector('#team21');
                    team21.textContent = 'Altos';
                    team21.value = '3divisao/altos_pi.png';
                  

                    const team22 = document.querySelector('#team22');
                    team22.textContent = 'Botafogo-PB';
                    team22.value = '3divisao/botafogopb_bra.png';
                   

                    const team23 = document.querySelector('#team23');
                    team23.textContent = 'Botafogo-SP';
                    team23.value = '3divisao/botafogosp_bra.png';
                   

                    const team24 = document.querySelector('#team24');
                    team24.textContent = 'Criciúma';
                    team24.value = '3divisao/criciuma_bra.png';
                   

                    const team25 = document.querySelector('#team25');
                    team25.textContent = 'Ferroviário';
                    team25.value = '3divisao/ferroviarioce_bra.png';
                   

                    const team26 = document.querySelector('#team26');
                    team26.textContent = 'Figueirense';
                    team26.value = '3divisao/figueirense.png';
                   

                    const team27 = document.querySelector('#team27');
                    team27.textContent = 'Floresta';
                    team27.value = '3divisao/florestace.png';
                   

                    const team28 = document.querySelector('#team28');
                    team28.textContent = 'Ituano';
                    team28.value = '3divisao/ituano_sp.png';
                   

                    const team29 = document.querySelector('#team29');
                    team29.textContent = 'Jacuipense';
                    team29.value = '3divisao/jacuipense_bra.png';
                   

                    const team30 = document.querySelector('#team30');
                    team30.textContent = 'Manaus';
                    team30.value = '3divisao/manaus_bra.png';
                    

                    const team31 = document.querySelector('#team31');
                    team31.textContent = 'Mirassol';
                    team31.value = '3divisao/miirassol_sp.png';
                   

                    const team32 = document.querySelector('#team32');
                    team32.textContent = 'Novohorizontino';
                    team32.value = '3divisao/novorinzontino_sp.png';
                    

                    const team33 = document.querySelector('#team33');
                    team33.textContent = 'Oeste';
                    team33.value = '3divisao/oestesp_bra.png';
                    

                    const team34 = document.querySelector('#team34');
                    team34.textContent = 'Paraná';
                    team34.value = '3divisao/parana.png';
                    

                    const team35 = document.querySelector('#team35');
                    team35.textContent = 'Paysandu';
                    team35.value = '3divisao/paysandu.png';
                    

                    const team36 = document.querySelector('#team36');
                    team36.textContent = 'Santa Cruz';
                    team36.value = '3divisao/santa.png';
                   

                    const team37 = document.querySelector('#team37');
                    team37.textContent = 'São José-RS';
                    team37.value = '3divisao/saojosers_bra.png';
                    

                    const team38 = document.querySelector('#team38');
                    team38.textContent = 'Tombense';
                    team38.value = '3divisao/tombense_mg.png';
                    

                    const team39 = document.querySelector('#team39');
                    team39.textContent = 'Volta Redonda';
                    team39.value = '3divisao/voltaredondarj_bra.png';
                    

                    const team40 = document.querySelector('#team40');
                    team40.textContent = 'Ypiranga de Erechim';
                    team40.value = '3divisao/ypiranga_rs.png';
                  
                };
            };