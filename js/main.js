const repliques = document.getElementById('repliques');
const pg = document.querySelectorAll('.relique');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const selected = document.getElementById('selected');
const haut = document.getElementById('haut');
const bas = document.getElementById('bas');
const pgTable = [
    `Réplique 1 : <span>« Pourquoi voulez-vous boxer ?" - Parce que je ne peux pas chanter ou danser »</span> (Rocky)`,
    `Réplique 2 : <span>« Il y a un dicton en Italie : on peut se brûler la langue avec un bol de soupe. - Il y a un dicton en Irlande : rien à foutre des dictons italiens ».</span> (Piège en eaux troubles)`,
    `Réplique 3 : <span>« Alex, ne fait pas ça, c'est ton frère! - Pourquoi, parce qu'il me ressemble? Je vais changer ça tout de suite »</span> (Double Impact)`,
    `Réplique 4 : <span>« T'aimes bien les omelettes ? ... Tiens, je te casse les œufs ! »</span> (Last Action Hero)`
];

let clickMemory = null;

function changeBackgroundColor(el) {
    if (clickMemory === el) {
        el.classList.toggle('yellow');
        el.classList.toggle('white');
        clickMemory = null;
        console.log(clickMemory);
    } else if (clickMemory === null) {
        clickMemory = el;
        el.classList.toggle('yellow');
        el.classList.toggle('white');
        console.log(clickMemory);
    } else {
        clickMemory.classList.remove('yellow');
        clickMemory.classList.add('white');
        clickMemory = el;
        el.classList.toggle('yellow');
        el.classList.toggle('white');
        console.log(clickMemory);
    }
}

// EX 2, 3 et 5
pg.forEach(element => {
    element.addEventListener('click', function() {
        changeBackgroundColor(this);
        console.log(clickMemory);
    })
});

// EX 3 et 5
r1.addEventListener('click', function() {
    this.classList.add('yellow');
    selected.innerHTML = "Réplique séléctionnée : 1";
    if (r2.classList.contains("yellow") || r3.classList.contains("yellow") || r4.classList.contains("yellow")) {
        r2.classList.remove('yellow');
        r3.classList.remove('yellow');
        r4.classList.remove('yellow');
    }
})

r2.addEventListener('click', function() {
    this.classList.add('yellow');
    selected.innerHTML = "Réplique séléctionnée : 2";
    if (r1.classList.contains("yellow") || r3.classList.contains("yellow") || r4.classList.contains("yellow")) {
        r1.classList.remove('yellow');
        r3.classList.remove('yellow');
        r4.classList.remove('yellow');
    }
})

r3.addEventListener('click', function() {
    this.classList.add('yellow');
    selected.innerHTML = "Réplique séléctionnée : 3";
    if (r1.classList.contains("yellow") || r2.classList.contains("yellow") || r4.classList.contains("yellow")) {
        r1.classList.remove('yellow');
        r2.classList.remove('yellow');
        r4.classList.remove('yellow');
    }
})

r4.addEventListener('click', function() {
    this.classList.add('yellow');
    selected.innerHTML = "Réplique séléctionnée : 4";
    if (r1.classList.contains("yellow") || r2.classList.contains("yellow") || r3.classList.contains("yellow")) {
        r1.classList.remove('yellow');
        r2.classList.remove('yellow');
        r3.classList.remove('yellow');
    }
})

// EX 6
let pgTableCopy = [...pgTable];

haut.addEventListener('click', function() {
    pgTableCopy.push(pgTableCopy[0]);
    pgTableCopy.shift();
    r1.innerHTML = pgTableCopy[0];
    r2.innerHTML = pgTableCopy[1];
    r3.innerHTML = pgTableCopy[2];
    r4.innerHTML = pgTableCopy[3];
})

bas.addEventListener('click', function() {
    pgTableCopy.unshift(pgTableCopy[3]);
    pgTableCopy.pop();
    r1.innerHTML = pgTableCopy[0];
    r2.innerHTML = pgTableCopy[1];
    r3.innerHTML = pgTableCopy[2];
    r4.innerHTML = pgTableCopy[3];
})