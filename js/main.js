//
//
// This is, hands down, the WORST fucking javascript I have EVER written
// ~myth
//

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


var globalCounter = 0;

function getANumber() {
    globalCounter += 1;
    return globalCounter;
}


class Pairing {
    topInheritsFrom;
    bottomInheritsFrom;
    inheritsTo;
    carbonCopyTargets;

    constructor(topInheritsFrom, bottomInheritsFrom, inheritsTo, carbonCopyTargets) {
        this.topInheritsFrom = topInheritsFrom;
        this.bottomInheritsFrom = bottomInheritsFrom;
        this.inheritsTo = inheritsTo;
        this.carbonCopyTargets = carbonCopyTargets;
    }

    isChildless() {
        return this.inheritsTo === null;
    }
}


class Tree {
    pairings;
    vSize;
    constructor(pairings) {
        let pairingKeys = Object.getOwnPropertyNames(pairings).sort();

        let count = 0;
        while (pairingKeys[count].substring(2,3) === '1') {
            count++;
        }

        this.vSize = Math.ceil(count/2);
        this.pairings = pairings;
    }
}


class Pos {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move(offsetX, offsetY) {
        this.x += offsetX;
        this.y += offsetY;
    }
}


class Id {
    static join(tree, group, pair) {
        return 't' + tree + ",g" + group + ",p" + pair;
    }

    static split(id) {
        let split = id.split(',');
        return [Number(split[0].substring(1)), Number(split[1].substring(1)), Number(split[2].substring(1))];
    }
}

var ids = [
    new Clip("#100 Kras", "W-_WMcXIstk", 54.232),
    new Clip("#99 elim", "XM3iEUSXN_0", 54.247),
    new Clip("#98 Barack Obama", "SjlJWB-Rq1U", 54.248),
    new Clip("#97 NotHamamoto", "QWgC5Wi7hRw", 54.255),
    new Clip("#96 blamo", "79lodHT9RH0", 54.264),
    new Clip("#95 The Sandee", "92MR6v1eE9A", 54.29),
    new Clip("#94 Otiskk", "FvW7vFYRGJE", 54.293),
    new Clip("#93 antsy", "sPOujodRgLE", 54.311),
    new Clip("#92 The Unholy Baux", "ci7MXiC06UY", 54.319),
    new Clip("#91 Tyronus", "j1FxSghxu_I", 54.32),
    new Clip("#90 FÃ©IRE", "BXYw8tO-FTQ", 54.339),
    new Clip("#89 hayleyuwu", "rOI9QMutJyU", 54.341),
    new Clip("#88 oofygoo", "_fC-CucmsJg", 54.348),
    new Clip("#87 [MarshMellow]", "Sdx_Sx1W9yk", 54.37),
    new Clip("#86 cflat", "oMvyC0T9-q8", 54.374),
    new Clip("#85 Shatterglass27", "JLv5lHGRQ3o", 54.377),
    new Clip("#84 MapleTyger", "bHPdgSmj5S8", 54.389),
    new Clip("#83 Spaceman", "vXm7_KQRMIQ", 54.435),
    new Clip("#82 tydogzilla", "g3KZ6Zxr3DA", 54.462),
    new Clip("#81 KibbyShelton", "aVkBK1wYZHs", 54.462),
    new Clip("#80 amber", "ED-zDIeCKvg", 54.48),
    new Clip("#79 Empyrean Eevee", "HHMC-iURxAA", 54.559),
    new Clip("#78 Suado Cowboy", "GY6vOfHRHPU", 54.56),
    new Clip("#77 Graham Crackers", "MqSHJ-h5XZo", 54.561),
    new Clip("#76 nico", "iA8EvRxKPxg", 54.565),
    new Clip("#75 KING BOOLEAN", "m_ei75EG4ro", 54.566),
    new Clip("#74 cha", "VkNms_jcabE", 54.57),
    new Clip("#73 [BEAR] ", "pExS8i2BtDA", 54.576),
    new Clip("#72 nyanezt", "C5S7BMBWD7Q", 54.587),
    new Clip("#71 Burger King Foot Lettuce", "noCmMNc1eig", 54.588),
    new Clip("#70 yes", "po2dwoZt2gs", 54.589),
    new Clip("#69 áƒ¦ Jun.", "i8L58Qcou4c", 54.597),
    new Clip("#68 Triploon", "Q1AqWCZHh_I", 54.602),
    new Clip("#67 hammock", "sZbRGmFpZhI", 54.639),
    new Clip("#66 Syc0b0b", "cBNu9agCMDk", 54.642),
    new Clip("#65 IGOR", "YUrIXSul-U8", 54.642),
    new Clip("#64 Asomn", "LsLwZ77pfmo", 54.662),
    new Clip("#63 technomo", "tAmXHX_iXHA", 54.675),
    new Clip("#62 MoonshineRising", "1H8jPor00aM", 54.675),
    new Clip("#61 John Jim", "U82PyfQhQ3s", 54.682),
    new Clip("#60 Ororc", "bPcuziXV1EQ", 54.685),
    new Clip("#59 ashdu0j", "k1D421lzdCg", 54.692),
    new Clip("#58 eva", "PoMrNn4nlQs", 54.694),
    new Clip("#57 Savarin", "_4JWWYj6TAQ", 54.702),
    new Clip("#56 General Moron", "lfXFKtS24BA", 54.713),
    new Clip("#55 Oisincool", "vg4MfW1hd_I", 54.724),
    new Clip("#54 AussieAlex", "7obGkR6eRPY", 54.728),
    new Clip("#53 MOLD", "5UCvrhFzRAo", 54.732),
    new Clip("#52 AFSilver", "UBTG41umljk", 54.754),
    new Clip("#51 poorfreyja", "7Jpp4rqsMIg", 54.768),
    new Clip("#50 spyguy3000", "YiC1xf9pnks", 54.769),
    new Clip("#49 Honk", "E0gVJup3FmU", 54.778),
    new Clip("#48 Mochiman514", "ZD7t8hbJ5bA", 54.779),
    new Clip("#47 LeManzana", "BuOvVkkz0xg", 54.782),
    new Clip("#46 slender", "OLNYqS8uNQQ", 54.787),
    new Clip("#45 junkcann", "z806nlkBW6E", 54.788),
    new Clip("#44 pyroman50", "I80WEuhB7E0", 54.799),
    new Clip("#43 SOOOOOAPYMEiSTER", "E31QgfGE-Jc", 54.826),
    new Clip("#42 robsan", "kxJEVc4aHxk", 54.854),
    new Clip("#41 bug / @space_heavy", "pZWcymqLe4Y", 54.866),
    new Clip("#40 Xnery", "R14KrHNmtcE", 54.867),
    new Clip("#39 KorotaGecko", "pOYNEugO9Ys", 54.871),
    new Clip("#38 Endy", "S7DUXHZcAKc", 54.879),
    new Clip("#37 Luleta", "10gAvqxhIP4", 54.88),
    new Clip("#36 Orange", "Rv8WLyc4sgc", 54.884),
    new Clip("#35 dex", "I9W2IjjkI9A", 54.893),
    new Clip("#34 Rakku", "rSsmHLYh-_o", 54.896),
    new Clip("#33 NightPixel", "NzI9RKkToTo", 54.912),
    new Clip("#32 Blizzy360", "0SHQuIU6e3A", 54.912),
    new Clip("#31 GeneralAlias", "6z7ndyBlN-s", 54.917),
    new Clip("#30 aubreygine", "BVcxJ6DjGjg", 54.921),
    new Clip("#29 Joey", "pFfrW_rz1YU", 54.925),
    new Clip("#28 kn", "O_aRR562igA", 54.936),
    new Clip("#27 Quill", "5sgsPZq446Q", 54.937),
    new Clip("#26 FRAGBOMBBLITZ", "xjb-htz6IyM", 54.946),
    new Clip("#25 Cosmic sR", "7buTESfhnEY", 54.957),
    new Clip("#24 fourlow", "QIo2eqDSQuc", 54.976),
    new Clip("#23 colossal", "2fk9AuNwYWc", 54.978),
    new Clip("#22 ModestMorning", "YtrcNv-HbNg", 54.985),
    new Clip("#21 MrTheWizard", "FycttBhB4m4", 54.988),
    new Clip("#20 Mirory", "wnLdHX9_QUk", 55.044),
    new Clip("#19 nebuden", "KJX6MZWUZhw", 55.252),
    new Clip("#18 Dochnicht", "JEZZwwVM3UM", 55.436),
    new Clip("#17 songokori", "A8iw4IQZMpk", 55.92),
    new Clip("#16 RayitoMSF", "zeFv76aHB2U", 56.209),
    new Clip("#15 skull", "o5FZbRS54dE", 56.222),
    new Clip("#14 kiwi", "xwpqSqMjIGI", 56.27),
    new Clip("#13 Jackson Fumblington", "hyhU9rfuY8Y", 56.541),
    new Clip("#12 ipad_john", "dilLh_0iN_Q", 56.866),
    new Clip("#11 monchh", "OO2-sYos4P0", 57.172),
    new Clip("#10 KennytheHedgehog", "T3SwrNvnmVA", 57.195),
    new Clip("#9 acres", "y6dXqzXkjac", 57.391),
    new Clip("#8 Lakki", "nd7Jj4Xk7f4", 57.402),
    new Clip("#7 specialinsect", "_wt8pjMNo_g", 60.207),
    new Clip("#6 fleura", "Z_GmZy4vxzY", 60.703),
    new Clip("#5 danmar33", "kWul1Qq9xcQ", 60.963),
    new Clip("#4 Fresh Lychee", "yn0b6mzyTr0", 61.469),
    new Clip("#3 jolo", "hmauAkvGGT8", 61.536),
    new Clip("#2 Chalmers", "rA8dfBJYPCM", 62.324),
    new Clip("#1 herb", "KaiRY9I5KpY", 63.434),
];
var seededIds = [];

var shiftDown = false;
var ctrlDown = false;
var videoMode = false;

function seedIds() {
    for (let i = 0; i < (ids.length)/2; i++) {
        seededIds.push(ids[i]);
        seededIds.push(ids[ids.length-i-1]);
    }
}

let runoffTreeExceptions = [[6, 1], [5, 1]]; 

function buildTree(payloads) {
    let pairings = {};
    let starter = [];
    for (let i = 1; i <= (payloads.length/2); i++) {
        pairings[Id.join(1,1,i)] = new Pairing(null, null, null, null);
        starter.push(Id.join(1,1,i));
    }

    let queue = starter;
    while (queue.length > 0) {
        let nextQueue = [];
        let endLineage = false;
        // "If I'm on my own, end my bloodline!"
        if (queue.length === 1) {
            endLineage = true;
        }
        for (index in queue) {
            let id = queue[index];
            let [tree, group, pair] = Id.split(id);
            let pairing = pairings[id];

            let newGroup = group + 1;
            let newPair = Math.ceil(pair/2);
            let newId = Id.join(tree, newGroup, newPair);

            pairing.inheritsTo = newId;

            // if pairings already has this id, that means the current pairing is the bottom inheritor
            if (!endLineage) {
                if (Object.hasOwn(pairings, newId)) {
                    pairings[newId].bottomInheritsFrom = id;
                } else {
                    pairings[newId] = new Pairing(id, null, null, null);
                    nextQueue.push(newId);
                }
            }
        }
        queue = nextQueue;
        if (endLineage) { queue = []; }
    }
    return new Tree(pairings);
}

function renderTree(columns, rowSpread, title) {
    createGrid(columns, rowSpread, title);
}

class ColumnConfig {
    rows;
    runts;
    constructor(rows, runts) {
        this.rows = rows;
        this.runts = runts;
    }
}

function placeElement(pointer) {
    let element = newEl('div');
    element.style.transform = `${pointer.x}px ${pointer.y}px`;
    element.classList.add('pairing');
    find('viewportTarget').appendChild(element);
}

function newEl(by) {
    return document.createElement(by);
}

function find(id) {
    return document.getElementById(id);
}


function createGrid(columns, rowSpread, title) {
    var counter = 0;

    let highestSpreadValue = 0;
    for (i in rowSpread) {
        if (rowSpread[i].rows > highestSpreadValue) {
            highestSpreadValue = rowSpread[i].rows;
        }
    }
    let height = highestSpreadValue * 60;
    let width = columns * 150;

    let mainBox = newEl('div');
    mainBox.className = createCssClass(`
        display: grid;
        grid-template-columns: repeat(${columns},1fr);
        width: ${width}px;
        height: ${height}px;
    `, 'mainBox' + getANumber());

    for (let i = 0; i < columns; i++) {
        let groupBox = newEl('div');

        var rows = rowSpread[i].rows;
        var runts = rowSpread[i].runts;
        var runtAddition = '';
        if (runts > 0) {
            runtAddition = `repeat(${rowSpread[i].runts}, 34px 50px 34px)`;
        }

        groupBox.className = createCssClass(`
            display: grid;
            grid-template-rows: ${runtAddition} repeat(${rows - runts}, 1fr 50px 1fr);
            width: 100%;
            height: 100%;
        `, 'subBox' + getANumber());
        for (let j = 0; j < rowSpread[i].rows; j++) {
            groupBox.appendChild(newEl('div'));
            groupBox.appendChild(createPairingBox(2, false));
            groupBox.appendChild(newEl('div'));

            counter += 1;
        } 
        mainBox.appendChild(groupBox);
    }

    let header = newEl('p');
    header.className = 'header';
    header.innerHTML = title;

    let subContainer = newEl('div');
    subContainer.className = 'containerEmployee';
    

    find('container').appendChild(header);
    subContainer.appendChild(mainBox);
    find('container').appendChild(subContainer);
}



var pairingBoxCounter = -1;

function getPairingBoxNumber() {
    pairingBoxCounter += 1;
    return pairingBoxCounter;
}


function createPairingBox(numberOfCells, noInputs, customId) {
    let id = getPairingBoxNumber();

    if (!(customId === undefined)) {
        id = customId;
    }

    let pairingBox = newEl('div');
    
    pairingBox.classList.add('pairing');
    let ref = { "parent" : pairingBox, "cells" : {} }

    //let debugP = newEl('p');
    //debugP.innerHTML = '('+id+')'; 
    //pairingBox.id = 'box' + id;



    for (let i = 0; i < numberOfCells; i ++) {
        let cell = newEl('div');
        cell.id = id + "-" + i;
        //cell.innerHTML = id;

        if (!noInputs) {
            cell.setAttribute('onclick', `voteAttempted(${id}, ${i}, ${numberOfCells - i - 1})`);
        }

        pairingBox.appendChild(cell);
        ref.cells[i] = cell;
    }

    //pairingBox.appendChild(debugP);

    elementRef[id] = ref;
    return pairingBox;
}


function createCssClass(inner, className) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { ${inner} }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    return className;
    //document.getElementById('someElementId').className = 'cssClass'
}



var elementRef = {};


var starterPairs = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101
];

var hidden = [
    46, 54, 56
];

var connectionRound2Fix2 = {
    0   :[[24, 0]],
    83  :[[24, 1]],
    84  :[[25, 0]],
    16  :[[25, 1]],
    99  :[[26, 0]],
    15  :[[26, 1]],
    100 :[[27, 0]],
    8   :[[27, 1]],
    23  :[[28, 0]],
    92  :[[28, 1]],
    76  :[[29, 0]],
    91  :[[29, 1]],
    7   :[[30, 0]],
    80  :[[30, 1]],
    3   :[[31, 0]],
    87  :[[31, 1]],
    19  :[[32, 0]],
    96  :[[32, 1]],
    12  :[[33, 0]],
    11  :[[33, 1]],
    20  :[[34, 0]],
    95  :[[34, 1]],
    78  :[[35, 0]],
    88  :[[35, 1]],
    4   :[[63, 0]],
    85  :[[63, 1]],
    82  :[[64, 0]],
    1   :[[64, 1]],
    17  :[[65, 0]],
    98  :[[65, 1]],
    14  :[[66, 0]],
    101 :[[66, 1]],
    9   :[[67, 0]],
    22  :[[67, 1]],
    93  :[[68, 0]],
    77  :[[68, 1]],
    90  :[[69, 0]],
    6   :[[69, 1]],
    97  :[[70, 0]],
    81  :[[70, 1]],
    86  :[[71, 0]],
    18  :[[71, 1]],
    2   :[[72, 0]],
    13  :[[72, 1]],
    10  :[[73, 0]],
    21  :[[73, 1]],
    94  :[[74, 0]],
    79  :[[74, 1]],
    89  :[[70, 0]],
    5   :[[70, 1]]
}

var connections = {
    0   : [[24, 0]],
    1   : [[24, 1]],
    2   : [[25, 0]],
    3   : [[25, 1]],
    4   : [[26, 0]],
    5   : [[26, 1]],
    6   : [[27, 0]],
    7   : [[27, 1]],
    8   : [[28, 0]],
    9   : [[28, 1]],
    10  : [[29, 0]],
    11  : [[29, 1]],
    12  : [[30, 0]],
    13  : [[30, 1]],
    14  : [[31, 0]],
    15  : [[31, 1]],
    16  : [[32, 0]],
    17  : [[32, 1]],
    18  : [[33, 0]],
    19  : [[33, 1]],
    20  : [[34, 0]],
    21  : [[34, 1]],
    22  : [[35, 0]],
    23  : [[35, 1]],
    24  : [[36, 0]],
    25  : [[36, 1]],
    26  : [[37, 0]],
    27  : [[37, 1]],
    28  : [[38, 0]],
    29  : [[38, 1]],
    30  : [[39, 0]],
    31  : [[39, 1]],
    32  : [[40, 0]],
    33  : [[40, 1]],
    34  : [[41, 0]],
    35  : [[41, 1]],
    36  : [[42, 0]],
    37  : [[42, 1]],
    38  : [[43, 0]],
    39  : [[43, 1]],
    40  : [[44, 0]],
    41  : [[44, 1]],
    42  : [[45, 0]],
    43  : [[45, 1]],
    44  : [[47, 1], [104, 0]], // over 46
    45  : [[47, 0], [103, 0]],
    //46  : [[47, 1], [104, 0]],
    47  : [[48, 0], [102, 0]],
    48  : [[999, 0], [999, 1]],
    49  : [[48, 1], [102, 1]],
    50  : [[49, 0], [103, 1]],
    51  : [[49, 1], [104, 1]],
    52  : [[50, 0]],
    53  : [[50, 1]],
    //54  : [[51, 0]],
    55  : [[51, 1]],
    //56  : [[52, 0]],
    57  : [[52, 1]],
    58  : [[53, 0]],
    59  : [[53, 1]],
    60  : [[51, 0]], // over 54
    61  : [[55, 0]],
    62  : [[55, 1]],
    63  : [[52, 0]], //over 56
    64  : [[57, 0]],
    65  : [[57, 1]],
    66  : [[58, 0]],
    67  : [[58, 1]],
    68  : [[59, 0]],
    69  : [[59, 1]],
    70  : [[60, 0]],
    71  : [[60, 1]],
    72  : [[61, 0]],
    73  : [[61, 1]],
    74  : [[62, 0]],
    75  : [[62, 1]],
    76  : [[63, 0]],
    77  : [[63, 1]],
    78  : [[64, 0]],
    79  : [[64, 1]],
    80  : [[65, 0]],
    81  : [[65, 1]],
    82  : [[66, 0]],
    83  : [[66, 1]],
    84  : [[67, 0]],
    85  : [[67, 1]],
    86  : [[68, 0]],
    87  : [[68, 1]],
    88  : [[69, 0]],
    89  : [[69, 1]],
    90  : [[70, 0]],
    91  : [[70, 1]],
    92  : [[71, 0]],
    93  : [[71, 1]],
    94  : [[72, 0]],
    95  : [[72, 1]],
    96  : [[73, 0]],
    97  : [[73, 1]],
    98  : [[74, 0]],
    99  : [[74, 1]],
    100 : [[75, 0]],
    101 : [[75, 1]],

    102 : [[999, 2], [999, 3]],

    103 : [[105, 0]],
    104 : [[105, 1]],
    105 : [[999, 4]],
}


function voteAttempted(id, cell, loserCell) {
    console.log(id);
    if (ctrlDown) {
        let payload = elementRef[id].cells[cell].innerHTML;
        let videoId = elementRef[id].cells[cell].getAttribute('data-videoId');
        let loserPayload = elementRef[id].cells[loserCell].innerHTML;
        let loserVideoId = elementRef[id].cells[loserCell].getAttribute('data-videoId');
        if (!(payload === '') && !(loserPayload === '')) {
            let dPairId = connections[id][0][0];
            let dCellId = connections[id][0][1];
    
            elementRef[dPairId].cells[dCellId].innerHTML = payload;
            elementRef[dPairId].cells[dCellId].setAttribute('data-videoId', videoId);

            if (connections[id].length > 1) {
                let dLoserPairId = connections[id][1][0];
                let dLoserCellId = connections[id][1][1];

                elementRef[dLoserPairId].cells[dLoserCellId].innerHTML = loserPayload;
                elementRef[dLoserPairId].cells[dLoserCellId].setAttribute('data-videoId', loserVideoId);
            }
            elementRef[id].cells[cell].classList.add('winning');
            elementRef[id].cells[loserCell].classList.remove('winning');
        }
    } else if (true) {
        let videoId1 = elementRef[id].cells[0].getAttribute('data-videoId');
        let videoId2 = elementRef[id].cells[1].getAttribute('data-videoId');
        if (!(videoId1 === null) && !(videoId2 === null)) {
            doVideoEmbeds(videoId1, videoId2);
        }
    }
}


function windowOnLoadStuff() {
    seedIds();
    let tree = buildTree(seededIds);

    // fix seeding
    let idsThatNeedFixing = Object.getOwnPropertyNames(connectionRound2Fix2);
    for (let i = 0; i < idsThatNeedFixing.length; i++) {
        let id = idsThatNeedFixing[i];
        connections[id] = connectionRound2Fix2[id];
    }

    renderTree(13, [
        new ColumnConfig(24, 0),
        new ColumnConfig(12, 0),
        new ColumnConfig(6,  0),
        new ColumnConfig(3,  0),
        new ColumnConfig(2,  0),
        new ColumnConfig(1,  0),
        new ColumnConfig(1,  0),
        new ColumnConfig(1,  0),
        new ColumnConfig(2,  0),
        new ColumnConfig(4,  0),
        new ColumnConfig(7,  1),
        new ColumnConfig(13, 0),
        new ColumnConfig(26, 0)
    ], "Main Bracket");

    renderTree(1, [
        new ColumnConfig(1, 0),
    ], "3rd & 4th Place Bracket");

    renderTree(2, [
        new ColumnConfig(2, 0),
        new ColumnConfig(1, 0),
    ], "5th Place Bracket");

    let header = newEl('p');
    header.className = 'header';
    header.innerHTML = 'Top 5 winners (they will show up here)';
    header.style = 'font-size: 20px;';

    find('container').appendChild(header);

    let subContainer = newEl('div');
    subContainer.className = 'containerEmployee';
    subContainer.appendChild(createPairingBox(5, true, 999));
    find('container').appendChild(subContainer);

    //populate
    for (let i = 0; i < starterPairs.length; i++) {
        starterId = starterPairs[i];

        elementRef[starterId].cells[0].innerHTML = seededIds[i*2].username;
        elementRef[starterId].cells[0].setAttribute('data-videoId', seededIds[i*2].id)
        elementRef[starterId].cells[1].innerHTML = seededIds[(i*2)+1].username;
        elementRef[starterId].cells[1].setAttribute('data-videoId', seededIds[(i*2)+1].id)
    }

    for (let i = 0; i < hidden.length; i++) {
        console.log(elementRef);
        elementRef[hidden[i]].parent.classList.add('invis');
    }

    //let svg = find('svg');
    //svg.setAttribute('width', 9000);
    //svg.setAttribute('height', 9000);
    //let connectionKeys = Object.getOwnPropertyNames(connections);
    //for (let i = 0; i < connectionKeys.length; i++) {
    //    
    //    let id1 = connectionKeys[i];
    //    let id2 = connections[id1][0][0];
    //    if (id2 < 999) {
    //        svg.appendChild(generateLineBetween(id1, id2));
    //    }
    //}
    //find('container').appendChild(svg);

    clearEmbedOverlay();
}

window.onkeydown = (event) => {
    switch (event.code) {
        case 'KeyW':
            shiftDown = true;
            break;
        case 'KeyC':
            ctrlDown = true;
            break;
    }

    alterResponsiveCssVars(ctrlDown);
};

function clearEmbedOverlay() {
    find('overlayFrame').classList.add('hidden');
    if (!(find('clip1') === null)) {
        find('clip1').remove();
    }
    if (!(find('clip2') === null)) {
        find('clip2').remove();
    }
}

window.onkeyup = (event) => {
    switch (event.code) {
        case 'KeyW':
            shiftDown = false;
            break;
        case 'KeyC':
            ctrlDown = false;
            break;
    }
    alterResponsiveCssVars(shiftDown || ctrlDown);
};

function alterResponsiveCssVars(enable) {
    if (enable) {
        var r = document.querySelector(':root');
        r.style.setProperty('--pairing-border-thickness', '0');
        r.style.setProperty('--sub-border-thickness', '2px');
        //r.style.setProperty('--sub-highlight-color', 'var(--color-bg)');
        r.style.setProperty('--additional-z', '2');
    } else {
        var r = document.querySelector(':root');
        r.style.setProperty('--pairing-border-thickness', '2px');
        r.style.setProperty('--sub-border-thickness', '0');
        //r.style.setProperty('--sub-highlight-color', 'var(--color-dark-bg)');
        r.style.setProperty('--additional-z', 'none');
    }
}

function generateLineBetween(id1, id2) {
    let el1 = elementRef[id1].parent;
    let [x1, y1] = getCenterOfElement(el1);
    let el2 = elementRef[id2].parent;
    let [x2, y2] = getCenterOfElement(el2);
    let line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    return line; 
}

function getCenterOfElement(element) {
    let bounding = element.getBoundingClientRect();
    let vpT = find('container').getBoundingClientRect();
    return [bounding.x - (bounding.width/2) - vpT.x + 130, bounding.y - (bounding.height/2) - vpT.y + 50]; 
}


function doVideoEmbeds(urlId1, urlId2) {    
    find('overlayFrame').classList.remove('hidden');
    applyEmbedToParent(find('clipBox1'),urlId1,'clip1');
    applyEmbedToParent(find('clipBox2'),urlId2,'clip2');
}

function applyEmbedToParent(parent, url, name) {
    var rect = parent.getBoundingClientRect();

    const frame = newEl('iframe');
    frame.id = name;
    //frame1.classList.add("parentRespectingVideoEmbed");
    frame.width = rect['width'];
    frame.height = rect['height'];
    frame.src = "https://www.youtube.com/embed/" + url;
    frame.setAttribute("allowfullscreen", "");
    frame.setAttribute("allow", "autoplay; allowfullscreen");
    parent.appendChild(frame);

    frame.setAttribute('width', rect['width']);
    frame.setAttribute('height', rect['height']);
}

window.onload = windowOnLoadStuff();

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};

function resizeEmbeds() {
    var rect = find('clipBox1').getBoundingClientRect();
    var frame1 = find('clip1');
    if (!(frame1 === null)) {
        frame1.width = rect['width'];
        frame1.height = rect['height']; 
    }
    var frame2 = find('clip2');
    if (!(frame2 === null)) {
        frame2.width = rect['width'];
        frame2.height = rect['height']; 
    }
}
window.onresize = resizeEmbeds;