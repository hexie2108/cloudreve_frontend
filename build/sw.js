if (!self.define) {
  let s,
    e = {};
  const l = (l, r) => (
    (l = new URL(l + ".js", r).href),
    e[l] ||
      new Promise((e) => {
        if ("document" in self) {
          const s = document.createElement("script");
          (s.src = l), (s.onload = e), document.head.appendChild(s);
        } else (s = l), importScripts(l), e();
      }).then(() => {
        let s = e[l];
        if (!s) throw new Error(`Module ${l} didn’t register its module`);
        return s;
      })
  );
  self.define = (r, i) => {
    const n = s || ("document" in self ? document.currentScript.src : "") || location.href;
    if (e[n]) return;
    let u = {};
    const o = (s) => l(s, n),
      t = { module: { uri: n }, exports: u, require: o };
    e[n] = Promise.all(r.map((s) => t[s] || o(s))).then((s) => (i(...s), u));
  };
}
define(["./workbox-e3490c72"], function (s) {
  "use strict";
  self.addEventListener("message", (s) => {
    s.data && "SKIP_WAITING" === s.data.type && self.skipWaiting();
  }),
    s.precacheAndRoute(
      [
        { url: "assets/AdminBundle-DD_L0Lwo.js", revision: null },
        { url: "assets/Artplayer-B5_AvCvT.js", revision: null },
        { url: "assets/Artplayer-CsrbgM3u.css", revision: null },
        { url: "assets/codemirror-CUbsYH-3.js", revision: null },
        { url: "assets/common-5dK6VpSw.js", revision: null },
        { url: "assets/css.worker-725QOr-6.js", revision: null },
        { url: "assets/DarkThemeSwitcher-CgNG2IV_.js", revision: null },
        { url: "assets/DownloadFileList-6nHycLmz.js", revision: null },
        { url: "assets/Editor-CzeXhx9-.js", revision: null },
        { url: "assets/Editor-l1VffD-u.css", revision: null },
        { url: "assets/editor.worker-TPvhWJmc.js", revision: null },
        { url: "assets/Epub-DOMSbPbt.js", revision: null },
        { url: "assets/excalidraw-Bnx8hZwR.css", revision: null },
        { url: "assets/Excalidraw-Bo992XcZ.js", revision: null },
        { url: "assets/excalidraw-Dj3WmK_c.js", revision: null },
        { url: "assets/Excalidraw-DYQS9-B6.css", revision: null },
        { url: "assets/FrameManagerBundle-l8sWkcLQ.js", revision: null },
        { url: "assets/giscus-Ci9LqPcC-C45O1yEu.js", revision: null },
        { url: "assets/html.worker-ChxsShmw.js", revision: null },
        { url: "assets/ImageEditor-DquevAhU.css", revision: null },
        { url: "assets/ImageEditor-N4bl6x0m.js", revision: null },
        { url: "assets/index-CIdel1P5.js", revision: null },
        { url: "assets/index-qQxd8I_f.css", revision: null },
        { url: "assets/json.worker-WK-PcyPx.js", revision: null },
        { url: "assets/Lightbox-BsshIEnk.css", revision: null },
        { url: "assets/Lightbox-D0V36HUz.js", revision: null },
        { url: "assets/mermaid-BthQq5t5.js", revision: null },
        { url: "assets/monaco-Cjcdkwd9.css", revision: null },
        { url: "assets/monaco-DSyTyO5T.js", revision: null },
        { url: "assets/MonacoEditor-BnsLKTuc.js", revision: null },
        { url: "assets/Pages-DGYk9GIo.js", revision: null },
        { url: "assets/pdfjs/viewer.css", revision: null },
        { url: "assets/react-4-pFdlfx.css", revision: null },
        { url: "assets/react-CV3HRGEF.js", revision: null },
        { url: "assets/roundRect-0PYZxl1G.js", revision: null },
        { url: "assets/SettingForm-B_4-_WPw.js", revision: null },
        { url: "assets/StorageSummary-_giPRPOL.js", revision: null },
        { url: "assets/ts.worker-DODyzeAP.js", revision: null },
        { url: "assets/workbox-window.prod.es5-B9K5rw8f.js", revision: null },
        { url: "index.html", revision: "1993dc5767265ba9e15ffbd566ad8f00" },
        { url: "pdfviewer.html", revision: "2106674c481662642880e4bdd214680c" },
        { url: "service-worker.js", revision: "241e60b2365ef9100734b97976b7dc4c" },
        { url: "static/js/script.js", revision: "8a2c7b5cdef28c968961a097f4166ca8" },
      ],
      {},
    ),
    s.cleanupOutdatedCaches(),
    s.registerRoute(
      new s.NavigationRoute(s.createHandlerBoundToURL("index.html"), {
        denylist: [/^\/pdfviewer.html/, /^\/api\/(.+)/, /^\/f\/(.+)/, /^\/s\/(.+)/],
      }),
    );
});
