class Clip {
    username;
    id;
    ratio;
    constructor(username, id, ratio) {
        this.username = username;
        this.id = id;
        this.ratio = ratio;
    }
}

class NextPair {
    default;
    loser;
    constructor(def, loser) {
        this.default = def;
        this.loser = loser;
    }
}

var ids = [
    new Clip("Kras", "W-_WMcXIstk", 54.232),
    new Clip("elim", "XM3iEUSXN_0", 54.247),
    new Clip("Barack Obama", "SjlJWB-Rq1U", 54.248),
    new Clip("NotHamamoto", "QWgC5Wi7hRw", 54.255),
    new Clip("blamo", "79lodHT9RH0", 54.264),
    new Clip("The Sandee", "92MR6v1eE9A", 54.29),
    new Clip("Otiskk", "FvW7vFYRGJE", 54.293),
    new Clip("antsy", "sPOujodRgLE", 54.311),
    new Clip("The Unholy Baux", "ci7MXiC06UY", 54.319),
    new Clip("Tyronus", "j1FxSghxu_I", 54.32),
    new Clip("FÃ©IRE", "BXYw8tO-FTQ", 54.339),
    new Clip("hayleyuwu", "rOI9QMutJyU", 54.341),
    new Clip("oofygoo", "_fC-CucmsJg", 54.348),
    new Clip("[MarshMellow]", "Sdx_Sx1W9yk", 54.37),
    new Clip("cflat", "oMvyC0T9-q8", 54.374),
    new Clip("Shatterglass27", "JLv5lHGRQ3o", 54.377),
    new Clip("MapleTyger", "bHPdgSmj5S8", 54.389),
    new Clip("Spaceman", "vXm7_KQRMIQ", 54.435),
    new Clip("tydogzilla", "g3KZ6Zxr3DA", 54.462),
    new Clip("KibbyShelton", "aVkBK1wYZHs", 54.462),
    new Clip("amber", "ED-zDIeCKvg", 54.48),
    new Clip("Empyrean Eevee", "HHMC-iURxAA", 54.559),
    new Clip("Suado Cowboy", "GY6vOfHRHPU", 54.56),
    new Clip("Graham Crackers", "MqSHJ-h5XZo", 54.561),
    new Clip("nico", "iA8EvRxKPxg", 54.565),
    new Clip("KING BOOLEAN", "m_ei75EG4ro", 54.566),
    new Clip("cha", "VkNms_jcabE", 54.57),
    new Clip("[BEAR] ", "pExS8i2BtDA", 54.576),
    new Clip("nyanezt", "C5S7BMBWD7Q", 54.587),
    new Clip("Burger King Foot Lettuce", "noCmMNc1eig", 54.588),
    new Clip("yes", "po2dwoZt2gs", 54.589),
    new Clip("áƒ¦ Jun.", "i8L58Qcou4c", 54.597),
    new Clip("Triploon", "Q1AqWCZHh_I", 54.602),
    new Clip("hammock", "sZbRGmFpZhI", 54.639),
    new Clip("Syc0b0b", "cBNu9agCMDk", 54.642),
    new Clip("IGOR", "YUrIXSul-U8", 54.642),
    new Clip("Asomn", "LsLwZ77pfmo", 54.662),
    new Clip("technomo", "tAmXHX_iXHA", 54.675),
    new Clip("MoonshineRising", "1H8jPor00aM", 54.675),
    new Clip("John Jim", "U82PyfQhQ3s", 54.682),
    new Clip("Ororc", "bPcuziXV1EQ", 54.685),
    new Clip("ashdu0j", "k1D421lzdCg", 54.692),
    new Clip("eva", "PoMrNn4nlQs", 54.694),
    new Clip("Savarin", "_4JWWYj6TAQ", 54.702),
    new Clip("General Moron", "lfXFKtS24BA", 54.713),
    new Clip("Oisincool", "vg4MfW1hd_I", 54.724),
    new Clip("AussieAlex", "7obGkR6eRPY", 54.728),
    new Clip("MOLD", "5UCvrhFzRAo", 54.732),
    new Clip("AFSilver", "UBTG41umljk", 54.754),
    new Clip("poorfreyja", "7Jpp4rqsMIg", 54.768),
    new Clip("spyguy3000", "YiC1xf9pnks", 54.769),
    new Clip("Honk", "E0gVJup3FmU", 54.778),
    new Clip("Mochiman514", "ZD7t8hbJ5bA", 54.779),
    new Clip("LeManzana", "BuOvVkkz0xg", 54.782),
    new Clip("slender", "OLNYqS8uNQQ", 54.787),
    new Clip("junkcann", "z806nlkBW6E", 54.788),
    new Clip("pyroman50", "I80WEuhB7E0", 54.799),
    new Clip("SOOOOOAPYMEiSTER", "E31QgfGE-Jc", 54.826),
    new Clip("robsan", "kxJEVc4aHxk", 54.854),
    new Clip("bug / @space_heavy", "pZWcymqLe4Y", 54.866),
    new Clip("Xnery", "R14KrHNmtcE", 54.867),
    new Clip("KorotaGecko", "pOYNEugO9Ys", 54.871),
    new Clip("Endy", "S7DUXHZcAKc", 54.879),
    new Clip("Luleta", "10gAvqxhIP4", 54.88),
    new Clip("Orange", "Rv8WLyc4sgc", 54.884),
    new Clip("dex", "I9W2IjjkI9A", 54.893),
    new Clip("Rakku", "rSsmHLYh-_o", 54.896),
    new Clip("NightPixel", "NzI9RKkToTo", 54.912),
    new Clip("Blizzy360", "0SHQuIU6e3A", 54.912),
    new Clip("GeneralAlias", "6z7ndyBlN-s", 54.917),
    new Clip("aubreygine", "BVcxJ6DjGjg", 54.921),
    new Clip("Joey", "pFfrW_rz1YU", 54.925),
    new Clip("kn", "O_aRR562igA", 54.936),
    new Clip("Quill", "5sgsPZq446Q", 54.937),
    new Clip("FRAGBOMBBLITZ", "xjb-htz6IyM", 54.946),
    new Clip("Cosmic sR", "7buTESfhnEY", 54.957),
    new Clip("fourlow", "QIo2eqDSQuc", 54.976),
    new Clip("colossal", "2fk9AuNwYWc", 54.978),
    new Clip("ModestMorning", "YtrcNv-HbNg", 54.985),
    new Clip("MrTheWizard", "FycttBhB4m4", 54.988),
    new Clip("Mirory", "wnLdHX9_QUk", 55.044),
    new Clip("nebuden", "KJX6MZWUZhw", 55.252),
    new Clip("Dochnicht", "JEZZwwVM3UM", 55.436),
    new Clip("songokori", "A8iw4IQZMpk", 55.92),
    new Clip("RayitoMSF", "zeFv76aHB2U", 56.209),
    new Clip("skull", "o5FZbRS54dE", 56.222),
    new Clip("kiwi", "xwpqSqMjIGI", 56.27),
    new Clip("Jackson Fumblington", "hyhU9rfuY8Y", 56.541),
    new Clip("ipad_john", "dilLh_0iN_Q", 56.866),
    new Clip("monchh", "OO2-sYos4P0", 57.172),
    new Clip("KennytheHedgehog", "T3SwrNvnmVA", 57.195),
    new Clip("acres", "y6dXqzXkjac", 57.391),
    new Clip("Lakki", "nd7Jj4Xk7f4", 57.402),
    new Clip("specialinsect", "_wt8pjMNo_g", 60.207),
    new Clip("fleura", "Z_GmZy4vxzY", 60.703),
    new Clip("danmar33", "kWul1Qq9xcQ", 60.963),
    new Clip("Fresh Lychee", "yn0b6mzyTr0", 61.469),
    new Clip("jolo", "hmauAkvGGT8", 61.536),
    new Clip("Chalmers", "rA8dfBJYPCM", 62.324),
    new Clip("herb", "KaiRY9I5KpY", 63.434)
];
var seededIds = [];

var nextBracketRef = {};
var clipRef = {};

var shiftDown = false;
var ctrlDown = false;

function generateTree() {
    let baseTags = [];
    for (let i = 1; i <= 50; i++) {
        baseTags.push(new NextPair('1:1:' + i + ':1', null));
        baseTags.push(new NextPair('1:1:' + i + ':2', null));
    }

    for (let i = 0; i < baseTags.length; i++) {
        clipRef[baseTags[i].default] = seededIds[i];
    }

    let triggerEnd = false;
    let totalIters = 0;
    let currentSet = baseTags;
    while (true) {
        let nextSet = [];
        let highestBracket = 0;
        for (let i = 0; i < currentSet.length; i++) {
            let tag = currentSet[i];
            let split = tag.default.split(':');
            
            let tree = split[0];
            let group = split[1];
            let bracket = split[2];
            let index = split[3];
            
            let newBracket = Math.ceil(bracket / 2);
            let newIndex = Math.abs((bracket % 2) - 1) + 1;
            let newGroup = Number(group) + 1;
            
            if (newBracket > highestBracket) {
              highestBracket = Number(newBracket);
            }

            let newTag = tree + ":" + newGroup + ':' + newBracket + ':' + newIndex;
            nextBracketRef[tag.default] = new NextPair(newTag, null);
            nextSet.push(new NextPair(newTag, null));
            
            if ((group === '5' || group === '6') && tree === '1') {
                let anotherTag = '';
                if (group === '5') {
                    anotherTag = '3:1:' + newBracket + ':' + newIndex;
                } else {
                    anotherTag = '2:1:' + newBracket + ':' + newIndex;
                }
                
                nextBracketRef[tag.default].loser = anotherTag;
                nextSet.push(new NextPair(anotherTag, null));
            }


            totalIters += 1;
        }

        currentSet = nextSet;
        nextSet = [];

        if (highestBracket === 1) {
            break;
        }
    }

  console.log(nextBracketRef);
}

function seedIds() {
    for (let i = 0; i < (ids.length)/2; i++) {
        seededIds.push(ids[i]);
        seededIds.push(ids[ids.length-i-1]);
    }
    console.log(ids.length);
    console.log(seededIds.length);
}

function windowOnLoadStuff() {
    seedIds();
    generateTree();

    console.log(clipRef);
}

window.onkeydown = (event) => {
    switch (event.code) {
        case 'ShiftLeft' || 'ShiftRight':
            shiftDown = true;
            break;
        case 'ControlLeft' || 'ControlRight':
            ctrlDown = true;
            break;
    }
};

window.onkeyup = (event) => {
    switch (event.code) {
        case 'ShiftLeft' || 'ShiftRight':
            shiftDown = false;
            break;
        case 'ControlLeft' || 'ControlRight':
            ctrlDown = false;
            break;
    }
};

window.onload = windowOnLoadStuff();
