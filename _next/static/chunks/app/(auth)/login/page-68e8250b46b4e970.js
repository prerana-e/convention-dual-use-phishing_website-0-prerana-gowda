(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4665], {
    41930: function(e, a, t) {
        Promise.resolve().then(t.bind(t, 92264))
    },
    2662: function(e, a, t) {
        "use strict";
        t.d(a, {
            b: function() {
                return s
            }
        });
        var i = t(28683)
          , r = t(42871);
        let n = {
            accent: "indigo",
            neutral: "gray",
            error: "tomato",
            success: "grass",
            warning: "amber",
            info: "sky"
        };
        function s(e, a) {
            let t = e.displayName || e.name || "Component"
              , s = (0,
            r.forwardRef)( (t, r) => {
                let s = Object.assign(Object.assign({}, a), t);
                if ("color"in s && s.color) {
                    let e = s.color;
                    e in n && (s.color = n[e])
                }
                return (0,
                i.jsx)(e, Object.assign({}, s, {
                    ref: r
                }))
            }
            );
            return s.displayName = t,
            s
        }
    },
    92264: function(e, a, t) {
        "use strict";
        t.d(a, {
            LoginForm: function() {
                return C
            }
        });
        var i = t(28683)
          , r = t(38152)
          , n = t(87497)
          , s = t(43805)
          , l = t(12453)
          , c = t(40772)
          , o = t(41775);
        let g = () => (0,
        c.useQuery)({
            queryKey: ["isScaleFTEVPN"],
            queryFn: async () => await (0,
            o.L)("/internal/experts/is-scale-fte-vpn")
        });
        var u = t(9257)
          , I = t(25421)
          , d = t(13738)
          , m = t(30889)
          , x = t(99308)
          , w = t(46347)
          , j = t(44432)
          , b = t(61662)
          , M = t(91195);
        let N = () => (0,
        u.useMutation)({
            mutationFn: async e => {
                let {email: a, password: t} = e;
                return await (0,
                o.L)("/internal/loginNext/expert", "POST", JSON.stringify({
                    email: a,
                    password: t
                }))
            }
            ,
            onSuccess: async () => {
                (0,
                I.qb)();
                try {
                    let e = await (0,
                    o.L)("/internal/logged_in_user");
                    await (0,
                    x._)(e, w.mz.LOGIN);
                    try {
                        await (0,
                        j.j)(b.SeonActionType.LOGIN, e._id)
                    } catch (e) {
                        M.Z.error("Failed to evaluate SEON")
                    }
                    let a = new URLSearchParams(window.location.search).get("redirect_url")
                      , t = new URLSearchParams(window.location.search).get("signup_flow")
                      , i = null != a ? a : "";
                    t && (i += (i.includes("?") ? "&" : "?") + "signupFlow=".concat(t)),
                    i.length > 0 ? (0,
                    d.dA)(i) : e.activeWorkerTeam === m.MARKETPLACE_WORKER_TEAM_ID ? (0,
                    d.dA)("/dashboard") : (0,
                    d.dA)("/expert")
                } catch (e) {
                    (0,
                    d.dA)("/expert")
                }
            }
        })
          , p = e => e ? e instanceof o.z ? e.message : JSON.parse(e.message).message : null;
        var h = t(31265)
          , A = t(45989)
          , y = t(55223)
          , L = t(42871);
        let C = () => {
            let[e,a] = (0,
            L.useState)("")
              , [t,c] = (0,
            L.useState)("")
              , {mutate: o, error: u, isPending: I, isSuccess: m} = N()
              , {data: x} = g()
              , w = async a => {
                a.preventDefault(),
                o({
                    email: e,
                    password: t
                })
            }
              , j = p(u)
              , b = (0,
            A.N)();
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsxs)("form", {
                    className: "w-full space-y-2",
                    onSubmit: w,
                    children: [(0,
                    i.jsx)(r.n, {
                        label: "Email",
                        id: "email",
                        type: "email",
                        value: e,
                        onChange: e => a(e.target.value)
                    }), (0,
                    i.jsx)(r.n, {
                        label: "Password",
                        id: "password",
                        type: "password",
                        value: t,
                        onChange: e => c(e.target.value)
                    }), (0,
                    i.jsx)(n.u, {
                        text: I || m ? "" : "Please enter an email and password to login",
                        target: (0,
                        i.jsx)("div", {
                            className: "w-full",
                            children: (0,
                            i.jsx)(s.zx, {
                                fullWidth: !0,
                                variant: "primary",
                                size: "lg",
                                className: "mt-4",
                                disabled: I || !e && !t || m,
                                children: I || m ? (0,
                                i.jsx)(l.$, {}) : "Login"
                            })
                        })
                    }), (0,
                    i.jsx)("div", {
                        children: (0,
                        i.jsx)("a", {
                            className: "font-thin text-sm cursor-pointer text-neutral-400",
                            onClick: () => (0,
                            d.s7)("/expert/forgot_password"),
                            children: "Forgot password"
                        })
                    }), j && (0,
                    i.jsx)("div", {
                        className: "text-danger-500 mt-4 font-medium",
                        children: j
                    })]
                }), (0,
                i.jsxs)("div", {
                    className: "w-full flex items-center space-x-2 px-2",
                    children: [(0,
                    i.jsx)("div", {
                        className: "flex-grow h-[1px] bg-neutral-300"
                    }), (0,
                    i.jsx)("span", {
                        className: "text-neutral-500",
                        children: "or"
                    }), (0,
                    i.jsx)("div", {
                        className: "flex-grow h-[1px] bg-neutral-300"
                    })]
                }), (x || b) && (0,
                i.jsxs)(s.zx, {
                    fullWidth: !0,
                    onClick: () => {
                        let e = new URLSearchParams(window.location.search).get("redirect_url") || "/en/expert/dashboard"
                          , a = h.Kc ? "http://localhost:3004" : h.YK
                          , t = (0,
                        d.KV)(a, "/internal/login/corp-saml", {
                            redirectUrl: e,
                            app: "outlier"
                        });
                        window.location.href = t
                    }
                    ,
                    variant: "white",
                    className: "border border-neutral-200 h-[36px] justify-start",
                    children: [(0,
                    i.jsx)("span", {
                        style: {
                            backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB4bWxuczp2PSJodHRwczovL3ZlY3RhLmlvL25hbm8iPjxsaW5lYXJHcmFkaWVudCBpZD0iQSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSItLjAxMiIgeTE9IjQ5Ljg3OSIgeDI9Ijk5Ljk4NyIgeTI9IjUwLjEwNyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZDFhYWQ3Ii8+PHN0b3Agb2Zmc2V0PSIuMjUiIHN0b3AtY29sb3I9IiNjODhjYzQiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjN2I4ZmRkIi8+PHN0b3Agb2Zmc2V0PSIuNzQ5IiBzdG9wLWNvbG9yPSIjODZiZmYyIi8+PHN0b3Agb2Zmc2V0PSIuOTk5IiBzdG9wLWNvbG9yPSIjYmJkZWYyIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBkPSJNMTAwIDEwMEw1MCA1MCAwIDBoMTAwdjEwMHpNMjUgNzVMMCA1MGg1MHY1MEwgMjUgNzV6bTAgMHYyNUwwIDc1aDI1eiIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSJ1cmwoI0EpIi8+PC9zdmc+)"
                        },
                        className: "w-7 h-7 mr-2 bg-center bg-no-repeat bg-[length:18px_18px] inline-block align-middle"
                    }), "Internal users - Log in with SAML"]
                }), (0,
                i.jsxs)(s.zx, {
                    fullWidth: !0,
                    onClick: () => {
                        let e = new URLSearchParams(window.location.search)
                          , a = e.get("redirect_url") || "/en/expert/onboarding"
                          , t = e.get("signup_flow");
                        (0,
                        d.s7)("/internal/login/outlier/google-outlier?".concat(y.Z.stringify({
                            redirect_url: a,
                            signupFlow: t
                        })))
                    }
                    ,
                    variant: "white",
                    className: "border border-neutral-200 justify-start h-[36px]",
                    children: [(0,
                    i.jsx)("span", {
                        style: {
                            backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjNDI4NUY0IiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xNy42NCA5LjJjMC0uNjMtLjA2LTEuMjUtLjE2LTEuODRIOXYzLjQ5aDQuODRhNC4xNCA0LjE0IDAgMCAxLTEuOCAyLjcxdjIuMjZoMi45MmE4Ljc4IDguNzggMCAwIDAgMi42OC02LjYyeiIvPjxwYXRoIGZpbGw9IiMzNEE4NTMiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMThhOC42IDguNiAwIDAgMCA1Ljk2LTIuMThsLTIuOTEtMi4yNmE1LjQgNS40IDAgMCAxLTguMDktMi44NWgtM3YyLjMzQTkgOSAwIDAgMCA5IDE4eiIvPjxwYXRoIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMuOTYgMTAuNzFhNS40MSA1LjQxIDAgMCAxIDAtMy40MlY0Ljk2aC0zYTkgOSAwIDAgMCAwIDguMDhsMy0yLjMzeiIvPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTkgMy41OGMxLjMyIDAgMi41LjQ1IDMuNDQgMS4zNWwyLjU4LTIuNTlBOSA5IDAgMCAwIC45NiA0Ljk1bDMgMi4zNEE1LjM2IDUuMzYgMCAwIDEgOSAzLjU4eiIvPjxwb2x5Z29uIHBvaW50cz0iMCAwIDE4IDAgMTggMTggMCAxOCIvPjwvZz48L3N2Zz4=)"
                        },
                        className: "w-7 h-7 mr-2 bg-center bg-no-repeat bg-[length:18px_18px] inline-block align-middle"
                    }), "Continue with Google"]
                }), (0,
                i.jsxs)("div", {
                    className: "text-sm text-neutral-400",
                    children: ["Don't have an account? Check out our", " ", (0,
                    i.jsx)("a", {
                        onClick: () => (0,
                        d.s7)("/en/expert/opportunities"),
                        className: "text-primary-500 hover:text-primary-600 cursor-pointer",
                        children: "Opportunities"
                    })]
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [1224, 4575, 5785, 1425, 7848, 9483, 6854, 1617, 7348, 7171, 6574, 4211, 4096, 6863, 5476, 9416, 1375, 3863, 4395, 3083, 2721, 58, 2712, 4340, 4842, 1744], function() {
        return e(e.s = 41930)
    }),
    _N_E = e.O()
}
]);
