const shell = require('shelljs');

const CronJob = require('cron').CronJob                 //para agendar a execução automática do envio de dados para outsystems

const job = new CronJob('9 * * * * *', () => {        	//executa a tarefa a cada 10 min
	console.log('Executando handler-min')		//escreve o texo que estiver entre ''
	shell.exec('node handler-min.js');		//faz a execução do handler-min
}, null, true, 'America/Sao_Paulo')
