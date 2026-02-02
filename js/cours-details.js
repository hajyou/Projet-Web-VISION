const params = new URLSearchParams(window.location.search);
const cours = params.get("cours");

const titre = document.getElementById("titre-cours");
const meta = document.getElementById("meta-cours");
const contenu = document.getElementById("contenu-cours");

function setCours(t, html) {
    titre.textContent = t;
    meta.textContent = "Par : VISION";
    contenu.innerHTML = html;
}

if (cours === "recursivite") {
    setCours(
        "Introduction à la récursivité",
        `
        <p>
            La récursivité est une technique où une fonction s'appelle elle-même pour résoudre un problème.
            Elle repose sur deux éléments essentiels :
        </p>
        <ul>
            <li><strong>Cas de base</strong> : condition d'arrêt.</li>
            <li><strong>Cas récursif</strong> : appel sur un sous-problème plus simple.</li>
        </ul>
        <h4>Exemple : factorielle</h4>
        <pre style="background:#0f172a; padding:15px; border-radius:8px; overflow-x:auto;">
            n! = n × (n-1)!
            0! = 1
        </pre>
        `
    );
} else if (cours === "listes") {
    setCours(
        "Structures de données – Listes chaînées",
        `
        <p>
            Une liste chaînée est une structure de données composée de nœuds,
            chaque nœud contenant une valeur et un pointeur vers le suivant.
        </p>
        <ul>
            <li>Insertion en tête / en fin</li>
            <li>Suppression d'un élément</li>
            <li>Parcours séquentiel</li>
        </ul>
        `
    );
} else if (cours === "c-memoire") {
    setCours(
        "Programmation C – Gestion mémoire",
        `
        <p>
            En C, la gestion mémoire manuelle est centrale : tu dois allouer, utiliser et libérer la mémoire
            correctement pour éviter les fuites et les comportements indéfinis.
        </p>
        <ul>
            <li><code>malloc</code>, <code>calloc</code>, <code>realloc</code> : allocation dynamique</li>
            <li><code>free</code> : libération</li>
            <li>Ne jamais utiliser une zone après <code>free</code></li>
        </ul>
        <h4>Exemple simple</h4>
        <pre style="background:#0f172a; padding:15px; border-radius:8px; overflow-x:auto;">
            int *p = malloc(10 * sizeof(int));
            if (p == NULL) {
                // erreur d'allocation
            }
            /* ... utilisation ... */
            free(p);
        </pre>
        `
    );
} else if (cours === "linux") {
    setCours(
        "Linux – Processus & commandes avancées",
        `
        <p>
            Un processus est une instance d'un programme en cours d'exécution.
            Sous Linux, tu peux les observer et les gérer avec différentes commandes.
        </p>
        <ul>
            <li><code>ps</code>, <code>top</code>, <code>htop</code> : visualiser les processus</li>
            <li><code>kill</code> : envoyer un signal</li>
            <li><code>fork()</code>, <code>exec()</code> : création et remplacement de processus en C</li>
        </ul>
        `
    );
} else if (cours === "quicksort") {
    setCours(
        "Algorithmique – Tri rapide (QuickSort)",
        `
        <p>
            QuickSort est un algorithme de tri efficace basé sur la stratégie divide & conquer.
        </p>
        <ul>
            <li>Choix d'un pivot</li>
            <li>Partition du tableau en deux sous-parties</li>
            <li>Appels récursifs sur chaque sous-partie</li>
        </ul>
        `
    );
} else {
    setCours(
        "Cours non spécifié",
        "<p>Aucun cours n'a été sélectionné ou le paramètre est invalide.</p>"
    );
}