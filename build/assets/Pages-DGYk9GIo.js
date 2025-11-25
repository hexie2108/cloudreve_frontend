import {
  j as e,
  g as M,
  r as g,
  q as jt,
  x as vt,
  n as Re,
  v as I,
  G as tn,
  aa as nn,
  ab as sn,
  ac as an,
  S as Ze,
  C as Je,
  X as rn,
} from "./react-CV3HRGEF.js";
import {
  L as Qe,
  P as ge,
  a as ne,
  S as yt,
  h as ue,
  i as on,
  b as bt,
  R as wt,
  G as ln,
  u as cn,
} from "./DownloadFileList-6nHycLmz.js";
import {
  f as St,
  q as L,
  t as Y,
  fU as Ge,
  eb as xe,
  cP as Ct,
  T as _,
  a9 as A,
  de as se,
  aj as X,
  cz as Ne,
  y as z,
  cA as _e,
  d3 as pe,
  cB as ze,
  da as dn,
  a0 as et,
  ai as G,
  db as lt,
  J as ct,
  be as At,
  bd as Et,
  aR as ye,
  aq as tt,
  j as Z,
  bA as J,
  aL as kt,
  aX as un,
  cJ as ie,
  fV as hn,
  aA as Pt,
  aN as nt,
  aO as F,
  ap as ee,
  dF as Mt,
  ar as N,
  d0 as pn,
  bR as gn,
  cS as xn,
  fW as fn,
  fX as Rt,
  at as ae,
  e0 as Ie,
  f9 as Le,
  X as _t,
  eg as ce,
  _ as mn,
  co as It,
  e6 as Me,
  aC as st,
  aQ as jn,
  fY as vn,
  G as Lt,
  D as we,
  z as Se,
  A as V,
  cg as yn,
  cv as bn,
  ci as wn,
  cp as dt,
  I as Sn,
  K as me,
  L as je,
  fZ as Cn,
  f_ as An,
  bg as En,
  dd as kn,
  bx as Pn,
  aE as Mn,
  f$ as Rn,
  R as _n,
  V as In,
  W as Ln,
  aP as de,
  Z as Tn,
  d5 as Dn,
  bK as Te,
  ab as Tt,
  d9 as On,
  a8 as Nn,
  cC as zn,
  s as Ce,
  b9 as Ae,
  g0 as Fn,
  b_ as Be,
  bt as Wn,
  g1 as Bn,
  eq as Un,
  ev as Pe,
  g2 as Vn,
  g3 as Hn,
  E as be,
  ez as $n,
  e7 as te,
  af as it,
  dR as Qn,
  dQ as ut,
  g4 as Gn,
  g5 as Kn,
  g6 as q,
  g7 as Yn,
  g8 as Dt,
  dv as qn,
  en as Ot,
  g9 as Xn,
  ga as Ke,
  gb as K,
  dq as Zn,
  ao as Nt,
  fj as zt,
  an as Jn,
  b7 as ht,
  gc as es,
  cm as fe,
  br as ts,
  dw as ns,
  gd as Ft,
  ag as Wt,
  b8 as at,
  ge as ss,
  fk as is,
  fl as as,
  ff as rs,
  as as os,
  bf as ls,
  o as pt,
  gf as cs,
  gg as ds,
  gh as Ue,
  gi as us,
  gj as Ve,
  gk as hs,
  gl as ps,
  gm as gs,
  gn as xs,
  go as fs,
} from "./index-CIdel1P5.js";
import { F as rt, C as ms, S as O } from "./SettingForm-B_4-_WPw.js";
import { C as js, S as vs } from "./DarkThemeSwitcher-CgNG2IV_.js";
import "./common-5dK6VpSw.js";
const ys = St(
    e.jsx("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z",
    }),
    "Edit",
  ),
  bs = St(
    e.jsx("path", {
      d: "M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4",
    }),
    "PersonOutline",
  ),
  gt = 25,
  ws = 20 * 1e3,
  vi = () => {
    const { t } = M(),
      o = L();
    Y((c) => c.globalState.policyOptionCache);
    const [a, d] = g.useState(""),
      [x, u] = g.useState([]),
      [p, h] = g.useState(!1),
      [s, i] = g.useState(!0),
      n = g.useRef();
    g.useEffect(() => {
      s && !n.current
        ? (n.current = setInterval(() => {
            l();
          }, ws))
        : (clearInterval(n.current), (n.current = void 0));
    }, [s]),
      g.useEffect(
        () => () => {
          clearInterval(n.current), (n.current = void 0);
        },
        [],
      );
    const r = g.useCallback(
        (c, m) => () => {
          h(!0),
            o(Ge({ page_size: gt, category: Qe.general, next_page_token: m }))
              .then((v) => {
                var j;
                m && i(!1),
                  u([...c, ...v.tasks]),
                  (j = v.pagination) != null && j.next_token ? d(v.pagination.next_token) : d(void 0);
              })
              .catch(() => {
                d(void 0);
              })
              .finally(() => {
                h(!1);
              });
        },
        [o, i, u],
      ),
      l = () => {
        r([], "")();
      },
      f = (c) => {
        c.target.checked && x.length > gt && r([], "")(), i(c.target.checked);
      };
    return e.jsx(ge, {
      children: e.jsxs(xe, {
        maxWidth: "lg",
        children: [
          e.jsx(ne, {
            secondaryAction: e.jsx(rt, {
              children: e.jsx(Ct, {
                sx: { mr: 0 },
                control: e.jsx(yt, { size: "small", onChange: f, checked: s }),
                label: e.jsx(_, { variant: "body2", color: "text.secondary", children: t("setting.autoRefresh") }),
              }),
            }),
            onRefresh: l,
            loading: p,
            title: t("application:navbar.taskQueue"),
          }),
          x.map((c) => e.jsx(ue, { task: c }, c.id)),
          a != null && e.jsx(ue, { onLoad: r(x, a), loading: !0 }, a),
          a == null &&
            x.length == 0 &&
            e.jsx(A, {
              sx: { p: 1, width: "100%", textAlign: "center" },
              children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.listEmpty") }),
            }),
        ],
      }),
    });
  };
function Ss(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M10 5.75A.75.75 0 0 0 9.25 5H7l-.25.006A5 5 0 0 0 7 15h2.25l.11-.008a.75.75 0 0 0-.11-1.492H7l-.206-.006A3.5 3.5 0 0 1 7 6.5h2.25l.11-.008A.75.75 0 0 0 10 5.75M21.997 10a5 5 0 0 0-5-5h-2.25l-.11.008a.75.75 0 0 0 .11 1.492h2.25l.206.006a3.5 3.5 0 0 1 3.293 3.588c.518.126 1.01.38 1.428.76a5.03 5.03 0 0 0 .073-.855m-5-.75H7l-.102.006A.75.75 0 0 0 7 10.75h9.999l.101-.006A.75.75 0 0 0 17 9.25m1.1 2.419l-5.901 5.902a2.685 2.685 0 0 0-.707 1.247l-.457 1.83c-.2.797.522 1.518 1.318 1.319l1.83-.458a2.685 2.685 0 0 0 1.248-.706L21.33 14.9a2.285 2.285 0 0 0-3.233-3.232",
    }),
  });
}
function Bt(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M12 2a4 4 0 0 1 4 4v2h1.75A2.25 2.25 0 0 1 20 10.25v9.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75v-9.5A2.25 2.25 0 0 1 6.25 8H8V6a4 4 0 0 1 4-4Zm5.75 7.5H6.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-9.5a.75.75 0 0 0-.75-.75Zm-5.75 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm0-10A2.5 2.5 0 0 0 9.5 6v2h5V6A2.5 2.5 0 0 0 12 3.5Z",
    }),
  });
}
const Cs = ({ share: t, onShareDeleted: o, onClose: a, ...d }) => {
    const x = Z(),
      { t: u } = M(),
      p = L(),
      { enqueueSnackbar: h } = J(),
      s = g.useCallback(() => {
        p(kt(u("fileManager.deleteShareWarning"))).then(() => {
          p(un(t.id)).then(() => {
            a && a({}, "backdropClick"),
              h({ message: u("application:share.shareCanceled"), variant: "success", action: ie }),
              o(t.id);
          });
        });
      }, [u, t.id, a, p, h]),
      i = g.useCallback(() => {
        p(hn(t.id, t.password, t.source_type == et.file)), a && a({}, "backdropClick");
      }, [p, t, a]),
      n = g.useCallback(() => {
        window.open(t.url, "_blank"), a && a({}, "backdropClick");
      }, [t, a]),
      r = g.useCallback(() => {
        Pt(t.url), a && a({}, "backdropClick");
      }, [t, a, u]);
    return e.jsxs(nt, {
      onClose: a,
      slotProps: { paper: { sx: { minWidth: 150 } } },
      ...d,
      children: [
        e.jsxs(F, {
          dense: !0,
          onClick: n,
          children: [
            e.jsx(ee, { children: e.jsx(Mt, { fontSize: "small" }) }),
            e.jsx(N, { children: u("fileManager.open") }),
          ],
        }),
        e.jsxs(F, {
          dense: !0,
          onClick: r,
          children: [
            e.jsx(ee, { children: e.jsx(pn, { fontSize: "small" }) }),
            e.jsx(N, { children: u("share.copyLinkToClipboard") }),
          ],
        }),
        !t.expired &&
          e.jsxs(F, {
            dense: !0,
            onClick: i,
            children: [
              e.jsx(ee, { children: e.jsx(Ss, { fontSize: "small" }) }),
              e.jsx(N, { children: u(`fileManager.${t != null && t.expired ? "editAndReactivate" : "edit"}`) }),
            ],
          }),
        e.jsx(gn, {}),
        e.jsxs(F, {
          hoverColor: x.palette.error.light,
          dense: !0,
          onClick: s,
          children: [
            e.jsx(ee, { children: e.jsx(xn, { fontSize: "small" }) }),
            e.jsx(N, { children: u("fileManager.delete") }),
          ],
        }),
      ],
    });
  },
  De = ({ share: t, onShareDeleted: o, onLoad: a, loading: d }) => {
    var i;
    const { t: x } = M();
    jt();
    const { ref: u, inView: p } = vt({ rootMargin: "200px 0px", triggerOnce: !0, skip: !d || !a }),
      h = Ne({ popupId: "shareAction", variant: "popover" });
    g.useEffect(() => {
      p && a && a();
    }, [p]);
    const s = z.currentLoginOrNull();
    return e.jsxs(e.Fragment, {
      children: [
        t && e.jsx(Cs, { onShareDeleted: o, share: t, ..._e(h) }),
        e.jsx(pe, {
          item: !0,
          xs: 12,
          sm: 6,
          md: 4,
          ref: u,
          children: e.jsx(on, {
            disabled: d,
            expanded: !1,
            onContextMenu: (n) => {
              var r;
              n.preventDefault(),
                ((r = t == null ? void 0 : t.owner) == null ? void 0 : r.id) === (s == null ? void 0 : s.user.id) &&
                  h.open(n);
            },
            sx: { p: 0, minHeight: 0, width: "100%", textAlign: "left" },
            ...(((i = t == null ? void 0 : t.owner) == null ? void 0 : i.id) != (s == null ? void 0 : s.user.id)
              ? {
                  onClick: () => {
                    window.open((t == null ? void 0 : t.url) ?? "#", "_blank");
                  },
                }
              : ze(h)),
            children: e.jsxs(A, {
              sx: { display: "flex", width: "100%" },
              children: [
                e.jsx(A, {
                  sx: { height: 48, p: 1.5 },
                  children: t
                    ? e.jsx(dn, {
                        sx: { fontSize: 32 },
                        name: (t == null ? void 0 : t.name) ?? "",
                        fileType: (t == null ? void 0 : t.source_type) ?? et.file,
                      })
                    : e.jsx(G, { variant: "circular", width: 32, height: 32 }),
                }),
                e.jsxs(lt, {
                  sx: { flexGrow: 1, p: 1, pl: 0, pr: 2 },
                  children: [
                    e.jsxs(A, {
                      sx: { display: "flex", alignItems: "center" },
                      children: [
                        e.jsxs(lt, {
                          sx: { display: "flex", gap: 0.5, alignItems: "center" },
                          children: [
                            t && (t == null ? void 0 : t.password_protected) && e.jsx(Bt, { sx: { fontSize: "16px" } }),
                            e.jsx(ct, {
                              title: (t == null ? void 0 : t.name) ?? "",
                              children: e.jsx(_, {
                                variant: "body2",
                                fontWeight: 500,
                                noWrap: !0,
                                children: d ? e.jsx(G, { variant: "text", width: 200 }) : t == null ? void 0 : t.name,
                              }),
                            }),
                          ],
                        }),
                        (t == null ? void 0 : t.expired) &&
                          e.jsx(At, {
                            size: "small",
                            label: x("application:share.expired"),
                            sx: { ml: 1, height: 18 },
                          }),
                      ],
                    }),
                    e.jsx(A, {
                      children: e.jsx(ct, {
                        title: (t == null ? void 0 : t.name) ?? "",
                        children: e.jsx(Et, {
                          variant: "body2",
                          color: "text.secondary",
                          children:
                            t != null && t.created_at
                              ? e.jsxs(A, {
                                  sx: { display: "flex", alignItems: "center", justifyContent: "space-between" },
                                  children: [
                                    e.jsx(ye, {
                                      sx: { textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" },
                                      variant: "body2",
                                      datetime: t == null ? void 0 : t.created_at,
                                    }),
                                    e.jsxs(A, {
                                      sx: { display: "flex", alignItems: "center" },
                                      children: [
                                        e.jsx(tt, { sx: { ml: 1, mr: 0.5 }, fontSize: "small" }),
                                        (t == null ? void 0 : t.visited) ?? 0,
                                      ],
                                    }),
                                  ],
                                })
                              : e.jsx(G, { variant: "text", width: "50%" }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  As = 50,
  yi = () => {
    const { t } = M(),
      o = L(),
      [a, d] = g.useState(""),
      [x, u] = g.useState([]),
      [p, h] = g.useState(!1),
      [s, i] = g.useState("desc"),
      n = g.useCallback(
        (c, m, v) => () => {
          h(!0),
            o(fn({ page_size: As, order_direction: v ?? s, next_page_token: m }))
              .then((j) => {
                var w;
                u([...c, ...j.shares]),
                  (w = j.pagination) != null && w.next_token ? d(j.pagination.next_token) : d(void 0);
              })
              .catch(() => {
                d(void 0);
              })
              .finally(() => {
                h(!1);
              });
        },
        [o, s, Rt],
      ),
      r = (c) => {
        n([], "", c)();
      },
      l = g.useCallback(
        (c) => {
          u((m) => m.filter((v) => v.id !== c));
        },
        [u],
      ),
      f = g.useCallback(
        (c) => {
          i(c.target.value), r(c.target.value);
        },
        [r, i],
      );
    return e.jsx(ge, {
      children: e.jsxs(xe, {
        maxWidth: "lg",
        children: [
          e.jsx(ne, {
            secondaryAction: e.jsx(ae, {
              variant: "outlined",
              children: e.jsxs(Ie, {
                variant: "outlined",
                value: s,
                onChange: f,
                children: [
                  e.jsx(F, {
                    value: "desc",
                    children: e.jsx(N, {
                      slotProps: { primary: { variant: "body2" } },
                      children: t("application:share.createdAtDesc"),
                    }),
                  }),
                  e.jsx(F, {
                    value: "asc",
                    children: e.jsx(N, {
                      slotProps: { primary: { variant: "body2" } },
                      children: t("application:share.createdAtAsc"),
                    }),
                  }),
                ],
              }),
            }),
            onRefresh: () => r(),
            loading: p,
            title: t("application:navbar.myShare"),
          }),
          e.jsxs(pe, {
            container: !0,
            spacing: 1,
            children: [
              x.map((c) => e.jsx(De, { share: c, onShareDeleted: l }, c.id)),
              a != null &&
                e.jsx(e.Fragment, {
                  children: [...Array(4)].map((c, m) =>
                    e.jsx(De, { onShareDeleted: l, onLoad: m == 0 ? n(x, a) : void 0, loading: !0 }, m == 0 ? a : m),
                  ),
                }),
            ],
          }),
          a == null &&
            x.length == 0 &&
            e.jsx(A, {
              sx: { p: 1, width: "100%", textAlign: "center" },
              children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.listEmpty") }),
            }),
        ],
      }),
    });
  },
  He = 25,
  Es = 20 * 1e3,
  bi = () => {
    const { t } = M(),
      o = L(),
      [a, d] = g.useState(""),
      [x, u] = g.useState([]),
      [p, h] = g.useState(void 0),
      [s, i] = g.useState(!1),
      [n, r] = g.useState(!0),
      l = g.useRef(),
      f = g.useRef("");
    g.useEffect(() => {
      n && !l.current
        ? (l.current = setInterval(() => {
            v();
          }, Es))
        : (clearInterval(l.current), (l.current = void 0));
    }, [n]),
      g.useEffect(
        () => () => {
          clearInterval(l.current), (l.current = void 0);
        },
        [],
      );
    const c = g.useCallback(
        (w, b) => () => {
          i(!0),
            o(Ge({ page_size: He, category: Qe.downloaded, next_page_token: b }))
              .then((y) => {
                var S;
                b && r(!1),
                  u([...w, ...y.tasks]),
                  (S = y.pagination) != null && S.next_token ? d(y.pagination.next_token) : d(void 0);
              })
              .catch(() => {
                d(void 0);
              })
              .finally(() => {
                i(!1);
              });
        },
        [o, r, u],
      ),
      m = g.useCallback(() => {
        i(!0),
          o(Ge({ page_size: He, category: Qe.downloading }))
            .then((w) => {
              var y, S;
              h(w.tasks);
              const b = `${((y = w.tasks[0]) == null ? void 0 : y.id) ?? ""}-${
                ((S = w.tasks[w.tasks.length - 1]) == null ? void 0 : S.id) ?? ""
              }-${w.tasks.length}`;
              f.current != "" && f.current != b && c([], "")(), (f.current = b);
            })
            .catch(() => {})
            .finally(() => {
              i(!1);
            });
      }, [o, r, h]),
      v = () => {
        m();
      },
      j = (w) => {
        w.target.checked && x.length > He && c([], "")(), r(w.target.checked);
      };
    return e.jsx(ge, {
      children: e.jsxs(xe, {
        maxWidth: "lg",
        children: [
          e.jsx(ne, {
            secondaryAction: e.jsx(rt, {
              children: e.jsx(Ct, {
                sx: { mr: 0 },
                control: e.jsx(yt, { size: "small", onChange: j, checked: n }),
                label: e.jsx(_, { variant: "body2", color: "text.secondary", children: t("setting.autoRefresh") }),
              }),
            }),
            onRefresh: v,
            loading: s,
            title: t("application:navbar.remoteDownload"),
          }),
          e.jsx(_, {
            variant: "h5",
            sx: { mb: 2 },
            color: "text.secondary",
            fontWeight: 500,
            children: t("download.active"),
          }),
          p != null &&
            p.length == 0 &&
            e.jsx(A, {
              sx: { p: 1, width: "100%", textAlign: "center" },
              children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.listEmpty") }),
            }),
          p == null && e.jsx(ue, { onLoad: m, loading: !0 }),
          p && p.map((w) => e.jsx(ue, { showProgress: !0, task: w }, w.id)),
          e.jsx(_, {
            variant: "h5",
            sx: { mb: 2, mt: 3 },
            color: "text.secondary",
            fontWeight: 500,
            children: t("download.finished"),
          }),
          x.map((w) => e.jsx(ue, { task: w }, w.id)),
          a != null && e.jsx(ue, { onLoad: c(x, a), loading: !0 }, a),
          a == null &&
            x.length == 0 &&
            e.jsx(A, {
              sx: { p: 1, width: "100%", textAlign: "center" },
              children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.listEmpty") }),
            }),
        ],
      }),
    });
  },
  ve = { readonly: 0, proxy: 1, disable_sys_files: 2 };
function ks(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M6.08 9.02a6.001 6.001 0 0 1 11.84 0A4.5 4.5 0 0 1 17.5 18h-11a4.5 4.5 0 0 1-.42-8.98",
    }),
  });
}
const xt = ({ account: t, onAccountDeleted: o, onLoad: a, loading: d, onClick: x, onEditClicked: u }) => {
    const { t: p } = M(),
      h = L(),
      { ref: s, inView: i } = vt({ rootMargin: "200px 0px", triggerOnce: !0, skip: !d || !a }),
      n = Ne({ variant: "popover", popupId: "action" + (t == null ? void 0 : t.id) });
    g.useEffect(() => {
      i && a && a();
    }, [i]);
    const [r, l] = g.useMemo(() => {
        if (!(t != null && t.options)) return [!1, !1];
        const j = new Le(t.options);
        return [j.enabled(ve.readonly), j.enabled(ve.proxy)];
      }, [t == null ? void 0 : t.options]),
      { onClose: f, ...c } = _e(n),
      m = () => {
        t && (u == null || u(t)), f && f();
      },
      v = () => {
        t != null && t.id && (f(), h(vn(t.id)), o(t.id));
      };
    return e.jsxs(_t, {
      ref: s,
      hover: !0,
      sx: { cursor: "pointer" },
      onClick: x,
      children: [
        e.jsx(ce, {
          component: "th",
          scope: "row",
          children: d ? e.jsx(G, { variant: "text", width: 200, sx: { my: "6px" } }) : t == null ? void 0 : t.name,
        }),
        e.jsx(ce, {
          children: d
            ? e.jsx(G, { variant: "text", width: 100 })
            : e.jsx(mn, {
                variant: "outlined",
                clickable: !0,
                sx: { px: 1 },
                simplifiedFile: { path: (t == null ? void 0 : t.uri) ?? It, type: et.folder },
              }),
        }),
        e.jsx(ce, {
          children: d
            ? e.jsx(G, { variant: "text", width: 100 })
            : r
              ? e.jsx(Me, { icon: e.jsx(tt, {}), size: "small", label: p("setting.readonlyOn") })
              : e.jsx(Me, { icon: e.jsx(ys, {}), size: "small", label: p("setting.readonlyOff") }),
        }),
        e.jsx(ce, {
          children: d
            ? e.jsx(G, { variant: "text", width: 100 })
            : l
              ? e.jsx(Me, {
                  icon: e.jsx(ks, {}),
                  sx: { backgroundColor: (j) => j.palette.primary.light },
                  color: "success",
                  size: "small",
                  label: p("application:setting.proxied"),
                })
              : p("setting.none"),
        }),
        e.jsx(ce, {
          children:
            d || !t
              ? e.jsx(G, { variant: "text", width: 100 })
              : e.jsx(ye, { datetime: t.created_at, variant: "inherit" }),
        }),
        e.jsx(ce, {
          onClick: (j) => j.stopPropagation(),
          children: t && e.jsx(st, { size: "small", ...ze(n), children: e.jsx(jn, { fontSize: "small" }) }),
        }),
        e.jsxs(nt, {
          onClick: (j) => j.stopPropagation(),
          onClose: f,
          slotProps: { paper: { sx: { minWidth: 150 } } },
          ...c,
          children: [
            e.jsx(F, { dense: !0, onClick: m, children: e.jsx(N, { children: p("fileManager.edit") }) }),
            e.jsx(F, { dense: !0, onClick: v, children: e.jsx(N, { children: p("fileManager.delete") }) }),
          ],
        }),
      ],
    });
  },
  ft = ({ onClose: t, onAccountAdded: o, onAccountUpdated: a, editTarget: d, open: x, ...u }) => {
    const { t: p } = M(),
      h = L();
    J();
    const [s, i] = g.useState(!1),
      [n, r] = g.useState(""),
      [l, f] = g.useState(It),
      [c, m] = g.useState(!1),
      [v, j] = g.useState(!1),
      [w, b] = g.useState(!1);
    Z();
    const y = g.useMemo(() => {
      var D, T;
      return new Le(
        (T = (D = z.currentLoginOrNull()) == null ? void 0 : D.user.group) == null ? void 0 : T.permission,
      ).enabled(Lt.webdav_proxy);
    }, []);
    g.useEffect(() => {
      if (x && d) {
        r(d.name), f(d.uri);
        const k = new Le(d.options);
        m(k.enabled(ve.readonly)), j(k.enabled(ve.disable_sys_files)), b(k.enabled(ve.proxy));
      }
    }, [x]);
    const S = () => {
      if (!n || !l) return;
      i(!0);
      const k = { name: n, uri: l, proxy: w, readonly: c, disable_sys_files: v };
      h(d ? Cn(d.id, k) : An(k))
        .then((D) => {
          t && t({}, "escapeKeyDown"), !d && o && o(D), d && a && a(D);
        })
        .finally(() => {
          i(!1);
        });
    };
    return e.jsx(we, {
      title: d ? p("setting.editWebDavAccount", { name: d.name }) : p("setting.createWebDavAccount"),
      showActions: !0,
      loading: s,
      showCancel: !0,
      onAccept: S,
      disabled: !n || !l,
      dialogProps: { onClose: t, open: x, fullWidth: !0, maxWidth: "xs", disableRestoreFocus: !0, ...u },
      children: e.jsx(Se, {
        sx: { pt: 1 },
        children: e.jsxs(V, {
          spacing: 2,
          direction: "column",
          children: [
            e.jsx(yn, {
              icon: e.jsx(bn, {}),
              variant: "outlined",
              value: n,
              multiline: !0,
              onChange: (k) => r(k.target.value),
              label: p("setting.annotation"),
              fullWidth: !0,
            }),
            e.jsx(wn, {
              onChange: f,
              path: l,
              variant: "davAccountRoot",
              label: p("application:setting.rootFolder"),
              allowedFs: [dt.my, dt.share],
            }),
            e.jsx(Sn, {
              accordionDetailProps: { sx: { pt: 0, pl: "30px" } },
              defaultExpanded: c || (y && w),
              title: p("application:modals.advanceOptions"),
              children: e.jsxs(rt, {
                children: [
                  e.jsx(me, {
                    control: e.jsx(je, { size: "small", onChange: (k) => m(k.target.checked), checked: c }),
                    label: p("application:setting.readonlyOn"),
                  }),
                  e.jsx(_, {
                    sx: { pl: "27px" },
                    variant: "caption",
                    color: "text.secondary",
                    children: p("application:setting.readonlyTooltip"),
                  }),
                  e.jsx(me, {
                    control: e.jsx(je, { size: "small", onChange: (k) => j(k.target.checked), checked: v }),
                    label: p("application:setting.blockSysFilesUpload"),
                  }),
                  e.jsx(_, {
                    sx: { pl: "27px" },
                    variant: "caption",
                    color: "text.secondary",
                    children: e.jsx(Re, {
                      i18nKey: "application:setting.blockSysFilesUploadTooltip",
                      ns: "application",
                      components: [e.jsx(ms, {})],
                    }),
                  }),
                  y &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(me, {
                          control: e.jsx(je, { size: "small", onChange: (k) => b(k.target.checked), checked: w }),
                          label: p("application:setting.proxy"),
                        }),
                        e.jsx(_, {
                          sx: { pl: "27px" },
                          variant: "caption",
                          color: "text.secondary",
                          children: p("application:setting.proxyTooltip"),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  $e = ({ label: t, value: o }) =>
    e.jsxs(ae, {
      variant: "filled",
      children: [
        e.jsx(En, { children: t }),
        e.jsx(kn, {
          sx: { "&.MuiFilledInput-root": { paddingRight: "20px" } },
          value: o,
          fullWidth: !0,
          endAdornment: e.jsx(Pn, {
            position: "end",
            children: e.jsx(st, { edge: "end", onClick: () => Pt(o), children: e.jsx(Mn, {}) }),
          }),
          inputProps: { readOnly: !0 },
        }),
      ],
    }),
  Ps = ({ onClose: t, account: o, ...a }) => {
    var x;
    const { t: d } = M();
    return (
      L(),
      e.jsx(we, {
        title: d("application:setting.connectionInfo"),
        showActions: !0,
        onAccept: () => t && t({}, "escapeKeyDown"),
        dialogProps: { onClose: t, fullWidth: !0, maxWidth: "xs", disableRestoreFocus: !0, ...a },
        children: e.jsx(Se, {
          sx: { pt: 1 },
          children: e.jsxs(V, {
            spacing: 2,
            direction: "column",
            children: [
              e.jsx($e, { label: d("application:setting.webdavServer"), value: window.location.origin + "/dav" }),
              e.jsx($e, {
                label: d("application:setting.userName"),
                value: ((x = z.currentLoginOrNull()) == null ? void 0 : x.user.email) ?? "",
              }),
              e.jsx($e, { label: d("application:login.password"), value: (o == null ? void 0 : o.password) ?? "" }),
            ],
          }),
        }),
      })
    );
  },
  Ms = 50,
  Rs = ({ creatAccountDialog: t, setCreateAccountDialog: o }) => {
    const { t: a } = M(),
      d = L(),
      [x, u] = g.useState(""),
      [p, h] = g.useState([]),
      [s, i] = g.useState(!1),
      [n, r] = g.useState(),
      [l, f] = g.useState(),
      [c, m] = g.useState(!1),
      v = g.useCallback(
        (y, S) => () => {
          i(!0),
            d(Rn({ page_size: Ms, next_page_token: S }))
              .then((k) => {
                var D;
                h([...y, ...k.accounts]),
                  (D = k.pagination) != null && D.next_token ? u(k.pagination.next_token) : u(void 0);
              })
              .catch(() => {
                u(void 0);
              })
              .finally(() => {
                i(!1);
              });
        },
        [d],
      ),
      j = g.useCallback(
        (y) => {
          h((S) => S.filter((k) => k.id !== y));
        },
        [h],
      ),
      w = (y) => {
        h([y, ...p]), r(y);
      },
      b = (y) => {
        m(!0), f(y);
      };
    return e.jsxs(A, {
      children: [
        e.jsx(ft, { open: t, onClose: () => o(!1), onAccountAdded: w }),
        e.jsx(ft, {
          open: c,
          editTarget: l,
          onClose: () => m(!1),
          onAccountUpdated: (y) => h(p.map((S) => (S.id == y.id ? y : S))),
        }),
        e.jsx(Ps, { open: n != null, account: n, onClose: () => r(void 0) }),
        e.jsxs(_n, {
          sx: { mt: 1 },
          children: [
            e.jsxs(In, {
              sx: { width: "100%", tableLayout: "fixed" },
              size: "small",
              children: [
                e.jsx(Ln, {
                  children: e.jsxs(_t, {
                    children: [
                      e.jsx(de, { width: 200, children: a("setting.annotation") }),
                      e.jsx(de, { width: 200, children: e.jsx(js, { children: a("setting.rootFolder") }) }),
                      e.jsx(de, { width: 150, children: a("fileManager.permissions") }),
                      e.jsx(de, { width: 150, children: a("setting.proxy") }),
                      e.jsx(de, { width: 200, children: a("fileManager.createdAt") }),
                      e.jsx(de, { width: 100, children: a("fileManager.actions") }),
                    ],
                  }),
                }),
                e.jsxs(Tn, {
                  children: [
                    p.map((y) =>
                      e.jsx(
                        xt,
                        { onClick: () => r(y), account: y, onAccountDeleted: j, onEditClicked: () => b(y) },
                        y.id,
                      ),
                    ),
                    x != null &&
                      e.jsx(e.Fragment, {
                        children: [...Array(4)].map((y, S) =>
                          e.jsx(xt, { onLoad: S == 0 ? v(p, x) : void 0, loading: !0, onAccountDeleted: j }, S),
                        ),
                      }),
                  ],
                }),
              ],
            }),
            x == null &&
              p.length == 0 &&
              e.jsx(A, {
                sx: { p: 1, width: "100%", textAlign: "center" },
                children: e.jsx(_, {
                  variant: "caption",
                  color: "text.secondary",
                  children: a("application:setting.listEmpty"),
                }),
              }),
          ],
        }),
      ],
    });
  };
var _s = Object.defineProperty,
  Oe = Object.getOwnPropertySymbols,
  Ut = Object.prototype.hasOwnProperty,
  Vt = Object.prototype.propertyIsEnumerable,
  mt = (t, o, a) => (o in t ? _s(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (t[o] = a)),
  Ye = (t, o) => {
    for (var a in o || (o = {})) Ut.call(o, a) && mt(t, a, o[a]);
    if (Oe) for (var a of Oe(o)) Vt.call(o, a) && mt(t, a, o[a]);
    return t;
  },
  qe = (t, o) => {
    var a = {};
    for (var d in t) Ut.call(t, d) && o.indexOf(d) < 0 && (a[d] = t[d]);
    if (t != null && Oe) for (var d of Oe(t)) o.indexOf(d) < 0 && Vt.call(t, d) && (a[d] = t[d]);
    return a;
  };
/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */ var re;
((t) => {
  const o = class E {
    constructor(s, i, n, r) {
      if (
        ((this.version = s),
        (this.errorCorrectionLevel = i),
        (this.modules = []),
        (this.isFunction = []),
        s < E.MIN_VERSION || s > E.MAX_VERSION)
      )
        throw new RangeError("Version value out of range");
      if (r < -1 || r > 7) throw new RangeError("Mask value out of range");
      this.size = s * 4 + 17;
      let l = [];
      for (let c = 0; c < this.size; c++) l.push(!1);
      for (let c = 0; c < this.size; c++) this.modules.push(l.slice()), this.isFunction.push(l.slice());
      this.drawFunctionPatterns();
      const f = this.addEccAndInterleave(n);
      if ((this.drawCodewords(f), r == -1)) {
        let c = 1e9;
        for (let m = 0; m < 8; m++) {
          this.applyMask(m), this.drawFormatBits(m);
          const v = this.getPenaltyScore();
          v < c && ((r = m), (c = v)), this.applyMask(m);
        }
      }
      x(0 <= r && r <= 7), (this.mask = r), this.applyMask(r), this.drawFormatBits(r), (this.isFunction = []);
    }
    static encodeText(s, i) {
      const n = t.QrSegment.makeSegments(s);
      return E.encodeSegments(n, i);
    }
    static encodeBinary(s, i) {
      const n = t.QrSegment.makeBytes(s);
      return E.encodeSegments([n], i);
    }
    static encodeSegments(s, i, n = 1, r = 40, l = -1, f = !0) {
      if (!(E.MIN_VERSION <= n && n <= r && r <= E.MAX_VERSION) || l < -1 || l > 7)
        throw new RangeError("Invalid value");
      let c, m;
      for (c = n; ; c++) {
        const b = E.getNumDataCodewords(c, i) * 8,
          y = p.getTotalBits(s, c);
        if (y <= b) {
          m = y;
          break;
        }
        if (c >= r) throw new RangeError("Data too long");
      }
      for (const b of [E.Ecc.MEDIUM, E.Ecc.QUARTILE, E.Ecc.HIGH]) f && m <= E.getNumDataCodewords(c, b) * 8 && (i = b);
      let v = [];
      for (const b of s) {
        a(b.mode.modeBits, 4, v), a(b.numChars, b.mode.numCharCountBits(c), v);
        for (const y of b.getData()) v.push(y);
      }
      x(v.length == m);
      const j = E.getNumDataCodewords(c, i) * 8;
      x(v.length <= j), a(0, Math.min(4, j - v.length), v), a(0, (8 - (v.length % 8)) % 8, v), x(v.length % 8 == 0);
      for (let b = 236; v.length < j; b ^= 253) a(b, 8, v);
      let w = [];
      for (; w.length * 8 < v.length; ) w.push(0);
      return v.forEach((b, y) => (w[y >>> 3] |= b << (7 - (y & 7)))), new E(c, i, w, l);
    }
    getModule(s, i) {
      return 0 <= s && s < this.size && 0 <= i && i < this.size && this.modules[i][s];
    }
    getModules() {
      return this.modules;
    }
    drawFunctionPatterns() {
      for (let n = 0; n < this.size; n++)
        this.setFunctionModule(6, n, n % 2 == 0), this.setFunctionModule(n, 6, n % 2 == 0);
      this.drawFinderPattern(3, 3), this.drawFinderPattern(this.size - 4, 3), this.drawFinderPattern(3, this.size - 4);
      const s = this.getAlignmentPatternPositions(),
        i = s.length;
      for (let n = 0; n < i; n++)
        for (let r = 0; r < i; r++)
          (n == 0 && r == 0) ||
            (n == 0 && r == i - 1) ||
            (n == i - 1 && r == 0) ||
            this.drawAlignmentPattern(s[n], s[r]);
      this.drawFormatBits(0), this.drawVersion();
    }
    drawFormatBits(s) {
      const i = (this.errorCorrectionLevel.formatBits << 3) | s;
      let n = i;
      for (let l = 0; l < 10; l++) n = (n << 1) ^ ((n >>> 9) * 1335);
      const r = ((i << 10) | n) ^ 21522;
      x(r >>> 15 == 0);
      for (let l = 0; l <= 5; l++) this.setFunctionModule(8, l, d(r, l));
      this.setFunctionModule(8, 7, d(r, 6)),
        this.setFunctionModule(8, 8, d(r, 7)),
        this.setFunctionModule(7, 8, d(r, 8));
      for (let l = 9; l < 15; l++) this.setFunctionModule(14 - l, 8, d(r, l));
      for (let l = 0; l < 8; l++) this.setFunctionModule(this.size - 1 - l, 8, d(r, l));
      for (let l = 8; l < 15; l++) this.setFunctionModule(8, this.size - 15 + l, d(r, l));
      this.setFunctionModule(8, this.size - 8, !0);
    }
    drawVersion() {
      if (this.version < 7) return;
      let s = this.version;
      for (let n = 0; n < 12; n++) s = (s << 1) ^ ((s >>> 11) * 7973);
      const i = (this.version << 12) | s;
      x(i >>> 18 == 0);
      for (let n = 0; n < 18; n++) {
        const r = d(i, n),
          l = this.size - 11 + (n % 3),
          f = Math.floor(n / 3);
        this.setFunctionModule(l, f, r), this.setFunctionModule(f, l, r);
      }
    }
    drawFinderPattern(s, i) {
      for (let n = -4; n <= 4; n++)
        for (let r = -4; r <= 4; r++) {
          const l = Math.max(Math.abs(r), Math.abs(n)),
            f = s + r,
            c = i + n;
          0 <= f && f < this.size && 0 <= c && c < this.size && this.setFunctionModule(f, c, l != 2 && l != 4);
        }
    }
    drawAlignmentPattern(s, i) {
      for (let n = -2; n <= 2; n++)
        for (let r = -2; r <= 2; r++) this.setFunctionModule(s + r, i + n, Math.max(Math.abs(r), Math.abs(n)) != 1);
    }
    setFunctionModule(s, i, n) {
      (this.modules[i][s] = n), (this.isFunction[i][s] = !0);
    }
    addEccAndInterleave(s) {
      const i = this.version,
        n = this.errorCorrectionLevel;
      if (s.length != E.getNumDataCodewords(i, n)) throw new RangeError("Invalid argument");
      const r = E.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][i],
        l = E.ECC_CODEWORDS_PER_BLOCK[n.ordinal][i],
        f = Math.floor(E.getNumRawDataModules(i) / 8),
        c = r - (f % r),
        m = Math.floor(f / r);
      let v = [];
      const j = E.reedSolomonComputeDivisor(l);
      for (let b = 0, y = 0; b < r; b++) {
        let S = s.slice(y, y + m - l + (b < c ? 0 : 1));
        y += S.length;
        const k = E.reedSolomonComputeRemainder(S, j);
        b < c && S.push(0), v.push(S.concat(k));
      }
      let w = [];
      for (let b = 0; b < v[0].length; b++)
        v.forEach((y, S) => {
          (b != m - l || S >= c) && w.push(y[b]);
        });
      return x(w.length == f), w;
    }
    drawCodewords(s) {
      if (s.length != Math.floor(E.getNumRawDataModules(this.version) / 8)) throw new RangeError("Invalid argument");
      let i = 0;
      for (let n = this.size - 1; n >= 1; n -= 2) {
        n == 6 && (n = 5);
        for (let r = 0; r < this.size; r++)
          for (let l = 0; l < 2; l++) {
            const f = n - l,
              m = ((n + 1) & 2) == 0 ? this.size - 1 - r : r;
            !this.isFunction[m][f] && i < s.length * 8 && ((this.modules[m][f] = d(s[i >>> 3], 7 - (i & 7))), i++);
          }
      }
      x(i == s.length * 8);
    }
    applyMask(s) {
      if (s < 0 || s > 7) throw new RangeError("Mask value out of range");
      for (let i = 0; i < this.size; i++)
        for (let n = 0; n < this.size; n++) {
          let r;
          switch (s) {
            case 0:
              r = (n + i) % 2 == 0;
              break;
            case 1:
              r = i % 2 == 0;
              break;
            case 2:
              r = n % 3 == 0;
              break;
            case 3:
              r = (n + i) % 3 == 0;
              break;
            case 4:
              r = (Math.floor(n / 3) + Math.floor(i / 2)) % 2 == 0;
              break;
            case 5:
              r = ((n * i) % 2) + ((n * i) % 3) == 0;
              break;
            case 6:
              r = (((n * i) % 2) + ((n * i) % 3)) % 2 == 0;
              break;
            case 7:
              r = (((n + i) % 2) + ((n * i) % 3)) % 2 == 0;
              break;
            default:
              throw new Error("Unreachable");
          }
          !this.isFunction[i][n] && r && (this.modules[i][n] = !this.modules[i][n]);
        }
    }
    getPenaltyScore() {
      let s = 0;
      for (let l = 0; l < this.size; l++) {
        let f = !1,
          c = 0,
          m = [0, 0, 0, 0, 0, 0, 0];
        for (let v = 0; v < this.size; v++)
          this.modules[l][v] == f
            ? (c++, c == 5 ? (s += E.PENALTY_N1) : c > 5 && s++)
            : (this.finderPenaltyAddHistory(c, m),
              f || (s += this.finderPenaltyCountPatterns(m) * E.PENALTY_N3),
              (f = this.modules[l][v]),
              (c = 1));
        s += this.finderPenaltyTerminateAndCount(f, c, m) * E.PENALTY_N3;
      }
      for (let l = 0; l < this.size; l++) {
        let f = !1,
          c = 0,
          m = [0, 0, 0, 0, 0, 0, 0];
        for (let v = 0; v < this.size; v++)
          this.modules[v][l] == f
            ? (c++, c == 5 ? (s += E.PENALTY_N1) : c > 5 && s++)
            : (this.finderPenaltyAddHistory(c, m),
              f || (s += this.finderPenaltyCountPatterns(m) * E.PENALTY_N3),
              (f = this.modules[v][l]),
              (c = 1));
        s += this.finderPenaltyTerminateAndCount(f, c, m) * E.PENALTY_N3;
      }
      for (let l = 0; l < this.size - 1; l++)
        for (let f = 0; f < this.size - 1; f++) {
          const c = this.modules[l][f];
          c == this.modules[l][f + 1] &&
            c == this.modules[l + 1][f] &&
            c == this.modules[l + 1][f + 1] &&
            (s += E.PENALTY_N2);
        }
      let i = 0;
      for (const l of this.modules) i = l.reduce((f, c) => f + (c ? 1 : 0), i);
      const n = this.size * this.size,
        r = Math.ceil(Math.abs(i * 20 - n * 10) / n) - 1;
      return x(0 <= r && r <= 9), (s += r * E.PENALTY_N4), x(0 <= s && s <= 2568888), s;
    }
    getAlignmentPatternPositions() {
      if (this.version == 1) return [];
      {
        const s = Math.floor(this.version / 7) + 2,
          i = this.version == 32 ? 26 : Math.ceil((this.version * 4 + 4) / (s * 2 - 2)) * 2;
        let n = [6];
        for (let r = this.size - 7; n.length < s; r -= i) n.splice(1, 0, r);
        return n;
      }
    }
    static getNumRawDataModules(s) {
      if (s < E.MIN_VERSION || s > E.MAX_VERSION) throw new RangeError("Version number out of range");
      let i = (16 * s + 128) * s + 64;
      if (s >= 2) {
        const n = Math.floor(s / 7) + 2;
        (i -= (25 * n - 10) * n - 55), s >= 7 && (i -= 36);
      }
      return x(208 <= i && i <= 29648), i;
    }
    static getNumDataCodewords(s, i) {
      return (
        Math.floor(E.getNumRawDataModules(s) / 8) -
        E.ECC_CODEWORDS_PER_BLOCK[i.ordinal][s] * E.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][s]
      );
    }
    static reedSolomonComputeDivisor(s) {
      if (s < 1 || s > 255) throw new RangeError("Degree out of range");
      let i = [];
      for (let r = 0; r < s - 1; r++) i.push(0);
      i.push(1);
      let n = 1;
      for (let r = 0; r < s; r++) {
        for (let l = 0; l < i.length; l++)
          (i[l] = E.reedSolomonMultiply(i[l], n)), l + 1 < i.length && (i[l] ^= i[l + 1]);
        n = E.reedSolomonMultiply(n, 2);
      }
      return i;
    }
    static reedSolomonComputeRemainder(s, i) {
      let n = i.map((r) => 0);
      for (const r of s) {
        const l = r ^ n.shift();
        n.push(0), i.forEach((f, c) => (n[c] ^= E.reedSolomonMultiply(f, l)));
      }
      return n;
    }
    static reedSolomonMultiply(s, i) {
      if (s >>> 8 || i >>> 8) throw new RangeError("Byte out of range");
      let n = 0;
      for (let r = 7; r >= 0; r--) (n = (n << 1) ^ ((n >>> 7) * 285)), (n ^= ((i >>> r) & 1) * s);
      return x(n >>> 8 == 0), n;
    }
    finderPenaltyCountPatterns(s) {
      const i = s[1];
      x(i <= this.size * 3);
      const n = i > 0 && s[2] == i && s[3] == i * 3 && s[4] == i && s[5] == i;
      return (n && s[0] >= i * 4 && s[6] >= i ? 1 : 0) + (n && s[6] >= i * 4 && s[0] >= i ? 1 : 0);
    }
    finderPenaltyTerminateAndCount(s, i, n) {
      return (
        s && (this.finderPenaltyAddHistory(i, n), (i = 0)),
        (i += this.size),
        this.finderPenaltyAddHistory(i, n),
        this.finderPenaltyCountPatterns(n)
      );
    }
    finderPenaltyAddHistory(s, i) {
      i[0] == 0 && (s += this.size), i.pop(), i.unshift(s);
    }
  };
  (o.MIN_VERSION = 1),
    (o.MAX_VERSION = 40),
    (o.PENALTY_N1 = 3),
    (o.PENALTY_N2 = 3),
    (o.PENALTY_N3 = 40),
    (o.PENALTY_N4 = 10),
    (o.ECC_CODEWORDS_PER_BLOCK = [
      [
        -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
      [
        -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28,
        28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
      ],
      [
        -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
      [
        -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30,
        30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      ],
    ]),
    (o.NUM_ERROR_CORRECTION_BLOCKS = [
      [
        -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18,
        19, 19, 20, 21, 22, 24, 25,
      ],
      [
        -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29,
        31, 33, 35, 37, 38, 40, 43, 45, 47, 49,
      ],
      [
        -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40,
        43, 45, 48, 51, 53, 56, 59, 62, 65, 68,
      ],
      [
        -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45,
        48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81,
      ],
    ]),
    (t.QrCode = o);
  function a(h, s, i) {
    if (s < 0 || s > 31 || h >>> s) throw new RangeError("Value out of range");
    for (let n = s - 1; n >= 0; n--) i.push((h >>> n) & 1);
  }
  function d(h, s) {
    return ((h >>> s) & 1) != 0;
  }
  function x(h) {
    if (!h) throw new Error("Assertion error");
  }
  const u = class R {
    constructor(s, i, n) {
      if (((this.mode = s), (this.numChars = i), (this.bitData = n), i < 0)) throw new RangeError("Invalid argument");
      this.bitData = n.slice();
    }
    static makeBytes(s) {
      let i = [];
      for (const n of s) a(n, 8, i);
      return new R(R.Mode.BYTE, s.length, i);
    }
    static makeNumeric(s) {
      if (!R.isNumeric(s)) throw new RangeError("String contains non-numeric characters");
      let i = [];
      for (let n = 0; n < s.length; ) {
        const r = Math.min(s.length - n, 3);
        a(parseInt(s.substring(n, n + r), 10), r * 3 + 1, i), (n += r);
      }
      return new R(R.Mode.NUMERIC, s.length, i);
    }
    static makeAlphanumeric(s) {
      if (!R.isAlphanumeric(s)) throw new RangeError("String contains unencodable characters in alphanumeric mode");
      let i = [],
        n;
      for (n = 0; n + 2 <= s.length; n += 2) {
        let r = R.ALPHANUMERIC_CHARSET.indexOf(s.charAt(n)) * 45;
        (r += R.ALPHANUMERIC_CHARSET.indexOf(s.charAt(n + 1))), a(r, 11, i);
      }
      return (
        n < s.length && a(R.ALPHANUMERIC_CHARSET.indexOf(s.charAt(n)), 6, i), new R(R.Mode.ALPHANUMERIC, s.length, i)
      );
    }
    static makeSegments(s) {
      return s == ""
        ? []
        : R.isNumeric(s)
          ? [R.makeNumeric(s)]
          : R.isAlphanumeric(s)
            ? [R.makeAlphanumeric(s)]
            : [R.makeBytes(R.toUtf8ByteArray(s))];
    }
    static makeEci(s) {
      let i = [];
      if (s < 0) throw new RangeError("ECI assignment value out of range");
      if (s < 128) a(s, 8, i);
      else if (s < 16384) a(2, 2, i), a(s, 14, i);
      else if (s < 1e6) a(6, 3, i), a(s, 21, i);
      else throw new RangeError("ECI assignment value out of range");
      return new R(R.Mode.ECI, 0, i);
    }
    static isNumeric(s) {
      return R.NUMERIC_REGEX.test(s);
    }
    static isAlphanumeric(s) {
      return R.ALPHANUMERIC_REGEX.test(s);
    }
    getData() {
      return this.bitData.slice();
    }
    static getTotalBits(s, i) {
      let n = 0;
      for (const r of s) {
        const l = r.mode.numCharCountBits(i);
        if (r.numChars >= 1 << l) return 1 / 0;
        n += 4 + l + r.bitData.length;
      }
      return n;
    }
    static toUtf8ByteArray(s) {
      s = encodeURI(s);
      let i = [];
      for (let n = 0; n < s.length; n++)
        s.charAt(n) != "%" ? i.push(s.charCodeAt(n)) : (i.push(parseInt(s.substring(n + 1, n + 3), 16)), (n += 2));
      return i;
    }
  };
  (u.NUMERIC_REGEX = /^[0-9]*$/),
    (u.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
    (u.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
  let p = u;
  t.QrSegment = u;
})(re || (re = {}));
((t) => {
  ((o) => {
    const a = class {
      constructor(x, u) {
        (this.ordinal = x), (this.formatBits = u);
      }
    };
    (a.LOW = new a(0, 1)), (a.MEDIUM = new a(1, 0)), (a.QUARTILE = new a(2, 3)), (a.HIGH = new a(3, 2)), (o.Ecc = a);
  })(t.QrCode || (t.QrCode = {}));
})(re || (re = {}));
((t) => {
  ((o) => {
    const a = class {
      constructor(x, u) {
        (this.modeBits = x), (this.numBitsCharCount = u);
      }
      numCharCountBits(x) {
        return this.numBitsCharCount[Math.floor((x + 7) / 17)];
      }
    };
    (a.NUMERIC = new a(1, [10, 12, 14])),
      (a.ALPHANUMERIC = new a(2, [9, 11, 13])),
      (a.BYTE = new a(4, [8, 16, 16])),
      (a.KANJI = new a(8, [8, 10, 12])),
      (a.ECI = new a(7, [0, 0, 0])),
      (o.Mode = a);
  })(t.QrSegment || (t.QrSegment = {}));
})(re || (re = {}));
var he = re;
/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */ var Is = { L: he.QrCode.Ecc.LOW, M: he.QrCode.Ecc.MEDIUM, Q: he.QrCode.Ecc.QUARTILE, H: he.QrCode.Ecc.HIGH },
  Ht = 128,
  $t = "L",
  Qt = "#FFFFFF",
  Gt = "#000000",
  Kt = !1,
  Yt = 1,
  Ls = 4,
  Ts = 0,
  Ds = 0.1;
function qt(t, o = 0) {
  const a = [];
  return (
    t.forEach(function (d, x) {
      let u = null;
      d.forEach(function (p, h) {
        if (!p && u !== null) {
          a.push(`M${u + o} ${x + o}h${h - u}v1H${u + o}z`), (u = null);
          return;
        }
        if (h === d.length - 1) {
          if (!p) return;
          u === null
            ? a.push(`M${h + o},${x + o} h1v1H${h + o}z`)
            : a.push(`M${u + o},${x + o} h${h + 1 - u}v1H${u + o}z`);
          return;
        }
        p && u === null && (u = h);
      });
    }),
    a.join("")
  );
}
function Xt(t, o) {
  return t
    .slice()
    .map((a, d) => (d < o.y || d >= o.y + o.h ? a : a.map((x, u) => (u < o.x || u >= o.x + o.w ? x : !1))));
}
function Os(t, o, a, d) {
  if (d == null) return null;
  const x = t.length + a * 2,
    u = Math.floor(o * Ds),
    p = x / o,
    h = (d.width || u) * p,
    s = (d.height || u) * p,
    i = d.x == null ? t.length / 2 - h / 2 : d.x * p,
    n = d.y == null ? t.length / 2 - s / 2 : d.y * p,
    r = d.opacity == null ? 1 : d.opacity;
  let l = null;
  if (d.excavate) {
    let c = Math.floor(i),
      m = Math.floor(n),
      v = Math.ceil(h + i - c),
      j = Math.ceil(s + n - m);
    l = { x: c, y: m, w: v, h: j };
  }
  const f = d.crossOrigin;
  return { x: i, y: n, h: s, w: h, excavation: l, opacity: r, crossOrigin: f };
}
function Ns(t, o) {
  return o != null ? Math.max(Math.floor(o), 0) : t ? Ls : Ts;
}
function Zt({
  value: t,
  level: o,
  minVersion: a,
  includeMargin: d,
  marginSize: x,
  imageSettings: u,
  size: p,
  boostLevel: h,
}) {
  let s = I.useMemo(() => {
    const c = (Array.isArray(t) ? t : [t]).reduce((m, v) => (m.push(...he.QrSegment.makeSegments(v)), m), []);
    return he.QrCode.encodeSegments(c, Is[o], a, void 0, void 0, h);
  }, [t, o, a, h]);
  const {
    cells: i,
    margin: n,
    numCells: r,
    calculatedImageSettings: l,
  } = I.useMemo(() => {
    let f = s.getModules();
    const c = Ns(d, x),
      m = f.length + c * 2,
      v = Os(f, p, c, u);
    return { cells: f, margin: c, numCells: m, calculatedImageSettings: v };
  }, [s, p, u, d, x]);
  return { qrcode: s, margin: n, cells: i, numCells: r, calculatedImageSettings: l };
}
var zs = (function () {
    try {
      new Path2D().addPath(new Path2D());
    } catch {
      return !1;
    }
    return !0;
  })(),
  Fs = I.forwardRef(function (o, a) {
    const d = o,
      {
        value: x,
        size: u = Ht,
        level: p = $t,
        bgColor: h = Qt,
        fgColor: s = Gt,
        includeMargin: i = Kt,
        minVersion: n = Yt,
        boostLevel: r,
        marginSize: l,
        imageSettings: f,
      } = d,
      m = qe(d, [
        "value",
        "size",
        "level",
        "bgColor",
        "fgColor",
        "includeMargin",
        "minVersion",
        "boostLevel",
        "marginSize",
        "imageSettings",
      ]),
      { style: v } = m,
      j = qe(m, ["style"]),
      w = f == null ? void 0 : f.src,
      b = I.useRef(null),
      y = I.useRef(null),
      S = I.useCallback(
        ($) => {
          (b.current = $), typeof a == "function" ? a($) : a && (a.current = $);
        },
        [a],
      ),
      [k, D] = I.useState(!1),
      {
        margin: T,
        cells: H,
        numCells: Q,
        calculatedImageSettings: P,
      } = Zt({
        value: x,
        level: p,
        minVersion: n,
        boostLevel: r,
        includeMargin: i,
        marginSize: l,
        imageSettings: f,
        size: u,
      });
    I.useEffect(() => {
      if (b.current != null) {
        const $ = b.current,
          B = $.getContext("2d");
        if (!B) return;
        let Ee = H;
        const C = y.current,
          U = P != null && C !== null && C.complete && C.naturalHeight !== 0 && C.naturalWidth !== 0;
        U && P.excavation != null && (Ee = Xt(H, P.excavation));
        const W = window.devicePixelRatio || 1;
        $.height = $.width = u * W;
        const ke = (u / Q) * W;
        B.scale(ke, ke),
          (B.fillStyle = h),
          B.fillRect(0, 0, Q, Q),
          (B.fillStyle = s),
          zs
            ? B.fill(new Path2D(qt(Ee, T)))
            : H.forEach(function (Fe, We) {
                Fe.forEach(function (Jt, en) {
                  Jt && B.fillRect(en + T, We + T, 1, 1);
                });
              }),
          P && (B.globalAlpha = P.opacity),
          U && B.drawImage(C, P.x + T, P.y + T, P.w, P.h);
      }
    }),
      I.useEffect(() => {
        D(!1);
      }, [w]);
    const oe = Ye({ height: u, width: u }, v);
    let le = null;
    return (
      w != null &&
        (le = I.createElement("img", {
          src: w,
          key: w,
          style: { display: "none" },
          onLoad: () => {
            D(!0);
          },
          ref: y,
          crossOrigin: P == null ? void 0 : P.crossOrigin,
        })),
      I.createElement(
        I.Fragment,
        null,
        I.createElement("canvas", Ye({ style: oe, height: u, width: u, ref: S, role: "img" }, j)),
        le,
      )
    );
  });
Fs.displayName = "QRCodeCanvas";
var ot = I.forwardRef(function (o, a) {
  const d = o,
    {
      value: x,
      size: u = Ht,
      level: p = $t,
      bgColor: h = Qt,
      fgColor: s = Gt,
      includeMargin: i = Kt,
      minVersion: n = Yt,
      boostLevel: r,
      title: l,
      marginSize: f,
      imageSettings: c,
    } = d,
    m = qe(d, [
      "value",
      "size",
      "level",
      "bgColor",
      "fgColor",
      "includeMargin",
      "minVersion",
      "boostLevel",
      "title",
      "marginSize",
      "imageSettings",
    ]),
    {
      margin: v,
      cells: j,
      numCells: w,
      calculatedImageSettings: b,
    } = Zt({
      value: x,
      level: p,
      minVersion: n,
      boostLevel: r,
      includeMargin: i,
      marginSize: f,
      imageSettings: c,
      size: u,
    });
  let y = j,
    S = null;
  c != null &&
    b != null &&
    (b.excavation != null && (y = Xt(j, b.excavation)),
    (S = I.createElement("image", {
      href: c.src,
      height: b.h,
      width: b.w,
      x: b.x + v,
      y: b.y + v,
      preserveAspectRatio: "none",
      opacity: b.opacity,
      crossOrigin: b.crossOrigin,
    })));
  const k = qt(y, v);
  return I.createElement(
    "svg",
    Ye({ height: u, width: u, viewBox: `0 0 ${w} ${w}`, ref: a, role: "img" }, m),
    !!l && I.createElement("title", null, l),
    I.createElement("path", { fill: h, d: `M0,0 h${w}v${w}H0z`, shapeRendering: "crispEdges" }),
    I.createElement("path", { fill: s, d: k, shapeRendering: "crispEdges" }),
    S,
  );
});
ot.displayName = "QRCodeSVG";
const Ws = () => {
    const t = Y((u) => u.siteConfig.basic.config.title),
      { t: o } = M(),
      [a, d] = g.useState(!1);
    Z();
    const x = g.useMemo(() => {
      var u, p;
      return (
        window.location.origin +
        "/login?refresh_token=" +
        (((p = (u = z.currentLoginOrNull()) == null ? void 0 : u.token) == null ? void 0 : p.refresh_token) ?? "")
      );
    }, [a]);
    return e.jsxs(pe, {
      container: !0,
      sx: { px: 2, pt: 4, pb: 4 },
      children: [
        e.jsx(pe, {
          item: !0,
          container: !0,
          alignItems: "center",
          xs: 12,
          md: 7,
          children: e.jsxs(A, {
            children: [
              e.jsx(A, {
                marginBottom: 2,
                children: e.jsx(_, {
                  variant: "h4",
                  sx: { fontWeight: 700 },
                  color: "text.primary",
                  children: e.jsx(Re, {
                    i18nKey: "setting.connectByiOS",
                    values: { title: t },
                    components: [
                      e.jsx(
                        _,
                        {
                          color: "primary",
                          component: "span",
                          variant: "inherit",
                          sx: {
                            background: (u) =>
                              `linear-gradient(180deg, transparent 82%, ${Dn(u.palette.secondary.main, 0.3)} 0%)`,
                          },
                        },
                        0,
                      ),
                    ],
                  }),
                }),
              }),
              e.jsx(A, {
                color: "text.secondary",
                sx: {
                  ol: { paddingInlineStart: "24px" },
                  "li::marker": { fontSize: "1.25rem" },
                  li: { marginBottom: 2 },
                },
                children: e.jsxs("ol", {
                  children: [
                    e.jsxs("li", {
                      children: [
                        e.jsx(_, { variant: "h6", component: "p", children: o("setting.downloadOurApp") }),
                        e.jsx(A, {
                          marginTop: 1,
                          children: e.jsx(A, {
                            component: "a",
                            href: "https://apps.apple.com/us/app/cloudreve/id1619480823",
                            target: "_blank",
                            children: e.jsx(A, { component: "img", src: "/static/img/appstore.svg" }),
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      children: [
                        e.jsx(_, { variant: "h6", component: "p", children: o("setting.fillInEndpoint") }),
                        e.jsxs(A, {
                          marginTop: 1,
                          sx: { position: "relative", display: "inline-block" },
                          children: [
                            e.jsx(ot, {
                              marginSize: 4,
                              size: 200,
                              onClick: () => d(!1),
                              style: {
                                transition: "all .3s ease-in",
                                filter: a ? "initial" : "blur(8px)",
                                backgroundColor: "#fff",
                              },
                              value: x,
                            }),
                            !a &&
                              e.jsx(Te, {
                                onClick: () => d(!0),
                                sx: {
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  transform: "translate(-50%, -50%)",
                                },
                                color: "inherit",
                                variant: "outlined",
                                children: o("setting.shoeQr"),
                              }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("li", {
                      children: e.jsx(_, { variant: "h6", component: "p", children: o("setting.loginApp") }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        e.jsx(pe, {
          item: !0,
          xs: 12,
          md: 5,
          children: e.jsx(A, {
            sx: { transform: "scale(1.5) translateY(15%)" },
            children: e.jsx(A, {
              sx: { marginX: "auto" },
              children: e.jsx(A, {
                children: e.jsx(A, {
                  children: e.jsx(A, {
                    component: "img",
                    src: "https://cloudreve.org/imgs/ios/766shots_so.png",
                    alt: "Image Description",
                    effect: "blur",
                    width: 1,
                    height: 1,
                    sx: { objectFit: "cover" },
                  }),
                }),
              }),
            }),
          }),
        }),
      ],
    });
  },
  Ci = () => {
    const { t } = M(),
      o = L(),
      [a, d] = tn(),
      [x, u] = g.useState(!1),
      p = Y((r) => {
        var l;
        return (l = r.siteConfig.app.config) == null ? void 0 : l.app_promotion;
      }),
      h = g.useMemo(() => {
        var f;
        const r = z.currentLoginOrNull();
        let l = !1;
        return (
          r && (f = r.user.group) != null && f.permission && (l = new Le(r.user.group.permission).enabled(Lt.webdav)), l
        );
      }, []),
      s = g.useMemo(() => {
        const r = [];
        return (
          h && r.push({ label: t("application:setting.webdavAccounts"), value: "dav" }),
          p && r.push({ label: t("application:setting.iOSApp"), value: "app" }),
          r
        );
      }, [h, p]),
      [i, n] = g.useState(a.get(bt) ?? (h ? "dav" : "app"));
    return (
      g.useEffect(() => {
        o(Tt("app"));
      }, []),
      e.jsx(ge, {
        children: e.jsxs(xe, {
          maxWidth: "lg",
          children: [
            e.jsx(ne, {
              secondaryAction: e.jsx(On, {
                in: i == "dav",
                children: e.jsx(Nn, {
                  variant: "contained",
                  startIcon: e.jsx(zn, {}),
                  onClick: () => u(!0),
                  children: t("setting.createNewAccount"),
                }),
              }),
              title: t("application:navbar.connect"),
            }),
            e.jsx(wt, { value: i, onChange: (r, l) => n(l), tabs: s }),
            i == "dav" && h && e.jsx(Rs, { creatAccountDialog: x, setCreateAccountDialog: u }),
            i == "app" && p && e.jsx(Ws, {}),
            !h && !p && e.jsx(se, { primary: t("setting.deviceNothing") }),
          ],
        }),
      })
    );
  };
function Bs(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M20.952 3.048a3.578 3.578 0 0 0-5.06 0L3.94 15a3.106 3.106 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.106 3.106 0 0 0 1.477-.825l1.151-1.151a6.52 6.52 0 0 1-.127-1.995L7.941 19c-.21.21-.474.358-.763.427l-3.416.814l.813-3.416c.069-.29.217-.554.427-.764L15 6.06L17.94 9l-2.026 2.026a6.57 6.57 0 0 1 1.994.127l3.044-3.044a3.578 3.578 0 0 0 0-5.06m-4 1.06a2.078 2.078 0 1 1 2.94 2.94l-.892.89L16.06 5zm-3.675 9.868a2 2 0 0 1-1.441 2.496l-.584.145a5.729 5.729 0 0 0 .006 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.485.922l.493-.519a2 2 0 0 1 2.899 0l.499.526a5.282 5.282 0 0 0 1.482-.913l-.198-.686a2 2 0 0 1 1.442-2.496l.583-.145a5.729 5.729 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.449-2.51l.186-.631a5.278 5.278 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525c-.544.22-1.044.53-1.483.913zM16.5 19c-.8 0-1.45-.671-1.45-1.5c0-.828.65-1.5 1.45-1.5c.8 0 1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5",
    }),
  });
}
function Us(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v4.56a6.518 6.518 0 0 0-1.5-1.078V7.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 7.25v9.5c0 .966.784 1.75 1.75 1.75h6.063c.173.534.412 1.037.709 1.5H5.25A3.25 3.25 0 0 1 2 16.75zm10 9.25a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0m8.5-3.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.496 2.496 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.496 3.496 0 0 1 17.5 13c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 .5-.5M15 18.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1c.766 0 1.452-.344 1.911-.888a.5.5 0 0 1 .764.645A3.493 3.493 0 0 1 17.5 20a3.49 3.49 0 0 1-2.5-1.05",
    }),
  });
}
function Vs(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.25 1.25A3.247 3.247 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h6.772a6.471 6.471 0 0 1-.709-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.727.443-1.35 1.074-1.615l8.145 8.145a5.5 5.5 0 0 0 7.502 7.502l.498.498a.75.75 0 0 0 1.061-1.06zm15.44 17.56c-.38.142-.79.219-1.22.219a3.49 3.49 0 0 1-2.5-1.05v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h1.44l.882.883A.498.498 0 0 1 16.5 18h-1a2.496 2.496 0 0 0 2.406.967zm-3.863-8.106l1.512 1.512A3.494 3.494 0 0 1 17.5 13c.98 0 1.865.403 2.5 1.05v-.55a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-1.318l3.143 3.143a5.5 5.5 0 0 0-7.467-7.468m3.392 3.392l-1.05-1.05a2.496 2.496 0 0 1 2.3.982h-.999a.498.498 0 0 0-.25.068M7.182 4l1.5 1.5H18.75c.966 0 1.75.784 1.75 1.75v3.482A6.518 6.518 0 0 1 22 11.81V7.25A3.25 3.25 0 0 0 18.75 4z",
    }),
  });
}
const Hs = Ce(A)(({ theme: t }) => ({
    borderRadius: t.shape.borderRadius,
    padding: t.spacing(1),
    border: `1px solid ${t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
  })),
  $s = ({ setting: t, setSetting: o }) => {
    const { t: a } = M(),
      d = Z(),
      x = L(),
      u = Ae(d.breakpoints.down("md")),
      { themes: p } = Y((C) => C.siteConfig.basic.config),
      [h, s] = g.useState(Fn),
      i = g.useRef(null),
      [n, r] = g.useState(!1),
      l = Y((C) => C.globalState.preferredTheme),
      f = Y((C) => C.siteConfig.basic.config.default_theme),
      [c, m] = g.useState(t.version_retention_enabled),
      [v, j] = g.useState(t.version_retention_max),
      [w, b] = g.useState(t.version_retention_ext),
      [y, S] = g.useState(!1),
      [k, D] = g.useState(z.getWithFallback(Be.TreeViewAutoExpand)),
      T = (C) => {
        m(C.target.checked), S(!0);
      },
      H = (C) => {
        j(parseInt(C.target.value) ?? 0), S(!0);
      },
      Q = (C, U) => {
        b(U.map((W) => W.replace(/^\./, ""))), S(!0);
      };
    g.useEffect(() => {
      m(t.version_retention_enabled), j(t.version_retention_max), b(t.version_retention_ext);
    }, [t]);
    const P = (C) => {
        s(C), z.set(Be.TimeZone, C), Gn();
      },
      oe = g.useMemo(() => (p ? JSON.parse(p) : {}), [p]),
      le = (C) => {
        x(Kn(C)), x(q({ preferred_theme: C }));
      },
      $ = () => {
        r(!0),
          x(q({ version_retention_enabled: c, version_retention_max: v, version_retention_ext: w }))
            .then(() => {
              S(!1), o({ ...t, version_retention_enabled: c, version_retention_max: v, version_retention_ext: w });
            })
            .finally(() => {
              r(!1);
            });
      },
      B = (C, U) => {
        o({ ...t, disable_view_sync: !U }),
          r(!0),
          x(q({ disable_view_sync: !U }))
            .then(() => {
              const W = z.currentLoginOrNull();
              W != null && W.user && z.updateUserIfExist({ ...(W == null ? void 0 : W.user), disable_view_sync: !U }),
                Yn(),
                r(!1);
            })
            .finally(() => {
              r(!1);
            });
      },
      Ee = (C) => {
        D(C.target.checked), z.set(Be.TreeViewAutoExpand, C.target.checked);
      };
    return e.jsxs(V, {
      spacing: 3,
      children: [
        e.jsx(O, {
          title: a("setting.language"),
          lgWidth: 3,
          children: e.jsxs(ae, {
            fullWidth: !0,
            children: [
              e.jsx(Ie, {
                value: Wn.language,
                onChange: (C) => x(Bn(C.target.value)),
                children: Un.map((C) =>
                  e.jsx(F, {
                    value: C.code,
                    children: e.jsx(N, { slotProps: { primary: { variant: "body2" } }, children: C.displayName }),
                  }),
                ),
              }),
              e.jsx(Pe, { children: a("setting.languageDes") }),
            ],
          }),
        }),
        e.jsx(O, {
          title: a("setting.timeZone"),
          lgWidth: 4,
          children: e.jsxs(ae, {
            fullWidth: !0,
            children: [
              e.jsx(Ie, {
                value: h,
                onChange: (C) => P(C.target.value),
                children: Intl.supportedValuesOf("timeZone").map((C) =>
                  e.jsx(F, {
                    value: C,
                    children: e.jsx(N, { slotProps: { primary: { variant: "body2" } }, children: C }),
                  }),
                ),
              }),
              e.jsx(Pe, { children: a("setting.timezoneDes") }),
            ],
          }),
        }),
        e.jsx(O, { title: a("setting.darkMode"), lgWidth: 12, children: e.jsx(vs, {}) }),
        e.jsx(O, {
          title: a("setting.themeColor"),
          lgWidth: 12,
          children: e.jsx(Vn, {
            sx: { gap: 1 },
            children: Object.keys(oe).map((C, U) =>
              e.jsx(Hn, { size: 30, color: C, onClick: () => le(C), selected: (l && l == C) || (!l && f == C) }),
            ),
          }),
        }),
        e.jsx(O, {
          title: a("setting.versionRetention"),
          children: e.jsxs(Hs, {
            sx: { py: 0.5 },
            children: [
              e.jsxs(A, {
                sx: {
                  pl: 1,
                  display: "flex",
                  flexDirection: u ? "column" : "row",
                  alignItems: u ? "flex-start" : "center",
                },
                children: [
                  e.jsx(me, {
                    control: e.jsx(je, { size: "small", checked: c, onChange: T }),
                    label: a("application:setting.enableVersionRetention"),
                  }),
                  e.jsx(_, {
                    variant: "caption",
                    color: "text.secondary",
                    children: a("application:setting.enableVersionRetentionDes"),
                  }),
                ],
              }),
              e.jsxs(V, {
                spacing: 1,
                sx: { mb: c || y ? 0.5 : 0 },
                children: [
                  e.jsx(be, {
                    in: c,
                    unmountOnExit: !0,
                    children: e.jsxs(V, {
                      sx: { mt: 1 },
                      spacing: 1,
                      children: [
                        e.jsx($n, {
                          multiple: !0,
                          options: [],
                          value: w ?? [],
                          autoSelect: !0,
                          freeSolo: !0,
                          onChange: Q,
                          renderTags: (C, U) =>
                            C.map((W, ke) => {
                              const { key: Fe, ...We } = U({ index: ke });
                              return e.jsx(At, { variant: "outlined", label: W, size: "small", ...We }, Fe);
                            }),
                          renderInput: (C) =>
                            e.jsx(te, {
                              label: a("setting.versionRetentionEnabledExt"),
                              ...C,
                              sx: {
                                "& .MuiInputBase-root": {},
                                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                                  paddingTop: d.spacing(0.6),
                                  paddingBottom: d.spacing(0.6),
                                },
                                mt: 0,
                              },
                              helperText: a("application:setting.versionRetentionEnabledExtDes"),
                              margin: "dense",
                              type: "text",
                              fullWidth: !0,
                            }),
                        }),
                        e.jsx(A, {
                          children: e.jsx(te, {
                            onChange: H,
                            value: v,
                            required: !0,
                            inputProps: { type: "number", step: 1, min: 0 },
                            helperText: a("setting.versionRetentionMax"),
                            inputRef: i,
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsx(be, {
                    in: y,
                    unmountOnExit: !0,
                    children: e.jsx(it, {
                      variant: "contained",
                      loading: n,
                      onClick: $,
                      children: e.jsx("span", { children: a("fileManager.save") }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsxs(O, {
          title: a("setting.syncView"),
          lgWidth: 12,
          children: [
            e.jsxs(Qn, {
              color: "primary",
              value: !t.disable_view_sync,
              exclusive: !0,
              disabled: n,
              onChange: B,
              size: "small",
              "aria-label": "Platform",
              children: [
                e.jsxs(ut, {
                  value: !0,
                  children: [e.jsx(Us, { fontSize: "small", sx: { mr: 1 } }), a("setting.syncViewOn")],
                }),
                e.jsxs(ut, {
                  value: !1,
                  children: [e.jsx(Vs, { fontSize: "small", sx: { mr: 1 } }), a("setting.syncViewOff")],
                }),
              ],
            }),
            e.jsx(Pe, { children: a("setting.syncViewDes") }),
          ],
        }),
        e.jsxs(O, {
          title: a("setting.treeView"),
          lgWidth: 12,
          children: [
            e.jsx(me, {
              control: e.jsx(je, { size: "small", checked: k, onChange: Ee }),
              label: a("application:setting.autoExpandTreeView"),
            }),
            e.jsx(Pe, { children: a("setting.autoExpandTreeViewDes") }),
          ],
        }),
      ],
    });
  };
function Qs(t, o, a) {
  g.useEffect(() => {
    const d = setTimeout(() => {
      t.apply(void 0, a);
    }, o);
    return () => {
      clearTimeout(d);
    };
  }, a);
}
const Gs = Math.PI / 180;
async function Ks(t, o, a, d = 1, x = 0) {
  const u = o.getContext("2d");
  if (!u) throw new Error("No 2d context");
  const p = t.naturalWidth / t.width,
    h = t.naturalHeight / t.height,
    s = window.devicePixelRatio;
  (o.width = Math.floor(a.width * p * s)),
    (o.height = Math.floor(a.height * h * s)),
    u.scale(s, s),
    (u.imageSmoothingQuality = "high");
  const i = a.x * p,
    n = a.y * h,
    r = x * Gs,
    l = t.naturalWidth / 2,
    f = t.naturalHeight / 2;
  u.save(),
    u.translate(-i, -n),
    u.translate(l, f),
    u.rotate(r),
    u.scale(d, d),
    u.translate(-l, -f),
    u.drawImage(t, 0, 0, t.naturalWidth, t.naturalHeight, 0, 0, t.naturalWidth, t.naturalHeight),
    u.restore();
}
function Ys(t, o, a) {
  return sn(an({ unit: "px", width: t * 0.9 }, a, t, o), t, o);
}
const qs = ({ open: t, onClose: o, onAvatarUpdated: a, file: d }) => {
    const { t: x } = M(),
      { enqueueSnackbar: u } = J(),
      p = L(),
      [h, s] = g.useState(null),
      [i, n] = g.useState(void 0),
      [r, l] = g.useState(),
      f = g.useRef(null),
      c = g.useRef(null);
    g.useRef("");
    const [m, v] = g.useState(!1);
    g.useEffect(() => {
      if (t && (n(void 0), s(null), d)) {
        const y = new FileReader();
        y.addEventListener("load", () => s(y.result)), y.readAsDataURL(d);
      }
    }, [t]);
    const j = (y) => {
        const { width: S, height: k } = y.currentTarget;
        n(Ys(S, k, 1));
      },
      w = async () => {
        const y = f.current,
          S = c.current;
        if (!y || !S || !r) throw new Error("Crop canvas does not exist");
        const k = y.naturalWidth / y.width,
          D = y.naturalHeight / y.height,
          T = new OffscreenCanvas(r.width * k, r.height * D),
          H = T.getContext("2d");
        if (!H) throw new Error("No 2d context");
        return (
          H.drawImage(S, 0, 0, S.width, S.height, 0, 0, T.width, T.height), await T.convertToBlob({ type: "image/png" })
        );
      },
      b = () => {
        v(!0),
          w()
            .then((y) => {
              p(Dt(y, "image/png"))
                .then(() => {
                  u({ message: x("application:setting.avatarUpdated", {}), variant: "success", action: ie }), a(), o();
                })
                .finally(() => {
                  v(!1);
                });
            })
            .catch((y) => {
              u({ message: y.message, variant: "error", action: ie }), v(!1);
            });
      };
    return (
      Qs(
        async () => {
          r != null &&
            r.width &&
            r != null &&
            r.height &&
            f.current &&
            c.current &&
            (console.log(r), Ks(f.current, c.current, r, 1, 0));
        },
        100,
        [r],
      ),
      e.jsx(we, {
        title: x("application:setting.cropAvatar", {}),
        showCancel: !0,
        showActions: !0,
        loading: m || !h,
        disabled: !r,
        onAccept: b,
        dialogProps: { open: !!t, onClose: o, fullWidth: !0, maxWidth: "xs" },
        children: e.jsxs(Se, {
          children: [
            h &&
              e.jsx(nn, {
                circularCrop: !0,
                crop: i,
                onChange: (y, S) => n(S),
                minWidth: 100,
                aspect: 1,
                onComplete: (y) => l(y),
                minHeight: 100,
                children: e.jsx("img", {
                  ref: f,
                  onLoad: j,
                  src: h,
                  alt: "Avatar",
                  style: { maxWidth: "100%", maxHeight: "60vh" },
                }),
              }),
            !!r &&
              e.jsx("canvas", {
                ref: c,
                style: {
                  display: "none",
                  border: "1px solid black",
                  objectFit: "contain",
                  width: r.width,
                  height: r.height,
                },
              }),
          ],
        }),
      })
    );
  },
  Xs = ({ user: t }) => {
    const { t: o } = M(),
      a = L(),
      { enqueueSnackbar: d } = J(),
      x = Ne({ popupId: "avatarEdit", variant: "popover" }),
      u = I.createRef(),
      { onClose: p } = _e(x),
      [h, s] = g.useState(!1),
      [i, n] = g.useState(void 0),
      [r, l] = g.useState(1),
      f = () => {
        var j;
        p(), (j = u.current) == null || j.click();
      },
      c = () => {
        var w, b;
        const j = (b = (w = u.current) == null ? void 0 : w.files) == null ? void 0 : b[0];
        j && ((u.current.value = ""), n(j), s(!0));
      },
      m = () => {
        l((j) => j + 1);
      },
      v = () => {
        a(Dt()).then(() => {
          d({ message: o("application:setting.avatarUpdated", {}), variant: "success", action: ie }), m();
        }),
          p();
      };
    return e.jsxs(O, {
      title: o("setting.avatar"),
      lgWidth: 6,
      children: [
        e.jsx(qn, {
          square: !0,
          cacheKey: r.toString(),
          user: t,
          sx: { width: 200, height: 200 },
          overwriteTextSize: !0,
        }),
        e.jsx(Te, {
          sx: { mt: 1 },
          variant: "contained",
          startIcon: e.jsx(Ot, {}),
          ...ze(x),
          children: o("fileManager.edit"),
        }),
        e.jsx(qs, { onAvatarUpdated: m, file: i, onClose: () => s(!1), open: h }),
        e.jsx("input", { onChange: c, type: "file", accept: "image/*", style: { display: "none" }, ref: u }),
        e.jsxs(nt, {
          slotProps: { paper: { sx: { minWidth: 150 } } },
          ..._e(x),
          children: [
            e.jsxs(F, {
              onClick: f,
              dense: !0,
              children: [
                e.jsx(ee, { children: e.jsx(Xn, { fontSize: "small" }) }),
                e.jsx(N, { children: o("setting.uploadImage") }),
              ],
            }),
            e.jsxs(F, {
              dense: !0,
              onClick: v,
              children: [
                e.jsx(ee, { children: e.jsx(Ke, { fontSize: "small" }) }),
                e.jsx(N, { children: o("setting.useGravatar") }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function Zs(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M2.22 2.22a.75.75 0 0 0-.073.976l.073.084l4.034 4.035a9.986 9.986 0 0 0-3.955 5.75a.75.75 0 0 0 1.455.364a8.49 8.49 0 0 1 3.58-5.034l1.81 1.81A4 4 0 0 0 14.8 15.86l5.919 5.92a.75.75 0 0 0 1.133-.977l-.073-.084l-6.113-6.114l.001-.002l-1.2-1.198l-2.87-2.87h.002l-2.88-2.877l.001-.002l-1.133-1.13L3.28 2.22a.75.75 0 0 0-1.06 0m7.984 9.045l3.535 3.536a2.5 2.5 0 0 1-3.535-3.535M12 5.5c-1 0-1.97.148-2.889.425l1.237 1.236a8.503 8.503 0 0 1 9.899 6.272a.75.75 0 0 0 1.455-.363A10.003 10.003 0 0 0 12 5.5m.195 3.51l3.801 3.8a4.003 4.003 0 0 0-3.801-3.8",
    }),
  });
}
const Xe = [
    {
      value: K.public_share_only,
      label: "application:setting.publicShareOnly",
      description: "application:setting.publicShareOnlyDes",
      icon: tt,
    },
    {
      value: K.all_share,
      label: "application:setting.allShare",
      description: "application:setting.allShareDes",
      icon: ln,
    },
    {
      value: K.hide_share,
      label: "application:setting.hideShare",
      description: "application:setting.hideShareDes",
      icon: Zs,
    },
  ],
  Js = (t) => {
    const { t: o } = M();
    return g.useMemo(() => {
      const d = Xe.find((x) => x.value === (t ?? ""));
      return o(d ? d.label : "application:setting.publicShareOnly");
    }, [t, o]);
  },
  ei = ({ currentValue: t, onValueChange: o, readOnly: a, ...d }) => {
    const { t: x } = M(),
      u = (p) => () => {
        o && !a && o(p);
      };
    return e.jsx(Zn, {
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
      transformOrigin: { vertical: "top", horizontal: "left" },
      ...d,
      children: e.jsxs(Nt, {
        dense: !0,
        sx: { maxWidth: 360 },
        disablePadding: !0,
        children: [
          Xe.map((p, h) =>
            e.jsxs(e.Fragment, {
              children: [
                e.jsx(
                  zt,
                  {
                    disablePadding: !0,
                    children: e.jsxs(Jn, {
                      selected: t === p.value,
                      disabled: a,
                      onClick: u(p.value),
                      sx: { borderRadius: "0px" },
                      role: void 0,
                      dense: !0,
                      children: [
                        p.icon &&
                          e.jsx(ee, {
                            sx: { minWidth: "32px", margin: "0px 8px" },
                            children: e.jsx(p.icon, {
                              sx: { color: (s) => (t === p.value ? s.palette.primary.main : "inherit") },
                            }),
                          }),
                        e.jsx(N, {
                          primary: x(p.label),
                          secondary: x(p.description),
                          slotProps: { secondary: { variant: "body2", sx: { wordWrap: "break-word" } } },
                        }),
                      ],
                    }),
                  },
                  p.value,
                ),
                h < Xe.length - 1 && e.jsx(ht, {}),
              ],
            }),
          ),
          e.jsx(ht, {}),
        ],
      }),
    });
  },
  ti = Ce(es)(({ theme: t }) => ({
    color: t.palette.text.secondary,
    minWidth: 0,
    minHeight: 0,
    fontSize: t.typography.body2.fontSize,
    fontWeight: t.typography.body2.fontWeight,
    borderRadius: "4px",
    padding: "0px 4px",
    position: "relative",
    left: "-4px",
  })),
  ni = ({ setting: t, setSetting: o }) => {
    var w;
    const { t: a } = M(),
      d = Z(),
      x = L(),
      u = Ae(d.breakpoints.down("md")),
      p = g.useRef(null),
      h = z.currentLoginOrNull(),
      [s, i] = g.useState(h == null ? void 0 : h.user.nickname),
      [n, r] = g.useState(!1),
      [l, f] = g.useState(!1),
      c = Ne({ variant: "popover", popupId: "profileSetting" }),
      m = Js(t.share_links_in_profile),
      v = () => {
        var b;
        p.current && p.current.checkValidity()
          ? (r(!0),
            x(q({ nick: s }))
              .then(() => {
                h != null && h.user && z.updateUserIfExist({ ...(h == null ? void 0 : h.user), nickname: s ?? "" });
              })
              .finally(() => {
                r(!1);
              }))
          : (b = p.current) == null || b.reportValidity();
      },
      j = (b) => {
        f(!0),
          x(q({ share_links_in_profile: b }))
            .then(() => {
              o({ ...t, share_links_in_profile: b }), c.close();
            })
            .finally(() => {
              f(!1);
            });
      };
    return e.jsx(V, {
      spacing: 3,
      children: e.jsxs(fe, {
        container: !0,
        spacing: u ? 3 : 4,
        direction: u ? "column" : "row-reverse",
        sx: { width: "100%" },
        children: [
          e.jsx(fe, {
            spacing: 3,
            sx: { flexGrow: 1, width: "100%" },
            size: { md: 6, xs: 12 },
            children: h && e.jsx(Xs, { user: h == null ? void 0 : h.user }),
          }),
          e.jsx(fe, {
            spacing: 3,
            sx: { flexGrow: 1, width: "100%" },
            size: { md: 6, xs: 12 },
            children: e.jsxs(V, {
              spacing: 3,
              children: [
                e.jsx(O, {
                  title: a("login.email"),
                  noContainer: !0,
                  lgWidth: 12,
                  children: e.jsx(te, { disabled: !0, fullWidth: !0, value: h == null ? void 0 : h.user.email }),
                }),
                e.jsxs(O, {
                  title: a("setting.nickname"),
                  noContainer: !0,
                  lgWidth: 12,
                  children: [
                    e.jsx(te, {
                      fullWidth: !0,
                      onChange: (b) => i(b.target.value),
                      value: s,
                      required: !0,
                      inputProps: { maxLength: 255 },
                      helperText: a("setting.nickNameDes"),
                      inputRef: p,
                    }),
                    e.jsx(be, {
                      in: s != (h == null ? void 0 : h.user.nickname),
                      children: e.jsx(it, {
                        variant: "contained",
                        onClick: v,
                        loading: n,
                        sx: { mt: 1 },
                        children: e.jsx("span", { children: a("fileManager.save") }),
                      }),
                    }),
                  ],
                }),
                e.jsxs(fe, {
                  spacing: u ? 3 : 4,
                  container: !0,
                  sx: { width: "100%" },
                  children: [
                    e.jsx(O, {
                      title: a("setting.uid"),
                      noContainer: !0,
                      lgWidth: 6,
                      children: e.jsx(_, {
                        variant: "body2",
                        color: "textSecondary",
                        children: h == null ? void 0 : h.user.id,
                      }),
                    }),
                    e.jsx(O, {
                      title: a("setting.regTime"),
                      noContainer: !0,
                      lgWidth: 6,
                      children: e.jsx(_, {
                        variant: "body2",
                        color: "textSecondary",
                        children: e.jsx(ye, { datetime: h == null ? void 0 : h.user.created_at, variant: "inherit" }),
                      }),
                    }),
                  ],
                }),
                e.jsxs(fe, {
                  spacing: u ? 3 : 4,
                  container: !0,
                  sx: { width: "100%" },
                  children: [
                    e.jsx(O, {
                      title: a("setting.group"),
                      noContainer: !0,
                      lgWidth: 6,
                      children: e.jsx(_, {
                        variant: "body2",
                        color: "textSecondary",
                        children: (w = h == null ? void 0 : h.user.group) == null ? void 0 : w.name,
                      }),
                    }),
                    e.jsxs(O, {
                      title: a("setting.profilePage"),
                      noContainer: !0,
                      lgWidth: 6,
                      children: [
                        e.jsx(ti, {
                          size: "small",
                          ...ze(c),
                          endIcon: e.jsx(ts, { sx: { fontSize: "12px!important" } }),
                          disabled: l,
                          children: m,
                        }),
                        e.jsx(ei, { currentValue: t.share_links_in_profile, onValueChange: j, ...ns(c) }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  si = Ce(Ft)`
  display: flex;
  gap: 8px;
  max-width: 650px;
  margin-inline: auto;
`,
  ii = ({ open: t, onClose: o, on2FADisabled: a }) => {
    const { t: d } = M(),
      { enqueueSnackbar: x } = J(),
      u = L(),
      [p, h] = g.useState(!1),
      [s, i] = g.useState("");
    return (
      g.useEffect(() => {
        t && (h(!1), i(""));
      }, [t]),
      g.useEffect(() => {
        s.length === 6 &&
          (h(!0),
          u(q({ two_fa_enabled: !1, two_fa_code: s }))
            .then(() => {
              x({ message: d("setting.settingSaved"), variant: "success" }), a(), o();
            })
            .catch(() => {
              h(!1), i("");
            }));
      }, [s]),
      e.jsx(we, {
        title: d("application:setting.disable2FA"),
        showCancel: !0,
        hideOk: !0,
        showActions: !0,
        dialogProps: { open: !!t, onClose: o, fullWidth: !0, maxWidth: "xs" },
        children: e.jsx(Se, {
          children: e.jsx(Wt, {
            children: e.jsx(Ze, {
              children: e.jsx(
                Je,
                {
                  addEndListener: (n, r) => n.addEventListener("transitionend", r, !1),
                  classNames: "fade",
                  children: e.jsxs(A, {
                    children: [
                      p &&
                        e.jsx(A, {
                          sx: {
                            pt: 3,
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: e.jsx(at, {}),
                        }),
                      !p &&
                        e.jsxs(V, {
                          spacing: 1,
                          children: [
                            e.jsx(_, { variant: "body2", children: d("setting.inputCurrent2FACode") }),
                            e.jsx(ae, {
                              variant: "standard",
                              margin: "normal",
                              required: !0,
                              children: e.jsx(si, {
                                TextFieldsProps: { disabled: p },
                                autoFocus: !0,
                                length: 6,
                                value: s,
                                onChange: i,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                },
                `${p}`,
              ),
            }),
          }),
        }),
      })
    );
  },
  ai = Ce(Ft)`
  display: flex;
  gap: 8px;
  max-width: 650px;
  margin-inline: auto;
`,
  ri = ({ open: t, onClose: o, on2FAEnabled: a }) => {
    var v;
    const { t: d } = M(),
      { enqueueSnackbar: x } = J(),
      u = L(),
      p = Z(),
      h = Ae(p.breakpoints.down("md")),
      s = Y((j) => j.siteConfig.basic.config.title),
      i = z.currentLoginOrNull(),
      [n, r] = g.useState(!1),
      [l, f] = g.useState(""),
      [c, m] = g.useState("");
    return (
      g.useEffect(() => {
        t &&
          (r(!0),
          f(""),
          u(ss())
            .then((j) => {
              m(j);
            })
            .finally(() => {
              r(!1);
            }));
      }, [t]),
      g.useEffect(() => {
        l.length === 6 &&
          (r(!0),
          u(q({ two_fa_enabled: !0, two_fa_code: l }))
            .then(() => {
              x({ message: d("setting.settingSaved"), variant: "success" }), a(), o();
            })
            .catch(() => {
              r(!1), f("");
            }));
      }, [l]),
      e.jsx(we, {
        title: d("application:setting.enable2FA"),
        showCancel: !0,
        hideOk: !0,
        showActions: !0,
        dialogProps: { open: !!t, onClose: o, fullWidth: !0 },
        children: e.jsx(Se, {
          children: e.jsx(Wt, {
            children: e.jsx(Ze, {
              children: e.jsx(
                Je,
                {
                  addEndListener: (j, w) => j.addEventListener("transitionend", w, !1),
                  classNames: "fade",
                  children: e.jsxs(A, {
                    children: [
                      n &&
                        e.jsx(A, {
                          sx: {
                            pt: 3,
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: e.jsx(at, {}),
                        }),
                      !n &&
                        e.jsxs(V, {
                          spacing: 1,
                          direction: h ? "column" : "row",
                          children: [
                            e.jsx(A, {
                              sx: { minWidth: 176, textAlign: "center", p: 1, backgroundColor: "#fff" },
                              children: e.jsx(ot, {
                                size: h ? 144 : 160,
                                value: `otpauth://totp/${s}:${
                                  (v = i == null ? void 0 : i.user) == null ? void 0 : v.nickname
                                }?secret=${c}`,
                              }),
                            }),
                            e.jsxs(A, {
                              children: [
                                e.jsx(_, { variant: "body2", sx: { mt: 1 }, children: d("setting.2faDescription") }),
                                e.jsx(_, {
                                  variant: "body2",
                                  sx: { mt: 1 },
                                  children: d("setting.inputCurrent2FACode"),
                                }),
                                e.jsx(ae, {
                                  variant: "standard",
                                  margin: "normal",
                                  required: !0,
                                  children: e.jsx(ai, {
                                    TextFieldsProps: { disabled: n },
                                    autoFocus: !0,
                                    length: 6,
                                    value: l,
                                    onChange: f,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                },
                `${n}`,
              ),
            }),
          }),
        }),
      })
    );
  };
function oi(t) {
  return e.jsx(X, {
    ...t,
    children: e.jsx("path", {
      d: "M3 5.75A.75.75 0 0 1 3.75 5c2.663 0 5.258-.943 7.8-2.85a.75.75 0 0 1 .9 0C14.992 4.057 17.587 5 20.25 5a.75.75 0 0 1 .75.75V11c0 .338-.014.67-.04.996a6.467 6.467 0 0 0-1.465-.684c.003-.103.005-.207.005-.312V6.478c-2.577-.152-5.08-1.09-7.5-2.8c-2.42 1.71-4.923 2.648-7.5 2.8V11c0 4.149 2.332 7.221 7.125 9.285a6.506 6.506 0 0 0 1.005 1.52l-.355.143a.75.75 0 0 1-.55 0C5.958 19.676 3 16 3 11zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z",
    }),
  });
}
const li = Ce(zt)(({ theme: t }) => ({
    borderRadius: t.shape.borderRadius,
    border: `1px solid ${t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
    marginTop: t.spacing(1),
    paddingBottom: t.spacing(0.5),
    paddingTop: t.spacing(0.5),
  })),
  ci = ({ icon: t, iconColor: o, settingTitle: a, settingDescription: d, settingAction: x, ...u }) => {
    const p = t;
    return e.jsxs(li, {
      ...u,
      children: [
        e.jsx(is, { sx: {}, children: e.jsx(as, { sx: { backgroundColor: o }, children: e.jsx(p, {}) }) }),
        e.jsx(rs, {
          primary: a,
          secondaryTypographyProps: {
            variant: "caption",
            sx: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
          },
          secondary: d,
        }),
        x && e.jsx(os, { children: x }),
      ],
    });
  },
  di = (t) => {
    var l, f;
    const { t: o } = M(),
      { enqueueSnackbar: a } = J(),
      d = L(),
      x = Z(),
      u = Ae(x.breakpoints.down("md")),
      [p, h] = g.useState(!1),
      [s, i] = g.useState(!1),
      n = async () => {
        var c;
        if (!navigator.credentials || !window.PublicKeyCredential) {
          a({ message: o("setting.browserNotSupported"), variant: "warning", action: ie });
          return;
        }
        h(!0);
        try {
          const m = await d(ds()),
            v = await navigator.credentials.create({
              publicKey: {
                rp: m.publicKey.rp,
                user: {
                  id: Ue(m.publicKey.user.id),
                  name: m.publicKey.user.name,
                  displayName: m.publicKey.user.displayName,
                },
                challenge: Ue(m.publicKey.challenge),
                pubKeyCredParams: m.publicKey.pubKeyCredParams,
                timeout: m.publicKey.timeout,
                excludeCredentials:
                  (c = m.publicKey.excludeCredentials) == null
                    ? void 0
                    : c.map((j) => ({ id: Ue(j.id), type: j.type })),
                authenticatorSelection: m.publicKey.authenticatorSelection,
              },
            });
          if (v) {
            const j = v,
              w = await d(
                us({
                  response: JSON.stringify({
                    id: v.id,
                    type: v.type,
                    rawId: Ve(j.rawId),
                    response: {
                      attestationObject: Ve(j.response.attestationObject),
                      clientDataJSON: Ve(j.response.clientDataJSON),
                    },
                  }),
                  name: o("setting.passkeyName"),
                  ua: navigator.userAgent,
                }),
              );
            t.onPasskeyAdded(w);
          }
        } catch (m) {
          console.error(m);
        } finally {
          h(!1);
        }
      },
      r = (c) => {
        d(kt(o("setting.removedAuthenticatorConfirm"))).then(() => {
          i(!0),
            d(hs(c))
              .then(() => {
                t.onPasskeyDeleted(c);
              })
              .finally(() => {
                i(!1);
              });
        });
      };
    return e.jsxs(A, {
      children: [
        !((l = t.setting.passkeys) != null && l.length) &&
          e.jsxs(A, {
            onClick: n,
            sx: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: (c) => `${c.shape.borderRadius}px`,
              border: (c) =>
                `1px solid ${c.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
              textAlign: "center",
              p: 1,
              py: 2,
            },
            children: [
              e.jsx(Ke, { sx: { fontSize: 40, color: (c) => c.palette.text.secondary } }),
              e.jsx(_, { color: "textSecondary", variant: "caption", children: o("setting.noAuthenticator") }),
            ],
          }),
        e.jsx(Nt, {
          disablePadding: !0,
          children:
            (f = t.setting.passkeys) == null
              ? void 0
              : f.map((c) =>
                  e.jsx(ci, {
                    iconColor: x.palette.action.active,
                    icon: Ke,
                    secondaryAction: e.jsx(st, {
                      onClick: () => r(c.id),
                      disabled: s,
                      children: e.jsx(ls, { fontSize: "small" }),
                    }),
                    settingTitle: e.jsx(Et, { variant: "inherit", children: c.name }),
                    settingDescription: e.jsxs(A, {
                      children: [
                        e.jsx(Re, {
                          i18nKey: "setting.accountCreatedAt",
                          ns: "application",
                          components: [e.jsx(ye, { datetime: c.created_at, variant: "inherit" })],
                        }),
                        e.jsx(A, {
                          component: u ? "div" : "span",
                          sx: {
                            ml: u ? 0 : 1,
                            color: (m) =>
                              c.used_at && pt().diff(pt(c.used_at), "day") < 7
                                ? m.palette.success.main
                                : m.palette.text.secondary,
                          },
                          children: c.used_at
                            ? e.jsx(Re, {
                                i18nKey: "setting.usedAt",
                                ns: "application",
                                components: [e.jsx(ye, { datetime: c.used_at, variant: "inherit" })],
                              })
                            : o("setting.neverUsed"),
                        }),
                      ],
                    }),
                  }),
                ),
        }),
        e.jsx(cs, {
          sx: { mt: 1 },
          variant: "contained",
          loading: p,
          onClick: n,
          startIcon: e.jsx(oi, {}),
          children: e.jsx("span", { children: o("setting.addNewAuthenticator") }),
        }),
      ],
    });
  },
  ui = ({ setting: t, setSetting: o }) => {
    const { t: a } = M(),
      d = Z(),
      x = L();
    Ae(d.breakpoints.down("md"));
    const { enqueueSnackbar: u } = J(),
      p = jt(),
      h = Y((P) => P.siteConfig.login.config.authn),
      s = I.createRef(),
      [i, n] = g.useState(!1),
      [r, l] = g.useState(!1),
      [f, c] = g.useState(""),
      [m, v] = g.useState(""),
      [j, w] = g.useState(""),
      [b, y] = g.useState(!1),
      [S, k] = g.useState(!1),
      D = () => {
        if (s.current) {
          if (!s.current.checkValidity()) {
            s.current.reportValidity();
            return;
          }
          if (m !== j) {
            u({ variant: "warning", message: a("login.passwordNotMatch"), action: ie });
            return;
          }
          l(!0),
            x(q({ current_password: f, new_password: m }))
              .then(() => {
                z.signOutCurrent(),
                  p("/session"),
                  n(!1),
                  u({ variant: "success", message: a("login.passwordReset"), action: ie });
              })
              .finally(() => {
                l(!1);
              });
        }
      },
      T = (P) => () => {
        o({ ...t, two_fa_enabled: P });
      },
      H = (P) => {
        o({ ...t, passkeys: t.passkeys ? [...t.passkeys, P] : [P] });
      },
      Q = (P) => {
        var oe;
        o({ ...t, passkeys: (oe = t.passkeys) == null ? void 0 : oe.filter((le) => le.id !== P) });
      };
    return e.jsxs(V, {
      spacing: 3,
      children: [
        e.jsxs(O, {
          title: a("login.password"),
          lgWidth: 5,
          children: [
            e.jsx(be, {
              in: !i,
              children: e.jsx(Te, {
                sx: { mt: 1 },
                onClick: () => n(!0),
                variant: "contained",
                startIcon: e.jsx(Ot, {}),
                children: a("login.resetPassword"),
              }),
            }),
            e.jsx(be, {
              in: i,
              sx: { mt: 2 },
              unmountOnExit: !0,
              children: e.jsx("form", {
                ref: s,
                children: e.jsxs(V, {
                  spacing: 2,
                  children: [
                    e.jsx(te, {
                      required: !0,
                      label: a("setting.originalPassword"),
                      fullWidth: !0,
                      value: f,
                      onChange: (P) => c(P.target.value),
                      inputProps: { type: "password", minLength: 4, maxLength: 64 },
                    }),
                    e.jsx(te, {
                      required: !0,
                      label: a("login.newPassword"),
                      fullWidth: !0,
                      value: m,
                      onChange: (P) => v(P.target.value),
                      inputProps: { type: "password", minLength: 6, maxLength: 128 },
                    }),
                    e.jsx(te, {
                      required: !0,
                      label: a("login.repeatPassword"),
                      fullWidth: !0,
                      value: j,
                      onChange: (P) => w(P.target.value),
                      inputProps: { type: "password", minLength: 6, maxLength: 128 },
                    }),
                    e.jsx(A, {
                      children: e.jsx(it, {
                        variant: "contained",
                        onClick: D,
                        loading: r,
                        children: e.jsx("span", { children: a("fileManager.save") }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        e.jsx(O, {
          title: e.jsxs(A, {
            children: [
              a("setting.2fa"),
              t.two_fa_enabled &&
                e.jsx(Me, {
                  sx: { ml: 1, height: "initial", fontSize: (P) => P.typography.caption.fontSize },
                  color: "success",
                  size: "small",
                  variant: "outlined",
                  label: a("setting.enabled"),
                }),
            ],
          }),
          lgWidth: 5,
          children: e.jsx(Te, {
            sx: { mt: 1 },
            onClick: () => (t.two_fa_enabled ? k(!0) : y(!0)),
            variant: "contained",
            startIcon: e.jsx(Mt, {}),
            children: a(`setting.${t.two_fa_enabled ? "disable" : "enable"}2FA`),
          }),
        }),
        h &&
          e.jsx(O, {
            title: a("setting.hardwareAuthenticator"),
            children: e.jsx(di, { setting: t, onPasskeyAdded: H, onPasskeyDeleted: Q }),
          }),
        e.jsx(ri, { open: b, onClose: () => y(!1), on2FAEnabled: T(!0) }),
        e.jsx(ii, { open: S, onClose: () => k(!1), on2FADisabled: T(!1) }),
      ],
    });
  },
  Ai = () => {
    const { t } = M(),
      o = L(),
      [a, d] = cn(bt),
      [x, u] = g.useState(!0),
      [p, h] = g.useState(void 0);
    g.useEffect(() => {
      u(!0),
        o(Tt("login")),
        o(ps())
          .then((i) => {
            h(i);
          })
          .finally(() => {
            u(!1);
          });
    }, []);
    const s = g.useMemo(() => {
      const i = [];
      return (
        i.push(
          { label: t("application:setting.profile"), value: "profile", icon: e.jsx(bs, {}) },
          { label: t("application:setting.preference"), value: "preference", icon: e.jsx(Bs, {}) },
          { label: t("application:setting.security"), value: "security", icon: e.jsx(Bt, {}) },
        ),
        i
      );
    }, [t]);
    return e.jsx(ge, {
      children: e.jsxs(xe, {
        maxWidth: "lg",
        children: [
          e.jsx(ne, { title: t("application:navbar.setting") }),
          e.jsx(wt, { value: a ?? "profile", onChange: (i, n) => d(n), tabs: s }),
          e.jsx(Ze, {
            children: e.jsx(
              Je,
              {
                addEndListener: (i, n) => i.addEventListener("transitionend", n, !1),
                classNames: "fade",
                children: e.jsxs(A, {
                  children: [
                    x &&
                      e.jsx(A, {
                        sx: { pt: 20, height: "100%", display: "flex", justifyContent: "center", alignItems: "center" },
                        children: e.jsx(at, {}),
                      }),
                    !x &&
                      p &&
                      e.jsxs(A, {
                        sx: { mt: 3 },
                        children: [
                          (!a || a == "profile") && e.jsx(ni, { setting: p, setSetting: h }),
                          a == "preference" && e.jsx($s, { setting: p, setSetting: h }),
                          a == "security" && e.jsx(ui, { setting: p, setSetting: h }),
                        ],
                      }),
                  ],
                }),
              },
              `${x}`,
            ),
          }),
        ],
      }),
    });
  },
  hi = 50,
  Ei = () => {
    const { t } = M(),
      o = L(),
      [a, d] = g.useState(""),
      [x, u] = g.useState([]),
      [p, h] = g.useState(!1),
      [s, i] = g.useState("desc"),
      [n, r] = g.useState(),
      { id: l } = rn();
    g.useEffect(() => {
      l &&
        o(gs(l)).then((j) => {
          j && r(j);
        });
    }, [l]);
    const f = g.useCallback(
        (j, w, b) => () => {
          h(!0),
            o(xs({ page_size: hi, order_direction: b ?? s, next_page_token: w }, l ?? ""))
              .then((y) => {
                var S;
                u([...j, ...y.shares]),
                  (S = y.pagination) != null && S.next_token ? d(y.pagination.next_token) : d(void 0);
              })
              .catch(() => {
                d(void 0);
              })
              .finally(() => {
                h(!1);
              });
        },
        [o, s, Rt],
      ),
      c = (j) => {
        f([], "", j)();
      },
      m = g.useCallback(
        (j) => {
          u((w) => w.filter((b) => b.id !== j));
        },
        [u],
      ),
      v = g.useCallback(
        (j) => {
          i(j.target.value), c(j.target.value);
        },
        [c, i],
      );
    return e.jsx(ge, {
      children: e.jsxs(xe, {
        maxWidth: "lg",
        children: [
          e.jsx(ne, { title: (n == null ? void 0 : n.nickname) ?? "-" }),
          e.jsx(A, {
            sx: {
              backgroundColor: (j) => (j.palette.mode == "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)"),
              borderRadius: (j) => `${j.shape.borderRadius}px`,
              mb: 4,
              p: 2,
            },
            children: n && e.jsx(fs, { user: n, open: !0, displayOnly: !0 }),
          }),
          e.jsx(ne, {
            secondaryAction:
              n &&
              n.share_links_in_profile !== K.hide_share &&
              e.jsx(ae, {
                variant: "outlined",
                children: e.jsxs(Ie, {
                  variant: "outlined",
                  value: s,
                  onChange: v,
                  children: [
                    e.jsx(F, {
                      value: "desc",
                      children: e.jsx(N, {
                        slotProps: { primary: { variant: "body2" } },
                        children: t("application:share.createdAtDesc"),
                      }),
                    }),
                    e.jsx(F, {
                      value: "asc",
                      children: e.jsx(N, {
                        slotProps: { primary: { variant: "body2" } },
                        children: t("application:share.createdAtAsc"),
                      }),
                    }),
                  ],
                }),
              }),
            skipChangingDocumentTitle: !0,
            onRefresh: n && n.share_links_in_profile !== K.hide_share ? () => c() : void 0,
            loading: p,
            title: t("application:share.somebodyShare", { name: (n == null ? void 0 : n.nickname) ?? "-" }),
          }),
          e.jsxs(pe, {
            container: !0,
            spacing: 1,
            children: [
              n &&
                n.share_links_in_profile !== K.hide_share &&
                x.map((j) => e.jsx(De, { share: j, onShareDeleted: m })),
              a != null &&
                n &&
                (n == null ? void 0 : n.share_links_in_profile) !== K.hide_share &&
                e.jsx(e.Fragment, {
                  children: [...Array(4)].map((j, w) =>
                    e.jsx(De, { onShareDeleted: m, onLoad: w == 0 ? f(x, a) : void 0, loading: !0 }, w == 0 ? a : w),
                  ),
                }),
              n &&
                n.share_links_in_profile === K.hide_share &&
                e.jsx(e.Fragment, {
                  children: e.jsx(A, {
                    sx: { p: 1, width: "100%", textAlign: "center" },
                    children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.userHideShare") }),
                  }),
                }),
            ],
          }),
          a == null &&
            x.length == 0 &&
            e.jsx(A, {
              sx: { p: 1, width: "100%", textAlign: "center" },
              children: e.jsx(se, { size: 0.8, top: 63, primary: t("setting.listEmpty") }),
            }),
        ],
      }),
    });
  };
export { Ci as Devices, bi as DownloadList, Ei as Profile, Ai as Setting, yi as ShareList, vi as TaskList };
