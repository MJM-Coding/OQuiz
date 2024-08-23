# Le besoin du client

---

## Ce qu'on a retenu

- Contexte :
    - Le client est une école
    - Il veut une plateforme de quizz pour ses élèves

- Structure du quizz :
    - Titre
    - Thématique => Cosmologie, informatique, culture G, etc.
    - Sujets relatifs au quizz (plusieurs sujets possibles pour un quizz) => pour la thématique cosmologie : espaces, realtivité, gravitation, etc.
    - Auteur (le quiz sera signé)
    - Liste de questions

- Structure de la question :
    - La question elle même
    - Liste de réponses possibles (QCM)
    - Potentiellement des informations complémentaires
    - Un niveau de difficulté (débutant, confirmé, expert, etc.) => intitulés à définir et pouvant évoluer

- 4 types de pages :
    - Page de connexion (login + mdp)
    - Page listant les quizz disponibles (page d'accueil)
    - Page de quizz avec le détails, les questions, les réponses, l'auteur, les sujets, etc. => le quizz sera un formulaire pouvant etre validé avec un bouton.
    - Page de résultat après validation :
        - Score
        - Listes des réponses correctes et incorrectes

Notes : 
- Pas besoin de stocker les réponses des élèves et le score
- Le client a expressement demandé de voir la structure claire de la BDD
- On a des pseudos maquettes/pseudos wireframes faite à la main pour les différentes pages.

## Ce qu'on veut éclaircir

- Dans les choses à éclaircir, comment les auteurs crééent leurs quizz ? via une page spéciale à faire ?
    => Réponse : oui, mais en V2.

- Il a parlé de sujets relatifs aux quiz. C'est à dire ? Des catégories ?
    => Réponse : Oui, des catégories/tags. Un quiz peut être associé à plusieurs catégories.

- Est ce qu'on doit, avoir un système de tri par thématiques et/ou sujets et/ou difficultés et/ou auteurs ?
    => Réponse : Pourquoi pas, très bonne idée, mais en V2. Pas pour la difficulté par contre car elle est lié aux questions, pas au quiz.

- Sur la page de résultat, est ce qu'on affiche les bonnes et mauvaises réponses, avec explications ?
    => Réponse : Oui on affiche les bonnes et mauvaises réponses. Par contre, pas d'explications, Google est ton ami...

- On parle de page de connexion. Est ce qu'il faudra une page d'inscription ? Si oui, est ce que ce sont les élèves qui s'inscrivent d'eux même, ou bien les admin qui le font ?
    => Réponse : rien pour la V1, je vais réflechir...

- On dit que les éleves doivent pouvoir se connecter. A quoi a-t-on accès si on n'est pas connecté ?
    => Réponse : Pas de connexion, pas de page. Il faut etre connecté pour tout (sauf evidement la page de connexion).

- Une page d'accueil ?
    => Réponse : Oui, la page sur laquelle on liste tous les quizz disponibles.