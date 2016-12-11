var request = require('request');
var settings = require('../settings.js');
var dash_button = require('node-dash-button');
var dash = dash_button(settings.dashButtonAddress, null, null, 'all'); //address from step above
dash.on("detected", function (){
    request.post('https://slack.com/api/chat.postMessage',
        {
            form: {
                token: settings.slackToken,
                channel: settings.slackChannel,
                username: settings.slackName,
                text: settings.slackPost,
		icon_url: settings.slackIcon
            }
        }
        , (error, response, body) => {
            console.log(error)
        }
    )
});

