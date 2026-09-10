# LE MUR DE MEL · tout le graphisme et le design de Clutch, au 10.09.2026

> Ce document est écrit POUR Mélanie (co-fondatrice design) et pour l'IA qu'elle utilise.
> Il est régénéré à chaque fois que quelque chose bouge côté design. URL fixe, toujours la même :
> **https://pz7cgj4kfv-tech.github.io/mel-pack.md**
> Tout ce qui est écrit ici est vérifié dans le code ou dans les textes d'Apple. Ce qui est une
> supposition est marqué comme telle. Aucune décision n'est prise ici.

## COMMENT S'EN SERVIR (Mel, 30 secondes)

Ouvre ChatGPT (ou n'importe quelle IA qui sait lire un lien) et colle ceci :

> Lis ce document : https://pz7cgj4kfv-tech.github.io/mel-pack.md
> C'est le point complet sur le design de l'app Clutch dont je suis co-fondatrice design.
> Résume-moi ce qui a changé, et surtout : dis-moi ce que je dois décider, moi.
> Tu n'as pas d'avis à donner sur mon goût. Tu peux me contredire sur les faits.

Trois règles pour que ça reste utile :
1. **Ton IA résume et te contredit. Elle ne décide pas.** Le goût, la charte, les couleurs :
   c'est toi et David. Si elle te propose une palette, elle sort de son rôle.
2. **Le document change. Ton IA ne le sait pas toute seule.** Il faut lui redonner le lien à
   chaque fois. Un résumé d'hier peut être faux aujourd'hui.
3. **Ton IA ne peut que LIRE.** Elle n'écrit nulle part, elle ne prévient personne. Pour que
   ta réponse arrive jusqu'au code, c'est toi qui la poses sur le mur d'équipe (voir ci-dessous).

## COMMENT TU RÉPONDS (le mur d'équipe, aucune installation)

Va sur **https://pz7cgj4kfv-tech.github.io/collab**, onglet « 🧱 Mur d'équipe », mets ton prénom,
écris, envoie. C'est tout. Tu peux coller directement le résumé que ton IA t'a fait, ou écrire à
la main, ou ne poser qu'un mot par question.

Claude lit ce mur automatiquement au début de chaque session de travail : ce que tu postes est vu
avant qu'une ligne de code soit écrite. Pas besoin d'appeler David, pas besoin d'attendre. Tes
réponses sont recopiées verbatim dans le registre des décisions. On ne perd rien de ce que tu dis.

---

## 1 · CE QU'EST CLUTCH (pour que l'IA comprenne de quoi elle parle)

Une application de rencontre par le TEMPS, pas par les profils. Elle ne montre pas un catalogue de
gens : elle montre les personnes qui possèdent réellement une partie du même temps que toi,
maintenant ou dans les heures qui viennent.

1. J'ouvre une **fenêtre** de disponibilité (« je suis libre de 18 h à 21 h »).
2. Je vois les personnes dont le temps CROISE le mien. Le croisement est un fait, pas un filtre.
3. J'envoie une **étincelle**. Si l'autre en envoie une aussi, et seulement dans ce cas, une
   conversation s'ouvre. Aucun message n'existe sans réciprocité.
4. La conversation vit le temps du temps commun, puis elle meurt. Le **lien** peut survivre.
5. Le **Clutch** est le geste final : les deux acceptent de se voir, et Angel (la sécurité de
   rencontre) s'allume.

Quatre onglets : Présence · Chat · Liens · Profil. Vocabulaire maison : Clutch, Étincelle,
Fenêtre. Jamais match, jamais swipe, jamais like.

Ce que l'écran ne doit JAMAIS faire (c'est constitutionnel, pas négociable) : montrer une file de
prétendants · dire pourquoi quelqu'un n'est pas disponible · afficher une distance à une personne ·
faire pression avec un compte à rebours sur une chose déjà confirmée · fabriquer une récompense
visuelle qui donne envie de rouvrir l'app.

## 2 · TA PALETTE, TELLE QU'ELLE VIT DANS LE CODE

| Nom | Code | Usage écrit dans le code |
|---|---|---|
| prune | `#532943` (Pantone 5115 C) | nav active, splash, logo, ombres profondes |
| rose | `#EB6BAF` (Pantone 218 C) | labels actifs, « CLU », accents, boutons d'action |
| vert | `#77BC1F` (Pantone 368 C) | « TCH », validations, temps commun |
| noir 70 % | `#6F6F6E` | prénom, âge, description |
| noir 40 % | `#B2B2B2` | titres de page, horaire, lieu |
| blanc | `#FFFFFF` | fond |
| noir 15 % | `#E3E3E3` | ombres, contours |
| prune sombre | `#2C1020` | ombre sous le logo |

Cinq couleurs sont interdites dans l'app et le resteront (l'ancienne palette sombre de la V2).

## 3 · LES SIX ALERTES (ce qu'on a trouvé en ouvrant le code, 08.09)

1. **Ton logo n'est nulle part dans l'app.** Il n'existe que sur l'icône iOS. L'écran de démarrage
   est encore le logo bleu par défaut de l'outil de construction. Le mot CLUTCH est écrit
   CLU prune / TCH rose, alors que ta planche dit CLU rose / TCH vert.
2. **Il n'y a pas de système.** 26 tailles de texte différentes, 7 boutons principaux définis
   chacun dans leur coin (roses dans la Présence, verts dans le plan et Angel), une quarantaine de
   couleurs hors de ta palette (roses pâles inventés, deux gris qui contredisent les tiens, du noir
   pur). Pas un fichier de style : 5 500 lignes de styles écrits à la main dans les écrans.
3. **Des emojis font office d'icônes** (☕ 🍴 🚶 🎯 🕊️ 🔒 📜 ✉️ ➤ ⭐) alors que tu as livré
   74 fichiers d'icônes. **9 sont branchés** (la barre du bas), 65 dorment.
4. **La différence de Clutch ne se voit pas.** L'écran principal est une liste de personnes avec
   photo, prénom, âge : la forme de tous les annuaires. Le temps commun, qui est toute l'idée,
   est une petite heure verte de 10 px.
5. **Trois défauts de lisibilité mesurés** (formule officielle, recalculée à la main) : ton vert sur
   blanc est à 2,3 (seuil recommandé 4,5), ton rose sur blanc à 2,9, le gris 40 % à 2,1. Le gris
   70 % (5,0) et le prune (11,9) passent. Sur fond prune, ton rose est à 4,1 et ton vert à 5,1,
   donc ça marche. Les boutons sous les fiches font 30 px de haut, Apple recommande 44.
6. **Des choses provisoires visibles par un testeur** : « Conditions : à faire » dans le profil,
   « brouillon en relecture juridique » sur la confidentialité, une bannière d'erreur technique brute.

## 4 · LES QUATRE DIRECTIONS, ET CELLE QUI RESTE

Trois avis indépendants ont travaillé sur le même dossier sans se lire (Claude Code, un panel
Claude, GPT). Ils sont tombés sur la même conclusion.

- **A « la charte tenue »** : ta maquette exécutée au pixel, rien de plus. Verdict : indispensable
  comme socle, insuffisante comme direction (on reste un annuaire propre).
- **B « le temps en héros »** : une grande barre de temps par personne, la liste triée par temps
  commun. **Écartée.** Ça ressemble à un agenda partagé ; la barre qui se vide devient un sablier
  qui presse ; trier par temps restant revient à dire que 2 h 37 est une meilleure personne que 1 h 15.
- **C « la peau du soir »** : l'app passe en prune quand le moment vit. **Écartée.** Joli sur une
  capture, mais ça rouvre le thème blanc que tu as validé le 20.06, et une app qui s'allume quand
  « ça chauffe » fabrique une récompense visuelle, ce que la constitution interdit.
- **D « le segment commun »** : ce qui reste quand on enlève tout ce qui gêne dans B. **Un seul
  trait de 4 px dans ta fiche, à la place de l'heure verte.** Le gris, c'est mon créneau ; le vert,
  c'est la part qu'on partage ; les deux heures aux bouts. La photo, le prénom, la hauteur de 70 px
  ne bougent pas. Rien ne s'anime, rien ne se vide, pas de tri par urgence.

La phrase qui résume : le temps ne doit pas prendre la place des personnes, il doit expliquer
pourquoi ces personnes sont là.

D n'est pas « le meilleur ». C'est le moins bête, et il doit être prouvé par un test à deux, une
soirée, deux téléphones. Huit signes d'alerte, deux suffisent pour abandonner : l'un de vous
choisit quelqu'un parce qu'« il reste plus longtemps » · l'un de vous ne sait pas dire en
3 secondes ce que veut dire le vert · quelqu'un lit le vert comme « voilà quand l'autre est
disponible » (le pire, ce serait un mensonge) · après cinq fiches vous ne regardez plus les traits ·
**Mel refuse le trait à la place de ses heures vertes** · David dit « je veux voir les gens plus
grands » · vous ouvrez l'app plus de six fois dans l'heure sans raison · le mot « agenda »,
« tableau » ou « Doodle » sort tout seul.

Le canevas avec les écrans dessinés :
https://claude.ai/code/artifact/85591e54-007a-4409-9cc9-953f1ad0fbb2

## 5 · LES SIX QUESTIONS QUI SONT À TOI (rien n'est codé tant que tu n'as pas répondu)

Chacune contredit une de tes décisions ou touche ta charte. Personne ne les tranchera à ta place.

1. **Le trait vert à la place des heures vertes**, dans tes 70 px : oui ou non ?
2. **Les heures écrites en gris 70 % au lieu de vert** ? (ton vert ne se lit pas au soleil : 2,3
   contre 4,5 recommandé. La forme porterait l'information, le gris porterait le texte.)
3. **Le bouton principal : prune ou rose ?** Ta maquette du 20.06 montre un bouton prune
   « Nouvelle disponibilité » et des accents roses ; ta charte dit rose pour les actions. Le texte
   blanc sur ton rose est sous le seuil de lisibilité, sur le prune il est très au-dessus.
4. **Le mot CLUTCH dans l'app** : CLU rose / TCH vert (ta planche) ou CLU prune / TCH rose (ce que
   l'app fait depuis la V2) ?
5. **La grosse** : ta fiche est écrite à 8,8 / 9 / 10 px. Apple recommande 11 pt minimum et un texte
   qui grandit quand la personne agrandit les caractères de son téléphone. Soit tu gardes tes
   tailles (c'est ta spec, c'est permis, mais des gens ne liront pas), soit on monte et la fiche
   perd une ligne ou grandit. Les deux ne tiennent pas ensemble.
6. **Une commande** : l'icône de l'Étincelle, le geste central de l'app, n'existe pas. C'est la
   priorité 1 de dessin.

## 6 · LE PROFIL (contrat écrit le 08.09, ton visuel attendu)

Décision prise sur le fond : **ce n'est pas un profil de dating.** Pas de catalogue de soi. Un
profil de confiance minimal ; ce que la personne veut MAINTENANT vit sur le créneau, pas sur le profil.

**Ce qu'il fera** : 1 à 5 photos (principale + 4), modérées une par une, réordonnables · une bio
courte filtrée · l'option « mon âge est visible » · la phrase du moment (140 signes, elle vit sur le
créneau et meurt avec lui) · les personnes bloquées (compteur, liste, déblocage) · invisibilité à mon
répertoire · Angel · notifications · personnes gardées · Aide, Sécurité, Confidentialité, Conditions
réelles, Contact · supprimer mon compte · déconnexion.

**Ce qu'il ne fera pas, et c'est voulu** : passions, métier, études, taille, astro, alcool, tabac,
enfants, religion, politique, origine, Spotify, Instagram, tests de personnalité, score de fiabilité
affiché, « qui a vu mon profil », « en ligne », stories, album privé, vérification par selfie.

**Ce qui t'attend là-dedans** : la mise en page de la page, la grille de photos (ajouter, réordonner,
supprimer), l'écran de recadrage, l'état vide (aucune photo), et le ton des messages de refus quand
le filtre bloque un numéro de téléphone ou une adresse.

## 7 · LES TRUCS FUN (ton idée, elle est vivante et personne ne l'a enterrée)

Ton idée du « sérieux mais fun » est captée sous IDEA-0024 et au Radar sous R-FUN-VISAGES. Un
challenge adverse a été écrit le 09.09 : un panel de cinq personnes qui doivent se contredire (une
directrice artistique venue de l'animation, un spécialiste de la sensation qui ne demande qu'une
chose, « est-ce que c'est encore drôle la centième fois », une anthropologue du jeu entre inconnus,
une responsable sécurité et dignité avec droit de veto, un archiviste des échecs qui ne propose rien
et dit seulement ce qui est déjà mort ailleurs).

**Rien n'est codé, rien n'est décidé.** Le tri de ce que ce panel rendra se fera avec toi et David.
La règle du produit, elle, est déjà posée : un seul moment fastueux par parcours (le double oui, le
« on se voit »), tout le reste chuchote.

## 8 · CE QUI SE FAIT SANS ATTENDRE TA RÉPONSE, ET CE QUI ATTEND

**Sans décision (le socle, 3 à 4 jours) :** le vrai écran de démarrage prune avec ton logo · l'écran
de connexion aux bonnes couleurs et sous l'encoche · un seul jeu de tailles et un seul bouton
principal · les couleurs hors palette remplacées par des teintes tirées de la tienne · « à faire »,
« brouillon » et la bannière d'erreur cachés · les cibles tactiles montées à 44 px.

**Qui attend ta réponse :** le trait vert (question 1) · la couleur des heures (2) · la couleur du
bouton (3) · le mot-symbole (4) · la taille du texte de la fiche (5) · l'icône de l'Étincelle et le
branchement des 65 SVG qui dorment (6).

Estimation honnête, avec marge : une semaine et demie de code pour tout, pas moins.

---

**Ce qu'on attend de toi, en une ligne :** réponds aux six questions du §5, dans l'ordre, même par
un mot chacune. Tout le reste peut attendre.

_Version du 10.09.2026. Régénéré à chaque changement. Les documents complets derrière ce résumé :
le dossier graphique (41 surfaces écran par écran), le tri des deux challenges, le contrat de la
page Profil. Demande-les si tu veux le détail._
