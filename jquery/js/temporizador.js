(function($){
	$.fn.temporizador = function (opcoes){
		const opcoesFinais = $.extend({
			mensagem: 'Em breve!', //mensagem padrão
			horário: '23:59:59'
		}, opcoes) //se não tiver enviado nenhum valor a opcoes, retornará o mensagem Em breve! por padrão e o horário

		//consts de valores do relógio
		const horaDezena = $('<span class="digito">').html('0')
		const horaUnidade = $('<span class="digito">').html('0')
		const minutoDezena = $('<span class="digito">').html('0')
		const minutoUnidade = $('<span class="digito">').html('0')
		const segundoDezena = $('<span class="digito">').html('0') 
		const segundoUnidade = $('<span class="digito">').html('0')

		const separadorHora = $('<span class="separador">').html(':')
		const separadorMinuto = $('<span class="separador">').html(':')
		const mensagem = $('<div class="mensagem">').html(opcoesFinais.mensagem)

		$(this).addClass('temporizador')
		$(this).append(
			//hora
			horaDezena, horaUnidade, separadorHora,
			//minuto
			minutoDezena, minutoUnidade, separadorMinuto,
			//segundo e a mensagem
			segundoDezena, segundoUnidade, mensagem)

		const regex = new regExp(/(\d\d):(\d\d):(\d\d)/) //sistema de captura, HH:MM:SS
		const horarioAlvo = regex.exec(opcoesFinais.horario)
		console.log(horarioAlvo)

		let temporizador = setInterval(()=> {
			const agora = new Date()
			const alvo = new Date()
			alvo.setHours(horarioAlvo[1]) //no índice 1 do horário alvo está a hora
			alvo.setMinutes(horarioAlvo[2]) //no índice 1 do horário alvo está o minuto
			alvo.setSeconds(horarioAlvo[3]) //no índice 1 do horário alvo está o segundo

			const diferencaEmMilisegundo = alvo.getTime() - agora.getTime() //se a hora alvo for menor que a hora de agora, quer dizer que passou do tempo e não precisará fazer nada
			if ()	if(diferencaEmMilisegundo >= 0){
				cosnt diferenca = regex.exec(new Date(diferencaEmMilisegundo).toISOString()) //o .toISOString é para que o horário fornecido não leve em consideração o fuso horário. se não colocar, ele retornará um valor diferente do necessário para o projeto
				console.log(diferenca)

				horaDezena.html(diferenca[1][0])
				horaUnidade.html(diferenca[1][1])
				minutoDezena.html(diferenca[2][0])
				minutoUnidade.html(diferenca[2][1])
				segundoDezena.html(diferenca[3][0])
				segundoUnidade.html(diferenca[3][1])
			}else { 
				clearInterval(temporizador) //para parar o temporizador quando chegar na hora alvo
			}
		}, 1000) //tempo de atualização -> 1 segundo

		return this
	}
})(jQuery)