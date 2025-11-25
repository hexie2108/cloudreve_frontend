import { r as h, j as t, g as G, n as U } from "./react-CV3HRGEF.js";
import {
  a as I,
  g as T,
  s as u,
  u as D,
  gN as W,
  gO as H,
  d as O,
  e as N,
  gP as A,
  gQ as z,
  c as d,
  m as P,
  b as v,
  k as V,
  d4 as Z,
  gx as E,
  a9 as K,
  ft as F,
  aj as k,
  a8 as q,
  o as w,
  D as X,
  z as Q,
  T as j,
  ao as _,
  fj as Y,
  ap as J,
  ar as rr,
  F as er,
  eX as ar,
  gs as tr,
  be as or,
  cm as R,
} from "./index-CIdel1P5.js";
function nr(e) {
  return T("MuiFormGroup", e);
}
I("MuiFormGroup", ["root", "row", "error"]);
const ir = (e) => {
    const { classes: r, row: a, error: o } = e;
    return N({ root: ["root", a && "row", o && "error"] }, nr, r);
  },
  sr = u("div", {
    name: "MuiFormGroup",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, a.row && r.row];
    },
  })({
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    variants: [{ props: { row: !0 }, style: { flexDirection: "row" } }],
  }),
  Lr = h.forwardRef(function (r, a) {
    const o = D({ props: r, name: "MuiFormGroup" }),
      { className: s, row: i = !1, ...n } = o,
      c = W(),
      l = H({ props: o, muiFormControl: c, states: ["error"] }),
      m = { ...o, row: i, error: l.error },
      p = ir(m);
    return t.jsx(sr, { className: O(p.root, s), ownerState: m, ref: a, ...n });
  });
function lr(e) {
  return T("MuiLinearProgress", e);
}
const Sr = I("MuiLinearProgress", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "determinate",
    "indeterminate",
    "buffer",
    "query",
    "dashed",
    "dashedColorPrimary",
    "dashedColorSecondary",
    "bar",
    "bar1",
    "bar2",
    "barColorPrimary",
    "barColorSecondary",
    "bar1Indeterminate",
    "bar1Determinate",
    "bar1Buffer",
    "bar2Indeterminate",
    "bar2Buffer",
  ]),
  $ = 4,
  L = A`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,
  cr =
    typeof L != "string"
      ? z`
        animation: ${L} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `
      : null,
  S = A`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,
  pr =
    typeof S != "string"
      ? z`
        animation: ${S} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `
      : null,
  M = A`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,
  dr =
    typeof M != "string"
      ? z`
        animation: ${M} 3s infinite linear;
      `
      : null,
  ur = (e) => {
    const { classes: r, variant: a, color: o } = e,
      s = {
        root: ["root", `color${d(o)}`, a],
        dashed: ["dashed", `dashedColor${d(o)}`],
        bar1: [
          "bar",
          "bar1",
          `barColor${d(o)}`,
          (a === "indeterminate" || a === "query") && "bar1Indeterminate",
          a === "determinate" && "bar1Determinate",
          a === "buffer" && "bar1Buffer",
        ],
        bar2: [
          "bar",
          "bar2",
          a !== "buffer" && `barColor${d(o)}`,
          a === "buffer" && `color${d(o)}`,
          (a === "indeterminate" || a === "query") && "bar2Indeterminate",
          a === "buffer" && "bar2Buffer",
        ],
      };
    return N(s, lr, r);
  },
  B = (e, r) =>
    e.vars
      ? e.vars.palette.LinearProgress[`${r}Bg`]
      : e.palette.mode === "light"
        ? Z(e.palette[r].main, 0.62)
        : E(e.palette[r].main, 0.5),
  mr = u("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.root, r[`color${d(a.color)}`], r[a.variant]];
    },
  })(
    P(({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      display: "block",
      height: 4,
      zIndex: 0,
      "@media print": { colorAdjust: "exact" },
      variants: [
        ...Object.entries(e.palette)
          .filter(v())
          .map(([r]) => ({ props: { color: r }, style: { backgroundColor: B(e, r) } })),
        {
          props: ({ ownerState: r }) => r.color === "inherit" && r.variant !== "buffer",
          style: {
            "&::before": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "currentColor",
              opacity: 0.3,
            },
          },
        },
        { props: { variant: "buffer" }, style: { backgroundColor: "transparent" } },
        { props: { variant: "query" }, style: { transform: "rotate(180deg)" } },
      ],
    })),
  ),
  fr = u("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [r.dashed, r[`dashedColor${d(a.color)}`]];
    },
  })(
    P(({ theme: e }) => ({
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%",
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px",
      variants: [
        {
          props: { color: "inherit" },
          style: {
            opacity: 0.3,
            backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)",
          },
        },
        ...Object.entries(e.palette)
          .filter(v())
          .map(([r]) => {
            const a = B(e, r);
            return {
              props: { color: r },
              style: { backgroundImage: `radial-gradient(${a} 0%, ${a} 16%, transparent 42%)` },
            };
          }),
      ],
    })),
    dr || { animation: `${M} 3s infinite linear` },
  ),
  br = u("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.bar,
        r.bar1,
        r[`barColor${d(a.color)}`],
        (a.variant === "indeterminate" || a.variant === "query") && r.bar1Indeterminate,
        a.variant === "determinate" && r.bar1Determinate,
        a.variant === "buffer" && r.bar1Buffer,
      ];
    },
  })(
    P(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        { props: { color: "inherit" }, style: { backgroundColor: "currentColor" } },
        ...Object.entries(e.palette)
          .filter(v())
          .map(([r]) => ({ props: { color: r }, style: { backgroundColor: (e.vars || e).palette[r].main } })),
        { props: { variant: "determinate" }, style: { transition: `transform .${$}s linear` } },
        { props: { variant: "buffer" }, style: { zIndex: 1, transition: `transform .${$}s linear` } },
        {
          props: ({ ownerState: r }) => r.variant === "indeterminate" || r.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: r }) => r.variant === "indeterminate" || r.variant === "query",
          style: cr || { animation: `${L} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite` },
        },
      ],
    })),
  ),
  gr = u("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, r) => {
      const { ownerState: a } = e;
      return [
        r.bar,
        r.bar2,
        r[`barColor${d(a.color)}`],
        (a.variant === "indeterminate" || a.variant === "query") && r.bar2Indeterminate,
        a.variant === "buffer" && r.bar2Buffer,
      ];
    },
  })(
    P(({ theme: e }) => ({
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      top: 0,
      transition: "transform 0.2s linear",
      transformOrigin: "left",
      variants: [
        ...Object.entries(e.palette)
          .filter(v())
          .map(([r]) => ({
            props: { color: r },
            style: { "--LinearProgressBar2-barColor": (e.vars || e).palette[r].main },
          })),
        {
          props: ({ ownerState: r }) => r.variant !== "buffer" && r.color !== "inherit",
          style: { backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)" },
        },
        {
          props: ({ ownerState: r }) => r.variant !== "buffer" && r.color === "inherit",
          style: { backgroundColor: "currentColor" },
        },
        { props: { color: "inherit" }, style: { opacity: 0.3 } },
        ...Object.entries(e.palette)
          .filter(v())
          .map(([r]) => ({
            props: { color: r, variant: "buffer" },
            style: { backgroundColor: B(e, r), transition: `transform .${$}s linear` },
          })),
        {
          props: ({ ownerState: r }) => r.variant === "indeterminate" || r.variant === "query",
          style: { width: "auto" },
        },
        {
          props: ({ ownerState: r }) => r.variant === "indeterminate" || r.variant === "query",
          style: pr || { animation: `${S} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite` },
        },
      ],
    })),
  ),
  Mr = h.forwardRef(function (r, a) {
    const o = D({ props: r, name: "MuiLinearProgress" }),
      { className: s, color: i = "primary", value: n, valueBuffer: c, variant: l = "indeterminate", ...m } = o,
      p = { ...o, color: i, variant: l },
      f = ur(p),
      b = V(),
      x = {},
      y = { bar1: {}, bar2: {} };
    if ((l === "determinate" || l === "buffer") && n !== void 0) {
      (x["aria-valuenow"] = Math.round(n)), (x["aria-valuemin"] = 0), (x["aria-valuemax"] = 100);
      let g = n - 100;
      b && (g = -g), (y.bar1.transform = `translateX(${g}%)`);
    }
    if (l === "buffer" && c !== void 0) {
      let g = (c || 0) - 100;
      b && (g = -g), (y.bar2.transform = `translateX(${g}%)`);
    }
    return t.jsxs(mr, {
      className: O(f.root, s),
      ownerState: p,
      role: "progressbar",
      ...x,
      ref: a,
      ...m,
      children: [
        l === "buffer" ? t.jsx(fr, { className: f.dashed, ownerState: p }) : null,
        t.jsx(br, { className: f.bar1, ownerState: p, style: y.bar1 }),
        l === "determinate" ? null : t.jsx(gr, { className: f.bar2, ownerState: p, style: y.bar2 }),
      ],
    });
  }),
  hr = u(K)(({ theme: e }) => ({
    backgroundColor: F[100],
    ...e.applyStyles("dark", { backgroundColor: F[900] }),
    border: `1px solid ${e.palette.divider}`,
    borderRadius: "4px",
    padding: "1px",
    paddingLeft: "4px",
    paddingRight: "4px",
  })),
  vr = ({ children: e }) => t.jsx(hr, { as: "code", children: e });
function Ar(e) {
  return t.jsx(k, {
    ...e,
    children: t.jsx("path", {
      d: "M5 12a7 7 0 0 1 10.608-6H15a1 1 0 1 0 0 2h3a1 1 0 0 0 1-1V4a1 1 0 1 0-2 0v.516a9 9 0 1 0 3.93 6.36a1 1 0 1 0-1.984.248A7 7 0 1 1 5 12",
    }),
  });
}
function xr(e) {
  return t.jsx(k, {
    ...e,
    children: t.jsx("path", {
      d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m3.22 6.97l-4.47 4.47l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06",
    }),
  });
}
function yr(e) {
  return t.jsx(k, {
    ...e,
    children: t.jsx("path", {
      d: "M14.5 2a3.25 3.25 0 0 1 2.739 5h2.511c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 0 1-1 1.225v5.775a3.25 3.25 0 0 1-3.066 3.245L16.75 22h-9.5a3.25 3.25 0 0 1-3.245-3.066L4 18.75v-5.775c-.57-.116-1-.62-1-1.225v-3.5C3 7.56 3.56 7 4.25 7h2.511a3.25 3.25 0 0 1 5.24-3.827A3.24 3.24 0 0 1 14.5 2m-3.25 10.999H5.5v5.751a1.75 1.75 0 0 0 1.606 1.744l.144.006h4zm7.25 0h-5.75V20.5h4a1.75 1.75 0 0 0 1.744-1.607l.006-.143zM11.25 8.5H4.5v3l6.75-.001zm8.25 3v-3h-6.75v2.999zm-5-8a1.75 1.75 0 0 0-1.75 1.75v1.749h1.774l.12-.005A1.75 1.75 0 0 0 14.5 3.5m-5 0a1.75 1.75 0 0 0-.144 3.494l.12.005h1.774V5.25l-.006-.144A1.75 1.75 0 0 0 9.5 3.5",
    }),
  });
}
const Cr = [
    "shareLinkCollabration",
    "filePermission",
    "multipleStoragePolicy",
    "auditAndActivity",
    "vasService",
    "sso",
    "more",
  ],
  jr = u(q)(({ theme: e }) => ({
    background: `linear-gradient(45deg, ${e.palette.primary.main} 30%, ${e.palette.primary.light} 90%)`,
    color: e.palette.primary.contrastText,
    "&:hover": { background: `linear-gradient(45deg, ${e.palette.primary.dark} 30%, ${e.palette.primary.main} 90%)` },
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) !important",
  })),
  C = { code: "FI5Q9668YV", discount: 15, start: "2025-08-12T00:00:00Z", end: "2025-10-12T23:59:59Z" },
  Pr = ({ open: e, onClose: r }) => {
    const { t: a } = G("dashboard"),
      o = h.useCallback((i) => {
        i.stopPropagation(), window.open("https://cloudreve.org/pro", "_blank");
      }, []),
      s = h.useMemo(() => {
        const i = w();
        return i >= w(C.start) && i <= w(C.end);
      }, []);
    return t.jsxs(X, {
      title: a("pro.title"),
      dialogProps: { open: e, onClose: r, maxWidth: "sm", fullWidth: !0 },
      children: [
        t.jsxs(Q, {
          children: [
            t.jsx(j, { variant: "body1", color: "text.secondary", children: a("pro.description") }),
            t.jsx(j, { variant: "body1", fontWeight: 600, sx: { mt: 2 }, children: a("pro.proInclude") }),
            t.jsx(_, {
              dense: !0,
              children: Cr.map((i) =>
                t.jsxs(
                  Y,
                  {
                    children: [
                      t.jsx(J, { sx: { minWidth: "36px" }, children: t.jsx(xr, { color: "primary" }) }),
                      t.jsx(rr, { slotProps: { primary: { sx: {}, variant: "body1" } }, children: a(`pro.${i}`) }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            s &&
              t.jsxs(er, {
                iconMapping: { info: t.jsx(yr, { fontSize: "inherit" }) },
                severity: "info",
                sx: { mt: 2 },
                children: [
                  t.jsx(ar, { children: a("pro.promotionTitle") }),
                  t.jsx(U, {
                    i18nKey: "dashboard:pro.promotion",
                    values: { code: C.code, discount: C.discount },
                    components: [t.jsx(vr, {}), t.jsx(j, { component: "span", fontWeight: 600 })],
                  }),
                ],
              }),
          ],
        }),
        t.jsxs(tr, {
          sx: { justifyContent: "flex-end" },
          children: [
            t.jsx(q, { variant: "outlined", color: "primary", onClick: r, children: a("pro.later") }),
            t.jsx(jr, { onClick: o, variant: "contained", color: "primary", children: a("pro.learnMore") }),
          ],
        }),
      ],
    });
  };
function zr(e) {
  return t.jsx(k, {
    ...e,
    children: t.jsx("path", {
      d: "M5 7h14a3 3 0 0 1 2.995 2.824L22 10v4a3 3 0 0 1-2.824 2.995L19 17H5a3 3 0 0 1-2.995-2.824L2 14v-4a3 3 0 0 1 2.824-2.995L5 7h14H5Zm14 1.5H5A1.5 1.5 0 0 0 3.5 10v4A1.5 1.5 0 0 0 5 15.5h14a1.5 1.5 0 0 0 1.5-1.5v-4A1.5 1.5 0 0 0 19 8.5ZM18 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z",
    }),
  });
}
const kr = u(or)(({ theme: e }) => ({
    marginLeft: 8,
    height: "20px",
    fontSize: "12px",
    background: `linear-gradient(45deg, ${e.palette.primary.main} 30%, ${e.palette.primary.light} 90%)`,
    color: e.palette.primary.contrastText,
  })),
  Br = ({ title: e, children: r, lgWidth: a = 8, secondary: o, spacing: s, noContainer: i, anchorId: n, pro: c }) => {
    const [l, m] = h.useState(!1);
    h.useEffect(() => {
      if (n && window.location.hash === `#${n}`) {
        const b = document.getElementById(`anchor-${n}`);
        b &&
          (b.scrollIntoView({ behavior: "smooth" }),
          window.history.replaceState({}, "", window.location.pathname + window.location.search));
      }
    }, [n]);
    const p = h.useCallback(
        (b) => {
          c && (b.stopPropagation(), m(!0));
        },
        [c],
      ),
      f = t.jsxs(t.Fragment, {
        children: [
          t.jsxs(R, {
            sx: { boxShadow: n && window.location.hash === `#${n}` ? "0 0 0 3px rgb(255 193 7 / 53%)" : "none" },
            size: { md: a, xs: 12 },
            children: [
              e &&
                t.jsxs(j, {
                  fontWeight: 600,
                  sx: { mb: 0.5, display: "flex", alignItems: "center" },
                  variant: "body2",
                  id: n ? `anchor-${n}` : void 0,
                  children: [e, c && t.jsx(kr, { label: "Pro", color: "primary", size: "small" })],
                }),
              t.jsx("div", { onClick: p, children: r }),
            ],
          }),
          o && o,
          c && t.jsx(Pr, { open: l, onClose: () => m(!1) }),
        ],
      });
    return i ? f : t.jsx(R, { container: !0, spacing: s ?? 0, children: f });
  };
export { Ar as A, vr as C, Lr as F, Mr as L, Pr as P, Br as S, kr as a, zr as b, Sr as l };
