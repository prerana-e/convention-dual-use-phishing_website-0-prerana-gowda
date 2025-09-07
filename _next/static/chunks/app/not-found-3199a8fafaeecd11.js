(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9160], {
    31808: function(e, n, r) {
        Promise.resolve().then(r.bind(r, 86296))
    },
    77090: function(e, n, r) {
        "use strict";
        r.d(n, {
            X6: function() {
                return c
            },
            cK: function() {
                return u
            },
            rU: function() {
                return i
            },
            xv: function() {
                return s
            }
        });
        var t = r(25036)
          , o = r(2662);
        (0,
        o.b)(t.V6),
        (0,
        o.b)(t.EK),
        (0,
        o.b)(t.Em);
        let c = (0,
        o.b)(t.X6, {
            weight: "medium"
        });
        (0,
        o.b)(t.Tz);
        let i = (0,
        o.b)(t.rU);
        (0,
        o.b)(t.pu);
        let u = (0,
        o.b)(t.cK)
          , s = (0,
        o.b)(t.xv)
    },
    2662: function(e, n, r) {
        "use strict";
        r.d(n, {
            b: function() {
                return i
            }
        });
        var t = r(28683)
          , o = r(42871);
        let c = {
            accent: "indigo",
            neutral: "gray",
            error: "tomato",
            success: "grass",
            warning: "amber",
            info: "sky"
        };
        function i(e, n) {
            let r = e.displayName || e.name || "Component"
              , i = (0,
            o.forwardRef)( (r, o) => {
                let i = Object.assign(Object.assign({}, n), r);
                if ("color"in i && i.color) {
                    let e = i.color;
                    e in c && (i.color = c[e])
                }
                return (0,
                t.jsx)(e, Object.assign({}, i, {
                    ref: o
                }))
            }
            );
            return i.displayName = r,
            i
        }
    },
    86296: function(e, n, r) {
        "use strict";
        r.r(n),
        r.d(n, {
            default: function() {
                return s
            }
        });
        var t = r(28683)
          , o = r(42871)
          , c = r(91195)
          , i = r(25036)
          , u = r(77090);
        function s() {
            return (0,
            o.useEffect)( () => {
                let e = document.referrer || "unknown"
                  , n = window.location.href;
                c.Z.warn("Page not found at URL: ".concat(n), {
                    fullUrl: n,
                    referrer: e
                })
            }
            , []),
            (0,
            t.jsx)(i.kC, {
                justify: "center",
                align: "center",
                className: "h-screen",
                children: (0,
                t.jsxs)(i.kC, {
                    align: "center",
                    gap: "4",
                    children: [(0,
                    t.jsx)(u.xv, {
                        size: "6",
                        weight: "medium",
                        children: "404"
                    }), (0,
                    t.jsx)(u.xv, {
                        size: "5",
                        children: "This page could not be found."
                    })]
                })
            })
        }
    },
    91195: function(e, n, r) {
        "use strict";
        var t = r(13863);
        let o = "pubdd7f44529ecf6e8108c796d583835730";
        n.Z = {
            debug: (e, n, r) => {
                o && t.fy.logger.debug(e, n, r)
            }
            ,
            info: (e, n, r) => {
                o && t.fy.logger.info(e, n, r)
            }
            ,
            warn: (e, n, r) => {
                o && t.fy.logger.warn(e, n, r)
            }
            ,
            error: (e, n, r) => {
                o && t.fy.logger.error(e, n, r)
            }
        }
    }
}, function(e) {
    e.O(0, [1425, 7848, 9483, 3863, 4340, 4842, 1744], function() {
        return e(e.s = 31808)
    }),
    _N_E = e.O()
}
]);
