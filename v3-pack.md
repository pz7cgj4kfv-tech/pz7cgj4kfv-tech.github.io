# PACK CONTRADICTEURS — CLUTCH V3 · v1.2 · 25.08.2026

## CURRENT STATE ID
- Date : 25.08.2026 (soir) · commit `70c6481` · TestFlight **build 4** (uploadé)
- Tests verts : 47 intégration + 10 unitaires = 57 · Migrations : 4 (001→004), LOCAL = TEST (Zurich) · PROD : pas encore créée (volontaire)
- Dernière slice VALIDÉE : 3 (rooms/chat) · Prochaine : 4 (PairOpening + Clutch + MeetSession)
- Événement du jour : Mandat Maître reçu → ROUND DE RÉCONCILIATION A→P rendu (`docs/RECONCILIATION-MANDAT-25aug.md`) ; BUG-002 découvert par la matrice d'états (voir Risques)

> ⚠️ PÉRIMÈTRE : TOUT ce qui est publié sur ce site HORS de ce pack (bibles, Forteresse,
> décisions historiques, /hq, /scenario, app /app2…) est de l'HISTORIQUE ou du V2 CLASSIC.
> Ne JAMAIS le considérer comme l'état actuel du produit. Ce pack est le seul point d'entrée
> externe ; le repo privé reste le réel interne, gardé par Claude Code.

> RÈGLE DE RÉPONSE : des DELTAS numérotés — (a) ce que tu contestes/ajoutes, (b) pourquoi en
> une phrase, (c) une proposition PRÉCISE et testable. Marque HYPOTHÈSE ce qui n'est pas un
> fait. Pas de réécriture générale, pas de compliments. Tes réponses sont triées GARDÉ/VIRÉ
> sur pièces par Claude Code, qui a le code et la base sous les yeux.

## 1 · Ce qu'est Clutch V3, en un paragraphe

Clutch V3 est « le réseau du temps partagé » : une app suisse (test à Lausanne) qui montre les
personnes qui possèdent réellement du temps disponible en commun maintenant, et laisse chaque
paire décider ce que ce temps devient : une conversation, une rencontre, ou les deux. Fenêtre
de disponibilité (maintenant ou ≤ 6 h), humeur souple (discuter / on voit / sortir : classe,
n'exclut jamais), étincelle réciproque obligatoire avant tout contact, conversation qui
n'existe que pendant le temps commun des deux, et « faire un Clutch » = le geste final où les
deux décident de se voir (dispositif de sécurité). Pas de messagerie asynchrone, jamais.
3e génération : V2 Classic (meeting-first, 2,5 mois) est figée et sert de carrière de code
débogué et de leçons (73 invariants → 66 tests de naissance).

## 2 · CONSTRUIT ET VÉRIFIÉ (sur pièces, pas déclaré)

Comptes (DOB privée) · fenêtres (max 2, annulation, refus structurés) · présence réelle
(heartbeat, « publier n'est pas être là ») · découverte temporelle (carte dessinée par Mel) ·
étincelle réciproque ATOMIQUE (verrou de paire, la course simultanée finit mutuelle) · refus
NEUTRES indistinguables (bloqué/genre/âge/sans-fenêtre = même code) · quota 5/fenêtre ·
blocage · et la CONVERSATION : la room naît DANS la transaction de la mutuelle ; en `waiting`
les deux peuvent écrire (illimité — question H2) ; le round démarre au premier échange
RÉCIPROQUE (`round = min(10 min, fin du temps commun)`) ; vote secret de continuer
(irréversible, réponse muette, invisible de l'autre — garanti par zéro policy SELECT + test) ;
OUI+OUI → `open` jusqu'au bout du temps commun ; toute autre fin est neutre ; mort par
l'horloge SERVEUR (résolution paresseuse, aucun client requis) ; « terminer » à tout moment.
Les conversations fermées restent en base, l'UI ne montre que 48 h (question H6).

## 3 · NON CONSTRUIT

Geste Clutch (poke silencieux → « on se voit ? ») · MeetSession · zone équitable (BLOQUÉE par
un audit anti-triangulation obligatoire avant réutilisation du moteur V2) · Angel · Keep/Liens
· photos de profil · push · Report · suppression de compte (les deux = exigences Apple/LPD
avant tout utilisateur externe) · modération (vote fondateur attendu) · design final.

## 4 · DÉCISIONS VERROUILLÉES (ne pas re-débattre sans fait nouveau)

Les 10 invariants de la constitution 24.08, dont : temps commun réel = condition du live ·
réciprocité avant tout message · PAS de messagerie asynchrone (tue « earned async ») · refus
jamais exposés · votes de paire privés · jamais la position · pas d'optimisation du temps
passé · préférences souples classent sans éliminer. Et du round de réconciliation (consensus
double challenge) : chat froid MORT (le premier message est l'invitation) · « chaud » = open
dans le temps commun, jamais une inbox · Continue ≠ Keep ≠ Clutch, jamais fusionnés ·
Continue OUI+OUI ne crée pas de Keep · MeetSession = objet distinct de la conversation ·
Spark temporelle (expire avec les fenêtres, jamais « 7 jours »).

## 5 · DÉCISIONS OUVERTES — c'est ICI qu'on attend les challengers

- **H1 (désaccord GPT ↔ Claude conv., non tranché)** : le temps commun finit PENDANT le round.
  Code actuel = A (round raccourci au temps commun). GPT = B (round impossible sous un minimum
  configurable) + C (proposer l'extension volontaire de fenêtre). Arguments neufs bienvenus.
- **H2** : avant la première réponse, combien de messages unilatéraux ? (aujourd'hui illimité ;
  recommandation 1 seul, en paramètre).
- **H3** : le vote « continuer » doit-il être rétractable jusqu'à la résolution du round ?
- **H5** : interdire le chevauchement des 2 fenêtres d'une même personne ?
- **H6** : rétention des conversations fermées (privacy) : purge à J+2 ? J+30 ? garder ?
- **H9** : nommer la fin naturelle (« votre temps commun est terminé ») en gardant neutres
  toutes les fins humaines ?
- **Les 3 votes fondateurs** : ① conversation excellente sans rencontre = succès ? ② lieu +
  créneau saisis dans Clutch au moment « on se voit » ? ③ modération : rien / filtre local /
  examen sur signalement / scan serveur ?
- **Slice 4 à dessiner** : la MEILLEURE micro-interaction du poke silencieux (l'autre voit son
  bouton s'allumer, jamais « elle veut te voir »).
- **Design** : thème blanc (charte Mel) vs prune sombre (V2) : arguments nocturnes bienvenus.

## 6 · HYPOTHÈSES ET PARAMÈTRES (jamais des lois)

round 10 min · rooms simultanées max 2 · 5 étincelles/fenêtre · horizon 6 h · 2 fenêtres max ·
heartbeat 30 s. Tous en `app_config`, départage par simulation (6 scénarios écrits, attendus
côté simulation) et par le pilote.

## 7 · RISQUES CONNUS (on ne se ment pas)

**BUG-002 (P0, réservé, fix imminent)** : annuler sa fenêtre ou bloquer ne ferme pas une
conversation déjà née — elle survit jusqu'à son échéance initiale. Trouvé par la matrice
d'états avant tout utilisateur. · Mutuelle sans conversation possible quand le plafond est
atteint (jamais rattrapée, TODO assumé). · Anti-multi-comptes : email seul = FAIBLE (réduit,
pas empêché — chantier hérité Q-05). · Anti-oracle par timing : non mesuré (P1). ·
Report + suppression de compte absents (P0 avant externe).

## 8 · DELTA DEPUIS v1.1

Mandat Maître reçu et exécuté en round de réconciliation A→P (radiographie complète : réel
vérifié, matrice d'états v1, invariants audités, table de décisions, plan de vitesse,
définition de « lançable »). BUG-002 découvert et réservé. Manifeste d'extraction renommé
V2C_EXTRACTION_MANIFEST. IDEA-0014 (geste async entre Liens) capturée au Lab au lieu d'être
codée. Aucune mécanique produit codée pendant le round (règle 105 respectée).

## 9 · DÉFINITION DE « LANÇABLE » (pilot local, liste fermée)

comptes · photo · fenêtres · présence · découverte+mood · étincelle · conversation complète ·
PairOpening+Clutch+MeetSession minimal · Angel minimum · Block · Report · suppression de
compte · modération selon vote ③ · push minimal · stabilité iOS · analytics funnel (événements
seulement, jamais le contenu) · CGU/données · TestFlight pilote. Tout le reste : V3.x / Lab.
