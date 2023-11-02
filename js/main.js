const pg = document.querySelectorAll('.replique');
const r1 = document.getElementById('r1');
const r2 = document.getElementById('r2');
const r3 = document.getElementById('r3');
const r4 = document.getElementById('r4');
const selected = document.getElementById('selected');
const haut = document.getElementById('haut');
const bas = doxument.getElementById('bas');

// EX 2
pg.forEach(element => {
    element.addEventListener('click', function() {
        if (this.classList.contains('yellow')) {
            this.classList.remove('yellow');
        } else {
            this.classList.add('yellow');
        }
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