'use strict';

const scriptUrl = 'https://gitcdn.link/repo/david-sabata/web-scrobbler/master/core/connectors.js';

require([scriptUrl], (connectors) => {
    $(() => {
        let sortedConnectors = connectors.sort((a, b) => {
            return a.label.localeCompare(b.label);
        });
        
        for (let connector of sortedConnectors) {
            let item = $('<li/>').text(connector.label);
            $('#connectors-list').append(item);
        }
    })
});
