var timex,
  timer,
  thatScroll,
  Flower,
  flaresContainer,
  ProjectListLoad,
  NewsListLoad,
  ReportListLoad,
  UA =
    navigator.userAgent ||
    navigator.userAgentData ||
    navigator.appVersion ||
    navigator.platform,
  HTML = document.documentElement,
  isFirefox = UA.match(/firefox|fxios/i),
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    "[object SafariRemoteNotification]" ===
      (!window.safari || safari.pushNotification).toString(),
  isIE9 = /MSIE 9/i.test(UA),
  isIE10 = /MSIE 10/i.test(UA),
  isIE11 = /rv:11.0/i.test(UA),
  isIE = !!document.documentMode,
  isEdge = UA.match(/edg/i) || (!isIE && !!window.StyleMedia && !isIE11),
  isChrome =
    UA.match(/chrome|chromium|crios/i) ||
    -1 < UA.indexOf("Chrome") ||
    (!!window.chrome && !!window.chrome.webstore),
  Mobile = window.matchMedia("(max-width: 1100px)"),
  Touch =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(UA) ||
    "ontouchstart" in document.documentElement,
  iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
  MacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform),
  isMac = 0 <= navigator.platform.toUpperCase().indexOf("MAC"),
  doWheel =
    ((isMac || MacBrowser) && document.documentElement.classList.add("is-mac"),
    !0),
  doTouch = !0,
  windscroll = window.pageYOffset,
  Body = document.body,
  Html = document.querySelector("html"),
  Smooth = document.querySelector(".smooth-scroll"),
  windscroll =
    (Smooth.setAttribute("data-scroll-container", ""), window.pageYOffset),
  LoadIcon = document.querySelector(".loadicon"),
  Logo = document.querySelector(".logo"),
  Mask = document.querySelector(".mask"),
  EnterSite = Mask.querySelector(".enter-site"),
  Social = document.querySelector(".social"),
  AllAlbum = document.querySelector(".all-album"),
  OverlayDark = document.querySelector(".overlay-dark"),
  Main = document.querySelector(".main"),
  Footer = document.querySelector(".footer"),
  Bottom = Footer.querySelector(".bottom"),
  Header = document.querySelector(".header"),
  HeaderWidget = document.querySelector(".header-widget"),
  Navigation = Header.querySelector(".navigation"),
  OverlayMenu = Header.querySelector(".overlay-menu"),
  rightHeader = Header.querySelector(".right-header"),
  Container = document.querySelector(".container"),
  IDPage = Container.getAttribute("id"),
  GoTop = document.querySelector(".go-top"),
  Wheel = document.querySelector(".wheel"),
  TitlePage = document.querySelector(".title-page"),
  NavClick = document.querySelector(".nav-click"),
  Banner =
    Container.querySelector(".background") ||
    Container.querySelector(".banner-inner") ||
    null,
  OuterNavSec = Container.querySelector(".section-outernav"),
  OuterNav = Container.querySelector(".outer-nav"),
  Details = 0,
  Regsiters = document.querySelector(".register"),
  TileReveal = Container.querySelector(".tile-reveal"),
  PageProgress = document.querySelector("#page-progress"),
  httpserver = document.querySelector(".httpserver")
    ? document.querySelector(".httpserver").innerHTML
    : "",
  httptemplate = document.querySelector(".httptemplate")
    ? document.querySelector(".httptemplate").innerHTML
    : "",
  RequestAjaxTyping = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP"),
  ButType = document.querySelector(".link-search-load-typing"),
  SearchLoading = document.querySelector(".search-loading");
"home-page" == IDPage
  ? ((Flower = Mask.querySelector(".flower-mask")),
    (flaresContainer = document.querySelector("#flaresContainer")))
  : "project-page" == IDPage
  ? (ProjectListLoad = Container.querySelector(".load-project-list"))
  : ("news-page" != IDPage && "activities-page" != IDPage) ||
    (NewsListLoad = Container.querySelector(".load-news-list")),
  "shareholder-page" == IDPage &&
    (ReportListLoad = Container.querySelector(".load-report-list"));

function defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      "value" in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}

function createClass(t, e, n) {
  return e && defineProperties(t.prototype, e), n && defineProperties(t, n), t;
}

function Extends() {
  return (Extends =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n,
          i = arguments[e];
        for (n in i)
          Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
      }
      return t;
    }).apply(this, arguments);
}

function inheritsLoose(t, e) {
  (t.prototype = Object.create(e.prototype)),
    ((t.prototype.constructor = t).__proto__ = e);
}

function instanceOf(t, e) {
  return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance]
    ? e[Symbol.hasInstance](t)
    : t instanceof e;
}

function classCallCheck(t, e) {
  if (!instanceOf(t, e))
    throw new TypeError("Cannot call a class as a function");
}

function iterableToArray(t) {
  if (
    Symbol.iterator in Object(t) ||
    "[object Arguments]" === Object.prototype.toString.call(t)
  )
    return Array.from(t);
}

function toConsumableArray(t) {
  return arrayWithoutHoles(t) || iterableToArray(t) || nonIterableSpread();
}

function arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}

function arrayWithoutHoles(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
}
1 == Touch && HTML.classList.add("is-touch"),
  isFirefox
    ? HTML.classList.add("is-Firefox")
    : isEdge
    ? HTML.classList.add("is-Edge")
    : isSafari
    ? HTML.classList.add("is-Safari")
    : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge;

function RemoveAllClass(t) {
  for (var e = 0; e < t.length; e++)
    t[e].classList.remove("active"),
      t[e].classList.remove("current"),
      t[e].classList.remove("show"),
      t[e].classList.remove("show-text");
}

function RanDom(t, e) {
  return Math.max(Math.random() * (e - t) + t);
}
var debounce = function (i, o, s) {
  var a;
  return function () {
    var t = this,
      e = arguments,
      n = s && !a;
    clearTimeout(a),
      (a = setTimeout(function () {
        (a = null), s || i.apply(t, e);
      }, o)),
      n && i.apply(t, e);
  };
};

function isFullScreenMode() {
  var t = document.body,
    t =
      void 0 !== t.requestFullscreen ||
      void 0 !== t.mozRequestFullScreen ||
      void 0 !== t.webkitRequestFullscreen ||
      void 0 !== t.msRequestFullscreen ||
      void 0 !== document.exitFullscreen ||
      void 0 !== document.mozCancelFullScreen ||
      void 0 !== document.webkitExitFullscreen;
  return (
    1 == t && document.documentElement.classList.add("fullsreen-support"), t
  );
}

function toggleFullScreen(t) {
  document.fullscreenElement
    ? document.exitFullscreen()
    : document.webkitFullscreenElement
    ? document.webkitExitFullscreen()
    : document.fullscreenEnabled
    ? t.requestFullscreen()
    : document.webkitFullscreenEnabled && t.webkitRequestFullscreen();
}
isFullScreenMode(),
  (function (t, i) {
    "use strict";
    "function" != typeof t.CustomEvent &&
      ((t.CustomEvent = function (t, e) {
        e = e || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0,
        };
        var n = i.createEvent("CustomEvent");
        return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
      }),
      (t.CustomEvent.prototype = t.Event.prototype)),
      i.addEventListener("touchstart", n, !1),
      i.addEventListener("touchmove", u, !1),
      i.addEventListener("touchend", e, !1),
      i.addEventListener("mousedown", n, !1),
      i.addEventListener("mousemove", u, !1),
      i.addEventListener("mouseup", e, !1);
    var o = null,
      s = null,
      a = null,
      r = null,
      h = null,
      c = null;

    function e(t) {
      var e, n, i;
      c === t.target &&
        ((t = parseInt(c.getAttribute("data-swipe-threshold") || "20", 10)),
        (e = parseInt(c.getAttribute("data-swipe-timeout") || "500", 10)),
        (n = Date.now() - h),
        (i = ""),
        Math.abs(a) > Math.abs(r)
          ? Math.abs(a) > t && n < e && (i = 0 < a ? "swipeleft" : "swiperight")
          : Math.abs(r) > t && n < e && (i = 0 < r ? "swipeup" : "swipedown"),
        "" !== i &&
          c.dispatchEvent(
            new CustomEvent(i, {
              bubbles: !0,
              cancelable: !0,
            })
          ),
        (h = s = o = null));
    }

    function n(t) {
      "true" !== t.target.getAttribute("data-swipe-ignore") &&
        ((c = t.target),
        (h = Date.now()),
        (o = (t.touches ? t.touches[0] : t).clientX),
        (s = (t.touches ? t.touches[0] : t).clientY),
        (r = a = 0));
    }

    function u(t) {
      var e;
      o &&
        s &&
        ((e = (t.touches ? t.touches[0] : t).clientX),
        (t = (t.touches ? t.touches[0] : t).clientY),
        (a = o - e),
        (r = s - t));
    }
  })(window, document),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : (t.Splitting = e());
  })(this, function () {
    "use strict";
    var o = document,
      c = o.createTextNode.bind(o);

    function u(t, e) {
      return t.appendChild(e);
    }

    function l(t, e, n) {
      var i = o.createElement("span");
      return (
        e && (i.className = e), n && (i.textContent = n), (t && u(t, i)) || i
      );
    }

    function f(t, e) {
      return t && 0 != t.length
        ? t.nodeName
          ? [t]
          : [].slice.call(t[0].nodeName ? t : (e || o).querySelectorAll(t))
        : [];
    }

    function d(t, e) {
      t && t.some(e);
    }
    var s = {};

    function t(t, e, n, i) {
      return {
        by: t,
        depends: e,
        key: n,
        split: i,
      };
    }

    function a(t) {
      return (function e(n, t, i) {
        var o = i.indexOf(n);
        return (
          -1 == o
            ? (i.unshift(n),
              d(s[n].depends, function (t) {
                e(t, n, i);
              }))
            : ((t = i.indexOf(t)), i.splice(o, 1), i.splice(t, 0, n)),
          i
        );
      })(t, 0, []).map(
        ((e = s),
        function (t) {
          return e[t];
        })
      );
      var e;
    }

    function e(t) {
      s[t.by] = t;
    }

    function p(t, n, i, o, s) {
      t.normalize();
      var a = [],
        r = document.createDocumentFragment(),
        h = (o && a.push(t.previousSibling), []);
      return (
        f(t.childNodes).some(function (t) {
          var e;
          t.tagName && !t.hasChildNodes()
            ? h.push(t)
            : t.childNodes && t.childNodes.length
            ? (h.push(t), a.push.apply(a, p(t, n, i, o, s)))
            : (e = (t = t.wholeText || "").trim()).length &&
              (" " === t[0] && h.push(c(" ")),
              d(e.split(i), function (t, e) {
                e && s && h.push(l(r, "whitespace", " "));
                e = l(r, n, t);
                a.push(e), h.push(e);
              }),
              " " === t[t.length - 1] && h.push(c(" ")));
        }),
        d(h, function (t) {
          u(r, t);
        }),
        (t.innerHTML = ""),
        u(t, r),
        a
      );
    }
    var r = "words",
      n = t(r, 0, "word", function (t) {
        return p(t, "word", /\s+/, 0, 1);
      }),
      i = t("chars", [r], "char", function (t, n, e) {
        var i = [];
        return (
          d(e[r], function (t, e) {
            i.push.apply(i, p(t, "char", "", n.whitespace && e));
          }),
          i
        );
      });

    function h(e) {
      e = e || {};
      return f(e.target || "[data-splitting]").map(function (n) {
        var t,
          i,
          o = n["ðŸŒ"];
        return (
          (!e.force && o) ||
            ((o = n["ðŸŒ"] =
              {
                el: n,
              }),
            (t = a(e.by || "chars")),
            (i = (function (t, e) {
              for (var n in e) t[n] = e[n];
              return t;
            })({}, e)),
            d(t, function (t) {
              var e;
              t.split &&
                ((e = t.by),
                t.key,
                (t = t.split(n, i, o)),
                (o[e] = t),
                n.classList.add(e));
            }),
            n.classList.add("splitting")),
          o
        );
      });
    }
    return (
      (h.html = function (t) {
        var e = ((t = t || {}).target = l());
        return (e.innerHTML = t.content), h(t), e.outerHTML;
      }),
      (h.add = e)(n),
      e(i),
      h
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["exports"], e)
      : "undefined" != typeof exports
      ? e(exports)
      : (e((e = {})), (t.PinchZoom = e));
  })(this, function (t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      "function" != typeof Object.assign &&
        Object.defineProperty(Object, "assign", {
          value: function (t, e) {
            if (null == t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1; i < arguments.length; i++) {
              var o = arguments[i];
              if (null != o)
                for (var s in o)
                  Object.prototype.hasOwnProperty.call(o, s) && (n[s] = o[s]);
            }
            return n;
          },
          writable: !0,
          configurable: !0,
        }),
      "function" != typeof Array.from &&
        (Array.from = function (t) {
          return [].slice.call(t);
        });

    function s(t, e) {
      var n = document.createEvent("HTMLEvents");
      n.initEvent(e, !0, !1), t.dispatchEvent(n);
    }
    (i.prototype = {
      defaults: {
        tapZoomFactor: 2,
        zoomOutFactor: 1.3,
        animationDuration: 300,
        maxZoom: 4,
        minZoom: 0.5,
        draggableUnzoomed: !0,
        lockDragAxis: !1,
        setOffsetsOnce: !1,
        use2d: !0,
        zoomStartEventName: "pz_zoomstart",
        zoomUpdateEventName: "pz_zoomupdate",
        zoomEndEventName: "pz_zoomend",
        dragStartEventName: "pz_dragstart",
        dragUpdateEventName: "pz_dragupdate",
        dragEndEventName: "pz_dragend",
        doubleTapEventName: "pz_doubletap",
        verticalPadding: 0,
        horizontalPadding: 0,
        onZoomStart: null,
        onZoomEnd: null,
        onZoomUpdate: null,
        onDragStart: null,
        onDragEnd: null,
        onDragUpdate: null,
        onDoubleTap: null,
      },
      handleDragStart: function (t) {
        s(this.el, this.options.dragStartEventName),
          "function" == typeof this.options.onDragStart &&
            this.options.onDragStart(this, t),
          this.stopAnimation(),
          (this.lastDragPosition = !1),
          (this.hasInteraction = !0),
          this.handleDrag(t);
      },
      handleDrag: function (t) {
        t = this.getTouches(t)[0];
        this.drag(t, this.lastDragPosition),
          (this.offset = this.sanitizeOffset(this.offset)),
          (this.lastDragPosition = t);
      },
      handleDragEnd: function () {
        s(this.el, this.options.dragEndEventName),
          "function" == typeof this.options.onDragEnd &&
            this.options.onDragEnd(this, event),
          this.end();
      },
      handleZoomStart: function (t) {
        s(this.el, this.options.zoomStartEventName),
          "function" == typeof this.options.onZoomStart &&
            this.options.onZoomStart(this, t),
          this.stopAnimation(),
          (this.lastScale = 1),
          (this.nthZoom = 0),
          (this.lastZoomCenter = !1),
          (this.hasInteraction = !0);
      },
      handleZoom: function (t, e) {
        var t = this.getTouchCenter(this.getTouches(t)),
          n = e / this.lastScale;
        (this.lastScale = e),
          (this.nthZoom += 1),
          3 < this.nthZoom &&
            (this.scale(n, t), this.drag(t, this.lastZoomCenter)),
          (this.lastZoomCenter = t);
      },
      handleZoomEnd: function () {
        s(this.el, this.options.zoomEndEventName),
          "function" == typeof this.options.onZoomEnd &&
            this.options.onZoomEnd(this, event),
          this.end();
      },
      handleDoubleTap: function (t) {
        var e = this.getTouches(t)[0],
          n = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor,
          i = this.zoomFactor,
          o = function (t) {
            this.scaleTo(i + t * (n - i), e);
          }.bind(this);
        this.hasInteraction ||
          ((this.isDoubleTap = !0),
          n < i && (e = this.getCurrentZoomCenter()),
          this.animate(this.options.animationDuration, o, this.swing),
          s(this.el, this.options.doubleTapEventName),
          "function" == typeof this.options.onDoubleTap &&
            this.options.onDoubleTap(this, t));
      },
      computeInitialOffset: function () {
        this.initialOffset = {
          x:
            -Math.abs(
              this.el.offsetWidth * this.getInitialZoomFactor() -
                this.containPinch.offsetWidth
            ) / 2,
          y:
            -Math.abs(
              this.el.offsetHeight * this.getInitialZoomFactor() -
                this.containPinch.offsetHeight
            ) / 2,
        };
      },
      resetOffset: function () {
        (this.offset.x = this.initialOffset.x),
          (this.offset.y = this.initialOffset.y);
      },
      isImageLoaded: function (t) {
        return "IMG" === t.nodeName
          ? t.complete && 0 !== t.naturalHeight
          : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded);
      },
      setupOffsets: function () {
        (this.options.setOffsetsOnce && this._isOffsetsSet) ||
          ((this._isOffsetsSet = !0),
          this.computeInitialOffset(),
          this.resetOffset());
      },
      sanitizeOffset: function (t) {
        var e =
            this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor,
          n =
            this.el.offsetHeight *
            this.getInitialZoomFactor() *
            this.zoomFactor,
          e = e - this.getContainerX() + this.options.horizontalPadding,
          n = n - this.getContainerY() + this.options.verticalPadding,
          i = Math.max(e, 0),
          o = Math.max(n, 0),
          e = Math.min(e, 0) - this.options.horizontalPadding,
          n = Math.min(n, 0) - this.options.verticalPadding;
        return {
          x: Math.min(Math.max(t.x, e), i),
          y: Math.min(Math.max(t.y, n), o),
        };
      },
      scaleTo: function (t, e) {
        this.scale(t / this.zoomFactor, e);
      },
      scale: function (t, e) {
        (t = this.scaleZoomFactor(t)),
          this.addOffset({
            x: (t - 1) * (e.x + this.offset.x),
            y: (t - 1) * (e.y + this.offset.y),
          }),
          s(this.el, this.options.zoomUpdateEventName),
          "function" == typeof this.options.onZoomUpdate &&
            this.options.onZoomUpdate(this, event);
      },
      scaleZoomFactor: function (t) {
        var e = this.zoomFactor;
        return (
          (this.zoomFactor *= t),
          (this.zoomFactor = Math.min(
            this.options.maxZoom,
            Math.max(this.zoomFactor, this.options.minZoom)
          )),
          this.zoomFactor / e
        );
      },
      canDrag: function () {
        return (
          this.options.draggableUnzoomed ||
          ((t = this.zoomFactor), !((e = 1) - 0.01 < t && t < e + 0.01))
        );
        var t, e;
      },
      drag: function (t, e) {
        e &&
          (this.options.lockDragAxis
            ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y)
              ? this.addOffset({
                  x: -(t.x - e.x),
                  y: 0,
                })
              : this.addOffset({
                  y: -(t.y - e.y),
                  x: 0,
                })
            : this.addOffset({
                y: -(t.y - e.y),
                x: -(t.x - e.x),
              }),
          s(this.el, this.options.dragUpdateEventName),
          "function" == typeof this.options.onDragUpdate &&
            this.options.onDragUpdate(this, event));
      },
      getTouchCenter: function (t) {
        return this.getVectorAvg(t);
      },
      getVectorAvg: function (t) {
        return {
          x:
            t
              .map(function (t) {
                return t.x;
              })
              .reduce(o) / t.length,
          y:
            t
              .map(function (t) {
                return t.y;
              })
              .reduce(o) / t.length,
        };
      },
      addOffset: function (t) {
        this.offset = {
          x: this.offset.x + t.x,
          y: this.offset.y + t.y,
        };
      },
      sanitize: function () {
        this.zoomFactor < this.options.zoomOutFactor
          ? this.zoomOutAnimation()
          : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation();
      },
      isInsaneOffset: function (t) {
        var e = this.sanitizeOffset(t);
        return e.x !== t.x || e.y !== t.y;
      },
      sanitizeOffsetAnimation: function () {
        var e = this.sanitizeOffset(this.offset),
          n = this.offset.x,
          i = this.offset.y,
          t = function (t) {
            (this.offset.x = n + t * (e.x - n)),
              (this.offset.y = i + t * (e.y - i)),
              this.update();
          }.bind(this);
        this.animate(this.options.animationDuration, t, this.swing);
      },
      zoomOutAnimation: function () {
        var e, n, t;
        1 !== this.zoomFactor &&
          ((e = this.zoomFactor),
          (n = this.getCurrentZoomCenter()),
          (t = function (t) {
            this.scaleTo(e + t * (1 - e), n);
          }.bind(this)),
          this.animate(this.options.animationDuration, t, this.swing));
      },
      updateAspectRatio: function () {
        this.unsetContainerY(),
          null !== document.querySelector(".pinch-zoom-container") &&
            this.setContainerY(this.containPinch.parentNode.offsetHeight);
      },
      getInitialZoomFactor: function () {
        var t = this.containPinch.offsetWidth / this.el.offsetWidth,
          e = this.containPinch.offsetHeight / this.el.offsetHeight;
        return Math.min(t, e);
      },
      getAspectRatio: function () {
        return this.el.offsetWidth / this.el.offsetHeight;
      },
      getCurrentZoomCenter: function () {
        var t = this.offset.x - this.initialOffset.x,
          t = -1 * this.offset.x - t / (1 / this.zoomFactor - 1),
          e = this.offset.y - this.initialOffset.y;
        return {
          x: t,
          y: -1 * this.offset.y - e / (1 / this.zoomFactor - 1),
        };
      },
      getTouches: function (t) {
        var e = this.containPinch.getBoundingClientRect(),
          n = document.documentElement.scrollTop || document.body.scrollTop,
          i = document.documentElement.scrollLeft || document.body.scrollLeft,
          o = e.top + n,
          s = e.left + i;
        return Array.prototype.slice.call(t.touches).map(function (t) {
          return {
            x: t.pageX - s,
            y: t.pageY - o,
          };
        });
      },
      animate: function (n, i, o, s) {
        var a = new Date().getTime(),
          r = function () {
            var t, e;
            this.inAnimation &&
              ((e = (t = new Date().getTime() - a) / n),
              n <= t
                ? (i(1),
                  s && s(),
                  this.update(),
                  this.stopAnimation(),
                  this.update())
                : (o && (e = o(e)),
                  i(e),
                  this.update(),
                  requestAnimationFrame(r)));
          }.bind(this);
        (this.inAnimation = !0), requestAnimationFrame(r);
      },
      stopAnimation: function () {
        this.inAnimation = !1;
      },
      swing: function (t) {
        return -Math.cos(t * Math.PI) / 2 + 0.5;
      },
      getContainerX: function () {
        return this.containPinch.offsetWidth;
      },
      getContainerY: function () {
        return this.containPinch.offsetHeight;
      },
      setContainerY: function (t) {
        return (this.containPinch.style.height = t + "px");
      },
      unsetContainerY: function () {
        this.containPinch.style.height = null;
      },
      setupMarkup: function () {
        var t, e;
        (this.containPinch =
          ((t = '<div class="pinch-zoom-container"></div>'),
          ((e = document.implementation.createHTMLDocument("")).body.innerHTML =
            t),
          Array.from(e.body.children)[0])),
          this.el.parentNode.insertBefore(this.containPinch, this.el),
          this.containPinch.appendChild(this.el),
          (this.containPinch.style.overflow = "hidden"),
          (this.containPinch.style.position = "relative"),
          (this.el.style.webkitTransformOrigin = "0% 0%"),
          (this.el.style.mozTransformOrigin = "0% 0%"),
          (this.el.style.msTransformOrigin = "0% 0%"),
          (this.el.style.oTransformOrigin = "0% 0%"),
          (this.el.style.transformOrigin = "0% 0%"),
          (this.el.style.position = "absolute");
      },
      end: function () {
        (this.hasInteraction = !1), this.sanitize(), this.update();
      },
      bindEvents: function () {
        var e = this;
        n(this.containPinch, this),
          window.addEventListener("resize", this.update.bind(this)),
          Array.from(this.el.querySelectorAll("img")).forEach(function (t) {
            t.addEventListener("load", e.update.bind(e));
          }),
          "IMG" === this.el.nodeName &&
            this.el.addEventListener("load", this.update.bind(this));
      },
      update: function (o) {
        this.updatePlaned ||
          ((this.updatePlaned = !0),
          window.setTimeout(
            function () {
              (this.updatePlaned = !1),
                o &&
                  "resize" === o.type &&
                  (this.updateAspectRatio(), this.setupOffsets()),
                o &&
                  "load" === o.type &&
                  (this.updateAspectRatio(), this.setupOffsets());
              var t = this.getInitialZoomFactor() * this.zoomFactor,
                e = -this.offset.x / t,
                n = -this.offset.y / t,
                i =
                  "scale3d(" +
                  t +
                  ", " +
                  t +
                  ",1) translate3d(" +
                  e +
                  "px," +
                  n +
                  "px,0px)",
                t =
                  "scale(" +
                  t +
                  ", " +
                  t +
                  ") translate(" +
                  e +
                  "px," +
                  n +
                  "px)",
                e = function () {
                  this.clone &&
                    (this.clone.parentNode.removeChild(this.clone),
                    delete this.clone);
                }.bind(this);
              !this.options.use2d || this.hasInteraction || this.inAnimation
                ? ((this.is3d = !0),
                  e(),
                  (this.el.style.webkitTransform = i),
                  (this.el.style.mozTransform = t),
                  (this.el.style.msTransform = t),
                  (this.el.style.oTransform = t),
                  (this.el.style.transform = i))
                : (this.is3d &&
                    ((this.clone = this.el.cloneNode(!0)),
                    (this.clone.style.pointerEvents = "none"),
                    this.containPinch.appendChild(this.clone),
                    window.setTimeout(e, 100)),
                  (this.el.style.webkitTransform = t),
                  (this.el.style.mozTransform = t),
                  (this.el.style.msTransform = t),
                  (this.el.style.oTransform = t),
                  (this.el.style.transform = t),
                  (this.is3d = !1));
            }.bind(this),
            0
          ));
      },
      enable: function () {
        this.enabled = !0;
      },
      disable: function () {
        this.enabled = !1;
      },
    }),
      (n = function (t, n) {
        function e(t, e) {
          if (r !== t) {
            if (r && !t)
              switch (r) {
                case "zoom":
                  n.handleZoomEnd(e);
                  break;
                case "drag":
                  n.handleDragEnd(e);
              }
            switch (t) {
              case "zoom":
                n.handleZoomStart(e);
                break;
              case "drag":
                n.handleDragStart(e);
            }
          }
          r = t;
        }

        function i(t) {
          2 === h
            ? e("zoom")
            : 1 === h && n.canDrag()
            ? e("drag", t)
            : e(null, t);
        }

        function o(t) {
          return Array.from(t).map(function (t) {
            return {
              x: t.pageX,
              y: t.pageY,
            };
          });
        }

        function s(t, e) {
          var n = t.x - e.x,
            t = t.y - e.y;
          return Math.sqrt(n * n + t * t);
        }

        function a(t) {
          t.stopPropagation(), t.preventDefault();
        }
        var r = null,
          h = 0,
          c = null,
          u = null,
          l = !0;
        t.addEventListener("touchstart", function (t) {
          if (n.enabled) {
            (l = !0), (h = t.touches.length);
            var e = t,
              t = new Date().getTime();
            if (t - (c = 1 < h ? null : c) < 300)
              switch ((a(e), n.handleDoubleTap(e), r)) {
                case "zoom":
                  n.handleZoomEnd(e);
                  break;
                case "drag":
                  n.handleDragEnd(e);
              }
            else n.isDoubleTap = !1;
            1 === h && (c = t);
          }
        }),
          t.addEventListener("touchmove", function (t) {
            if (n.enabled && !n.isDoubleTap) {
              if (l) i(t), r && a(t), (u = o(t.touches));
              else {
                switch (r) {
                  case "zoom":
                    2 == u.length &&
                      2 == t.touches.length &&
                      n.handleZoom(
                        t,
                        (function (t, e) {
                          t = s(t[0], t[1]);
                          return s(e[0], e[1]) / t;
                        })(u, o(t.touches))
                      );
                    break;
                  case "drag":
                    n.handleDrag(t);
                }
                r && (a(t), n.update());
              }
              l = !1;
            }
          }),
          t.addEventListener("touchend", function (t) {
            n.enabled && ((h = t.touches.length), i(t));
          });
      });
    var n,
      e = i;

    function i(t, e) {
      (this.el = t),
        (this.zoomFactor = 1),
        (this.lastScale = 1),
        (this.offset = {
          x: 0,
          y: 0,
        }),
        (this.initialOffset = {
          x: 0,
          y: 0,
        }),
        (this.options = Object.assign({}, this.defaults, e)),
        this.setupMarkup(),
        this.bindEvents(),
        this.update(),
        this.isImageLoaded(this.el) &&
          (this.updateAspectRatio(), this.setupOffsets()),
        this.enable();
    }

    function o(t, e) {
      return t + e;
    }
    t.default = e;
  }),
  (function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? e(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], e)
      : e(((t = t || self).window = t.window || {}));
  })(this, function (t) {
    "use strict";

    function e() {
      return "undefined" != typeof window;
    }

    function n() {
      return i || (e() && (i = window.gsap) && i.registerPlugin && i);
    }

    function c(t) {
      return Math.round(1e4 * t) / 1e4;
    }

    function u(t) {
      return parseFloat(t || 0);
    }

    function d(t, e) {
      return u(t.getAttribute(e));
    }

    function p(t, e, n, i, o, s) {
      return T(Math.pow((u(n) - u(t)) * o, 2) + Math.pow((u(i) - u(e)) * s, 2));
    }

    function m(t) {
      console.warn(t);
    }

    function g(t) {
      return "non-scaling-stroke" === t.getAttribute("vector-effect");
    }

    function l(t) {
      if (!(t = v(t)[0])) return 0;
      var e,
        n,
        i,
        o,
        s = t.tagName.toLowerCase(),
        a = t.style,
        r = 1,
        h = 1;
      g(t) &&
        ((h = t.getScreenCTM()),
        (r = T(h.a * h.a + h.b * h.b)),
        (h = T(h.d * h.d + h.c * h.c)));
      try {
        o = t.getBBox();
      } catch (t) {
        m(
          "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
        );
      }
      var c = o || {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
        },
        u = c.x,
        l = c.y,
        f = c.width,
        c = c.height;
      if (
        ((o && (f || c)) ||
          !O[s] ||
          ((f = d(t, O[s][0])),
          (c = d(t, O[s][1])),
          "rect" !== s && "line" !== s && ((f *= 2), (c *= 2)),
          "line" === s &&
            ((u = d(t, "x1")),
            (l = d(t, "y1")),
            (f = Math.abs(f - u)),
            (c = Math.abs(c - l)))),
        "path" === s)
      )
        (o = a.strokeDasharray),
          (a.strokeDasharray = "none"),
          (e = t.getTotalLength() || 0),
          r !== h &&
            m(
              "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
            ),
          (e *= (r + h) / 2),
          (a.strokeDasharray = o);
      else if ("rect" === s) e = 2 * f * r + 2 * c * h;
      else if ("line" === s) e = p(u, l, u + f, l + c, r, h);
      else if ("polyline" === s || "polygon" === s)
        for (
          n = t.getAttribute("points").match(E) || [],
            "polygon" === s && n.push(n[0], n[1]),
            e = 0,
            i = 2;
          i < n.length;
          i += 2
        )
          e += p(n[i - 2], n[i - 1], n[i], n[i + 1], r, h) || 0;
      else
        ("circle" !== s && "ellipse" !== s) ||
          ((a = (f / 2) * r),
          (o = (c / 2) * h),
          (e = Math.PI * (3 * (a + o) - T((3 * a + o) * (a + 3 * o)))));
      return e || 0;
    }

    function f(t, e) {
      if (!(t = v(t)[0])) return [0, 0];
      e = e || l(t) + 1;
      var t = b.getComputedStyle(t),
        n = t.strokeDasharray || "",
        t = u(t.strokeDashoffset),
        i = n.indexOf(",");
      return (
        e <
          (n =
            (i = i < 0 ? n.indexOf(" ") : i) < 0
              ? e
              : u(n.substr(0, i)) || 1e-5) && (n = e),
        [Math.max(0, -t), Math.max(0, n - t)]
      );
    }

    function y() {
      e() &&
        ((b = window),
        (w = i = n()),
        (v = i.utils.toArray),
        (x = -1 !== ((b.navigator || {}).userAgent || "").indexOf("Edge")));
    }
    var i,
      v,
      b,
      x,
      w,
      E = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      O = {
        rect: ["width", "height"],
        circle: ["r", "r"],
        ellipse: ["rx", "ry"],
        line: ["x2", "y2"],
      },
      T = Math.sqrt,
      o = {
        version: "3.2.6",
        name: "drawSVG",
        register: function (t) {
          (i = t), y();
        },
        init: function (t, e) {
          if (!t.getBBox) return !1;
          w || y();
          var n,
            i,
            o,
            s,
            a,
            r,
            h = l(t) + 1;
          return (
            (this._style = t.style),
            (this._target = t),
            e + "" == "true"
              ? (e = "0 100%")
              : e
              ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
              : (e = "0 0"),
            (i = e),
            (s = (n = f(t, (o = h)))[0]),
            (a = i.indexOf(" ")),
            (s =
              a < 0
                ? ((r = void 0 !== s ? s + "" : i), i)
                : ((r = i.substr(0, a)), i.substr(a + 1))),
            (r = ~r.indexOf("%") ? (u(r) / 100) * o : u(r)),
            (i =
              (s = ~s.indexOf("%") ? (u(s) / 100) * o : u(s)) < r
                ? [s, r]
                : [r, s]),
            (this._length = c(h + 10)),
            0 === n[0] && 0 === i[0]
              ? ((a = Math.max(1e-5, i[1] - h)),
                (this._dash = c(h + a)),
                (this._offset = c(h - n[1] + a)),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  c(h - i[1] + a)
                )))
              : ((this._dash = c(n[1] - n[0]) || 1e-6),
                (this._offset = c(-n[0])),
                (this._dashPT = this.add(
                  this,
                  "_dash",
                  this._dash,
                  c(i[1] - i[0]) || 1e-5
                )),
                (this._offsetPT = this.add(
                  this,
                  "_offset",
                  this._offset,
                  c(-i[0])
                ))),
            x &&
              (o = b.getComputedStyle(t)).strokeLinecap !== o.strokeLinejoin &&
              ((i = u(o.strokeMiterlimit)),
              this.add(t.style, "strokeMiterlimit", i, i + 0.01)),
            (this._live = g(t) || ~(e + "").indexOf("live")),
            this._props.push("drawSVG"),
            1
          );
        },
        render: function (t, e) {
          var n,
            i,
            o,
            s = e._pt,
            a = e._style;
          if (s) {
            for (
              e._live &&
              (n = l(e._target) + 11) !== e._length &&
              ((i = n / e._length),
              (e._length = n),
              (e._offsetPT.s *= i),
              (e._offsetPT.c *= i),
              e._dashPT
                ? ((e._dashPT.s *= i), (e._dashPT.c *= i))
                : (e._dash *= i));
              s;

            )
              s.r(t, s.d), (s = s._next);
            (i = e._dash),
              (o = e._offset),
              (n = e._length),
              (a.strokeDashoffset = e._offset),
              1 !== t && t
                ? (a.strokeDasharray = i + "px," + n + "px")
                : (i - o < 0.001 && n - i <= 10 && (a.strokeDashoffset = o + 1),
                  (a.strokeDasharray =
                    o < 0.001 && n - i <= 10
                      ? "none"
                      : o === i
                      ? "0px, 999999px"
                      : i + "px," + n + "px"));
          }
        },
        getLength: l,
        getPosition: f,
      };
    n() && i.registerPlugin(o),
      (t.DrawSVGPlugin = o),
      (t.default = o),
      "undefined" == typeof window || window !== t
        ? Object.defineProperty(t, "__esModule", {
            value: !0,
          })
        : delete t.default;
  });
// var d = function () {
//   var t = document.createElement("script");
//   (t.id = "js_crypt"),
//     (t.src = httptemplate + "js/crypt.js"),
//     (t.type = "text/javascript"),
//     document.getElementById("js_crypt") || document.body.appendChild(t),
//     setTimeout(function () {
//       var t = document.querySelector(".r-t a")
//           ? document.querySelector(".r-t a").textContent
//           : void 0,
//         e = document.querySelector(".r-t p strong")
//           ? document.querySelector(".r-t p strong").textContent
//           : void 0;

//       function n() {
//         document.documentElement.remove(), console.clear();
//       }
//       var i = window.location.href.includes("sen");
//       (null != t && null != e) || n(),
//         "undefined" == typeof CryptoJS && n(),
//         0 == i && n();
//       CryptoJS.AES.decrypt(
//         "U2FsdGVkX18v8iXuTTq0vYDu0Cqc/63WLjyU9HOiYa8=",
//         t
//       ).toString(CryptoJS.enc.Utf8) !== e && n();
//     }, 500);
// };

function defineProperty(t, e, i) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}

function ownKeys(e, t) {
  var i,
    s = Object.keys(e);
  return (
    Object.getOwnPropertySymbols &&
      ((i = Object.getOwnPropertySymbols(e)),
      t &&
        (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
      s.push.apply(s, i)),
    s
  );
}

function objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(i), !0).forEach(function (t) {
          defineProperty(e, t, i[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
      : ownKeys(Object(i)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
  }
  return e;
}

function Inherits(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0,
    },
  })),
    e && setPrototypeOf(t, e);
}

function getPrototypeOf(t) {
  return (getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}

function setPrototypeOf(t, e) {
  return (setPrototypeOf =
    Object.setPrototypeOf ||
    function (t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}

function isNativeReflectConstruct() {
  if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ("function" == typeof Proxy) return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch (t) {
    return !1;
  }
}

function assertThisInitialized(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}

function possibleConstructorReturn(t, e) {
  return !e || ("object" != typeof e && "function" != typeof e)
    ? assertThisInitialized(t)
    : e;
}

function createSuper(i) {
  var s = isNativeReflectConstruct();
  return function () {
    var t,
      e = getPrototypeOf(i);
    return possibleConstructorReturn(
      this,
      s
        ? ((t = getPrototypeOf(this).constructor),
          Reflect.construct(e, arguments, t))
        : e.apply(this, arguments)
    );
  };
}

function superPropBase(t, e) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(t, e) &&
    null !== (t = getPrototypeOf(t));

  );
  return t;
}

function Get(t, e, i) {
  return (Get =
    "undefined" != typeof Reflect && Reflect.get
      ? Reflect.get
      : function (t, e, i) {
          var t = superPropBase(t, e);
          if (t)
            return (t = Object.getOwnPropertyDescriptor(t, e)).get
              ? t.get.call(i)
              : t.value;
        })(t, e, i || t);
}

function slicedToArray(t, e) {
  return (
    arrayWithHoles(t) ||
    iterableToArrayLimit(t, e) ||
    unsupportedIterableToArray(t, e) ||
    nonIterableRest()
  );
}

function toConsumableArray(t) {
  return (
    arrayWithoutHoles(t) ||
    iterableToArray(t) ||
    unsupportedIterableToArray(t) ||
    nonIterableSpread()
  );
}

function arrayWithoutHoles(t) {
  if (Array.isArray(t)) return arrayLikeToArray(t);
}

function arrayWithHoles(t) {
  if (Array.isArray(t)) return t;
}

function iterableToArray(t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
    return Array.from(t);
}

function iterableToArrayLimit(t, e) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
    var i = [],
      s = !0,
      n = !1,
      o = void 0;
    try {
      for (
        var r, l = t[Symbol.iterator]();
        !(s = (r = l.next()).done) && (i.push(r.value), !e || i.length !== e);
        s = !0
      );
    } catch (t) {
      (n = !0), (o = t);
    } finally {
      try {
        s || null == l.return || l.return();
      } finally {
        if (n) throw o;
      }
    }
    return i;
  }
}

function unsupportedIterableToArray(t, e) {
  var i;
  if (t)
    return "string" == typeof t
      ? arrayLikeToArray(t, e)
      : "Map" ===
          (i =
            "Object" === (i = Object.prototype.toString.call(t).slice(8, -1)) &&
            t.constructor
              ? t.constructor.name
              : i) || "Set" === i
      ? Array.from(t)
      : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
      ? arrayLikeToArray(t, e)
      : void 0;
}

function arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
  return s;
}

function nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
var commonjsGlobal =
  "undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : "undefined" != typeof self
    ? self
    : {};

function createCommonjsModule(t, e) {
  return (
    t(
      (e = {
        exports: {},
      }),
      e.exports
    ),
    e.exports
  );
}
var getOwnPropertySymbols = Object.getOwnPropertySymbols,
  hasOwnProperty = Object.prototype.hasOwnProperty,
  propIsEnumerable = Object.prototype.propertyIsEnumerable;
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).BTQScroll =
        e());
})(this, function () {
  "use strict";
  var e = (function () {
    try {
      if (Object.assign) {
        var t = new String("abc");
        if (((t[5] = "de"), "5" !== Object.getOwnPropertyNames(t)[0])) {
          for (var e = {}, i = 0; i < 10; i++)
            e["_" + String.fromCharCode(i)] = i;
          var s,
            n = Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
          if ("0123456789" === n.join(""))
            return (
              (s = {}),
              "abcdefghijklmnopqrst".split("").forEach(function (t) {
                s[t] = t;
              }),
              "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, s)).join("")
                ? 1
                : void 0
            );
        }
      }
    } catch (t) {}
  })()
    ? Object.assign
    : function (t, e) {
        for (
          var i,
            s = (function (t) {
              if (null == t)
                throw new TypeError(
                  "Object.assign cannot be called with null or undefined"
                );
              return Object(t);
            })(t),
            n = 1;
          n < arguments.length;
          n++
        ) {
          for (var o in (i = Object(arguments[n])))
            hasOwnProperty.call(i, o) && (s[o] = i[o]);
          if (getOwnPropertySymbols)
            for (var r = getOwnPropertySymbols(i), l = 0; l < r.length; l++)
              propIsEnumerable.call(i, r[l]) && (s[r[l]] = i[r[l]]);
        }
        return s;
      };

  function t() {}
  t.prototype = {
    on: function (t, e, i) {
      var s = this.e || (this.e = {});
      return (
        (s[t] || (s[t] = [])).push({
          fn: e,
          ctx: i,
        }),
        this
      );
    },
    once: function (t, e, i) {
      var s = this;

      function n() {
        s.off(t, n), e.apply(i, arguments);
      }
      return (n._ = e), this.on(t, n, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          s = 0,
          n = i.length;
        s < n;
        s++
      )
        i[s].fn.apply(i[s].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        s = i[t],
        n = [];
      if (s && e)
        for (var o = 0, r = s.length; o < r; o++)
          s[o].fn !== e && s[o].fn._ !== e && n.push(s[o]);
      return n.length ? (i[t] = n) : delete i[t], this;
    },
  };

  function i(t) {
    if (!t) return console.warn("bindAll requires at least one argument.");
    var e = Array.prototype.slice.call(arguments, 1);
    if (0 === e.length)
      for (var i in t)
        l.call(t, i) &&
          "function" == typeof t[i] &&
          "[object Function]" == r.call(t[i]) &&
          e.push(i);
    for (var s = 0; s < e.length; s++) {
      var n = e[s];
      t[n] = (function (t, e) {
        return function () {
          return t.apply(e, arguments);
        };
      })(t[n], t);
    }
  }
  var s = t,
    n = createCommonjsModule(function (t, e) {
      !function () {
        function t(t, e, i, s) {
          (this.stability = null != t ? Math.abs(t) : 8),
            (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
            (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
            (this.delay = null != s ? s : 150),
            (this.lastUpDeltas = function () {
              for (
                var t = [], e = 1, i = 2 * this.stability;
                1 <= i ? e <= i : i <= e;
                1 <= i ? e++ : e--
              )
                t.push(null);
              return t;
            }.call(this)),
            (this.lastDownDeltas = function () {
              for (
                var t = [], e = 1, i = 2 * this.stability;
                1 <= i ? e <= i : i <= e;
                1 <= i ? e++ : e--
              )
                t.push(null);
              return t;
            }.call(this)),
            (this.deltasTimestamp = function () {
              for (
                var t = [], e = 1, i = 2 * this.stability;
                1 <= i ? e <= i : i <= e;
                1 <= i ? e++ : e--
              )
                t.push(null);
              return t;
            }.call(this));
        }
        (null !== e ? e : this).Lethargy =
          ((t.prototype.check = function (t) {
            var e;
            return (
              null != (t = t.originalEvent || t).wheelDelta
                ? (e = t.wheelDelta)
                : null != t.deltaY
                ? (e = -40 * t.deltaY)
                : (null == t.detail && 0 !== t.detail) || (e = -40 * t.detail),
              this.deltasTimestamp.push(Date.now()),
              this.deltasTimestamp.shift(),
              0 < e
                ? (this.lastUpDeltas.push(e),
                  this.lastUpDeltas.shift(),
                  this.isInertia(1))
                : (this.lastDownDeltas.push(e),
                  this.lastDownDeltas.shift(),
                  this.isInertia(-1))
            );
          }),
          (t.prototype.isInertia = function (t) {
            var e,
              i,
              s,
              n = -1 === t ? this.lastDownDeltas : this.lastUpDeltas;
            return null === n[0]
              ? t
              : !(
                  this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                    Date.now() && n[0] === n[2 * this.stability - 1]
                ) &&
                  ((e = n.slice(0, this.stability)),
                  (n = n.slice(this.stability, 2 * this.stability)),
                  (s = e.reduce(function (t, e) {
                    return t + e;
                  })),
                  (i = n.reduce(function (t, e) {
                    return t + e;
                  })),
                  (s = s / e.length),
                  (e = i / n.length),
                  Math.abs(s) < Math.abs(e * this.tolerance) &&
                    this.sensitivity < Math.abs(e) &&
                    t);
          }),
          (t.prototype.showLastUpDeltas = function () {
            return this.lastUpDeltas;
          }),
          (t.prototype.showLastDownDeltas = function () {
            return this.lastDownDeltas;
          }),
          t);
      }.call(commonjsGlobal);
    }),
    o = {
      hasWheelEvent: "onwheel" in document,
      hasMouseWheelEvent: "onmousewheel" in document,
      hasTouch:
        "ontouchstart" in window ||
        window.TouchEvent ||
        (window.DocumentTouch && document instanceof DocumentTouch),
      hasTouchWin: navigator.msMaxTouchPoints && 1 < navigator.msMaxTouchPoints,
      hasPointer: !!window.navigator.msPointerEnabled,
      hasKeyDown: "onkeydown" in document,
      isFirefox: -1 < navigator.userAgent.indexOf("Firefox"),
    },
    r = Object.prototype.toString,
    l = Object.prototype.hasOwnProperty;
  var a = n.Lethargy,
    c = "virtualscroll",
    h = m,
    d = 37,
    u = 38,
    f = 39,
    p = 40,
    y = 32;
  createCommonjsModule(function (t, e) {
    function i() {
      var t,
        s,
        l,
        a,
        c = window,
        h = document;

      function d(t, e) {
        (this.scrollLeft = t), (this.scrollTop = e);
      }

      function n(t) {
        if (
          null === t ||
          "object" != typeof t ||
          void 0 === t.behavior ||
          "auto" === t.behavior ||
          "instant" === t.behavior
        )
          return !0;
        if ("object" == typeof t && "smooth" === t.behavior) return !1;
        throw new TypeError(
          "behavior member of ScrollOptions " +
            t.behavior +
            " is not a valid value for enumeration ScrollBehavior."
        );
      }

      function o(t, e) {
        return "Y" === e
          ? t.clientHeight + ROUNDING_TOLERANCE < t.scrollHeight
          : "X" === e
          ? t.clientWidth + ROUNDING_TOLERANCE < t.scrollWidth
          : void 0;
      }

      function r(t, e) {
        t = c.getComputedStyle(t, null)["overflow" + e];
        return "auto" === t || "scroll" === t;
      }

      function u(t) {
        for (
          ;
          t !== h.body &&
          !1 ===
            ((i = void 0),
            (i = o((e = t), "Y") && r(e, "Y")),
            (e = o(e, "X") && r(e, "X")),
            i || e);

        )
          t = t.parentNode || t.host;
        var e, i;
        return t;
      }

      function f(t) {
        var e = a(),
          e = 1 < (e = (e - t.startTime) / s) ? 1 : e,
          e = 0.5 * (1 - Math.cos(Math.PI * e)),
          i = t.startX + (t.x - t.startX) * e,
          e = t.startY + (t.y - t.startY) * e;
        t.method.call(t.scrollable, i, e),
          (i === t.x && e === t.y) || c.requestAnimationFrame(f.bind(c, t));
      }

      function p(t, e, i) {
        var s,
          n,
          o,
          r = a(),
          t =
            t === h.body
              ? ((n = (s = c).scrollX || c.pageXOffset),
                (o = c.scrollY || c.pageYOffset),
                l.scroll)
              : ((n = (s = t).scrollLeft), (o = t.scrollTop), d);
        f({
          scrollable: s,
          method: t,
          startTime: r,
          startX: n,
          startY: o,
          x: e,
          y: i,
        });
      }
      ("scrollBehavior" in h.documentElement.style &&
        !0 !== c.__forceSmoothScrollPolyfill__) ||
        ((t = c.HTMLElement || c.Element),
        (s = 468),
        (l = {
          scroll: c.scroll || c.scrollTo,
          scrollBy: c.scrollBy,
          elementScroll: t.prototype.scroll || d,
          scrollIntoView: t.prototype.scrollIntoView,
        }),
        (a =
          c.performance && c.performance.now
            ? c.performance.now.bind(c.performance)
            : Date.now),
        (c.scroll = c.scrollTo =
          function () {
            void 0 !== arguments[0] &&
              (!0 === n(arguments[0])
                ? l.scroll.call(
                    c,
                    void 0 !== arguments[0].left
                      ? arguments[0].left
                      : "object" != typeof arguments[0]
                      ? arguments[0]
                      : c.scrollX || c.pageXOffset,
                    void 0 !== arguments[0].top
                      ? arguments[0].top
                      : void 0 !== arguments[1]
                      ? arguments[1]
                      : c.scrollY || c.pageYOffset
                  )
                : p.call(
                    c,
                    h.body,
                    void 0 !== arguments[0].left
                      ? ~~arguments[0].left
                      : c.scrollX || c.pageXOffset,
                    void 0 !== arguments[0].top
                      ? ~~arguments[0].top
                      : c.scrollY || c.pageYOffset
                  ));
          }),
        (c.scrollBy = function () {
          void 0 !== arguments[0] &&
            (n(arguments[0])
              ? l.scrollBy.call(
                  c,
                  void 0 !== arguments[0].left
                    ? arguments[0].left
                    : "object" != typeof arguments[0]
                    ? arguments[0]
                    : 0,
                  void 0 !== arguments[0].top
                    ? arguments[0].top
                    : void 0 !== arguments[1]
                    ? arguments[1]
                    : 0
                )
              : p.call(
                  c,
                  h.body,
                  ~~arguments[0].left + (c.scrollX || c.pageXOffset),
                  ~~arguments[0].top + (c.scrollY || c.pageYOffset)
                ));
        }),
        (t.prototype.scroll = t.prototype.scrollTo =
          function () {
            if (void 0 !== arguments[0])
              if (!0 === n(arguments[0])) {
                if ("number" == typeof arguments[0] && void 0 === arguments[1])
                  throw new SyntaxError("Value could not be converted");
                l.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left
                    : "object" != typeof arguments[0]
                    ? ~~arguments[0]
                    : this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top
                    : void 0 !== arguments[1]
                    ? ~~arguments[1]
                    : this.scrollTop
                );
              } else {
                var t = arguments[0].left,
                  e = arguments[0].top;
                p.call(
                  this,
                  this,
                  void 0 === t ? this.scrollLeft : ~~t,
                  void 0 === e ? this.scrollTop : ~~e
                );
              }
          }),
        (t.prototype.scrollBy = function () {
          void 0 !== arguments[0] &&
            (!0 === n(arguments[0])
              ? l.elementScroll.call(
                  this,
                  void 0 !== arguments[0].left
                    ? ~~arguments[0].left + this.scrollLeft
                    : ~~arguments[0] + this.scrollLeft,
                  void 0 !== arguments[0].top
                    ? ~~arguments[0].top + this.scrollTop
                    : ~~arguments[1] + this.scrollTop
                )
              : this.scroll({
                  left: ~~arguments[0].left + this.scrollLeft,
                  top: ~~arguments[0].top + this.scrollTop,
                  behavior: arguments[0].behavior,
                }));
        }),
        (t.prototype.scrollIntoView = function () {
          var t, e, i;
          !0 === n(arguments[0])
            ? l.scrollIntoView.call(
                this,
                void 0 === arguments[0] || arguments[0]
              )
            : ((e = (t = u(this)).getBoundingClientRect()),
              (i = this.getBoundingClientRect()),
              t !== h.body
                ? (p.call(
                    this,
                    t,
                    t.scrollLeft + i.left - e.left,
                    t.scrollTop + i.top - e.top
                  ),
                  "fixed" !== c.getComputedStyle(t).position &&
                    c.scrollBy({
                      left: e.left,
                      top: e.top,
                      behavior: "smooth",
                    }))
                : c.scrollBy({
                    left: i.left,
                    top: i.top,
                    behavior: "smooth",
                  }));
        }));
    }
    t.exports = {
      polyfill: i,
    };
  }).polyfill;

  function m(t) {
    i(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = e(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new a()),
      (this._emitter = new s()),
      (this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0,
      }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = {
          passive: this.options.passive,
        });
  }

  function v(t, e, i) {
    return (1 - i) * t + i * e;
  }

  function A(t) {
    var e,
      i = {};
    if (window.getComputedStyle)
      return (
        (e = (t =
          (t = getComputedStyle(t)).transform ||
          t.webkitTransform ||
          t.mozTransform).match(/^matrix3d\((.+)\)$/))
          ? ((i.x = e ? parseFloat(e[1].split(", ")[12]) : 0),
            (i.y = e ? parseFloat(e[1].split(", ")[13]) : 0))
          : ((e = t.match(/^matrix\((.+)\)$/)),
            (i.x = e ? parseFloat(e[1].split(", ")[4]) : 0),
            (i.y = e ? parseFloat(e[1].split(", ")[5]) : 0)),
        i
      );
  }

  function E(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (m.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(c, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (m.prototype._onWheel = function (t) {
      var e,
        i = this.options;
      (this._lethargy && !1 === this._lethargy.check(t)) ||
        (((e = this._event).deltaX = t.wheelDeltaX || -1 * t.deltaX),
        (e.deltaY = t.wheelDeltaY || -1 * t.deltaY),
        o.isFirefox &&
          1 == t.deltaMode &&
          ((e.deltaX *= i.firefoxMultiplier),
          (e.deltaY *= i.firefoxMultiplier)),
        (e.deltaX *= i.mouseMultiplier),
        (e.deltaY *= i.mouseMultiplier),
        this._notify(t));
    }),
    (m.prototype._onMouseWheel = function (t) {
      var e;
      (this.options.limitInertia && !1 === this._lethargy.check(t)) ||
        (((e = this._event).deltaX = t.wheelDeltaX || 0),
        (e.deltaY = t.wheelDeltaY || t.wheelDelta),
        this._notify(t));
    }),
    (m.prototype._onTouchStart = function (t) {
      t = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = t.pageX), (this.touchStartY = t.pageY);
    }),
    (m.prototype._onTouchMove = function (t) {
      var e = this.options,
        i =
          (e.preventTouch &&
            !t.target.classList.contains(e.unpreventTouchClass) &&
            t.preventDefault(),
          this._event),
        s = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (s.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (s.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = s.pageX),
        (this.touchStartY = s.pageY),
        this._notify(t);
    }),
    (m.prototype._onKeyDown = function (t) {
      var e = this._event,
        i = ((e.deltaX = e.deltaY = 0), window.innerHeight - 40);
      switch (t.keyCode) {
        case d:
        case u:
          e.deltaY = this.options.keyStep;
          break;
        case f:
        case p:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case y:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (m.prototype._bind = function () {
      o.hasWheelEvent &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        o.hasMouseWheelEvent &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        o.hasTouch &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        o.hasPointer &&
          o.hasTouchWin &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        o.hasKeyDown &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (m.prototype._unbind = function () {
      o.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
        o.hasMouseWheelEvent &&
          this.el.removeEventListener("mousewheel", this._onMouseWheel),
        o.hasTouch &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        o.hasPointer &&
          o.hasTouchWin &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        o.hasKeyDown &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (m.prototype.on = function (t, e) {
      this._emitter.on(c, t, e);
      t = this._emitter.e;
      t && t[c] && 1 === t[c].length && this._bind();
    }),
    (m.prototype.off = function (t, e) {
      this._emitter.off(c, t, e);
      t = this._emitter.e;
      (!t[c] || t[c].length <= 0) && this._unbind();
    }),
    (m.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (m.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var S = 4,
    T = 1e-7,
    k = 10,
    b = "function" == typeof Float32Array;

  function g(t, e) {
    return 1 - 3 * e + 3 * t;
  }

  function O(t, e, i) {
    return ((g(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
  }

  function C(t, e, i) {
    return 3 * g(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e;
  }

  function L(t) {
    return t;
  }

  function w(g, e, w, i) {
    if (!(0 <= g && g <= 1 && 0 <= w && w <= 1))
      throw new Error("bezier x values must be in [0, 1] range");
    if (g === e && w === i) return L;
    for (var x = new (b ? Float32Array : Array)(11), t = 0; t < 11; ++t)
      x[t] = O(0.1 * t, g, w);

    function s(t) {
      for (var e = 0, i = 1; 10 !== i && x[i] <= t; ++i) e += 0.1;
      var s = e + 0.1 * ((t - x[--i]) / (x[i + 1] - x[i])),
        n = C(s, g, w);
      if (0.001 <= n) {
        for (var o = t, r = s, l = g, a = w, c = 0; c < S; ++c) {
          var h = C(r, l, a);
          if (0 === h) return r;
          r -= (O(r, l, a) - o) / h;
        }
        return r;
      }
      if (0 === n) return s;
      for (
        var d, u, f = t, p = e, y = e + 0.1, m = g, v = w, b = 0;
        0 < (d = O((u = p + (y - p) / 2), m, v) - f) ? (y = u) : (p = u),
          Math.abs(d) > T && ++b < k;

      );
      return u;
    }
    return function (t) {
      return 0 === t ? 0 : 1 === t ? 1 : O(s(t), e, i);
    };
  }
  var x = 38,
    P = 40,
    H = 32,
    D = 9,
    R = 33,
    I = 34,
    Y = 36,
    z = 35,
    j =
      ((n = (MacBrowser, 0.1)),
      {
        el: document.body,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        initPosition: {
          x: 0,
          y: 0,
        },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: n,
        class: "on-show",
        scrollbarContainer: !1,
        scrollbarClass: "scrollbar",
        scrollingClass: "scroll-scrolling",
        draggingClass: "scroll-dragging",
        smoothClass: "smooth-body",
        initClass: "scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
      }),
    n =
      (createClass(M, [
        {
          key: "init",
          value: function () {
            this.initEvents();
          },
        },
        {
          key: "checkScroll",
          value: function () {
            this.dispatchScroll();
          },
        },
        {
          key: "checkResize",
          value: function () {
            var t = this;
            this.resizeTick ||
              ((this.resizeTick = !0),
              requestAnimationFrame(function () {
                t.resize(), (t.resizeTick = !1);
              }));
          },
        },
        {
          key: "resize",
          value: function () {},
        },
        {
          key: "checkContext",
          value: function () {
            this.reloadOnContextChange &&
              (Mobile.matches
                ? (this.context = "isMobile")
                : (this.context = "isDesktop"),
              oldContext != this.context &&
                ("isDesktop" == oldContext ? this : this[oldContext]).smooth !=
                  ("isDesktop" == this.context ? this : this[this.context])
                    .smooth &&
                window.location.reload());
          },
        },
        {
          key: "initEvents",
          value: function () {
            var e = this;
            (this.scrollToEls = this.el.querySelectorAll(
              "[data-".concat(this.name, "-to]")
            )),
              (this.setScrollTo = this.setScrollTo.bind(this)),
              this.scrollToEls.forEach(function (t) {
                t.addEventListener("click", e.setScrollTo, !1);
              });
          },
        },
        {
          key: "setScrollTo",
          value: function (t) {
            t.preventDefault(),
              this.scrollTo(
                t.currentTarget.getAttribute(
                  "data-".concat(this.name, "-href")
                ) || t.currentTarget.getAttribute("href"),
                {
                  offset: t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-offset")
                  ),
                }
              );
          },
        },
        {
          key: "addElements",
          value: function () {},
        },
        {
          key: "detectElements",
          value: function (s) {
            var n = this,
              o = this.instance.scroll.y,
              r = o + this.windowHeight,
              l = this.instance.scroll.x,
              a = l + this.windowWidth;
            Object.entries(this.els).forEach(function (t) {
              var e,
                t = slicedToArray(t, 2),
                i = t[0],
                t = t[1];
              !t ||
                (t.inView && !s) ||
                ("horizontal" === n.direction
                  ? a >= t.left && l < t.right && n.setInView(t, i)
                  : r >= t.top && o < t.bottom && n.setInView(t, i)),
                t &&
                  t.inView &&
                  ("horizontal" === n.direction
                    ? ((e = t.right - t.left),
                      (t.progress =
                        (n.instance.scroll.x - (t.left - n.windowWidth)) /
                        (e + n.windowWidth)),
                      (a < t.left || l > t.right) && n.setOutOfView(t, i))
                    : ((e = t.bottom - t.top),
                      (t.progress =
                        (n.instance.scroll.y - (t.top - n.windowHeight)) /
                        (e + n.windowHeight)),
                      (r < t.top || o > t.bottom) && n.setOutOfView(t, i)));
            }),
              (this.hasScrollTicking = !1);
          },
        },
        {
          key: "setInView",
          value: function (t, e) {
            (this.els[e].inView = !0),
              t.el.classList.add(t.class),
              (this.currentElements[e] = t).call &&
                this.hasCallEventSet &&
                (this.dispatchCall(t, "enter"),
                t.repeat || (this.els[e].call = !1));
          },
        },
        {
          key: "setOutOfView",
          value: function (t, e) {
            var i = this;
            (this.els[e].inView = !1),
              Object.keys(this.currentElements).forEach(function (t) {
                t === e && delete i.currentElements[t];
              }),
              t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
              t.repeat && t.el.classList.remove(t.class);
          },
        },
        {
          key: "dispatchCall",
          value: function (t, e) {
            (this.callWay = e),
              (this.callValue = t.call.split(",").map(function (t) {
                return t.trim();
              })),
              (this.callObj = t),
              1 == this.callValue.length &&
                (this.callValue = this.callValue[0]);
            e = new Event(this.namespace + "call");
            this.el.dispatchEvent(e);
          },
        },
        {
          key: "dispatchScroll",
          value: function () {
            var t = new Event(this.namespace + "scroll");
            this.el.dispatchEvent(t);
          },
        },
        {
          key: "setEvents",
          value: function (t, e) {
            this.listeners[t] || (this.listeners[t] = []);
            var i = this.listeners[t];
            i.push(e),
              1 === i.length &&
                this.el.addEventListener(
                  this.namespace + t,
                  this.checkEvent,
                  !1
                ),
              "call" === t &&
                ((this.hasCallEventSet = !0), this.detectElements(!0));
          },
        },
        {
          key: "unsetEvents",
          value: function (t, e) {
            var i;
            !this.listeners[t] ||
              (e = (i = this.listeners[t]).indexOf(e)) < 0 ||
              (i.splice(e, 1),
              0 === i.index &&
                this.el.removeEventListener(
                  this.namespace + t,
                  this.checkEvent,
                  !1
                ));
          },
        },
        {
          key: "checkEvent",
          value: function (t) {
            var e = this,
              i = t.type.replace(this.namespace, ""),
              t = this.listeners[i];
            t &&
              0 !== t.length &&
              t.forEach(function (t) {
                switch (i) {
                  case "scroll":
                    return t(e.instance);
                  case "call":
                    return t(e.callValue, e.callWay, e.callObj);
                  default:
                    return t();
                }
              });
          },
        },
        {
          key: "startScroll",
          value: function () {},
        },
        {
          key: "stopScroll",
          value: function () {},
        },
        {
          key: "setScroll",
          value: function (t, e) {
            this.instance.scroll = {
              x: 0,
              y: 0,
            };
          },
        },
        {
          key: "destroy",
          value: function () {
            var e = this;
            window.removeEventListener("resize", this.checkResize, !1),
              Object.keys(this.listeners).forEach(function (t) {
                e.el.removeEventListener(e.namespace + t, e.checkEvent, !1);
              }),
              (this.listeners = {}),
              this.scrollToEls &&
                this.scrollToEls.forEach(function (t) {
                  t.removeEventListener("click", e.setScrollTo, !1);
                }),
              document
                .querySelectorAll(
                  "[data-scroll],[data-scroll-section], .smooth-scroll"
                )
                .forEach(function (t, e) {
                  t.style = "";
                }),
              this.html.classList.remove(this.initClass);
          },
        },
      ]),
      M);

  function M() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    classCallCheck(this, M),
      Object.assign(this, j, t),
      (this.namespace = "BTQ-Dev"),
      (this.html = document.body),
      (this.windowHeight = window.innerHeight),
      (this.windowWidth = window.innerWidth),
      (this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2,
      }),
      (this.els = {}),
      (this.currentElements = {}),
      (this.listeners = {}),
      (this.hasScrollTicking = !1),
      (this.hasCallEventSet = !1),
      (this.checkScroll = this.checkScroll.bind(this)),
      (this.checkResize = this.checkResize.bind(this)),
      (this.checkEvent = this.checkEvent.bind(this)),
      (this.instance = {
        scroll: {
          x: 0,
          y: 0,
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight,
        },
        currentElements: this.currentElements,
      }),
      "horizontal" === this.direction
        ? (this.directionAxis = "x")
        : (this.directionAxis = "y"),
      this.getDirection && (this.instance.direction = null),
      this.getDirection && (this.instance.speed = 0),
      this.html.classList.add(this.initClass),
      window.addEventListener("resize", this.checkResize, !1);
  }
  Inherits(W, n),
    (_ = createSuper(W)),
    createClass(W, [
      {
        key: "init",
        value: function () {
          var e = this;
          Mobile.matches || this.html.classList.add(this.smoothClass),
            this.html.setAttribute(
              "data-".concat(this.name, "-direction"),
              this.direction
            ),
            (this.instance = objectSpread2(
              {
                delta: {
                  x: this.initPosition.x,
                  y: this.initPosition.y,
                },
                scroll: {
                  x: this.initPosition.x,
                  y: this.initPosition.y,
                },
              },
              this.instance
            )),
            (this.VS = new h({
              el: this.scrollFromAnywhere ? document : this.el,
              mouseMultiplier:
                -1 < navigator.platform.indexOf("Win") ? 1 : 0.25,
              firefoxMultiplier: this.firefoxMultiplier,
              touchMultiplier: this.touchMultiplier,
              useKeyboard: !1,
              passive: !0,
            })),
            this.VS.on(function (t) {
              e.stop ||
                e.isDraggingScrollbar ||
                requestAnimationFrame(function () {
                  e.updateDelta(t), e.isScrolling || e.startScrolling();
                });
            }),
            this.setScrollLimit(),
            this.initScrollBar(),
            this.addSections(),
            this.addElements(),
            this.checkScroll(!0),
            this.transformElements(!0, !0),
            Get(getPrototypeOf(W.prototype), "init", this).call(this);
        },
      },
      {
        key: "setScrollLimit",
        value: function () {
          if (
            ((this.instance.limit.y = this.el.offsetHeight - this.windowHeight),
            "horizontal" === this.direction)
          ) {
            for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
              t += e[i].offsetWidth;
            this.instance.limit.x = t - this.windowWidth;
          }
        },
      },
      {
        key: "startScrolling",
        value: function () {
          (this.startScrollTs = Date.now()),
            (this.isScrolling = !0),
            this.checkScroll(),
            this.html.classList.add(this.scrollingClass);
        },
      },
      {
        key: "stopScrolling",
        value: function () {
          cancelAnimationFrame(this.checkScrollRaf),
            this.scrollToRaf &&
              (cancelAnimationFrame(this.scrollToRaf),
              (this.scrollToRaf = null)),
            (this.isScrolling = !1),
            (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
            this.html.classList.remove(this.scrollingClass);
        },
      },
      {
        key: "checkKey",
        value: function (t) {
          var e = this;
          if (this.stop)
            t.keyCode == D &&
              requestAnimationFrame(function () {
                (e.html.scrollTop = 0),
                  (document.body.scrollTop = 0),
                  (e.html.scrollLeft = 0),
                  (document.body.scrollLeft = 0);
              });
          else {
            switch (t.keyCode) {
              case D:
                requestAnimationFrame(function () {
                  (e.html.scrollTop = 0),
                    (document.body.scrollTop = 0),
                    (e.html.scrollLeft = 0),
                    (document.body.scrollLeft = 0),
                    e.scrollTo(document.activeElement, {
                      offset: -window.innerHeight / 2,
                    });
                });
                break;
              case x:
                this.instance.delta[this.directionAxis] -= 240;
                break;
              case P:
                this.instance.delta[this.directionAxis] += 240;
                break;
              case R:
                this.instance.delta[this.directionAxis] -= window.innerHeight;
                break;
              case I:
                this.instance.delta[this.directionAxis] += window.innerHeight;
                break;
              case Y:
                this.instance.delta[this.directionAxis] -=
                  this.instance.limit[this.directionAxis];
                break;
              case z:
                this.instance.delta[this.directionAxis] +=
                  this.instance.limit[this.directionAxis];
                break;
              case H:
                document.activeElement instanceof HTMLInputElement ||
                  document.activeElement instanceof HTMLTextAreaElement ||
                  (t.shiftKey
                    ? (this.instance.delta[this.directionAxis] -=
                        window.innerHeight)
                    : (this.instance.delta[this.directionAxis] +=
                        window.innerHeight));
                break;
              default:
                return;
            }
            this.instance.delta[this.directionAxis] < 0 &&
              (this.instance.delta[this.directionAxis] = 0),
              this.instance.delta[this.directionAxis] >
                this.instance.limit[this.directionAxis] &&
                (this.instance.delta[this.directionAxis] =
                  this.instance.limit[this.directionAxis]),
              this.stopScrolling(),
              (this.isScrolling = !0),
              this.checkScroll(),
              this.html.classList.add(this.scrollingClass);
          }
        },
      },
      {
        key: "checkScroll",
        value: function () {
          var t,
            e,
            i = this,
            s = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
          (s || this.isScrolling || this.isDraggingScrollbar) &&
            (this.hasScrollTicking ||
              ((this.checkScrollRaf = requestAnimationFrame(function () {
                return i.checkScroll();
              })),
              (this.hasScrollTicking = !0)),
            this.updateScroll(),
            (e = Math.abs(
              this.instance.delta[this.directionAxis] -
                this.instance.scroll[this.directionAxis]
            )),
            (t = Date.now() - this.startScrollTs),
            !this.animatingScroll &&
              100 < t &&
              ((e < 0.5 && 0 != this.instance.delta[this.directionAxis]) ||
                (e < 0.5 && 0 == this.instance.delta[this.directionAxis])) &&
              this.stopScrolling(),
            Object.entries(this.sections).forEach(function (t) {
              (t = slicedToArray(t, 2)), t[0], (t = t[1]);
              t.persistent ||
              (i.instance.scroll[i.directionAxis] > t.offset[i.directionAxis] &&
                i.instance.scroll[i.directionAxis] < t.limit[i.directionAxis])
                ? ("horizontal" === i.direction
                    ? i.transform(t.el, -i.instance.scroll[i.directionAxis], 0)
                    : i.transform(t.el, 0, -i.instance.scroll[i.directionAxis]),
                  t.inView ||
                    ((t.inView = !0),
                    (t.el.style.opacity = 1),
                    (t.el.style.pointerEvents = "all"),
                    t.el.setAttribute(
                      "data-".concat(i.name, "-section-inview"),
                      ""
                    )))
                : ((t.inView || s) &&
                    ((t.inView = !1),
                    (t.el.style.pointerEvents = "none"),
                    t.el.removeAttribute(
                      "data-".concat(i.name, "-section-inview")
                    )),
                  i.transform(t.el, 0, 0));
            }),
            this.getDirection && this.addDirection(),
            this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
            this.detectElements(),
            this.transformElements(),
            this.hasScrollbar &&
              ((t =
                (this.instance.scroll[this.directionAxis] /
                  this.instance.limit[this.directionAxis]) *
                this.scrollBarLimit[this.directionAxis]),
              "horizontal" === this.direction
                ? this.transform(this.scrollbarThumb, t, 0)
                : this.transform(this.scrollbarThumb, 0, t)),
            (e =
              this.instance.scroll[this.directionAxis] /
              this.instance.limit[this.directionAxis]),
            (PageProgress.style.width = 100 * e + "%"),
            Get(getPrototypeOf(W.prototype), "checkScroll", this).call(this),
            (this.hasScrollTicking = !1));
        },
      },
      {
        key: "resize",
        value: function () {
          (this.windowHeight = window.innerHeight),
            (this.windowWidth = window.innerWidth),
            this.checkContext(),
            (this.windowMiddle = {
              x: this.windowWidth / 2,
              y: this.windowHeight / 2,
            }),
            this.update();
        },
      },
      {
        key: "updateDelta",
        value: function (t) {
          var e = (
              this[this.context] && this[this.context].gestureDirection
                ? this[this.context]
                : this
            ).gestureDirection,
            e =
              "both" === e
                ? t.deltaX + t.deltaY
                : "vertical" !== e && "horizontal" === e
                ? t.deltaX
                : t.deltaY;
          (this.instance.delta[this.directionAxis] -= e * this.multiplier),
            this.instance.delta[this.directionAxis] < 0 &&
              (this.instance.delta[this.directionAxis] = 0),
            this.instance.delta[this.directionAxis] >
              this.instance.limit[this.directionAxis] &&
              (this.instance.delta[this.directionAxis] =
                this.instance.limit[this.directionAxis]);
        },
      },
      {
        key: "updateScroll",
        value: function (t) {
          this.isScrolling || this.isDraggingScrollbar
            ? (this.instance.scroll[this.directionAxis] = v(
                this.instance.scroll[this.directionAxis],
                this.instance.delta[this.directionAxis],
                this.lerp
              ))
            : this.instance.scroll[this.directionAxis] >
              this.instance.limit[this.directionAxis]
            ? this.setScroll(
                this.instance.scroll[this.directionAxis],
                this.instance.limit[this.directionAxis]
              )
            : this.instance.scroll.y < 0
            ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
            : this.setScroll(
                this.instance.scroll[this.directionAxis],
                this.instance.delta[this.directionAxis]
              );
        },
      },
      {
        key: "addDirection",
        value: function () {
          this.instance.delta.y > this.instance.scroll.y
            ? "down" !== this.instance.direction &&
              (this.instance.direction = "down")
            : this.instance.delta.y < this.instance.scroll.y &&
              "up" !== this.instance.direction &&
              (this.instance.direction = "up"),
            this.instance.delta.x > this.instance.scroll.x
              ? "right" !== this.instance.direction &&
                (this.instance.direction = "right")
              : this.instance.delta.x < this.instance.scroll.x &&
                "left" !== this.instance.direction &&
                (this.instance.direction = "left");
        },
      },
      {
        key: "addSpeed",
        value: function () {
          this.instance.delta[this.directionAxis] !=
          this.instance.scroll[this.directionAxis]
            ? (this.instance.speed =
                (this.instance.delta[this.directionAxis] -
                  this.instance.scroll[this.directionAxis]) /
                Math.max(1, Date.now() - this.speedTs))
            : (this.instance.speed = 0);
        },
      },
      {
        key: "initScrollBar",
        value: function () {
          if (
            ((this.scrollbar = document.createElement("div")),
            (this.scrollbarThumb = document.createElement("div")),
            this.scrollbar.classList.add("".concat(this.scrollbarClass)),
            this.scrollbarThumb.classList.add(
              "".concat(this.scrollbarClass, "-thumb")
            ),
            this.scrollbar.append(this.scrollbarThumb),
            (this.scrollbarContainer || document.body).append(this.scrollbar),
            (this.getScrollBar = this.getScrollBar.bind(this)),
            (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
            (this.moveScrollBar = this.moveScrollBar.bind(this)),
            this.scrollbarThumb.addEventListener(
              "mousedown",
              this.getScrollBar
            ),
            window.addEventListener("mouseup", this.releaseScrollBar),
            window.addEventListener("mousemove", this.moveScrollBar),
            (this.hasScrollbar = !1),
            "horizontal" == this.direction)
          ) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
              return;
          } else if (
            this.instance.limit.y + this.windowHeight <=
            this.windowHeight
          )
            return;
          (this.hasScrollbar = !0),
            (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
            (this.scrollbarHeight = this.scrollbarBCR.height),
            (this.scrollbarWidth = this.scrollbarBCR.width),
            "horizontal" === this.direction
              ? (this.scrollbarThumb.style.width = "".concat(
                  (this.scrollbarWidth * this.scrollbarWidth) /
                    (this.instance.limit.x + this.scrollbarWidth),
                  "px"
                ))
              : (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    (this.instance.limit.y + this.scrollbarHeight),
                  "px"
                )),
            (this.scrollbarThumbBCR =
              this.scrollbarThumb.getBoundingClientRect()),
            (this.scrollBarLimit = {
              x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
              y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
            });
        },
      },
      {
        key: "reinitScrollBar",
        value: function () {
          if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
            if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
              return;
          } else if (
            this.instance.limit.y + this.windowHeight <=
            this.windowHeight
          )
            return;
          (this.hasScrollbar = !0),
            (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
            (this.scrollbarHeight = this.scrollbarBCR.height),
            (this.scrollbarWidth = this.scrollbarBCR.width),
            "horizontal" === this.direction
              ? (this.scrollbarThumb.style.width = "".concat(
                  (this.scrollbarWidth * this.scrollbarWidth) /
                    (this.instance.limit.x + this.scrollbarWidth),
                  "px"
                ))
              : (this.scrollbarThumb.style.height = "".concat(
                  (this.scrollbarHeight * this.scrollbarHeight) /
                    (this.instance.limit.y + this.scrollbarHeight),
                  "px"
                )),
            (this.scrollbarThumbBCR =
              this.scrollbarThumb.getBoundingClientRect()),
            (this.scrollBarLimit = {
              x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
              y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
            });
        },
      },
      {
        key: "destroyScrollBar",
        value: function () {
          this.scrollbarThumb.removeEventListener(
            "mousedown",
            this.getScrollBar
          ),
            window.removeEventListener("mouseup", this.releaseScrollBar),
            window.removeEventListener("mousemove", this.moveScrollBar),
            this.scrollbar.remove();
        },
      },
      {
        key: "getScrollBar",
        value: function (t) {
          (this.isDraggingScrollbar = !0),
            this.checkScroll(),
            this.html.classList.remove(this.scrollingClass),
            this.html.classList.add(this.draggingClass);
        },
      },
      {
        key: "releaseScrollBar",
        value: function (t) {
          (this.isDraggingScrollbar = !1),
            this.html.classList.add(this.scrollingClass),
            this.html.classList.remove(this.draggingClass);
        },
      },
      {
        key: "moveScrollBar",
        value: function (i) {
          var s = this;
          this.isDraggingScrollbar &&
            requestAnimationFrame(function () {
              var t =
                  (((100 * (i.clientX - s.scrollbarBCR.left)) /
                    s.scrollbarWidth) *
                    s.instance.limit.x) /
                  100,
                e =
                  (((100 * (i.clientY - s.scrollbarBCR.top)) /
                    s.scrollbarHeight) *
                    s.instance.limit.y) /
                  100;
              0 < e && e < s.instance.limit.y && (s.instance.delta.y = e),
                0 < t && t < s.instance.limit.x && (s.instance.delta.x = t);
            });
        },
      },
      {
        key: "addElements",
        value: function () {
          var k = this;
          (this.els = {}),
            (this.parallaxElements = {}),
            this.el
              .querySelectorAll("[data-".concat(this.name, "]"))
              .forEach(function (t, e) {
                var i,
                  s,
                  n,
                  o,
                  r,
                  l,
                  a,
                  c = E(t),
                  h = Object.entries(k.sections)
                    .map(function (t) {
                      t = slicedToArray(t, 2);
                      t[0];
                      return t[1];
                    })
                    .find(function (t) {
                      return c.includes(t.el);
                    }),
                  d = t.dataset[k.name + "Class"] || k.class,
                  e =
                    "string" == typeof t.dataset[k.name + "Id"]
                      ? t.dataset[k.name + "Id"]
                      : "el" + e,
                  u = t.dataset[k.name + "Repeat"],
                  f = t.dataset[k.name + "Call"],
                  p = t.dataset[k.name + "Position"],
                  y = t.dataset[k.name + "Delay"],
                  m = t.dataset[k.name + "Direction"],
                  v = "string" == typeof t.dataset[k.name + "Sticky"],
                  b =
                    !!t.dataset[k.name + "Speed"] &&
                    parseFloat(t.dataset[k.name + "Speed"]) / 10,
                  g =
                    "string" == typeof t.dataset[k.name + "Offset"]
                      ? t.dataset[k.name + "Offset"].split(",")
                      : k.offset,
                  w = t.dataset[k.name + "Target"],
                  w = void 0 !== w ? document.querySelector("".concat(w)) : t,
                  u =
                    (w &&
                      ((s = w.getBoundingClientRect()),
                      (s =
                        null === h || h.inView
                          ? ((i = s.top + k.instance.scroll.y - A(w).y),
                            s.left + k.instance.scroll.x - A(w).x)
                          : ((i = s.top - A(h.el).y - A(w).y),
                            s.left - A(h.el).x - A(w).x)),
                      (n = i + w.offsetHeight),
                      (r = {
                        x: ((o = s + w.offsetWidth) - s) / 2 + s,
                        y: (n - i) / 2 + i,
                      }),
                      v &&
                        ((T = (l = t.getBoundingClientRect()).top),
                        (a = {
                          x: (l = l.left) - s,
                          y: T - i,
                        }),
                        (i += window.innerHeight),
                        (s += window.innerWidth),
                        (n =
                          T +
                          w.offsetHeight -
                          t.offsetHeight -
                          a[k.directionAxis]),
                        (r = {
                          x:
                            ((o =
                              l +
                              w.offsetWidth -
                              t.offsetWidth -
                              a[k.directionAxis]) -
                              s) /
                              2 +
                            s,
                          y: (n - i) / 2 + i,
                        }))),
                    "false" != u && (null != u || k.repeat)),
                  x = [0, 0];
                if (g)
                  if ("horizontal" === k.direction) {
                    for (var S = 0; S < g.length; S++)
                      "string" == typeof g[S]
                        ? g[S].includes("%")
                          ? (x[S] = parseInt(
                              (g[S].replace("%", "") * k.windowWidth) / 100
                            ))
                          : (x[S] = parseInt(g[S]))
                        : (x[S] = g[S]);
                    (s += x[0]), (o -= x[1]);
                  } else {
                    for (S = 0; S < g.length; S++)
                      "string" == typeof g[S]
                        ? g[S].includes("%")
                          ? (x[S] = parseInt(
                              (g[S].replace("%", "") * k.windowHeight) / 100
                            ))
                          : (x[S] = parseInt(g[S]))
                        : (x[S] = g[S]);
                    (i += x[0]), (n -= x[1]);
                  }
                var T = {
                  el: t,
                  id: e,
                  class: d,
                  section: h,
                  top: i,
                  middle: r,
                  bottom: n,
                  left: s,
                  right: o,
                  offset: g,
                  progress: 0,
                  repeat: u,
                  inView: !1,
                  call: f,
                  speed: b,
                  delay: y,
                  position: p,
                  target: w,
                  direction: m,
                  sticky: v,
                };
                (k.els[e] = T),
                  t.classList.contains(d) && k.setInView(k.els[e], e),
                  (!1 === b && !v) || (k.parallaxElements[e] = T);
              });
        },
      },
      {
        key: "addSections",
        value: function () {
          var o = this,
            t =
              ((this.sections = {}),
              this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              ));
          (t = 0 === t.length ? [this.el] : t).forEach(function (t, e) {
            var e =
                "string" == typeof t.dataset[o.name + "Id"]
                  ? t.dataset[o.name + "Id"]
                  : "section" + e,
              i = t.getBoundingClientRect(),
              s = {
                x: i.left - 1.5 * window.innerWidth - A(t).x,
                y: i.top - 1.5 * window.innerHeight - A(t).y,
              },
              i = {
                x: s.x + i.width + 2 * window.innerWidth,
                y: s.y + i.height + 2 * window.innerHeight,
              },
              n = "string" == typeof t.dataset[o.name + "Persistent"];
            t.setAttribute("data-scroll-section-id", e),
              (o.sections[e] = {
                el: t,
                offset: s,
                limit: i,
                inView: !1,
                persistent: n,
                id: e,
              });
          });
        },
      },
      {
        key: "transform",
        value: function (t, e, i, s) {
          var n,
            o,
            r,
            l = 1 - "".concat(i) / (window.innerHeight / 0.2);
          (s = s
            ? ((n = v((o = A(t)).x, e, s)),
              (o = v(o.y, i, s)),
              "translate3d(".concat(n, "px,").concat(o, "px,0)"))
            : "translate3d(".concat(e, "px,").concat(i, "px,0)")),
            (t.style.transform = s),
            t.classList.contains("wrap-logo")
              ? ((r = "translate3d("
                  .concat(3 * i, "px,")
                  .concat(i / 3, "px,0)")),
                (t.style.transform = r))
              : t.classList.contains("scale-y")
              ? ((r = "translate3d("
                  .concat(e, "px,")
                  .concat(i, "px,0) rotate(" + (l * i) / 3 + "deg)")),
                (t.style.transform = r))
              : t.classList.contains("scale-center") &&
                ((r = "translate3d("
                  .concat(e, "px,")
                  .concat(i, "px,0) scale3d(" + l + "," + l + ",1)")),
                (t.style.transform = r));
        },
      },
      {
        key: "transformElements",
        value: function (s) {
          var n = this,
            o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            r = this.instance.scroll.x + this.windowWidth,
            l = this.instance.scroll.y + this.windowHeight,
            a = {
              x: this.instance.scroll.x + this.windowMiddle.x,
              y: this.instance.scroll.y + this.windowMiddle.y,
            };
          Object.entries(this.parallaxElements).forEach(function (t) {
            var t = slicedToArray(t, 2),
              e = (t[0], t[1]),
              i = s ? 0 : !1;
            if (e.inView || o)
              switch (e.position) {
                case "top":
                  i = n.instance.scroll[n.directionAxis] * -e.speed;
                  break;
                case "elementTop":
                  i = (l - e.top) * -e.speed;
                  break;
                case "bottom":
                  i =
                    (n.instance.limit[n.directionAxis] - l + n.windowHeight) *
                    e.speed;
                  break;
                case "left":
                  i = n.instance.scroll[n.directionAxis] * -e.speed;
                  break;
                case "elementLeft":
                  i = (r - e.left) * -e.speed;
                  break;
                case "right":
                  i =
                    (n.instance.limit[n.directionAxis] - r + n.windowHeight) *
                    e.speed;
                  break;
                default:
                  i =
                    (a[n.directionAxis] - e.middle[n.directionAxis]) * -e.speed;
              }
            !1 !==
              (i = e.sticky
                ? e.inView
                  ? "horizontal" === n.direction
                    ? n.instance.scroll.x - e.left + window.innerWidth
                    : n.instance.scroll.y - e.top + window.innerHeight
                  : "horizontal" === n.direction
                  ? n.instance.scroll.x < e.left - window.innerWidth &&
                    n.instance.scroll.x < e.left - window.innerWidth / 2
                    ? 0
                    : n.instance.scroll.x > e.right &&
                      n.instance.scroll.x > e.right + 100 &&
                      e.right - e.left + window.innerWidth
                  : n.instance.scroll.y < e.top - window.innerHeight &&
                    n.instance.scroll.y < e.top - window.innerHeight / 2
                  ? 0
                  : n.instance.scroll.y > e.bottom &&
                    n.instance.scroll.y > e.bottom + 100 &&
                    e.bottom - e.top + window.innerHeight
                : i) &&
              ("horizontal" === e.direction ||
              ("horizontal" === n.direction && "vertical" !== e.direction)
                ? n.transform(e.el, i, 0, !s && e.delay)
                : n.transform(e.el, 0, i, !s && e.delay));
          });
        },
      },
      {
        key: "scrollTo",
        value: function (t) {
          var i = this,
            e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            s = parseInt(e.offset) || 0,
            n = isNaN(parseInt(e.duration)) ? 1e3 : parseInt(e.duration),
            o = e.easing || [0.25, 0, 0.35, 1],
            r = !!e.disableLerp,
            l = e.callback || !1,
            o = w.apply(void 0, toConsumableArray(o));
          if ("string" == typeof t) {
            if ("top" === t) t = 0;
            else if ("bottom" === t) t = this.instance.limit.y;
            else if ("left" === t) t = 0;
            else if ("right" === t) t = this.instance.limit.x;
            else if (!(t = document.querySelector(t))) return;
          } else if ("number" == typeof t) t = parseInt(t);
          else if (!t || !t.tagName)
            return void console.warn("`target` parameter is not valid");
          if ("number" != typeof t) {
            if (!E(t).includes(this.el)) return;
            var e = t.getBoundingClientRect(),
              a = e.top,
              e = e.left,
              c = E(t).find(function (e) {
                return Object.entries(i.sections)
                  .map(function (t) {
                    t = slicedToArray(t, 2);
                    t[0];
                    return t[1];
                  })
                  .find(function (t) {
                    return t.el == e;
                  });
              }),
              h = 0,
              h = c
                ? A(c)[this.directionAxis]
                : -this.instance.scroll[this.directionAxis],
              s = "horizontal" === this.direction ? e + s - h : a + s - h;
          } else s = t + s;
          var d = parseFloat(this.instance.delta[this.directionAxis]),
            u =
              Math.max(
                0,
                Math.min(s, this.instance.limit[this.directionAxis])
              ) - d,
            f = function (t) {
              r
                ? "horizontal" === i.direction
                  ? i.setScroll(d + u * t, i.instance.delta.y)
                  : i.setScroll(i.instance.delta.x, d + u * t)
                : (i.instance.delta[i.directionAxis] = d + u * t);
            },
            p =
              ((this.animatingScroll = !0),
              this.stopScrolling(),
              this.startScrolling(),
              Date.now());
          (function t() {
            var e = (Date.now() - p) / n;
            1 < e
              ? (f(1), (i.animatingScroll = !1), 0 == n && i.update(), l && l())
              : ((i.scrollToRaf = requestAnimationFrame(t)), f(o(e)));
          })();
        },
      },
      {
        key: "update",
        value: function () {
          this.setScrollLimit(),
            this.addSections(),
            this.addElements(),
            this.detectElements(),
            this.updateScroll(),
            this.transformElements(!0),
            this.reinitScrollBar(),
            this.checkScroll(!0);
        },
      },
      {
        key: "startScroll",
        value: function () {
          this.stop = !1;
        },
      },
      {
        key: "stopScroll",
        value: function () {
          this.stop = !0;
        },
      },
      {
        key: "setScroll",
        value: function (t, e) {
          this.instance = objectSpread2(
            objectSpread2({}, this.instance),
            {},
            {
              scroll: {
                x: t,
                y: e,
              },
              delta: {
                x: t,
                y: e,
              },
              speed: 0,
            }
          );
        },
      },
      {
        key: "destroy",
        value: function () {
          Get(getPrototypeOf(W.prototype), "destroy", this).call(this),
            this.stopScrolling(),
            this.html.classList.remove(this.smoothClass),
            this.VS.destroy(),
            this.destroyScrollBar(),
            window.removeEventListener("keydown", this.checkKey, !1);
        },
      },
    ]);
  var _,
    X = W;

  function W() {
    var t,
      e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    return (
      classCallCheck(this, W),
      history.scrollRestoration && (history.scrollRestoration = "manual"),
      window.scrollTo(0, 0),
      (t = _.call(this, e)).inertia && (t.lerp = 0.1 * t.inertia),
      (t.isScrolling = !1),
      (t.isDraggingScrollbar = !1),
      (t.isTicking = !1),
      (t.hasScrollTicking = !1),
      (t.parallaxElements = {}),
      (t.stop = !1),
      (t.scrollbarContainer = e.scrollbarContainer),
      (t.checkKey = t.checkKey.bind(assertThisInitialized(t))),
      window.addEventListener("keydown", t.checkKey, !1),
      t
    );
  }

  function B() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    classCallCheck(this, B),
      (this.options = t),
      Object.assign(this, j, t),
      this.smooth ||
        "horizontal" != this.direction ||
        console.warn(
          "SMOOTH� `smooth:false` & `horizontal` direction are not yet compatible"
        ),
      this.init();
  }
  return (
    createClass(B, [
      {
        key: "init",
        value: function () {
          var t;
          Mobile.matches || (this.scroll = new X(this.options)),
            this.scroll.init(),
            window.location.hash &&
              ((t = window.location.hash.slice(1, window.location.hash.length)),
              (t = document.getElementById(t)) && this.scroll.scrollTo(t));
        },
      },
      {
        key: "update",
        value: function () {
          this.scroll.update();
        },
      },
      {
        key: "start",
        value: function () {
          this.scroll.startScroll();
        },
      },
      {
        key: "stop",
        value: function () {
          this.scroll.stopScroll();
        },
      },
      {
        key: "scrollTo",
        value: function (t, e) {
          this.scroll.scrollTo(t, e);
        },
      },
      {
        key: "setScroll",
        value: function (t, e) {
          this.scroll.setScroll(t, e);
        },
      },
      {
        key: "on",
        value: function (t, e) {
          this.scroll.setEvents(t, e);
        },
      },
      {
        key: "off",
        value: function (t, e) {
          this.scroll.unsetEvents(t, e);
        },
      },
      {
        key: "destroy",
        value: function () {
          this.scroll.destroy();
        },
      },
    ]),
    B
  );
});

function empty(t) {
  t.length = 0;
}

function slice(t, e, n) {
  return Array.prototype.slice.call(t, e, n);
}

function apply(t) {
  return t.bind.apply(t, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout,
  noop = function () {};

function raf(t) {
  return requestAnimationFrame(t);
}

function typeOf(t, e) {
  return typeof e === t;
}

function isObject(t) {
  return !isNull(t) && typeOf("object", t);
}
var isArray = Array.isArray,
  isFunction = apply(typeOf, "function"),
  isString = apply(typeOf, "string"),
  isUndefined = apply(typeOf, "undefined");

function isNull(t) {
  return null === t;
}

function isHTMLElement(t) {
  return t instanceof HTMLElement;
}

function toArray(t) {
  return isArray(t) ? t : [t];
}

function forEach(t, e) {
  toArray(t).forEach(e);
}

function includes(t, e) {
  return -1 < t.indexOf(e);
}

function push(t, e) {
  return t.push.apply(t, toArray(e)), t;
}

function toggleClass(e, t, n) {
  e &&
    forEach(t, function (t) {
      t && e.classList[n ? "add" : "remove"](t);
    });
}

function addClass(t, e) {
  toggleClass(t, isString(e) ? e.split(" ") : e, !0);
}

function append(t, e) {
  forEach(e, t.appendChild.bind(t));
}

function before(t, n) {
  forEach(t, function (t) {
    var e = (n || t).parentNode;
    e && e.insertBefore(t, n);
  });
}

function matches(t, e) {
  return isHTMLElement(t) && (t.msMatchesSelector || t.matches).call(t, e);
}

function children(t, e) {
  t = t ? slice(t.children) : [];
  return e
    ? t.filter(function (t) {
        return matches(t, e);
      })
    : t;
}

function child(t, e) {
  return e ? children(t, e)[0] : t.firstElementChild;
}
var ownKeys = Object.keys;

function forOwn(t, e, n) {
  if (t)
    for (
      var i = ownKeys(t), i = n ? i.reverse() : i, r = 0;
      r < i.length;
      r++
    ) {
      var o = i[r];
      if ("__proto__" !== o && !1 === e(t[o], o)) break;
    }
  return t;
}

function assign(i) {
  return (
    slice(arguments, 1).forEach(function (n) {
      forOwn(n, function (t, e) {
        i[e] = n[e];
      });
    }),
    i
  );
}

function merge(n) {
  return (
    slice(arguments, 1).forEach(function (t) {
      forOwn(t, function (t, e) {
        isArray(t)
          ? (n[e] = t.slice())
          : isObject(t)
          ? (n[e] = merge({}, isObject(n[e]) ? n[e] : {}, t))
          : (n[e] = t);
      });
    }),
    n
  );
}

function omit(e, t) {
  toArray(t || ownKeys(e)).forEach(function (t) {
    delete e[t];
  });
}

function removeAttribute(t, n) {
  forEach(t, function (e) {
    forEach(n, function (t) {
      e && e.removeAttribute(t);
    });
  });
}

function setAttribute(n, e, i) {
  isObject(e)
    ? forOwn(e, function (t, e) {
        setAttribute(n, e, t);
      })
    : forEach(n, function (t) {
        isNull(i) || "" === i
          ? removeAttribute(t, e)
          : t.setAttribute(e, String(i));
      });
}

function create(t, e, n) {
  t = document.createElement(t);
  return (
    e && (isString(e) ? addClass : setAttribute)(t, e), n && append(n, t), t
  );
}

function style(t, e, n) {
  if (isUndefined(n)) return getComputedStyle(t)[e];
  isNull(n) || (t.style[e] = "" + n);
}

function display(t, e) {
  style(t, "display", e);
}

function focus(t) {
  (t.setActive && t.setActive()) ||
    t.focus({
      preventScroll: !0,
    });
}

function getAttribute(t, e) {
  return t.getAttribute(e);
}

function hasClass(t, e) {
  return t && t.classList.contains(e);
}

function rect(t) {
  return t.getBoundingClientRect();
}

function remove(t) {
  forEach(t, function (t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  });
}

function parseHtml(t) {
  return child(new DOMParser().parseFromString(t, "text/html").body);
}

function prevent(t, e) {
  t.preventDefault(), e && (t.stopPropagation(), t.stopImmediatePropagation());
}

function query(t, e) {
  return t && t.querySelector(e);
}

function queryAll(t, e) {
  return e ? slice(t.querySelectorAll(e)) : [];
}

function removeClass(t, e) {
  toggleClass(t, e, !1);
}

function timeOf(t) {
  return t.timeStamp;
}

function unit(t) {
  return isString(t) ? t : t ? t + "px" : "";
}
var PROJECT_CODE = "slidebox",
  DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(t, e) {
  if (!t) throw new Error("[" + PROJECT_CODE + "] " + (e || ""));
}
var min = Math.min,
  max = Math.max,
  floor = Math.floor,
  ceil = Math.ceil,
  abs = Math.abs;

function approximatelyEqual(t, e, n) {
  return abs(t - e) < n;
}

function between(t, e, n, i) {
  var r = min(e, n),
    e = max(e, n);
  return i ? r < t && t < e : r <= t && t <= e;
}

function clamp(t, e, n) {
  var i = min(e, n),
    e = max(e, n);
  return min(max(i, t), e);
}

function sign(t) {
  return (0 < t) - (t < 0);
}

function format(e, t) {
  return (
    forEach(t, function (t) {
      e = e.replace("%s", "" + t);
    }),
    e
  );
}

function pad(t) {
  return t < 10 ? "0" + t : "" + t;
}
var ids = {};

function uniqueId(t) {
  return "" + t + pad((ids[t] = (ids[t] || 0) + 1));
}

function EventBinder() {
  var u = [];

  function n(t, n, i) {
    forEach(t, function (e) {
      e &&
        forEach(n, function (t) {
          t.split(" ").forEach(function (t) {
            t = t.split(".");
            i(e, t[0], t[1]);
          });
        });
    });
  }
  return {
    bind: function (t, e, o, s) {
      n(t, e, function (t, e, n) {
        var i = "addEventListener" in t,
          r = i
            ? t.removeEventListener.bind(t, e, o, s)
            : t.removeListener.bind(t, o);
        i ? t.addEventListener(e, o, s) : t.addListener(o),
          u.push([t, e, n, o, r]);
      });
    },
    unbind: function (t, e, r) {
      n(t, e, function (e, n, i) {
        u = u.filter(function (t) {
          return (
            !!(t[0] !== e || t[1] !== n || t[2] !== i || (r && t[3] !== r)) ||
            (t[4](), !1)
          );
        });
      });
    },
    dispatch: function (t, e, n) {
      var i;
      return (
        "function" == typeof CustomEvent
          ? (i = new CustomEvent(e, {
              bubbles: !0,
              detail: n,
            }))
          : (i = document.createEvent("CustomEvent")).initCustomEvent(
              e,
              !0,
              !1,
              n
            ),
        t.dispatchEvent(i),
        i
      );
    },
    destroy: function () {
      u.forEach(function (t) {
        t[4]();
      }),
        empty(u);
    },
  };
}
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Splide =
        e());
})(this, function () {
  "use strict";
  var d = "(prefers-reduced-motion: reduce)",
    F = 4,
    J = 5,
    n = {
      CREATED: 1,
      MOUNTED: 2,
      IDLE: 3,
      MOVING: F,
      SCROLLING: J,
      DRAGGING: 6,
      DESTROYED: 7,
    },
    q = "mounted",
    P = "move",
    _ = "moved",
    tt = "shifted",
    et = "click",
    nt = "active",
    it = "inactive",
    rt = "visible",
    ot = "hidden",
    st = "slide:keydown",
    D = "refresh",
    B = "updated",
    C = "resize",
    S = "resized",
    k = "scroll",
    L = "scrolled",
    r = "destroy",
    ut = "navigation:mounted",
    x = "autoplay:play",
    T = "autoplay:pause",
    y = "lazyload:loaded";

  function U(t) {
    var n = t ? t.event.bus : document.createDocumentFragment(),
      i = EventBinder();
    return (
      t && t.event.on(r, i.destroy),
      assign(i, {
        bus: n,
        on: function (t, e) {
          i.bind(n, toArray(t).join(" "), function (t) {
            e.apply(e, isArray(t.detail) ? t.detail : []);
          });
        },
        off: apply(i.unbind, n),
        emit: function (t) {
          i.dispatch(n, t, slice(arguments, 1));
        },
      })
    );
  }

  function w(e, t, n, i) {
    var r,
      o,
      s = Date.now,
      u = 0,
      a = !0,
      c = 0;

    function l() {
      if (!a) {
        if (
          ((u = e ? min((s() - r) / e, 1) : 1),
          n && n(u),
          1 <= u && (t(), (r = s()), i && ++c >= i))
        )
          return f();
        raf(l);
      }
    }

    function f() {
      a = !0;
    }

    function d() {
      o && cancelAnimationFrame(o), (a = !(o = u = 0));
    }
    return {
      start: function (t) {
        t || d(), (r = s() - (t ? u * e : 0)), (a = !1), raf(l);
      },
      rewind: function () {
        (r = s()), (u = 0), n && n(u);
      },
      pause: f,
      cancel: d,
      set: function (t) {
        e = t;
      },
      isPaused: function () {
        return a;
      },
    };
  }

  function i(t) {
    var e = t;
    return {
      set: function (t) {
        e = t;
      },
      is: function (t) {
        return includes(toArray(t), e);
      },
    };
  }
  var t = "Arrow",
    M = t + "Left",
    R = t + "Right",
    s = t + "Up",
    t = t + "Down",
    z = "ttb",
    o = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [s, R],
      ArrowRight: [t, M],
    };
  var I = "role",
    N = "tabindex",
    e = "aria-",
    j = e + "controls",
    at = e + "current",
    a = e + "selected",
    W = e + "label",
    E = e + "labelledby",
    ct = e + "hidden",
    H = e + "orientation",
    G = e + "roledescription",
    l = e + "live",
    f = e + "busy",
    p = e + "atomic",
    X = [I, N, "disabled", j, at, W, E, ct, H, G],
    lt = PROJECT_CODE,
    ft = PROJECT_CODE + "-track",
    dt = PROJECT_CODE + "-list",
    A = PROJECT_CODE + "-item",
    pt = A + "-item-clone",
    gt = A + "-container",
    O = PROJECT_CODE + "-arrows",
    K = PROJECT_CODE + "-arrow",
    mt = K + "-prev",
    ht = K + "-next",
    vt = PROJECT_CODE + "-pagination",
    yt = PROJECT_CODE + "-pagi-item",
    bt = PROJECT_CODE + "-progress" + "-bar",
    Et = PROJECT_CODE + "-toggle",
    g = PROJECT_CODE + "-sr",
    Y = "is-active",
    At = "is-prev",
    Ct = "is-next",
    wt = "is-visible",
    b = "is-loading",
    xt = "is-focus-in",
    Ot = [Y, wt, At, Ct, b, xt];
  var St = "touchstart mousedown",
    Tt = "touchmove mousemove",
    Pt = "touchend touchcancel mouseup click";
  var Q = "slide",
    V = "loop",
    Z = "fade";

  function _t(r, i, e, o) {
    var s,
      t = U(r),
      n = t.on,
      u = t.emit,
      a = t.bind,
      c = r.Components,
      l = r.root,
      f = r.options,
      d = f.isNavigation,
      p = f.updateOnMove,
      g = f.i18n,
      m = f.pagination,
      h = f.slideFocus,
      v = c.Direction.resolve,
      y = getAttribute(o, "style"),
      b = getAttribute(o, W),
      E = -1 < e,
      A = child(o, "." + gt),
      C = queryAll(o, f.focusableNodes || "");

    function w() {
      var t = r.splides
        .map(function (t) {
          t = t.splide.Components.Slides.getAt(i);
          return t ? t.slide.id : "";
        })
        .join(" ");
      setAttribute(o, W, format(g.slideX, (E ? e : i) + 1)),
        setAttribute(o, j, t),
        setAttribute(o, I, h ? "button" : ""),
        h && removeAttribute(o, G);
    }

    function x() {
      s || O();
    }

    function O() {
      var t, e, n;
      s ||
        ((t = r.index),
        (n = S()) !== hasClass(o, Y) &&
          (toggleClass(o, Y, n),
          setAttribute(o, at, (d && n) || ""),
          u(n ? nt : it, T)),
        (n = (function () {
          if (r.is(Z)) return S();
          var t = rect(c.Elements.track),
            e = rect(o),
            n = v("left", !0),
            i = v("right", !0);
          return floor(t[n]) <= ceil(e[n]) && floor(e[i]) <= ceil(t[i]);
        })()),
        (e = !n && (!S() || E)),
        r.state.is([F, J]) || setAttribute(o, ct, e || ""),
        setAttribute(C, N, e ? -1 : ""),
        h && setAttribute(o, N, e ? -1 : 0),
        n !== hasClass(o, wt) && (toggleClass(o, wt, n), u(n ? rt : ot, T)),
        n ||
          document.activeElement !== o ||
          ((e = c.Slides.getAt(r.index)) && focus(e.slide)),
        toggleClass(o, At, i === t - 1),
        toggleClass(o, Ct, i === t + 1));
    }

    function S() {
      var t = r.index;
      return t === i || (f.cloneStatus && t === e);
    }
    var T = {
      index: i,
      slideIndex: e,
      slide: o,
      container: A,
      isClone: E,
      mount: function () {
        E ||
          ((o.id = l.id + "-slide" + pad(i + 1)),
          setAttribute(o, I, m ? "tabpanel" : "group"),
          setAttribute(o, G, g.slide),
          setAttribute(o, W, b || format(g.slideLabel, [i + 1, r.length]))),
          a(o, "click", apply(u, et, T)),
          a(o, "keydown", apply(u, st, T)),
          n([_, tt, L], O),
          n(ut, w),
          p && n(P, x);
      },
      destroy: function () {
        (s = !0),
          t.destroy(),
          removeClass(o, Ot),
          removeAttribute(o, X),
          setAttribute(o, "style", y),
          setAttribute(o, W, b || "");
      },
      update: O,
      style: function (t, e, n) {
        style((n && A) || o, t, e);
      },
      isWithin: function (t, e) {
        return (
          (t = abs(t - i)),
          (t = E || (!f.rewind && !r.is(V)) ? t : min(t, r.length - t)) <= e
        );
      },
    };
    return T;
  }
  var Dt = DATA_ATTRIBUTE + "-interval";
  var $ = {
    passive: !1,
    capture: !0,
  };
  var u = {
    Spacebar: " ",
    Right: R,
    Left: M,
    Up: s,
    Down: t,
  };

  function kt(t) {
    return (t = isString(t) ? t : t.key), u[t] || t;
  }
  var m = "keydown";
  var h = DATA_ATTRIBUTE + "-lazy",
    v = h + "-srcset",
    Lt = "[" + h + "], [" + v + "]";
  var Mt = [" ", "Enter"];
  var c = Object.freeze({
      __proto__: null,
      Media: function (i, t, r) {
        var o = i.state,
          e = r.breakpoints || {},
          s = r.reducedMotion || {},
          n = EventBinder(),
          u = [];

        function a(t) {
          t && n.destroy();
        }

        function c(t, e) {
          e = matchMedia(e);
          n.bind(e, "change", l), u.push([t, e]);
        }

        function l() {
          var t = o.is(7),
            e = r.direction,
            n = u.reduce(function (t, e) {
              return merge(t, e[1].matches ? e[0] : {});
            }, {});
          omit(r),
            f(n),
            r.destroy
              ? i.destroy("completely" === r.destroy)
              : t
              ? (a(!0), i.mount())
              : e !== r.direction && i.refresh();
        }

        function f(t, e) {
          merge(r, t),
            e && merge(Object.getPrototypeOf(r), t),
            o.is(1) || i.emit(B, r);
        }
        return {
          setup: function () {
            var n = "min" === r.mediaQuery;
            ownKeys(e)
              .sort(function (t, e) {
                return n ? +t - +e : +e - +t;
              })
              .forEach(function (t) {
                c(e[t], "(" + (n ? "min" : "max") + "-width:" + t + "px)");
              }),
              c(s, d),
              l();
          },
          destroy: a,
          reduce: function (t) {
            matchMedia(d).matches && (t ? merge(r, s) : omit(r, ownKeys(s)));
          },
          set: f,
        };
      },
      Direction: function (t, e, r) {
        return {
          resolve: function (t, e, n) {
            var i =
              "rtl" !== (n = n || r.direction) || e ? (n === z ? 0 : -1) : 1;
            return (
              (o[t] && o[t][i]) ||
              t.replace(/width|left|right/i, function (t, e) {
                t = o[t.toLowerCase()][i] || t;
                return 0 < e ? t.charAt(0).toUpperCase() + t.slice(1) : t;
              })
            );
          },
          orient: function (t) {
            return t * ("rtl" === r.direction ? 1 : -1);
          },
        };
      },
      Elements: function (t, e, n) {
        var i,
          r,
          o,
          s = U(t),
          u = s.on,
          a = s.bind,
          c = t.root,
          l = n.i18n,
          f = {},
          d = [],
          p = [],
          g = [];

        function m() {
          (i = y("." + ft)),
            (r = child(i, "." + dt)),
            assert(i && r, "A track/list element is missing."),
            push(d, children(r, "." + A + ":not(." + pt + ")")),
            forOwn(
              {
                arrows: O,
                pagination: vt,
                prev: mt,
                next: ht,
                bar: bt,
                toggle: Et,
              },
              function (t, e) {
                f[e] = y("." + t);
              }
            ),
            assign(f, {
              root: c,
              track: i,
              list: r,
              slides: d,
            });
          var t = c.id || uniqueId(PROJECT_CODE),
            e = n.role;
          (c.id = t),
            (i.id = i.id || t + "-track"),
            (r.id = r.id || t + "-list"),
            !getAttribute(c, I) &&
              "SECTION" !== c.tagName &&
              e &&
              setAttribute(c, I, e),
            setAttribute(c, G, l.carousel),
            setAttribute(r, I, "presentation"),
            v();
        }

        function h(t) {
          var e = X.concat("style");
          empty(d),
            removeClass(c, p),
            removeClass(i, g),
            removeAttribute([i, r], e),
            removeAttribute(c, t ? e : ["style", G]);
        }

        function v() {
          removeClass(c, p),
            removeClass(i, g),
            (p = b(lt)),
            (g = b(ft)),
            addClass(c, p),
            addClass(i, g),
            setAttribute(c, W, n.label),
            setAttribute(c, E, n.labelledby);
        }

        function y(t) {
          return query(c, t);
        }

        function b(t) {
          return [
            t + "-" + n.type,
            t + "-" + n.direction,
            n.drag && t + "-draggable",
            n.isNavigation && t + "-nav",
            t === lt && Y,
          ];
        }
        return assign(f, {
          setup: m,
          mount: function () {
            u(D, h),
              u(D, m),
              u(B, v),
              a(
                document,
                St + " keydown",
                function (t) {
                  o = "keydown" === t.type;
                },
                {
                  capture: !0,
                }
              ),
              a(c, "focusin", function () {
                toggleClass(c, xt, !!o);
              });
          },
          destroy: h,
        });
      },
      Slides: function (i, r, o) {
        var t = U(i),
          e = t.on,
          s = t.emit,
          u = t.bind,
          a = (t = r.Elements).slides,
          c = t.list,
          l = [];

        function n() {
          a.forEach(function (t, e) {
            d(t, e, -1);
          });
        }

        function f() {
          g(function (t) {
            t.destroy();
          }),
            empty(l);
        }

        function d(t, e, n) {
          e = _t(i, e, n, t);
          e.mount(), l.push(e);
        }

        function p(t) {
          return t
            ? m(function (t) {
                return !t.isClone;
              })
            : l;
        }

        function g(t, e) {
          p(e).forEach(t);
        }

        function m(e) {
          return l.filter(
            isFunction(e)
              ? e
              : function (t) {
                  return isString(e)
                    ? matches(t.slide, e)
                    : includes(toArray(e), t.index);
                }
          );
        }
        return {
          mount: function () {
            n(),
              e(D, f),
              e(D, n),
              e([q, D], function () {
                l.sort(function (t, e) {
                  return t.index - e.index;
                });
              });
          },
          destroy: f,
          update: function () {
            g(function (t) {
              t.update();
            });
          },
          register: d,
          get: p,
          getIn: function (t) {
            var e = r.Controller,
              n = e.toIndex(t),
              i = e.hasFocus() ? 1 : o.perPage;
            return m(function (t) {
              return between(t.index, n, n + i - 1);
            });
          },
          getAt: function (t) {
            return m(t)[0];
          },
          add: function (t, r) {
            forEach(t, function (t) {
              var e, n, i;
              isHTMLElement((t = isString(t) ? parseHtml(t) : t)) &&
                ((e = a[r]) ? before(t, e) : append(c, t),
                addClass(t, o.classes.slide),
                (e = t),
                (n = apply(s, C)),
                (e = queryAll(e, "img")),
                (i = e.length)
                  ? e.forEach(function (t) {
                      u(t, "load error", function () {
                        --i || n();
                      });
                    })
                  : n());
            }),
              s(D);
          },
          remove: function (t) {
            remove(
              m(t).map(function (t) {
                return t.slide;
              })
            ),
              s(D);
          },
          forEach: g,
          filter: m,
          style: function (e, n, i) {
            g(function (t) {
              t.style(e, n, i);
            });
          },
          getLength: function (t) {
            return (t ? a : l).length;
          },
          isEnough: function () {
            return l.length > o.perPage;
          },
        };
      },
      Layout: function (t, e, n) {
        var i,
          r,
          o = (a = U(t)).on,
          s = a.bind,
          u = a.emit,
          a = e.Slides,
          c = e.Direction.resolve,
          l = (e = e.Elements).root,
          f = e.track,
          d = e.list,
          p = a.getAt,
          g = a.style;

        function m() {
          (r = null),
            (i = n.direction === z),
            style(l, "maxWidth", unit(n.width)),
            style(f, c("paddingLeft"), v(!1)),
            style(f, c("paddingRight"), v(!0)),
            h();
        }

        function h() {
          var t = rect(l);
          (r && r.width === t.width && r.height === t.height) ||
            (style(
              f,
              "height",
              (function () {
                var t = "";
                i &&
                  (assert((t = y()), "height or heightRatio is missing."),
                  (t = "calc(" + t + " - " + v(!1) + " - " + v(!0) + ")"));
                return t;
              })()
            ),
            g(c("marginRight"), unit(n.gap)),
            g(
              "width",
              n.autoWidth ? null : unit(n.fixedWidth) || (i ? "" : b())
            ),
            g(
              "height",
              unit(n.fixedHeight) || (i ? (n.autoHeight ? null : b()) : y()),
              !0
            ),
            (r = t),
            u(S));
        }

        function v(t) {
          var e = n.padding,
            t = c(t ? "right" : "left");
          return (e && unit(e[t] || (isObject(e) ? 0 : e))) || "0px";
        }

        function y() {
          return unit(n.height || rect(d).width * n.heightRatio);
        }

        function b() {
          var t = unit(n.gap);
          return (
            "calc((100%" +
            (t && " + " + t) +
            ")/" +
            (n.perPage || 1) +
            (t && " - " + t) +
            ")"
          );
        }

        function E(t, e) {
          var n,
            t = p(t);
          return t
            ? ((t = rect(t.slide)[c("right")]),
              (n = rect(d)[c("left")]),
              abs(t - n) + (e ? 0 : A()))
            : 0;
        }

        function A() {
          var t = p(0);
          return (t && parseFloat(style(t.slide, c("marginRight")))) || 0;
        }
        return {
          mount: function () {
            var t, e, n;
            m(),
              s(
                window,
                "resize load",
                ((t = apply(u, C)),
                function () {
                  n ||
                    (n = w(
                      e || 0,
                      function () {
                        t(), (n = null);
                      },
                      null,
                      1
                    )).start();
                })
              ),
              o([B, D], m),
              o(C, h);
          },
          listSize: function () {
            return rect(d)[c("width")];
          },
          slideSize: function (t, e) {
            return (t = p(t || 0))
              ? rect(t.slide)[c("width")] + (e ? 0 : A())
              : 0;
          },
          sliderSize: function () {
            return E(t.length - 1, !0) - E(-1, !0);
          },
          totalSize: E,
          getPadding: function (t) {
            return (
              parseFloat(style(f, c("padding" + (t ? "Right" : "Left")))) || 0
            );
          },
        };
      },
      Clones: function (u, n, a) {
        var t,
          e = U(u),
          i = e.on,
          c = e.emit,
          l = n.Elements,
          f = n.Slides,
          r = n.Direction.resolve,
          d = [];

        function o() {
          if ((t = g())) {
            var r = t,
              o = f.get().slice(),
              s = o.length;
            if (s) {
              for (; o.length < r; ) push(o, o);
              push(o.slice(-r), o.slice(0, r)).forEach(function (t, e) {
                var n = e < r,
                  i = (function (t, e) {
                    t = t.cloneNode(!0);
                    return (
                      addClass(t, a.classes.clone),
                      (t.id = u.root.id + "-clone" + pad(e + 1)),
                      t
                    );
                  })(t.slide, e);
                n ? before(i, o[0].slide) : append(l.list, i),
                  push(d, i),
                  f.register(i, e - r + (n ? 0 : s), t.index);
              });
            }
            c(C);
          }
        }

        function s() {
          remove(d), empty(d);
        }

        function p() {
          t < g() && c(D);
        }

        function g() {
          var t,
            e = a.clones;
          return (
            u.is(V)
              ? e ||
                (e =
                  ((t = a[r("fixedWidth")] && n.Layout.slideSize(0)) &&
                    ceil(rect(l.track)[r("width")] / t)) ||
                  (a[r("autoWidth")] && u.length) ||
                  2 * a.perPage)
              : (e = 0),
            e
          );
        }
        return {
          mount: function () {
            o(), i(D, s), i(D, o), i([B, C], p);
          },
          destroy: s,
        };
      },
      Move: function (i, u, r) {
        var s,
          t = U(i),
          e = t.on,
          a = t.emit,
          c = i.state.set,
          o = (t = u.Layout).slideSize,
          n = t.getPadding,
          l = t.totalSize,
          f = t.listSize,
          d = t.sliderSize,
          p = (t = u.Direction).resolve,
          g = t.orient,
          m = (t = u.Elements).list,
          h = t.track;

        function v() {
          u.Controller.isBusy() ||
            (u.Scroll.cancel(), y(i.index), u.Slides.update());
        }

        function y(t) {
          b(w(t, !0));
        }

        function b(t, e) {
          i.is(Z) ||
            ((e = e
              ? t
              : (function (t) {
                  {
                    var e, n;
                    i.is(V) &&
                      ((e = C(t)),
                      (n = e > u.Controller.getEnd()),
                      (e < 0 || n) && (t = E(t, n)));
                  }
                  return t;
                })(t)),
            style(m, "transform", "translate" + p("X") + "(" + e + "px)"),
            t !== e && a(tt));
        }

        function E(t, e) {
          var n = t - O(e),
            i = d();
          return (t -= g(i * (ceil(abs(n) / i) || 1)) * (e ? 1 : -1));
        }

        function A() {
          b(x()), s.cancel();
        }

        function C(t) {
          for (
            var e = u.Slides.get(), n = 0, i = 1 / 0, r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r].index,
              s = abs(w(o, !0) - t);
            if (!(s <= i)) break;
            (i = s), (n = o);
          }
          return n;
        }

        function w(t, e) {
          var n = g(
            l(t - 1) -
              ((t = t),
              "center" === (n = r.focus)
                ? (f() - o(t, !0)) / 2
                : +n * o(t) || 0)
          );
          return e
            ? ((t = n),
              (t = r.trimSpace && i.is(Q) ? clamp(t, 0, g(d() - f())) : t))
            : n;
        }

        function x() {
          var t = p("left");
          return rect(m)[t] - rect(h)[t] + g(n(!1));
        }

        function O(t) {
          return w(t ? u.Controller.getEnd() : 0, !!r.trimSpace);
        }
        return {
          mount: function () {
            (s = u.Transition), e([q, S, B, D], v);
          },
          move: function (t, e, n, i) {
            var r, o;
            t !== e &&
              ((r = n < t),
              (o = g(E(x(), r))),
              r ? 0 <= o : o <= m[p("scrollWidth")] - rect(h)[p("width")]) &&
              (A(), b(E(x(), n < t), !0)),
              c(F),
              a(P, e, n, t),
              s.start(e, function () {
                c(3), a(_, e, n, t), i && i();
              });
          },
          jump: y,
          translate: b,
          shift: E,
          cancel: A,
          toIndex: C,
          toPosition: w,
          getPosition: x,
          getLimit: O,
          exceededLimit: function (t, e) {
            e = isUndefined(e) ? x() : e;
            var n = !0 !== t && g(e) < g(O(!1)),
              t = !1 !== t && g(e) > g(O(!0));
            return n || t;
          },
          reposition: v,
        };
      },
      Controller: function (o, r, s) {
        var u,
          a,
          c,
          t = U(o).on,
          l = r.Move,
          f = l.getPosition,
          i = l.getLimit,
          d = l.toPosition,
          e = r.Slides,
          p = e.isEnough,
          n = e.getLength,
          g = o.is(V),
          m = o.is(Q),
          h = apply(A, !1),
          v = apply(A, !0),
          y = s.start || 0,
          b = y;

        function E() {
          (u = n(!0)), (a = s.perMove), (c = s.perPage);
          var t = clamp(y, 0, u - 1);
          t !== y && ((y = t), l.reposition());
        }

        function A(t, e) {
          var n = a || (P() ? 1 : c),
            n = C(y + n * (t ? -1 : 1), y, !(a || P()));
          return -1 === n && m && !approximatelyEqual(f(), i(!t), 1)
            ? t
              ? 0
              : x()
            : e
            ? n
            : w(n);
        }

        function C(t, e, n) {
          var i, r;
          return (
            p()
              ? ((i = x()),
                (r = (function (t) {
                  if (m && "move" === s.trimSpace && t !== y)
                    for (
                      var e = f();
                      e === d(t, !0) && between(t, 0, o.length - 1, !s.rewind);

                    )
                      t < y ? --t : ++t;
                  return t;
                })(t)) !== t && ((e = t), (t = r), (n = !1)),
                t < 0 || i < t
                  ? (t =
                      a || (!between(0, t, e, !0) && !between(i, e, t, !0))
                        ? g
                          ? n
                            ? t < 0
                              ? -(u % c || c)
                              : u
                            : t
                          : s.rewind
                          ? t < 0
                            ? i
                            : 0
                          : -1
                        : O(S(t)))
                  : n && t !== e && (t = O(S(e) + (t < e ? -1 : 1))))
              : (t = -1),
            t
          );
        }

        function w(t) {
          return g ? (t + u) % u || 0 : t;
        }

        function x() {
          return max(u - (P() || (g && a) ? 1 : c), 0);
        }

        function O(t) {
          return clamp(P() ? t : c * t, 0, x());
        }

        function S(t) {
          return P() ? t : floor((t >= x() ? u - 1 : t) / c);
        }

        function T(t) {
          t !== y && ((b = y), (y = t));
        }

        function P() {
          return !isUndefined(s.focus) || s.isNavigation;
        }

        function _() {
          return o.state.is([F, J]) && !!s.waitForTransition;
        }
        return {
          mount: function () {
            E(), t([B, D], E);
          },
          go: function (t, e, n) {
            var i;
            _() ||
              (-1 <
                (i = w(
                  (t = (function (t) {
                    var e = y;
                    {
                      var n, i;
                      isString(t)
                        ? ((i = t.match(/([+\-<>])(\d+)?/) || []),
                          (n = i[1]),
                          (i = i[2]),
                          "+" === n || "-" === n
                            ? (e = C(y + +("" + n + (+i || 1)), y))
                            : ">" === n
                            ? (e = i ? O(+i) : h(!0))
                            : "<" === n && (e = v(!0)))
                        : (e = g ? t : clamp(t, 0, x()));
                    }
                    return e;
                  })(t))
                )) &&
                (e || i !== y) &&
                (T(i), l.move(t, i, b, n)));
          },
          scroll: function (t, e, n, i) {
            r.Scroll.scroll(t, e, n, function () {
              T(w(l.toIndex(f()))), i && i();
            });
          },
          getNext: h,
          getPrev: v,
          getAdjacent: A,
          getEnd: x,
          setIndex: T,
          getIndex: function (t) {
            return t ? b : y;
          },
          toIndex: O,
          toPage: S,
          toDest: function (t) {
            return (t = l.toIndex(t)), m ? clamp(t, 0, x()) : t;
          },
          hasFocus: P,
          isBusy: _,
        };
      },
      Arrows: function (r, t, e) {
        var n,
          i,
          o = U(r),
          s = o.on,
          u = o.bind,
          a = o.emit,
          c = e.classes,
          l = e.i18n,
          f = t.Elements,
          d = t.Controller,
          p = f.arrows,
          g = f.track,
          m = p,
          h = f.prev,
          v = f.next,
          y = {};

        function b() {
          var t = e.arrows;
          !t ||
            (h && v) ||
            ((m = p || create("div", c.arrows)),
            (h = w(!0)),
            (v = w(!1)),
            (n = !0),
            append(m, [h, v]),
            p || before(m, g)),
            h &&
              v &&
              (assign(y, {
                prev: h,
                next: v,
              }),
              display(m, t ? "" : "none"),
              addClass(m, (i = O + "--" + e.direction)),
              t &&
                (s([_, D, L], x),
                u(v, "click", apply(C, ">")),
                u(h, "click", apply(C, "<")),
                x(),
                setAttribute([h, v], j, g.id),
                a("arrows:mounted", h, v))),
            s(B, E);
        }

        function E() {
          A(), b();
        }

        function A() {
          o.destroy(),
            removeClass(m, i),
            n
              ? (remove(p ? [h, v] : m), (h = v = null))
              : removeAttribute([h, v], X);
        }

        function C(t) {
          d.go(t, !0);
        }

        function w(t) {
          return parseHtml(
            '<button class="' +
              c.arrow +
              " " +
              (t ? c.prev : c.next) +
              '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' +
              (e.size || 50) +
              " " +
              (e.size || 50) +
              '" width="' +
              (e.size || 50) +
              '" height="' +
              (e.size || 50) +
              '" focusable="false"><path fill=\'currentColor\' d="' +
              (e.arrowPath || "M12.7,4.1 37.3,24.5 12.7,45.9z") +
              '" />'
          );
        }

        function x() {
          var t = r.index,
            e = d.getPrev(),
            n = d.getNext(),
            i = -1 < e && t < e ? l.last : l.prev,
            t = -1 < n && n < t ? l.first : l.next;
          (h.disabled = e < 0),
            (v.disabled = n < 0),
            setAttribute(h, W, i),
            setAttribute(v, W, t),
            a("arrows:updated", h, v, e, n);
        }
        return {
          arrows: y,
          mount: b,
          destroy: A,
        };
      },
      Autoplay: function (t, e, n) {
        var i,
          r,
          o = U(t),
          s = o.on,
          u = o.bind,
          a = o.emit,
          c = w(n.interval, t.go.bind(t, ">"), function (t) {
            var e = f.bar;
            e && style(e, "width", 100 * t + "%"), a("autoplay:playing", t);
          }),
          l = c.isPaused,
          f = e.Elements,
          d = (o = e.Elements).root,
          p = o.toggle,
          g = n.autoplay,
          m = "pause" === g;

        function h() {
          l() &&
            e.Slides.isEnough() &&
            (c.start(!n.resetProgress), (r = i = m = !1), b(), a(x));
        }

        function v(t) {
          (m = !!(t = void 0 === t ? !0 : t)), b(), l() || (c.pause(), a(T));
        }

        function y() {
          m || (i || r ? v(!1) : h());
        }

        function b() {
          p &&
            (toggleClass(p, Y, !m),
            setAttribute(p, W, n.i18n[m ? "play" : "pause"]));
        }

        function E(t) {
          t = e.Slides.getAt(t);
          c.set((t && +getAttribute(t.slide, Dt)) || n.interval);
        }
        return {
          mount: function () {
            g &&
              (n.pauseOnHover &&
                u(d, "mouseenter mouseleave", function (t) {
                  (i = "mouseenter" === t.type), y();
                }),
              n.pauseOnFocus &&
                u(d, "focusin focusout", function (t) {
                  (r = "focusin" === t.type), y();
                }),
              p &&
                u(p, "click", function () {
                  m ? h() : v(!0);
                }),
              s([P, k, D], c.rewind),
              s(P, E),
              p && setAttribute(p, j, f.track.id),
              m || h(),
              b());
          },
          destroy: c.cancel,
          play: h,
          pause: v,
          isPaused: l,
        };
      },
      Cover: function (t, e, n) {
        var i = U(t).on;

        function r(n) {
          e.Slides.forEach(function (t) {
            var e = child(t.container || t.slide, "img");
            e && e.src && o(n, e, t);
          });
        }

        function o(t, e, n) {
          n.style(
            "background",
            t ? 'center/cover no-repeat url("' + e.src + '")' : "",
            !0
          ),
            display(e, t ? "none" : "");
        }
        return {
          mount: function () {
            n.cover && (i(y, apply(o, !0)), i([q, B, D], apply(r, !0)));
          },
          destroy: apply(r, !1),
        };
      },
      Scroll: function (o, u, s) {
        var a,
          c,
          t = U(o),
          e = t.on,
          l = t.emit,
          f = o.state.set,
          d = u.Move,
          p = d.getPosition,
          g = d.getLimit,
          m = d.exceededLimit,
          h = d.translate,
          v = 1;

        function y(t, e, n, i, r) {
          var o,
            s = p(),
            n =
              (A(),
              n &&
                ((n = u.Layout.sliderSize()),
                (o = sign(t) * n * floor(abs(t) / n) || 0),
                (t = d.toPosition(u.Controller.toDest(t % n)) + o)),
              approximatelyEqual(s, t, 1));
          (v = 1),
            (e = n ? 0 : e || max(abs(t - s) / 1.5, 800)),
            (c = i),
            (a = w(e, b, apply(E, s, t, r), 1)),
            f(J),
            l(k),
            a.start();
        }

        function b() {
          f(3), c && c(), l(L);
        }

        function E(t, e, n, i) {
          var r = p(),
            i =
              (t +
                (e - t) *
                  ((e = i),
                  (t = s.easingFunc) ? t(e) : 1 - Math.pow(1 - e, 4)) -
                r) *
              v;
          h(r + i),
            o.is(Q) &&
              !n &&
              m() &&
              ((v *= 0.6), abs(i) < 10 && y(g(m(!0)), 600, !1, c, !0));
        }

        function A() {
          a && a.cancel();
        }

        function n() {
          a && !a.isPaused() && (A(), b());
        }
        return {
          mount: function () {
            e(P, A), e([B, D], n);
          },
          destroy: A,
          scroll: y,
          cancel: n,
        };
      },
      Drag: function (s, r, u) {
        var a,
          e,
          o,
          c,
          l,
          f,
          d,
          p,
          t = U(s),
          n = t.on,
          g = t.emit,
          m = t.bind,
          h = t.unbind,
          v = s.state,
          y = r.Move,
          b = r.Scroll,
          E = r.Controller,
          A = r.Elements.track,
          C = r.Media.reduce,
          i = (t = r.Direction).resolve,
          w = t.orient,
          x = y.getPosition,
          O = y.exceededLimit,
          S = !1;

        function I() {
          var t = u.drag;
          z(!t), (c = "free" === t);
        }

        function N(t) {
          var e, n, i;
          (f = !1),
            d ||
              ((e = R(t)),
              (n = t.target),
              (i = u.noDrag),
              matches(n, "." + yt + ", ." + K) ||
                (i && matches(n, i)) ||
                (!e && t.button) ||
                (E.isBusy()
                  ? prevent(t, !0)
                  : ((p = e ? A : window),
                    (l = v.is([F, J])),
                    (o = null),
                    m(p, Tt, T, $),
                    m(p, Pt, P, $),
                    y.cancel(),
                    b.cancel(),
                    _(t))));
        }

        function T(t) {
          var e, n, i, r, o;
          v.is(6) || (v.set(6), g("drag")),
            t.cancelable &&
              (l
                ? (y.translate(a + D(t) / (S && s.is(Q) ? 5 : 1)),
                  (o = 200 < k(t)),
                  (e = S !== (S = O())),
                  (o || e) && _(t),
                  (f = !0),
                  g("dragging"),
                  prevent(t))
                : abs(D((o = t))) > abs(D(o, !0)) &&
                  ((e = t),
                  (n = u.dragMinThreshold),
                  (i = isObject(n)),
                  (r = (i && n.mouse) || 0),
                  (i = (i ? n.touch : +n) || 10),
                  (l = abs(D(e)) > (R(e) ? i : r)),
                  prevent(t)));
        }

        function P(t) {
          var e, n, i;
          v.is(6) && (v.set(3), g("dragged")),
            l &&
              ((n = (function (t) {
                return (
                  x() +
                  sign(t) *
                    min(
                      abs(t) * (u.flickPower || 600),
                      c ? 1 / 0 : r.Layout.listSize() * (u.flickMaxPages || 1)
                    )
                );
              })(
                (e = (function (t) {
                  if (s.is(V) || !S) {
                    var e = k(t);
                    if (e && e < 200) return D(t) / e;
                  }
                  return 0;
                })((e = t)))
              )),
              (i = u.rewind && u.rewindByDrag),
              C(!1),
              c
                ? E.scroll(n, 0, u.snap)
                : s.is(Z)
                ? E.go(w(sign(e)) < 0 ? (i ? "<" : "-") : i ? ">" : "+")
                : s.is(Q) && S && i
                ? E.go(O(!0) ? ">" : "<")
                : E.go(E.toDest(n), !0),
              C(!0),
              prevent(t)),
            h(p, Tt, T),
            h(p, Pt, P),
            (l = !1);
        }

        function j(t) {
          !d && f && prevent(t, !0);
        }

        function _(t) {
          (o = e), (e = t), (a = x());
        }

        function D(t, e) {
          return M(t, e) - M(L(t), e);
        }

        function k(t) {
          return timeOf(t) - timeOf(L(t));
        }

        function L(t) {
          return (e === t && o) || e;
        }

        function M(t, e) {
          return (R(t) ? t.changedTouches[0] : t)["page" + i(e ? "Y" : "X")];
        }

        function R(t) {
          return "undefined" != typeof TouchEvent && t instanceof TouchEvent;
        }

        function z(t) {
          d = t;
        }
        return {
          mount: function () {
            m(A, Tt, noop, $),
              m(A, Pt, noop, $),
              m(A, St, N, $),
              m(A, "click", j, {
                capture: !0,
              }),
              m(A, "dragstart", prevent),
              n([q, B], I);
          },
          disable: z,
          isDragging: function () {
            return l;
          },
        };
      },
      Keyboard: function (e, t, n) {
        var i,
          r,
          o = U(e),
          s = o.on,
          u = o.bind,
          a = o.unbind,
          c = e.root,
          l = t.Direction.resolve;

        function f() {
          var t = n.keyboard;
          t && ((i = "global" === t ? window : c), u(i, m, g));
        }

        function d() {
          a(i, m);
        }

        function p() {
          var t = r;
          (r = !0),
            nextTick(function () {
              r = t;
            });
        }

        function g(t) {
          r || ((t = kt(t)) === l(M) ? e.go("<") : t === l(R) && e.go(">"));
        }
        return {
          mount: function () {
            f(), s(B, d), s(B, f), s(P, p);
          },
          destroy: d,
          disable: function (t) {
            r = t;
          },
        };
      },
      LazyLoad: function (n, t, r) {
        var e = U(n),
          i = e.on,
          o = e.off,
          s = e.bind,
          u = e.emit,
          a = "sequential" === r.lazyLoad,
          c = [q, D, _, L],
          l = [];

        function f() {
          empty(l),
            t.Slides.forEach(function (i) {
              queryAll(i.slide, Lt).forEach(function (t) {
                var e = getAttribute(t, h),
                  n = getAttribute(t, v);
                (e === t.src && n === t.srcset) ||
                  ((e = r.classes.spinner),
                  (e =
                    child((n = t.parentElement), "." + e) ||
                    create("span", e, n)),
                  l.push([t, i, e]),
                  t.src || display(t, "none"));
              });
            }),
            a && m();
        }

        function d() {
          (l = l.filter(function (t) {
            var e = r.perPage * ((r.preloadPages || 1) + 1) - 1;
            return !t[1].isWithin(n.index, e) || p(t);
          })).length || o(c);
        }

        function p(t) {
          var e = t[0];
          addClass(t[1].slide, b),
            s(e, "load error", apply(g, t)),
            setAttribute(e, "src", getAttribute(e, h)),
            setAttribute(e, "srcset", getAttribute(e, v)),
            removeAttribute(e, h),
            removeAttribute(e, v);
        }

        function g(t, e) {
          var n = t[0],
            i = t[1];
          removeClass(i.slide, b),
            "error" !== e.type &&
              (remove(t[2]), display(n, ""), u(y, n, i), u(C)),
            a && m();
        }

        function m() {
          l.length && p(l.shift());
        }
        return {
          mount: function () {
            r.lazyLoad && (f(), i(D, f), a || i(c, d));
          },
          destroy: apply(empty, l),
        };
      },
      Pagination: function (f, t, d) {
        var p,
          g,
          e = U(f),
          m = e.on,
          h = e.emit,
          v = e.bind,
          y = t.Slides,
          b = t.Elements,
          n = t.Controller,
          E = n.hasFocus,
          i = n.getIndex,
          s = n.go,
          u = t.Direction.resolve,
          A = [];

        function C() {
          p &&
            (remove(b.pagination ? slice(p.children) : p),
            removeClass(p, g),
            empty(A),
            (p = null)),
            e.destroy();
        }

        function w(t) {
          s(">" + t, !0);
        }

        function x(t, e) {
          var n = A.length,
            i = kt(e),
            r = O(),
            o = -1,
            r =
              (i === u(R, !1, r)
                ? (o = ++t % n)
                : i === u(M, !1, r)
                ? (o = (--t + n) % n)
                : "Home" === i
                ? (o = 0)
                : "End" === i && (o = n - 1),
              A[o]);
          r && (focus(r.button), s(">" + o), prevent(e, !0));
        }

        function O() {
          return d.paginationDirection || d.direction;
        }

        function S(t) {
          return A[n.toPage(t)];
        }

        function T() {
          var t,
            e = S(i(!0)),
            n = S(i());
          e &&
            (removeClass((t = e.button), Y),
            removeAttribute(t, a),
            setAttribute(t, N, -1)),
            n &&
              (addClass((t = n.button), Y),
              setAttribute(t, a, !0),
              setAttribute(t, N, "")),
            h(
              "pagination:updated",
              {
                list: p,
                items: A,
              },
              e,
              n
            );
        }
        return {
          items: A,
          mount: function t() {
            if ((C(), m([B, D], t), d.pagination && y.isEnough())) {
              m([P, k, L], T);
              var e = f.length,
                n = d.classes,
                i = d.i18n,
                r = d.perPage,
                o = E() ? e : ceil(e / r);
              addClass(
                (p =
                  b.pagination ||
                  create("ul", n.pagination, b.track.parentElement)),
                (g = vt + "--" + O())
              ),
                setAttribute(p, I, "tablist"),
                setAttribute(p, W, i.select),
                setAttribute(p, H, O() === z ? "vertical" : "");
              for (var s = 0; s < o; s++) {
                var u = create("li", null, p),
                  a = create(
                    "div",
                    {
                      class: n.page,
                    },
                    u
                  ),
                  c = y.getIn(s).map(function (t) {
                    return t.slide.id;
                  }),
                  l = !E() && 1 < r ? i.pageX : i.slideX;
                v(a, "click", apply(w, s)),
                  d.paginationKeyboard && v(a, "keydown", apply(x, s)),
                  setAttribute(u, I, "presentation"),
                  setAttribute(a, I, "tab"),
                  setAttribute(a, j, c.join(" ")),
                  setAttribute(a, W, format(l, s + 1)),
                  setAttribute(a, N, -1),
                  A.push({
                    li: u,
                    button: a,
                    page: s,
                  });
              }
              T(),
                h(
                  "pagination:mounted",
                  {
                    list: p,
                    items: A,
                  },
                  S(f.index)
                );
            }
          },
          destroy: C,
          getAt: S,
          update: T,
        };
      },
      Sync: function (n, t, e) {
        var i = e.isNavigation,
          r = e.slideFocus,
          o = [];

        function s() {
          var t, e;
          n.splides.forEach(function (t) {
            t.isParent || (a(n, t.splide), a(t.splide, n));
          }),
            i &&
              ((t = U(n)),
              (e = t.on)(et, l),
              e(st, f),
              e([q, B], c),
              o.push(t),
              t.emit(ut, n.splides));
        }

        function u() {
          o.forEach(function (t) {
            t.destroy();
          }),
            empty(o);
        }

        function a(t, i) {
          t = U(t);
          t.on(P, function (t, e, n) {
            i.go(i.is(V) ? n : t);
          }),
            o.push(t);
        }

        function c() {
          setAttribute(t.Elements.list, H, e.direction === z ? "vertical" : "");
        }

        function l(t) {
          n.go(t.index);
        }

        function f(t, e) {
          includes(Mt, kt(e)) && (l(t), prevent(e));
        }
        return {
          setup: function () {
            n.options = {
              slideFocus: isUndefined(r) ? i : r,
            };
          },
          mount: s,
          destroy: u,
          remount: function () {
            u(), s();
          },
        };
      },
      Wheel: function (s, u, a) {
        var t = U(s).bind,
          c = 0;

        function e(t) {
          var e, n, i, r, o;
          t.cancelable &&
            ((e = (o = t.deltaY) < 0),
            (n = timeOf(t)),
            (i = a.wheelMinThreshold || 0),
            (r = a.wheelSleep || 0),
            abs(o) > i && r < n - c && (s.go(e ? "<" : ">"), (c = n)),
            (o = e),
            (a.releaseWheel &&
              !s.state.is(F) &&
              -1 === u.Controller.getAdjacent(o)) ||
              prevent(t));
        }
        return {
          mount: function () {
            a.wheel && t(u.Elements.track, "wheel", e, $);
          },
        };
      },
      Live: function (t, e, n) {
        var i = U(t).on,
          r = e.Elements.track,
          o = n.live && !n.isNavigation,
          s = create("span", g),
          u = (s.classList.add("display-none"), w(90, apply(a, !1)));

        function a(t) {
          setAttribute(r, f, t), t ? (append(r, s), u.start()) : remove(s);
        }

        function c(t) {
          o && setAttribute(r, l, t ? "off" : "polite");
        }
        return {
          mount: function () {
            o &&
              (c(!e.Autoplay.isPaused()),
              setAttribute(r, p, !0),
              (s.textContent = "…"),
              i(x, apply(c, !0)),
              i(T, apply(c, !1)),
              i([_, L], apply(a, !0)));
          },
          disable: c,
          destroy: function () {
            removeAttribute(r, [l, p, f]), remove(s);
          },
        };
      },
    }),
    Rt = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: {
        slide: A,
        clone: pt,
        arrows: O,
        arrow: K,
        prev: mt,
        next: ht,
        pagination: vt,
        page: yt,
        spinner: PROJECT_CODE + "-spinner",
      },
      i18n: {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay",
        carousel: "carousel",
        slide: "slide",
        select: "Select a slide to show",
        slideLabel: "%s of %s",
      },
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause",
      },
    };

  function zt(t, i, e) {
    var n = U(t).on;
    return {
      mount: function () {
        n([q, D], function () {
          nextTick(function () {
            i.Slides.style(
              "transition",
              "opacity " + e.speed + "ms " + e.easing
            );
          });
        });
      },
      start: function (t, e) {
        var n = i.Elements.track;
        style(n, "height", unit(rect(n).height)),
          nextTick(function () {
            e(), style(n, "height", "");
          });
      },
      cancel: noop,
    };
  }

  function It(o, t, s) {
    var u,
      e = U(o).bind,
      a = t.Move,
      c = t.Controller,
      l = t.Scroll,
      n = t.Elements.list,
      f = apply(style, n, "transition");

    function i() {
      f(""), l.cancel();
    }
    return {
      mount: function () {
        e(n, "transitionend", function (t) {
          t.target === n && u && (i(), u());
        });
      },
      start: function (t, e) {
        var n = a.toPosition(t, !0),
          i = a.getPosition(),
          r = (function (t) {
            var e = s.rewindSpeed;
            if (o.is(Q) && e) {
              var n = c.getIndex(!0),
                i = c.getEnd();
              if ((0 === n && i <= t) || (i <= n && 0 === t)) return e;
            }
            return s.speed;
          })(t);
        1 <= abs(n - i) && 1 <= r
          ? s.useScroll
            ? l.scroll(n, r, !1, e)
            : (s.autoWidthModify &&
                n < i &&
                (n += s.fixedMainWidth - s.fixedWidth),
              f("transform " + r + "ms " + s.easing),
              a.translate(n, !0),
              (u = e))
          : (a.jump(t), e());
      },
      cancel: i,
    };
  }
  e = (function () {
    function n(t, e) {
      (this.event = U()),
        (this.Components = {}),
        (this.state = i(1)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      t = isString(t) ? query(document, t) : t;
      assert(t, t + " is invalid."),
        (e = merge(
          {
            label: getAttribute((this.root = t), W) || "",
            labelledby: getAttribute(t, E) || "",
          },
          Rt,
          n.defaults,
          e || {}
        ));
      try {
        merge(e, JSON.parse(getAttribute(t, DATA_ATTRIBUTE)));
      } catch (t) {
        assert(!1, "Invalid JSON");
      }
      this._o = Object.create(merge({}, e));
    }
    var t = n.prototype;
    return (
      (t.mount = function (t, e) {
        var n = this,
          i = this.state,
          r = this.Components;
        return (
          assert(i.is([1, 7]), "Already mounted!"),
          i.set(1),
          (this._C = r),
          (this._T = e || this._T || (this.is(Z) ? zt : It)),
          (this._E = t || this._E),
          forOwn(
            assign({}, c, this._E, {
              Transition: this._T,
            }),
            function (t, e) {
              t = t(n, r, n._o);
              (r[e] = t).setup && t.setup();
            }
          ),
          forOwn(r, function (t) {
            t.mount && t.mount();
          }),
          this.emit(q),
          addClass(this.root, "is-initialized"),
          i.set(3),
          this.emit("ready"),
          this
        );
      }),
      (t.sync = function (t) {
        return (
          this.splides.push({
            splide: t,
          }),
          t.splides.push({
            splide: this,
            isParent: !0,
          }),
          this.state.is(3) &&
            (this._C.Sync.remount(), t.Components.Sync.remount()),
          this
        );
      }),
      (t.go = function (t) {
        return this._C.Controller.go(t), this;
      }),
      (t.on = function (t, e) {
        return this.event.on(t, e), this;
      }),
      (t.off = function (t) {
        return this.event.off(t), this;
      }),
      (t.emit = function (t) {
        var e;
        return (
          (e = this.event).emit.apply(e, [t].concat(slice(arguments, 1))), this
        );
      }),
      (t.add = function (t, e) {
        return this._C.Slides.add(t, e), this;
      }),
      (t.remove = function (t) {
        return this._C.Slides.remove(t), this;
      }),
      (t.is = function (t) {
        return this._o.type === t;
      }),
      (t.refresh = function () {
        return this.emit(D), this;
      }),
      (t.destroy = function (e) {
        void 0 === e && (e = !0);
        var t = this.event,
          n = this.state;
        return (
          n.is(1)
            ? U(this).on("ready", this.destroy.bind(this, e))
            : (forOwn(
                this._C,
                function (t) {
                  t.destroy && t.destroy(e);
                },
                !0
              ),
              t.emit(r),
              t.destroy(),
              e && empty(this.splides),
              n.set(7)),
          this
        );
      }),
      createClass(n, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (t) {
            this._C.Media.set(t, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      n
    );
  })();
  return (e.defaults = {}), (e.STATES = n), e;
});
var SocialFooter = Header.querySelector(".social").cloneNode(!0),
  ContactFromSection =
    (SocialFooter &&
      (SocialFooter.setAttribute("class", "social-footer ani-item"),
      Footer.querySelector(".wrap-box-footer").append(SocialFooter)),
    Container.querySelector(".contact-form-section"));

function changeUrl(c, e, t, l, r, o, n) {
  void 0 !== window.history.pushState &&
    document.URL != c &&
    "" != c &&
    window.history.pushState(
      {
        path: c,
        dataName: r,
        title: e,
        keyword: l,
        description: t,
        titleog: o,
        descriptionog: n,
      },
      "",
      c
    ),
    "" != e &&
      ((document.title = e),
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", t),
      document
        .querySelector('meta[name="keywords"]')
        .setAttribute("content", l),
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", o),
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", n),
      document
        .querySelector('meta[property="og:url"]')
        .setAttribute("content", c),
      document.querySelector('link[rel="canonical"]').setAttribute("href", c)),
    document.getElementById("changlanguage_redirect") &&
      (document.getElementById("changlanguage_redirect").value = c);
}

function changeAlternate(c, e, t) {
  null !== e &&
    (void 0 !== t
      ? (document.querySelector('link[hreflang="vi-vn"]') &&
          document
            .querySelector('link[hreflang="vi-vn"]')
            .setAttribute("href", e.dataset.hrefvi),
        document.querySelector('link[hreflang="en-vn"]') &&
          document
            .querySelector('link[hreflang="en-vn"]')
            .setAttribute("href", e.dataset.hrefen))
      : e.forEach(function (c) {
          c.classList.contains("alternate-hl-vi") &&
            document.querySelector('link[hreflang="vi-vn"]') &&
            document
              .querySelector('link[hreflang="vi-vn"]')
              .setAttribute("href", c.innerHTML),
            c.classList.contains("alternate-hl-en") &&
              document.querySelector('link[hreflang="en-vn"]') &&
              document
                .querySelector('link[hreflang="en-vn"]')
                .setAttribute("href", c.innerHTML);
        }));
}
ContactFromSection &&
  "contact-page" == IDPage &&
  (SocialFooter = Header.querySelector(".social").cloneNode(!0)) &&
  (SocialFooter.setAttribute("class", "social-footer ani-item"),
  ContactFromSection.querySelector(".wrap-content").append(SocialFooter));
var removeURL = function () {
    var c = document.querySelector(".nav-item.current a").href,
      e = document.querySelector(".nav-item.current a").dataset.title,
      t = document.querySelector(".nav-item.current a").dataset.keyword,
      l = document.querySelector(".nav-item.current a").dataset.description;
    changeUrl(
      c,
      e,
      l,
      t,
      document.querySelector(".nav-item.current a").dataset.name,
      e,
      l
    );
  },
  addURL = function (c, e) {
    var t = c.href || c.dataset.href,
      l =
        c.dataset.title ||
        c.parentElement.querySelector(".link-change-url").dataset.title,
      r =
        c.dataset.keyword ||
        c.parentElement.querySelector(".link-change-url").dataset.keyword,
      o =
        c.dataset.description ||
        c.parentElement.querySelector(".link-change-url").dataset.description;
    changeUrl(t, l, o, r, c.dataset.name, l, o);
  };

function onClick(c, e) {
  return (
    document.getElementById("language_code").setAttribute("value", c),
    document.URL == document.querySelector(".httpserver").innerHTML
      ? (document
          .querySelector("input[name='language_code']")
          .setAttribute("value", c),
        document
          .querySelector("input[name='redirect']")
          .setAttribute("value", e),
        (document.location = e))
      : ((c = (
          "vi" == document.getElementById("language_code").getAttribute("value")
            ? document.querySelector('link[hreflang="vi-vn"]')
            : document.querySelector('link[hreflang="en-vn"]')
        ).getAttribute("href")),
        document
          .getElementById("changlanguage_redirect")
          .setAttribute("value", c),
        (document.location = c)),
    !1
  );
}

function ResizeWindows() {
  var c;
  Mobile.matches
    ? (HTML.classList.add("is-mobile"),
      Array.from(
        document.querySelectorAll(".bg-fixed, .trans-y, .trans-x"),
        function (c) {
          c && c.removeAttribute("style");
        }
      ))
    : (HTML.classList.remove("is-mobile"),
      (c = Container.querySelector(".box-video-center")),
      "home-page" == IDPage &&
        c &&
        (window.innerWidth / window.innerHeight > 560 / 315
          ? c.classList.add("horz")
          : c.classList.remove("horz")));
}

function ScrollBody() {
  var c;
  Banner &&
    (Banner.setAttribute("data-scroll", ""),
    Banner.setAttribute("data-scroll-speed", "-5"),
    Banner.setAttribute("data-scroll-position", "top")),
    Array.from(Container.querySelectorAll(".stable"), function (c) {
      c &&
        (c.setAttribute("data-scroll", ""),
        c.setAttribute("data-scroll-speed", "0"),
        c.setAttribute("data-scroll-position", "top"));
    }),
    Array.from(document.querySelectorAll(".bg-fixed"), function (c) {
      c.setAttribute("data-scroll", ""),
        c.setAttribute("data-scroll-sticky", ""),
        c.setAttribute("data-scroll-offset", "0"),
        c.setAttribute("data-scroll-target", "#sticky");
    }),
    Array.from(document.querySelectorAll(".trans-y"), function (c) {
      var e = c.getAttribute("data-speed") || "-3";
      c.setAttribute("data-scroll", ""),
        c.setAttribute("data-scroll-speed", e),
        c.setAttribute("data-scroll-direction", "vertical");
    }),
    Array.from(document.querySelectorAll(".trans-x"), function (c) {
      var e = c.getAttribute("data-speed") || "-3";
      c.setAttribute("data-scroll", ""),
        c.setAttribute("data-scroll-speed", e),
        c.setAttribute("data-scroll-direction", "horizontal");
    }),
    Mobile.matches ||
      ((thatScroll = new BTQScroll({
        el: Smooth,
        smooth: !0,
        getSpeed: !0,
        getDirection: !0,
      })).on("scroll", function (c) {
        var e = c.scroll.y;
        window.requestAnimationFrame(function () {
          viewItems(e);
        });
      }),
      Mobile.matches ||
        "about-page" != IDPage ||
        (((c = document.createElement("script")).id = "js_scrolltrigger"),
        (c.src = httptemplate + "js/scrolltrigger.js"),
        (c.type = "text/javascript"),
        document.getElementById("js_scrolltrigger") ||
          document.body.appendChild(c),
        setTimeout(function () {
          gsap.registerPlugin(ScrollTrigger),
            thatScroll.on("scroll", ScrollTrigger.update),
            ScrollTrigger.scrollerProxy(Smooth, {
              scrollTop: function (c) {
                return arguments.length
                  ? thatScroll.scrollTo(c, 0, 0)
                  : thatScroll.scroll.instance.scroll.y;
              },
              getBoundingClientRect: function () {
                return {
                  top: 0,
                  left: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                };
              },
              pinType: Smooth.style.transform ? "transform" : "fixed",
            }),
            document.querySelectorAll(".circle-rotate").forEach(function (c) {
              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: c,
                    start: "top 100%",
                    end: "top 0%",
                    scrub: 2,
                    markers: !1,
                    scroller: Smooth,
                  },
                })
                .from(c, {
                  rotation: -90,
                  duration: 1.2,
                  ease: "none",
                });
            }),
            setTimeout(function () {
              thatScroll.update(), ScrollTrigger.refresh();
            }, 500);
        }, 300)));
}

function viewItems(l) {
  var c;
  100 < l
    ? (Header.classList.add("hide"),
      Wheel && Wheel.classList.remove("show"),
      Social.classList.remove("show"))
    : l < 100 &&
      10 < l &&
      (Header.classList.remove("hide"),
      Wheel && Wheel.classList.add("show"),
      Social.classList.add("show")),
    windscroll < l && 100 <= l && !NavClick.classList.contains("show")
      ? (Header.classList.add("scrolling-down"),
        HeaderWidget.classList.add("scrolling-down"))
      : (Header.classList.remove("scrolling-down"),
        HeaderWidget.classList.remove("scrolling-down")),
    OuterNav &&
      !hasClass(OuterNav, "release") &&
      ((c = Header.querySelector(".outer-nav.second")),
      (
        Mobile.matches
          ? l >= OuterNavSec.offsetTop
          : l >= OuterNavSec.offsetTop + 50
      )
        ? (c.classList.add("fixex"), OuterNav.classList.add("fixex"))
        : (c.classList.remove("fixed"), OuterNav.classList.remove("fixed"))),
    Container.querySelector(".set-post") &&
      Array.from(document.querySelectorAll(".set-post"), function (c) {
        var e = c.offsetTop - 300,
          t = c.clientHeight,
          t = e + (t = t < window.innerHeight ? window.innerHeight : t);
        e <= l &&
          l <= t &&
          (c.classList.add("active"),
          document.querySelectorAll(".sub-nav li button").forEach(function (c) {
            c.classList.remove("current");
          }),
          document
            .querySelectorAll(
              '.sub-nav li button[data-name="' +
                c.getAttribute("data-post") +
                '"]'
            )
            .forEach(function (c) {
              c.classList.add("current");
            }),
          Mobile.matches && detectBut());
      }),
    (windscroll = l);
}

function ScrollTos(c) {
  Mobile.matches
    ? gsap.to("html", {
        duration: 1,
        scrollTop: c,
        ease: "power2.in",
      })
    : thatScroll.scrollTo(c);
}

function FocusText() {
  var c = document.querySelectorAll(
    ".input-text:not(.already), .input-area:not(.already)"
  );
  c &&
    c.forEach(function (c) {
      c.classList.add("already"),
        c.addEventListener("focusin", function (c) {
          this.querySelector(".holder") &&
            this.querySelector(".holder").classList.add("hide");
        }),
        c.addEventListener("focusout", function (c) {
          this.querySelector("input, textarea").value.length <= 0 &&
            this.querySelector(".holder") &&
            this.querySelector(".holder").classList.remove("hide");
        });
    });
}

function Done() {
  ContentLoad(),
    ScrollBody(),
    "home-page" == IDPage && SlidePicture.slideBanner(),
    LazyImageLoad(),
    Footer &&
      (observerFooter = new IntersectionObserver(function (c) {
        c.forEach(function (c) {
          !c.isIntersecting ||
            hasClass(Container, "check-again") ||
            Mobile.matches ||
            (thatScroll.update(), addClass(Container, "check-again"));
        });
      })).observe(Footer),
    Body.insertAdjacentHTML(
      "beforeend",
      `
      <div style="width:0;height:0;display:none;">
    <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="ico-phone" viewBox="0 0 40 40">
            <path fill="currentColor"
                d="M33.8,27.5L30,25.4c-0.9-0.5-1.7-0.1-2.5,1c-1.8,2.4-2.6,2.9-4.8,1.7c-2-1.1-3.5-2.5-5.3-4.3c-1.8-1.8-3.2-3.3-4.3-5.3c-1.2-2.2-0.7-3,1.7-4.8c1.1-0.8,1.5-1.5,1-2.5l-2.1-3.8c-0.8-1.6-2-1.8-3.8-1.2c-2.4,0.8-4.8,4.4-4.7,6C5.5,17.1,8,23,13.1,28.1s11,7.6,15.9,7.9c1.7,0.1,5.2-2.3,6-4.7C35.6,29.5,35.4,28.3,33.8,27.5z" />
            <path fill="currentColor"
                d="M22.3,12.7c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5l0,0c0.9,0,1.7,0.3,2.3,0.9c0.6,0.6,1,1.4,0.9,2.3c0,0.8,0.6,1.5,1.5,1.5l0,0c0.8,0,1.5-0.6,1.5-1.5c0-1.7-0.6-3.2-1.8-4.4S23.9,12.7,22.3,12.7z M31,10.2c-2.3-2.3-5.5-3.6-8.7-3.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5l0,0c2.5,0,4.9,1,6.6,2.7c1.8,1.8,2.7,4.1,2.7,6.7c0,0.8,0.7,1.5,1.5,1.5l0,0c0.8,0,1.5-0.7,1.5-1.5C34.7,15.6,33.4,12.5,31,10.2z" />
        </symbol>
        <symbol id="ico-loading-text" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M66,14.4h1.5c-0.2,1.1,0.2,1.9,1.2,2.5s1.7,0.4,2.1-0.2c0.2-0.3,0.2-0.7,0-1s-0.5-0.8-1.1-1.4c-0.6-0.7-0.9-1-1.3-1.7c-0.3-0.7-0.3-1.3,0.2-2.1c0.4-0.7,1-1.1,1.7-1.2c0.7-0.1,1.5,0,2.2,0.4c1.3,0.7,1.9,2,1.8,3.4h-1.5c0.1-0.9-0.2-1.6-1-2.1c-0.8-0.4-1.5-0.3-1.8,0.3s-0.1,1.1,0.9,2.2c0.2,0.3,0.4,0.5,0.5,0.6s0.3,0.3,0.5,0.6s0.3,0.5,0.4,0.7c0.2,0.6,0.4,1.4-0.1,2.1c-0.4,0.7-1,1.2-1.8,1.3c-0.8,0.1-1.6-0.1-2.4-0.6C66.4,17.3,65.8,15.9,66,14.4z" />
            <path fill="currentColor"
                d="M78.8,25.3l2.5,3.2l-1.2,0.9L76.7,25l7.3-5.6l3.4,4.4l-1.2,0.9l-2.5-3.2L81.8,23l2.3,2.9L83,26.7l-2.3-2.9L78.8,25.3z" />
            <path fill="currentColor"
                d="M94,39.8l0.4,1.5l-9,2.2l-0.3-1.2l5-5.7L84,38.1l-0.4-1.5l9-2.2l0.3,1.2l-5,5.7L94,39.8z" />
            <path fill="currentColor"
                d="M35.6,86.4l0.2-0.6c0.3-1.2,1-2.1,2-2.7s2.2-0.7,3.5-0.3c1.4,0.4,2.4,1.1,3.1,2.2c0.7,1.1,0.8,2.3,0.5,3.6c-0.3,1.3-1.1,2.3-2.2,2.9c-1.1,0.7-2.4,0.8-3.7,0.5c-1.7-0.4-2.9-1.6-3.4-3.1l1.5-0.4c0.3,1,1.1,1.8,2.3,2.1c0.9,0.2,1.8,0.1,2.6-0.3c0.8-0.5,1.3-1.1,1.5-2.1c0.2-0.9,0.1-1.8-0.3-2.5c-0.5-0.8-1.2-1.3-2.2-1.5c-1.6-0.4-2.8,0.1-3.4,1.3l3,0.8l-0.3,1.3L35.6,86.4z" />
            <path fill="currentColor"
                d="M27.7,76.1L27.4,80l1.5,1l2-2.7l1.2,0.9l-5.4,7.5l-3-2.2c-0.7-0.5-1.1-1.1-1.2-1.9s0-1.5,0.5-2.2c0.7-1,1.9-1.4,3.1-1.1l0.4-4.1L27.7,76.1z M26.2,84.7l1.8-2.5l-1.8-1.3c-0.7-0.5-1.6-0.3-2.1,0.4c-0.5,0.7-0.4,1.6,0.3,2.1L26.2,84.7z" />
            <path fill="currentColor"
                d="M20.5,67.7c0.7,1.1,0.9,2.3,0.7,3.6c-0.3,1.3-1,2.3-2.1,3c-1.1,0.7-2.3,1-3.6,0.7s-2.3-1-3-2.1s-0.9-2.3-0.7-3.6c0.3-1.3,1-2.3,2.1-3s2.3-0.9,3.6-0.7C18.8,65.9,19.8,66.6,20.5,67.7z M19.3,68.5c-0.5-0.8-1.2-1.3-2-1.4c-0.9-0.2-1.7,0-2.5,0.5s-1.3,1.2-1.5,2.1s0,1.7,0.5,2.5s1.2,1.3,2.1,1.5c0.9,0.2,1.7,0,2.5-0.5s1.3-1.2,1.5-2.1C19.9,70.1,19.8,69.3,19.3,68.5z" />
            <path fill="currentColor"
                d="M7.1,60.6l-0.3-1.5l6-1.2c1.1-0.2,1.7-1,1.4-2.3S13.1,53.8,12,54l-6,1.2l-0.3-1.5l6-1.3c1-0.2,1.8,0,2.5,0.5s1.2,1.3,1.4,2.3s0.1,1.9-0.3,2.6c-0.4,0.8-1.1,1.2-2.1,1.4L7.1,60.6z" />
            <path fill="currentColor"
                d="M6.1,41.2c0.1-0.9,0.5-1.5,1.2-2s1.4-0.7,2.3-0.5c0.8,0.1,1.5,0.5,2,1.2s0.7,1.4,0.5,2.3L11.8,44l3.1,0.5L14.7,46l-9.1-1.4L6.1,41.2z M10.7,41.9c0.1-0.9-0.4-1.6-1.3-1.8c-0.9-0.1-1.7,0.4-1.8,1.3l-0.3,1.9l3.2,0.5L10.7,41.9z" />
            <path fill="currentColor"
                d="M15.4,29l-0.8-0.4c2-3.6,4.6-6.8,7.6-9.7c3-2.8,6.4-5.1,10-6.9C36,10.1,40,8.9,44,8.2c4.2-0.6,8.5-0.6,12.8,0.1l-0.1,0.9c-4.2-0.7-8.4-0.7-12.5-0.1c-4,0.6-7.9,1.8-11.5,3.6s-6.9,4-9.8,6.8C19.9,22.3,17.4,25.5,15.4,29z" />
            <path fill="currentColor"
                d="M55.9,89.4l-0.1-0.9c4.2-0.6,8.2-1.9,11.9-3.8c3.6-1.8,6.9-4.2,9.8-7s5.3-6,7.3-9.5s3.4-7.3,4.2-11.3l0.9,0.2c-0.8,4-2.3,7.9-4.3,11.5s-4.5,6.8-7.4,9.7c-3,2.9-6.4,5.3-10.1,7.1C64.3,87.5,60.2,88.8,55.9,89.4z" />
        </symbol>
        <symbol id="ico-loading-logo" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M39.3,43.9c0.4,0.1,0.7,0.2,1.1,0.3l0,0l0,0l0,0c-0.7,1.3-1.3,2.6-1.7,3.9c-1.1,3.3-1,6.3,0.2,8.7c1.1,2.1,2.5,3.7,4.3,4.7c0.7,0.4,1.4,0.7,2.2,0.9c-1.6,0.6-3.4,0.6-5.3,0c-4.7-1.4-6.8-7.7-7.6-12.7c-0.4-2.3-0.7-4.7-0.8-7.4C34.3,42.7,36.8,43.2,39.3,43.9" />
            <path fill="currentColor"
                d="M68,49.7c-0.9,5-2.9,11.3-7.6,12.7c-1.9,0.6-3.7,0.6-5.3,0.1c0.8-0.2,1.5-0.5,2.2-0.9c1.8-1,3.2-2.6,4.3-4.7c1.2-2.5,1.3-5.4,0.2-8.7c-0.4-1.2-1-2.6-1.7-3.9l0,0c0.4-0.1,0.7-0.2,1.1-0.3c2.4-0.7,4.9-1.2,7.6-1.5C68.6,45,68.4,47.5,68,49.7" />
            <path fill="currentColor"
                d="M48,60.9c-1.1-0.2-1.9-0.4-2-0.5c0,0,0,0-0.1,0c-0.3-0.1-0.6-0.2-0.8-0.3C45,60,44.9,60,44.9,60h-0.1c-0.1-0.1-0.2-0.1-0.3-0.2l0,0l0,0c-0.1-0.1-0.2-0.1-0.3-0.2l0,0l0,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0l0,0c-0.1-0.1-0.2-0.2-0.3-0.2l0,0c-0.1-0.1-0.2-0.2-0.3-0.2l0,0c0,0,0,0-0.1-0.1s-0.2-0.2-0.3-0.3l0,0l0,0c-0.1-0.1-0.2-0.2-0.2-0.3l0,0l0,0c-0.1-0.1-0.2-0.2-0.3-0.3l-0.1-0.1c-0.1-0.1-0.2-0.2-0.2-0.3l0,0l0,0c-0.1-0.1-0.1-0.2-0.2-0.3l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.2-0.2-0.4c0,0,0-0.1-0.1-0.1l0,0C41.1,56.2,41,56,41,55.9l0,0l0,0l0,0l0,0c0-0.1-0.1-0.1-0.1-0.2v-0.1c0-0.1-0.1-0.1-0.1-0.2v-0.1c0-0.1-0.1-0.1-0.1-0.2V55c0-0.1,0-0.1-0.1-0.2l0,0l0,0c0-0.1,0-0.2-0.1-0.3v-0.1c0-0.1,0-0.2,0-0.2l0,0l0,0v-0.1l0,0c0-0.2,0-0.3,0-0.5l0,0l0,0c-0.4-4.1,2.4-8.8,4.8-12c1.8-2.5,3.8-4.6,5.2-6c1.4,1.4,3.4,3.6,5.2,6c2.4,3.2,5.1,7.9,4.8,12l0,0l0,0l0,0l0,0c0,0.1,0,0.2,0,0.2v0.1c0,0.1,0,0.2,0,0.3l0,0l0,0c0,0.1,0,0.2,0,0.2v0.1c0,0.1,0,0.2-0.1,0.3l0,0l0,0c0,0.1,0,0.1-0.1,0.2v0.1c0,0.1-0.1,0.2-0.1,0.2v0.1c0,0.1-0.1,0.1-0.1,0.2v0.1c0,0.1-0.1,0.1-0.1,0.2l0,0l0,0l0,0l0,0c-0.1,0.1-0.1,0.2-0.2,0.4l0,0c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.3-0.2,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.1,0.2-0.2,0.3l0,0l0,0c-0.1,0.1-0.2,0.2-0.2,0.3L59,57.6c-0.1,0.1-0.2,0.2-0.3,0.3l0,0l0,0c-0.1,0.1-0.2,0.2-0.2,0.3l0,0l0,0c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0-0.1,0.1l0,0c-0.1,0.1-0.2,0.2-0.3,0.2l0,0c-0.1,0.1-0.2,0.1-0.3,0.2l0,0c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2l0,0l0,0c-0.1,0.1-0.2,0.1-0.3,0.2l0,0l0,0c-0.1,0.1-0.2,0.1-0.3,0.2h-0.1c-0.1,0-0.2,0.1-0.2,0.1c-0.3,0.1-0.5,0.2-0.8,0.3c0,0,0,0-0.1,0c-0.1,0.1-0.9,0.3-2,0.5c-0.7,0.1-1.5,0.2-2.2,0.2C49.5,61.1,48.7,61,48,60.9" />
        </symbol>
        <symbol id="ico-zalo" viewBox="0 0 48 48">
            <path fill="#2962ff"
        d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10 c4.722,0,8.883-2.348,11.417-5.931V36H15z" />
    <path fill="#eee"
        d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19 c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742 c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083 C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z" />
    <path fill="#2962ff"
        d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75 S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z" />
    <path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z" />
    <path fill="#2962ff"
        d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75 S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5 c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z" />
    <path fill="#2962ff"
        d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5 c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z" />
        </symbol>

        <symbol id="ico-fb" viewBox="0 0 48 48">
            <path fill="#0077bf" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
    <path fill="#fff"
        d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z" />
        </symbol>

        <symbol id="ico-view-details-logo" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M39.1,45.1c0.4,0.1,0.7,0.2,1.1,0.3l0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.7,1.3-1.3,2.6-1.7,3.8c-1.1,3.3-1,6.2,0.2,8.7c1.1,2.1,2.5,3.7,4.2,4.7c0.7,0.4,1.4,0.7,2.2,0.9c-1.5,0.5-3.3,0.5-5.2-0.1c-4.7-1.4-6.7-7.7-7.6-12.7c-0.4-2.3-0.7-4.7-0.8-7.3C34.2,43.9,36.7,44.4,39.1,45.1z" />
            <path fill="currentColor"
                d="M67.7,50.9c-0.9,5-2.9,11.3-7.6,12.7c-1.9,0.6-3.7,0.6-5.2,0.1c0.8-0.2,1.5-0.5,2.2-0.9c1.7-1,3.2-2.6,4.2-4.7c1.2-2.5,1.3-5.4,0.2-8.7c-0.4-1.2-1-2.6-1.7-3.9l0,0c0.4-0.1,0.7-0.2,1.1-0.3c2.4-0.7,4.9-1.2,7.6-1.5C68.4,46.1,68.1,48.6,67.7,50.9z" />
            <path fill="currentColor"
                d="M47.8,62c-1.1-0.2-1.9-0.4-2-0.5c0,0,0,0-0.1,0c-0.3-0.1-0.6-0.2-0.8-0.3c-0.1,0-0.2-0.1-0.2-0.1c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0,0,0l0,0c-0.1-0.1-0.2-0.1-0.3-0.2l0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0l0,0c-0.1-0.1-0.2-0.2-0.3-0.2l0,0c-0.1-0.1-0.2-0.2-0.3-0.2l0,0c0,0,0,0-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0l0,0c-0.1-0.1-0.2-0.2-0.2-0.3l0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.2-0.3-0.3c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.2-0.3c0,0,0,0,0,0l0,0c-0.1-0.1-0.1-0.2-0.2-0.3l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.2-0.2-0.4c0,0,0-0.1-0.1-0.1l0,0c-0.1-0.1-0.1-0.2-0.2-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.1-0.1-0.2l0,0c0,0,0,0,0,0c0-0.1,0-0.2-0.1-0.3c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0-0.2l0,0c0,0,0,0,0,0c0,0,0-0.1,0-0.1l0,0c0-0.2,0-0.3,0-0.5c0,0,0,0,0,0c0,0,0,0,0,0c-0.4-4.1,2.4-8.8,4.7-12c1.8-2.5,3.8-4.6,5.2-6c1.4,1.4,3.4,3.6,5.2,6c2.4,3.2,5.1,7.9,4.8,12c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.2,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0l0,0c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.2-0.1,0.3c0,0,0,0,0,0l0,0c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.2-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-0.1,0.2-0.2,0.4l0,0c0,0,0,0.1-0.1,0.1c-0.1,0.1-0.1,0.3-0.2,0.4c0,0,0,0,0,0.1l0,0c-0.1,0.1-0.1,0.2-0.2,0.3l0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0,0,0l0,0c-0.1,0.1-0.2,0.2-0.2,0.3l0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.2-0.3,0.3c0,0,0,0-0.1,0.1l0,0c-0.1,0.1-0.2,0.2-0.3,0.2l0,0c-0.1,0.1-0.2,0.1-0.3,0.2l0,0c0,0,0,0-0.1,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0,0,0,0,0l0,0c-0.1,0.1-0.2,0.1-0.3,0.2l0,0c0,0,0,0,0,0c-0.1,0.1-0.2,0.1-0.3,0.2c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.1c-0.3,0.1-0.5,0.2-0.8,0.3c0,0,0,0-0.1,0c-0.1,0.1-0.9,0.3-2,0.5c-0.7,0.1-1.4,0.2-2.2,0.2C49.3,62.2,48.5,62.2,47.8,62z" />
        </symbol>
        <symbol id="ico-view-details-rotate" viewBox="0 0 100 100">
            <path fill="currentColor" d="M61.2,16.2l0.2-9.8L63,7l-0.2,7.8l4.8-6.1l1.5,0.6L63,16.9L61.2,16.2z" />
            <path fill="currentColor" d="M77.4,14.6l1.2,1l-5.8,7.2l-1.2-1L77.4,14.6z" />
            <path fill="currentColor"
                d="M80.3,28.8l2.2,3.4L81.3,33l-3.1-4.7l7.7-5l3,4.6l-1.2,0.8l-2.2-3.4l-2,1.3l2,3.1l-1.2,0.8l-2-3.1L80.3,28.8z" />
            <path fill="currentColor"
                d="M84.5,41.3l8.8-3.8l0.2,1.6L86.7,42l7.4,1.1l0.2,1.4l-6.9,3l7.4,1L95,50l-9.5-1.4L85.3,47l6.4-2.8l-6.9-1L84.5,41.3z" />
            <path fill="currentColor" d="M38.8,83.3l-0.2,9.8L37,92.5l0.2-7.8l-4.8,6.1l-1.5-0.6l6.2-7.6L38.8,83.3z" />
            <path fill="currentColor" d="M22.6,84.9l-1.2-1l5.8-7.2l1.2,1L22.6,84.9z" />
            <path fill="currentColor"
                d="M19.7,70.8l-2.2-3.4l1.2-0.8l3.1,4.7l-7.7,5l-3-4.6l1.2-0.8l2.2,3.4l2-1.3l-2-3.1l1.2-0.8l2,3.1L19.7,70.8z" />
            <path fill="currentColor"
                d="M15.5,58.2L6.7,62l-0.2-1.6l6.9-2.9l-7.4-1.1l-0.2-1.4l6.9-3l-7.4-1L5,49.5l9.5,1.4l0.2,1.7l-6.4,2.8l6.9,1L15.5,58.2z" />
            <path fill="currentColor"
                d="M12.5,36l-0.8-0.3c1.4-3.9,3.4-7.5,5.9-10.8c2.5-3.2,5.4-6.1,8.8-8.5c3.4-2.4,7.1-4.3,11-5.5c4.1-1.3,8.3-2,12.6-2v0.9c-4.2,0-8.4,0.7-12.3,1.9c-3.8,1.2-7.5,3.1-10.8,5.4c-3.3,2.3-6.1,5.1-8.6,8.3C15.9,28.7,13.9,32.2,12.5,36z" />
            <path fill="currentColor"
                d="M49.5,90.9V90c4.2,0,8.4-0.7,12.3-1.9c3.8-1.2,7.5-3.1,10.8-5.4c3.3-2.3,6.1-5.1,8.6-8.3c2.5-3.2,4.4-6.7,5.8-10.5l0.8,0.3c-1.4,3.9-3.4,7.5-5.9,10.8c-2.5,3.2-5.4,6.1-8.8,8.5c-3.4,2.4-7.1,4.3-11,5.5C58.1,90.2,53.8,90.9,49.5,90.9z" />
        </symbol>
        <symbol id="ico-view-details-rotate-send" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M12.5,36l-0.8-0.3c1.4-3.9,3.4-7.5,5.9-10.8c2.5-3.2,5.4-6.1,8.8-8.5s7.1-4.3,11-5.5c4.1-1.3,8.3-2,12.6-2v0.9c-4.2,0-8.4,0.7-12.3,1.9c-3.8,1.2-7.5,3.1-10.8,5.4s-6.1,5.1-8.6,8.3C15.9,28.7,13.9,32.2,12.5,36z" />
            <path fill="currentColor"
                d="M49.5,90.9V90c4.2,0,8.4-0.7,12.3-1.9c3.8-1.2,7.5-3.1,10.8-5.4c3.3-2.3,6.1-5.1,8.6-8.3c2.5-3.2,4.4-6.7,5.8-10.5l0.8,0.3c-1.4,3.9-3.4,7.5-5.9,10.8c-2.5,3.2-5.4,6.1-8.8,8.5s-7.1,4.3-11,5.5C58.1,90.2,53.8,90.9,49.5,90.9z" />
            <path fill="currentColor"
                d="M59.9,13.7l1.7-0.3c0,0.9,0.5,1.6,1.4,1.9c0.9,0.3,1.4,0.1,1.6-0.4c0.1-0.3,0.1-0.6-0.1-0.8c-0.2-0.3-0.6-0.6-1.2-1c-0.7-0.5-1-0.8-1.4-1.4c-0.4-0.6-0.4-1.2-0.1-2C62,9,62.5,8.5,63.1,8.3c0.7-0.2,1.4-0.2,2.1,0c1.3,0.5,2.1,1.6,2.2,2.9l-1.6,0.3c-0.1-0.8-0.5-1.4-1.2-1.6c-0.7-0.2-1.2-0.1-1.4,0.4c-0.1,0.3-0.1,0.5,0.1,0.7c0.2,0.2,0.5,0.6,1,1l0.5,0.4c0.1,0.1,0.3,0.2,0.4,0.4c0.2,0.2,0.3,0.3,0.4,0.4c0.2,0.2,0.5,0.7,0.5,1c0.1,0.3,0,0.8-0.1,1.3c-0.3,0.8-0.8,1.2-1.5,1.5c-0.7,0.2-1.5,0.2-2.4-0.1C60.7,16.3,59.8,15.1,59.9,13.7z" />
            <path fill="currentColor"
                d="M74.8,22.2l2.7,2.5l-1.1,1.2l-4-3.6l5.9-6.4l3.9,3.6l-1.1,1.2l-2.7-2.4l-1.3,1.4l2.4,2.2L78.5,23l-2.4-2.2L74.8,22.2z" />
            <path fill="currentColor"
                d="M90.1,31.6l0.7,1.6l-7.9,3.6l-0.5-1.2l3.3-5.6l-4.8,2.2l-0.7-1.6l7.9-3.6l0.5,1.2l-3.3,5.6L90.1,31.6z" />
            <path fill="currentColor"
                d="M93.5,48.5c0,1.2-0.4,2.2-1.2,3c-0.8,0.8-1.9,1.2-3.1,1.2c-1.2,0-2.3-0.4-3.1-1.2c-0.8-0.8-1.3-1.8-1.3-3l0-3.5l8.7-0.1L93.5,48.5z M86.4,48.5c0,0.8,0.3,1.4,0.8,1.8c0.5,0.5,1.2,0.7,2,0.7c0.8,0,1.5-0.3,1.9-0.7c0.5-0.5,0.7-1.1,0.7-1.8l0-1.7l-5.4,0.1L86.4,48.5z" />
            <path fill="currentColor"
                d="M42.3,84.7L40.7,85c0-0.9-0.5-1.6-1.5-1.9c-0.9-0.3-1.4-0.1-1.6,0.4c-0.1,0.3,0,0.6,0.2,0.8c0.2,0.3,0.6,0.6,1.2,1c0.7,0.5,1,0.8,1.4,1.4c0.4,0.6,0.5,1.2,0.2,2c-0.3,0.7-0.7,1.3-1.4,1.5c-0.7,0.3-1.4,0.3-2.1,0c-1.3-0.5-2.1-1.5-2.3-2.9l1.6-0.3c0.1,0.8,0.5,1.4,1.2,1.6c0.7,0.2,1.2,0,1.4-0.4c0.1-0.3,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.5-1.1-0.9l-0.5-0.4c-0.1-0.1-0.3-0.2-0.5-0.4c-0.2-0.2-0.3-0.3-0.4-0.4c-0.2-0.2-0.5-0.7-0.5-1c-0.1-0.3-0.1-0.8,0.1-1.3c0.3-0.8,0.8-1.3,1.5-1.5c0.7-0.3,1.5-0.2,2.4,0.1C41.5,82.1,42.3,83.3,42.3,84.7z" />
            <path fill="currentColor"
                d="M27.2,76.6l-2.8-2.4l1.1-1.2l4.1,3.5L23.9,83l-4-3.5l1.1-1.2l2.7,2.4l1.2-1.4l-2.5-2.2l1.1-1.2l2.5,2.2L27.2,76.6z" />
            <path fill="currentColor"
                d="M11.7,67.5l-0.8-1.5l7.8-3.8l0.6,1.2L16.2,69l4.8-2.3l0.8,1.5L13.9,72l-0.6-1.2l3.1-5.7L11.7,67.5z" />
            <path fill="currentColor"
                d="M7.9,50.8c0-1.2,0.3-2.2,1.1-3c0.8-0.8,1.8-1.3,3-1.3c1.2,0,2.3,0.3,3.1,1.1c0.9,0.8,1.3,1.7,1.4,2.9l0.1,3.5L8,54.2L7.9,50.8z M14.9,50.5c0-0.8-0.3-1.4-0.8-1.8c-0.5-0.5-1.2-0.7-2-0.6c-0.8,0-1.4,0.3-1.9,0.8c-0.5,0.5-0.7,1.1-0.7,1.9l0.1,1.7l5.4-0.2L14.9,50.5z" />
        </symbol>
        <symbol id="ico-close-menu" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M54.6,13.7c-0.7-1.1-0.9-2.3-0.6-3.6c0.3-1.3,1-2.3,2-3c1.1-0.7,2.3-0.9,3.6-0.6c1.6,0.3,2.9,1.5,3.4,3l-1.4,0.5c-0.3-1-1.1-1.8-2.3-2c-1-0.2-1.8-0.1-2.5,0.4c-0.7,0.5-1.2,1.2-1.4,2.1c-0.2,0.9-0.1,1.8,0.4,2.5c0.5,0.7,1.2,1.2,2.1,1.4c1.1,0.2,2.2-0.1,2.9-0.9l1.1,1c-0.5,0.6-1.2,1-1.9,1.2c-0.8,0.2-1.6,0.3-2.4,0.1C56.3,15.5,55.3,14.8,54.6,13.7z" />
            <path fill="currentColor" d="M69.9,19.2l3.1,2.1l-0.8,1.2l-4.4-2.9l5.1-7.6l1.3,0.8L69.9,19.2z" />
            <path fill="currentColor"
                d="M79.4,30.8c-0.7-1.1-1-2.3-0.7-3.6c0.3-1.3,1-2.3,2.1-3c1.1-0.7,2.3-1,3.6-0.7c1.3,0.3,2.3,1,3,2.1c0.7,1.1,1,2.3,0.7,3.6c-0.3,1.3-1,2.3-2.1,3c-1.1,0.7-2.3,1-3.6,0.7C81.1,32.6,80.1,31.9,79.4,30.8z M80.7,30c0.5,0.8,1.2,1.2,2,1.4c0.9,0.2,1.7,0,2.5-0.5c0.8-0.5,1.3-1.2,1.4-2.1c0.2-0.9,0-1.7-0.5-2.4c-0.5-0.8-1.2-1.2-2.1-1.4c-0.9-0.2-1.7,0-2.5,0.5c-0.8,0.5-1.3,1.2-1.5,2.1C80,28.4,80.1,29.2,80.7,30z" />
            <path fill="currentColor"
                d="M86.3,40.6l1,1.2c-1,0.5-1.3,1.4-1.2,2.5c0.2,1.1,0.8,1.6,1.5,1.5c0.4-0.1,0.6-0.3,0.8-0.6c0.1-0.3,0.3-0.9,0.4-1.7c0.1-0.9,0.2-1.4,0.5-2c0.3-0.7,0.9-1,1.7-1.2c0.8-0.1,1.5,0,2,0.5c0.6,0.5,0.9,1.1,1.1,1.9c0.2,1.4-0.3,2.7-1.5,3.5l-0.9-1.1c0.8-0.5,1.1-1.2,1-2.1c-0.1-0.9-0.7-1.4-1.4-1.2c-0.7,0.1-0.9,0.6-1.1,2.1c-0.1,0.4-0.1,0.6-0.1,0.8c0,0.2-0.1,0.4-0.1,0.7c-0.1,0.3-0.2,0.6-0.3,0.7c-0.3,0.5-0.8,1.2-1.7,1.2c-0.8,0.1-1.5-0.1-2.1-0.6c-0.6-0.5-0.9-1.2-1.1-2.2C84.4,42.7,85,41.3,86.3,40.6z" />
            <path fill="currentColor"
                d="M86.2,56.4l-0.8,4L84,60.1l1.1-5.5l9,1.9L93,61.9l-1.4-0.3l0.8-3.9L90,57.2l-0.7,3.6l-1.4-0.3l0.7-3.6L86.2,56.4z" />
            <path fill="currentColor"
                d="M45.6,86.3c0.7,1.1,0.9,2.3,0.6,3.6c-0.3,1.3-1,2.3-2,3c-1.1,0.7-2.3,0.9-3.6,0.6c-1.6-0.3-2.9-1.5-3.4-3l1.4-0.5c0.3,1,1.1,1.8,2.3,2c1,0.2,1.8,0.1,2.5-0.4c0.7-0.5,1.2-1.2,1.4-2.1c0.2-0.9,0.1-1.8-0.4-2.5c-0.5-0.7-1.2-1.2-2.1-1.4c-1.1-0.2-2.2,0.1-2.9,0.9l-1.1-1c0.5-0.6,1.2-1,1.9-1.2c0.8-0.2,1.6-0.3,2.4-0.1C43.8,84.5,44.9,85.2,45.6,86.3z" />
            <path fill="currentColor" d="M30.3,80.8l-3.1-2.1l0.8-1.2l4.4,2.9l-5.1,7.6l-1.3-0.8L30.3,80.8z" />
            <path fill="currentColor"
                d="M20.8,69.2c0.7,1.1,1,2.3,0.7,3.6c-0.3,1.3-1,2.3-2.1,3c-1.1,0.7-2.3,1-3.6,0.7c-1.3-0.3-2.3-1-3-2.1c-0.7-1.1-1-2.3-0.7-3.6c0.3-1.3,1-2.3,2.1-3c1.1-0.7,2.3-1,3.6-0.7C19,67.4,20,68.1,20.8,69.2z M19.5,70c-0.5-0.8-1.2-1.2-2-1.4c-0.9-0.2-1.7,0-2.5,0.5c-0.8,0.5-1.3,1.2-1.4,2.1c-0.2,0.9,0,1.7,0.5,2.4c0.5,0.8,1.2,1.2,2.1,1.4c0.9,0.2,1.7,0,2.5-0.5c0.8-0.5,1.3-1.2,1.5-2.1C20.2,71.6,20,70.8,19.5,70z" />
            <path fill="currentColor"
                d="M13.8,59.4l-1-1.2c1-0.5,1.3-1.4,1.2-2.5c-0.2-1.1-0.8-1.6-1.5-1.5c-0.4,0.1-0.6,0.3-0.8,0.6c-0.1,0.3-0.3,0.9-0.4,1.7c-0.1,0.9-0.2,1.4-0.5,2c-0.3,0.7-0.9,1-1.7,1.2c-0.8,0.1-1.5,0-2-0.5c-0.6-0.5-0.9-1.1-1.1-1.9c-0.2-1.4,0.3-2.7,1.5-3.5l0.9,1.1c-0.8,0.5-1.1,1.2-1,2.1c0.1,0.9,0.7,1.4,1.4,1.2c0.7-0.1,0.9-0.6,1.1-2.1c0.1-0.4,0.1-0.6,0.1-0.8c0-0.2,0.1-0.4,0.1-0.7c0.1-0.3,0.2-0.6,0.3-0.7c0.3-0.5,0.8-1.2,1.7-1.2c0.8-0.1,1.5,0.1,2.1,0.6c0.6,0.5,0.9,1.2,1.1,2.2C15.8,57.3,15.1,58.7,13.8,59.4z" />
            <path fill="currentColor"
                d="M14,43.6l0.8-4l1.4,0.3l-1.1,5.5l-9-1.9l1.1-5.4l1.4,0.3l-0.8,3.9l2.3,0.5l0.7-3.6l1.4,0.3l-0.7,3.6L14,43.6z" />
            <path fill="currentColor"
                d="M12.8,36.3L11.9,36c1.4-3.8,3.4-7.4,5.9-10.7c2.5-3.2,5.4-6.1,8.7-8.4c3.4-2.4,7-4.2,11-5.5c4-1.3,8.3-2,12.5-2v0.9c-4.2,0-8.3,0.6-12.3,1.9c-3.8,1.2-7.4,3.1-10.7,5.4c-3.2,2.3-6.1,5.1-8.5,8.2C16.1,29,14.2,32.5,12.8,36.3z" />
            <path fill="currentColor"
                d="M49.6,90.9v-0.9c4.2,0,8.3-0.6,12.3-1.9c3.8-1.2,7.4-3.1,10.7-5.4c3.2-2.3,6.1-5.1,8.5-8.2c2.5-3.2,4.4-6.7,5.8-10.5l0.8,0.3c-1.4,3.8-3.4,7.4-5.9,10.7c-2.5,3.2-5.4,6.1-8.7,8.4c-3.4,2.4-7,4.2-11,5.5C58.1,90.3,53.9,90.9,49.6,90.9z" />
        </symbol>
        <symbol id="ico-email" viewBox="0 0 60 60">
            <path fill="currentColor"
                d="M52.2,18L36.6,33.6c-3.6,3.6-9.5,3.6-13.1,0L7.8,18c0,0.3-0.1,0.6-0.1,0.9v22.3c0,5.1,4.2,9.3,9.3,9.3h26c5.1,0,9.3-4.2,9.3-9.3V18.9C52.3,18.6,52.2,18.3,52.2,18z" />
            <path fill="currentColor"
                d="M33.9,31l17-17c-1.7-2.8-4.7-4.5-7.9-4.5H17c-3.2,0-6.2,1.7-7.9,4.5l17,17C28.2,33.2,31.8,33.2,33.9,31z" />
        </symbol>
        <symbol id="ico-search" viewBox="0 0 50 50">
            <path fill="currentColor"
                d="M33.1,30.6l6.2,6.2c0.9,1,0.9,2.5,0,3.6c-1,0.9-2.5,0.9-3.6,0l-6.2-6.2c0.8-0.4,1.4-1,2.1-1.5C32.2,32.1,32.8,31.3,33.1,30.6z" />
            <path fill="currentColor"
                d="M12.3,13.2c5-5,13.4-5,18.5,0s5,13.2,0,18.2s-13.4,5-18.5,0S7.3,18.2,12.3,13.2z M14.6,29.5c3.8,3.8,10.2,3.9,14,0s3.8-9.9,0-13.9s-10.2-3.8-14,0C10.7,19.1,10.7,25.3,14.6,29.5z" />
        </symbol>
        <symbol id="arrow" viewBox="0 0 50 50">
            <path fill="currentColor" d="M31,28 5,28 5,22 31,22 31,6 46.3,25 31,44z" />
        </symbol>
        <symbol id="ico-facebook" viewBox="0 0 60 60">
            <path fill="currentColor"
                d="M38.8,23.5h-5.9v-3.8c0-1.4,0.9-1.7,1.6-1.7s4.1,0,4.1,0v-6.4h-5.8c-6.3,0-7.9,4.9-7.9,7.9v4.2h-3.7v6.6h3.7c0,8.4,0,18.7,0,18.7h7.8c0,0,0-10.2,0-18.7h5.1L38.8,23.5z" />
        </symbol>
        <symbol id="ico-youtube" viewBox="0 0 60 60">
            <path fill="currentColor"
                d="M48.7,20.8c0-0.2,0-0.3-0.2-0.4v-0.2c-0.5-1.4-1.8-2.5-3.5-2.5h0.3c0,0-6.5-1-15.3-1s-15.3,1-15.3,1H15c-1.7,0-3,1-3.5,2.5c0,0,0,0.2-0.2,0.2c0,0.2-0.2,0.3-0.2,0.4c-0.3,1.7-0.7,5-0.7,9.1s0.4,7.4,0.7,9.1c0,0.2,0,0.3,0.2,0.4c0,0,0,0.2,0.2,0.3c0.5,1.4,1.8,2.5,3.5,2.5h-0.3c0,0,6.5,1,15.3,1s15.3-1,15.3-1H45c1.7,0,3-1,3.5-2.5c0,0,0-0.2,0-0.3c0-0.2,0-0.3,0.2-0.4c0.3-1.7,0.7-5,0.7-9.1S48.8,22.5,48.7,20.8z M35.6,30.9l-7.8,5.6c-0.2,0.2-0.4,0.2-0.5,0.2c-0.2,0-0.3,0-0.4-0.2c-0.3-0.2-0.5-0.5-0.5-0.8V24.3c0-0.4,0.2-0.7,0.5-0.8c0.3-0.2,0.7-0.2,1,0.2l7.8,5.7c0.3,0.2,0.4,0.5,0.4,0.8C35.9,30.4,35.8,30.6,35.6,30.9z" />
        </symbol>
        <symbol id="ico-album" viewBox="0 0 100 100">
            <path fill="currentColor"
                d="M41.2,48.5H26c-4,0-7.3-3.2-7.3-7.3V24.9c0-4,3.2-7.3,7.3-7.3h15.2c4,0,7.3,3.2,7.3,7.3v16.3C48.5,45.3,45.3,48.5,41.2,48.5 M27.6,23.4c-1.7,0-3.1,1.5-3.1,3.1v13c0,1.7,1.5,3.1,3.1,3.1h12.2c1.7,0,3.1-1.5,3.1-3.1v-13c0-1.7-1.5-3.1-3.1-3.1L27.6,23.4" />
            <path fill="currentColor"
                d="M74,48.5H58.8c-4,0-7.3-3.2-7.3-7.3V24.9c0-4,3.2-7.3,7.3-7.3H74c4,0,7.3,3.2,7.3,7.3v16.3C81.3,45.3,78.1,48.5,74,48.5 M60.3,23.4c-1.7,0-3.1,1.5-3.1,3.1v13c0,1.7,1.5,3.1,3.1,3.1h12.2c1.7,0,3.1-1.5,3.1-3.1v-13c0-1.7-1.5-3.1-3.1-3.1L60.3,23.4" />
            <path fill="currentColor"
                d="M41.2,82.3H26c-4,0-7.3-3.2-7.3-7.3V58.8c0-4,3.2-7.3,7.3-7.3h15.2c4,0,7.3,3.2,7.3,7.3V75C48.5,79.1,45.3,82.3,41.2,82.3 M27.6,57.3c-1.7,0-3.1,1.5-3.1,3.1v13c0,1.7,1.5,3.1,3.1,3.1h12.2c1.7,0,3.1-1.5,3.1-3.1v-13c0-1.7-1.5-3.1-3.1-3.1H27.6z" />
            <path fill="currentColor"
                d="M74,82.3H58.8c-4,0-7.3-3.2-7.3-7.3V58.8c0-4,3.2-7.3,7.3-7.3H74c4,0,7.3,3.2,7.3,7.3V75C81.3,79.1,78.1,82.3,74,82.3 M60.3,57.3c-1.7,0-3.1,1.5-3.1,3.1v13c0,1.7,1.5,3.1,3.1,3.1h12.2c1.7,0,3.1-1.5,3.1-3.1v-13c0-1.7-1.5-3.1-3.1-3.1H60.3z" />
        </symbol>
        <symbol id="ico-company-address" viewBox="0 0 40 40">
            <path fill="currentColor"
                d="M33.5,16C32.8,9.6,27.8,4.5,21.3,3.9c-0.4-0.1-0.9-0.1-1.3-0.1s-0.9,0-1.3,0.1C12.2,4.5,7.1,9.6,6.4,16c-0.1,0.4-0.1,0.9-0.1,1.3c0,3.3,1.1,6.3,3.1,8.6c0.6,0.7,1.2,1.3,1.9,1.9l8.7,8.6l8.6-8.6c0.7-0.6,1.3-1.2,1.9-1.9c2-2.3,3.1-5.3,3.1-8.6C33.5,16.9,33.5,16.5,33.5,16z M20,22.8c-3,0-5.5-2.5-5.5-5.5s2.4-5.5,5.5-5.5s5.5,2.5,5.5,5.5S23,22.8,20,22.8z" />
        </symbol>
        <symbol id="ico-go-top" viewBox="0 0 40 40">
            <path fill="#0077bf"
                d="M22.5,35.4V35V10.5l0.3,0.5c0.3,0.5,0.6,1,1,1.4l6.8,6.8c0.9,0.9,2.3,1,3.3,0.4c1.2-0.8,1.3-2.3,0.5-3.5l-0.3-0.3L21.7,3.4c-1-1-2.6-1-3.5,0L5.9,15.8c-1,1-1,2.6,0,3.5l0.3,0.3c1,0.6,2.4,0.5,3.3-0.4l6.8-6.8c0.4-0.4,0.6-0.8,0.9-1.3l0.4-0.8v24.4c0,1.3,0.9,2.4,2.1,2.6C20.9,37.5,22.2,36.6,22.5,35.4" />
        </symbol>
        <symbol id="ico-business-logo-01" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M160.6,30.3c0-0.1-0.1-0.3-0.3-0.4c-0.1,0-0.1,0-0.3,0c-5.9,0.5-17.5,2-29.6,5.4c-1.7,0.5-3.4,0.9-4.8,1.5c-1.3-2.2-2.8-4.3-4.4-6.5c-7.4-10.1-15.6-18.3-19.9-22.2c-0.1-0.1-0.4-0.1-0.5,0c-4.2,4-12.4,12.2-19.9,22.2c-1.6,2.2-3.1,4.3-4.4,6.5c-1.5-0.5-3.2-1.1-4.8-1.5c-12.1-3.4-23.7-4.8-29.6-5.4c-0.1,0-0.1,0-0.3,0c-0.1,0-0.3,0.1-0.3,0.4c0,5.6,0.3,17.1,2.4,29.2c1.7,10.1,4.4,18.4,8.1,25c4.6,8.6,10.8,14.1,18.2,16.3c6.5,1.9,12.4,2.2,17.9,0.5c3.1-0.9,6.1-2.4,8.5-4.4c1.5,0.1,3,0.1,4.4,0.1c1.5,0,3.1,0,4.4-0.1c2.6,2,5.4,3.5,8.6,4.4c2.4,0.7,5.1,1.1,7.7,1.1c3.2,0,6.6-0.5,10.1-1.6c7.4-2.3,13.6-7.8,18.2-16.3c3.5-6.6,6.2-14.9,8.1-25C160.3,47.4,160.6,36.1,160.6,30.3z M70,41.7c1.1,0.3,2.2,0.7,3.1,0.9l0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c-2,3.8-3.6,7.5-4.8,11c-3.1,9.4-2.8,17.9,0.7,24.9c3.1,6.1,7.1,10.6,12.1,13.4c2,1.1,4,2,6.2,2.6c-4.4,1.5-9.5,1.5-14.9-0.3c-13.4-4-19.2-21.9-21.8-36.3c-1.2-6.5-1.9-13.6-2.2-21C56,38.4,63.1,39.8,70,41.7z M151.8,58.4c-2.6,14.4-8.3,32.3-21.8,36.3c-5.5,1.6-10.6,1.7-14.9,0.3c2.2-0.5,4.3-1.5,6.2-2.6c5-2.8,9.1-7.4,12.1-13.4c3.5-7,3.8-15.5,0.7-24.9c-1.2-3.5-2.8-7.3-5-11.2l0,0c1.1-0.3,2.2-0.7,3.1-0.9c7-1.9,14-3.4,21.6-4.4C153.7,44.8,153.1,51.9,151.8,58.4z M95,90.2c-3.1-0.7-5.4-1.2-5.8-1.5h-0.1c-0.8-0.3-1.6-0.7-2.3-0.9c-0.3-0.1-0.4-0.1-0.7-0.3c-0.1,0-0.1-0.1-0.3-0.1c-0.4-0.1-0.7-0.3-0.9-0.5c0,0,0,0-0.1,0h-0.1c-0.3-0.1-0.5-0.3-0.8-0.5h-0.1c0,0-0.1,0-0.1-0.1c-0.3-0.1-0.5-0.4-0.9-0.5l-0.1-0.1l0,0c-0.3-0.3-0.5-0.4-0.8-0.7l-0.1-0.1c-0.3-0.3-0.5-0.4-0.8-0.7l0,0l-0.1-0.1c-0.3-0.3-0.5-0.5-0.8-0.8L79.7,83l-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.7L78.7,82c0,0,0,0-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.9c-0.1-0.1-0.1-0.1-0.3-0.3c-0.3-0.4-0.5-0.7-0.7-0.9c0,0,0-0.1-0.1-0.1l-0.1-0.1c-0.1-0.3-0.4-0.5-0.5-0.8v-0.1L76,78.4c-0.3-0.3-0.4-0.7-0.7-1.1c0-0.1-0.1-0.1-0.1-0.3l0,0c-0.1-0.4-0.4-0.7-0.5-1.1c0,0,0,0,0-0.1l0,0l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.3-0.1-0.4-0.3-0.7c0-0.1,0-0.1-0.1-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1v-0.1c0-0.3-0.1-0.4-0.1-0.8c0-0.1,0-0.1,0-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1c0,0,0,0,0-0.1s0-0.1,0-0.3l0,0c0-0.4-0.1-0.9-0.1-1.3c0,0,0,0,0-0.1l0,0c-1.1-11.7,6.7-25.1,13.6-34.3c5.1-7,10.9-13.2,14.8-17.2c3.9,4,9.7,10.2,14.8,17.2c6.7,9.1,14.7,22.6,13.6,34.1l0,0l0,0l0,0c0,0,0,0,0,0.1c0,0.3,0,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.7c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.1-0.1,0.4-0.3,0.5c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.5c0,0,0,0,0,0.1l0,0l0,0c0,0,0,0,0,0.1c-0.1,0.3-0.4,0.7-0.5,1.1l0,0c0,0.1-0.1,0.1-0.1,0.3c-0.3,0.4-0.4,0.7-0.7,1.1l-0.1,0.1v0.1c-0.1,0.3-0.4,0.5-0.5,0.8l-0.1,0.1c0,0,0,0.1-0.1,0.1c-0.3,0.3-0.4,0.7-0.7,0.9c-0.1,0.1-0.1,0.1-0.3,0.3c-0.3,0.4-0.5,0.7-0.7,0.9c0,0,0,0-0.1,0.1l-0.1,0.1c-0.3,0.3-0.4,0.5-0.7,0.7l-0.1,0.1l-0.1,0.1c-0.3,0.3-0.5,0.5-0.8,0.8l-0.1,0.1l0,0c-0.3,0.3-0.5,0.5-0.8,0.7l-0.1,0.1c-0.3,0.3-0.5,0.4-0.8,0.7l0,0l-0.1,0.1c-0.3,0.3-0.5,0.4-0.9,0.5c0,0-0.1,0-0.1,0.1h-0.1c-0.3,0.1-0.5,0.4-0.8,0.5h-0.1c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.3-0.9,0.5c-0.1,0-0.1,0.1-0.3,0.1c-0.3,0.1-0.4,0.3-0.7,0.3c-0.8,0.4-1.5,0.7-2.3,0.9h-0.1c-0.4,0.3-2.7,0.8-5.8,1.5c-2,0.4-4.2,0.5-6.2,0.7C99.1,90.8,97,90.7,95,90.2z" />
            <path fill="currentColor"
                d="M63.4,113.8l-5.8,9.3H40.5h-1.7c-1.2-0.1-2.3,0-3.1,0.1c-0.8,0.3-1.5,0.5-2,0.9c-0.5,0.4-0.8,0.8-1.1,1.3c-0.1,0.5-0.3,1.1-0.4,1.7c0,0.7,0.3,1.5,0.7,2.4c0.5,0.8,1.2,1.2,2.3,1.5c1.1,0.1,2.4,0.3,4.2,0.3h7.5c3.5,0,6.3,0.5,8.3,1.5c1.1,0.4,2,1.1,3,2c0.9,0.8,1.6,1.9,2.3,3s1.2,2.4,1.5,3.8c0.4,1.3,0.5,2.8,0.5,4.4c0,3.5-0.8,6.5-2.3,9c-1.3,2.4-3.2,4-5.5,4.8c-2.3,0.7-5.4,0.9-9,0.9H21v-9.3h21.2h1.2c1.3,0.1,2.6,0,3.5-0.1c0.9-0.3,1.7-0.5,2.4-0.9c0.7-0.4,1.1-0.9,1.3-1.5c0.3-0.5,0.4-1.2,0.4-1.9c0-1.2-0.5-2.2-1.5-3.1c-0.9-0.8-2.3-1.2-4-1.1h-1.7h-7.7c-3.2,0-5.8-0.5-7.9-1.5c-1.1-0.5-2.2-1.2-3.1-2.2c-0.9-0.9-1.7-1.9-2.4-3.1s-1.2-2.4-1.6-3.9c-0.4-1.5-0.5-3-0.5-4.4c0-3,0.7-5.8,2-8.2c0.7-1.2,1.5-2.2,2.6-3c0.9-0.8,2.2-1.3,3.4-1.7c1.2-0.4,2.7-0.8,4-0.9c1.5-0.1,3-0.3,4.6-0.3H39L63.4,113.8L63.4,113.8z" />
            <path fill="currentColor"
                d="M156.4,113.8l14.7,39v-39h10.6v46.9h-18.2l-13.7-38v38h-10.8v-46.9C139.1,113.8,156.4,113.8,156.4,113.8z" />
            <rect fill="currentColor" x="92.2" y="132.6" width="34" height="9.3" />
            <polygon fill="currentColor"
                points="87.4,122.9 87.4,133.4 87.4,133.4 87.4,142.7 87.4,142.7 87.4,151.4 102.6,151.4 102.6,151.4 126.3,151.4 126.3,160.7 110.4,160.7 110.4,160.7 76.3,160.7 76.3,113.8 126.3,113.8 126.3,122.9 " />
            <path fill="currentColor"
                d="M100.8,85.3c-3.4,0-6.7-0.9-10.1-2.8c-1.1-0.5-1.9-0.8-2.3-0.8c-0.8,0-1.2,0.5-1.2,1.6L87,84.3h-1.5V71.4h1.3c0.4,3.9,1.9,6.9,4.4,8.7c2.4,1.9,5.4,2.8,8.9,2.8c3.4,0,6.1-0.9,7.8-2.8c1.7-1.9,2.7-4,2.7-6.6c0-4-2.3-7-6.9-9l-9.1-4c-2.8-1.2-4.8-3-6.2-5c-1.3-2.2-2-4.4-2-6.9c0-3.8,1.2-7,3.8-9.7c2.6-2.7,6.2-4,10.9-4c2.8,0,5.6,0.9,8.5,2.8c0.9,0.5,1.6,0.8,2,0.8c0.7,0,1.1-0.5,1.1-1.6l0.1-1.5h1.5v13.3H113c-0.4-3.9-1.6-6.9-3.8-8.7c-2.2-1.9-4.7-2.8-7.8-2.8c-3.1,0-5.4,0.8-7.1,2.6c-1.6,1.6-2.6,3.6-2.6,5.6c0,2.2,0.5,4,1.7,5.8c1.2,1.7,2.8,3.1,5.1,4l9.3,4c3.1,1.3,5.4,3.2,7,5.4c1.6,2.3,2.3,4.6,2.3,7.1c0,3.6-1.5,6.9-4.4,9.4C109.5,83.9,105.6,85.3,100.8,85.3z" />
            <path fill="currentColor"
                d="M34.6,191.2h0.5v0.8h-2.4c-1.2,0-2.2-0.3-2.7-0.7c-0.5-0.4-1.1-1.3-1.3-2.6c-0.1-0.8-0.4-1.5-0.5-2c-0.1-0.4-0.4-0.8-0.7-1.1c-0.3-0.3-0.5-0.4-0.8-0.4c-0.3,0-0.7-0.1-1.2-0.1H24v5.4c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.6v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V178c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8h7c2,0,3.5,0.4,4.4,1.2c0.9,0.8,1.3,1.9,1.3,3.1c0,0.9-0.3,1.7-0.8,2.4c-0.5,0.7-1.3,1.2-2.6,1.6c1.6,0.5,2.7,1.7,3.1,3.5c0.3,1.2,0.5,2,0.9,2.4C33.3,191.1,33.8,191.2,34.6,191.2z M24,184.4h1.9l0,0l0,0c1.1,0,1.9-0.3,2.4-0.8c0.5-0.5,0.8-1.5,0.8-2.8c0-1.3-0.3-2.3-0.8-2.7c-0.5-0.5-1.3-0.7-2.4-0.7H24V184.4z" />
            <path fill="currentColor"
                d="M82.1,188h0.8v4H70.4v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V178c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8h12.2v4h-0.8v-0.4c0-0.4,0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.4-0.9c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.1-0.9-0.3-1.5-0.3h-3.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v5.6h2.6c1.5,0,2.2-0.7,2.2-2.2v-0.5h0.8v6.2h-0.8v-0.5c0-1.5-0.7-2.2-2.2-2.2h-2.6v6.1c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h4c1.7,0,2.6-0.9,2.6-3C82.1,188.1,82.1,188,82.1,188z" />
            <path fill="currentColor"
                d="M134,191.2h0.5v0.8h-6.7v-0.8h1.2c0.4,0,0.5-0.3,0.4-0.7l-1.3-3.1h-5.8l-1.2,3.1c-0.1,0.5-0.1,0.7,0.4,0.7h1.2v0.8h-4.3v-0.8h0.8c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.3-0.3,0.3-0.5l5.8-14.1h0.8l6.3,14.1c0.1,0.3,0.3,0.5,0.4,0.5C133.4,191.2,133.6,191.2,134,191.2z M122.7,186.5h5l-2.6-6.1L122.7,186.5z" />
            <path fill="currentColor"
                d="M175.5,176.6v0.8H175c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.5c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h3.1c0.7,0,1.1-0.1,1.5-0.3c0.4-0.1,0.7-0.4,0.9-0.8c0.3-0.4,0.3-0.7,0.4-0.9c0-0.3,0.1-0.7,0.1-0.9v-0.4h0.8v4H170v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V178c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1H170v-0.8H175.5z" />
        </symbol>
        <symbol id="ico-business-logo-02" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M160.2,29.5c0-0.2-0.1-0.3-0.2-0.3c-0.1,0-0.1,0-0.2,0c-5.9,0.6-17.5,2-29.7,5.4c-1.7,0.5-3.3,1-4.9,1.5c-1.4-2.1-2.9-4.3-4.5-6.5c-7.4-10.1-15.7-18.3-19.9-22.3c-0.1-0.1-0.4-0.1-0.5,0c-4.2,4-12.5,12.2-19.9,22.3c-1.6,2.1-3.1,4.3-4.5,6.5c-1.5-0.5-3.2-1-4.9-1.5c-12.1-3.4-23.7-4.8-29.6-5.4c-0.1,0-0.2,0-0.3,0c-0.1,0.1-0.2,0.2-0.2,0.3c0,5.7,0.3,17.1,2.4,29.2c1.8,10.1,4.5,18.5,8,25.1c4.6,8.6,10.8,14.1,18.2,16.4c6.4,1.9,12.4,2.1,17.9,0.5c3.2-0.9,6-2.4,8.6-4.5c1.4,0.1,2.9,0.2,4.5,0.2c1.5,0,3,0,4.5-0.2c2.5,2.1,5.4,3.6,8.6,4.5c2.5,0.7,5.1,1.1,7.7,1.1c3.2,0,6.6-0.5,10.1-1.6c7.5-2.2,13.6-7.8,18.2-16.4c3.6-6.6,6.3-15,8-25.1C160,46.6,160.3,35.2,160.2,29.5z M69.4,40.9c1,0.3,2.1,0.6,3.2,1l0,0c0,0.1-0.1,0.1-0.1,0.1c0,0,0,0,0,0.1c-2.1,3.8-3.7,7.5-4.8,11c-3.1,9.5-2.9,17.9,0.7,24.9c3.1,6.1,7.2,10.6,12.2,13.5c2,1.1,4.1,2,6.2,2.6c-4.4,1.5-9.6,1.4-15-0.2c-13.4-4.1-19.3-22-21.9-36.4C48.7,51,48,44,47.7,36.5C55.3,37.5,62.4,38.9,69.4,40.9z M151.5,57.5c-2.6,14.4-8.4,32.3-21.9,36.4c-5.5,1.7-10.6,1.7-15,0.2c2.2-0.6,4.3-1.4,6.2-2.6c5-2.9,9.1-7.4,12.2-13.5c3.6-7.1,3.8-15.5,0.7-24.9c-1.2-3.6-2.8-7.3-5-11.2l0.1,0c1-0.3,2.1-0.7,3.1-1c7-2,14.1-3.4,21.7-4.4C153.3,44,152.6,51,151.5,57.5z M94.4,89.5c-3.1-0.7-5.3-1.2-5.8-1.4c-0.1,0-0.1,0-0.2,0c-0.8-0.3-1.6-0.6-2.4-1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.1,0-0.2-0.1-0.2-0.1c-0.3-0.2-0.7-0.3-0.9-0.5c0,0-0.1,0-0.1,0l-0.1,0c-0.3-0.2-0.6-0.3-0.8-0.5l-0.1,0c0,0-0.1,0-0.1-0.1c-0.3-0.2-0.6-0.4-0.9-0.6c-0.1,0-0.1-0.1-0.2-0.1l0,0c-0.3-0.2-0.6-0.5-0.9-0.7L81,84c-0.2-0.2-0.5-0.4-0.8-0.7l0,0c-0.1-0.1-0.1-0.1-0.2-0.2c-0.3-0.3-0.5-0.5-0.8-0.8c0,0-0.1-0.1-0.1-0.1L79,82.1c-0.2-0.2-0.5-0.5-0.7-0.7l-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.2-0.3-0.5-0.6-0.7-0.9c-0.1-0.1-0.1-0.2-0.2-0.3c-0.3-0.3-0.5-0.6-0.7-0.9c0,0-0.1-0.1-0.1-0.1l-0.1-0.1c-0.2-0.3-0.4-0.6-0.6-0.9l-0.1-0.1c0-0.1-0.1-0.1-0.1-0.2c-0.2-0.3-0.4-0.7-0.6-1c-0.1-0.1-0.1-0.2-0.2-0.3l0-0.1c-0.2-0.4-0.4-0.7-0.5-1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0-0.1,0-0.1c-0.1-0.2-0.2-0.4-0.3-0.6c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.1-0.1-0.2-0.1-0.3c-0.1-0.2-0.1-0.4-0.2-0.6l0-0.1c0,0,0-0.1,0-0.1c-0.1-0.2-0.1-0.5-0.2-0.7c0-0.1,0-0.2-0.1-0.3c0-0.2-0.1-0.4-0.1-0.6l0-0.1c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.2l0,0c-0.1-0.5-0.1-0.9-0.1-1.4c0,0,0,0,0-0.1c0,0,0,0,0,0C71.1,56.1,79,42.7,85.8,33.4c5.2-7,10.9-13.2,14.8-17.2c4,4,9.7,10.2,14.8,17.2c6.8,9.2,14.6,22.6,13.6,34.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c0,0.2,0,0.4-0.1,0.7c0,0.1,0,0.2,0,0.3c0,0.3-0.1,0.6-0.1,0.8c0,0,0,0.1,0,0.1l0,0.1c0,0.2-0.1,0.4-0.1,0.6c0,0.1,0,0.2-0.1,0.3c-0.1,0.3-0.1,0.5-0.2,0.7c0,0,0,0.1,0,0.1l0,0.1c-0.1,0.2-0.1,0.4-0.2,0.6c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.4-0.2,0.7c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.4-0.3,0.6c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0,0,0,0,0.1c0,0,0,0.1,0,0.1c-0.2,0.3-0.3,0.7-0.5,1l0,0.1c-0.1,0.1-0.1,0.2-0.2,0.3c-0.2,0.4-0.4,0.7-0.6,1c0,0.1-0.1,0.1-0.1,0.2l-0.1,0.1c-0.2,0.3-0.4,0.6-0.6,0.9l-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.2,0.3-0.4,0.6-0.7,0.9c-0.1,0.1-0.1,0.2-0.2,0.3c-0.3,0.3-0.5,0.6-0.7,0.9c0,0-0.1,0.1-0.1,0.1l-0.1,0.1c-0.2,0.2-0.4,0.5-0.7,0.7l-0.1,0.1c0,0-0.1,0.1-0.1,0.1c-0.3,0.3-0.5,0.5-0.8,0.8c-0.1,0.1-0.1,0.1-0.2,0.2l0,0c-0.3,0.3-0.5,0.5-0.8,0.7l-0.1,0.1c-0.3,0.2-0.5,0.4-0.9,0.7l0,0c-0.1,0-0.1,0.1-0.2,0.1c-0.3,0.2-0.6,0.4-0.9,0.6c0,0-0.1,0-0.1,0.1l-0.1,0c-0.3,0.2-0.6,0.3-0.8,0.5l-0.1,0c0,0-0.1,0-0.1,0c-0.3,0.2-0.6,0.3-0.9,0.5c-0.1,0-0.2,0.1-0.2,0.1c-0.2,0.1-0.5,0.2-0.7,0.3c-0.7,0.3-1.5,0.7-2.3,0.9c-0.1,0-0.1,0-0.2,0c-0.4,0.2-2.6,0.8-5.8,1.4c-2.1,0.4-4.2,0.6-6.2,0.6C98.5,90.1,96.5,89.9,94.4,89.5z" />
            <path fill="currentColor"
                d="M62.7,113.1l-5.8,9.2H39.8H38c-1.2-0.1-2.2,0-3,0.2c-0.8,0.2-1.5,0.5-2,0.9c-0.5,0.4-0.9,0.9-1,1.4c-0.2,0.5-0.3,1.1-0.4,1.8c0,0.7,0.2,1.5,0.7,2.4c0.5,0.8,1.3,1.3,2.3,1.4c1,0.2,2.4,0.3,4.2,0.3h7.5c3.6,0,6.4,0.5,8.4,1.5c1.1,0.5,2.1,1.1,3,2c0.9,0.9,1.7,1.9,2.3,3c0.7,1.1,1.2,2.4,1.5,3.8c0.4,1.4,0.6,2.9,0.6,4.4c0,3.5-0.7,6.5-2.2,9c-1.4,2.5-3.3,4.1-5.6,4.8c-2.3,0.7-5.3,1-9.1,1h-25v-9.3h21.2h1.2c1.3,0.1,2.5,0,3.5-0.2c1-0.2,1.8-0.5,2.4-1c0.6-0.4,1.1-0.9,1.4-1.5c0.3-0.6,0.4-1.2,0.4-1.8c0-1.2-0.5-2.2-1.4-3c-0.9-0.9-2.3-1.2-4-1h-1.8h-7.6c-3.2,0-5.8-0.5-7.9-1.4c-1.1-0.5-2.1-1.3-3-2.2c-0.9-0.9-1.7-1.9-2.4-3.1c-0.7-1.2-1.2-2.5-1.6-3.9c-0.4-1.4-0.6-2.9-0.6-4.5c0-3,0.7-5.8,2-8.2c0.7-1.2,1.5-2.2,2.5-2.9c1-0.8,2.1-1.4,3.4-1.8c1.3-0.4,2.6-0.7,4.1-0.9c1.5-0.2,3-0.3,4.6-0.3h1.8H62.7z" />
            <path fill="currentColor"
                d="M156.1,113.1l14.6,39.2v-39.2h10.6v47.1h-18.3L149.4,122v38.1h-10.7v-47.1H156.1z" />
            <rect x="91.6" y="132" fill="currentColor" width="34.2" height="9.3" />
            <polygon fill="currentColor"
                points="86.8,122.3 86.8,132.8 86.9,132.8 86.9,142 86.8,142 86.8,150.9 102.1,150.9 102.1,150.9 125.8,150.9 125.8,160.2 109.9,160.2 109.9,160.2 75.6,160.2 75.6,113.1 125.8,113.1 125.8,122.3 " />
            <path fill="#FFFFFF"
                d="M33.8,176.9c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v12.6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8h-5.7v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-6h-6.8v6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8h-5.7v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h5.7v0.8h-0.6c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v5.6H30v-5.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h5.7v0.8H33.8z" />
            <path fill="#FFFFFF"
                d="M48.8,187.5h0.8v4.1H37.1v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h12.3v4.1h-0.8v-0.3c0-0.4,0-0.8-0.1-1.1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.3-0.5-0.6-0.9-0.7c-0.4-0.2-0.9-0.3-1.5-0.3h-3.5c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v5.6h2.6c1.4,0,2.1-0.7,2.1-2.2v-0.5h0.8v6.2h-0.8v-0.5c0-1.4-0.7-2.2-2.1-2.2h-2.6v6.1c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h4c1.7,0,2.6-1,2.6-2.9V187.5z" />
            <path fill="#FFFFFF"
                d="M67.6,190.8h0.6v0.8h-6.7v-0.8h1.3c0.4,0,0.6-0.2,0.3-0.7l-1.3-3.2H56l-1.3,3.1c-0.2,0.5-0.1,0.7,0.3,0.7h1.2v0.8H52v-0.8h0.8c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.2-0.3,0.3-0.5l5.8-14.2h0.8l6.3,14.2c0.1,0.3,0.2,0.5,0.4,0.6C67.1,190.8,67.3,190.8,67.6,190.8z M56.3,186h5l-2.6-6.1L56.3,186z" />
            <path fill="#FFFFFF"
                d="M76.2,176.1v0.8h-0.6c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v12.6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h3c0.6,0,1.1-0.1,1.5-0.3c0.4-0.2,0.7-0.4,0.9-0.8c0.2-0.3,0.3-0.6,0.3-0.9c0.1-0.3,0.1-0.6,0.1-1v-0.3h0.8v4.1H70.5v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8H76.2z" />
            <path fill="#FFFFFF"
                d="M95.8,176.1v4.1H95v-0.3c0-0.4,0-0.8-0.1-1.1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.3-0.4-0.6-0.8-0.7c-0.4-0.2-0.8-0.3-1.4-0.3h-0.7c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v12.6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8h-5.7v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.7c-0.6,0-1.1,0.1-1.4,0.3c-0.4,0.2-0.6,0.4-0.8,0.7c-0.2,0.3-0.3,0.6-0.3,0.9c-0.1,0.3-0.1,0.7-0.1,1.1v0.3H83v-4.1H95.8z" />
            <path fill="#FFFFFF"
                d="M113.5,176.9c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v12.6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8h-5.7v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-6h-6.8v6c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8h-5.7v-0.8H99c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h5.7v0.8h-0.6c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v5.6h6.8v-5.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h5.7v0.8H113.5z" />
            <path fill="#FFFFFF"
                d="M125.1,176.7c-1.6,0-2.9,0.6-3.8,1.9c-0.9,1.2-1.4,3-1.4,5.3c0,2.3,0.5,4.1,1.4,5.3c0.9,1.2,2.2,1.9,3.8,1.9c1.2,0,2.1-0.3,2.9-0.8c0.8-0.6,1.2-1.5,1.2-2.7h0.8v4.1h-0.8v-0.3c0-0.2-0.1-0.3-0.3-0.3c-0.1,0-0.3,0.1-0.7,0.2c-0.4,0.2-0.9,0.3-1.5,0.5c-0.6,0.2-1.3,0.2-2.1,0.2c-2.4,0-4.3-0.7-5.7-2.2c-1.4-1.5-2.2-3.4-2.2-5.8c0-2.4,0.7-4.3,2.2-5.8c1.4-1.5,3.3-2.2,5.7-2.2c0.7,0,1.4,0.1,2.1,0.2c0.6,0.2,1.2,0.3,1.5,0.5c0.4,0.2,0.6,0.2,0.7,0.2c0.2,0,0.3-0.1,0.3-0.3v-0.3h0.8v4.1h-0.8C129.2,177.8,127.8,176.7,125.1,176.7z" />
            <path fill="#FFFFFF"
                d="M148.1,190.8h0.6v0.8h-6.7v-0.8h1.3c0.4,0,0.6-0.2,0.3-0.7l-1.3-3.2h-5.8l-1.3,3.1c-0.2,0.5-0.1,0.7,0.3,0.7h1.2v0.8h-4.3v-0.8h0.8c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.2-0.3,0.3-0.5l5.8-14.2h0.8l6.3,14.2c0.1,0.3,0.2,0.5,0.4,0.6C147.6,190.8,147.8,190.8,148.1,190.8z M136.8,186h5l-2.6-6.1L136.8,186z" />
            <path fill="#FFFFFF"
                d="M166.1,190.8h0.6v0.8h-2.4c-1.2,0-2.1-0.2-2.7-0.7c-0.6-0.5-1.1-1.4-1.4-2.6c-0.2-0.9-0.4-1.5-0.5-2c-0.2-0.5-0.4-0.8-0.7-1.1c-0.3-0.2-0.5-0.4-0.8-0.4c-0.3,0-0.7-0.1-1.2-0.1h-1.5v5.4c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h0.6v0.8H151v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1H151v-0.8h7c2,0,3.5,0.4,4.4,1.2c0.9,0.8,1.3,1.8,1.3,3.1c0,0.9-0.3,1.8-0.8,2.5c-0.6,0.7-1.4,1.2-2.5,1.6c1.7,0.5,2.7,1.7,3.1,3.5c0.3,1.2,0.6,2,0.9,2.4C164.8,190.6,165.3,190.8,166.1,190.8z M155.4,183.9h1.8h0h0c1.1,0,1.9-0.3,2.4-0.8c0.5-0.5,0.7-1.5,0.7-2.8c0-1.3-0.2-2.3-0.7-2.7c-0.5-0.5-1.3-0.7-2.4-0.7h-1.9V183.9z" />
            <path fill="#FFFFFF"
                d="M180.6,187.5h0.8v4.1h-12.5v-0.8h0.6c0.3,0,0.5,0,0.6-0.1c0.1-0.1,0.1-0.3,0.1-0.6v-12.6c0-0.3,0-0.5-0.1-0.6c-0.1-0.1-0.3-0.1-0.6-0.1h-0.6v-0.8h12.3v4.1h-0.8v-0.3c0-0.4,0-0.8-0.1-1.1c-0.1-0.3-0.2-0.6-0.3-0.9c-0.2-0.3-0.5-0.6-0.9-0.7c-0.4-0.2-0.9-0.3-1.5-0.3H174c-0.3,0-0.5,0-0.6,0.1c-0.1,0.1-0.1,0.3-0.1,0.6v5.6h2.6c1.4,0,2.1-0.7,2.1-2.2v-0.5h0.8v6.2h-0.8v-0.5c0-1.4-0.7-2.2-2.1-2.2h-2.6v6.1c0,0.3,0,0.5,0.1,0.6c0.1,0.1,0.3,0.1,0.6,0.1h4c1.7,0,2.6-1,2.6-2.9V187.5z" />
            <polygon fill="#FFFFFF"
                points="118.3,54.4 105.5,54.4 105.5,41.6 95.8,41.6 95.8,54.4 83,54.4 83,64.1 95.8,64.1 95.8,76.9 105.5,76.9 105.5,64.1 118.3,64.1 " />
        </symbol>
        <symbol id="ico-business-logo-03" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M161.2,30.4c0-0.1-0.1-0.3-0.3-0.4c-0.1,0-0.1,0-0.3,0c-6,0.5-17.6,2-29.9,5.4c-1.8,0.5-3.4,0.9-4.9,1.5c-1.4-2.2-2.8-4.3-4.5-6.5C114,20.2,105.7,11.9,101.4,8c-0.1-0.1-0.4-0.1-0.5,0C96.6,12,88.4,20.3,80.8,30.4c-1.6,2.2-3.1,4.3-4.5,6.5c-1.5-0.5-3.3-1.1-4.9-1.5C59.2,32,47.5,30.5,41.5,30c-0.1,0-0.1,0-0.3,0S41,30.1,41,30.4c0,5.7,0.3,17.2,2.4,29.4C45.2,70,47.9,78.4,51.6,85c4.6,8.7,10.9,14.2,18.3,16.4c6.5,1.9,12.5,2.2,18,0.5c3.1-0.9,6.1-2.4,8.5-4.5c1.5,0.1,3,0.1,4.5,0.1c1.5,0,3.1,0,4.5-0.1c2.6,2,5.4,3.5,8.7,4.5c2.4,0.7,5.2,1.1,7.7,1.1c3.3,0,6.6-0.5,10.2-1.6c7.5-2.3,13.7-7.9,18.3-16.4c3.5-6.6,6.2-15.1,8.1-25.2C161,47.6,161.2,36.2,161.2,30.4z M69.8,41.9c1.1,0.3,2.2,0.7,3.1,0.9l0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c-2,3.8-3.7,7.6-4.9,11.1c-3.1,9.5-2.8,18,0.7,25.1c3.1,6.1,7.2,10.7,12.2,13.6c2,1.1,4.1,2,6.2,2.6c-4.5,1.5-9.6,1.5-15.1-0.3c-13.6-4.1-19.4-22.1-22-36.6c-1.2-6.5-1.9-13.7-2.2-21.2C55.5,38.5,62.7,40,69.8,41.9z M152.3,58.7c-2.6,14.5-8.4,32.6-22,36.6c-5.6,1.6-10.7,1.8-15.1,0.3c2.2-0.5,4.3-1.5,6.2-2.6c5-2.8,9.2-7.5,12.2-13.6c3.5-7.1,3.8-15.6,0.7-25.1c-1.2-3.5-2.8-7.3-5-11.3l0,0c1.1-0.3,2.2-0.7,3.1-0.9c7.1-1.9,14.1-3.4,21.8-4.5C154.2,45,153.5,52.2,152.3,58.7z M94.9,90.9c-3.1-0.7-5.4-1.2-5.8-1.5h-0.1c-0.8-0.3-1.6-0.7-2.3-0.9c-0.3-0.1-0.4-0.1-0.7-0.3c-0.1,0-0.1-0.1-0.3-0.1c-0.4-0.1-0.7-0.3-0.9-0.5c0,0,0,0-0.1,0h-0.1c-0.3-0.1-0.5-0.3-0.8-0.5h-0.1c0,0-0.1,0-0.1-0.1c-0.3-0.1-0.5-0.4-0.9-0.5l-0.1-0.1l0,0c-0.3-0.3-0.5-0.4-0.8-0.7l-0.1-0.1c-0.3-0.3-0.5-0.4-0.8-0.7l0,0l-0.1-0.1c-0.3-0.3-0.5-0.5-0.8-0.8l-0.1-0.1l-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.7l-0.1-0.1c0,0,0,0-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.9c-0.1-0.1-0.1-0.1-0.3-0.3c-0.3-0.4-0.5-0.7-0.7-0.9c0,0,0-0.1-0.1-0.1L76.4,80c-0.1-0.3-0.4-0.5-0.5-0.8v-0.1l-0.1-0.1c-0.3-0.3-0.4-0.7-0.7-1.1c0-0.1-0.1-0.1-0.1-0.3l0,0c-0.1-0.4-0.4-0.7-0.5-1.1c0,0,0,0,0-0.1l0,0l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.3-0.1-0.4-0.3-0.7c0-0.1,0-0.1-0.1-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1v-0.1c0-0.3-0.1-0.4-0.1-0.8c0-0.1,0-0.1,0-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1c0,0,0,0,0-0.1s0-0.1,0-0.3l0,0c0-0.4-0.1-0.9-0.1-1.4c0,0,0,0,0-0.1l0,0c-1.1-11.8,6.8-25.4,13.7-34.6c5.2-7.1,11-13.3,14.9-17.4c3.9,4.1,9.8,10.3,14.9,17.4c6.8,9.2,14.8,22.8,13.7,34.5l0,0l0,0l0,0c0,0,0,0,0,0.1c0,0.3,0,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1V73c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.7c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.1-0.1,0.4-0.3,0.5c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.5c0,0,0,0,0,0.1l0,0l0,0c0,0,0,0,0,0.1c-0.1,0.3-0.4,0.7-0.5,1.1l0,0c0,0.1-0.1,0.1-0.1,0.3c-0.3,0.4-0.4,0.7-0.7,1.1l-0.1,0.1v0.1c-0.1,0.3-0.4,0.5-0.5,0.8l-0.1,0.1c0,0,0,0.1-0.1,0.1c-0.3,0.3-0.4,0.7-0.7,0.9c-0.1,0.1-0.1,0.1-0.3,0.3c-0.3,0.4-0.5,0.7-0.7,0.9c0,0,0,0-0.1,0.1l-0.1,0.1c-0.3,0.3-0.4,0.5-0.7,0.7l-0.1,0.1l-0.1,0.1c-0.3,0.3-0.5,0.5-0.8,0.8l-0.1,0.1l0,0c-0.3,0.3-0.5,0.5-0.8,0.7l-0.1,0.1c-0.3,0.3-0.5,0.4-0.8,0.7l0,0l-0.1,0.1c-0.3,0.3-0.5,0.4-0.9,0.5c0,0-0.1,0-0.1,0.1h-0.1c-0.3,0.1-0.5,0.4-0.8,0.5h-0.1c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.3-0.9,0.5c-0.1,0-0.1,0.1-0.3,0.1c-0.3,0.1-0.4,0.3-0.7,0.3c-0.8,0.4-1.5,0.7-2.3,0.9h-0.1c-0.4,0.3-2.7,0.8-5.8,1.5c-2,0.4-4.2,0.5-6.2,0.7C99.1,91.4,96.9,91.3,94.9,90.9z" />
            <path fill="currentColor"
                d="M63,114.6l-5.8,9.4H39.9h-1.8c-1.2-0.1-2.3,0-3.1,0.1c-0.8,0.3-1.5,0.5-2,0.9c-0.5,0.4-0.8,0.8-1.1,1.4c-0.1,0.5-0.3,1.1-0.4,1.8c0,0.7,0.3,1.5,0.7,2.4c0.5,0.8,1.2,1.2,2.3,1.5c1.1,0.1,2.4,0.3,4.2,0.3h7.6c3.5,0,6.4,0.5,8.4,1.5c1.1,0.4,2,1.1,3,2c0.9,0.8,1.6,1.9,2.3,3s1.2,2.4,1.5,3.8c0.4,1.4,0.5,2.8,0.5,4.5c0,3.5-0.8,6.5-2.3,9.1c-1.4,2.4-3.3,4.1-5.6,4.9c-2.3,0.7-5.4,0.9-9.1,0.9H20.2v-9.4h21.4h1.2c1.4,0.1,2.6,0,3.5-0.1c0.9-0.3,1.8-0.5,2.4-0.9c0.7-0.4,1.1-0.9,1.4-1.5c0.3-0.5,0.4-1.2,0.4-1.9c0-1.2-0.5-2.2-1.5-3.1c-0.9-0.8-2.3-1.2-4.1-1.1h-1.8h-7.7c-3.3,0-5.8-0.5-8-1.5c-1.1-0.5-2.2-1.2-3.1-2.2c-0.9-0.9-1.8-1.9-2.4-3.1c-0.7-1.2-1.2-2.4-1.6-3.9s-0.5-3-0.5-4.5c0-3,0.7-5.8,2-8.3c0.7-1.2,1.5-2.2,2.6-3c0.9-0.8,2.2-1.4,3.4-1.8c1.2-0.4,2.7-0.8,4.1-0.9c1.5-0.1,3-0.3,4.6-0.3h1.9L63,114.6L63,114.6z" />
            <path fill="currentColor"
                d="M157,114.6l14.8,39.4v-39.4h10.7V162h-18.3l-14-38.4V162h-10.9v-47.4C139.4,114.6,157,114.6,157,114.6z" />
            <rect fill="currentColor" x="92.2" y="133.6" width="34.3" height="9.4" />
            <polygon fill="currentColor"
                points="87.3,123.9 87.3,134.4 87.3,134.4 87.3,143.8 87.3,143.8 87.3,152.6 102.6,152.6 102.6,152.6 126.5,152.6 126.5,162 110.5,162 110.5,162 76,162 76,114.6 126.5,114.6 126.5,123.9 " />
            <path fill="currentColor"
                d="M100.8,85.9c-3.4,0-6.8-0.9-10.2-2.8c-1.1-0.5-1.9-0.8-2.3-0.8c-0.8,0-1.2,0.5-1.2,1.6L87,84.9h-1.5v-13h1.4c0.4,3.9,1.9,6.9,4.5,8.8c2.4,1.9,5.4,2.8,9,2.8c3.4,0,6.1-0.9,7.9-2.8c1.8-1.9,2.7-4.1,2.7-6.6c0-4.1-2.3-7.1-6.9-9.1l-9.2-4.1c-2.8-1.2-4.9-3-6.2-5c-1.4-2.2-2-4.5-2-6.9c0-3.8,1.2-7.1,3.8-9.8c2.6-2.7,6.2-4.1,11-4.1c2.8,0,5.7,0.9,8.5,2.8c0.9,0.5,1.6,0.8,2,0.8c0.7,0,1.1-0.5,1.1-1.6l0.1-1.5h1.5v13.4h-1.4c-0.4-3.9-1.6-6.9-3.8-8.8c-2.2-1.9-4.7-2.8-7.9-2.8s-5.4,0.8-7.2,2.6c-1.6,1.6-2.6,3.7-2.6,5.7c0,2.2,0.5,4.1,1.8,5.8c1.2,1.8,2.8,3.1,5.2,4.1l9.4,4.1c3.1,1.4,5.4,3.3,7.1,5.4c1.6,2.3,2.3,4.6,2.3,7.2c0,3.7-1.5,6.9-4.5,9.5C109.7,84.5,105.7,85.9,100.8,85.9z" />
            <path fill="currentColor"
                d="M16.8,178.5c-1.6,0-2.8,0.7-3.8,1.9c-0.9,1.2-1.4,3-1.4,5.3c0,2.3,0.4,4.1,1.4,5.3c0.9,1.2,2.2,1.9,3.8,1.9c1.2,0,2.2-0.3,3-0.8c0.8-0.5,1.2-1.5,1.2-2.7h0.8v4.2H21v-0.4c0-0.3-0.1-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.7,0.3c-0.4,0.1-0.9,0.3-1.5,0.4c-0.5,0.1-1.4,0.3-2.2,0.3c-2.4,0-4.3-0.7-5.7-2.2c-1.5-1.5-2.2-3.4-2.2-5.8s0.7-4.3,2.2-5.8s3.4-2.2,5.7-2.2c0.8,0,1.5,0.1,2.2,0.3c0.7,0.1,1.2,0.3,1.5,0.4c0.4,0.1,0.5,0.3,0.7,0.3s0.3-0.1,0.3-0.4v-0.4h0.8v4.2H21C20.9,179.8,19.5,178.5,16.8,178.5z" />
            <path fill="currentColor"
                d="M32,177.7c2.3,0,4.1,0.8,5.6,2.3c1.4,1.5,2,3.4,2,5.8s-0.7,4.3-2,5.8c-1.4,1.5-3.3,2.2-5.6,2.2c-2.3,0-4.2-0.7-5.6-2.2s-2-3.4-2-5.8s0.7-4.3,2-5.8C27.8,178.5,29.7,177.7,32,177.7z M35.3,180.4c-0.7-1.2-1.8-1.8-3.3-1.8c-1.5,0-2.6,0.5-3.3,1.8c-0.7,1.2-0.9,3-0.9,5.4s0.3,4.2,0.9,5.4c0.7,1.2,1.8,1.8,3.3,1.8c1.5,0,2.6-0.5,3.3-1.8c0.7-1.2,0.9-3,0.9-5.4S36,181.5,35.3,180.4z" />
            <path fill="currentColor"
                d="M57.7,178v0.8H57c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v14.1h-1.1l-11-13.2v11.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.8v0.8h-3.8v-0.8h0.7c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.6c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7V178h4.5l9,10.7v-9.2c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.8V178H57.7z" />
            <path fill="currentColor"
                d="M65.7,177.7c0.7,0,1.2,0.1,1.8,0.3c0.5,0.1,0.9,0.3,1.2,0.4c0.3,0.1,0.5,0.3,0.5,0.3c0.1,0,0.3-0.1,0.3-0.4V178h0.8v4.2h-0.8c0-1.2-0.4-2-1.1-2.7c-0.7-0.7-1.6-0.9-2.7-0.9c-0.8,0-1.5,0.3-1.9,0.7c-0.4,0.4-0.7,0.9-0.7,1.8c0,0.5,0.1,0.9,0.4,1.4c0.3,0.4,0.7,0.7,1.1,0.9c0.4,0.3,0.9,0.5,1.6,0.8c0.5,0.3,1.1,0.5,1.8,0.8c0.5,0.3,1.1,0.5,1.6,0.9c0.4,0.4,0.8,0.8,1.1,1.4c0.3,0.5,0.4,1.2,0.4,1.9c0,1.5-0.5,2.7-1.6,3.5c-1.1,0.9-2.6,1.4-4.5,1.4c-0.8,0-1.5-0.1-2-0.3c-0.5-0.1-1.1-0.3-1.5-0.4c-0.4-0.1-0.5-0.3-0.7-0.3s-0.3,0.1-0.3,0.4v0.4h-0.8v-4.2h0.9c0,1.2,0.4,2,1.2,2.7c0.8,0.5,1.8,0.9,3.1,0.9c0.9,0,1.8-0.3,2.3-0.8c0.5-0.5,0.9-1.2,0.9-2.2c0-0.5-0.1-0.9-0.4-1.4c-0.3-0.4-0.7-0.7-1.1-0.9c-0.4-0.3-0.9-0.5-1.5-0.7c-0.5-0.3-1.1-0.5-1.6-0.7c-0.5-0.1-1.1-0.5-1.5-0.9c-0.4-0.3-0.8-0.8-1.1-1.4c-0.3-0.5-0.4-1.2-0.4-1.9c0-1.4,0.5-2.4,1.5-3.3C62.7,178.1,64.1,177.7,65.7,177.7z" />
            <path fill="currentColor"
                d="M86.2,178v4.1h-0.8v-0.4c0-0.4,0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.3-0.9c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.1-0.8-0.3-1.5-0.3H82c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5V192c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.5c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7c-0.5,0-1.1,0.1-1.5,0.3c-0.4,0.1-0.7,0.4-0.8,0.7s-0.3,0.7-0.3,0.9s-0.1,0.7-0.1,1.1v0.4h-0.8v-4.1h13V178z" />
            <path fill="currentColor"
                d="M103.7,192.8h0.5v0.8h-2.4c-1.2,0-2.2-0.3-2.7-0.7c-0.5-0.4-1.1-1.4-1.4-2.6c-0.1-0.8-0.4-1.5-0.5-2c-0.1-0.4-0.4-0.8-0.7-1.1s-0.5-0.4-0.8-0.4s-0.7-0.1-1.2-0.1H93v5.4c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8H89c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.6c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5V178h7.1c2,0,3.5,0.4,4.5,1.2c0.9,0.8,1.4,1.9,1.4,3.1c0,0.9-0.3,1.8-0.8,2.4s-1.4,1.2-2.6,1.6c1.6,0.5,2.7,1.8,3.1,3.5c0.3,1.2,0.5,2,0.9,2.4C102.3,192.7,102.9,192.8,103.7,192.8z M93,185.9h1.9l0,0l0,0c1.1,0,1.9-0.3,2.4-0.8c0.5-0.5,0.8-1.5,0.8-2.8c0-1.4-0.3-2.3-0.8-2.7c-0.5-0.5-1.4-0.7-2.4-0.7H93V185.9z" />
            <path fill="currentColor"
                d="M120.4,178v0.8h-0.8c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v8.5c0,1.9-0.5,3.4-1.6,4.3c-1.1,0.9-2.6,1.5-4.3,1.5c-2.3,0-3.9-0.5-5.2-1.5c-1.2-1.1-1.8-2.6-1.8-4.5v-8.4c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5V178h5.7v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v8.4c0,1.8,0.4,3.1,1.1,3.9c0.7,0.8,1.8,1.2,3.4,1.2c1.4,0,2.3-0.4,3.3-1.2s1.2-2,1.2-3.7v-8.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-1.2V178H120.4z" />
            <path fill="currentColor"
                d="M130.7,178.5c-1.6,0-2.8,0.7-3.8,1.9c-0.9,1.2-1.4,3-1.4,5.3c0,2.3,0.4,4.1,1.4,5.3c0.9,1.2,2.2,1.9,3.8,1.9c1.2,0,2.2-0.3,3-0.8c0.8-0.5,1.2-1.5,1.2-2.7h0.8v4.2h-0.8v-0.4c0-0.3-0.1-0.4-0.3-0.4c-0.1,0-0.3,0.1-0.7,0.3c-0.4,0.1-0.9,0.3-1.5,0.4c-0.5,0.1-1.4,0.3-2.2,0.3c-2.4,0-4.3-0.7-5.7-2.2c-1.5-1.5-2.2-3.4-2.2-5.8s0.7-4.3,2.2-5.8c1.5-1.5,3.4-2.2,5.7-2.2c0.8,0,1.5,0.1,2.2,0.3c0.7,0.1,1.2,0.3,1.5,0.4c0.4,0.1,0.5,0.3,0.7,0.3c0.1,0,0.3-0.1,0.3-0.4v-0.4h0.8v4.2h-0.8C134.8,179.8,133.4,178.5,130.7,178.5z" />
            <path fill="currentColor"
                d="M151,178v4.1h-0.8v-0.4c0-0.4,0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.3-0.9c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.1-0.8-0.3-1.5-0.3h-0.7c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5V192c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.5c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7c-0.5,0-1.1,0.1-1.5,0.3c-0.4,0.1-0.7,0.4-0.8,0.7s-0.3,0.7-0.3,0.9s-0.1,0.7-0.1,1.1v0.4H138v-4.1h13V178z" />
            <path fill="currentColor"
                d="M159.1,178v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.6c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.6c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5V178H159.1z" />
            <path fill="currentColor"
                d="M169.1,177.7c2.3,0,4.1,0.8,5.6,2.3c1.4,1.5,2,3.4,2,5.8s-0.7,4.3-2,5.8c-1.4,1.5-3.3,2.2-5.6,2.2c-2.3,0-4.2-0.7-5.6-2.2c-1.4-1.5-2-3.4-2-5.8s0.7-4.3,2-5.8C164.9,178.5,166.8,177.7,169.1,177.7z M172.4,180.4c-0.7-1.2-1.8-1.8-3.3-1.8s-2.6,0.5-3.3,1.8c-0.7,1.2-0.9,3-0.9,5.4s0.3,4.2,0.9,5.4s1.8,1.8,3.3,1.8c1.5,0,2.6-0.5,3.3-1.8c0.7-1.2,0.9-3,0.9-5.4S173,181.5,172.4,180.4z" />
            <path fill="currentColor"
                d="M194.7,178v0.8h-0.7c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v14.1h-1.1l-11-13.2v11.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.8v0.8H179v-0.8h0.7c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.6c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1H179V178h4.5l9,10.7v-9.2c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.8V178H194.7z" />
        </symbol>
        <symbol id="ico-business-logo-04" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M34.7,193.4h0.5v0.8h-2.5c-1.2,0-2.2-0.3-2.7-0.7c-0.5-0.4-1.1-1.4-1.4-2.6c-0.1-0.8-0.4-1.5-0.5-2c-0.1-0.4-0.4-0.8-0.7-1.1c-0.3-0.3-0.5-0.4-0.8-0.4c-0.3,0-0.7-0.1-1.2-0.1H24v5.5c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8H20c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V180c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8h7.1c2,0,3.6,0.4,4.5,1.2c1,0.8,1.4,1.9,1.4,3.1c0,1-0.3,1.8-0.8,2.5c-0.5,0.7-1.4,1.2-2.6,1.6c1.6,0.5,2.7,1.8,3.1,3.6c0.3,1.2,0.5,2,1,2.5C33.4,193.2,33.9,193.4,34.7,193.4z M24,186.4h1.9l0,0l0,0c1.1,0,1.9-0.3,2.5-0.8c0.5-0.5,0.8-1.5,0.8-2.9s-0.3-2.3-0.8-2.7c-0.5-0.5-1.4-0.7-2.5-0.7H24V186.4z" />
            <path fill="currentColor"
                d="M63.1,190.1H64v4.1H51.3v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V180c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8h12.4v4.1H63v-0.4c0-0.4,0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.4-1c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.1-1-0.3-1.5-0.3h-3.6c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v5.7h2.6c1.5,0,2.2-0.7,2.2-2.2v-0.5h0.8v6.3h-0.8v-0.5c0-1.5-0.7-2.2-2.2-2.2h-2.6v6.1c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h4.1c1.8,0,2.6-1,2.6-3v-0.1H63.1z" />
            <path fill="currentColor"
                d="M86.8,178.2c0.7,0,1.2,0.1,1.8,0.3c0.5,0.1,1,0.3,1.2,0.4s0.5,0.3,0.5,0.3c0.1,0,0.3-0.1,0.3-0.4v-0.3h0.8v4.2h-0.8c0-1.2-0.4-2-1.1-2.7s-1.6-1-2.7-1c-0.8,0-1.5,0.3-1.9,0.7c-0.4,0.4-0.7,1-0.7,1.8c0,0.5,0.1,1,0.4,1.4c0.3,0.4,0.7,0.7,1.1,1c0.4,0.3,1,0.5,1.6,0.8c0.5,0.3,1.1,0.5,1.8,0.8c0.5,0.3,1.1,0.5,1.6,1c0.4,0.4,0.8,0.8,1.1,1.4c0.3,0.5,0.4,1.2,0.4,1.9c0,1.5-0.5,2.7-1.6,3.6c-1.1,1-2.6,1.4-4.5,1.4c-0.8,0-1.5-0.1-2-0.3c-0.5-0.1-1.1-0.3-1.5-0.4c-0.4-0.1-0.5-0.3-0.7-0.3c-0.1,0-0.3,0.1-0.3,0.4v0.4h-0.8v-4.2h0.8c0,1.2,0.4,2,1.2,2.7c0.8,0.5,1.8,1,3.1,1c1,0,1.8-0.3,2.3-0.8c0.5-0.5,1-1.2,1-2.2c0-0.5-0.1-1-0.4-1.4c-0.3-0.4-0.7-0.7-1.1-1c-0.4-0.3-1-0.5-1.5-0.7c-0.5-0.3-1.1-0.5-1.6-0.7c-0.5-0.1-1.1-0.5-1.5-1c-0.4-0.3-0.8-0.8-1.1-1.4c-0.3-0.5-0.4-1.2-0.4-1.9c0-1.4,0.5-2.5,1.5-3.3C83.9,178.6,85.1,178.2,86.8,178.2z" />
            <path fill="currentColor"
                d="M116.8,178.2c2.3,0,4.1,0.8,5.6,2.3c1.4,1.5,2,3.4,2,5.9c0,2.5-0.7,4.4-2,5.9c-1.4,1.5-3.3,2.2-5.6,2.2s-4.2-0.7-5.6-2.2c-1.4-1.5-2-3.4-2-5.9c0-2.5,0.7-4.4,2-5.9C112.6,179,114.5,178.2,116.8,178.2z M120.1,180.9c-0.7-1.2-1.8-1.8-3.3-1.8s-2.6,0.5-3.3,1.8s-1,3-1,5.5c0,2.5,0.3,4.2,1,5.5s1.8,1.8,3.3,1.8s2.6-0.5,3.3-1.8c0.7-1.2,1-3,1-5.5C121,184,120.8,182,120.1,180.9z" />
            <path fill="currentColor"
                d="M156.1,193.4h0.5v0.8h-2.5c-1.2,0-2.2-0.3-2.7-0.7s-1.1-1.4-1.4-2.6c-0.1-0.8-0.4-1.5-0.5-2c-0.1-0.4-0.4-0.8-0.7-1.1c-0.3-0.3-0.5-0.4-0.8-0.4c-0.3,0-0.7-0.1-1.2-0.1h-1.5v5.5c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V180c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8h7.1c2,0,3.6,0.4,4.5,1.2c1,0.8,1.4,1.9,1.4,3.1c0,1-0.3,1.8-0.8,2.5c-0.5,0.7-1.4,1.2-2.6,1.6c1.6,0.5,2.7,1.8,3.1,3.6c0.3,1.2,0.5,2,1,2.5C154.8,193.2,155.3,193.4,156.1,193.4z M145.3,186.4h1.9l0,0l0,0c1.1,0,1.9-0.3,2.5-0.8c0.5-0.5,0.8-1.5,0.8-2.9s-0.3-2.3-0.8-2.7c-0.5-0.5-1.4-0.7-2.5-0.7h-1.9V186.4z" />
            <path fill="currentColor"
                d="M184.1,178.5v4.1h-0.8v-0.4c0-0.4,0-0.8-0.1-1.1c0-0.3-0.1-0.5-0.3-1c-0.1-0.3-0.4-0.5-0.8-0.7c-0.4-0.1-0.8-0.3-1.5-0.3h-0.7c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5V180c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7c-0.5,0-1.1,0.1-1.5,0.3c-0.4,0.1-0.7,0.4-0.8,0.7c-0.1,0.3-0.3,0.7-0.3,1c0,0.3-0.1,0.7-0.1,1.1v0.4H171v-4.1h13.1V178.5z" />
            <path fill="currentColor"
                d="M161.5,29.9c0-0.1-0.1-0.3-0.3-0.4c-0.1,0-0.1,0-0.3,0c-6,0.5-17.8,2-30,5.5c-1.8,0.5-3.4,1-4.9,1.5c-1.4-2.2-2.9-4.4-4.5-6.6c-7.5-10.2-15.8-18.6-20.2-22.5c-0.1-0.1-0.4-0.1-0.5,0c-4.2,4.1-12.6,12.4-20.2,22.5c-1.6,2.2-3.1,4.4-4.5,6.6c-1.5-0.5-3.3-1.1-4.9-1.5c-12.3-3.4-24-4.9-30-5.5c-0.1,0-0.1,0-0.3,0c-0.1,0-0.3,0.1-0.3,0.4c0,5.7,0.3,17.3,2.5,29.6c1.8,10.2,4.5,18.7,8.2,25.4c4.6,8.7,10.9,14.3,18.4,16.5c6.6,1.9,12.6,2.2,18.2,0.5c3.1-1,6.1-2.5,8.6-4.5c1.5,0.1,3,0.1,4.5,0.1c1.5,0,3.1,0,4.5-0.1c2.6,2,5.5,3.6,8.7,4.5c2.5,0.7,5.2,1.1,7.8,1.1c3.3,0,6.7-0.5,10.2-1.6c7.5-2.3,13.8-7.9,18.4-16.5c3.6-6.7,6.3-15.2,8.2-25.4C161.2,47.3,161.5,35.8,161.5,29.9z M69.4,41.5c1.1,0.3,2.2,0.7,3.1,1l0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c-2,3.8-3.7,7.6-4.9,11.2c-3.1,9.6-2.9,18.2,0.7,25.3c3.1,6.1,7.2,10.8,12.3,13.7c2,1.1,4.1,2,6.3,2.6c-4.5,1.5-9.7,1.5-15.2-0.3C58,91.1,52.1,72.9,49.5,58.3c-1.2-6.6-1.9-13.8-2.2-21.3C55.2,38.1,62.3,39.6,69.4,41.5z M152.6,58.5c-2.6,14.6-8.5,32.8-22.1,36.9c-5.6,1.6-10.8,1.8-15.2,0.3c2.2-0.5,4.4-1.5,6.3-2.6c5.1-2.9,9.3-7.5,12.3-13.7c3.6-7.1,3.8-15.7,0.7-25.3c-1.2-3.6-2.9-7.4-5.1-11.3l0,0c1.1-0.3,2.2-0.7,3.1-1c7.1-1.9,14.2-3.4,22-4.5C154.5,44.7,153.7,51.9,152.6,58.5z M94.8,90.8c-3.1-0.7-5.5-1.2-5.9-1.5h-0.1c-0.8-0.3-1.6-0.7-2.3-1c-0.3-0.1-0.4-0.1-0.7-0.3c-0.1,0-0.1-0.1-0.3-0.1c-0.4-0.1-0.7-0.3-1-0.5c0,0,0,0-0.1,0h-0.1c-0.3-0.1-0.5-0.3-0.8-0.5h-0.1c0,0-0.1,0-0.1-0.1c-0.3-0.1-0.5-0.4-1-0.5L82.1,86l0,0c-0.3-0.3-0.5-0.4-0.8-0.7l-0.1-0.1c-0.3-0.3-0.5-0.4-0.8-0.7l0,0l-0.1-0.1c-0.3-0.3-0.5-0.5-0.8-0.8l-0.1-0.1l-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.7l-0.1-0.1c0,0,0,0-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-1c-0.1-0.1-0.1-0.1-0.3-0.3c-0.3-0.4-0.5-0.7-0.7-1c0,0,0-0.1-0.1-0.1l-0.1-0.1c-0.1-0.3-0.4-0.5-0.5-0.8v-0.1l-0.1-0.1c-0.3-0.3-0.4-0.7-0.7-1.1c0-0.1-0.1-0.1-0.1-0.3l0,0c-0.1-0.4-0.4-0.7-0.5-1.1c0,0,0,0,0-0.1l0,0l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.3-0.1-0.4-0.3-0.7c0-0.1,0-0.1-0.1-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1v-0.1c0-0.3-0.1-0.4-0.1-0.8c0-0.1,0-0.1,0-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.3l0,0c0-0.4-0.1-1-0.1-1.4c0,0,0,0,0-0.1l0,0c-1.1-11.9,6.8-25.5,13.8-34.8c5.2-7.1,11.1-13.4,15-17.5c4,4.1,9.8,10.4,15,17.5c6.8,9.3,14.9,22.9,13.8,34.7l0,0l0,0l0,0c0,0,0,0,0,0.1c0,0.3,0,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.7c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.1-0.1,0.4-0.3,0.5c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.5c0,0,0,0,0,0.1l0,0l0,0c0,0,0,0,0,0.1c-0.1,0.3-0.4,0.7-0.5,1.1l0,0c0,0.1-0.1,0.1-0.1,0.3c-0.3,0.4-0.4,0.7-0.7,1.1l-0.1,0.1v0.1c-0.1,0.3-0.4,0.5-0.5,0.8L126,80c0,0,0,0.1-0.1,0.1c-0.3,0.3-0.4,0.7-0.7,1c-0.1,0.1-0.1,0.1-0.3,0.3c-0.3,0.4-0.5,0.7-0.7,1c0,0,0,0-0.1,0.1l-0.1,0.1c-0.3,0.3-0.4,0.5-0.7,0.7l-0.1,0.1l-0.1,0.1c-0.3,0.3-0.5,0.5-0.8,0.8l-0.1,0.1l0,0c-0.3,0.3-0.5,0.5-0.8,0.7l-0.1,0.1c-0.3,0.3-0.5,0.4-0.8,0.7l0,0l-0.1,0.1c-0.3,0.3-0.5,0.4-1,0.5c0,0-0.1,0-0.1,0.1h-0.1c-0.3,0.1-0.5,0.4-0.8,0.5h-0.1c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.3-1,0.5c-0.1,0-0.1,0.1-0.3,0.1c-0.3,0.1-0.4,0.3-0.7,0.3c-0.8,0.4-1.5,0.7-2.3,1h-0.1c-0.4,0.3-2.7,0.8-5.9,1.5c-2,0.4-4.2,0.5-6.3,0.7C98.9,91.4,96.9,91.2,94.8,90.8z" />
            <path fill="currentColor"
                d="M62.6,114.7l-5.9,9.4H39.5h-1.8c-1.2-0.1-2.3,0-3.1,0.1c-0.8,0.3-1.5,0.5-2,1c-0.5,0.4-0.8,0.8-1.1,1.4c-0.1,0.5-0.3,1.1-0.4,1.8c0,0.7,0.3,1.5,0.7,2.5c0.5,0.8,1.2,1.2,2.3,1.5c1.1,0.1,2.5,0.3,4.2,0.3h7.6c3.6,0,6.4,0.5,8.5,1.5c1.1,0.4,2,1.1,3,2c1,0.8,1.6,1.9,2.3,3s1.2,2.5,1.5,3.8c0.4,1.4,0.5,2.9,0.5,4.5c0,3.6-0.8,6.6-2.3,9.1c-1.4,2.5-3.3,4.1-5.6,4.9c-2.3,0.7-5.5,1-9.1,1H19.6v-9.4h21.6h1.2c1.4,0.1,2.6,0,3.6-0.1c1-0.3,1.8-0.5,2.5-1c0.7-0.4,1.1-1,1.4-1.5c0.3-0.5,0.4-1.2,0.4-1.9c0-1.2-0.5-2.2-1.5-3.1c-1-0.8-2.3-1.2-4.1-1.1h-1.8H35c-3.3,0-5.9-0.5-8.1-1.5c-1.1-0.5-2.2-1.2-3.1-2.2c-1-1-1.8-1.9-2.5-3.1c-0.7-1.2-1.2-2.5-1.6-4c-0.4-1.5-0.5-3-0.5-4.5c0-3,0.7-5.9,2-8.3c0.7-1.2,1.5-2.2,2.6-3c1-0.8,2.2-1.4,3.4-1.8s2.7-0.8,4.1-1c1.5-0.1,3-0.3,4.6-0.3h1.9L62.6,114.7L62.6,114.7z" />
            <path fill="currentColor"
                d="M157.2,114.7l14.9,39.6v-39.6h10.8v47.7h-18.4l-14.1-38.6v38.6h-10.9v-47.7C139.5,114.7,157.2,114.7,157.2,114.7z" />
            <rect fill="currentColor" x="92" y="133.8" width="34.5" height="9.4" />
            <polygon fill="currentColor"
                points="87.2,124 87.2,134.7 87.2,134.7 87.2,144.1 87.2,144.1 87.2,153 102.6,153 102.6,153 126.5,153 126.5,162.4 110.4,162.4 110.4,162.4 75.7,162.4 75.7,114.7 126.5,114.7 126.5,124 " />
            <path fill="currentColor"
                d="M100.7,85.8c-3.4,0-6.8-1-10.2-2.9c-1.1-0.5-1.9-0.8-2.3-0.8c-0.8,0-1.2,0.5-1.2,1.6l-0.1,1.1h-1.5V71.7h1.4c0.4,4,1.9,7,4.5,8.9c2.5,1.9,5.5,2.9,9,2.9c3.4,0,6.1-1,7.9-2.9c1.8-1.9,2.7-4.1,2.7-6.7c0-4.1-2.3-7.1-7-9.1l-9.3-4.1c-2.9-1.2-4.9-3-6.3-5.1c-1.4-2.2-2-4.5-2-7c0-3.8,1.2-7.1,3.8-9.8s6.3-4.1,11.1-4.1c2.9,0,5.7,1,8.6,2.9c1,0.5,1.6,0.8,2,0.8c0.7,0,1.1-0.5,1.1-1.6l0.1-1.5h1.5v13.5h-1.4c-0.4-4-1.6-7-3.8-8.9c-2.2-1.9-4.8-2.9-7.9-2.9s-5.5,0.8-7.2,2.6c-1.6,1.6-2.6,3.7-2.6,5.7c0,2.2,0.5,4.1,1.8,5.9c1.2,1.8,2.9,3.1,5.2,4.1l9.4,4.1c3.1,1.4,5.5,3.3,7.1,5.5c1.6,2.3,2.3,4.6,2.3,7.2c0,3.7-1.5,7-4.5,9.6C109.6,84.4,105.6,85.8,100.7,85.8z" />
        </symbol>
        <symbol id="ico-business-logo-05" viewBox="0 0 200 200">
            <path fill="currentColor"
                d="M161.5,29.8c0-0.1-0.1-0.3-0.3-0.4c-0.1,0-0.1,0-0.3,0c-6,0.5-17.7,2-29.9,5.4c-1.8,0.5-3.4,1-4.9,1.5c-1.4-2.2-2.9-4.4-4.5-6.5c-7.5-10.2-15.8-18.5-20.1-22.5c-0.1-0.1-0.4-0.1-0.5,0c-4.2,4.1-12.5,12.4-20.1,22.5c-1.6,2.2-3.1,4.4-4.5,6.5c-1.5-0.5-3.3-1.1-4.9-1.5c-12.3-3.4-24-4.9-29.9-5.4c-0.1,0-0.1,0-0.3,0c-0.1,0-0.3,0.1-0.3,0.4c0,5.7,0.3,17.3,2.5,29.5c1.8,10.2,4.5,18.6,8.2,25.3c4.6,8.7,10.9,14.3,18.4,16.5c6.5,1.9,12.5,2.2,18.1,0.5c3.1-1,6.1-2.5,8.6-4.5c1.5,0.1,3,0.1,4.5,0.1c1.5,0,3.1,0,4.5-0.1c2.6,2,5.4,3.5,8.7,4.5c2.5,0.7,5.2,1.1,7.8,1.1c3.3,0,6.7-0.5,10.2-1.6c7.5-2.3,13.7-7.9,18.4-16.5c3.5-6.7,6.3-15.1,8.2-25.3C161.3,47.1,161.5,35.7,161.5,29.8z M69.8,41.4c1.1,0.3,2.2,0.7,3.1,1l0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0.1c-2,3.8-3.7,7.6-4.9,11.2C64.8,63.3,65,71.9,68.6,79c3.1,6.1,7.2,10.8,12.3,13.6c2,1.1,4.1,2,6.3,2.6c-4.5,1.5-9.7,1.5-15.1-0.3c-13.6-4.1-19.5-22.2-22.1-36.8c-1.2-6.5-1.9-13.7-2.2-21.2C55.6,38,62.7,39.5,69.8,41.4z M152.7,58.3c-2.6,14.6-8.4,32.7-22.1,36.8c-5.6,1.6-10.8,1.8-15.1,0.3c2.2-0.5,4.4-1.5,6.3-2.6c5-2.9,9.3-7.5,12.3-13.6c3.5-7.1,3.8-15.7,0.7-25.2c-1.2-3.5-2.9-7.4-5-11.3l0,0c1.1-0.3,2.2-0.7,3.1-1c7.1-1.9,14.2-3.4,21.9-4.5C154.6,44.5,153.8,51.8,152.7,58.3z M95.1,90.6c-3.1-0.7-5.4-1.2-5.9-1.5h-0.1c-0.8-0.3-1.6-0.7-2.3-1c-0.3-0.1-0.4-0.1-0.7-0.3c-0.1,0-0.1-0.1-0.3-0.1c-0.4-0.1-0.7-0.3-1-0.5c0,0,0,0-0.1,0h-0.1c-0.3-0.1-0.5-0.3-0.8-0.5h-0.1c0,0-0.1,0-0.1-0.1c-0.3-0.1-0.5-0.4-1-0.5l-0.1-0.1l0,0c-0.3-0.3-0.5-0.4-0.8-0.7L81.5,85c-0.3-0.3-0.5-0.4-0.8-0.7l0,0l-0.1-0.1c-0.3-0.3-0.5-0.5-0.8-0.8l-0.1-0.1l-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-0.7l-0.1-0.1c0,0,0,0-0.1-0.1c-0.3-0.3-0.4-0.5-0.7-1c-0.1-0.1-0.1-0.1-0.3-0.3c-0.3-0.4-0.5-0.7-0.7-1c0,0,0-0.1-0.1-0.1l-0.1-0.1c-0.1-0.3-0.4-0.5-0.5-0.8v-0.1l-0.1-0.1c-0.3-0.3-0.4-0.7-0.7-1.1c0-0.1-0.1-0.1-0.1-0.3l0,0c-0.1-0.4-0.4-0.7-0.5-1.1c0,0,0,0,0-0.1l0,0l0,0c0,0,0,0,0-0.1c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.1-0.1-0.4-0.3-0.5c0-0.1-0.1-0.1-0.1-0.3c-0.1-0.3-0.1-0.4-0.3-0.7c0-0.1,0-0.1-0.1-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1v-0.1c0-0.3-0.1-0.4-0.1-0.8c0-0.1,0-0.1,0-0.3c0-0.3-0.1-0.4-0.1-0.7v-0.1c0,0,0,0,0-0.1s0-0.1,0-0.3l0,0c0-0.4-0.1-1-0.1-1.4c0,0,0,0,0-0.1l0,0C71.7,56.7,79.6,43,86.5,33.8c5.2-7.1,11-13.3,15-17.4c3.9,4.1,9.8,10.3,15,17.4c6.8,9.3,14.8,22.9,13.7,34.6l0,0l0,0l0,0c0,0,0,0,0,0.1c0,0.3,0,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1,0,0.3c0,0.3-0.1,0.5-0.1,0.8v0.1v0.1c0,0.3-0.1,0.4-0.1,0.7c0,0.1,0,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.7c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.1-0.1,0.4-0.3,0.5c0,0.1-0.1,0.1-0.1,0.3c-0.1,0.3-0.1,0.4-0.3,0.5c0,0,0,0,0,0.1l0,0l0,0c0,0,0,0,0,0.1c-0.1,0.3-0.4,0.7-0.5,1.1l0,0c0,0.1-0.1,0.1-0.1,0.3c-0.3,0.4-0.4,0.7-0.7,1.1l-0.1,0.1v0.1c-0.1,0.3-0.4,0.5-0.5,0.8l-0.1,0.1c0,0,0,0.1-0.1,0.1c-0.3,0.3-0.4,0.7-0.7,1c-0.1,0.1-0.1,0.1-0.3,0.3c-0.3,0.4-0.5,0.7-0.7,1c0,0,0,0-0.1,0.1l-0.1,0.1c-0.3,0.3-0.4,0.5-0.7,0.7l-0.1,0.1l-0.1,0.1c-0.3,0.3-0.5,0.5-0.8,0.8l-0.1,0.1l0,0c-0.3,0.3-0.5,0.5-0.8,0.7l-0.1,0.1c-0.3,0.3-0.5,0.4-0.8,0.7l0,0l-0.1,0.1c-0.3,0.3-0.5,0.4-1,0.5c0,0-0.1,0-0.1,0.1h-0.1c-0.3,0.1-0.5,0.4-0.8,0.5h-0.1c0,0,0,0-0.1,0c-0.3,0.1-0.5,0.3-1,0.5c-0.1,0-0.1,0.1-0.3,0.1c-0.3,0.1-0.4,0.3-0.7,0.3c-0.8,0.4-1.5,0.7-2.3,1h-0.1c-0.4,0.3-2.7,0.8-5.9,1.5c-2,0.4-4.2,0.5-6.3,0.7C99.2,91.1,97.2,91,95.1,90.6z" />
            <path fill="currentColor"
                d="M63,114.4l-5.9,9.4H40h-1.8c-1.2-0.1-2.3,0-3.1,0.1c-0.8,0.3-1.5,0.5-2,1c-0.5,0.4-0.8,0.8-1.1,1.4c-0.1,0.5-0.3,1.1-0.4,1.8c0,0.7,0.3,1.5,0.7,2.5c0.5,0.8,1.2,1.2,2.3,1.5c1.1,0.1,2.5,0.3,4.2,0.3h7.6c3.5,0,6.4,0.5,8.4,1.5c1.1,0.4,2,1.1,3,2c1,0.8,1.6,1.9,2.3,3c0.7,1.1,1.2,2.5,1.5,3.8c0.4,1.4,0.5,2.9,0.5,4.5c0,3.5-0.8,6.5-2.3,9.1c-1.4,2.5-3.3,4.1-5.6,4.9c-2.3,0.7-5.4,1-9.1,1h-25v-9.4h21.5h1.2c1.4,0.1,2.6,0,3.5-0.1c1-0.3,1.8-0.5,2.5-1c0.7-0.4,1.1-1,1.4-1.5c0.3-0.5,0.4-1.2,0.4-1.9c0-1.2-0.5-2.2-1.5-3.1c-1-0.8-2.3-1.2-4.1-1.1h-1.8h-7.8c-3.3,0-5.9-0.5-8-1.5c-1.1-0.5-2.2-1.2-3.1-2.2c-1-1-1.8-1.9-2.5-3.1c-0.7-1.2-1.2-2.5-1.6-3.9c-0.4-1.5-0.5-3-0.5-4.5c0-3,0.7-5.9,2-8.3c0.7-1.2,1.5-2.2,2.6-3c1-0.8,2.2-1.4,3.4-1.8c1.2-0.4,2.7-0.8,4.1-1c1.5-0.1,3-0.3,4.6-0.3h1.9L63,114.4L63,114.4z" />
            <path fill="currentColor"
                d="M157.3,114.4l14.8,39.5v-39.5h10.8v47.5h-18.4l-14-38.5v38.5h-10.9v-47.5C139.6,114.4,157.3,114.4,157.3,114.4z" />
            <rect fill="currentColor" x="92.3" y="133.4" width="34.4" height="9.4" />
            <polygon fill="currentColor"
                points="87.5,123.6 87.5,134.2 87.5,134.2 87.5,143.6 87.5,143.6 87.5,152.5 102.9,152.5 102.9,152.5 126.7,152.5 126.7,161.9 110.6,161.9 110.6,161.9 76.1,161.9 76.1,114.4 126.7,114.4 126.7,123.6 " />
            <path fill="currentColor"
                d="M101,85.5c-3.4,0-6.8-1-10.2-2.9c-1.1-0.5-1.9-0.8-2.3-0.8c-0.8,0-1.2,0.5-1.2,1.6l-0.1,1.1h-1.5V71.5h1.4c0.4,3.9,1.9,6.9,4.5,8.8c2.5,1.9,5.4,2.9,9,2.9c3.4,0,6.1-1,7.9-2.9c1.8-1.9,2.7-4.1,2.7-6.7c0-4.1-2.3-7.1-6.9-9.1l-9.3-4.1c-2.9-1.2-4.9-3-6.3-5c-1.4-2.2-2-4.5-2-6.9c0-3.8,1.2-7.1,3.8-9.8c2.6-2.7,6.3-4.1,11-4.1c2.9,0,5.7,1,8.6,2.9c1,0.5,1.6,0.8,2,0.8c0.7,0,1.1-0.5,1.1-1.6l0.1-1.5h1.5v13.5h-1.4c-0.4-3.9-1.6-6.9-3.8-8.8c-2.2-1.9-4.8-2.9-7.9-2.9c-3.1,0-5.4,0.8-7.2,2.6c-1.6,1.6-2.6,3.7-2.6,5.7c0,2.2,0.5,4.1,1.8,5.9c1.2,1.8,2.9,3.1,5.2,4.1l9.4,4.1c3.1,1.4,5.4,3.3,7.1,5.4c1.6,2.3,2.3,4.6,2.3,7.2c0,3.7-1.5,6.9-4.5,9.5C109.8,84.2,105.9,85.5,101,85.5z" />
            <path fill="currentColor"
                d="M38.9,177.9v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-11.7L29,193.6h-1l-5.9-13.5v12c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.8v0.8h-3.8v-0.8h0.7c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7v-0.8h4.9l4.9,11.4l4.6-11.4H38.9z" />
            <path fill="currentColor"
                d="M63.4,177.9v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8H63.4z" />
            <path fill="currentColor"
                d="M96.6,177.9v0.8h-0.7c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v14.2h-1l-11-13.2v11.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.8v0.8H81v-0.8h0.7c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1H81v-0.8h4.5l9,10.8v-9.3c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.8v-0.8H96.6z" />
            <path fill="currentColor"
                d="M121.1,177.9v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v12.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.5v0.8h-5.7v-0.8h0.5c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-0.8H121.1z" />
            <path fill="currentColor"
                d="M154.2,177.9v0.8h-0.7c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v14.2h-1l-11-13.2v11.7c0,0.3,0,0.5,0.1,0.5c0.1,0.1,0.3,0.1,0.5,0.1h0.8v0.8h-3.8v-0.8h0.7c0.3,0,0.5,0,0.5-0.1c0.1-0.1,0.1-0.3,0.1-0.5v-12.7c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.7v-0.8h4.5l9,10.8v-9.3c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.8v-0.8H154.2z" />
            <path fill="currentColor"
                d="M178.4,186.5h5.7v0.8h-0.5c-0.3,0-0.5,0-0.5,0.1c-0.1,0.1-0.1,0.3-0.1,0.5v0.7c0,1.5-0.7,2.9-1.9,3.8c-1.2,1-2.9,1.5-4.8,1.5c-2.3,0-4.1-0.8-5.6-2.3c-1.4-1.5-2.2-3.4-2.2-5.9s0.7-4.4,2.2-5.9c1.5-1.5,3.4-2.2,5.7-2.2c0.8,0,1.6,0.1,2.3,0.3c0.7,0.1,1.2,0.3,1.5,0.4c0.4,0.1,0.5,0.3,0.7,0.3s0.3-0.1,0.3-0.4v-0.4h0.8v4.2h-0.8c0-2.3-1.4-3.5-4.2-3.5c-1.6,0-2.9,0.7-3.8,1.9c-1,1.2-1.4,3-1.4,5.3c0,2.3,0.4,4.1,1.1,5.4c0.7,1.4,1.9,1.9,3.4,1.9c1.2,0,2-0.3,2.5-1c0.4-0.7,0.7-1.6,0.7-3v-1.1c0-0.3,0-0.5-0.1-0.5c-0.1-0.1-0.3-0.1-0.5-0.1h-0.5v-1H178.4z" />
        </symbol>
    </svg>
</div>
      `
    );
}

function textBreak() {
  var c = document.querySelectorAll(
    ".text-ani-item, .title-page .small-text, .title-page h1"
  );
  c &&
    c.forEach(function (c) {
      c.setAttribute("data-splitting", ""), Splitting();
    });
}

function TabContent() {
  var t,
    c,
    l = Container.querySelector(".all-tab-content");
  l &&
    ((c = (t = l.querySelectorAll(".tab-content"))[0].clientHeight),
    l.classList.contains("all-tab-bus") || (l.style.height = c + "px"),
    t[0].classList.add("active"),
    Array.from(document.querySelectorAll(".trigger-tab"), function (c) {
      Mobile.matches ||
        c.addEventListener("mouseenter", function () {
          var e;
          Mobile.matches ||
            ((e = c.getAttribute("data-name")),
            (isFirst = 1),
            Array.from(document.querySelectorAll(".trigger-tab"), function (c) {
              c.classList.remove("current");
            }),
            Array.from(
              document.querySelectorAll(".trigger-tab[data-name='" + e + "']"),
              function (c) {
                c.classList.add("current");
              }
            ),
            gsap.to(l, {
              duration: 0.3,
              opacity: 0,
              ease: "none",
              onComplete: function () {
                Array.from(l.querySelectorAll(".on-show"), function (c) {
                  c.classList.remove("on-show");
                }),
                  Array.from(l.querySelectorAll(".char"), function (c, e) {
                    c.classList.remove("move");
                  }),
                  gsap.to(l, {
                    duration: 0.2,
                    opacity: 1,
                    ease: "none",
                  });
                var c = document.querySelector(
                    ".tab-content[data-tab='" + e + "']"
                  ),
                  c =
                    (t.forEach(function (c) {
                      c.classList.remove("active");
                    }),
                    c.classList.add("active"),
                    c.offsetHeight);
                l.classList.contains("all-tab-bus") ||
                  (l.style.height = c + "px"),
                  onScroll(),
                  detectBut(),
                  d();
              },
            }));
        });
    }),
    window.location.hash
      ? LocationHash()
      : Container.querySelector(".trigger-tab").click());
}

function UpdateHeightTabContent() {
  var c = Container.querySelector(".all-tab-content"),
    e = window.innerWidth;
  if (c) {
    for (
      var t = c.querySelectorAll(".tab-content"), l = 0, r = 0;
      r < t.length;
      r++
    )
      l = t[r].clientWidth + l;
    var o,
      n = c.querySelector(".tab-content.active");
    n &&
      ((o = n.offsetHeight),
      (n = [].slice.call(n.parentNode.children).indexOf(n)),
      (c.style.width = l + "px"),
      (c.style.height = o + "px"),
      gsap.to(c, {
        duration: 0,
        left: -n * e,
        ease: "power2",
      }));
  }
}

function Option() {
  Container.querySelectorAll(
    ".view-album:not(.already), .link-view-album:not(.already)"
  ).forEach(function (c) {
    c.classList.add("already"),
      c.addEventListener("click", function (c) {
        c.preventDefault();
        var c = this.dataset.href || this.getAttribute("href"),
          e =
            (WinScroll.stop(),
            OverlayDark.classList.add("show"),
            AllAlbum.classList.add("show"),
            Container.classList.add("blur"),
            Header.classList.add("blur"),
            Body.insertAdjacentHTML(
              "beforeend",
              '<div class="loadx" style="display:block"></div>'
            ),
            document.querySelector(".loadx"));
        return (
          gsap.to(e, {
            duration: 0.3,
            opacity: 1,
            ease: "none",
          }),
          AlbumLoad(c, 0),
          // d(),
          !1
        );
      });
  });
  Container.querySelectorAll(".view-video:not(.already)").forEach(function (c) {
    c.classList.add("already"),
      c.addEventListener("click", function (c) {
        c.preventDefault();
        var c = this.dataset.href || this.getAttribute("href"),
          e = this.getAttribute("data-embed"),
          t =
            ((e =
              "" == e
                ? ""
                : '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' +
                  (e =
                    (e = e.match(
                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
                    )) && 11 == e[2].length
                      ? e[2]
                      : "no video found") +
                  "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
                  e +
                  '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>'),
            WinScroll.stop(),
            OverlayDark.classList.add("show"),
            gsap.to(".allvideo", {
              opacity: "1",
              duration: 1,
              display: "block",
              ease: "power2",
              delay: 1,
            }),
            Body.insertAdjacentHTML(
              "beforeend",
              '<div class="loadx" style="display:block"></div>'
            ),
            document.querySelector(".loadx"));
        gsap.to(t, {
          duration: 0.3,
          opacity: 1,
          ease: "none",
        }),
          // remove d();
          // d(),
          VideoLoad(c, e);
      });
  });
  var s,
    c = document.querySelectorAll(".zoom-pic:not(.already)"),
    c =
      (c &&
        ((s = document.querySelector(".all-pics")),
        c.forEach(function (i) {
          i.classList.add("already"),
            i.addEventListener("click", function (c) {
              this.classList.contains("pic-background") &&
                s.classList.add("has-background");
              // d();
              var e = i.querySelector("img") || i,
                t =
                  (WinScroll.stop(),
                  Container.classList.add("blur"),
                  Header.classList.add("blur"),
                  OverlayDark.classList.add("show"),
                  s.classList.add("show"),
                  document.createElement("div")),
                l = document.createElement("div"),
                r =
                  (t.classList.add("full"),
                  l.classList.add("close-pics", "close-format"),
                  l.insertAdjacentHTML(
                    "afterbegin",
                    '<svg><use xlink:href="#ico-close-menu"></use></svg><span class="line-toggle toggle-1"></span><span class="line-toggle toggle-2"></span>'
                  ),
                  Body.append(l),
                  e.parentNode.parentNode.parentNode.querySelector("h3")),
                o =
                  (r
                    ? ((a = document.createElement("div")),
                      (o = document.createElement("h3")),
                      (a.className = "text-length"),
                      a.append(o),
                      s.append(t, a),
                      (o.textContent = r.textContent),
                      gsap.fromTo(
                        a,
                        1.2,
                        {
                          opacity: "0",
                          transform: "translateY(-200px)",
                        },
                        {
                          opacity: "1",
                          delay: 0.5,
                          transform: "none",
                          ease: "power2",
                        }
                      ))
                    : s.append(t),
                  e.dataset.datasrc),
                n = ((r = o || e.src), document.createElement("img")),
                a = document.createElement("span");
              (n.src = r),
                s.querySelector(".full").appendChild(n),
                s.querySelector(".full").appendChild(a),
                s.querySelector("img").addEventListener("load", function (c) {
                  t.classList.add("pinch-zoom"),
                    new PinchZoom.default(t, {
                      draggableUnzoomed: !1,
                    }),
                    gsap.fromTo(
                      n,
                      {
                        opacity: 0,
                        y: 200,
                      },
                      {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.3,
                      }
                    ),
                    gsap.fromTo(
                      l,
                      {
                        opacity: 0,
                        x: 50,
                      },
                      {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                      }
                    );
                }),
                a.addEventListener("click", function () {
                  l.click();
                }),
                l.addEventListener("click", function () {
                  return (
                    gsap.to(l, {
                      duration: 0.5,
                      opacity: 0,
                      ease: "none",
                      onComplete: function () {
                        l.remove();
                      },
                    }),
                    OverlayDark.classList.remove("show"),
                    Container.classList.remove("blur"),
                    Header.classList.remove("blur"),
                    gsap.to([".full, .text-length"], {
                      duration: 0.5,
                      opacity: 0,
                      ease: "none",
                      onComplete: function () {
                        s.classList.remove("show"),
                          (s.innerHTML = ""),
                          WinScroll.start();
                      },
                    }),
                    !1
                  );
                });
            });
        })),
      document.querySelectorAll("button.zoom:not(.already)"));
  c &&
    ((s = document.querySelector(".all-pics")),
    c.forEach(function (i) {
      i.classList.add("already"),
        i.addEventListener("click", function (c) {
          var e = i.parentNode.querySelector("img"),
            t =
              (this.classList.contains("pic-background") &&
                s.classList.add("has-background"),
              WinScroll.stop(),
              OverlayDark.classList.add("show"),
              s.classList.add("show"),
              document.createElement("div")),
            l = document.createElement("div"),
            r =
              (t.classList.add("full"),
              l.classList.add("close-pics", "close-format"),
              l.insertAdjacentHTML(
                "afterbegin",
                '<svg><use xlink:href="#ico-close-menu"></use></svg><span class="line-toggle toggle-1"></span><span class="line-toggle toggle-2"></span>'
              ),
              Body.append(l),
              e.parentNode.parentNode.parentNode.querySelector("h3")),
            o =
              (r
                ? ((a = document.createElement("div")),
                  (o = document.createElement("h3")),
                  (a.className = "text-length"),
                  a.append(o),
                  s.append(t, a),
                  (o.textContent = r.textContent),
                  gsap.fromTo(
                    a,
                    1.2,
                    {
                      opacity: "0",
                      transform: "translateY(-200px)",
                    },
                    {
                      opacity: "1",
                      delay: 0.5,
                      transform: "none",
                      ease: "power2",
                    }
                  ))
                : s.append(t),
              d(),
              e.dataset.datasrc),
            n = ((r = o || e.src), document.createElement("img")),
            a = document.createElement("span");
          (n.src = r),
            s.querySelector(".full").appendChild(n),
            s.querySelector(".full").appendChild(a),
            s.querySelector("img").addEventListener("load", function (c) {
              t.classList.add("pinch-zoom"),
                new PinchZoom.default(t, {
                  draggableUnzoomed: !1,
                }),
                n.classList.add("fadein"),
                gsap.fromTo(
                  l,
                  {
                    opacity: 0,
                    x: 50,
                  },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                  }
                );
            }),
            a.addEventListener("click", function () {
              l.click();
            }),
            l.addEventListener("click", function () {
              return (
                gsap.to(l, {
                  duration: 0.5,
                  opacity: 0,
                  ease: "none",
                  onComplete: function () {
                    l.remove();
                  },
                }),
                OverlayDark.classList.remove("show"),
                gsap.to([".full, .text-length"], {
                  duration: 0.5,
                  opacity: 0,
                  ease: "none",
                  onComplete: function () {
                    s.classList.remove("show"),
                      (s.innerHTML = ""),
                      WinScroll.start();
                  },
                }),
                !1
              );
            });
        });
    }));
}

function PrintShare() {
  var c = Container.querySelector(".share-but"),
    e = Container.querySelector(".save-but"),
    t = Container.querySelector(".print-but"),
    l = Container.querySelector(".print-box"),
    r = Container.querySelector(".save-but");
  r &&
    r.addEventListener("click", function () {
      return (
        window.sidebar && window.sidebar.addPanel
          ? window.sidebar.addPanel(document.title, window.location.href, "")
          : window.external && "AddFavorite" in window.external
          ? window.external.AddFavorite(location.href, document.title)
          : alert(
              "Nhấn " +
                (-1 !== navigator.userAgent.toLowerCase().indexOf("mac")
                  ? "Command/Cmd"
                  : "CTRL") +
                " + D để tạo bookmark cho trang này."
            ),
        !1
      );
    }),
    e &&
      e.addEventListener("mouseenter", function () {
        c.classList.remove("active");
      }),
    c &&
      c.addEventListener("mouseenter", function () {
        this.classList.add("active");
      }),
    t &&
      t.addEventListener("mouseenter", function () {
        c.classList.remove("active");
      }),
    l &&
      l.addEventListener("mouseleave", function () {
        c.classList.remove("active");
      }),
    t &&
      t.addEventListener("click", function () {
        window.print();
      });
}

function detectBut() {
  var c = document.querySelectorAll(".outer-nav .current");
  OuterNav &&
    (OuterNav.classList.contains("oversize")
      ? c.forEach(function (c) {
          var e = c.parentNode.parentNode.parentNode.offsetLeft,
            t = c.parentNode.offsetLeft,
            l = innerWidth / 2 - c.clientWidth / 2 - 40;
          c.parentNode.parentNode.parentNode.scrollLeft = t - l - e;
        })
      : Array.from(document.querySelectorAll(".sub-nav ul"), function (c) {
          c.removeAttribute("style");
        }));
}

function subNavFn() {
  var t = document.querySelectorAll(".sub-nav:not(.release) li button"),
    l = Header.querySelector(".outer-nav.second"),
    r = l.querySelector(".sub-nav");
  t.forEach(function (c) {
    c.addEventListener("click", function () {
      var c = this.getAttribute("data-name"),
        e = Mobile.matches
          ? document.querySelector(".set-post[data-post='" + c + "']")
              .offsetTop - 38
          : document.querySelector(".set-post[data-post='" + c + "']")
              .offsetTop - 75;
      return (
        t.forEach(function (c) {
          c.classList.remove("current"), c.classList.remove("subcurrent");
        }),
        ScrollTos(e),
        Header.querySelector(
          ".second li button[data-name='" + c + "']"
        ).classList.add("current"),
        l.classList.add("fixed"),
        r.classList.add("on-show"),
        setTimeout(function () {
          detectBut();
        }, 300),
        d(),
        !1
      );
    });
  }),
    document.querySelector(".sub-nav:not(.release) li button.subcurrent")
      ? setTimeout(function () {
          document
            .querySelector(
              ".outer-nav:not(.second) .sub-nav:not(.release) li button.subcurrent"
            )
            .click();
        }, 500)
      : (addClass(
          OuterNav.querySelector("ul li:first-child button"),
          "current"
        ),
        addClass(l.querySelector("ul li:first-child button"), "current")),
    SubOverSize();
}

function LinkLoadPopup() {
  var c = document.querySelectorAll(".link-popup:not(.already), .link-member");
  c &&
    c.forEach(function (c) {
      c.classList.contains("already") ||
        (c.classList.add("already"),
        c.addEventListener("click", function (c) {
          c.preventDefault();
          var c = this.getAttribute("href"),
            e = document.querySelector(".details-content"),
            e =
              (e && e.remove(),
              document.querySelector("#recruitment-page") &&
                (addURL(this, this.getAttribute("data-name")),
                changeAlternate(
                  this.getAttribute("href"),
                  this.parentElement.parentElement.querySelector(
                    ".link-change-url"
                  ),
                  1
                )),
              0),
            t =
              (this.classList.contains("popup-map") && (e = 1),
              WinScroll.stop(),
              OverlayDark.classList.add("show"),
              Body.insertAdjacentHTML(
                "beforeend",
                '<div class="loadx" style="display:block"></div>'
              ),
              document.querySelector(".loadx"));
          return (
            gsap.to(t, {
              duration: 0.3,
              opacity: 1,
              ease: "none",
            }),
            popupLoad(c, e),
            !1
          );
        }));
    });
}

function SubOverSize() {
  for (
    var c = Container.querySelector(".outer-nav"),
      e = c.querySelectorAll("li"),
      t = Header.querySelector(".outer-nav.second"),
      l = Header.querySelectorAll(".outer-nav.second li"),
      r = 0,
      o = 0,
      n = 0;
    n < e.length;
    n++
  )
    ((r += e[n].clientWidth) > innerWidth ? addClass : removeClass)(
      c,
      "oversize"
    ),
      t &&
        ((o += l[n].clientWidth) > innerWidth ? addClass : removeClass)(
          t,
          "oversize"
        );
  CheckNext();
}

function CheckNext() {
  Array.from(document.querySelectorAll(".sub-nav"), function (r) {
    var o = r.parentNode.querySelector(".wheel-next"),
      n = r.parentNode.querySelector(".wheel-prev");
    r.addEventListener("mouseenter", function () {
      r.parentNode.classList.add("on-hover");
    }),
      r.addEventListener("mouseleave", function () {
        r.parentNode.classList.remove("on-hover");
      }),
      r.addEventListener(
        "scroll",
        function () {
          for (
            var c = 0, e = r.querySelectorAll(".sub-nav li"), t = 0;
            t < e.length;
            t++
          )
            c += e[t].clientWidth;
          var l = r.scrollLeft;
          (0 == l
            ? (removeClass(o, "hide"), addClass)
            : ((c <= r.clientWidth + l ? addClass : removeClass)(o, "hide"),
              removeClass))(n, "hide");
        },
        {
          passive: !0,
        }
      );
  });
}
gsap.config({
  nullTargetWarn: !1,
});
var WinScroll = {
  start: function () {
    Body.classList.remove("no-scroll"), Mobile.matches || thatScroll.start();
  },
  stop: function () {
    Body.classList.add("no-scroll"), Mobile.matches || thatScroll.stop();
  },
};

function ShowTitlePage() {
  TitlePage &&
    (gsap.to(".title-page .char", {
      duration: 1.2,
      transform: "none",
      opacity: "1",
      delay: 0.5,
      ease: "power2",
      stagger: {
        each: 0.05,
      },
    }),
    TitlePage.classList.add("show"));
}

function OpenTab() {
  Array.from(document.querySelectorAll(".nav-drop"), function (c, e) {
    c.addEventListener("click", function (c) {
      if ((c.preventDefault(), Mobile.matches)) {
        var e = this.previousElementSibling;
        if (this.classList.contains("active"))
          this.classList.remove("active"),
            this.parentNode.classList.remove("active"),
            (e.style.height = 0);
        else {
          this.classList.add("active"), this.parentNode.classList.add("active");
          for (var t = 0, l = 0; l < e.childNodes.length; l++)
            e.childNodes[l].clientHeight &&
              (t = t + e.childNodes[l].clientHeight + 1);
          e.style.height = t + "px";
        }
      }
    }),
      0 == e && c.click();
  });
}

function Appear() {
  gsap.to(Container, {
    duration: 0.8,
    opacity: 1,
    ease: "none",
  });
}

function TriggerSlider() {
  Array.from(
    document.querySelectorAll(".view-details-next:not(.trigger-already)"),
    function (c) {
      c.classList.add("trigger-already"),
        c.addEventListener("click", function () {
          this.closest(".slide-parent")
            .querySelector(".slidebox-arrow-next")
            .click();
        });
    }
  ),
    Array.from(
      document.querySelectorAll(".view-details-prev:not(.trigger-already)"),
      function (c) {
        c.classList.add("trigger-already"),
          c.addEventListener("click", function () {
            this.closest(".slide-parent")
              .querySelector(".slidebox-arrow-prev")
              .click();
          });
      }
    );
}

function DetectImgSLoadText() {
  var c = Container.querySelectorAll(
    ".load-text p > img:not(.already-detect), .text-fixed p > img:not(.already-detect)"
  );
  c &&
    c.forEach(function (c, e) {
      c.classList.add("already-detect");
      var t,
        l,
        e = e + 1,
        r = c.parentNode,
        o = c.parentNode.nextElementSibling,
        n =
          (o && (t = o.querySelector("img")), document.createElement("figure"));
      o ||
        ((n.className = "figure-img"),
        c.parentNode.parentNode &&
          (c.parentNode.parentNode.replaceChild(n, r), n.append(c))),
        o && t && "PRE" != o.tagName
          ? (c.parentNode.parentNode &&
              ((n.className = "figure-two-img"),
              c.parentNode.parentNode.replaceChild(n, r)),
            ((img2 = document.createElement("img")).src = t.src),
            (img2.className = "img-two"),
            img2.setAttribute("alt", Text),
            (c.className = "img-one"),
            n.append(c),
            n.append(img2),
            n.nextElementSibling && n.nextElementSibling.remove())
          : o &&
            !t &&
            ((n.className = "figure-img"),
            c.parentNode.parentNode.replaceChild(n, r),
            n.append(c),
            n.querySelector("img").classList.add("trans-y"),
            n.querySelector("img").setAttribute("data-speed", "-2")),
        o &&
          !t &&
          "PRE" == o.tagName &&
          ((r = o.textContent),
          (n.className = "figure-caption"),
          n.append(o),
          ((figcaption = document.createElement("figcaption")).innerHTML = r),
          (figcaption.className = "figcaption"),
          n.replaceChild(figcaption, o),
          n.querySelector("img").setAttribute("alt", r),
          ((l = document.createElement("div")).className =
            "div-figure itemx-" + e),
          n.parentNode.insertBefore(l, n),
          1 < document.querySelectorAll(".figure-caption").length &&
            document
              .querySelectorAll(".figure-caption")
              .forEach(function (c, e) {
                l.append(c);
              }));
    });
}

function CustomeSelect() {
  for (
    var c,
      e,
      t,
      l,
      r,
      o,
      n = document.getElementsByClassName("custom-select"),
      a = n.length,
      i = 0;
    i < a;
    i++
  )
    if (
      ((e = n[i].getElementsByTagName("select")[0]),
      !n[i].querySelector(".select-items"))
    ) {
      var s = e.length,
        d = document.createElement("DIV"),
        u = e.className;
      for (
        d.setAttribute("class", "select-selected"),
          (r = document.createElement("DIV")).setAttribute(
            "class",
            "drop-down-select"
          ),
          (o = document.createElement("DIV")).setAttribute(
            "class",
            "wrap-drop-down-select"
          ),
          d.innerHTML = e.options[e.selectedIndex].innerHTML,
          d.insertAdjacentHTML(
            "beforeend",
            '<small class="red-star">*</small>'
          ),
          n[i].appendChild(d),
          (t = document.createElement("DIV")).setAttribute(
            "class",
            "select-items select-hide " + u + " "
          ),
          c = 1;
        c < s;
        c++
      ) {
        ((l = document.createElement("DIV")).className = "select-div"),
          (l.innerHTML = e.options[c].innerHTML);
        var h = e.options[c].getAttribute("value"),
          v = e.options[c].getAttribute("data-href");
        h && l.setAttribute("data-value", h),
          v && l.setAttribute("data-href", v),
          l.addEventListener("click", function (c) {
            for (
              var e,
                t,
                l,
                r =
                  this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName(
                    "select"
                  )[0],
                o = r.length,
                n = this.parentNode.parentNode.parentNode.previousSibling,
                a = 0;
              a < o;
              a++
            )
              if (r.options[a].innerHTML == this.innerHTML) {
                for (
                  r.selectedIndex = a,
                    hasClass(n.parentNode, "can-change") &&
                      (n.innerHTML = this.innerHTML),
                    l = (e =
                      this.parentNode.parentNode.parentNode.getElementsByClassName(
                        "same-as-selected"
                      )).length,
                    t = 0;
                  t < l;
                  t++
                )
                  e[t].removeAttribute("class");
                this.setAttribute("class", "same-as-selected");
                break;
              }
            n.click();
          }),
          r.appendChild(l),
          o.appendChild(r),
          t.appendChild(o);
      }
      n[i].appendChild(t),
        d.addEventListener("click", function (c) {
          c.stopPropagation(),
            p(this),
            this.nextSibling.classList.toggle("select-hide"),
            this.classList.toggle("select-arrow-active"),
            this.parentNode.classList.toggle("level-index-in");
        });
    }
  function p(c) {
    for (
      var e = [],
        t = document.getElementsByClassName("select-items"),
        l = document.getElementsByClassName("select-selected"),
        r = t.length,
        o = l.length,
        n = 0;
      n < o;
      n++
    )
      c == l[n]
        ? e.push(n)
        : (l[n].classList.remove("select-arrow-active"),
          l[n].parentNode.classList.remove("level-index-in"));
    for (n = 0; n < r; n++) e.indexOf(n) && t[n].classList.add("select-hide");
  }
  document.addEventListener("click", p);
}

function DrawLogo() {
  var c = document.createElement("script");
  (c.id = "js_draw"),
    (c.src = httptemplate + "js/drawsvg.js"),
    (c.type = "text/javascript"),
    document.getElementById("js_draw") || document.body.appendChild(c),
    setTimeout(function () {
      var c = document.querySelectorAll(".nums-drawing");
      c &&
        ((observerNum = new IntersectionObserver(
          function (c) {
            c.forEach(function (c) {
              0.5 < c.intersectionRatio &&
                !c.target.classList.contains("already") &&
                (c.target.classList.add("already"),
                (c = new BtqDraw(c.target, {
                  type: "scenario",
                  start: "inViewport",
                  forceRender: !1,
                  animTimingFunction: BtqDraw.LINEAR,
                }))
                  .stop()
                  .reset(),
                c.play(1));
            });
          },
          {
            threshold: [0.5],
          }
        )),
        c.forEach(function (c) {
          observerNum.observe(c);
        }));
    }, 300);
}
var w = {
    width: null,
    height: null,
    is_mobile: !1,
    is_tabconst: !1,
    current_page: [],
    session: {},
    path: [],
    history: [],
    timeline_preload: null,
    first_run: !0,
    first_init: !0,
    custom_loading: null,
    slow_mode: !0,
    styles_loaded_int: null,
    styles_loaded: !1,
    styles_loaded_callbacks: [],
    preloader_hidden_callbacks: [],
    scroll_listeners: {},
    scroll: !1,
    isFirefox: -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
  },
  VerTage = {
    cursor: document.getElementById("cursor"),
    mouse: {
      x: 0,
      y: 0,
    },
  },
  e = gsap.quickSetter(VerTage.cursor, "left", "px"),
  t = gsap.quickSetter(VerTage.cursor, "top", "px"),
  o = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

function initCursor() {
  var e = gsap.quickSetter(VerTage.cursor, "left", "px"),
    t = gsap.quickSetter(VerTage.cursor, "top", "px"),
    l = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
  document.addEventListener("mousemove", function (c) {
    (VerTage.mouse.x = c.clientX), (VerTage.mouse.y = c.clientY);
  }),
    gsap.ticker.add(function () {
      var c = 1 - Math.pow(0.7, gsap.ticker.deltaRatio());
      (l.x += (VerTage.mouse.x - l.x) * c),
        (l.y += (VerTage.mouse.y - l.y) * c),
        e(l.x),
        t(l.y);
    });
}

function initPageCursor() {
  Array.from(document.querySelectorAll(".custom-cursor"), function (c) {
    c.addEventListener("mouseover", function () {
      c.classList.add("active"), showCustomCursor(this);
    }),
      c.addEventListener("mouseout", function () {
        c.classList.remove("active"), hideCustomCursor();
      });
  });
}

function showCustomCursor(c) {
  w.cursor_tl.play(),
    (document.body.style.cursor = "none"),
    VerTage.cursor.classList.add("active");
}

function hideCustomCursor() {
  w.cursor_tl.reverse(),
    VerTage.cursor.classList.remove("active"),
    (document.body.style.cursor = "");
}

function OpenTab() {
  Array.from(document.querySelectorAll(".nav-drop"), function (c, e) {
    c.addEventListener("click", function (c) {
      if ((c.preventDefault(), Mobile.matches)) {
        var e = this.previousElementSibling;
        if (this.classList.contains("active"))
          this.classList.remove("active"),
            this.parentNode.classList.remove("active"),
            (e.style.height = 0);
        else {
          this.classList.add("active"), this.parentNode.classList.add("active");
          for (var t = 0, l = 0; l < e.childNodes.length; l++)
            e.childNodes[l].clientHeight &&
              (t = t + e.childNodes[l].clientHeight + 1);
          e.style.height = t + "px";
        }
      }
    });
  });
}

function LazyImageLoad() {
  var t,
    c = [].slice.call(document.querySelectorAll("img.lazy"));
  "IntersectionObserver" in window &&
    ((t = new IntersectionObserver(function (c, e) {
      c.forEach(function (c) {
        c.isIntersecting &&
          (((c = c.target).src = c.dataset.src),
          c.classList.remove("lazy"),
          t.unobserve(c));
      });
    })),
    c.forEach(function (c) {
      t.observe(c);
    }));
}

function MouseCursor() {
  var i,
    s = document.querySelector("#mouse-cursor");
  document.addEventListener("mousemove", function (c) {
    (e = {
      x: (e = c).clientX,
      y: c.clientY,
      width: 11,
      height: 11,
      radius: "50%",
      background: "#ddbd48",
      bordercolor: "#ddbd48",
    }),
      (c = {}),
      null != i &&
        ((n = (t = i.getBoundingClientRect()).top),
        (a = t.left),
        (o = t.width),
        (t = t.height),
        (l = window.getComputedStyle(i).borderTopLeftRadius),
        (r = window.getComputedStyle(i).getPropertyValue("border-color")),
        (c.x = a + o / 2),
        (c.y = n + t / 2),
        (c.width = o),
        (c.height = t),
        (c.radius = l),
        (c.background = "rgba(0, 0, 0, 0)"),
        (c.bordercolor = r));
    var e,
      t,
      l,
      r,
      o,
      n,
      a = Object.assign({}, e, c);
    (n = a),
      (o = s).style.setProperty("--x", n.x + "px"),
      o.style.setProperty("--y", n.y + "px"),
      o.style.setProperty("--width", n.width + "px"),
      o.style.setProperty("--height", n.height + "px"),
      o.style.setProperty("--radius", n.radius),
      o.style.setProperty("--scale", n.scale),
      o.style.setProperty("--background", n.background),
      o.style.setProperty("--bordercolor", n.bordercolor);
  }),
    document
      .querySelectorAll(
        "a, button, .search-svg, .nav-click, .close-menu, .go-top, .wheel"
      )
      .forEach(function (c) {
        c.addEventListener("mouseenter", function () {
          return (i = c);
        }),
          c.addEventListener("mouseleave", function () {
            return (i = void 0);
          });
      });
}
document.addEventListener("mousemove", function (c) {
  (VerTage.mouse.x = c.clientX), (VerTage.mouse.y = c.clientY);
}),
  gsap.ticker.add(function () {
    var c = 1 - Math.pow(0.7, gsap.ticker.deltaRatio());
    (o.x += (VerTage.mouse.x - o.x) * c),
      (o.y += (VerTage.mouse.y - o.y) * c),
      e(o.x),
      t(o.y);
  }),
  (w.cursor_tl = gsap
    .timeline({
      paused: !0,
    })
    .fromTo(
      VerTage.cursor.querySelector(".cursor-bg"),
      0.5,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "back.out",
      },
      0
    )),
  document.addEventListener("DOMContentLoaded", function () {
    if ((textBreak(), MouseCursor(), "home-page" == IDPage)) {
      LoadIcon.insertAdjacentHTML(
        "beforeend",
        '<div class="loading-light"><span></span><span></span><span></span></div>'
      );
      var c = LoadIcon.querySelector(".loading-light");
      HeaderWidget.style.display = "none";
      (d = document.createElement("div")).setAttribute("id", "flaresContainer"),
        Body.append(d);
      var e = 30,
        t = gsap.utils.random(-400, 50, null, !0),
        l = function () {
          return "+=" + t();
        };

      function r() {
        var c = window.innerWidth;
        (v = c / 2),
          (h = window.innerWidth / 2 + v / 3),
          (p = Math.min(1, c / 1e3));
      }
      for (window.addEventListener("resize", r), r(); e--; )
        ((u = new Image(85, 85)).src = httptemplate + "images/cycle-flare.png"),
          u.setAttribute("alt", "flare"),
          d.appendChild(u),
          (u._scale = gsap.utils.random(0.09, 0.45) * p),
          (u._cycle = -1),
          gsap.set(u, {
            scale: u._scale,
            opacity: 0,
          }),
          o(u, !0);

      function o(c) {
        var e = 0,
          t = 1 / c._scale;
        0 == +gsap.getProperty(c, "opacity")
          ? c._cycle &&
            (gsap.set(c, {
              y: "random(-85, " + (window.innerHeight - 250) + ")",
              x: "random(" + (h - v) + "," + (h + v) + ")",
            }),
            (e = 3),
            gsap.to(c, {
              opacity: 0.5 * Math.random() + 0.15,
              duration: 1,
              delay: e,
              onComplete: function () {
                c._cycle = 1;
              },
            }),
            (c._cycle = 0))
          : 0 < c._cycle ||
            parseFloat(gsap.getProperty(c, "y")) > window.innerHeight
          ? (gsap.to(c, {
              opacity: 0,
              overwrite: "auto",
              duration: 1,
            }),
            (c._cycle = -1))
          : c._cycle && c._cycle++,
          gsap.to(c, {
            y: "+=200",
            ease: "none",
            delay: e,
            duration: t,
          }),
          gsap.to(c, {
            x: l,
            ease: "sine.inOut",
            duration: t,
            onComplete: o,
            onCompleteParams: [c],
            delay: e,
          });
      }
      (TitlePage.style.display = "none"),
        LoadIcon.classList.add("show"),
        setTimeout(function () {
          c.classList.add("show");
        }, 1400),
        setTimeout(function () {
          gsap.to(Flower, {
            duration: 1.2,
            opacity: 0.4,
            ease: "none",
          }),
            Flower.classList.add("show"),
            LoadIcon.classList.add("load-done");
        }, 800);
      var n = document
          .querySelector(".mask")
          .getAttribute("data-timeout-loading"),
        n =
          ((!n || n < 3e3) && (n = 6e3),
          setTimeout(function () {
            EnterSite &&
              !EnterSite.classList.contains("already") &&
              EnterSite.click();
          }, n),
          Container.querySelector(".inline-video"));
      n &&
        (n.load(),
        (n.onloadeddata = function () {
          var c = document.createElement("script");
          (c.id = "js_video"),
            (c.src = httptemplate + "/js/video.js"),
            (c.type = "text/javascript"),
            document.getElementById("js_video") || document.body.appendChild(c);
        }),
        (n = Container.querySelectorAll(".box-video-center")),
        (observerVideo = new IntersectionObserver(
          function (c) {
            c.forEach(function (c) {
              var e = c.target;
              0.4 < c.intersectionRatio &&
              e.closest(".slidebox-item").classList.contains("is-active")
                ? 1 == FirstLoadVideo && StartPlay(e)
                : 1 == FirstLoadVideo && StopPlay(e);
            });
          },
          {
            threshold: [0.4],
          }
        )),
        n &&
          n.forEach(function (c) {
            observerVideo.observe(c);
          }),
        setTimeout(function () {
          FirstLoadVideo = 1;
        }, 2e3));
    } else {
      Done(), Appear();
      for (
        var n = innerWidth,
          a = innerHeight,
          i = a < n ? 13e-5 * n : 15e-5 * a,
          s = Math.round(a < n ? n * i : a * i);
        s--;

      )
        TileReveal.insertAdjacentHTML(
          "beforeend",
          '<div class="tile-reveal-square"></div>'
        );
      (Container.style.opacity = "1"),
        gsap.to(".tile-reveal-square", {
          duration: 0.6,
          opacity: 0,
          scale: 0.75,
          ease: "power1.inOut",
          stagger: {
            each: 0.12,
            amount: 1,
            from: "center",
            grid: "auto",
            axis: null,
          },
        }),
        Banner && Banner.classList.add("show");
    }
    if (
      "search-page" == IDPage ||
      "thankyou-page" == IDPage ||
      "notfound-page" == IDPage
    ) {
      (d = document.createElement("div")).setAttribute("id", "flaresContainer"),
        Body.append(d);
      var d,
        u,
        h,
        v,
        p,
        e = 30,
        t = gsap.utils.random(-400, 50, null, !0),
        l = function () {
          return "+=" + t();
        };

      function r() {
        var c = window.innerWidth;
        (v = c / 2),
          (h = window.innerWidth / 2 + v / 3),
          (p = Math.min(1, c / 1e3));
      }
      for (window.addEventListener("resize", r), r(); e--; )
        ((u = new Image(85, 85)).src = httptemplate + "images/cycle-flare.png"),
          d.appendChild(u),
          (u._scale = gsap.utils.random(0.09, 0.45) * p),
          (u._cycle = -1),
          gsap.set(u, {
            scale: u._scale,
            opacity: 0,
          }),
          o(u, !0);

      function o(c) {
        var e = 0,
          t = 1 / c._scale;
        0 == +gsap.getProperty(c, "opacity")
          ? c._cycle &&
            (gsap.set(c, {
              y: "random(-85, " + (window.innerHeight - 250) + ")",
              x: "random(" + (h - v) + "," + (h + v) + ")",
            }),
            (e = 3),
            gsap.to(c, {
              opacity: 0.5 * Math.random() + 0.15,
              duration: 1,
              delay: e,
              onComplete: function () {
                c._cycle = 1;
              },
            }),
            (c._cycle = 0))
          : 0 < c._cycle ||
            parseFloat(gsap.getProperty(c, "y")) > window.innerHeight
          ? (gsap.to(c, {
              opacity: 0,
              overwrite: "auto",
              duration: 1,
            }),
            (c._cycle = -1))
          : c._cycle && c._cycle++,
          gsap.to(c, {
            y: "+=200",
            ease: "none",
            delay: e,
            duration: t,
          }),
          gsap.to(c, {
            x: l,
            ease: "sine.inOut",
            duration: t,
            onComplete: o,
            onCompleteParams: [c],
            delay: e,
          });
      }
    }
    OuterNav &&
      (hasClass(OuterNav, "release") ||
        (((n = OuterNav.cloneNode(!0)).querySelector(
          ".sub-nav"
        ).style.opacity = 1),
        addClass(n, "second"),
        removeClass(n, "ani-item"),
        Header.appendChild(n)),
      Array.from(
        document.querySelectorAll(".outer-nav .wheel-next"),
        function (c) {
          c &&
            c.addEventListener("click", function (c) {
              c.preventDefault(),
                (this.parentNode.querySelector(".sub-nav").scrollLeft += 200);
            });
        }
      ),
      Array.from(
        document.querySelectorAll(".outer-nav .wheel-prev"),
        function (c) {
          c &&
            c.addEventListener("click", function () {
              this.parentNode.querySelector(".sub-nav").scrollLeft -= 200;
            });
        }
      ));
  });
var FirstLoadVideo = 0,
  isFirst = 0;

function onScroll() {
  var e = document.querySelectorAll(".ani-item:not(.on-show)"),
    t = document.querySelectorAll(".bg-lazy:not(.bg-show)"),
    o = document.querySelectorAll(".text-ani-item:not(.on-show-text)"),
    r = document.querySelectorAll(".detect-on-view"),
    n = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.isIntersecting &&
          (e.target.classList.add("on-show"), n.unobserve(e.target));
      });
    }),
    i = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        var o;
        e.isIntersecting &&
          (e.target.classList.add("on-show-text"),
          clearTimeout(o),
          Array.from(e.target.querySelectorAll(".char"), function (e, t) {
            return (
              (o = setTimeout(function () {
                e.classList.add("move");
              }, 70 * (t + 1))),
              !1
            );
          }),
          i.unobserve(e.target));
      });
    }),
    a = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.isIntersecting && !e.target.classList.contains("is-inview")
          ? e.target.classList.add("is-inview")
          : e.isIntersecting || e.target.classList.remove("is-inview");
      });
    }),
    s = new IntersectionObserver(function (e) {
      e.forEach(function (e) {
        e.isIntersecting &&
          (e.target.classList.add("bg-show"), s.unobserve(e.target));
      });
    });
  e &&
    e.forEach(function (e) {
      n.observe(e);
    }),
    o &&
      o.forEach(function (e) {
        i.observe(e);
      }),
    r &&
      r.forEach(function (e) {
        a.observe(e);
      }),
    t &&
      t.forEach(function (e) {
        s.observe(e);
      });
}

function NavClickFn() {
  gsap.set(Logo.querySelector(".logo_white_01, .logo_black_01"), {
    transformOrigin: "50% 50%",
  });
  for (
    var o = Header.querySelector(".navigation"),
      r = Header.querySelector(".main-menu"),
      n = Header.querySelectorAll(".nav-item-a"),
      i = Header.querySelector(".overlay-menu"),
      a = i.querySelector(".logo-menu"),
      s = Header.querySelector(".close-menu"),
      e = 0;
    e < n.length;
    e++
  ) {
    var t = document.createElement("span"),
      l = ((t.className = "num-nav"), e + 1);
    (t.innerHTML = "<span> 0" + l + "</span>"), n[e].appendChild(t);
  }
  gsap.to(".nav-item-a", {
    duration: 0,
    y: "110%",
    opacity: 0,
  }),
    gsap.to(a, {
      duration: 0,
      opacity: "0",
      scale: 1.4,
      ease: "power2",
    }),
    NavClick.addEventListener("click", function (e) {
      e.preventDefault(), (e = Mobile.matches ? 0.6 : 0.8);
      var t = document.querySelector(".scrollbar");
      return (
        gsap.to(t, {
          duration: 0.4,
          opacity: "1",
          ease: "power2",
        }),
        NavClick.classList.contains("show")
          ? (WinScroll.start(),
            (Container.style.transition = "filter 0.3s ease-in-out"),
            Container.classList.remove("blur"),
            Array.from([r, NavClick, i, s], function (e) {
              e.classList.remove("show");
            }),
            setTimeout(function () {
              gsap.to(".nav-item-a", {
                duration: 0,
                y: "110%",
                opacity: 0,
              }),
                Array.from([o], function (e) {
                  e.classList.remove("show");
                });
            }, 400),
            gsap.to(o, {
              duration: 0.6,
              opacity: "0",
              ease: "power2",
            }),
            gsap.to(a, {
              duration: 1,
              opacity: 0,
              ease: "power2",
              onComplete: function () {
                gsap.to(a, {
                  duration: 0,
                  scale: 1.4,
                }),
                  (Header.style.zIndex = "3");
              },
            }),
            gsap
              .timeline({
                delay: 0.01,
              })
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(1) div"),
                {
                  x: "0%",
                },
                {
                  duration: e,
                  x: "100%",
                  ease: "power2.out",
                },
                0.2
              )
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(2) div"),
                {
                  x: "0%",
                },
                {
                  duration: e,
                  x: "100%",
                  ease: "power2.out",
                },
                0.3
              )
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(3) div"),
                {
                  x: "0%",
                },
                {
                  duration: e,
                  x: "100%",
                  ease: "power2.out",
                },
                0.4
              ),
            clearTimeout(timer))
          : (WinScroll.stop(),
            Container.classList.add("blur"),
            Array.from([r, o, i, NavClick], function (e) {
              e.classList.add("show");
            }),
            setTimeout(function () {
              s.classList.add("show");
            }, 600),
            clearTimeout(timer),
            n.forEach(function (e, t) {
              var o = e;
              setTimeout(function () {
                gsap.to(o, {
                  duration: 0.8,
                  delay: 0.3,
                  y: "0%",
                  opacity: 1,
                  ease: "power4",
                });
              }, 80 * (t + 1));
            }),
            gsap.to(a, {
              duration: 1.5,
              opacity: "1",
              scale: "1",
              ease: "power2",
              delay: 0.6,
            }),
            gsap
              .timeline({
                delay: 0.01,
              })
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(1) div"),
                {
                  x: "100%",
                },
                {
                  duration: e,
                  x: "0%",
                  ease: "power2.out",
                },
                0.2
              )
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(2) div"),
                {
                  x: "100%",
                },
                {
                  duration: e,
                  x: "0%",
                  ease: "power2.out",
                },
                0.3
              )
              .fromTo(
                Header.querySelector(".preloader-line:nth-child(3) div"),
                {
                  x: "100%",
                },
                {
                  duration: e,
                  x: "0%",
                  ease: "power2.out",
                },
                0.4
              ),
            gsap.to(t, {
              duration: 0.4,
              opacity: "0",
              ease: "power2",
            }),
            (i.style.opacity = "1"),
            (o.style.opacity = "1"),
            (Header.style.zIndex = "999")),
        d(),
        !1
      );
    }),
    Array.from([i, s], function (e) {
      e.addEventListener("click", function () {
        NavClick.classList.contains("show") && NavClick.click();
      });
    }),
    Array.from(document.querySelectorAll(".load-subscribe"), function (e) {
      e.addEventListener("click", function (e) {
        return (
          e.preventDefault(),
          document.getElementById("register").reset(),
          Regsiters.classList.add("show"),
          gsap.fromTo(
            Regsiters.querySelector(".register-form"),
            {
              opacity: "0",
              transform: "translateY(5vw)",
            },
            {
              duration: 0.6,
              opacity: "1",
              delay: 0.6,
              transform: "translateY(0)",
            }
          ),
          !1
        );
      });
    }),
    Array.from(
      document.querySelectorAll(".close-regis, .register > span"),
      function (e) {
        e.addEventListener("click", function (e) {
          Regsiters.classList.remove("show"),
            gsap.fromTo(
              Regsiters.querySelector(".register-form"),
              {
                opacity: "1",
                transform: "translateY(0)",
              },
              {
                duration: 0.6,
                opacity: "0",
                transform: "translateY(5vw)",
              }
            );
        });
      }
    ),
    GoTop.addEventListener("click", function (e) {
      e.preventDefault(), ScrollTos(0), d();
    }),
    Wheel &&
      Wheel.addEventListener("click", function (e) {
        e.preventDefault();
        e = Banner.clientHeight;
        ScrollTos(e), d();
      });
}

function execSearch() {
  var e = document.getElementById("quicksearch").value,
    t = document.getElementById("href_search").value,
    o = document.getElementById("defaultvalue").value,
    r = document.getElementById("errorsearchcode").value;
  return (
    e != o &&
    "" != e &&
    (e.length <= 2
      ? (ShowMessage(r, "color-yellow", "mess-alert"),
        setTimeout(hidemsg, 5e3),
        !1)
      : void (
          "" != e &&
          ((o = t + "?quicksearch=" + encodeURIComponent(e)),
          (window.location = o))
        ))
  );
}

function Search() {
  var t = rightHeader.querySelector(".search-but"),
    o = document.querySelector(".search-overlay"),
    r = document.querySelector(".search-form"),
    e = r.querySelector("#quicksearch"),
    n = document.querySelector(".close-search"),
    i = document.querySelector(".search-overlay > span");
  t.addEventListener("click", function (e) {
    e.preventDefault(),
      t.classList.contains("active")
        ? (o.classList.remove("show"),
          t.classList.remove("active"),
          r.classList.remove("active", "typing"),
          SearchLoading.classList.remove("show"),
          Container.classList.remove("blur"),
          Header.classList.remove("blur"),
          WinScroll.start())
        : (o.classList.add("show"),
          t.classList.add("active"),
          r.classList.add("active"),
          document
            .querySelector(".search-form .holder")
            .classList.remove("hide"),
          document.getElementById("search").reset(),
          Container.classList.add("blur"),
          Header.classList.add("blur"),
          WinScroll.stop()),
      d();
  }),
    e.addEventListener(
      "keyup",
      debounce(function (e) {
        var t, o;
        "" !== this.value
          ? (r.classList.add("typing"),
            (t =
              (t = ButType.getAttribute("data-href")) +
              "?quicksearch=" +
              encodeURIComponent(this.value)),
            (o = document.querySelector(".list-result-search-typing")) &&
              o.remove(),
            SearchLoading.classList.add("show"),
            SearchTypingLoad(t))
          : (r.classList.remove("typing"),
            SearchLoading.classList.remove("show"));
      }, 500)
    ),
    e.addEventListener("keydown", function (e) {
      13 === e.keyCode && execSearch();
    }),
    document
      .querySelector(".form-row-search svg")
      .addEventListener("click", function (e) {
        e.preventDefault(), execSearch();
      }),
    Array.from([n, i], function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(), hasClass(t, "active") && t.click(), d();
      });
    });
}

function TriggerClickSlide(e, t) {
  var o = e.querySelector(".is-next"),
    r = e.querySelector(".is-prev");
  o &&
    o.addEventListener("click", function () {
      o.classList.contains("is-next") && t.go(">");
    }),
    r &&
      r.addEventListener("click", function () {
        r.classList.contains("is-prev") && t.go("<");
      });
}
var SlidePicture = {
  slideBanner: function () {
    var r,
      t,
      n = Container.querySelector(".slide-background:not(.slide-already)");
    n &&
      (n.classList.add("slide-already"),
      ((r = n.getAttribute("data-time")) &&
        null != r &&
        null != r &&
        "0000" != r) ||
        (r = 5e3),
      (t = new Splide(n, {
        type: "fade",
        rewind: !0,
        pagination: !0,
        autoplay: !0,
        interval: r,
        gap: "0px",
        speed: 1200,
        arrows: !1,
        drag: !0,
        resetProgress: !0,
        animation: !0,
        updateOnMove: !0,
        breakpoints: {
          1100: {
            pagination: !0,
            arrowPath: !1,
          },
        },
      })).on("mounted", function () {
        var e;
        1 < n.querySelectorAll(".slidebox-item").length
          ? (n.classList.add("true-option"),
            n.addEventListener("swiped-right", function (e) {
              t.go("<");
            }),
            n.addEventListener("swiped-left", function (e) {
              t.go(">");
            }))
          : (n.classList.remove("true-option"),
            (e = document.querySelector(
              ".slide-background .slidebox-modify"
            )) && e.remove());
      }),
      t.on("resize", function () {
        1 < n.querySelectorAll(".slidebox-item").length
          ? n.classList.add("true-option")
          : n.classList.remove("true-option");
      }),
      t.on("mounted moved", function () {
        var o = t.Components.Autoplay;
        setTimeout(function () {
          var e = n.querySelector(".box-video-center"),
            t = n.querySelector(".slidebox-item.is-active .box-video-center");
          e && 1 == FirstLoadVideo && (o.play(r), StopPlay(e)),
            t && 1 == FirstLoadVideo && (o.pause(r), StartPlay(t));
        }, 300);
      }),
      t.mount());
  },
  ProHomeSlide: function () {
    var e,
      t = document.querySelector(".slide-project:not(.slide-already)");
    t &&
      (t.classList.add("slide-already"),
      (e = new Splide(t, {
        type: "loop",
        perPage: 1,
        pagination: !1,
        gap: "40px",
        speed: 1200,
        drag: !0,
        arrows: !0,
        arrowPath:
          "M64.9,52.1L2.6,52.5v-3.3l62.3-0.3V15l32.4,35L64.9,84.7V52.1z",
        size: 100,
        autoplay: !0,
        interval: 1e4,
        updateOnMove: !0,
        breakpoints: {
          1100: {
            arrows: !1,
            pagination: !0,
            gap: "30px",
          },
        },
      })).on("mounted", function () {
        TriggerClickSlide(t, e),
          1 < Container.querySelectorAll(".slidebox-item").length
            ? t.classList.add("true-option")
            : (t.classList.remove("true-option"), BackSlide.remove());
      }),
      e.on("moved", function () {
        TriggerClickSlide(t, e);
      }),
      e.mount());
  },
  SlideLibrary: function () {
    var e = document.querySelectorAll(".slide-library:not(.slide-already)");
    e &&
      e.forEach(function (o) {
        var e;
        o &&
          (o.classList.add("slide-already"),
          (e = new Splide(o, {
            rewind: !0,
            perPage: 2,
            perMove: 1,
            pagination: !1,
            gap: "0px",
            arrows: !0,
            speed: 800,
            updateOnMove: !0,
            drag: !0,
            breakpoints: {
              1100: {
                pagination: !0,
                perPage: 2,
              },
              660: {
                pagination: !0,
                perPage: 1,
              },
            },
          })).on("mounted", function () {
            2 < o.querySelectorAll(".slidebox-item").length
              ? o.classList.add("true-option")
              : o.classList.remove("true-option"),
              setTimeout(function () {
                var e = o.querySelectorAll(".slidebox-pagination");
                if (1 < e.length)
                  for (var t = 0; t < e.length; t++) 0 !== t && e[t].remove();
              }, 300);
          }),
          e.on("resize", function () {
            2 < o.querySelectorAll(".slidebox-item").length
              ? o.classList.add("true-option")
              : o.classList.remove("true-option");
          }),
          e.mount());
      });
  },
  SlideOneObject: function () {
    var e = document.querySelectorAll(".slide-one:not(.slide-already)");
    e &&
      e.forEach(function (e) {
        var t, o;
        e &&
          (e.classList.add("slide-already"),
          (t = e.querySelectorAll(".slidebox-item").length),
          (o = new Splide(e, {
            type: "fade",
            rewind: !0,
            perPage: 1,
            perMove: 1,
            pagination: !1,
            gap: "0px",
            arrows: !0,
            speed: 1200,
            drag: !0,
            breakpoints: {
              1100: {
                pagination: !0,
              },
            },
          })).on("mounted", function () {
            1 < t
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          o.on("resize", function () {
            1 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          o.mount());
      });
  },
  SlideTwoObject: function () {
    var e = document.querySelectorAll(".slide-two:not(.slide-already)");
    e &&
      e.forEach(function (e) {
        var t;
        e &&
          (e.classList.add("slide-already"),
          (t = new Splide(e, {
            rewind: !0,
            perPage: 2,
            perMove: 1,
            pagination: !1,
            gap: "1px",
            arrows: !0,
            speed: 800,
            updateOnMove: !0,
            drag: !0,
            breakpoints: {
              1100: {
                pagination: !0,
                perPage: 2,
              },
              660: {
                pagination: !0,
                perPage: 1,
              },
            },
          })).on("mounted", function () {
            2 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          t.on("resize", function () {
            2 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          t.mount());
      });
  },
  SlideThreeObject: function () {
    var e = document.querySelectorAll(".slide-three:not(.slide-already)");
    e &&
      e.forEach(function (t) {
        var e;
        t &&
          (t.classList.add("slide-already"),
          (e = new Splide(t, {
            rewind: !0,
            perPage: 3,
            perMove: 1,
            pagination: !1,
            gap: "0px",
            arrows: !0,
            speed: 600,
            breakpoints: {
              1100: {
                pagination: !0,
                perPage: 2,
              },
              660: {
                pagination: !0,
                perPage: 1,
              },
            },
          })).on("mounted", function () {
            var e = t.querySelectorAll(".slidebox-item").length;
            1100 < innerWidth
              ? 3 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option")
              : 660 < innerWidth < 1100
              ? 2 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option")
              : 0 < innerWidth < 660 &&
                (1 < e
                  ? t.classList.add("true-option")
                  : t.classList.remove("true-option"));
          }),
          e.on("resize", function () {
            3 < t.querySelectorAll(".slidebox-item").length
              ? t.classList.add("true-option")
              : t.classList.remove("true-option");
          }),
          e.mount());
      });
  },
  SlideFourObject: function () {
    var e = document.querySelectorAll(".slide-four:not(.slide-already)");
    e &&
      e.forEach(function (t) {
        var e;
        t &&
          (t.classList.add("slide-already"),
          (e = new Splide(t, {
            rewind: !0,
            perPage: 4,
            pagination: !1,
            gap: "0px",
            arrows: !0,
            speed: 600,
            breakpoints: {
              1100: {
                pagination: !0,
                perPage: 3,
              },
              660: {
                pagination: !0,
                perPage: 2,
              },
              400: {
                pagination: !0,
                perPage: 1,
              },
            },
          })).on("mounted", function () {
            var e = t.querySelectorAll(".slidebox-item").length;
            1100 < innerWidth
              ? 4 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option")
              : 660 < innerWidth < 1100
              ? 3 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option")
              : 400 < innerWidth < 660
              ? 2 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option")
              : 0 < innerWidth < 400 &&
                (1 < e
                  ? t.classList.add("true-option")
                  : t.classList.remove("true-option"));
          }),
          e.on("resize", function () {
            4 < t.querySelectorAll(".slidebox-item").length
              ? t.classList.add("true-option")
              : t.classList.remove("true-option");
          }),
          e.mount());
      });
  },
  SlidePopupDetails: function () {
    document
      .querySelectorAll(".slide-popup-details:not(.slide-already)")
      .forEach(function (e) {
        var t;
        e &&
          (e.classList.add("slide-already"),
          (t = new Splide(e, {
            rewind: !0,
            perPage: 1,
            pagination: !0,
            gap: "0px",
            size: 40,
            arrows: !0,
            speed: 600,
          })).on("mounted", function () {
            1 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          t.on("resize", function () {
            1 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          t.mount());
      });
  },
  SliderRelative: function () {
    var e = document.querySelectorAll(
      ".slide-news-relative:not(.slide-already)"
    );
    e &&
      e.forEach(function (t, e) {
        t.classList.add("slide-already");
        var r = new Splide(t, {
            rewind: !0,
            perPage: 3,
            perMove: 1,
            pagination: !1,
            gap: "0px",
            arrows: !0,
            drag: !0,
            speed: 1e3,
            breakpoints: {
              1100: {
                perPage: 3,
                pagination: !0,
              },
              580: {
                perPage: 2,
                pagination: !0,
              },
            },
          }),
          o =
            (r.on("mounted", function () {
              var e = t.querySelectorAll(".slidebox-item").length;
              Mobile.matches || 3 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option");
            }),
            r.on("resize", function () {
              var e = t.querySelectorAll(".slidebox-item").length;
              Mobile.matches || 3 < e
                ? t.classList.add("true-option")
                : t.classList.remove("true-option");
            }),
            r.mount(),
            Container.querySelectorAll(
              ".news-relative .slide-news-relative .item-news"
            )),
          n = o.length - 1;
        o &&
          o.forEach(function (e) {
            e.addEventListener("click", function (e) {
              var t = [].slice.call(this.parentNode.children).indexOf(this),
                o = this;
              setTimeout(function () {
                Mobile.matches ||
                  (n - 1 <= t ? r.go(n - 2) : 0 == t ? r.go(t) : r.go(t - 1)),
                  o.classList.add("display-none"),
                  r.refresh();
              }, 500);
            });
          });
      });
  },
  SliderOrderProject: function () {
    var e = document.querySelectorAll(
      ".slide-project-relative:not(.slide-already)"
    );
    e &&
      e.forEach(function (t, e) {
        t.classList.add("slide-already");
        var o = new Splide(t, {
          rewind: !0,
          perPage: 3,
          perMove: 1,
          pagination: !1,
          gap: "0px",
          arrows: !0,
          drag: !0,
          speed: 1e3,
          breakpoints: {
            1100: {
              perPage: 2,
              pagination: !0,
            },
            540: {
              perPage: 1,
              pagination: !0,
            },
          },
        });
        o.on("mounted", function () {
          var e = t.querySelectorAll(".slidebox-item").length;
          Mobile.matches || 3 < e
            ? t.classList.add("true-option")
            : t.classList.remove("true-option");
        }),
          o.on("resize", function () {
            var e = t.querySelectorAll(".slidebox-item").length;
            Mobile.matches || 3 < e
              ? t.classList.add("true-option")
              : t.classList.remove("true-option");
          }),
          o.mount();
      });
  },
  SlideReport: function () {
    var e = document.querySelectorAll(".slide-report:not(.slide-already)");
    e &&
      e.forEach(function (e) {
        var t;
        e &&
          (e.classList.add("slide-already"),
          (t = new Splide(e, {
            speed: 1200,
            perPage: 1,
            pagination: !1,
            gap: "40px",
            SizeW: 100,
            SizeH: 100,
            arrowPath:
              "M32.6,85.8 31.6,84.9 66.5,50 31.6,15.1 32.6,14.2 68.4,50z",
            drag: !0,
            breakpoints: {
              1100: {
                pagination: !0,
                arrows: !1,
              },
            },
          })).on("resize", function () {
            1 < e.querySelectorAll(".slidebox-item").length
              ? e.classList.add("true-option")
              : e.classList.remove("true-option");
          }),
          t.on("mounted", function () {
            1 < e.querySelectorAll(".slidebox-item").length
              ? (e.classList.add("true-option"),
                e.addEventListener("swiperight", function (e) {
                  t.go("<");
                }),
                e.addEventListener("swipeleft", function (e) {
                  t.go(">");
                }))
              : e.classList.remove("true-option");
          }),
          t.mount());
      });
  },
  SliderNumber: function () {
    document
      .querySelectorAll(".slide-number:not(.slide-alreay)")
      .forEach(function (t) {
        var o, e;
        t &&
          (t.classList.add("slide-alreay"),
          (o =
            1100 < window.innerWidth
              ? 8
              : 540 < window.innerWidth < 1100
              ? 6
              : 4),
          (e = new Splide(t, {
            rewind: !1,
            start: 0,
            perPage: 8,
            updateOnMove: !0,
            pagination: !1,
            gap: "0",
            arrowPath:
              "M64.9,52.1L2.6,52.5v-3.3l62.3-0.3V15l32.4,35L64.9,84.7V52.1z",
            size: 100,
            speed: 500,
            breakpoints: {
              1100: {
                perPage: 6,
              },
              540: {
                perPage: 4,
              },
            },
          })).on("mounted", function () {
            var e = t.querySelectorAll(".slidebox-item").length;
            o < e
              ? t.classList.add("true-option")
              : t.classList.remove("true-option");
          }),
          e.on("resize", function () {
            var e = t.querySelectorAll(".slidebox-item").length;
            o < e
              ? t.classList.add("true-option")
              : t.classList.remove("true-option");
          }),
          e.mount());
      });
  },
};

function Load360(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onload = function () {
      var e, t, o, r;
      200 <= this.status &&
        this.status < 400 &&
        ((t = this.response),
        (e = document.querySelector(".bg-degree")).insertAdjacentHTML(
          "beforeend",
          t
        ),
        addClass(e, "show"),
        (t = document.createElement("div")).classList.add(
          "close-360",
          "close-format"
        ),
        t.insertAdjacentHTML(
          "afterbegin",
          '<svg><use xlink:href="#ico-close-menu"></use></svg><span class="line-toggle toggle-1"></span><span class="line-toggle toggle-2"></span>'
        ),
        e.append(t),
        (Details = 1),
        (o = document.querySelector(".loadx")),
        gsap.to(o, {
          duration: 0.5,
          opacity: 0,
          ease: "power2",
          onComplete: function () {
            o.remove();
          },
        }),
        LazyImageLoad(),
        (r = e.querySelector(".close-360")).addEventListener(
          "click",
          function () {
            return (
              removeClass(e, "show"),
              WinScroll.start(),
              r.remove(),
              OverlayDark.classList.remove("show"),
              Array.from(e.querySelectorAll("iframe"), function (e) {
                gsap.to(e, {
                  duration: 0.5,
                  opacity: 0,
                  ease: "power2",
                  onComplete: function () {
                    e.remove();
                  },
                });
              }),
              !1
            );
          }
        ));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function popupLoad(e, t) {
  var o = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  o.open("GET", e, !0),
    (o.onreadystatechange = function () {
      var t, e, o, r;
      4 <= this.readyState &&
        200 == this.status &&
        ((r = this.response),
        Body.insertAdjacentHTML("beforeend", r),
        SlidePicture.SlidePopupDetails(),
        textBreak(),
        document.querySelector(".join-form") && sendRecrutmentForm(),
        (t = document.querySelector(".details-content")),
        (e = document.querySelector(".details-center")),
        (r = t.querySelector(".close-popup")),
        gsap.fromTo(
          e,
          {
            opacity: "0",
            transform: "translateY(200px)",
          },
          {
            duration: 1.2,
            opacity: "1",
            delay: 0.5,
            transform: "none",
            ease: "power2",
          }
        ),
        r.classList.add("goleft"),
        FocusText(),
        (o = document.querySelector(".loadx")),
        gsap.to(o, {
          opacity: "0",
          ease: "power2",
          duration: 0.4,
          delay: 0.5,
          onComplete: function () {
            e.clientHeight > window.innerheight && e.classList.add("no-after"),
              o.remove(),
              onScroll();
          },
        }),
        LazyImageLoad(),
        (r = document.querySelectorAll(
          ".close-popup, .details-content > span"
        )).forEach(function (e) {
          e.addEventListener("click", function () {
            return (
              document.querySelector(".join-form") &&
                (addURL(
                  document.querySelector(".main-menu li.current a"),
                  document
                    .querySelector(".main-menu li.current a")
                    .getAttribute("data-name")
                ),
                changeAlternate(
                  document
                    .querySelector(".main-menu li.current a")
                    .getAttribute("href"),
                  document
                    .querySelector(".main-menu li.current a")
                    .parentElement.querySelector(".link-change-url"),
                  1
                )),
              TweenMax.to(t, 0.6, {
                opacity: "0",
                ease: "power2",
                onComplete: function () {
                  t.remove();
                },
              }),
              OverlayDark.classList.remove("show"),
              WinScroll.start(),
              !1
            );
          });
        }));
    }),
    o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    o.send();
}

function PageNewsList(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onreadystatechange = function () {
      var e;
      4 <= this.readyState &&
        200 == this.status &&
        ((e = this.response),
        NewsListLoad.insertAdjacentHTML("beforeend", e),
        gsap.to(NewsListLoad, {
          duration: 0.2,
          opacity: 1,
          filter: "blur(0)",
          ease: "none",
          onComplete: function () {
            onScroll(), LinkPage(), Option(), LazyImageLoad();
            var o = Container.querySelector(".list-viewmore-news"),
              r = o.querySelectorAll(".more-project").length;
            Array.from(document.querySelectorAll(".loadx"), function (e) {
              gsap.to(e, {
                duration: 0.3,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  e.remove();
                },
              });
            }),
              Array.from(
                document.querySelectorAll(".more-project"),
                function (e) {
                  e.addEventListener("click", function (e) {
                    e.preventDefault();
                    e = this.getAttribute("data-href");
                    return (
                      this.classList.add("current"),
                      [].slice.call(this.parentNode.children).indexOf(this) ==
                        r - 1 &&
                        Array.from(
                          document.querySelectorAll(".loading"),
                          function (e) {
                            gsap.to(e, {
                              duration: 0.3,
                              opacity: 0,
                              ease: "power4.out",
                              onComplete: function () {
                                e.remove();
                              },
                            });
                          }
                        ),
                      Array.from(
                        document.querySelectorAll(".loading"),
                        function (e) {
                          gsap.to(e, {
                            duration: 0.3,
                            opacity: 1,
                            ease: "power4.out",
                          });
                        }
                      ),
                      LoadNewsList(e),
                      !1
                    );
                  });
                }
              ),
              o.querySelector(".more-project") &&
                o.querySelector(".more-project").click(),
              o &&
                o.querySelector(".more-project") &&
                (observer4 = new IntersectionObserver(function (e) {
                  e.forEach(function (e) {
                    var t;
                    e.isIntersecting &&
                      !e.target.classList.contains("loading-waiting") &&
                      (e.target.classList.add("loading-waiting"),
                      (e = o.querySelector(".more-project.current")),
                      Array.from(
                        o.querySelectorAll(".more-project"),
                        function (e) {
                          e.classList.remove("current");
                        }
                      ),
                      (t = e
                        ? [].slice.call(e.parentNode.children).indexOf(e) ==
                          r - 1
                          ? void 0
                          : e.nextElementSibling
                        : t) && t.click());
                  });
                })).observe(o);
          },
        }));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function LoadNewsList(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onreadystatechange = function () {
      var e;
      4 <= this.readyState &&
        200 == this.status &&
        ((e = this.response),
        Container.querySelector(".news-list").insertAdjacentHTML(
          "beforeend",
          e
        ),
        NewsListLoad.querySelector(".slide-three") &&
          SlidePicture.SlideThreeObject(),
        setTimeout(function () {
          LinkPage(),
            LazyImageLoad(),
            Option(),
            onScroll(),
            Mobile.matches || thatScroll.update(),
            Container.querySelector(".list-viewmore-news").classList.remove(
              "loading-waiting"
            ),
            Array.from(
              Container.querySelectorAll(".item-news, .item-album"),
              function (e) {
                e.addEventListener("click", function () {
                  e.querySelector("a") && e.querySelector("a").click(),
                    e.querySelector("button") &&
                      e.querySelector("button").click();
                });
              }
            );
        }, 400));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function NewsLoad(n) {
  var e = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  e.open("GET", n, !0),
    (e.onload = function () {
      var e, t, o, r;
      200 <= this.status &&
        this.status < 400 &&
        ((r = this.response),
        (e = Container.querySelector(".load-details")),
        (o = Container.querySelector(".load-content")),
        (t = Container.querySelector(".load-details")) && t.remove(),
        o.insertAdjacentHTML("beforeend", r),
        (t = (e = Container.querySelector(".load-details")).querySelectorAll(
          ".load-text a"
        )),
        (o = e.querySelectorAll(".load-text img")),
        (r = e.querySelector(".load-text")) &&
          !r.classList.contains("on-show") &&
          r.classList.add("on-show"),
        document.querySelector(".zalo-share-button") && ZaloSocialSDK.reload(),
        (document.querySelector(".breadcrumb-name").innerHTML =
          document.querySelector(".load-title h2")
            ? document.querySelector(".load-title h2").innerHTML
            : ""),
        changeAlternate(n, document.querySelectorAll(".alternate-hl-news")),
        Array.from(o, function (e) {
          e.classList.add("zoom-pic");
        }),
        setTimeout(function () {
          (Details = 1),
            PrintShare(),
            onScroll(),
            Option(),
            LazyImageLoad(),
            DetectImgSLoadText(),
            SlidePicture.SlidePopupDetails(),
            Mobile.matches || thatScroll.update(),
            Array.from(document.querySelectorAll(".loadx"), function (e) {
              gsap.to(e, {
                duration: 0.3,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  e.remove();
                },
              });
            });
        }, 400),
        t.forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            e = this.getAttribute("href");
            return window.open(e, "_blank"), d(), !1;
          });
        }));
    }),
    e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    e.send();
}

function RecruitmentsLoad(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onload = function () {
      var e, t, o, r;
      200 <= this.status &&
        this.status < 400 &&
        ((r = this.response),
        (e = Container.querySelector(".load-details")),
        (o = Container.querySelector(".load-content")),
        (t = Container.querySelector(".load-details")) && t.remove(),
        o.insertAdjacentHTML("beforeend", r),
        (t = (e = Container.querySelector(".load-details")).querySelectorAll(
          ".load-text a"
        )),
        (o = e.querySelectorAll(".load-text img")),
        (r = e.querySelector(".load-text")) &&
          !r.classList.contains("on-show") &&
          r.classList.add("on-show"),
        Array.from(o, function (e) {
          e.classList.add("zoom-pic");
        }),
        setTimeout(function () {
          (Details = 1),
            PrintShare(),
            onScroll(),
            Option(),
            DetectImgSLoadText(),
            CustomeSelect(),
            FocusText(),
            LazyImageLoad();
          var e = Container.querySelector(".file-mark");
          e &&
            e.addEventListener("click", function () {
              this.parentNode.querySelector('input[type="file"]').click();
            }),
            SlidePicture.SlidePopupDetails(),
            Mobile.matches || thatScroll.update(),
            Array.from(document.querySelectorAll(".loadx"), function (e) {
              gsap.to(e, {
                duration: 0.3,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  e.remove();
                },
              });
            });
        }, 400),
        t.forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            e = this.getAttribute("href");
            return window.open(e, "_blank"), d(), !1;
          });
        }));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function SearchTypingLoad(e) {
  RequestAjaxTyping.abort(),
    RequestAjaxTyping.open("GET", e, !0),
    (RequestAjaxTyping.onload = function () {
      var e;
      200 <= this.status &&
        this.status < 400 &&
        ((e = this.response),
        (document.querySelector(".load-search-list").innerHTML = e),
        (Details = 1),
        onScroll(),
        LinkPage(),
        LazyImageLoad(),
        document.querySelectorAll(".item-search").forEach(function (e) {
          e.addEventListener("click", function () {
            this.querySelector("a").click();
          });
        }));
    }),
    RequestAjaxTyping.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    RequestAjaxTyping.send();
}

function IframeMapLoad(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onreadystatechange = function () {
      var e, t, o;
      4 <= this.readyState &&
        200 == this.status &&
        ((e = this.response),
        (t = Container.querySelector(".map-view")).insertAdjacentHTML(
          "beforeend",
          e
        ),
        (o = t.querySelector(".map-overlay")).addEventListener(
          "click",
          function () {
            o.classList.add("show");
          }
        ),
        setTimeout(function () {
          Option(), onScroll(), Mobile.matches || thatScroll.update();
        }, 300));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function LoadReportList(e) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onreadystatechange = function () {
      var e;
      4 <= this.readyState &&
        200 == this.status &&
        ((e = this.response),
        ReportListLoad.insertAdjacentHTML("beforeend", e),
        (e = document.querySelectorAll(".text-ani-item")) &&
          e.forEach(function (e) {
            e.setAttribute("data-splitting", ""), Splitting();
          }),
        gsap.to(ReportListLoad, {
          duration: 0.2,
          opacity: 1,
          filter: "blur(0)",
          ease: "none",
          onComplete: function () {
            Option(),
              onScroll(),
              LazyImageLoad(),
              SlidePicture.SlideReport(),
              SlidePicture.SliderNumber(),
              Array.from(
                Container.querySelectorAll(".num-report"),
                function (e) {
                  e.addEventListener("click", function (e) {
                    var t, o;
                    if (!this.classList.contains("current"))
                      return (
                        (t = this.getAttribute("data-report")),
                        (o = Container.querySelector(
                          '.load-report[data-report="' + t + '"]'
                        )),
                        Array.from(
                          o.parentNode.querySelectorAll(".num-report"),
                          function (e) {
                            e.classList.remove("current");
                          }
                        ),
                        this.classList.add("current"),
                        (o = this.getAttribute("data-href")),
                        Details,
                        LoadReport(o, t),
                        !1
                      );
                  });
                }
              ),
              setTimeout(function () {
                Array.from(
                  Container.querySelectorAll(".num-report:first-child"),
                  function (e) {
                    e && e.click();
                  }
                );
              }, 300);
          },
        }));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function LoadReport(e, r) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onload = function () {
      var t, o;
      200 <= this.status &&
        this.status < 400 &&
        ((t = this.response),
        (o = Container.querySelector('.load-report[data-report="' + r + '"]')),
        gsap.to(o, {
          duration: 0.3,
          opacity: 0,
          ease: Power2.easeOut,
          onComplete: function () {
            var e = o.querySelector(".slide-report"),
              e =
                (e && e.remove(),
                LazyImageLoad(),
                gsap.to(o, {
                  duration: 0.5,
                  opacity: 1,
                  ease: Power2.easeOut,
                  onComplete: function () {
                    Mobile.matches || thatScroll.update();
                  },
                }),
                o.insertAdjacentHTML("beforeend", t),
                SlidePicture.SlideOneObject(),
                SlidePicture.SlideThreeObject(),
                Array.from(
                  Container.querySelectorAll(".item-album"),
                  function (e) {
                    e.addEventListener("click", function () {
                      e.querySelector("a").click();
                    });
                  }
                ),
                (Details = 1),
                onScroll(),
                Option(),
                o.querySelector(".slide-report"));
            e && !e.classList.contains("on-show") && e.classList.add("on-show");
          },
        }),
        Array.from(document.querySelectorAll(".loadx"), function (e) {
          gsap.to(e, {
            duration: 0.5,
            opacity: 0,
            ease: "none",
            onComplete: function () {
              e.remove();
            },
          });
        }),
        Main.classList.contains("scrolling") && scrollTranslate());
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function AlbumLoad(e, c) {
  var u = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  u.open("GET", e, !0),
    (u.onreadystatechange = function () {
      var e, t, o, r, n, i, a, s, l;
      4 == u.readyState &&
        200 == u.status &&
        ((AllAlbum.innerHTML = u.responseText),
        (e = AllAlbum.querySelector(".album-load")),
        (t = AllAlbum.querySelector(".close-album")),
        LazyImageLoad(),
        Array.from(AllAlbum.querySelectorAll(".pic-name > h3"), function (e) {
          Splitting({
            target: e,
            by: "chars",
          });
        }),
        Array.from(AllAlbum.querySelectorAll(".pinch-zoom"), function (e) {
          new PinchZoom.default(e, {
            draggableUnzoomed: !1,
          });
        }),
        (r = e.querySelector(".album-center")),
        (n = e.querySelector(".thumbs")),
        (i = e.querySelectorAll(".slidebox-item").length),
        (s = r.querySelectorAll(".slidebox-item").length),
        1 < i &&
          (n.classList.add("display-block"), r.classList.add("true-option")),
        (i = new Splide(r, {
          rewind: !0,
          gap: 0,
          perPage: 1,
          speed: 1e3,
          start: c,
          pagination: !1,
          size: 60,
          arrows: !0,
        })).on("moved", function () {
          Array.from(
            document.querySelectorAll(".slidebox-item, .pic-name h3 .char"),
            function (e) {
              e.classList.remove("this-view", "current", "move");
            }
          );
        }),
        i.on("active", function () {
          r.querySelector(".is-active").classList.add("this-view"),
            clearTimeout(o),
            AllAlbum.querySelector(".this-view")
              .querySelectorAll(".pic-name h3 .char")
              .forEach(function (e, t) {
                o = setTimeout(function () {
                  e.classList.add("move");
                }, 50 * (t + 1));
              });
        }),
        6 < s ? (a = "center") : ((a = !1), n.classList.add("center")),
        (s = new Splide(n, {
          rewind: !0,
          isNavigation: !0,
          gap: 6,
          pagination: !1,
          arrows: !0,
          start: c,
          perMove: 1,
          perPage: 6,
          focus: a,
        }).mount()),
        i.sync(s).mount(),
        (l = document.querySelector(".loadx")),
        gsap.to(e, {
          duration: 0.8,
          opacity: 1,
          ease: "none",
          onComplete: function () {
            t.classList.add("goleft"),
              r.classList.add("fadein"),
              n.classList.add("fadeinup"),
              l.classList.remove("display-block"),
              TriggerSlider(),
              Array.from(r.querySelectorAll(".view-details"), function (e) {
                e && e.classList.add("is-inview");
              }),
              gsap.to(l, {
                duration: 0.4,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  l.remove();
                },
              });
          },
        }),
        t.addEventListener("click", function () {
          return (
            OverlayDark.classList.remove("show"),
            gsap.to(e, {
              duration: 0.5,
              opacity: 0,
              ease: "none",
              onComplete: function () {
                AllAlbum.classList.remove("show"),
                  WinScroll.start(),
                  Container.classList.remove("blur"),
                  Header.classList.remove("blur"),
                  (OverlayDark.innerHTML = ""),
                  (AllAlbum.innerHTML = "");
              },
            }),
            !1
          );
        }));
    }),
    u.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    u.send();
}

function ContentLoad() {
  var n, e, t, o, r, i;
  LinkPage(),
    NavClickFn(),
    Search(),
    FocusText(),
    Option(),
    LinkLoadPopup(),
    ResizeWindows(),
    ("news-details-page" != IDPage &&
      "activities-details-page" != IDPage &&
      "member-details-page" != IDPage &&
      "project-details-page" != IDPage) ||
      (Navigation.querySelector(".nav-item.current").classList.add(
        "active-color"
      ),
      Navigation.querySelector(".nav-item.current").classList.remove(
        "current"
      )),
    "home-page" !== IDPage &&
      (ShowTitlePage(),
      setTimeout(function () {
        onScroll();
      }, 300),
      setTimeout(function () {
        Header.classList.add("show-bg");
      }, 1500),
      (Logo.style.cursor = "pointer"),
      Logo.addEventListener("click", function () {
        Navigation.querySelector("li:first-child a").click();
      })),
    Array.from(Container.querySelectorAll(".item-deg"), function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault(),
          addClass(Body, "no-scroll"),
          Wheel.classList.remove("show"),
          Body.insertAdjacentHTML(
            "beforeend",
            '<div class="loadx" style="display:block"></div>'
          );
        e = document.querySelector(".loadx");
        return (
          gsap.to(e, {
            duration: 0.3,
            opacity: 1,
            ease: "none",
          }),
          OverlayDark.classList.add("show"),
          Load360(this.getAttribute("data-href")),
          !1
        );
      });
    }),
    "home-page" == IDPage &&
      (DrawLogo(),
      OpenTab(),
      SlidePicture.ProHomeSlide(),
      TabContent(),
      Mobile.matches || (initCursor(), initPageCursor()),
      Array.from(
        Container.querySelectorAll(".text-project-home"),
        function (e) {
          var t = e.cloneNode(!0);
          t && (t.classList.add("text-project-clone"), e.parentNode.append(t));
        }
      ),
      Array.from(
        Container.querySelectorAll(".pic-project-home, .item-news-home"),
        function (e) {
          e.addEventListener("click", function () {
            e.querySelector("a") && e.querySelector("a").click();
          });
        }
      ),
      null != document.querySelector(".home-popup") &&
        ((e = 5e3),
        "" !=
          document.querySelector(".home-popup").getAttribute("data-timeshow") &&
          (e = parseInt(
            document.querySelector(".home-popup").getAttribute("data-timeshow")
          )),
        setTimeout(function () {
          var e = document
            .querySelector(".home-popup")
            .getAttribute("data-href");
          return (
            WinScroll.stop(),
            document.querySelector(".overlay-dark").classList.add("show"),
            Body.insertAdjacentHTML(
              "beforeend",
              '<div class="loadx" style="display:block"></div>'
            ),
            popupLoad(e),
            !1
          );
        }, e))),
    "about-page" == IDPage && SlidePicture.SlideThreeObject(),
    "project-details-page" == IDPage &&
      (SlidePicture.SlideTwoObject(),
      SlidePicture.SliderOrderProject(),
      Array.from(
        Container.querySelectorAll(".item-album, .item-news"),
        function (e) {
          e.addEventListener("click", function () {
            e.querySelector("a") && e.querySelector("a").click(),
              e.querySelector("button") && e.querySelector("button").click();
          });
        }
      )),
    "member-details-page" == IDPage &&
      (SlidePicture.SliderOrderProject(),
      Array.from(document.querySelectorAll(".item-news"), function (e) {
        e &&
          e.addEventListener("click", function () {
            e.querySelector("a").click();
          });
      })),
    ("news-page" != IDPage && "activities-page" != IDPage) ||
      ("news-page" == IDPage && SubOverSize(),
      Array.from(document.querySelectorAll(".sub-ajax a"), function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          var t = this.getAttribute("href"),
            e = this.getAttribute("data-name"),
            o =
              (Body.insertAdjacentHTML(
                "beforeend",
                '<div class="loadx" style="display:block"></div>'
              ),
              document.querySelector(".loadx"));
          return (
            gsap.to(o, {
              duration: 0.3,
              opacity: 1,
              ease: "none",
            }),
            Array.from(
              document.querySelectorAll(".sub-ajax li a"),
              function (e) {
                e && e.classList.remove("current");
              }
            ),
            Array.from(
              document.querySelectorAll(
                '.sub-ajax li a[data-name="' + e + '"]'
              ),
              function (e) {
                e.classList.add("current");
              }
            ),
            1 == isFirst &&
              (addURL(this, this.getAttribute("data-name")),
              changeAlternate(
                this.getAttribute("href"),
                this.parentElement.querySelector(".link-change-url"),
                1
              )),
            (isFirst = 1),
            NewsListLoad &&
              gsap.to(NewsListLoad, {
                duration: 0.2,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  PageNewsList(t), (NewsListLoad.innerHTML = "");
                },
              }),
            1 == Details &&
              ((o = window.pageYOffset),
              (e =
                Container.querySelector(".section-outernav") ||
                Container.querySelector(".section-company")),
              (e = Mobile.matches ? e.offsetTop - 60 : e.offsetTop - 40) < o &&
                ScrollTos(e)),
            (Details = 1),
            detectBut(),
            !1
          );
        });
      }),
      (Container.querySelector(".sub-ajax li a.current")
        ? Container.querySelector(".sub-ajax li a.current")
        : Container.querySelector(".sub-ajax li:first-child a")
      ).click()),
    ("news-details-page" != IDPage && "activities-details-page" != IDPage) ||
      (OuterNav && SubOverSize(),
      SlidePicture.SliderRelative(),
      SlidePicture.SliderOrderProject(),
      (n = Container.querySelectorAll(".news-relative .item-news")).forEach(
        function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault();
            var t,
              e = Container.querySelector(".load-content"),
              o = Container.querySelector(".load-details"),
              r =
                (n.forEach(function (e) {
                  e.classList.remove("current");
                }),
                this.classList.add("current"),
                this.querySelector("a").getAttribute("data-details"),
                this.querySelector("a").getAttribute("href"));
            return (
              1 == isFirst &&
                addURL(
                  this.querySelector("a"),
                  this.querySelector("a").getAttribute("data-details")
                ),
              (isFirst = 1) == Details &&
                (Body.insertAdjacentHTML(
                  "beforeend",
                  '<div class="loadx" style="display:block"></div>'
                ),
                (t = document.querySelector(".loadx")),
                gsap.to(t, {
                  duration: 0.3,
                  opacity: 1,
                  ease: "none",
                }),
                (t = e.offsetTop - 60),
                ScrollTos(t)),
              gsap.to(o, {
                duration: 0.5,
                opacity: 0,
                filter: "blur(20px)",
                ease: "none",
                onComplete: function () {
                  NewsLoad(r);
                },
              }),
              !1
            );
          });
        }
      ),
      (Container.querySelector(".news-relative .item-news.current")
        ? Container.querySelector(".news-relative .item-news.current")
        : Container.querySelector(".news-relative .item-news:first-child")
      ).click(),
      Array.from(
        document.querySelectorAll(".project-relative .item-news"),
        function (e) {
          e &&
            e.addEventListener("click", function () {
              e.querySelector("a").click();
            });
        }
      )),
    "shareholder-page" == IDPage &&
      (SubOverSize(),
      Array.from(document.querySelectorAll(".sub-ajax a"), function (e) {
        e.addEventListener("click", function (e) {
          e.preventDefault();
          var t = this.getAttribute("href"),
            e = this.getAttribute("data-name"),
            o =
              (Array.from(
                document.querySelectorAll(".sub-ajax li a"),
                function (e) {
                  e && e.classList.remove("current");
                }
              ),
              Body.insertAdjacentHTML("beforeend", '<div class="loadx"></div>'),
              document.querySelector(".loadx"));
          return (
            gsap.to(o, {
              duration: 0.3,
              opacity: 1,
              ease: "none",
            }),
            Array.from(
              document.querySelectorAll(
                '.sub-ajax li a[data-name="' + e + '"]'
              ),
              function (e) {
                e.classList.add("current");
              }
            ),
            1 == isFirst &&
              (addURL(this, this.getAttribute("data-name")),
              changeAlternate(
                this.getAttribute("href"),
                this.parentElement.querySelector(".link-change-url"),
                1
              )),
            (isFirst = 1),
            ReportListLoad &&
              gsap.to(ReportListLoad, {
                duration: 0.2,
                opacity: 0,
                ease: "none",
                onComplete: function () {
                  LoadReportList(t), (ReportListLoad.innerHTML = "");
                },
              }),
            1 == Details &&
              ((o = window.pageYOffset),
              (e =
                Container.querySelector(".section-outernav") ||
                Container.querySelector(".section-company")),
              (e = Mobile.matches ? e.offsetTop - 60 : e.offsetTop - 40) < o &&
                ScrollTos(e)),
            (Details = 1),
            detectBut(),
            !1
          );
        });
      }),
      (Container.querySelector(".sub-ajax li a.current")
        ? Container.querySelector(".sub-ajax li a.current")
        : Container.querySelector(".sub-ajax li:first-child a")
      ).click()),
    "recruitment-page" == IDPage &&
      (LinkLoadPopup(),
      CustomeSelect(),
      (e = Container.querySelectorAll(".table-recruitment tr")),
      (t = Container.querySelector(".file-mark")),
      e.forEach(function (e) {
        e.addEventListener("click", function () {
          this.querySelector("a").click();
        });
      }),
      t &&
        t.addEventListener("click", function () {
          this.parentNode.querySelector('input[type="file"]').click();
        }),
      document.querySelector(".link-member.current") &&
        setTimeout(function () {
          document.querySelector(".link-member.current").click();
        }, 500)),
    "contact-page" == IDPage &&
      (document.querySelector(".box-footer").classList.add("display-none"),
      setTimeout(function () {
        Mobile.matches || thatScroll.update(), onScroll();
      }, 600)),
    "search-page" == IDPage &&
      ((r = document.querySelectorAll(".item-search").length),
      Array.from(Container.querySelectorAll(".item-search"), function (e) {
        e &&
          e.addEventListener("click", function (e) {
            this.querySelector("a") && this.querySelector("a").click();
          });
      }),
      (o = document.querySelector(".search-view-more")) &&
        ((r = 10),
        (i = document.querySelectorAll(".item-search")).forEach(function (e) {
          e.addEventListener("click", function () {
            this.querySelector("a").click();
          });
        }),
        i.length > r &&
          i.forEach(function (e, t) {
            e.classList.toggle("hide", 10 <= t);
          }),
        o
          .querySelector(".button-viewmore")
          .addEventListener("click", function (e) {
            for (var t = r; t < r + 6; t++)
              i[t] &&
                (i[t].classList.remove("hide"),
                setTimeout(function () {
                  Mobile.matches || thatScroll.update();
                }, 300));
            (r += 6) >= i.length &&
              ((event.target.style.display = "none"), o.remove());
          }))),
    "thankyou-page" == IDPage &&
      Container.querySelector(".flower-notfound").classList.add("show"),
    "notfound-page" == IDPage &&
      Container.querySelector(".flower-notfound").classList.add("show"),
    Array.from(Container.querySelectorAll(".business-home"), function (e) {
      e &&
        e.addEventListener("click", function (e) {
          this.querySelector("a") && this.querySelector("a").click(),
            this.querySelector("button") &&
              this.querySelector("button").click();
        });
    }),
    TriggerSlider(),
    setTimeout(function () {
      Array.from(
        document.querySelectorAll(".box-text-feedback p"),
        function (e) {
          e.classList.add("display-mobile");
        }
      );
    }, 1e3),
    setTimeout(function () {
      // d();
    }, 6e3);
}

function LinkPage() {
  var e = document.querySelectorAll(".link-blank");
  document.querySelectorAll(".link-load, .link-home").forEach(function (e) {
    e.addEventListener("click", function (e) {
      var t, o, r, n;
      return (
        e.preventDefault(),
        this.classList.contains("linking-page") ||
          (this.classList.add("linking-page"),
          Header.classList.remove("hide", "scrolling-down", "show-bg"),
          (e = Header.querySelector(".outer-nav.second")) &&
            e.classList.remove("fixed"),
          NavClick.classList.contains("show")
            ? ((t = 0.2), NavClick.click())
            : (t = 0),
          "home-page" == this.getAttribute("data-name")
            ? ((o = Body),
              (r = 1),
              (document.documentElement.style.background = "#004a8f"))
            : ((o = Container),
              (r = 0.5),
              (document.documentElement.style.background = "#ffffff")),
          gsap.to(PageProgress, {
            width: "100%",
            duration: 0.6,
          }),
          (n = this.href),
          gsap.to(o, {
            opacity: "0",
            duration: r,
            delay: t,
            ease: "power2",
            onComplete: function () {
              window.location = n;
            },
          }),
          gsap.to("#cursor", {
            opacity: "0",
            duration: 0.6,
          })),
        !1
      );
    });
  }),
    e.forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        e = this.href;
        return window.open(e, "_blank"), d(), !1;
      });
    });
}

function VideoLoad(e, d) {
  var t = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");
  t.open("GET", e, !0),
    (t.onload = function () {
      var s, e, t, l, c, u;
      200 <= this.status &&
        this.status < 400 &&
        ((e = this.response),
        (s = document.querySelector(".allvideo")).insertAdjacentHTML(
          "beforeend",
          e
        ),
        document.querySelector("#youtube_js") ||
          (((e = document.createElement("script")).id = "youtube_js"),
          (e.src = "https://www.youtube.com/player_api"),
          (t =
            document.getElementsByTagName("script")[0]).parentNode.insertBefore(
            e,
            t
          )),
        (l = document.querySelector("#view-video")),
        (c = document.querySelector(".video-list"))
          .querySelector(".video-wrap")
          .querySelector("iframe"),
        (u = c.querySelector(".close-video")),
        setTimeout(function () {
          {
            function e() {
              o.play();
            }

            function t() {
              o.pause();
            }
            var o;
            l && (o = document.getElementById("view-video"));
          }
          u.classList.add("goleft"),
            u.addEventListener("click", function () {
              l && t(),
                OverlayDark.classList.remove("show"),
                gsap.to(s, {
                  opacity: "0",
                  duration: 0.5,
                  display: "none",
                  ease: "power2",
                  onComplete: function () {
                    u.classList.remove("goleft"),
                      (s.style.display = "none"),
                      c.remove(),
                      WinScroll.start();
                  },
                });
            });
          var r,
            n,
            i = document.querySelector(".loadx");

          function a(e) {
            Mobile.matches && (e.target.mute(), e.target.playVideo()),
              1 < n.getPlayerState() &&
                ((e = n.getVideoData().title),
                r.querySelector("iframe").setAttribute("title", e));
          }
          gsap.to(i, {
            duration: 0.4,
            opacity: 0,
            delay: 0.4,
            ease: "none",
            onComplete: function () {
              i.remove();
            },
          }),
            d
              ? ((r = c.querySelector(".video-wrap")).insertAdjacentHTML(
                  "beforeend",
                  d
                ),
                (n = new YT.Player("VYT", {
                  events: {
                    onReady: a,
                  },
                })))
              : l && e();
        }, 300));
    }),
    t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
    t.send();
}

function LoadbannerHome() {
  onScroll(),
    EnterSite.remove(),
    (HeaderWidget.style.display = "block"),
    Banner.classList.add("show-banner"),
    Array.from([Footer, Wheel], function (e) {
      e && e.classList.add("show");
    }),
    Header.classList.add("show", "show-bg");
}

function LocationHash() {
  var e = (e = window.location.hash).slice(1),
    t = Container.querySelector(
      ".news-relative .item-news a[data-details='" + e + "']"
    ),
    o = Container.querySelector(
      ".recruitments-relative .item-recuits a[data-details='" + e + "']"
    ),
    r = Container.querySelector(".sub-nav li button[data-name='" + e + "']"),
    e = Container.querySelector(".sub-ajax li a[data-name='" + e + "']");
  Array.from([t, e, r, o], function (e) {
    e && e.click();
  });
}
window.addEventListener("keydown", function (e) {
  var t = e.keyCode || e.which;
  d(),
    38 == t && e.preventDefault(),
    40 == t && e.preventDefault(),
    27 == t &&
      (NavClick.classList.contains("show") && NavClick.click(),
      Regsiters.classList.contains("show") &&
        (Regsiters.classList.remove("show"),
        gsap.fromTo(
          Regsiters.querySelector(".register-form"),
          {
            opacity: "1",
            transform: "translateY(0)",
          },
          {
            duration: 0.6,
            opacity: "0",
            transform: "translateY(5vw)",
          }
        )),
      (e = rightHeader.querySelector(".search-but")).classList.contains(
        "active"
      ) && e.click(),
      Array.from(
        document.querySelectorAll([
          ".close-album, .close-popup, .close-360, .close-pics, .close-search",
        ]),
        function (e) {
          e && e.click();
        }
      ));
}),
  window.addEventListener(
    "scroll",
    function (e) {
      var t = window.pageYOffset;
      Mobile.matches &&
        window.requestAnimationFrame(function () {
          viewItems(t);
        });
    },
    {
      passive: !0,
    }
  ),
  window.addEventListener("orientationchange", function (e) {
    ResizeWindows();
  }),
  window.addEventListener(
    "resize",
    debounce(function (e) {
      Container.querySelector(".outer-nav") && (SubOverSize(), detectBut()),
        ResizeWindows();
      var t = document.querySelector(".scrollbar");
      Mobile.matches,
        Mobile.matches && t
          ? (thatScroll.destroy(), viewItems(0))
          : t
          ? thatScroll.update()
          : (ScrollBody(), viewItems(0));
    }, 350)
  ),
  EnterSite.addEventListener("click", function () {
    Appear(), Done(), SlidePicture.slideBanner();
    var e = Mask.querySelector(".mask-color");
    this.classList.add("already"),
      (this.style.pointerEvents = "none"),
      gsap.to(e, {
        duration: 1.2,
        delay: 0.3,
        y: "-100%",
        ease: "power2.out",
      }),
      gsap.to(LoadIcon, {
        duration: 2,
        opacity: 0,
        y: "-50%",
        filter: "blur(20px)",
        ease: "power2.out",
      }),
      gsap.to([Flower, EnterSite], {
        duration: 2,
        scale: 1.6,
        opacity: 0,
        filter: "blur(20px)",
        ease: "power2.out",
        onComplete: function () {
          Mask.remove(), LoadIcon.remove();
        },
      }),
      setTimeout(function () {
        LoadbannerHome(), (Mask.style.pointerEvents = "none");
      }, 800);
  }),
  (window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }),
  (window.onpopstate = function (e) {
    e.preventDefault();
    var t,
      e = document.querySelector(".httpserver").innerHTML;
    null !== history.state
      ? ((t = history.state.path), history.state.dataName, history.state.title)
      : (t = document.URL);
    t.replace(e, "").split("/");
    null != document.querySelector(".close-video") &&
      document.querySelector(".close-video").click(),
      null != document.querySelector(".close-album") &&
        document.querySelector(".close-album").click(),
      null != document.querySelector(".close-pics") &&
        document.querySelector(".close-pics").click(),
      null != document.querySelector(".close-map") &&
        document.querySelector(".close-map").click(),
      null != document.querySelector(".close-popup") &&
        document.querySelector(".close-popup").click(),
      (document.querySelector("#news-details-page") ||
        document.querySelector("#activities-details-page")) &&
        document.querySelectorAll(".item-news a").forEach(function (e) {
          e.href == t && e.click();
        }),
      document.querySelector("#recruitment-page") &&
        document.querySelectorAll(".link-member").forEach(function (e) {
          e.href == t && e.click();
        }),
      document.querySelectorAll(".sub-nav li a").forEach(function (e) {
        e.href == t && e.click();
      }),
      document.querySelectorAll(".sub-nav li button").forEach(function (e) {
        e.dataset.href == t && e.click();
      }),
      document.querySelectorAll(".sub-company li a").forEach(function (e) {
        e.href == t && e.click();
      }),
      document.querySelectorAll(".main-menu li a").forEach(function (e) {
        e.href == t && e.click();
      });
  }),
  // "serviceWorker" in navigator &&
  //   window.addEventListener("load", function () {
  //     setTimeout(function () {
  //       navigator.serviceWorker.register(httpserver + "sw.js").then(
  //         function (e) {
  //           console.log(
  //             "ServiceWorker registration successful with scope: ",
  //             e.scope
  //           );
  //         },
  //         function (e) {
  //           console.log("ServiceWorker registration failed: ", e);
  //         }
  //       );
  //     }, 5e3);
  //   });

  function onChange(e) {
    document.querySelector(".file-name").innerHTML = e.files[0]
      ? e.files[0].name
      : document.querySelector(".file-name").getAttribute("data-default");
  };

function ShowMessage(e, t, n) {
  (n = n || "mess-alert"),
    document.querySelector(".contact-success") ||
      (document
        .querySelector("body")
        .insertAdjacentHTML(
          "beforeend",
          "<div  class='contact-success " +
            t +
            " " +
            n +
            "'>" +
            e +
            "<div class='close-message'></div></div>"
        ),
      gsap.to(document.querySelector(".contact-success"), {
        duration: 0.5,
        opacity: 1,
        bottom: "10px",
        ease: "none",
        onComplete: function () {},
      })),
    document
      .querySelector(".close-message")
      .addEventListener("click", function (e) {
        return (
          e.preventDefault(),
          gsap.to(document.querySelector(".contact-success"), {
            duration: 0.5,
            opacity: 0,
            bottom: "-300px",
            ease: "none",
            onComplete: function () {
              document.querySelector(".contact-success").remove();
            },
          }),
          !1
        );
      });
}

function isNumber(e) {
  var t = e.which || e.keyCode;
  return !(46 != t && 31 < t && (t < 48 || 57 < t)) || (e.returnValue = !1);
}

function serialize(e) {
  if (e && "FORM" === e.nodeName) {
    for (var t, n = [], r = e.elements.length - 1; 0 <= r; r -= 1)
      if ("" !== e.elements[r].name)
        switch (e.elements[r].nodeName) {
          case "INPUT":
            switch (e.elements[r].type) {
              case "text":
              case "tel":
              case "email":
              case "hidden":
              case "password":
              case "button":
              case "reset":
              case "submit":
                n.push(
                  e.elements[r].name +
                    "=" +
                    encodeURIComponent(e.elements[r].value)
                );
                break;
              case "checkbox":
              case "radio":
                e.elements[r].checked &&
                  n.push(
                    e.elements[r].name +
                      "=" +
                      encodeURIComponent(e.elements[r].value)
                  );
            }
            break;
          case "file":
            break;
          case "TEXTAREA":
            n.push(
              e.elements[r].name + "=" + encodeURIComponent(e.elements[r].value)
            );
            break;
          case "SELECT":
            switch (e.elements[r].type) {
              case "select-one":
                n.push(
                  e.elements[r].name +
                    "=" +
                    encodeURIComponent(e.elements[r].value)
                );
                break;
              case "select-multiple":
                for (t = e.elements[r].options.length - 1; 0 <= t; t -= 1)
                  e.elements[r].options[t].selected &&
                    n.push(
                      e.elements[r].name +
                        "=" +
                        encodeURIComponent(e.elements[r].options[t].value)
                    );
            }
            break;
          case "BUTTON":
            switch (e.elements[r].type) {
              case "reset":
              case "submit":
              case "button":
                n.push(
                  e.elements[r].name +
                    "=" +
                    encodeURIComponent(e.elements[r].value)
                );
            }
        }
    return n.join("&");
  }
}

function hideerror() {
  document.querySelectorAll(".formError").forEach(function (e) {
    e.remove();
  });
}

function hidemsg() {
  null != document.querySelector(".contact-success") &&
    document.querySelector(".contact-success").remove();
}

function checkEmail(e) {
  e = document.getElementById(e);
  return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    e.value
  );
}

function checkNull(e, t, n, r, o, m) {
  return (
    ("" !=
      (m =
        1 == m
          ? null != document.getElementById(e)
            ? document.getElementById(e).innerHTML.trim()
            : ""
          : null != document.getElementById(e)
          ? document.getElementById(e).value.trim()
          : "") &&
      m != n) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((m = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((n = document.createElement("div")).className = "formErrorContent"),
        (n.id = "error_" + e),
        (n.innerHTML = t),
        m.appendChild(n),
        document.getElementById(e).after(m)),
    !1)
  );
}

function checkPhone(e, t, n, r, o) {
  var m =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  return (
    !("" == m || m == n || m.length < 10 || 10 < m.length) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((n = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((m = document.createElement("div")).className = "formErrorContent"),
        (m.id = "error_" + e),
        (m.innerHTML = t),
        n.appendChild(m),
        document.getElementById(e).after(n)),
    !1)
  );
}

function checkMail(e, t, n, r, o) {
  var m, c;
  return (
    !!checkEmail(e) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((m = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((c = document.createElement("div")).className = "formErrorContent"),
        (c.id = "error_" + e),
        (c.innerHTML = t),
        m.appendChild(c),
        document.getElementById(e).after(m)),
    !1)
  );
}

function checkCaptcha(e, t, n, r, o) {
  var m, c;
  return (
    (null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "") ==
      (null != document.getElementById(e + "_bk")
        ? document.getElementById(e + "_bk").value.trim()
        : "") ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((m = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((c = document.createElement("div")).className = "formErrorContent"),
        (c.id = "error_" + e),
        (c.innerHTML = t),
        m.appendChild(c),
        document.getElementById(e).after(m)),
    !1)
  );
}

function checkNullTwo(e, t, n, r, o, m, c) {
  var d =
      null != document.getElementById(e)
        ? document.getElementById(e).value.trim()
        : "",
    t =
      null != document.getElementById(t)
        ? document.getElementById(t).value.trim()
        : "";
  if ("" == d || d == r || "" == t || t == o)
    return (
      null != document.getElementById("error_" + e)
        ? (document.getElementById("error_" + e).innerHTML = n)
        : (((d = document.createElement("div")).className =
            "nameformError parentFormfrm_contact formError"),
          ((r = document.createElement("div")).className = "formErrorContent"),
          (r.id = "error_" + e),
          (r.innerHTML = n),
          d.appendChild(r),
          document.getElementById(e).after(d)),
      !1
    );
}

function checkSelect(e, t, n, r, o) {
  var m =
    null != document.getElementById(e) ? document.getElementById(e).value : "";
  return (
    ("" != m && m != n && 0 != m) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((n = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((m = document.createElement("div")).className = "formErrorContent"),
        (m.id = "error_" + e),
        (m.innerHTML = t),
        n.appendChild(m),
        document.getElementById(e).after(n)),
    !1)
  );
}

function checkComment(e, t, n, r, o, m) {
  var c =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  return (
    1 !=
      (null != document.getElementById(t) &&
        document.getElementById(t).checked) ||
    ("" != c && c != r) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = n)
      : (((t = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((c = document.createElement("div")).className = "formErrorContent"),
        (c.id = "error_" + e),
        (c.innerHTML = n),
        t.appendChild(c),
        document.getElementById(e).after(t)),
    !1)
  );
}

function checkNhucau(e, t, n, r, o, m) {
  var c =
      null != document.getElementById(e) && document.getElementById(e).checked,
    t =
      null != document.getElementById(t) && document.getElementById(t).checked;
  if (0 == t && 0 == c)
    return (
      null != document.getElementById("error_" + e)
        ? (document.getElementById("error_" + e).innerHTML = n)
        : (((t = document.createElement("div")).className =
            "nameformError parentFormfrm_contact formError"),
          ((c = document.createElement("div")).className = "formErrorContent"),
          (c.id = "error_" + e),
          (c.innerHTML = n),
          t.appendChild(c),
          document.getElementById(e).after(t)),
      !1
    );
  return !0;
}

function checkCheckbox(e, t, n, r, o) {
  var m,
    c,
    d = !1;
  return (
    document.querySelectorAll("." + e).forEach(function (e) {
      1 == e.checked && (d = !0);
    }),
    0 != d ||
      (null != document.getElementById("error_" + e)
        ? (document.getElementById("error_" + e).innerHTML = t)
        : (((m = document.createElement("div")).className =
            "nameformError parentFormfrm_contact formError"),
          ((c = document.createElement("div")).className = "formErrorContent"),
          (c.id = "error_" + e),
          (c.innerHTML = t),
          m.appendChild(c),
          document.querySelector(".listcheckbox").after(m)),
      !1)
  );
}

function checkQuocTich(e, t, n, r, o) {
  var m, c;
  return (
    0 !=
      (null != document.getElementById(e) &&
        document.getElementById(e).checked) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((m = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((c = document.createElement("div")).className = "formErrorContent"),
        (c.id = "error_" + e),
        (c.innerHTML = t),
        m.appendChild(c),
        document.getElementById(e).after(m)),
    !1)
  );
}

function checkCMND(e, t, n, r, o) {
  var m =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  return (
    ("" != m && m != n && (9 == m.length || 12 == m.length)) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((n = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((m = document.createElement("div")).className = "formErrorContent"),
        (m.id = "error_" + e),
        (m.innerHTML = t),
        n.appendChild(m),
        document.getElementById(e).after(n)),
    !1)
  );
}

function checkPassport(e, t, n, r, o) {
  var m =
    null != document.getElementById(e)
      ? document.getElementById(e).value.trim()
      : "";
  return (
    !("" == m || m == n || 12 < m.length) ||
    (null != document.getElementById("error_" + e)
      ? (document.getElementById("error_" + e).innerHTML = t)
      : (((n = document.createElement("div")).className =
          "nameformError parentFormfrm_contact formError"),
        ((m = document.createElement("div")).className = "formErrorContent"),
        (m.id = "error_" + e),
        (m.innerHTML = t),
        n.appendChild(m),
        document.getElementById(e).after(n)),
    !1)
  );
}

function parseDate(e) {
  e = e.split("/");
  return new Date(e[2], e[1], e[0]);
}

function checkDate(e, t, n, r, o, m) {
  var c,
    d,
    u =
      null != document.getElementById(e)
        ? document.getElementById(e).value.trim()
        : "",
    l = u.split("/"),
    l =
      ((null != l[1] && null != l[2]) ||
        (null != document.getElementById("error_" + e)
          ? (document.getElementById("error_" + e).innerHTML = t)
          : (((c = document.createElement("div")).className =
              "nameformError parentFormfrm_contact formError"),
            ((d = document.createElement("div")).className =
              "formErrorContent"),
            (d.id = "error_" + e),
            (d.innerHTML = t),
            c.appendChild(d),
            document.getElementById(e).after(c))),
      l[0] + "/" + l[1] + "/" + (parseInt(l[2]) + 18)),
    a = new Date(),
    l = parseDate(l).getTime(),
    a = parseDate(
      a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear()
    ).getTime();
  return "" == u || u == n
    ? (null != document.getElementById("error_" + e)
        ? (document.getElementById("error_" + e).innerHTML = t)
        : (((c = document.createElement("div")).className =
            "nameformError parentFormfrm_contact formError"),
          ((d = document.createElement("div")).className = "formErrorContent"),
          (d.id = "error_" + e),
          (d.innerHTML = t),
          c.appendChild(d),
          document.getElementById(e).after(c)),
      !1)
    : !(a < l) ||
        (null != document.getElementById("error_" + e)
          ? (document.getElementById("error_" + e).innerHTML = m)
          : (((c = document.createElement("div")).className =
              "nameformError parentFormfrm_contact formError"),
            ((d = document.createElement("div")).className =
              "formErrorContent"),
            (d.id = "error_" + e),
            (d.innerHTML = m),
            c.appendChild(d),
            document.getElementById(e).after(c)),
        !1);
}
var httpserver = document.querySelector(".httpserver").innerHTML;

function _scrollToElement(e, t) {
  e = Math.round(e.getBoundingClientRect().top);
  scrollToY(document.scrollingElement.scrollTop + e, t);
}

function validatecontact() {
  hidemsg();
  var e = !0,
    t = checkNull(
      "name",
      document.getElementById("name").getAttribute("data-error"),
      document.getElementById("name").getAttribute("data-default"),
      "40",
      "-270"
    ),
    n = checkPhone(
      "phone",
      document.getElementById("phone").getAttribute("data-error"),
      document.getElementById("phone").getAttribute("data-default"),
      "40",
      "-270"
    ),
    r = checkMail(
      "email",
      document.getElementById("email").getAttribute("data-error"),
      document.getElementById("email").getAttribute("data-default"),
      "40",
      "-270"
    );
  return (t && n && r) || ((e = !1), setTimeout(hideerror, 5e3)), e;
}

function sendRecrutmentForm() {
  null != document.getElementById("recruitment-send") &&
    (document
      .getElementById("btn-recruitment-submit")
      .addEventListener("click", function (e) {
        var t, n, r, o, m;
        return (
          e.preventDefault(),
          1 ==
          (hidemsg(),
          (e = !0),
          (t = checkNull(
            "namerecruitment",
            document
              .getElementById("namerecruitment")
              .getAttribute("data-error"),
            document
              .getElementById("namerecruitment")
              .getAttribute("data-default"),
            "40",
            "-270"
          )),
          (n = checkPhone(
            "phonerecruitment",
            document
              .getElementById("phonerecruitment")
              .getAttribute("data-error"),
            document
              .getElementById("phonerecruitment")
              .getAttribute("data-default"),
            "40",
            "-270"
          )),
          (r = checkMail(
            "emailrecruitment",
            document
              .getElementById("emailrecruitment")
              .getAttribute("data-error"),
            document
              .getElementById("emailrecruitment")
              .getAttribute("data-default"),
            "40",
            "-270"
          )),
          (o = checkSelect(
            "recruitment_id",
            document
              .getElementById("recruitment_id")
              .getAttribute("data-error"),
            document
              .getElementById("recruitment_id")
              .getAttribute("data-default"),
            "40",
            "-270"
          )),
          (m = checkNull(
            "attach_file",
            document.getElementById("attach_file").getAttribute("data-error"),
            document.getElementById("attach_file").getAttribute("data-default"),
            "40",
            "-270",
            1
          )),
          (t && n && r && o && m) || ((e = !1), setTimeout(hideerror, 5e3)),
          e)
            ? (document
                .getElementById("btn-recruitment-submit")
                .setAttribute("disabled", "disabled"),
              (document.getElementById(
                "btn-recruitment-submit"
              ).style.pointerEvents = "none"),
              ((t = document.createElement("div")).className = "loadx"),
              (t.style.display = "block"),
              (t.style.opacity = 1),
              document.body.after(t),
              document.getElementById("recruitment-send").submit())
            : document.querySelectorAll(".formError").forEach(function (e) {
                e.addEventListener("click", function (e) {
                  this.remove();
                });
              }),
          !1
        );
      }),
    null != document.getElementById("phonerecruitment") &&
      document
        .getElementById("phonerecruitment")
        .addEventListener("keypress", isNumber),
    document
      .getElementById("recruitment-send")
      .addEventListener("keydown", function (e) {
        13 === e.keyCode &&
          (e.preventDefault(),
          document.getElementById("btn-recruitment-submit").click());
      }));
}

function stopUpload(e) {
  return (
    document.querySelector(".loadx").remove(),
    "200" == e.status
      ? (document.getElementById("recruitment-send").reset(),
        document.querySelectorAll(".holder").forEach(function (e) {
          e.classList.remove("hide");
        }),
        "" != e.href
          ? (window.location = e.href)
          : ShowMessage(e.message, "color-yellow", "mess-success"))
      : ShowMessage(e.message, "color-yellow", "mess-alert"),
    (document.getElementById("fileInput").value = ""),
    (document.querySelector(".file-name").innerHTML = document
      .querySelector(".file-name")
      .getAttribute("data-default")),
    document
      .getElementById("btn-recruitment-submit")
      .removeAttribute("disabled"),
    (document.getElementById("btn-recruitment-submit").style.pointerEvents =
      "auto"),
    setTimeout(hidemsg, 5e3),
    !0
  );
}

function validateregister() {
  hidemsg();
  var e = !0,
    t = checkMail(
      "emailregister",
      document.getElementById("emailregister").getAttribute("data-error"),
      document.getElementById("emailregister").getAttribute("data-default"),
      "40",
      "-270"
    ),
    n = checkNull(
      "nameregister",
      document.getElementById("nameregister").getAttribute("data-error"),
      document.getElementById("nameregister").getAttribute("data-default"),
      "40",
      "-270"
    ),
    r = checkPhone(
      "phoneregister",
      document.getElementById("phoneregister").getAttribute("data-error"),
      document.getElementById("phoneregister").getAttribute("data-default"),
      "40",
      "-270"
    );
  return (t && n && r) || ((e = !1), setTimeout(hideerror, 5e3)), e;
}

function validatesubscribe() {
  hidemsg();
  var e = !0;
  return (
    checkMail(
      "emailsubscribe",
      document.getElementById("emailsubscribe").getAttribute("data-error"),
      document.getElementById("emailsubscribe").getAttribute("data-default"),
      "40",
      "-270"
    ) || ((e = !1), setTimeout(hideerror, 5e3)),
    e
  );
}

function validateregisterproject() {
  hidemsg();
  var e = !0,
    t = checkNull(
      "nameregisterproject",
      document.getElementById("nameregisterproject").getAttribute("data-error"),
      document
        .getElementById("nameregisterproject")
        .getAttribute("data-default"),
      "40",
      "-270"
    ),
    n = checkPhone(
      "phoneregisterproject",
      document
        .getElementById("phoneregisterproject")
        .getAttribute("data-error"),
      document
        .getElementById("phoneregisterproject")
        .getAttribute("data-default"),
      "40",
      "-270"
    ),
    r = checkMail(
      "emailregisterproject",
      document
        .getElementById("emailregisterproject")
        .getAttribute("data-error"),
      document
        .getElementById("emailregisterproject")
        .getAttribute("data-default"),
      "40",
      "-270"
    );
  return (t && n && r) || ((e = !1), setTimeout(hideerror, 5e3)), e;
}

function _popupSubmit() {
  null != document.getElementById("popup_form") &&
    (document
      .getElementById("btn-popup-submit")
      .addEventListener("click", function (e) {
        var n, t, r;
        return (
          e.preventDefault(),
          1 ==
          (hidemsg(),
          (e = !0),
          (t = checkNull(
            "namepopup",
            document.getElementById("namepopup").getAttribute("data-error"),
            document.getElementById("namepopup").getAttribute("data-default"),
            "40",
            "-270"
          )),
          (r = checkPhone(
            "phonepopup",
            document.getElementById("phonepopup").getAttribute("data-error"),
            document.getElementById("phonepopup").getAttribute("data-default"),
            "40",
            "-270"
          )),
          (email = checkMail(
            "emailpopup",
            document.getElementById("emailpopup").getAttribute("data-error"),
            document.getElementById("emailpopup").getAttribute("data-default"),
            "40",
            "-270"
          )),
          (t && r && email) || ((e = !1), setTimeout(hideerror, 5e3)),
          e)
            ? (document
                .getElementById("btn-popup-submit")
                .setAttribute("disabled", "disabled"),
              (document.getElementById("btn-popup-submit").style.pointerEvents =
                "none"),
              ((t = document.createElement("div")).className = "loadx"),
              (t.style.display = "block"),
              (t.style.opacity = 1),
              document.body.after(t),
              (document.querySelector(".loadx").style.display = "block"),
              (n = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP")).open(
                "POST",
                httpserver + "send-popup-ajax.html",
                !0
              ),
              (r = serialize(document.forms.popup_form)),
              (n.onreadystatechange = function () {
                var e, t;
                4 == n.readyState &&
                  200 == n.status &&
                  (document.querySelector(".loadx").remove(),
                  "200" == (e = JSON.parse(n.responseText)).status
                    ? (document.getElementById("popup_form").reset(),
                      ((t = document.createElement("div")).className =
                        "contact-success color-blue"),
                      (t.innerHTML = e.message),
                      document
                        .querySelector(".details-popup-home .close-popup")
                        .click(),
                      document
                        .querySelectorAll(".holder")
                        .forEach(function (e) {
                          e.classList.remove("hide");
                        }))
                    : (((t = document.createElement("div")).className =
                        "contact-success color-red"),
                      (t.innerHTML = e.message)),
                  document.querySelector(".overlay-dark").after(t),
                  document
                    .getElementById("btn-popup-submit")
                    .removeAttribute("disabled"),
                  (document.getElementById(
                    "btn-popup-submit"
                  ).style.pointerEvents = "auto"),
                  setTimeout(hidemsg, 5e3));
              }),
              n.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n.send(r))
            : document.querySelectorAll(".formError").forEach(function (e) {
                e.addEventListener("click", function (e) {
                  this.remove();
                });
              }),
          !1
        );
      }),
    null != document.getElementById("phonepopup") &&
      document
        .getElementById("phonepopup")
        .addEventListener("keypress", isNumber),
    document
      .getElementById("popup_form")
      .addEventListener("keydown", function (e) {
        document.getElementsByTagName("textarea") === document.activeElement &&
          13 === e.keyCode &&
          document.getElementById("btn-popup-submit").click();
      }));
}
null != document.getElementById("contact_form") &&
  (document
    .getElementById("btn-contact-submit")
    .addEventListener("click", function (e) {
      var t, n;
      return (
        e.preventDefault(),
        1 == validatecontact()
          ? (document
              .getElementById("btn-contact-submit")
              .setAttribute("disabled", "disabled"),
            (document.getElementById("btn-contact-submit").style.pointerEvents =
              "none"),
            ((e = document.createElement("div")).className = "loadx"),
            (e.style.display = "block"),
            (e.style.opacity = 1),
            document.body.after(e),
            (document.querySelector(".loadx").style.display = "block"),
            (t = document
              .querySelector("#btn-contact-submit")
              .getAttribute("data-page")),
            (n = window.XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP")).open(
              "POST",
              httpserver +
                "submit_contact.php&language=" +
                document.querySelector("html").getAttribute("lang"),
              !0
            ),
            (e = serialize(document.forms.contact_form)),
            (n.onreadystatechange = function () {
              var e;
              4 == n.readyState &&
                200 == n.status &&
                (document.querySelector(".loadx").remove(),
                "200" == (e = JSON.parse(n.responseText)).status
                  ? (null != document.querySelector(".close-popup") &&
                      document.querySelector(".close-popup").click(),
                    document.getElementById("contact_form").reset(),
                    "" != t
                      ? (window.location = t)
                      : ShowMessage(e.message, "color-yellow", "mess-success"),
                    document.querySelectorAll(".holder").forEach(function (e) {
                      e.classList.remove("hide");
                    }))
                  : ShowMessage(e.message, "color-yellow", "mess-alert"),
                document
                  .getElementById("btn-contact-submit")
                  .removeAttribute("disabled"),
                (document.getElementById(
                  "btn-contact-submit"
                ).style.pointerEvents = "auto"),
                setTimeout(hidemsg, 5e3));
            }),
            n.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded"
            ),
            n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
            n.send(e))
          : document.querySelectorAll(".formError").forEach(function (e) {
              e.addEventListener("click", function (e) {
                this.remove();
              });
            }),
        !1
      );
    }),
  null != document.getElementById("phone") &&
    document.getElementById("phone").addEventListener("keypress", isNumber),
  document
    .getElementById("contact_form")
    .addEventListener("keydown", function (e) {
      document.getElementsByTagName("textarea") === document.activeElement &&
        13 === e.keyCode &&
        document.getElementById("btn-contact-submit").click();
    })),
  null != document.getElementById("register") &&
    (document
      .getElementById("btn-register-submit")
      .addEventListener("click", function (e) {
        var t, n;
        return (
          e.preventDefault(),
          1 == validateregister()
            ? (document
                .getElementById("btn-register-submit")
                .setAttribute("disabled", "disabled"),
              (document.getElementById(
                "btn-register-submit"
              ).style.pointerEvents = "none"),
              ((e = document.createElement("div")).className = "loadx"),
              (e.style.display = "block"),
              (e.style.opacity = 1),
              document.body.after(e),
              (t = document
                .querySelector("#btn-register-submit")
                .getAttribute("data-page")),
              (n = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP")).open(
                "POST",
                httpserver +
                  "send-register-ajax.html&language=" +
                  document.querySelector("html").getAttribute("lang"),
                !0
              ),
              (e = serialize(document.forms.register)),
              (n.onreadystatechange = function () {
                var e;
                4 == n.readyState &&
                  200 == n.status &&
                  ((e = JSON.parse(n.responseText)),
                  document.querySelector(".loadx").remove(),
                  "200" == e.status
                    ? (document.getElementById("register").reset(),
                      document
                        .querySelectorAll(".holder")
                        .forEach(function (e) {
                          e.classList.remove("hide");
                        }),
                      "" != t
                        ? (window.location = t)
                        : (document.querySelector(".close-regis").click(),
                          ShowMessage(
                            e.message,
                            "color-yellow",
                            "mess-success"
                          )))
                    : ShowMessage(e.message, "color-yellow", "mess-alert"),
                  document
                    .getElementById("btn-register-submit")
                    .removeAttribute("disabled"),
                  (document.getElementById(
                    "btn-register-submit"
                  ).style.pointerEvents = "auto"),
                  setTimeout(hidemsg, 5e3));
              }),
              n.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n.send(e))
            : document.querySelectorAll(".formError").forEach(function (e) {
                e.addEventListener("click", function (e) {
                  this.remove();
                });
              }),
          !1
        );
      }),
    null != document.getElementById("phoneregister") &&
      document
        .getElementById("phoneregister")
        .addEventListener("keypress", isNumber),
    document
      .getElementById("register")
      .addEventListener("keydown", function (e) {
        13 === e.keyCode &&
          (e.preventDefault(),
          document.getElementById("btn-register-submit").click());
      })),
  null != document.getElementById("subscribe") &&
    (document
      .getElementById("btn-subscribe-submit")
      .addEventListener("click", function (e) {
        var t, n;
        return (
          e.preventDefault(),
          1 == validatesubscribe()
            ? (document
                .getElementById("btn-subscribe-submit")
                .setAttribute("disabled", "disabled"),
              (document.getElementById(
                "btn-subscribe-submit"
              ).style.pointerEvents = "none"),
              ((e = document.createElement("div")).className = "loadx"),
              (e.style.display = "block"),
              (e.style.opacity = 1),
              document.body.after(e),
              (t = document
                .querySelector("#btn-subscribe-submit")
                .getAttribute("data-page")),
              (n = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP")).open(
                "POST",
                httpserver +
                  "send-subscribe-ajax.html&language=" +
                  document.querySelector("html").getAttribute("lang"),
                !0
              ),
              (e = serialize(document.forms.subscribe)),
              (n.onreadystatechange = function () {
                var e;
                4 == n.readyState &&
                  200 == n.status &&
                  ((e = JSON.parse(n.responseText)),
                  document.querySelector(".loadx").remove(),
                  "200" == e.status
                    ? (document.getElementById("subscribe").reset(),
                      document
                        .querySelectorAll(".holder")
                        .forEach(function (e) {
                          e.classList.remove("hide");
                        }),
                      "" != t
                        ? (window.location = t)
                        : (document.querySelector(".close-regis").click(),
                          ShowMessage(
                            e.message,
                            "color-yellow",
                            "mess-success"
                          )))
                    : ShowMessage(e.message, "color-yellow", "mess-alert"),
                  document
                    .getElementById("btn-subscribe-submit")
                    .removeAttribute("disabled"),
                  (document.getElementById(
                    "btn-subscribe-submit"
                  ).style.pointerEvents = "auto"),
                  setTimeout(hidemsg, 5e3));
              }),
              n.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n.send(e))
            : document.querySelectorAll(".formError").forEach(function (e) {
                e.addEventListener("click", function (e) {
                  this.remove();
                });
              }),
          !1
        );
      }),
    document
      .getElementById("subscribe")
      .addEventListener("keydown", function (e) {
        13 === e.keyCode &&
          (e.preventDefault(),
          document.getElementById("btn-subscribe-submit").click());
      })),
  null != document.getElementById("registerproject_form") &&
    (document
      .getElementById("btn-registerproject-submit")
      .addEventListener("click", function (e) {
        var t, n;
        return (
          e.preventDefault(),
          1 == validateregisterproject()
            ? (document
                .getElementById("btn-registerproject-submit")
                .setAttribute("disabled", "disabled"),
              (document.getElementById(
                "btn-registerproject-submit"
              ).style.pointerEvents = "none"),
              ((e = document.createElement("div")).className = "loadx"),
              (e.style.display = "block"),
              (e.style.opacity = 1),
              document.body.after(e),
              (t = document
                .querySelector("#btn-subscribe-submit")
                .getAttribute("data-page")),
              (n = window.XMLHttpRequest
                ? new XMLHttpRequest()
                : new ActiveXObject("Microsoft.XMLHTTP")).open(
                "POST",
                httpserver + "send-registerproject-ajax.html",
                !0
              ),
              (e = serialize(document.forms.registerproject_form)),
              (n.onreadystatechange = function () {
                var e;
                4 == n.readyState &&
                  200 == n.status &&
                  (document.querySelector(".loadx").remove(),
                  "200" == (e = JSON.parse(n.responseText)).status
                    ? (document.getElementById("registerproject_form").reset(),
                      document
                        .querySelectorAll(".holder")
                        .forEach(function (e) {
                          e.classList.remove("hide");
                        }),
                      "" != t
                        ? (window.location = t)
                        : ShowMessage(
                            e.message,
                            "color-yellow",
                            "mess-success"
                          ))
                    : ShowMessage(e.message, "color-yellow", "mess-alert"),
                  document
                    .getElementById("btn-registerproject-submit")
                    .removeAttribute("disabled"),
                  (document.getElementById(
                    "btn-registerproject-submit"
                  ).style.pointerEvents = "auto"),
                  setTimeout(hidemsg, 5e3));
              }),
              n.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
              n.send(e))
            : document.querySelectorAll(".formError").forEach(function (e) {
                e.addEventListener("click", function (e) {
                  this.remove();
                });
              }),
          !1
        );
      }),
    null != document.getElementById("phoneregisterproject") &&
      document
        .getElementById("phoneregisterproject")
        .addEventListener("keypress", isNumber),
    document
      .getElementById("registerproject_form")
      .addEventListener("keydown", function (e) {
        document.getElementsByTagName("textarea") === document.activeElement &&
          13 === e.keyCode &&
          document.getElementById("btn-registerproject-submit").click();
      }));
