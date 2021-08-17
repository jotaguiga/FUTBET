<?php
                // Iniciamos a função do CURL:
                $ch = curl_init('https://api.api-futebol.com.br/v1/campeonatos');

                curl_setopt_array($ch, [

                // Equivalente ao -X:
                CURLOPT_CUSTOMREQUEST => 'GET',

                // Equivalente ao -H:
                CURLOPT_HTTPHEADER => [
                'Authorization: Bearer test_4e7b11c66c576315c5d129f32bab3b'
                ],

                // Permite obter o resultado
                CURLOPT_RETURNTRANSFER => 1,
                ]);

                $resposta = json_decode(curl_exec($ch), true);
                curl_close($ch);        
?>