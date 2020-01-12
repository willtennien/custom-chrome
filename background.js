
// const x = []

// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function (details) {
//   	x.push(details)
//   	console.log(details.url)
//     for (var i = 0; i < details.requestHeaders.length; ++i) {
//       if (details.requestHeaders[i].name === 'User-Agent') {
//         details.requestHeaders[i].value = 'curl/7.64.1';
//       } else if (details.requestHeaders[i].name.toLowerCase() === 'cookie') {
//       	// details.requestHeaders[i].value = 'curl/7.64.1'
//       }
//     }
// 	// details.requestHeaders.push({ name: 'Set-Cookie', value: '' })
//     return { requestHeaders: details.requestHeaders };
//   },
//   {
//   	urls: [
//   		// "<all_urls>"
//   		// '*://*/*',
// 	  	'*://www.economist.com/*',
// 	  	'*://economist.com/*',
// 	  ]
// 	},
//   ['blocking', 'requestHeaders']
// );

// chrome.webRequest.onCompleted.addListener(
// 	() => {
// 		console.log('fdsal')
// 		chrome.cookies.getAll({domain: "www.economist.com"}, function(cookies) {
// 			console.log(cookies)
// 		    for(var i=0; i<cookies.length;i++) {
// 		        chrome.cookies.remove({url: "http://domain.com" + cookies[i].path, name: cookies[i].name});
// 		    }
// 		});
// 	},
// 	{
// 		urls: [
// 			'*://www.economist.com/*',
// 			'*://economist.com/*',
// 		]
// 	}
// )
