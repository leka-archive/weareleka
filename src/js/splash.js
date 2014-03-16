spweb.utils = function () {
	return {
		getQueryParameter: function (b, a) {
			var a = a || window.location.search,
				b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"),
				c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
			return null == c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
		},
		redirect: function (b) {
			window.location.href = b
		},
		getRandomInt: function (b, a) {
			return Math.floor(Math.random() * (a - b + 1)) + b
		},
		asyncLoadJs: function (b, a) {
			var a = "function" === typeof a ? a : !1,
				c = c || window.document,
				d = c.createElement("script"),
				c = c.getElementsByTagName("script")[0];
			d.async = "async";
			d.src = b;
			d.onload = d.onreadystatechange = function () {
				if (d.readyState) {
					if ("loaded" == d.readyState || "complete" == d.readyState) d.onreadystatechange = null, a && a()
				}
				else a && a()
			};
			c.parentNode.insertBefore(d, c)
		},
		inherit: function (b, a) {
			function c() {}
			c.prototype = a.prototype;
			b.prototype = new c;
			b.prototype.constructor = b
		},
		shuffle: function (b) {
			var a, c, d;
			for (a = b.length - 1; 0 < a; a--) c = Math.floor(Math.random() * (a + 1)), d = b[a], b[a] = b[c], b[c] = d;
			return b
		}
	}
}();

spweb.Media = function () {
	this._defaultCloudfrontUrl = "//d2us6zencw9qvn.cloudfront.net/video-splash/";
	this._defaultDirectUrl = "//s3.amazonaws.com/aro.spotify/video-splash/"
};
spweb.Media.prototype._scale = function (b, c, d, a) {
	var e = c / d,
	f = a ? a.width() : spweb.user.isMobile() ? $(document).width() : $(window).width(),
	a = a ? a.height() : spweb.user.isMobile() ? $(document).height() : $(window).height(),
	g = f / a;
	e > g ? b.height(a).width("auto").removeClass("is-vertical").addClass("is-horizontal").css("marginTop", 0).css("marginLeft", -(c / 2 | 0)) : e < g ? b.width(f).height("auto").removeClass("is-horizontal").css("marginLeft", 0).addClass("is-vertical").css("marginTop", -(d / 2 | 0)) : b.width("100%").height("auto").removeClass("is-horizontal").removeClass("is-vertical").css("margin", 0)
};
spweb.Media.prototype.getBaseCdnUrl = function (b) {
	return "chrome" == spweb.user.getBrowser().toLowerCase() ? b.directUrl : b.cloudfrontUrl
};

spweb.Video = function (a) {
	spweb.Media.call(this);
	this.video = this.wrapper = null;
	this.supportedFormats = [{
		type: "video/mp4",
		ext: "mp4"
	}, {
		type: "video/webm",
		ext: "webm"
	}];
	this.options = {};
	this.options.container = null;
	this.options.videos = ["moments1", "moments2"];
	this.options.cloudfrontUrl = this._defaultCloudfrontUrl;
	this.options.directUrl = this._defaultDirectUrl;
	jQuery.extend(this.options, a);
	this.baseUrl = this.getBaseCdnUrl({
		cloudfrontUrl: this.options.cloudfrontUrl,
		directUrl: this.options.directUrl
	})
};
spweb.utils.inherit(spweb.Video, spweb.Media);
spweb.Video.prototype.scale = function (a) {
	var c = a.width() || a.prop("videoWidth"),
	e = a.height() || a.prop("videoHeight");
	this._scale(a, c, e, this.options.container)
};
spweb.Video.prototype.init = function () {
	var a = this;
	this.wrapper = $("<div />", {
		id: "video-main",
		"class": "video-main"
	});
	spweb.utils.shuffle(this.options.videos);
	this.video = this.createVideoElement(0);
	this.wrapper.append(this.video);
	this.scale(this.video);
	this.options.container ? this.options.container.prepend(this.wrapper) : $("body").prepend(this.wrapper);
	$(window).resize(function () {
		a.scale(a.video)
	}).trigger("resize")
};
spweb.Video.prototype.createVideoElement = function (a) {
	var c = this,
	e = [],
	d, b = $("<video />", {
		id: "video-moment-" + a,
		preload: "auto",
		autoplay: !1,
		muted: !0,
		loop: "loop",
		canplay: !1
	}).hide();
	for (d = this.supportedFormats.length - 1; 0 <= d; d--) e.push($("<source />", {
		src: this.getVideoUrl(a, this.supportedFormats[d].ext),
		type: this.supportedFormats[d].type
	}));
	b.append(e);
	b.bind("canplaythrough", function (a) {
		b.unbind(a.type);
		b.prop("canplay", !0);
		b.prop("muted", !0);
		b.trigger("play")
	});
	b.bind("play", function (a) {
		b.unbind(a.type);
		!0 !== b.prop("canplay") ? (a.preventDefault(), a.stopPropagation()) : c.options.audio && c.options.audio.initiatedPromise.resolve();
		b.fadeIn(1E3)
	});
	b.bind("loadedmetadata", function (a) {
		b.unbind(a.type);
		c.scale(b)
	});
	this.scale(b);
	return b
};
spweb.Video.prototype.getVideoUrl = function (a, c) {
	return this.baseUrl + c + "/long/" + this.options.videos[a] + "." + c
};
