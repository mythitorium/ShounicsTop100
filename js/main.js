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
        console.log(id);
        let split = id.split(',');
        return [Number(split[0].substring(1)), Number(split[1].substring(1)), Number(split[2].substring(1))];
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

var shiftDown = false;
var ctrlDown = false;

function seedIds() {
    for (let i = 0; i < (ids.length)/2; i++) {
        seededIds.push(ids[i]);
        seededIds.push(ids[ids.length-i-1]);
    }
    console.log(ids.length);
    console.log(seededIds.length);
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

    console.log(pairings);

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
    let highestSpreadValue = 0;
    for (i in rowSpread) {
        if (rowSpread[i].rows > highestSpreadValue) {
            highestSpreadValue = rowSpread[i].rows;
        }
    }
    let height = highestSpreadValue * 60;
    let width = columns * 150;

    console.log(rowSpread);

    let mainBox = newEl('div');
    mainBox.className = createCssClass(`
        display: grid;
        grid-template-columns: repeat(${columns},1fr);
        width: ${width}px;
        height: ${height}px;
    `, 'mainBox' + getANumber());

    for (let i = 0; i < columns; i++) {
        console.log("-");
        let groupBox = newEl('div');

        var rows = rowSpread[i].rows;
        var runts = rowSpread[i].runts;
        var runtAddition = '';
        if (runts > 0) {
            runtAddition = `repeat(${rowSpread[i].runts}, 1fr 50px 1fr)`;
        }

        groupBox.className = createCssClass(`
            display: grid;
            grid-template-rows: repeat(${rows - runts}, 1fr 50px 1fr) ${runtAddition};
            width: 100%;
            height: 100%;
        `, 'subBox' + getANumber());
        for (let j = 0; j < rowSpread[i].rows; j++) {
            console.log(j);
            groupBox.appendChild(newEl('div'));


            let pairingBox = newEl('div');
            pairingBox.classList.add('pairing');
            
            let topBox = newEl('div');
            topBox.id = 'topBox';
            let bottomBox = newEl('div');
            bottomBox.id = 'bottomBox';
            pairingBox.appendChild(topBox);
            pairingBox.appendChild(bottomBox);


            groupBox.appendChild(pairingBox);
            groupBox.appendChild(newEl('div'));
        } 
        mainBox.appendChild(groupBox);
    }

    let header = newEl('p');
    header.className = 'header';
    console.log(title);
    header.innerHTML = title;

    let subContainer = newEl('div');
    subContainer.className = 'containerEmployee';
    

    find('container').appendChild(header);
    subContainer.appendChild(mainBox);
    find('container').appendChild(subContainer);
}


function createCssClass(inner, className) {
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${className} { ${inner} }`;
    document.getElementsByTagName('head')[0].appendChild(style);

    return className;
    //document.getElementById('someElementId').className = 'cssClass'
}


function windowOnLoadStuff() {
    seedIds();
    let tree = buildTree(seededIds);
    renderTree(13, [
        new ColumnConfig(24, 0),
        new ColumnConfig(12, 0),
        new ColumnConfig(6,  0),
        new ColumnConfig(3,  0),
        new ColumnConfig(2,  1),
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
    ], "3rd & 4th Bracket");

    renderTree(2, [
        new ColumnConfig(2, 0),
        new ColumnConfig(1, 0),
    ], "5th Bracket");

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

    alterResponsiveCssVars(shiftDown || ctrlDown);
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
    alterResponsiveCssVars(shiftDown || ctrlDown);
};

function alterResponsiveCssVars(enable) {
    console.log("yo");
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

window.onload = windowOnLoadStuff();
