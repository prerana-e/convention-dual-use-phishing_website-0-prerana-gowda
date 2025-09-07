(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3185], {
    24343: function(e, t, n) {
        Promise.resolve().then(n.bind(n, 38370))
    },
    95260: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return s
            }
        });
        var r = n(25036);
        let s = (0,
        n(2662).b)(r.Zb)
    },
    53075: function(e, t, n) {
        "use strict";
        n.d(t, {
            h: function() {
                return s
            }
        });
        var r = n(25036);
        let s = (0,
        n(2662).b)(r.hU)
    },
    39495: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return b
            }
        });
        var r = n(28683)
          , s = n(15830)
          , i = n(61617)
          , o = n(864)
          , a = n(27033)
          , l = n.n(a)
          , c = n(42871)
          , u = n(25036)
          , d = n(2662)
          , f = n(80941)
          , p = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let g = (0,
        c.forwardRef)( (e, t) => {
            let n = (0,
            o.yH)(e, l()(f.K, "icon"))
              , {className: a, label: c, color: d} = n
              , g = p(n, ["className", "label", "color"]);
            return (0,
            r.jsx)(u.CJ, {
                label: c,
                children: (0,
                r.jsx)(s.G, Object.assign({
                    className: (0,
                    i.m)("rt-Icon", a),
                    "data-accent-color": d,
                    ref: t
                }, g))
            })
        }
        );
        g.displayName = "Icon";
        let b = (0,
        d.b)(g)
    },
    80941: function(e, t, n) {
        "use strict";
        n.d(t, {
            K: function() {
                return i
            }
        });
        var r = n(40308)
          , s = n(27033);
        let i = {
            label: {
                type: "string",
                required: !0
            },
            fill: {
                type: "string",
                default: "currentColor"
            },
            icon: {
                type: "IconLookup",
                required: !0
            },
            size: {
                type: "enum",
                className: "rt-r-size",
                values: ["1", "2", "3", "4"],
                default: "2",
                responsive: !0
            },
            color: Object.assign({}, n.n(s)()(r.o3.color, "className"))
        }
    },
    84475: function(e, t, n) {
        "use strict";
        n.d(t, {
            Q: function() {
                return i
            }
        });
        var r = n(28683)
          , s = n(25036);
        let i = (0,
        n(42871).forwardRef)( (e, t) => (0,
        r.jsx)(s.Q2, Object.assign({
            panelBackground: "solid"
        }, e, {
            ref: t
        })));
        i.displayName = "Theme"
    },
    28795: function(e, t, n) {
        "use strict";
        n.d(t, {
            ToastRoot: function() {
                return I
            }
        });
        var r = n(28683)
          , s = n(12589)
          , i = n(24046)
          , o = n(61168)
          , a = n(88742)
          , l = n(60368)
          , c = n(61963)
          , u = n(25036)
          , d = n(95260)
          , f = n(39495)
          , p = n(87146)
          , g = n(61617)
          , b = n(53075)
          , O = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let v = e => {
            let t = (0,
            o.y)(e, a.EI)
              , {className: n, size: i} = t
              , l = O(t, ["className", "size"]);
            return (0,
            r.jsx)(s.ToastClose, {
                asChild: !0,
                children: (0,
                r.jsx)(b.h, Object.assign({
                    color: "neutral"
                }, l, {
                    className: (0,
                    g.m)("rt-ToastClose", n),
                    children: (0,
                    r.jsx)(f.J, {
                        size: i,
                        icon: p.YIN,
                        label: "Close"
                    })
                }))
            })
        }
        ;
        v.displayName = "Toast.Close";
        var y = n(77090)
          , m = n(39417)
          , j = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let h = e => {
            let t = (0,
            o.y)(e, a.p6)
              , {className: n, size: i, children: l} = t
              , c = j(t, ["className", "size", "children"])
              , u = "string" == typeof l
              , d = (0,
            r.jsx)(s.ToastTitle, {
                asChild: !0,
                children: (0,
                r.jsx)(y.X6, Object.assign({
                    size: i,
                    className: (0,
                    g.m)("rt-ToastTitle", "line-clamp-2", n)
                }, c, {
                    children: l
                }))
            });
            return u ? (0,
            r.jsx)(m.Tooltip, {
                content: l,
                showOnOverflow: !0,
                children: d
            }) : d
        }
        ;
        h.displayName = "Toast.Title";
        var _ = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let E = e => {
            let t = (0,
            o.y)(e, a.RH)
              , {className: n, children: i} = t
              , l = _(t, ["className", "children"])
              , c = "string" == typeof i
              , u = (0,
            r.jsx)(s.ToastDescription, {
                asChild: !0,
                children: (0,
                r.jsx)(y.xv, Object.assign({
                    color: "neutral"
                }, l, {
                    className: (0,
                    g.m)("rt-ToastDescription", "line-clamp-2", n),
                    children: i
                }))
            });
            return c ? (0,
            r.jsx)(m.Tooltip, {
                content: i,
                showOnOverflow: !0,
                children: u
            }) : u
        }
        ;
        E.displayName = "Toast.Description";
        let x = e => {
            let {size: t, message: n} = (0,
            o.y)(e, a.SB)
              , {deleteMessage: i} = (0,
            l.useToastStore)();
            return (0,
            r.jsx)(s.Toast, {
                className: "rt-ToastContent",
                asChild: !0,
                forceMount: !0,
                open: !0,
                onOpenChange: e => {
                    e || i(n.id)
                }
                ,
                children: (0,
                r.jsx)(d.Z, {
                    asChild: !0,
                    variant: "classic",
                    children: (0,
                    r.jsx)(c.E.div, {
                        layout: !0,
                        initial: {
                            x: 100,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 40,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        children: (0,
                        r.jsxs)(u.kC, {
                            gapX: "2",
                            children: [n.icon && (0,
                            r.jsx)(f.J, {
                                color: n.type,
                                size: t,
                                icon: n.icon,
                                label: "Close"
                            }), (0,
                            r.jsxs)(u.kC, {
                                direction: "column",
                                gapY: "2",
                                flexGrow: "1",
                                children: [(0,
                                r.jsxs)(u.kC, {
                                    direction: "column",
                                    gapY: "1",
                                    children: [(0,
                                    r.jsx)(h, {
                                        size: t,
                                        children: n.title
                                    }), n.description ? (0,
                                    r.jsx)(E, {
                                        children: n.description
                                    }) : null]
                                }), n.action ? (0,
                                r.jsx)(u.kC, {
                                    children: n.action
                                }) : null]
                            }), (0,
                            r.jsx)(v, {})]
                        })
                    }, n.id)
                })
            })
        }
        ;
        x.displayName = "Toast.Content";
        var T = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let I = e => {
            let t = (0,
            o.y)(e, a.zd)
              , {size: n, children: c} = t
              , u = T(t, ["size", "children"])
              , d = (0,
            l.useToastStore)(e => e.messages);
            return (0,
            r.jsxs)(s.ToastProvider, Object.assign({}, u, {
                children: [c, (0,
                r.jsx)(i.M, {
                    children: d.map(e => (0,
                    r.jsx)(x, {
                        size: n,
                        message: e
                    }, e.id))
                })]
            }))
        }
        ;
        I.displayName = "Toast.Root"
    },
    93398: function(e, t, n) {
        "use strict";
        n.d(t, {
            _: function() {
                return d
            }
        });
        var r = n(28683)
          , s = n(12589)
          , i = n(61617)
          , o = n(61168)
          , a = n(25036)
          , l = n(84475)
          , c = n(88742)
          , u = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let d = e => {
            let t = (0,
            o.y)(e, c.FV)
              , {className: n, label: d, hotkey: f, container: p, children: g} = t
              , b = u(t, ["className", "label", "hotkey", "container", "children"]);
            return (0,
            r.jsx)(a.Uv, {
                container: p,
                children: (0,
                r.jsx)(l.Q, {
                    asChild: !0,
                    children: (0,
                    r.jsx)(s.ToastViewport, {
                        asChild: !0,
                        hotkey: f,
                        label: d,
                        children: (0,
                        r.jsx)(a.kC, Object.assign({}, b, {
                            className: (0,
                            i.m)("rt-ToastViewport", n),
                            children: g
                        }))
                    })
                })
            })
        }
        ;
        d.displayName = "Toast.Viewport"
    },
    88742: function(e, t, n) {
        "use strict";
        n.d(t, {
            EI: function() {
                return d
            },
            FV: function() {
                return f
            },
            RH: function() {
                return u
            },
            SB: function() {
                return l
            },
            p6: function() {
                return c
            },
            zd: function() {
                return a
            }
        });
        var r = n(27033)
          , s = n.n(r)
          , i = n(40308)
          , o = n(80941);
        let a = {
            size: Object.assign(Object.assign({}, s()(o.K.size, "className")), {
                default: "2"
            }),
            children: {
                type: "ReactNode[] | ReactNode",
                required: !0
            }
        }
          , l = {
            size: Object.assign({}, s()(o.K.size, "className"))
        }
          , c = {
            size: Object.assign({}, s()(o.K.size, "className"))
        }
          , u = {
            children: {
                type: "ReactNode[] | ReactNode",
                required: !0
            },
            size: Object.assign(Object.assign({}, s()(o.K.size, "className")), {
                default: "2"
            })
        }
          , d = {
            size: Object.assign(Object.assign({}, s()(o.K.size, "className")), {
                default: "1"
            }),
            variant: Object.assign(Object.assign({}, s()(i.Gp.variant, "className")), {
                default: "ghost"
            })
        };
        Object.assign(Object.assign({}, s()(o.K.size, "className")), {
            default: "1"
        }),
        Object.assign(Object.assign({}, s()(i.sv.variant, "className")), {
            default: "outline"
        });
        let f = {
            position: Object.assign(Object.assign({}, s()(i.P7.position, "className")), {
                default: "fixed"
            }),
            top: Object.assign(Object.assign({}, i.P7.top), {
                default: "0"
            }),
            right: Object.assign(Object.assign({}, i.P7.right), {
                default: "0"
            }),
            p: Object.assign(Object.assign({}, i.P7.p), {
                default: "4"
            }),
            m: Object.assign(Object.assign({}, i.Ee.m), {
                default: "0"
            }),
            width: Object.assign(Object.assign({}, i.P7.width), {
                default: "400px"
            }),
            maxWidth: Object.assign(Object.assign({}, i.P7.maxWidth), {
                default: "100vw"
            }),
            direction: Object.assign(Object.assign({}, s()(i.lS.direction, "className")), {
                default: "column"
            }),
            gapY: Object.assign(Object.assign({}, i.lS.gapY), {
                default: "2"
            })
        }
    },
    60368: function(e, t, n) {
        "use strict";
        n.d(t, {
            error: function() {
                return p
            },
            info: function() {
                return u
            },
            success: function() {
                return d
            },
            useToastStore: function() {
                return l
            },
            warning: function() {
                return f
            }
        });
        var r = n(74017)
          , s = n(74102)
          , i = n(32448)
          , o = n(39610);
        let a = {
            info: o.sqG,
            success: o.f8k,
            error: o.$9F,
            warning: o.ik8
        }
          , l = (0,
        r.Ue)()((0,
        s.n)(e => ({
            messages: [],
            createMessage: t => {
                e(e => {
                    e.messages.push(t)
                }
                )
            }
            ,
            deleteMessage: t => {
                e(e => {
                    let n = e.messages.findIndex(e => e.id === t);
                    -1 !== n && e.messages.splice(n, 1)
                }
                )
            }
        })));
        function c(e, t) {
            var n;
            let r = (0,
            i.v4)();
            return "string" == typeof t ? (l.getState().createMessage({
                id: r,
                type: e,
                title: t,
                icon: a[e]
            }),
            r) : (l.getState().createMessage(Object.assign({
                id: r,
                type: e,
                icon: a[e]
            }, t)),
            null !== (n = t.id) && void 0 !== n ? n : r)
        }
        function u(e) {
            return c("info", e)
        }
        function d(e) {
            return c("success", e)
        }
        function f(e) {
            return c("warning", e)
        }
        function p(e) {
            return c("error", e)
        }
    },
    39417: function(e, t, n) {
        "use strict";
        n.d(t, {
            Tooltip: function() {
                return l
            }
        });
        var r = n(28683)
          , s = n(25036)
          , i = n(42871)
          , o = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
                    0 > t.indexOf(r[s]) && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
            return n
        };
        let a = (e, t) => (0,
        i.isValidElement)(e) ? (0,
        i.cloneElement)(e, {
            ref: e => {
                t.current = e
            }
        }) : null
          , l = e => {
            var {showOnOverflow: t=!1, open: n, children: l} = e
              , c = o(e, ["showOnOverflow", "open", "children"]);
            let u = (0,
            i.useRef)(null)
              , [d,f] = (0,
            i.useState)(!1)
              , p = (0,
            i.useCallback)( () => {
                let e = u.current;
                e && f(e.scrollWidth > e.clientWidth)
            }
            , []);
            return ((0,
            i.useEffect)( () => {
                var e;
                if (!t)
                    return;
                let n = u.current;
                if (!n)
                    return;
                p();
                let r = new ResizeObserver(p)
                  , s = new MutationObserver(e => {
                    e.some(e => "attributes" === e.type && ("class" === e.attributeName || "style" === e.attributeName)) && requestAnimationFrame(p)
                }
                );
                return n.parentElement && r.observe(n.parentElement),
                [n, n.parentElement, null === (e = n.parentElement) || void 0 === e ? void 0 : e.parentElement].filter(e => null !== e).forEach(e => {
                    s.observe(e, {
                        attributes: !0,
                        attributeFilter: ["class", "style"]
                    })
                }
                ),
                () => {
                    r.disconnect(),
                    s.disconnect()
                }
            }
            , [p, t]),
            t) ? (0,
            r.jsx)(s.u, Object.assign({
                className: "rt-Tooltip",
                open: !!d && n
            }, c, {
                children: a(l, u)
            })) : (0,
            r.jsx)(s.u, Object.assign({
                className: "rt-Tooltip",
                open: n
            }, c, {
                children: l
            }))
        }
    },
    77090: function(e, t, n) {
        "use strict";
        n.d(t, {
            X6: function() {
                return i
            },
            cK: function() {
                return a
            },
            rU: function() {
                return o
            },
            xv: function() {
                return l
            }
        });
        var r = n(25036)
          , s = n(2662);
        (0,
        s.b)(r.V6),
        (0,
        s.b)(r.EK),
        (0,
        s.b)(r.Em);
        let i = (0,
        s.b)(r.X6, {
            weight: "medium"
        });
        (0,
        s.b)(r.Tz);
        let o = (0,
        s.b)(r.rU);
        (0,
        s.b)(r.pu);
        let a = (0,
        s.b)(r.cK)
          , l = (0,
        s.b)(r.xv)
    },
    61168: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return l
            }
        });
        var r = n(81971)
          , s = n.n(r)
          , i = n(84473)
          , o = n(50802)
          , a = n(69337);
        function l(e) {
            let t, n;
            for (var r = arguments.length, l = Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
                l[c - 1] = arguments[c];
            let u = Object.assign({}, e)
              , d = function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return Object.assign({}, ...t)
            }(...l);
            for (let e in d) {
                let r = u[e]
                  , l = d[e];
                if (void 0 !== l.default && void 0 === r && (r = l.default),
                "enum" !== l.type || [l.default, ...l.values].includes(r) || (0,
                o.d)(r) || (r = l.default),
                u[e] = r,
                "className"in l && l.className) {
                    delete u[e];
                    let c = "responsive"in l;
                    if (!r || (0,
                    o.d)(r) && !c)
                        continue;
                    if ((0,
                    o.d)(r) && (void 0 !== l.default && void 0 === r.initial && (r.initial = l.default),
                    "enum" !== l.type || [l.default, ...l.values].includes(r.initial) || (r.initial = l.default)),
                    "enum" === l.type) {
                        let e = (0,
                        i.RE)({
                            allowArbitraryValues: !1,
                            value: r,
                            className: l.className,
                            propValues: l.values,
                            parseValue: l.parseValue
                        });
                        t = s()(t, e);
                        continue
                    }
                    if ("string" === l.type || "enum | string" === l.type) {
                        let e = "string" === l.type ? [] : l.values
                          , [o,c] = (0,
                        i.uq)({
                            className: l.className,
                            customProperties: l.customProperties,
                            propValues: e,
                            parseValue: l.parseValue,
                            value: r
                        });
                        n = (0,
                        a.y)(n, c),
                        t = s()(t, o);
                        continue
                    }
                    if ("boolean" === l.type && r) {
                        t = s()(t, l.className);
                        continue
                    }
                }
            }
            return u.className = s()(t, e.className),
            u.style = (0,
            a.y)(n, e.style),
            u
        }
    },
    2662: function(e, t, n) {
        "use strict";
        n.d(t, {
            b: function() {
                return o
            }
        });
        var r = n(28683)
          , s = n(42871);
        let i = {
            accent: "indigo",
            neutral: "gray",
            error: "tomato",
            success: "grass",
            warning: "amber",
            info: "sky"
        };
        function o(e, t) {
            let n = e.displayName || e.name || "Component"
              , o = (0,
            s.forwardRef)( (n, s) => {
                let o = Object.assign(Object.assign({}, t), n);
                if ("color"in o && o.color) {
                    let e = o.color;
                    e in i && (o.color = i[e])
                }
                return (0,
                r.jsx)(e, Object.assign({}, o, {
                    ref: s
                }))
            }
            );
            return o.displayName = n,
            o
        }
    },
    30889: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CLAIM_TASK_PROJECTS = t.DUPLEX_AUDIO_PROJECT_ID = t.ARXIV_PROJECT_ID = t.RLHF_PREFRANK_PROJECT_ID = t.ARCHERFISH_PROJECT_ID = t.HYPERION_CODE_PROJECT_ID = t.HYPERION_BENCHMARKS_PROJECT_ID = t.HYPERION_EDITS_PROJECT_ID = t.HYPERION_QUESTIONS_PROJECT_ID = t.OTS_TEXT_REASONING_PROJECT_ID = t.MAPLE_PROJECT_ID = t.OTS_EXPERT_RUBRICS_PROJECT_ID = t.HLE_TEST_PROJECT_ID = t.HLE_PROJECT_ID = t.OUTLIER_TNS_TEMP_SUSPENSION_TEAM_ID = t.MARKETPLACE_WORKER_TEAM_ID = t.MARKETPLACE_ALPHA_TAG = t.MARKETPLACE_BETA_TAG = t.IS_LOCAL = t.RANKING_CACHE_KEY = t.RANKING_TTL = void 0,
        t.RANKING_TTL = 604800,
        t.RANKING_CACHE_KEY = "taskerRanking",
        t.IS_LOCAL = !1,
        t.MARKETPLACE_BETA_TAG = "667ef2adf51a8ec2b0731419",
        t.MARKETPLACE_ALPHA_TAG = "66a40f789a41302cdf343e0b",
        t.MARKETPLACE_WORKER_TEAM_ID = "6669ddd4f3127a2e7e71b6cc",
        t.OUTLIER_TNS_TEMP_SUSPENSION_TEAM_ID = "688a712435b95d1ab9090128";
        let n = "67bf9271a9f6fa95a311dc66";
        t.HLE_PROJECT_ID = n;
        let r = "681002302217f64b098d38e9";
        t.HLE_TEST_PROJECT_ID = r;
        let s = "67f477e0e7731cacf4ca472c";
        t.OTS_EXPERT_RUBRICS_PROJECT_ID = s;
        let i = "682d4cfbd689281ad65c31f7";
        t.MAPLE_PROJECT_ID = i;
        let o = "684085e87910f3de746efc07";
        t.OTS_TEXT_REASONING_PROJECT_ID = o;
        let a = "6855b55c1d3412b25c2e115e";
        t.HYPERION_QUESTIONS_PROJECT_ID = a;
        let l = "6850f1fb2a196a435bad9b1c";
        t.HYPERION_EDITS_PROJECT_ID = l;
        let c = "6862ffb21454b026410c87b2";
        t.HYPERION_BENCHMARKS_PROJECT_ID = c;
        let u = "6873bb74809e2e2f9e019076";
        t.HYPERION_CODE_PROJECT_ID = u;
        let d = "685de98746cbc17a7de27f7f";
        t.ARCHERFISH_PROJECT_ID = d;
        let f = "68714038ba5c5b3063c55fa0";
        t.RLHF_PREFRANK_PROJECT_ID = f;
        let p = "68811c3ed968e41022e29d80";
        t.ARXIV_PROJECT_ID = p,
        t.DUPLEX_AUDIO_PROJECT_ID = "687c020773d202470124310a";
        let g = [n, r, s, i, o, a, l, c, d, u, f, p];
        t.CLAIM_TASK_PROJECTS = g
    },
    99636: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.logSessionTerminateEvent = t.logSessionUserLogout = t.logSessionUserLogin = t.logSessionUserActive = t.logSessionUserInactive = t.trackSessionEvent = t.identifyUser = t.trackEvent = t.analytics = void 0;
        var r, s = n(26574), i = n(30889), o = n(57022), a = (r = n(60528)) && r.__esModule ? r : {
            default: r
        };
        let l = s.AnalyticsBrowser.load({
            writeKey: "DqctVBaWsWu1ktHGtyzoVkggj9QmMX9B"
        });
        t.analytics = l;
        let c = (e, t) => {
            if (i.IS_LOCAL) {
                console.debug("Sending analytics --->", e, t);
                return
            }
            return l.track(e, t)
        }
        ;
        t.trackEvent = c,
        t.identifyUser = (e, t) => {
            if (i.IS_LOCAL) {
                console.debug("Sending analytics identify --->", e, t);
                return
            }
            return l.identify(e, t)
        }
        ;
        let u = e => {
            var t;
            let n = o.getClientSession();
            if (!n) {
                console.error("trackSessionEvent error: No session ID found");
                return
            }
            let r = a.default.getUser()
              , s = null !== (t = null == r ? void 0 : r.isCorporateUser) && void 0 !== t && t;
            if (!(null == e ? void 0 : e.event_type)) {
                console.error("trackSessionEvent error: No event_type provided in payload");
                return
            }
            c("Session", {
                ...e,
                session_id: n,
                is_internal: s
            })
        }
        ;
        t.trackSessionEvent = u,
        t.logSessionUserInactive = e => {
            u({
                event_type: "user_inactive",
                ...e
            })
        }
        ,
        t.logSessionUserActive = e => {
            u({
                event_type: "user_active",
                ...e
            })
        }
        ,
        t.logSessionUserLogin = e => {
            u({
                event_type: "user_login",
                ...e
            })
        }
        ,
        t.logSessionUserLogout = e => {
            u({
                event_type: "user_logout",
                ...e
            })
        }
        ,
        t.logSessionTerminateEvent = e => {
            u({
                event_type: "user_session_terminate",
                ...e
            })
        }
    },
    25421: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "Ss", {
            enumerable: !0,
            get: function() {
                return r.getClientSession
            }
        }),
        Object.defineProperty(t, "iD", {
            enumerable: !0,
            get: function() {
                return r.terminateClientSession
            }
        }),
        Object.defineProperty(t, "Rp", {
            enumerable: !0,
            get: function() {
                return s.logSessionUserInactive
            }
        }),
        Object.defineProperty(t, "r4", {
            enumerable: !0,
            get: function() {
                return s.logSessionUserActive
            }
        }),
        Object.defineProperty(t, "qb", {
            enumerable: !0,
            get: function() {
                return s.logSessionUserLogin
            }
        }),
        Object.defineProperty(t, "ed", {
            enumerable: !0,
            get: function() {
                return s.logSessionUserLogout
            }
        }),
        Object.defineProperty(t, "$v", {
            enumerable: !0,
            get: function() {
                return s.logSessionTerminateEvent
            }
        });
        var r = n(57022)
          , s = n(99636)
    },
    57022: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getClientSession = function() {
            try {
                let e = sessionStorage.getItem(n);
                if (e)
                    return e;
                let t = crypto.randomUUID();
                return sessionStorage.setItem(n, t),
                t
            } catch (e) {
                return console.error("Failed to fetch/initialize client session:", e),
                null
            }
        }
        ,
        t.terminateClientSession = function() {
            try {
                let e = sessionStorage.getItem(n);
                if (e)
                    return sessionStorage.removeItem(n),
                    e;
                return null
            } catch (e) {
                return console.error("Failed to terminate client session:", e),
                null
            }
        }
        ;
        let n = "outlier.sessionId"
    },
    60528: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        class n {
            setUser(e) {
                this.currentUser = e
            }
            getUser() {
                return this.currentUser
            }
            clearUser() {
                this.currentUser = null
            }
            constructor() {
                if (this.currentUser = null,
                n.instance)
                    return n.instance;
                n.instance = this
            }
        }
        let r = new n;
        t.default = r
    },
    33597: function(e, t, n) {
        "use strict";
        n.d(t, {
            x: function() {
                return h
            },
            GuardedProviders: function() {
                return E
            }
        });
        var r = n(28683)
          , s = n(42871)
          , i = n(68101)
          , o = n(41067)
          , a = n(35321)
          , l = n(12490)
          , c = n(51653)
          , u = n(41775);
        n(79058);
        var d = (0,
        n(61170).$)("46d316fb9359276711cdbb4ba89ef5ece5a7827c")
          , f = n(45989)
          , p = n(55049)
          , g = n(62845)
          , b = n(13863)
          , O = n(58065)
          , v = n(5190)
          , y = n(59546)
          , m = n(91195)
          , j = n(60528);
        let h = e => {
            let {children: t} = e
              , n = (0,
            s.useCallback)( () => {
                i.v.init({
                    applicationId: "272d8719-1399-4b3a-b211-a2263f8bc6d0",
                    clientToken: "pubdd7f44529ecf6e8108c796d583835730",
                    site: "datadoghq.com",
                    service: "outlier",
                    env: "production",
                    sessionSampleRate: 50,
                    sessionReplaySampleRate: 20,
                    trackUserInteractions: !0,
                    trackResources: !0,
                    trackLongTasks: !0,
                    defaultPrivacyLevel: "mask-user-input"
                }),
                b.fy.init({
                    env: "production",
                    clientToken: "pubdd7f44529ecf6e8108c796d583835730",
                    datacenter: "us1",
                    forwardErrorsToLogs: !1,
                    silentMultipleInit: !0
                }),
                b.fy.setGlobalContextProperty("service", "outlier-next")
            }
            , [])
              , o = (0,
            s.useRef)(new a.S({
                defaultOptions: {
                    queries: {
                        staleTime: 6e4,
                        refetchOnWindowFocus: !1,
                        retry: (e, t) => {
                            let n = t instanceof u.z ? t.statusCode : void 0;
                            return void 0 !== n && (n >= 500 || [408, 413, 429].includes(n)) && e < 3
                        }
                        ,
                        retryDelay: e => Math.min(500 * 2 ** e, 1e4)
                    }
                }
            }));
            return (0,
            s.useEffect)( () => {
                n()
            }
            , [n]),
            sessionStorage.getItem("sessionId") || sessionStorage.setItem("sessionId", (0,
            y.Z)()),
            (0,
            v.oJ)({
                clientId: "bde48ece-dd1b-4579-a43c-40d03466ad78",
                environment: "production",
                apiSubdomain: "s-api.outlier.ai",
                pixelSubdomain: "s-p.outlier.ai"
            }),
            (0,
            r.jsx)(l.QueryClientProvider, {
                client: o.current,
                children: t
            })
        }
          , _ = e => {
            let {user: t, children: n} = e
              , {client: s} = (0,
            o.useClientAsyncInit)("client-nLgyVCvRDPAgutUNbgb5K6Db1AJIKCiY1R2zcSAobPu", {
                userID: t._id
            });
            return "Ready" !== s.loadingStatus ? n : (0,
            r.jsx)(o.StatsigProvider, {
                client: s,
                children: n
            })
        }
          , E = e => {
            let {children: t, flags: n} = e
              , [o,a] = (0,
            s.useState)(null)
              , l = (0,
            f.N)();
            return ((0,
            s.useEffect)( () => {
                (async () => {
                    let e = await d(l);
                    a(e),
                    j.default.setUser(e)
                }
                )()
            }
            , [l]),
            (0,
            s.useEffect)( () => {
                i.v.setUser({
                    id: null == o ? void 0 : o.id,
                    email: null == o ? void 0 : o.email
                }),
                b.fy.setGlobalContextProperty("userId", null == o ? void 0 : o.id),
                b.fy.setGlobalContextProperty("email", null == o ? void 0 : o.email)
            }
            , [null == o ? void 0 : o.email, null == o ? void 0 : o.id]),
            o) ? (0,
            r.jsx)(g.J.Provider, {
                value: n,
                children: (0,
                r.jsx)(O.v.Provider, {
                    value: m.Z,
                    children: (0,
                    r.jsx)(c.a.Provider, {
                        value: o,
                        children: (0,
                        r.jsx)(_, {
                            user: o,
                            children: (0,
                            r.jsx)(p.Nr, {
                                children: t
                            })
                        })
                    })
                })
            }) : null
        }
    },
    55049: function(e, t, n) {
        "use strict";
        n.d(t, {
            Toasts: function() {
                return v
            },
            Nr: function() {
                return a
            },
            CP: function() {
                return u
            }
        });
        var r = n(28683)
          , s = n(42871)
          , i = n(3028);
        let o = (0,
        s.createContext)(null)
          , a = e => {
            let {children: t} = e
              , [n] = (0,
            s.useState)( () => (0,
            i.M)(e => ({
                currentId: 0,
                toasts: [],
                actions: {
                    addSuccessToast: t => e(e => ({
                        toasts: [...e.toasts, {
                            ...t,
                            id: e.currentId,
                            type: "success"
                        }],
                        currentId: e.currentId + 1
                    })),
                    addWarningToast: t => e(e => ({
                        toasts: [...e.toasts, {
                            ...t,
                            id: e.currentId,
                            type: "warning"
                        }],
                        currentId: e.currentId + 1
                    })),
                    addErrorToast: t => e(e => ({
                        toasts: [...e.toasts, {
                            ...t,
                            id: e.currentId,
                            type: "error"
                        }],
                        currentId: e.currentId + 1
                    })),
                    removeToast: t => e(e => ({
                        toasts: e.toasts.filter(e => e.id !== t)
                    }))
                }
            })));
            return (0,
            r.jsx)(o.Provider, {
                value: n,
                children: t
            })
        }
        ;
        var l = n(45347);
        function c(e) {
            let t = (0,
            s.useContext)(o);
            if (!t)
                throw Error("ToastsStore used before it could be initialized");
            return (0,
            l.o)(t, e)
        }
        let u = () => c(e => e.actions)
          , d = () => c(e => e.toasts);
        var f = n(1375)
          , p = n(25036)
          , g = n(22244)
          , b = n(432);
        let O = e => {
            let {id: t, title: n, message: i, type: o} = e
              , {removeToast: a} = u();
            (0,
            s.useEffect)( () => {
                let e = setTimeout( () => a(t), 5e3);
                return () => clearTimeout(e)
            }
            , []);
            let[l,c] = (0,
            s.useMemo)( () => {
                switch (o) {
                case "error":
                    return ["exclamation-circle", "danger"];
                case "success":
                    return ["check-circle", "success"];
                case "warning":
                    return ["exclamation-circle", "warning"]
                }
            }
            , [o]);
            return (0,
            r.jsx)(g.E.div, {
                layoutId: "".concat(t),
                initial: {
                    opacity: 0,
                    translateX: 200
                },
                animate: {
                    opacity: 1,
                    translateX: 0
                },
                exit: {
                    opacity: 0,
                    translateY: -100
                },
                transition: {
                    ease: "easeOut",
                    duration: .15
                },
                className: "bg-utility-white rounded-md border border-neutral-300 w-[375px] shadow-md",
                children: (0,
                r.jsx)("div", {
                    className: "p-4",
                    children: (0,
                    r.jsxs)(p.kC, {
                        align: "start",
                        children: [(0,
                        r.jsx)(f.J, {
                            icon: l,
                            variant: c
                        }), (0,
                        r.jsxs)(p.kC, {
                            direction: "column",
                            gap: "4px",
                            children: [(0,
                            r.jsx)("div", {
                                className: "font-bold",
                                children: n
                            }), (0,
                            r.jsx)("div", {
                                className: "text-sm",
                                children: i
                            })]
                        })]
                    })
                })
            })
        }
          , v = () => {
            let e = d();
            return (0,
            r.jsx)("div", {
                className: "absolute right-[20px] top-[20px] z-[10000] overflow-hidden",
                children: (0,
                r.jsx)(p.kC, {
                    direction: "column",
                    gap: "8px",
                    children: (0,
                    r.jsx)(b.M, {
                        mode: "popLayout",
                        children: e.map(e => {
                            let {id: t, message: n, title: s, type: i} = e;
                            return (0,
                            r.jsx)(O, {
                                id: t,
                                type: i,
                                title: s,
                                message: n
                            }, t)
                        }
                        )
                    })
                })
            })
        }
    },
    38370: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(28683);
        n(43339),
        n(66534),
        n(45968),
        n(6617),
        n(84717),
        n(65167),
        n(61050),
        n(94481),
        n(5544),
        n(23722);
        var s = n(33597)
          , i = n(87878)
          , o = n(84475)
          , a = n(28795)
          , l = n(93398);
        t.default = e => {
            let {children: t} = e
              , n = (0,
            i.usePathname)()
              , c = /^\/([a-z]{2}\/)?playground/.test(n);
            return (0,
            r.jsxs)("html", {
                children: [(0,
                r.jsxs)("head", {
                    children: [(0,
                    r.jsx)("title", {
                        children: c ? "Outlier Playground" : "Outlier"
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        href: "/favicons/favicon-16x16.svg",
                        sizes: "16x16"
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        href: "/favicons/favicon-32x32.svg",
                        sizes: "32x32"
                    }), (0,
                    r.jsx)("link", {
                        rel: "icon",
                        href: "/favicons/favicon-32x32.svg",
                        sizes: "32x32"
                    }), (0,
                    r.jsx)("meta", {
                        name: "description",
                        content: "Shape the Next Generation of AI with your expertise.Get paid training cutting-edge AI on your own schedule"
                    })]
                }), (0,
                r.jsx)("body", {
                    className: "scaleui scale-tailwind outlier-theme bg-[var(--colors-outlier-shade-1-light)]",
                    children: (0,
                    r.jsx)(o.Q, {
                        children: (0,
                        r.jsxs)(a.ToastRoot, {
                            children: [(0,
                            r.jsx)(s.x, {
                                children: t
                            }), !c && (0,
                            r.jsx)(l._, {})]
                        })
                    })
                })]
            })
        }
    },
    62845: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return s
            },
            g: function() {
                return i
            }
        });
        var r = n(42871);
        let s = (0,
        r.createContext)({})
          , i = () => (0,
        r.useContext)(s)
    },
    58065: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return i
            },
            w: function() {
                return o
            }
        });
        var r = n(51653)
          , s = n(42871);
        let i = (0,
        s.createContext)({})
          , o = e => {
            let t = (0,
            s.useContext)(i)
              , n = (0,
            r.E)();
            return {
                debug: (r, s, i) => t.debug(r, {
                    ...s,
                    label: e,
                    userId: n._id
                }, i),
                info: (r, s, i) => t.info(r, {
                    ...s,
                    label: e,
                    userId: n._id
                }, i),
                warn: (r, s, i) => t.warn(r, {
                    ...s,
                    label: e,
                    userId: n._id
                }, i),
                error: (r, s, i) => t.error(r, {
                    ...s,
                    label: e,
                    userId: n._id
                }, i)
            }
        }
    },
    51653: function(e, t, n) {
        "use strict";
        n.d(t, {
            E: function() {
                return i
            },
            a: function() {
                return s
            }
        });
        var r = n(42871);
        let s = (0,
        r.createContext)({})
          , i = () => (0,
        r.useContext)(s)
    },
    41775: function(e, t, n) {
        "use strict";
        n.d(t, {
            L: function() {
                return c
            },
            z: function() {
                return a
            }
        });
        var r = n(2644)
          , s = n(82801)
          , i = n(45989)
          , o = n(25421);
        class a extends Error {
            constructor(e, t) {
                super(t),
                this.statusCode = e,
                this.name = "ClientFetchError"
            }
        }
        let l = void 0
          , c = async function(e) {
            var t, n;
            let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET"
              , u = arguments.length > 2 ? arguments[2] : void 0
              , d = arguments.length > 3 ? arguments[3] : void 0;
            !e.startsWith("/") && e.startsWith("internal") && (e = "/" + e);
            let f = (0,
            i.p)(e)
              , p = {
                "X-CSRF-Token": null !== (n = (0,
                s.getCookie)("_csrf")) && void 0 !== n ? n : ""
            };
            if (u instanceof FormData || (p["Content-type"] = "application/json"),
            d) {
                let e = {
                    method: c,
                    body: u,
                    headers: p,
                    ...d
                };
                return !e.signal && l && (e.signal = AbortSignal.timeout(l)),
                (0,
                r.L)(f, e)
            }
            let g = {
                method: c,
                credentials: "include",
                headers: p,
                body: u
            };
            l && (g.signal = AbortSignal.timeout(l));
            let b = await fetch(f, g);
            if (!b.ok) {
                let t = e.includes("/internal/worker/update");
                401 !== b.status || t || (window.location.replace("/logout"),
                (0,
                o.$v)(),
                (0,
                o.ed)(),
                (0,
                o.iD)());
                let n = await b.json();
                if ("error"in n)
                    throw new a(b.status,n.error || "");
                if ("errors"in n)
                    throw new a(b.status,n.errors || "")
            }
            return (null === (t = b.headers.get("Content-type")) || void 0 === t ? void 0 : t.includes("application/json")) ? b.json() : b.text()
        }
    },
    91195: function(e, t, n) {
        "use strict";
        var r = n(13863);
        let s = "pubdd7f44529ecf6e8108c796d583835730";
        t.Z = {
            debug: (e, t, n) => {
                s && r.fy.logger.debug(e, t, n)
            }
            ,
            info: (e, t, n) => {
                s && r.fy.logger.info(e, t, n)
            }
            ,
            warn: (e, t, n) => {
                s && r.fy.logger.warn(e, t, n)
            }
            ,
            error: (e, t, n) => {
                s && r.fy.logger.error(e, t, n)
            }
        }
    },
    45989: function(e, t, n) {
        "use strict";
        n.d(t, {
            N: function() {
                return r
            },
            p: function() {
                return s
            }
        });
        let r = () => {
            var e;
            return null !== (e = new URLSearchParams(window.location.search).get("spoof")) && void 0 !== e ? e : void 0
        }
          , s = (e, t, n) => {
            if (!e)
                return "";
            let s = null != t ? t : r()
              , i = e;
            if (s) {
                let e = "spoof=".concat(s);
                i.includes("?") ? i += "&".concat(e) : i += "?".concat(e)
            }
            return n && (i += "#".concat(n)),
            i
        }
    },
    45968: function() {},
    43339: function() {}
}, function(e) {
    e.O(0, [2597, 1170, 6073, 2823, 1224, 9734, 7973, 1425, 7848, 9483, 1617, 7348, 6574, 4096, 6863, 181, 5661, 1971, 1375, 6452, 3863, 217, 1396, 1183, 4340, 4842, 1744], function() {
        return e(e.s = 24343)
    }),
    _N_E = e.O()
}
]);
