window.onload = function() {
    document.addEventListener("contextmenu", function(e){
      e.preventDefault();
    }, false);
    document.addEventListener("keydown", function(e) {
    //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "C" key + macOS
      if (e.keyCode == 8 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        diabledEvent(e);
      }
      // "I" key + macOS
      if (e.keyCode == 34 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e);
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e);
      }
    }, false);
    function disabledEvent(e){
      if (e.stopPropagation){
        e.stopPropagation();
      } else if (window.event){
        window.event.cancelBubble = true;
      }
      e.preventDefault();
      return false;
    }
  };

const colorDecider = (cases) => {
    if(cases >= 0 && cases < 0.1){
        return "#1C51A5"
    }else if(cases >= 0.1 && cases < 0.2){
        return "#06409C"
    }else if(cases >= 0.2 && cases < 0.3){
        return "#063D8E"
    }else if(cases >= 0.3 && cases < 0.4){
        return "#053580"
    }else if(cases >= 0.4 && cases < 0.5){
        return "#052472"
    }else if(cases >= 0.5 && cases < 0.6){
        return "#042964"
    }else if(cases >= 0.6 && cases < 0.7){
        return "#042356"
    }else if(cases >= 0.7 && cases < 0.8){
        return "#031E47"
    }else if(cases >= 0.8 && cases < 0.9){
        return "#031839"
    }else if(cases >= 0.9 && cases <= 1.0){
        return "#02122B"
    }else{
        return "#993636"
    }
}



//
const START = "#380000",
    STOP = "#ff0000",
    NONE = "#131313",
    COUNT_UP_OPTIONS = {
        duration: 1
    },
    SEARCH_OPTIONS = {
        keys: [{
            name: "name",
            weight: .5
        }, {
            name: "total",
            weight: .3
        }, {
            name: "iso",
            weight: .2
        }]
    };
let isMobile = !1;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0);

let countries, countUps = {},
    overlays = {},
    activeOverlay, fuse, globe,svg_g;
fetch("/resource/black.svg").then(res => res.text()).then(svg => {
    getData(svg)
}).catch(console.error.bind(console));



let getData = svg => {
        let reports = {};
        fetch("/resource/data").then(res => res.json()).then(data => {
            countries = data.countries,  $("#total-count").text(`/${data.worldwide.reports.toLocaleString()}`), $("#mortality-rate").html(`&nbsp;(${(data.worldwide.deaths/data.worldwide.reports*100).toFixed(2)}%)`), $("#recovery-rate").html(`&nbsp;(${(data.worldwide.recovered/data.worldwide.reports*100).toFixed(2)}%)`);
            for(let iso of data.countriesSortedByActive) reports[iso] = countries[iso].reports ** .25, "NP" != iso && addToCountryList(iso);
            createGlobe(data.max, reports, data.countries, svg), fadeIn(data.worldwide.reports, data.worldwide.deaths, data.worldwide.recovered)
            console.log('first time rendering finished')
            //Pusher.logToConsole = true

            var pusher = new Pusher('9c724564ee194a941319', {
                cluster: 'ap2',
                forceTLS: true
              })
        
            var channel = pusher.subscribe('data-changed');
            channel.bind('corona-cases', function(data) {
                console.log('working')
                fetch("/resource/data").then(res => res.json()).then(data => {
                    countries = data.countries,  $("#total-count").text(`/${data.worldwide.reports.toLocaleString()}`), $("#mortality-rate").html(`&nbsp;(${(data.worldwide.deaths/data.worldwide.reports*100).toFixed(2)}%)`), $("#recovery-rate").html(`&nbsp;(${(data.worldwide.recovered/data.worldwide.reports*100).toFixed(2)}%)`);
                    for(let iso of data.countriesSortedByActive) reports[iso] = countries[iso].reports ** .25, "NP" != iso && addToCountryList(iso);
                    $("#total-cases").text((data.worldwide.reports - data.worldwide.deaths - data.worldwide.recovered).toLocaleString()), $("#total-deaths").text(data.worldwide.deaths.toLocaleString()), $("#total-recovered").text(data.worldwide.recovered.toLocaleString())
                })
            }) 

        }).catch(e => console.log(e))
    },
    addToCountryList = iso => {
        $("#country-list").append(`\n        <div class="country">\n            <div class="country-flag" style="background-image: url(${countries[iso].flag})"></div>\n            <div class="country-info">\n                <span class="country-name">${countries[iso].name}</span><br/>\n                <span class="country-cases">${countries[iso].reports.toLocaleString()} <span class="muted">total cases</span></span>\n            </div>\n        </div>\n    `)
    };
const createGlobe = (max, reports, countries, svg) => {
    reports[max] = 0;
    const maxReports = Math.max(...Object.values(reports));
    reports[max] = maxReports + maxReports / 2;
    let color, mapColors = "",
        countryColors = {},
        country;
    for(let iso in reports) {
        color = colorDecider( reports[iso] / reports[max]);
        let changed = countries[iso].deltaCases > 0 || countries[iso].deltaDeaths > 0;
        countryColors[iso] = color, mapColors += `#${iso} {\n            fill: ${color};\n            ${changed?"stroke: rgb(215,215,215)":""};\n        }  `
    }
    $("#loader-container").remove(), Earth.mapSvg = svg, globe = new Earth("globe", {
        autoRotate: !0,
        autoRotateDelay: 3e3,
        mapHitTest: !0,
        mapLandColor: NONE,
        mapSeaColor: "RGBA(0,0,0, .75)",
        mapBorderColor: "RGBA(0, 0, 0, 0)",
        mapStyles: mapColors.slice(0, mapColors.length - 3),
        transparent: !0,
        lightType: "sun",
        lightIntensity: 1,
        quality: 4,
        zoom: isMobile ? .8 : 1,
        zoomMax: 2,
        zoomable: !0
    });
    for(let iso in countries) country = countries[iso], overlays[iso] = {
        reports: country.reports,
        deaths: country.deaths,
        recovered: country.recovered,
        location: {
            lat: country.lat,
            lng: country.lng
        },
        className: `ISO_${iso}`,
        content: makeOverlay(iso, country, countryColors),
        events: !0,
        counter: {
            active: void 0,
            deaths: void 0,
            recovered: void 0
        }
    };
    globe.addEventListener("dragstart", () => {
        activeOverlay && activeOverlay.remove(), globe.autoRotate = !0
    }), $("#more-info-button").on("click", () => {
        MicroModal.show('more-info')
        activeOverlay && activeOverlay.remove(), globe.autoRotate = !0
    }), updateGlobeListener(globe)
};
let updateGlobeListener = globe => {
        globe.addEventListener("click", event => {
            0 != $("#search-bar").length && closeSearch(), activeOverlay && activeOverlay.remove(), event.id && event.id in countries && goToCountry(event.id, globe)
        })
    }
    goToCountry = iso => {
        globe.autoRotate = !1, activeOverlay && activeOverlay.remove(), activeOverlay = globe.addOverlay(overlays[iso]);
        try {
            countUps[iso] = {
                active: void 0,
                deaths: void 0,
                recovered: void 0
            }, countUps[iso].active = new CountUp(iso + "-active", countries[iso].reports, COUNT_UP_OPTIONS), countUps[iso].deaths = new CountUp(iso + "-dead", countries[iso].deaths, COUNT_UP_OPTIONS), countUps[iso].recovered = new CountUp(iso + "-recovered", countries[iso].recovered, COUNT_UP_OPTIONS), countUps[iso].active.start(), countUps[iso].deaths.start(), countUps[iso].recovered.start()
        } catch (err) {
            console.log(err), $(`#${iso}-active`).text(countries[iso].reports.toLocaleString()), $(`#${iso}-dead`).text(countries[iso].deaths.toLocaleString()), $(`#${iso}-recovered`).text(countries[iso].recovered.toLocaleString())
        }
        globe.goTo({
            lat: countries[iso].lat,
            lng: countries[iso].lng
        }, {
            relativeDuration: 200,
            zoom: isMobile ? .9 : 1.1
        })
    },
    makeOverlay = (iso, country, colors) => `\n        <img src="${country.flag}">\n        <div class="title">\n            <span>${country.name}<span><br/>\n            <span class="tiny">${country.cases.toLocaleString()} total cases</span>\n        </div>\n        <div class="info" style="background-color: ${colors[iso]}">\n            <span><span id="${iso}-active"></span> active</span><br/>\n            <span><span id="${iso}-dead"></span> deceased</span><br/>\n            <span><span id="${iso}-recovered"></span> recovered</span><br/>\n            ${country.deltaCases>0||country.deltaDeaths>0?`\n                        <hr>\n                        <div class="changed">\n                            <span style="color: white">TODAY</span><br/>\n                            ${country.deltaCases>0?`<span>+ ${country.deltaCases.toLocaleString()} cases</span><br/>`:""}\n                            ${country.deltaDeaths>0?`<span>+ ${country.deltaDeaths.toLocaleString()} deceased</span><br/>`:""}\n                        </div>\n                        `:""}\n        </div>\n    `,
    fadeIn = (reports, deaths, recovered) => {
        setTimeout(() => {
            try {
                new CountUp("total-cases", reports - deaths - recovered, COUNT_UP_OPTIONS).start(), setTimeout(() => {
                    new CountUp("total-deaths", deaths, COUNT_UP_OPTIONS).start()
                }, 1e3), setTimeout(() => {
                    new CountUp("total-recovered", recovered, COUNT_UP_OPTIONS).start()
                }, 1500)
            } catch (err) {
                $("#total-cases").text((reports - deaths - recovered).toLocaleString()), $("#total-deaths").text(deaths.toLocaleString()), $("#total-recovered").text(recovered.toLocaleString())
            }
        }, 1e3), $("#header").delay(500).fadeIn(500), $("#footer").delay(1e3).fadeIn(500)
    };

       

    