    $(document).ready(function() {
        // console.log( "tiedotteet-xml-document-ready!" );
        // haetaan ajx-kutsulla tarvittavat tiedotteet !
        var haku = "https://raw.githubusercontent.com/netmiller/piazzadoc/master/tiedotteet/all.json";
        // var haku = "http://localhost/all.json";
        $.getJSON(haku, function(data) {
            console.log('ajax-data',data);
            var styleWarn = "background:#FEFAC3;border-bottom:1px solid #ccc;padding:5px;";
            var styleNorm = "background:#fff;border-bottom:1px solid #ccc;padding:5px;";
            var items = [];
            var m, s;
            $.each(data, function(i, tt) {
                if (tt.warn) {
                    s = styleWarn;
                } else {
                    s = styleNorm;
                }
                if (tt.viesti) {
                    msg = "<div style='" + s + "'>" + tt.viesti + '</div>';
                    items.push(msg);
                }
            });
            $("dl.portlet-static-_portlet_muutokset_ dd.piazza-info div")
                .replaceWith(items.join(""));
        });
    });
