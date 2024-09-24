fetch("https://servers-frontend.fivem.net/api/servers/single/qg6a49")
    .then(response => response.json())
    .then(serverInfo => {
        const serverName = serverInfo.Data.vars.sv_projectName;

        const players = serverInfo.Data.players;
        let bots = 0;

        players.forEach(player => {
            if (player.identifiers && player.identifiers.length > 0 && !player.identifiers[0].startsWith("license:")) {
                bots++;
            }
        });

        console.log(`${serverName} heeft ${bots} bots`);
    })
    .catch(error => {
        console.error("Error", error);
    });
