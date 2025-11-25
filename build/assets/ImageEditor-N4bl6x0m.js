import { g as m, r as i, v as p, j as t, ad as f } from "./react-CV3HRGEF.js";
import {
  j as x,
  bt as h,
  t as v,
  bm as b,
  bn as w,
  gZ as o,
  q as E,
  bA as S,
  g_ as I,
  c_ as j,
  a9 as _,
  bs as k,
} from "./index-CIdel1P5.js";
import "./common-5dK6VpSw.js";
const F = ["jpg", "jpeg", "png", "webp"],
  N = () => {
    x();
    const { t: y, i18n: r } = m(),
      [d, g] = i.useState(!1);
    i.useEffect(() => {
      h.loadNamespaces(["image_editor"]).then(() => {
        g(!0);
      });
    }, []);
    const e = v((a) => a.globalState.imageEditor),
      [l, c] = p.useState(void 0);
    i.useEffect(() => {
      e != null && e.open
        ? s(b({ no_cache: !0, uris: [w(e.file)], entity: e.version }))
            .then((a) => {
              c(a.urls[0].url);
            })
            .catch(() => {
              s(o());
            })
        : c(void 0);
    }, [e]);
    const s = E();
    S();
    const u = i.useCallback(
      async (a, n) => {
        !n || !(e != null && e.file) || (await s(I(a, n, e.file, e.version)), s(o()));
      },
      [s, e],
    );
    return t.jsx(t.Fragment, {
      children: t.jsx(j, {
        sx: { zIndex: (a) => a.zIndex.drawer + 1 },
        open: !0,
        children: t.jsx(_, {
          sx: { width: "100%", height: "100%" },
          children:
            e &&
            l &&
            d &&
            t.jsx(f, {
              translations: r.getResourceBundle(r.language, "image_editor"),
              useBackendTranslations: !1,
              source: l,
              onSave: async (a, n) => {
                await u(a.name, a.imageBase64);
              },
              defaultSavedImageName: e.file.name,
              defaultSavedImageType: k(e.file.name) ?? "png",
              onClose: () => s(o()),
              disableSaveIfNoChanges: !0,
              previewPixelRatio: window.devicePixelRatio,
              savingPixelRatio: 4,
            }),
        }),
      }),
    });
  };
export { N as default, F as editorSupportedExt };
