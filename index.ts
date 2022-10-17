const Mustache = require('mustache');
const fs = require('fs');

let DATA = {
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
    fs.readFile(".", (err: string, data: { toString: () => any; }) => {
        if (err) { 
            console.log("Error is: " + err);
            throw err;
        }
        const output = Mustache.render(data.toString(), DATA);
        fs.writeFileSync('README.md', output);
    });

    RemakeReadMe();
}