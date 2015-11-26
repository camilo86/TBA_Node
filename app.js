var t = require("./team");

var teams = process.argv.slice(2);

teams.forEach(t.getTeamInformation);
