/* eslint-disable no-useless-escape */
export default {
  vimeo: {
    regex:
      /(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,
    embedUrl:
      "https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",
    html: '<iframe style="width:100%;" height="320" frameborder="0"></iframe>',
    height: 320,
    width: 580,
    description: "vimeo video",
  },
  youtube: {
    regex:
      /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,
    embedUrl: "https://www.youtube.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    description: "youtube video",
    serviceId: ([serviceId, params]) => {
      if (!params && serviceId) {
        return serviceId;
      }

      const paramsMap = {
        start: "start",
        end: "end",
        t: "start",
        // eslint-disable-next-line camelcase
        time_continue: "start",
        list: "list",
      };

      params = params
        .slice(1)
        .split("&")
        .map((param) => {
          const [name, value] = param.split("=");

          if (!serviceId && name === "v") {
            serviceId = value;

            return null;
          }

          if (!paramsMap[name]) {
            return null;
          }

          return `${paramsMap[name]}=${value}`;
        })
        .filter((param) => !!param);

      return serviceId + "?" + params.join("&");
    },
  },
  coub: {
    regex: /https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,
    embedUrl: "https://coub.com/embed/<%= remote_id %>",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    description: "coub video",
  },
  vine: {
    regex: /https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,
    embedUrl: "https://vine.co/v/<%= remote_id %>/embed/simple/",
    html: '<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',
    height: 320,
    width: 580,
    description: "vine video",
  },
  imgur: {
    regex: /https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,
    embedUrl: "http://imgur.com/<%= remote_id %>/embed",
    html: '<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',
    height: 500,
    width: 540,
  },
  gfycat: {
    regex: /https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,
    embedUrl: "https://gfycat.com/ifr/<%= remote_id %>",
    html: "<iframe frameborder='0' scrolling='no' style=\"width:100%;\" height='436' allowfullscreen ></iframe>",
    height: 436,
    width: 580,
    description: "gfycat image",
  },
  "twitch-channel": {
    regex: /https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://player.twitch.tv/?channel=<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600,
    description: "twitch channel",
  },
  "twitch-video": {
    regex: /https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,
    embedUrl: "https://player.twitch.tv/?video=v<%= remote_id %>",
    html: '<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',
    height: 366,
    width: 600,
    description: "twitch video",
  },
  "yandex-music-album": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,
    embedUrl: "https://music.yandex.ru/iframe/#album/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',
    height: 400,
    width: 540,
    description: "yandex music album",
  },
  "yandex-music-track": {
    regex: /https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,
    embedUrl: "https://music.yandex.ru/iframe/#track/<%= remote_id %>/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',
    height: 100,
    width: 540,
    description: "yandex music track",
    serviceId: (serviceIds) => serviceIds.join("/"),
  },
  "yandex-music-playlist": {
    regex:
      /https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,
    embedUrl:
      "https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",
    html: '<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',
    height: 400,
    width: 540,
    description: "yandex music playlist",
    serviceId: (serviceIds) => serviceIds.join("/"),
  },
  codepen: {
    regex: /https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
    embedUrl:
      "https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",
    html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
    height: 300,
    width: 600,
    description: "code pen",
    serviceId: (serviceIds) => serviceIds.join("/embed/"),
  },
  instagram: {
    regex: /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/,
    embedUrl: "https://www.instagram.com/p/<%= remote_id %>/embed",
    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 505,
    width: 400,
    description: "instagram image",
  },
  twitter: {
    regex:
      /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/,
    embedUrl:
      "https://twitframe.com/show?url=https://twitter.com/<%= remote_id %>",
    html: '<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    description: "tweet",
    serviceId: (serviceIds) => serviceIds.join("/status/"),
  },
  pinterest: {
    regex: /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,
    embedUrl: "https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",
    description: "pinterest pin",
    serviceId: (serviceIds) => {
      return serviceIds[1];
    },
  },
  facebook: {
    regex: /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",
    html: "<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",

    description: "facebook post",
    serviceId: (serviceIds) => {
      return serviceIds.join("/");
    },
  },
  aparat: {
    regex: /(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,
    embedUrl:
      "https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",
    html: '<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
    height: 300,
    width: 600,
    description: "aparat video",
  },
  loom: {
    regex: /https?:\/\/(?:www\.)?loom\.com\/share\/([^\/\?\&]+)(?:\?t=\d+)?/,
    embedUrl: "https://www.loom.com/embed/<%= remote_id %>",
    html: "<iframe width='600' height='300' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
    height: 300,
    width: 600,
    description: "loom video",
  },
};
