var http = require("http");

var teamInfo = "";
var options = {
    host : 'www.thebluealliance.com',
    path : '',
    headers : {'X-TBA-App-Id': 'camilo86:TBA_Node:v01'}
};

function getTeamInformation(teamNumber) {
    options.path = '/api/v2/team/frc' + teamNumber.toString();

    var request = http.get(options, function(response) {

        response.on("data", function(dataChunk) {
            teamInfo += dataChunk;
        });

        response.on("error", function(error) {
            console.error(error.message);
        });

        response.on("end", function() {
            console.dir(teamInfo);
            console.dir('--------------');
        });
    });
}

module.exports.getTeamInformation = getTeamInformation;
