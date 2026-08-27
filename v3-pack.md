# PACK CONTRADICTEURS — CLUTCH V3 · v1.4 · 26.08.2026

## CURRENT STATE ID (généré automatiquement — aucune valeur saisie à la main)
- Horodatage : 2026-08-27 10:22 UTC · commit `95e0f52` · build client **6**
- Assertions de test : **117** dans 11 fichiers d'intégration (+ 10 tests unitaires de domaine)
- Migration locale la plus récente : **15_la_ville** · réellement présente sur le cloud (sondée) : **15**
- Si ces deux nombres diffèrent, le cloud attend un `supabase db push` de David.

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
NEUTRES indistinguables (bloqué/genre/âge/sans-fenêtre = même code) · étincelles REÇUES
VISIBLES (V3-013 « mode bourrin ») · quota 5/fenêtre · blocage (qui ferme aussi la
conversation, BUG-002 corrigé) · « Garder le lien » privé → LIEN mutuel (onglet Liens) · et la CONVERSATION : la room naît DANS la transaction de la mutuelle ; en `waiting`
les deux peuvent écrire (illimité — question H2) ; le round démarre au premier échange
RÉCIPROQUE (`round = min(10 min, fin du temps commun)`, CHRONO minutes visible) ; vote secret
de continuer (irréversible, invisible de l'autre — testé) ; OUI+OUI → `open` IMMÉDIATEMENT
(V3-014) et sinon résolution à l'échéance ; toute autre fin est neutre ; mort par
l'horloge SERVEUR (résolution paresseuse, aucun client requis) ; « terminer » à tout moment.
Les conversations fermées restent en base, l'UI ne montre que 48 h (question H6).

## 3 · NON CONSTRUIT

Geste Clutch (poke silencieux → « on se voit ? ») · MeetSession · zone équitable (BLOQUÉE par
un audit anti-triangulation obligatoire avant réutilisation du moteur V2) · Angel · le RÉVEIL
des Liens · photos de profil · push · Report · suppression de compte (les deux = exigences Apple/LPD
avant tout utilisateur externe) · modération (vote fondateur attendu) · design final.

## 4 · DÉCISIONS VERROUILLÉES (ne pas re-débattre sans fait nouveau)

Les 10 invariants de la constitution 24.08, dont : temps commun réel = condition du live ·
réciprocité avant tout message · PAS de messagerie asynchrone (tue « earned async ») · refus
jamais exposés · votes de paire privés · jamais la position · article 8 (pas d'optimisation du temps passé) ACTIF MAIS EN RÉVISION FORMELLE · préférences souples classent sans éliminer. Et du round de réconciliation (consensus
double challenge) : chat froid MORT (le premier message est l'invitation) · « chaud » = open
dans le temps commun, jamais une inbox · Continue ≠ Keep ≠ Clutch, jamais fusionnés ·
Continue OUI+OUI ne crée pas de Keep · MeetSession = objet distinct de la conversation ·
Spark temporelle (expire avec les fenêtres, jamais « 7 jours »).

## 5 · ÉTAT RÉEL DE CHAQUE DÉCISION (DELTA-02 : plus rien n'est « ouvert » par paresse)

Statuts : **OUVERTE** (personne n'a tranché) · **DÉCIDÉE-NON-CODÉE** · **CODÉE** · **REMPLACÉE**.

| Réf | Sujet | Statut | Détail |
|---|---|---|---|
| Q2 | découverte croisée même en mode discuter | **CODÉE** | David 27.08 ; migration 011, 10 tests |
| Q5 | re-parler après une fin | **DÉCIDÉE-NON-CODÉE** | lien mutuel → tout de suite ; sinon 60 min, cause jamais révélée |
| H1 | temps commun qui finit pendant le round | **OUVERTE** | le code fait A ; B (round impossible sous un minimum) reste à voter |
| H2 | messages avant la première réponse | **OUVERTE** | illimité aujourd'hui ; « 1 seul » proposé, jamais voté |
| H3 | vote « continuer » rétractable | **DÉCIDÉE (statu quo)** | David 25.08 en test : il reste posé. GPT le donne pour « convergé rétractable » : c'est FAUX |
| H5 | chevauchement de mes deux créneaux | **OUVERTE** | rien ne l'empêche |
| H6 | rétention | **DÉCIDÉE (direction)** | l'utilisateur ne voit aucun historique ; le programme garde un temps borné. Découpage en 4 politiques adopté (DELTA-13) |
| H9 | nommer la fin naturelle | **OUVERTE** | proposé, jamais voté |
| A8 | article 8 | **ACTIF, EN RÉVISION FORMELLE** | l'ancien texte reste exécutoire ; le candidat attend Mel et Dom (DELTA-03) |
| 3 votes | succès sans rencontre · lieu saisi · modération | **OUVERTES** | Dom ne s'est pas prononcé |

⚠️ **Correction adressée au challenger** : les H1, H2, H5, H9 n'ont jamais été votées par les
fondateurs, et H3 a été tranchée dans l'autre sens que ce qui est affirmé. Une recommandation
d'un contradicteur n'est pas une décision : seuls David, Mel et Dom décident.

## 5bis · BUILD / RADAR / BLOCKERS (DELTA-20)

**BUILD NOW** (ce qui rapproche du pilote) : slice 4A (le poke privé jusqu'à l'accord mutuel
de se voir) · cooldown de paire (Q5) · balayage i18n · signalement et suppression de compte.
**RADAR** (étudié, volontairement pas codé) : voir `RADAR.md` (R1→R16).
**BLOCKERS** (les seules choses autorisées à interrompre le Build) : un bug de sécurité, une
incohérence constitutionnelle, une perte de données, un blocage total des testeurs.

## 6 · HYPOTHÈSES ET PARAMÈTRES (jamais des lois)

round 10 min · rooms simultanées max 2 · 5 étincelles/fenêtre · horizon 6 h · 2 fenêtres max ·
heartbeat 30 s. Tous en `app_config`, départage par simulation (6 scénarios écrits, attendus
côté simulation) et par le pilote.

## 7 · RISQUES CONNUS (on ne se ment pas)

**BUG-002 : CORRIGÉ le 25.08 au soir** (migration 007, 5 tests). · Mutuelle sans conversation possible quand le plafond est
atteint (jamais rattrapée, TODO assumé). · Anti-multi-comptes : email seul = FAIBLE (réduit,
pas empêché — chantier hérité Q-05). · Anti-oracle par timing : non mesuré (P1). ·
Report + suppression de compte absents (P0 avant externe).

## 8 · DELTA v1.4 — LE TRI DU RADAR V4 EST FAIT (26.08)
Les réponses GPT (parties 1-3) + commentaires David ont été triées sur pièces : voir RADAR.md
(le registre unique), CLUTCH-MUST-NEVER.md (12 interdictions), FAILURE_LIBRARY.md,
HUMAN_CONCEPTS_LAB.md. Gouvernance gravée : BUILD/RADAR lanes + 5 cerveaux + Feature
Contract + SIMPLE·UTILE·SÛR·FUN + rapport 5 lignes. CODÉ (validés, 83 tests verts) :
retrait d'étincelle UI + anti-clignotement (retirée = pas renvoyable même opportunité) +
quota GLISSANT (fermer/rouvrir ne réinitialise rien) + MASQUER (portée fenêtre, jamais
révélé). TUÉS : karma-sanction de visibilité, chaud/froid par inactivité, last-seen précis,
files d'attente. A8-CANDIDAT (amendement art. 8, texte GPT) attend Mel + Dom. Prochaine
étape produit : test avec des personnes N'AYANT PAS participé à la conception, sans
explication préalable.

## 8ter · DELTA v1.3 — LE PREMIER TEST RÉEL A EU LIEU (25.08 soir)
David et Mel ont vécu la boucle complète (mutuelle → speed chat → vote secret → fin neutre).
Décisions de test, codées et testées le soir même : V3-013 étincelles reçues VISIBLES
(« mode bourrin » : le double-aveugle tombe, les refus restent neutres) · V3-014 OUI+OUI
ouvre le chat IMMÉDIATEMENT · V3-015 « Garder le lien » (privé, réciproque = LIEN, onglet
Liens vivant) · V3-016 chrono-checkpoint visible + « main invisible » v1 (rappel à 3 min).
BUG-002 CORRIGÉ (annulation de fenêtre / blocage ferment désormais les conversations, avec
recalcul sur la 2e fenêtre). BUG-003/004 (majuscule iPhone, session) corrigés. 74 tests
verts. Nouvelles questions ouvertes pour TOI : voir le prompt dédié
https://pz7cgj4kfv-tech.github.io/v3-prompt.md (mode bourrin, main invisible, album privé,
indicateurs de frappe, anti-capture). Au Lab : IDEA-0015→0018.

## 8bis · DELTA v1.2 (historique)

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
