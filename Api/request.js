const url = 'https://api.api-futebol.com.br/v1'

function dataCampeonato() {
    return $.ajax({
        url: url + '/campeonatos/10/tabela',
        type: 'GET',
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer live_2e29e289eee485ed3bf5533a81a1f9');
        },
        data: {},
        success: function getData(data) {
            let times = []
            let posicao = []
            let pontos = []
            let jogos = []
            let vitorias = []
            let empates = []
            let derrotas = []
            let gols_pro = []
            let gols_contra = []
            let saldo_gols = []
            let aproveitamento = []
                // let variacao_posicao = []


            let head = [

            ]

            for (let index = 0; index < data.length; index++) {
                posicao[index] = data[index].posicao;
                times[index] = data[index].time.nome_popular;
                pontos[index] = data[index].pontos;
                jogos[index] = data[index].jogos;
                vitorias[index] = data[index].vitorias;
                empates[index] = data[index].empates;
                derrotas[index] = data[index].derrotas;
                gols_pro[index] = data[index].gols_pro;
                gols_contra[index] = data[index].gols_contra;
                saldo_gols[index] = data[index].saldo_gols;
                aproveitamento[index] = data[index].aproveitamento;
                // variacao_posicao[index] = data[index].variacao_posicao;

            }

            times.unshift('POS')
            posicao.unshift('Time')
            pontos.unshift('PTS')
            jogos.unshift('J')
            vitorias.unshift('V')
            empates.unshift('E')
            derrotas.unshift('D')
            gols_pro.unshift('GP')
            gols_contra.unshift('GC')
            saldo_gols.unshift('SC')
            aproveitamento.unshift('%')

            function criarTabela(conteudo) {
                var tabela = document.createElement("table");
                var thead = document.createElement("thead");
                var tbody = document.createElement("tbody");
                var thr = function(i) { return (i == 0) ? "th" : "tr"; };
                for (var i = 0; i < conteudo.length; i++) {
                    var td = document.createElement("td");
                    for (var o = 0; o < conteudo[i].length; o++) {
                        var t = document.createElement(thr(i));
                        var texto = document.createTextNode(conteudo[i][o]);
                        t.appendChild(texto);
                        td.appendChild(t);
                    }
                    (i == 0) ? thead.appendChild(td): tbody.appendChild(td);
                }
                tabela.appendChild(thead);
                tabela.appendChild(tbody);
                return tabela;
            }

            document.getElementById("table").appendChild(criarTabela([
                head, posicao, times, pontos, jogos, vitorias, empates, derrotas, gols_pro, gols_contra, saldo_gols, aproveitamento
            ]));
            console.log(data)
            console.log(times);
        },
        error: function() {
            alert("Desculpe =(\nTente novamente mais tarde!")
        },
    });
}

dataCampeonato()