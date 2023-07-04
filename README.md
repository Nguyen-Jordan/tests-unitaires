<h1 style='color:rgba(200, 252, 58, 1); font-size: 50px;'>Tests Unitaires</h1>

<ul>
    <li><span style='color: #02a2bc;  font-size: 18px;'>Selon-vous, qu’est-ce un test ?</span><br>
    Le test du logiciel est une discipline
    </li>
    <li><span style='color: #02a2bc;  font-size: 18px;'>À quoi servent les tests ?</span> <br>
    - Si vous partez avec l’optique de tester votre code, vous allez réfléchir différemment. <br>
    - Pour tester une classe facilement il faut s’assurer que l’on puisse lui injecter des données de
    test facilement. Ce qui n’est pas le cas si votre classe est trop dépendante du reste de votre
    app.<br>
    - Eviter les bugs, les plantages, les comportement inattendu
    </li>
    <li><span style='color: #02a2bc;  font-size: 18px;'>Y a-t-il plusieurs types de tests ? Si oui, quelle est leur différence ?</span> <br>
    <span style='color: #f1840e; font-size: 18px;'>1. Tests unitaires
    </span><span style= 'color: #f5d029'> Par les développeurs</span> <br>
    Les tests de composants ou les tests unitaires ont pour but de tester les différents
    composants ou fonction de code séparément afin de s’assurer que chaque élément
    fonctionne comme spécifié. Ces tests sont généralement écrits et exécutés par le
    développeur qui a écrit le code du composant.
    Pour une authentification, le bouton « se connecter » est un composant.<br>
    <span style= 'font-weight : bold'>Ces tests sont (ou doivent théoriquement) toujours automatisés.</span><br>
    <span style='color: #f1840e; font-size: 18px;'>2. Tests d’intégration</span><span style= 'color: #f5d029'> Par les développeurs et les testeurs</span><br>
    Les tests d’intégrations sont des tests effectués entre les composants afin de
    s’assurer du fonctionnement des interactions et de l’interface entre les différents
    composants. Ces tests sont également gérés, en général, par des développeurs.
    Toujours depuis l’authentification ici on vérifie que le message envoyé après l’appui
    sur le bouton « se connecter » est bien reçu par le serveur d’authentification.<br>
    <span style= 'font-weight : bold'>Ces tests peuvent être manuels ou automatisés.</span><br>
    <span style='color: #f1840e; font-size: 18px;'>3. Tests système</span><span style= 'color: #f5d029'> Par les testeurs</span><br>
    C’est les tests au sens le plus instinctif et c’est généralement les seuls qui sont
    effectués par les ingénieurs de tests. Leurs but est de vérifier que le système (le
    logiciel ou l’application dans son ensemble) répond aux exigences définies dans les
    spécifications. On les appelle souvent tests fonctionnels même si c’est un abus de
    langage car il existe des tests « non fonctionnels» qui peuvent être spécifiés
    (exemple de tests non fonctionnels : temps d’affichage d’une page).
    Ici on vérifie que l’authentification fonctionne bien, que les bonnes erreurs sont
    remontées…<br>
    <span style= 'font-weight : bold'>Ces tests peuvent être manuels ou automatisés (monkey tests), en général un
    mixte de tests automatisés et de tests manuels est ce qui a le meilleur retour
    sur investissement.</span><br>
    <span style='color: #f1840e; font-size: 18px;'>4. Tests d’acceptation</span><span style= 'color: #f5d029'> Par les clients</span><br>
    Les tests « finaux » effectués par le métier ou les utilisateurs finaux (par exemple
    avec une bêta test). Leurs but est de confirmer que le produit final correspond bien
    aux besoins des utilisateurs finaux.
    Attention : ce n’est pas parce qu’une application répond aux spécifications qu’elle
    répond aux besoins des utilisateurs. Cela peut arriver pour plusieurs raisons telles
    que des problèmes (ou trous) dans les spécifications, des problèmes d’ergonomie…
    Avec ces tests on vérifie qu’en plus de répondre aux exigences l’authentification
    correspond bien à ce à quoi le métier ou les clients finaux s’attendent (un champ
    authentification trop petit peut être problématique par exemple).<br>
    <span style= 'font-weight : bold'>Les tests d’acceptation sont des tests manuels.</span><br>
    </li>
    <li><span style='color: #02a2bc;  font-size: 18px;'>Intuitivement, à quelles bonnes pratiques de conception de tests, vous pouvez penser ?</span><br>
    Les tests doivent être restreints (dans leur scope fonctionnel) : on ne cherche pas à valider 50 choses en un seul test !<br>
    • <span style='color: #f1840e;'>Ils doivent être rapides à l’exécution :</span> pas de wait(60s) dans un test unitaire !<br>
    • <span style='color: #f1840e;'>Ils doivent être automatisés :</span> pas d’exécution manuelle de tests unitaires.<br>
    • <span style='color: #f1840e;'>Les tests sont nommés et organisés clairement :</span> les frameworks permettent
    aujourd’hui de parfaitement organiser les tests et encouragent à choisir des noms pertinents.<br>
    • <span style='color: #f1840e;'>Les tests peuvent s’exécuter sur le poste du développeur :</span> on doit pouvoir disposer
    d’un statut des tests unitaires sans avoir à mettre en œuvre une mécanique complexe de déploiement / démarrage de serveur etc.<br>
    • <span style='color: #f1840e;'>1 test = 1 use case. Dans l’idéal, une seule assertion par test unitaire :</span> ceci permet de savoir tout de suite ce qui ne va pas quand un test est en erreur<br>
    • <span style='color: #f1840e;'>Les résultats d’un test unitaire doivent être stables dans le temps. On doit bannir le test qui ‘clignote’ :</span> un coup « rouge », un coup « vert »… Ce test n’est pas fiable et
    doit être modifié ou supprimé !<br>
    • <span style='color: #f1840e;'>Les tests doivent être isolés et indépendants :</span> chaque test doit pouvoir être  exécuté, seul, et après ou avant n’importe quel autre test. Son bon fonctionnement
    ne doit pas dépendre du contexte fourni par un autre test.
    </li>getLetter, getWord, isInclude,
    letsTry, isLost,isAlreadyInsert,
    pushOnTable, showPlayerGuess, isWin
    dépendance. On préfèrera l’utilisation de mocks (stub, spy, fake, mock) pour éviter cela.<br>
    • <span style='color: #f1840e;'>Utiliser des try…catch :</span> dans les tests unitaires, on s’attend à telle ou telle erreur bien spécifique. On privilégie (quand le framework le permet) l’assertion sur
    le bon déclenchement d’une erreur.
    </li>
</ul>

<h2 style='color:#ff0000; font-size: 50px;'>Cahier des test</h2>

<h3 style='color: #02a2bc;  font-size: 18px;'> Comment rédiger un cahier de test ? </h3>

Lors de la rédaction du cahier de test, il est important d’inclure les éléments suivant

<ul>
    <li><span style='color: #f1840e;'>Nom du test: </span>Le titre qui décrit la fonctionnalité à tester.</li>
    <li><span style='color: #f1840e;'>ID du test : </span>Généralement un identifiant numérique ou alphanumérique que les testeurs utilisent pour regrouper les cas de test en suites de test.</li>
    <li><span style='color: #f1840e;'>Objectif : </span>Également appelé description, ce composant décrit ce que le test doit valider.</li>
    <li><span style='color: #f1840e;'>Références : </span>Liens vers vos « user stories » et les spécifications de conception ou les exigences que le test doit vérifier.</li>
    <li><span style='color: #f1840e;'>Conditions préalables : </span>Toutes les conditions nécessaires pour que le testeur puisse effectuer le test.</li>
    <li><span style='color: #f1840e;'>Configurations : </span>Ce composant identifie ce dont le scénario de test a besoin pour fonctionner correctement, comme la version de l'application, le système d'exploitation, les exigences en matière de date et d'heure et les spécifications de sécurité.</li>
    <li><span style='color: #f1840e;'>Étapes de test : </span>Des descriptions détaillées des actions séquentielles qui doivent être effectuées pour terminer le test.</li>
    <li><span style='color: #f1840e;'>Résultat attendu : </span>Une explication de la manière dont la fonctionnalité ou le système doit réagir.</li>
</ul>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Objectif</th>
            <th>Résultat attendu</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>1</th>
            <th>return a valid letter</th>
            <th>Retourne un caractère en majuscules</th>
            <th>Il récupère un caractère et il retourne le caractère en majuscules</th>
        </tr>
        <tr>
            <th>2</th>
            <th>get a word from the table</th>
            <th>Il choisi un mot du tableau</th>
            <th>Il récupère un mot aléatoire du tableau</th>
        </tr>
        <tr>
            <th>3</th>
            <th>contain letter on the word</th>
            <th>Il vérifie si le caractère fait partie du mot</th>
            <th>Il vérifie si le caractère fait partie du mot et il retourne un boolean</th>
        </tr>
        <tr>
            <th>4</th>
            <th>lets try count down</th>
            <th>Il vérifie la valeur et il décompte ou pas</th>
            <th>Il récupère un boolean et si il est false il soustrait le compteur</th>
        </tr>
    </tbody>
</table>

