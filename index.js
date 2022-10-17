var Mustache = require('mustache');
var fs = require('fs');
var DATA = {
    name: "Android-Jester",
    date: new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        hour: 'numeric',
        timeZone: 'Africa/Accra',
        timeZoneName: 'long'
    })
};
function RemakeReadMe() {
    fs.readFile(".", function (err, data) {
        if (err) {
            console.log("Error is: " + err);
            throw err;
        }
        var output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });
    RemakeReadMe();
}
