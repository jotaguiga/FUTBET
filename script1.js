adImagens = new Array ("1divisao/americamg_bra.png", "1divisao/atleticopr_bra.png", "1divisao/atleticogo_bra.png", "1divisao/atleticomg_bra.png", "1divisao/bahia.png", "1divisao/bragantino_bra.png", "1divisao/ceara_bra.png", "1divisao/chapecoense_bra.png", "1divisao/corinthians_bra.png", "1divisao/cuiaba_bra.png", "1divisao/flarj.png", "1divisao/flurj.png", "1divisao/fortaleza.png", "1divisao/gremio.png", "1divisao/internacional_bra.png", "1divisao/juventude.png", "1divisao/palmeiras.png", "1divisao/santos.png", "1divisao/saopaulo_bra.png", "1divisao/sport.png");
            thisAd = 0;
            imgCt = adImagens.length ;
            function alternar(){   
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

        function mouseEmCima4(imagem) {
            document.getElementById('menu2').src="3menu-2.png";
            document.getElementById('menu2').style.background="#008000";
            } 
        function mouseFora4(imagem) {
            document.getElementById('menu2').src="3menu.png";
            document.getElementById('menu2').style.background="white";
            }


