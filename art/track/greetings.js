function getUserAgent() {
    return navigator.userAgent;
};

function parseUA() {
    ua = getUserAgent();
    out = "";
    if (ua.indexOf("obile") != -1) {
        out += "M";
    };
    if (ua.indexOf("ndroid") != -1) {
        out += "A";
    };
    if (ua.indexOf("irefox") != -1) {
        out += "F";
    };
    if (ua.indexOf("inux") != -1 || navigator.platform.indexOf("inux") != -1) {
        out += "L";
    };
    if (ua.indexOf("hrome") != -1) {
        out += "C";
    };
    if (ua.indexOf("Win") != -1 && navigator.platform.indexOf("inux") == -1) {
        out += "W";
    };
    if (ua.indexOf("Safari") != -1) {
        out += "S";
    };
    if (ua.indexOf("WebKit") != -1) {
        out += "K";
    };
    if (ua.indexOf("Mac") != -1) {
        out += "X";
    };
    if (navigator.vendor.indexOf("pple") != -1) {
        out += "P";
    };
    if (ua.indexOf("rident") != -1) {
        out += "T";
    };
    if (ua.indexOf("iPhone") != -1) {
        out += "I";
    };
    if (ua.indexOf("Edg") != -1) {
        out += "E";
    };
    return out;
}

function getBrowserName() {
    data = parseUA();
    var browser = "";
    switch (data) {
        case "MAFL":
            browser = "Firefox on Android"
            break;
        case "MALCSK":
            browser = "Chromium based on Android"
            break;
        case "LCSK":
            browser = "Chromium based on Linux"
            break;
        case "CWSK":
            browser = "Chromium based on Windows"
            break;
        case "FL":
            browser = "Firefox on Linux"
            break;
        case "LCSKP":
            browser = "WebKit on Linux"
            break;
        case "WT":
            browser = "Internet Explorer on Windows"
            break;
        case "FW":
            browser = "Firefox on Windows"
            break;
        case "CWSKE":
            browser = "Microsoft Edge on Windows"
            break;
        default:
            if (data.indexOf("M") != -1) {
                browser = "Mobile "
            };
            if (data.indexOf("F") != -1) {
                browser += "Firefox "
            };
            if (data.indexOf("E") != -1) {
                browser += "Microsoft Edge "
            };
            if (data.indexOf("C") != -1) {
                browser += "Chromium based browser "
            };
            if (data.indexOf("T") != -1) {
                browser += "Internet Explorer "
            };
            if (data.indexOf("K") != -1) {
                browser += "WebKit based browser "
            };
            if (data.indexOf("A") != -1) {
                browser += "on Android "
            };
            if (data.indexOf("L") != -1 && data.indexOf("A") == -1) {
                browser += "on Linux "
            };
            if (data.indexOf("X") != -1 && data.indexOf("I") == -1) {
                browser += "on Mac "
            };
            if (data.indexOf("I") != -1) {
                browser += "on iPhone "
            };
            if (data.indexOf("W") != -1) {
                browser += "on Windows "
            };
            if (browser == "") {
                browser += "Unkown "
            };
    }
    return browser;
}

function getOffset() {
    //var utc = new Date();
    //var local = new Date();
    //utc = utc.getUTCHours();
    //local = local.getHours();
    //console.log(utc);
    //console.log(local);
    var off = new Date().getTimezoneOffset();
    return -1 * off / 60;
}

function getTimezone() {
    var d = new Date();
    s = d.toString();
    start = s.indexOf("(") + 1;
    end = s.indexOf(")");
    if (start != -1 && end != -1) {
        s = s.slice(start, end);
    } else {
        s = "error";
    }
    //console.log(s);
    return s;
}

function getPageTitle() {
    return document.title;
}

function getLanguage() {
    return navigator.languages;
}

function getDevice() {
    var ua = getUserAgent();
    var dev = "Unkown"
    if (ua.indexOf("Android") != -1) {
        var start = ua.indexOf("Android");
        var end = ua.indexOf(")");
        dev = ua.slice(start, end);
        start = dev.indexOf(";");
        dev = dev.slice(start + 2, dev.length);
    };
    return dev;
};

function getScreenInfo() {
    return screen.width + "x" + screen.height + "@" + screen.colorDepth;
}
var getInstalledFontsJs = function() {
    var fontList = [
        "Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Ubuntu", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"
    ];

    var baseFonts = ["monospace", "sans-serif", "serif"];
    var testString = 'mmmmmmmmmmlli';
    var testSize = "72px";

    var h = document.getElementsByTagName("body")[0];

    var s = document.createElement("span");
    s.style.position = "absolute";
    s.style.left = "-9999px";
    s.style.lineHeight = 'normal'

    // css reset
    s.style.fontStyle = 'normal'
    s.style.fontWeight = 'normal'
    s.style.letterSpacing = 'normal'
    s.style.lineBreak = 'auto'
    s.style.lineHeight = 'normal'
    s.style.texTransform = 'none'
    s.style.textAlign = 'left'
    s.style.textDecoration = 'none'
    s.style.textShadow = 'none'
    s.style.whiteSpace = 'normal'
    s.style.wordBreak = 'normal'
    s.style.wordSpacing = 'normal'

    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index = 0, length = baseFonts.length; index < length; index++) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font

        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }
    var detect = function(font) {
        var detected = false;
        for (var index = 0, l = baseFonts.length; index < l; index++) {
            s.style.fontFamily = font + "," + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth !== defaultWidth[baseFonts[index]] || s.offsetHeight !== defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    };

    var available = [];
    var jsInstalledFonts = '';
    for (var i = 0, l = fontList.length; i < l; i++) {
        if (detect(fontList[i])) {
            jsInstalledFonts += fontList[i];
            jsInstalledFonts += ';';
        }
    }
    return jsInstalledFonts;
}

function audioFp() {
    var audio_output = 0;
    try {
        if (context = new(window.OfflineAudioContext || window.webkitOfflineAudioContext)(1, 44100, 44100), !context) {
            audio_output = 0;
        }

        // Create oscillator
        oscillator = context.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setTargetAtTime(1e4, 0, 0.01);

        // Create and configure compressor
        compressor = context.createDynamicsCompressor();
        compressor.threshold && (compressor.threshold.setTargetAtTime(-50, 0, 0.01));
        compressor.knee && (compressor.knee.setTargetAtTime(40, 0, 0.01));
        compressor.ratio && (compressor.ratio.setTargetAtTime(12, 0, 0.01));
        compressor.reduction && (compressor.reduction.setTargetAtTime(-20, 0, 0.01));
        compressor.attack && (compressor.attack.setTargetAtTime(0, 0, 0.01));
        compressor.release && (compressor.release.setTargetAtTime(.25, 0, 0.01));

        // Connect nodes
        oscillator.connect(compressor);
        compressor.connect(context.destination);

        // Start audio processing
        oscillator.start(0);
        context.startRendering();
        context.oncomplete = function(evnt) {
            for (var i = 4500; 5e3 > i; i++) {
                audio_output += Math.abs(evnt.renderedBuffer.getChannelData(0)[i]);
            }
            compressor.disconnect();
            //console.log(audio_output);
            organizeData(audio_output);
        }
    } catch (e) {
        audio_output = 0;
    }
}

function organizeData(audioOutput) {
    var ua = getUserAgent();
    var bn = getBrowserName();
    var off = getOffset();
    var tz = getTimezone();
    var lang = getLanguage();
    var tl = getPageTitle();
    var dev = getDevice();
    var cores = navigator.hardwareConcurrency;
    var scr = getScreenInfo();
    var pf = navigator.platform;
    var t = new Date().toISOString();
    var data = {
        userAgent: ua,
        browser: bn,
        timeOffset: off,
        timezone: tz,
        language: lang,
        page: tl,
        device: dev,
        cores: cores,
        screen: scr,
        platform: pf,
        audio: audioOutput,
        fonts: getInstalledFontsJs(),
    };
    //console.log(data);
    hash = createID(data);
    data.hash = hash;
    data.time = t;
    secretPOST(data);
    //showInfo(data);
    console.log(data);
    //PASS "data" variable to the function that handles the sending or whatever, just like in showInfo(data) two lines above.
    
};

function secretPOST(d){
    var r = JSON.stringify(d)
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById('browser').innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "upload.php?q=" + r, true);
    xmlhttp.send();
}

function hashCode(str) {
    var hash = 0,
        i, chr;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function createID(data) {
    var s = ""
    for (key in data) {
        s += data[key];
    }
    //console.log(s)
    s = hashCode(s);
    //console.log(s)
    return s
}

function showInfo(data) {
    var code = "<table>";
    for (key in data) {
        code += "<tr><td>";
        code += key;
        code += "</td><td>";
        code += data[key];
        code += "</td></tr>";
    }
    code += "</table>";
    document.getElementById("browser").innerHTML = code;
};
audioFp();
