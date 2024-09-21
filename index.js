fetch("http://185.228.82.174:30120/info.json")
    .then(response => response.json())
    .then(serverInfo => {
        const serverName = serverInfo.vars.sv_projectName;

        fetch("http://185.228.82.174:30120/players.json")
            .then(response => response.json())
            .then(players => {
                let bots = 0;

                players.forEach(player => {
                    if (player.identifiers && player.identifiers.length > 0 && !player.identifiers[0].startsWith("license:")) {
                        bots++;
                    }
                });

                console.log(`${serverName} heeft ${bots} bots`);
            })
            .catch(error => {
                console.error("Er is een fout opgetreden bij het ophalen van de spelersinformatie:", error);
            });
    })
    .catch(error => {
        console.error("Er is een fout opgetreden bij het ophalen van de serverinfo:", error);
    });
