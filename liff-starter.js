window.onload = function (e) {
    liff.init(function () {
        getP();
    });
};

function getP(){
    var tipe = getParameterByName('type')
    if (!tipe) {
        document.getElementById('textx').addEventListener('click', function () {
            liff.sendMessages([{
                type: 'text',
                text: atob('VXNhZ2UgZm9yIGxpZmYgWyBsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/IF0KClVzYWdlIGltYWdlIFdpdGggZm9vdGVyOgo9PT4gdHlwZT1mb2ltYWdlCj09PiBpbWc9VVJMIGxpbmsKbGluZTovL2FwcC8xNjAzMTAzNTE0LXIwRTQ0cDM1P3R5cGU9Zm9pbWFnZSZpbWc9aHR0cHM6Ly90aW55dXJsLmNvbS95eG9sbDRibgoKVXNhZ2UgaW1hZ2Ugbm9uIGZvb3RlcjoKPT0+ICB0eXBlPWltYWdlCj09PiAgIGltZz1VUkwgbGluawpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT1pbWFnZSZpbWc9aHR0cHM6Ly90aW55dXJsLmNvbS95eG9sbDRibgoKVXNhZ2UgdmlkZW9zOgo9PT4gIHR5cGU9dmlkZW8KPT0+ICAgb2N1PVVSTCBzaG9ydGVyCj09PiAgIHBpdT1VUkwgc2hvcnRlcgpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT12aWRlbyZvY3U9aHR0cHM6Ly90aW55dXJsLmNvbS95eGhnZmwzeCZwaXU9aHR0cHM6Ly90aW55dXJsLmNvbS95eG9sbDRibgoKVXNhZ2UgdGV4dCBOb24gZm9vdGVyOgo9PT4gdHlwZT10ZXh0Cj09PiB0ZXh0PUdlbwpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT10ZXh0JnRleHQ9R2VvJTIwRW1hbmclMjBLZXJlbgoKVXNhZ2UgdGV4dCBXaXRoIEZsZXg6Cj09PiB0eXBlPWZ0ZXh0Cj09PiB0ZXh0PUdlbwpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT1mdGV4dCZ0ZXh0PUdlbyUyMEVtYW5nJTIwS2VyZW4KClVzYWdlIHRleHQgTm9uIGZvb3RlcjoKPT0+IHR5cGU9dGV4dAo9PT4gdGV4dD1HZW8KbGluZTovL2FwcC8xNjAzMTAzNTE0LXIwRTQ0cDM1P3R5cGU9dGV4dCZ0ZXh0PUdlbyUyMEVtYW5nJTIwS2VyZW4KClVzYWdlIFN0aWNrZXJzIFdpdGggQW5pbWF0aW9uOgo9PT4gdHlwZT1zdGlja2VyCj09PiBzdGs9YW5pbQo9PT4gc2lkPUlkIHN0aWNrZXJzCj09PiBwa2c9VmVyc2kgdHlwZQpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT1zdGlja2VyJnN0az1hbmltJnNpZD02NTg3MTQyMyZwa2c9MQoKVXNhZ2UgU3RpY2tlcnMgTm9uIEFuaW1hdGlvbjoKPT0+IHR5cGU9c3RpY2tlcgo9PT4gc3RrPW5vYW5pbQo9PT4gc2lkPUlkIHN0aWNrZXJzCj09PiBwa2c9VmVyc2kgdHlwZQpsaW5lOi8vYXBwLzE2MDMxMDM1MTQtcjBFNDRwMzU/dHlwZT1zdGlja2VyJnN0az1ub2FuaW0mc2lkPTY1ODcxNDIzJnBrZz0xCgpVc2FnZSBBdWRpbzoKPT0+IHR5cGU9YXVkaW8KPT0+IGxpbms9VVJMIHNob3J0ZXIKbGluZTovL2FwcC8xNjAzMTAzNTE0LXIwRTQ0cDM1P3R5cGU9YXVkaW8mbGluaz1odHRwczovL3Rpbnl1cmwuY29tL3k0ZnJzd2Fr')
            }]).then(function () {
                liff.closeWindow();
            });
        });
    } else {
        makeText();
        makeImage();
        makeVideo();
        makeAudio();
        makeSticker();
        textFooter();
        imageFooter();
        meProfile();
        Profil_e();
        flexText();
        bigImage();
    }
    }

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
function getProfile(){
    liff.getProfile().then(function (profile) {
        document.getElementById('userid').textContent = 'Hai  ' + profile.displayName;
        document.getElementById('main').src = profile.pictureUrl;        
        document.getElementById('close').addEventListener('click', function () {
            liff.closeWindow();
        });
    });
}

function makeText(){
    var tipe = getParameterByName('type');
    if (tipe === 'text') {
        liff.sendMessages([{
            type: 'text',
            text: getParameterByName('text')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'image') {
        liff.sendMessages([{
            type: 'image',
            originalContentUrl: getParameterByName('img'),
            previewImageUrl: getParameterByName('img')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeVideo(){
    var tipe = getParameterByName('type');
    if (tipe === 'video') {
        liff.sendMessages([{
            type: 'video',
            originalContentUrl: getParameterByName('ocu'),
            previewImageUrl: getParameterByName('piu')
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeAudio(){
    var tipe = getParameterByName('type');
    if (tipe === 'audio') {
        liff.sendMessages([{
            type: 'audio',
            originalContentUrl: getParameterByName('link'),
            duration: 60000
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function makeSticker(){
    var tipe = getParameterByName('type');
    if (tipe === 'sticker') {
        var stk = getParameterByName('stk');
        var sid = getParameterByName('sid');
        var pkg = getParameterByName('pkg');
        var ep = '';
        if (stk === 'anim') {
            ep = "/IOS/sticker_animation@2x.png";
        } else {
            ep = "/IOS/sticker@2x.png";
        }
        liff.sendMessages([{
          type: "template",
          altText: "Sticker",
          template: {
             type: "image_carousel",
             columns: [{
                 imageUrl: "https://stickershop.line-scdn.net/stickershop/v1/sticker/"+sid+ep,
                 action: {
                     type: "uri",
                     uri: "line://shop/sticker/detail/"+pkg}}
                          ]
                        }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function textFooter(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var teks = getParameterByName('text');
        if (tipe === 'fotext') {
            liff.sendMessages([{
                type: 'text',
                text: getParameterByName('text'),
                sentBy: {
                    label: prof.displayName,
                    iconUrl: prof.pictureUrl,
                    linkUrl: "line://app/1603103514-r0E44p35?type=fotext&text="+encodeURI(teks)}
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function imageFooter(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        if (tipe === 'foimage') {
            liff.sendMessages([{
                type: 'image',
                originalContentUrl: getParameterByName('img'),
                previewImageUrl: getParameterByName('img'),
                sentBy: {
                    label: prof.displayName,
                    iconUrl: prof.pictureUrl,
                    linkUrl: "line://app/1603103514-r0E44p35?type=foimage&img="+getParameterByName('img')}
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function meProfile(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        if (stat == null) {
            var stat = " - ";
        }
        if (stat.length > 60) {
            var stat = "Status Message is too long! Max 60 words";
        }
        if (tipe === 'profile') {
            liff.sendMessages([{
                type: "template",
                altText: "Profile "+prof.displayName,
                template: {
                    type: "buttons",
                    thumbnailImageUrl: prof.pictureUrl,
                    imageAspectRatio: "square",
                    imageSize: "cover",
                    title: prof.displayName,
                    text: stat,
                    actions: [
                        {
                            type:"uri",
                            label:"Me",
                            uri:"line://app/1603103514-r0E44p35?type=profile"
                        }
                    ]
                }
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function Profil_e(){
    var tipe = getParameterByName('type');
    liff.getProfile().then(function (prof) {
        var stat = prof.statusMessage;
        var pict = prof.pictureUrl;
        if (tipe === 'me') {
            liff.sendMessages([{
                type: "flex",
                altText: "Profile "+prof.displayName,
                contents: {
                      type: "bubble",
                      hero: {
                        type: "image",
                        url: prof.pictureUrl,
                        size: "full",
                        aspectRatio: "1:1",
                        aspectMode: "cover",
                        action: {
                          type: "uri",
                          uri: "line://app/1603103514-r0E44p35?type=foimage&img="+pict
                        }
                      },
                      body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                          {
                            type: "text",
                            text: prof.displayName,
                            align: "center",
                            weight: "bold",
                            size: "xl"
                          },
                          {
                            type: "box",
                            layout: "vertical",
                            margin: "lg",
                            spacing: "sm",
                            contents: [
                              {
                                type: "text",
                                text: prof.statusMessage,
                                wrap: true,
                                color: "#666666",
                                size: "sm",
                                flex: 5
                              }
                            ]
                          }
                        ]
                      },
                      footer: {
                        type: "box",
                        layout: "horizontal",
                        spacing: "sm",
                        contents: [
                          {
                            type: "button",
                            style: "primary",
                            height: "sm",
                            color: "#02afff",
                            action: {
                              type: "uri",
                              label: "Web",
                              uri: "https://ari-yk.github.io/"
                            },
                            flex: 1
                          },
                          {
                            type: "button",
                            style: "primary",
                            height: "sm",
                            action: {
                              type: "uri",
                              label: "Me",
                              uri: "line://app/1603103514-r0E44p35?type=me"
                            },
                            flex: 2
                          },
                          {
                            type: "spacer",
                            size: "sm"
                          }
                        ],
                        flex: 0
                      }
                    }
            }]).then(function () {
                liff.closeWindow();
            });
        }
    });
}

function flexText(){
    var tipe = getParameterByName('type');
    if (tipe === 'ftext') {
        liff.sendMessages([{
            type: "flex",
            altText: getParameterByName('text'),
            contents: {
              type: "bubble",
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: getParameterByName('text'),
                    wrap: true,
                    color: "#595959",
                    size: "sm",
                    flex: 5
                  }
                ]
              }
            }
        }]).then(function () {
            liff.closeWindow();
        });
    }
}

function bigImage(){
    var tipe = getParameterByName('type');
    if (tipe === 'bimg') {
        liff.sendMessages([{
            type: "imagemap",
            baseUrl: "https://geousa.herokuapp.com/",
            altText: "imagemap",
            baseSize: {
              height: 1040,
              width: 1040
            },
            actions: [
              {
                type: "uri",
                linkUri: "https://www.google.com",
                area: {
                  x: 0,
                  y: 0,
                  width: 520,
                  height: 1040
                }
              }
            ]
        }]).then(function () {
            liff.closeWindow();
        });
    }
}
