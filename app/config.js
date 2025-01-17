define(["require", "exports", "esri/Color", "esri/widgets/Slider"], function (require, exports, Color, Slider) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.countySizeStops = exports.stateChangeSizeStops = exports.stateResultsSizeStops = exports.oColorCIM = exports.dColorCIM = exports.rColorCIM = exports.haloSize = exports.haloColor = exports.oColor = exports.dColor = exports.rColor = exports.fieldInfos = exports.results = exports.years = exports.selectedYear = exports.stateReferenceScale = exports.scaleThreshold = exports.referenceScale = exports.maxScale = exports.countiesLayerPortalItem = exports.statesLayerPortalItem = exports.basemapPortalItem = exports.yearSlider = void 0;
    exports.setUrlParams = setUrlParams;
    exports.setSelectedYear = setSelectedYear;
    var validYears = [2000, 2004, 2008, 2012, 2016, 2020, 2024];
    function getUrlParams() {
        var queryParams = document.location.search.substr(1);
        var result = {};
        queryParams.split("&").forEach(function (part) {
            var item = part.split("=");
            result[item[0]] = parseInt(decodeURIComponent(item[1]));
        });
        return result.year;
    }
    function setUrlParams(year) {
        window.history.pushState("", "", "".concat(window.location.pathname, "?year=").concat(year));
    }
    var year = getUrlParams();
    exports.yearSlider = new Slider({
        container: document.getElementById("slider"),
        min: 2004,
        max: 2024,
        visibleElements: {
            labels: false
        },
        labelInputsEnabled: false,
        rangeLabelInputsEnabled: false,
        steps: 4,
        tickConfigs: [{
                mode: "position",
                values: [2004, 2008, 2012, 2016, 2020, 2024],
                labelsVisible: true,
                tickCreatedFunction: function (value, tickElement, labelElement) {
                    var setValue = function () {
                        exports.yearSlider.values = [value];
                    };
                    tickElement.addEventListener("click", setValue);
                    tickElement.style.cursor = "pointer";
                    labelElement.addEventListener("click", setValue);
                    labelElement.style.cursor = "pointer";
                }
            }]
    });
    if (!year) {
        year = 2024;
        setUrlParams(year);
        exports.yearSlider.values = [year];
    }
    else {
        if (year && validYears.indexOf(year) === -1) {
            alert("You must enter a valid U.S. presidential election year (e.g. 2004, 2008, 2012, 2016, 2020, 2024)");
            year = 2024;
            setUrlParams(year);
        }
        exports.yearSlider.values = [year];
    }
    exports.basemapPortalItem = "fbfb62f3599f41e5a77845f863e2872f";
    exports.statesLayerPortalItem = "f2825b56dfc14bb892604637dab45104";
    exports.countiesLayerPortalItem = "fe9e032e4a854c74890750214a3edd8b";
    exports.maxScale = 4622324 / 16;
    exports.referenceScale = 2311162;
    exports.scaleThreshold = 9244600;
    exports.stateReferenceScale = 18489200;
    exports.selectedYear = year;
    exports.years = {
        previous: exports.selectedYear - 4,
        next: exports.selectedYear
    };
    exports.results = {
        2000: {
            republican: {
                candidate: "Bush",
                electoralVotes: 271
            },
            democrat: {
                candidate: "Gore",
                electoralVotes: 266
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2004: {
            republican: {
                candidate: "Bush",
                electoralVotes: 286
            },
            democrat: {
                candidate: "Kerry",
                electoralVotes: 251
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2008: {
            republican: {
                candidate: "McCain",
                electoralVotes: 173
            },
            democrat: {
                candidate: "Obama",
                electoralVotes: 365
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2012: {
            republican: {
                candidate: "Romney",
                electoralVotes: 206
            },
            democrat: {
                candidate: "Obama",
                electoralVotes: 332
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2016: {
            republican: {
                candidate: "Trump",
                electoralVotes: 304
            },
            democrat: {
                candidate: "Clinton",
                electoralVotes: 227
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2020: {
            republican: {
                candidate: "Trump",
                electoralVotes: 232
            },
            democrat: {
                candidate: "Biden",
                electoralVotes: 306
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        },
        2024: {
            republican: {
                candidate: "Trump",
                electoralVotes: 312
            },
            democrat: {
                candidate: "Harris",
                electoralVotes: 226
            },
            other: {
                candidate: "Other",
                electoralVotes: 0
            }
        }
    };
    exports.fieldInfos = {
        title: {
            state: "{state}",
            county: "{county} County, {state}"
        },
        democrat: {
            county: {
                previous: {
                    name: "dem_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Democrat votes")
                },
                next: {
                    name: "dem_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Democrat votes")
                },
            },
            state: {
                previous: {
                    name: "SUM_dem_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Democrat votes")
                },
                next: {
                    name: "SUM_dem_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Democrat votes")
                }
            }
        },
        republican: {
            county: {
                previous: {
                    name: "rep_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Republican votes")
                },
                next: {
                    name: "rep_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Republican votes")
                }
            },
            state: {
                previous: {
                    name: "SUM_rep_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Republican votes")
                },
                next: {
                    name: "SUM_rep_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Republican votes")
                }
            }
        },
        other: {
            county: {
                previous: {
                    name: "oth_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Other votes")
                },
                next: {
                    name: "oth_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Other votes")
                }
            },
            state: {
                previous: {
                    name: "SUM_oth_".concat(exports.years.previous),
                    label: "".concat(exports.years.previous, " Other votes")
                },
                next: {
                    name: "SUM_oth_".concat(exports.years.next),
                    label: "".concat(exports.years.next, " Other votes")
                }
            }
        },
        normalizationFields: {
            county: {
                previous: "TOTAL_STATE_VOTES_".concat(exports.years.previous),
                next: "TOTAL_STATE_VOTES_".concat(exports.years.next)
            },
            state: {
                electoralVotes: "ev_".concat(exports.years.next),
                previous: "",
                next: ""
            }
        }
    };
    exports.rColor = new Color("rgba(220, 75, 0, 1)");
    exports.dColor = new Color("rgba(60, 108, 204,1)");
    exports.oColor = new Color("rgba(181, 166, 0, 1)");
    exports.haloColor = new Color("#f7f7f7");
    exports.haloSize = 1;
    exports.rColorCIM = exports.rColor.toJSON();
    exports.dColorCIM = exports.dColor.toJSON();
    exports.oColorCIM = exports.oColor.toJSON();
    exports.stateResultsSizeStops = [
        { value: 0, size: 8 },
        { value: 100000, size: 10 },
        { value: 500000, size: 15 },
        { value: 4000000, size: 20 },
        { value: 12000000, size: 50 }
    ];
    exports.stateChangeSizeStops = [
        { value: 0, size: 8 },
        { value: 10000, size: 8 },
        { value: 100000, size: 15 },
        { value: 500000, size: 20 },
        { value: 2000000, size: 50 }
    ];
    exports.countySizeStops = [
        { value: 0, size: 6 },
        { value: 0.1, size: 12 },
        { value: 1, size: 24 },
        { value: 2, size: 32 },
        { value: 10, size: 50 }
    ];
    function setSelectedYear(year) {
        exports.selectedYear = year;
        exports.years = {
            previous: exports.selectedYear - 4,
            next: exports.selectedYear
        };
        exports.fieldInfos = {
            title: {
                state: "{state}",
                county: "{county} County, {state}"
            },
            democrat: {
                county: {
                    previous: {
                        name: "dem_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Democrat votes")
                    },
                    next: {
                        name: "dem_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Democrat votes")
                    },
                },
                state: {
                    previous: {
                        name: "SUM_dem_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Democrat votes")
                    },
                    next: {
                        name: "SUM_dem_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Democrat votes")
                    }
                }
            },
            republican: {
                county: {
                    previous: {
                        name: "rep_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Republican votes")
                    },
                    next: {
                        name: "rep_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Republican votes")
                    }
                },
                state: {
                    previous: {
                        name: "SUM_rep_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Republican votes")
                    },
                    next: {
                        name: "SUM_rep_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Republican votes")
                    }
                }
            },
            other: {
                county: {
                    previous: {
                        name: "oth_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Other votes")
                    },
                    next: {
                        name: "oth_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Other votes")
                    }
                },
                state: {
                    previous: {
                        name: "SUM_oth_".concat(exports.years.previous),
                        label: "".concat(exports.years.previous, " Other votes")
                    },
                    next: {
                        name: "SUM_oth_".concat(exports.years.next),
                        label: "".concat(exports.years.next, " Other votes")
                    }
                }
            },
            normalizationFields: {
                county: {
                    previous: "TOTAL_STATE_VOTES_".concat(exports.years.previous),
                    next: "TOTAL_STATE_VOTES_".concat(exports.years.next)
                },
                state: {
                    electoralVotes: "ev_".concat(exports.years.next),
                    previous: "",
                    next: ""
                }
            }
        };
    }
});
