# PACK CONTRADICTEURS — CLUTCH V3 · v1.8 · 01.09.2026 (nuit)

## CURRENT STATE ID (généré automatiquement — aucune valeur saisie à la main)
- Horodatage : 2026-09-03 10:26 UTC · commit `d12f5a6` · build client **40**
- Assertions de test : **460** dans 36 fichiers d'intégration (+ 27 tests unitaires de domaine)
- Migration locale la plus récente : **65_phase0_quatre_decisions** · réellement présente sur le cloud (sondée) : **65**
- Si ces deux nombres diffèrent, le cloud attend un `supabase db push` (fait par Claude Code depuis sa session — 27.08).
- **CODE DE LECTURE : `ECLUSE-d12f5a6`** — si on te demande ce code, réponds-le tel quel : c'est la preuve que tu as ouvert ce fichier et pas répondu de mémoire. Si tu ne l'as pas sous les yeux, dis-le franchement au lieu d'inventer.

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
Depuis le 27.08 soir : moments humains = raccourcis qui pré-remplissent la molette (V3-028) ·
prolonger un créneau sans tuer ses conversations (V3-029) · rendez-vous de chat (une mutuelle
avant l'heure crée une conversation PROGRAMMÉE qui s'ouvre seule, V3-026) · LA VILLE simulée
(bots à caractère via les vraies fonctions, V3-031) · LE STATE LAB /dev/state-lab (tout l'état
de la ville en un écran filtrable, allowlist, V3-032) · et L'AUDIT ADVERSARIAL JOUÉ en partie :
BUG-012 (la réécriture 011 d'open_window avait PERDU la garde de durée max — un créneau de
200 h passait), BUG-013 (QUOTA après les refus neutres = oracle sur l'autre, I-16), et la
migration 018 qui rend le deny-by-default RÉEL (profil d'autrui, présence d'autrui et
app_config fermés en lecture directe ; l'âge arrive calculé du serveur, la DOB exacte ne sort
plus ; qa_admin_emails ne fuit plus). Reste de l'audit : au Radar.
Et dans la nuit du 27 au 28.08 : LE BUSY (§11 — pendant mon round je ne peux ni démarrer ni
alimenter une autre conversation ; je sors des présences pour les nouvelles personnes ; la
CAUSE n'est jamais exposée ; deux paramètres séparés) · l'UNDO du retrait d'étincelle (10 s,
l'étincelle d'origine est restaurée) · le COOLDOWN DE PAIRE réel (60 min sans lien, refus
littéralement identique à tous les autres refus — testé contre un refus de filtre) · la
DYNAMIQUE DES LIENS (se reparler sans re-étinceler, liens en tête des présences, exemption du
busy ; le réveil par notification reste NON codé) · et le LEVIER DE CONFIG (changer les
valeurs en direct depuis le State Lab, chaque changement tracé).

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
| Q5 | re-parler après une fin | **CODÉE** | 27.08 nuit, migration 020 : lien mutuel → tout de suite ; sinon `pair_cooldown_minutes` (60), refus identique à tous les autres |
| §11 | BUSY / attention | **CODÉE (3 hypothèses à valider)** | 27.08 nuit, migration 019 — voir §6bis |
| §13 | undo du retrait | **CODÉE** | 10 s, l'étincelle d'origine est restaurée |
| §13bis | cooldowns PROGRESSIFS | **CONFLIT NON TRANCHÉ** | le mandat les demande, V3-018 les interdit — personne n'a arbitré |
| Q4③ | le réveil des liens (notification) | **OUVERTE** | ① et ② codés ; ③ exige les push et une décision |
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
côté simulation) et par le pilote. Depuis le 27.08 nuit, ils se changent EN DIRECT depuis le
State Lab (`qa_set_config`, allowlist, chaque changement tracé) : plus besoin de redéployer
pour tester une valeur. Nouvelles clés : `spark_undo_seconds` 10 · `pair_cooldown_minutes` 60
· `max_active_speed_rounds` 1 · `max_open_live_conversations` 2 (remplace max_live_rooms) ·
`links_rekindle_enabled` true · `links_first_in_discovery` true.

## 6bis · CE QUI ATTEND TON CHALLENGE EN PRIORITÉ (27.08 nuit — 5 hypothèses fraîches, codées mais NON validées)

Elles sont codées pour être TESTABLES, pas parce qu'elles sont tranchées. Chacune est
réversible par un paramètre. Attaque-les une par une (garde/vire, et pourquoi) :

1. **H-BUSY-1** — étinceler quelqu'un qui est en plein speed chat PASSE (l'étincelle est
   discrète : aucun push, aucun compteur). Le BUSY protège les conversations, pas la boîte à
   étincelles. Contre-thèse à évaluer : ça crée une pile d'étincelles qu'on découvre après.
2. **H-BUSY-2** — si l'AUTRE est occupé, mon message part quand même et le round démarre
   PARESSEUSEMENT au message suivant, quand les deux sont libres. C'est le prix de l'anti-oracle
   (jamais dire « elle est occupée »). Contre-thèse : la personne écrit dans le vide sans
   comprendre pourquoi rien ne démarre. Y a-t-il une formulation honnête qui n'informe pas
   sur l'autre ? (« le round démarrera quand vous serez tous les deux disponibles » dit-il
   trop ?)
3. **H-BUSY-3** — pendant son round, une personne sort des présences pour les NOUVELLES
   personnes seulement ; ses créneaux futurs, ses étincelles en cours et ses LIENS restent
   visibles. Le périmètre est-il le bon ? Une disparition/réapparition répétée est-elle
   elle-même un signal exploitable par un observateur qui rafraîchit ?
4. **H-LINK-1/2** — un LIEN permet de rouvrir une conversation SANS re-étinceler et saute le
   cooldown de 60 min ; il exempte aussi du BUSY. Garde-fou posé : le lien ne donne accès
   qu'à ce que la présence donnerait de toute façon, et se rompt des deux côtés en silence.
   Est-ce que « le lien est une permission permanente d'écrire » affaiblit l'invariant 2
   (aucun message sans réciprocité) ? Nous pensons que non (la réciprocité est ACQUISE), mais
   c'est exactement le genre de glissement qui fabrique une messagerie asynchrone déguisée.
5. **CONFLIT OUVERT, tranché par personne** — le mandat §13 demande des cooldowns PROGRESSIFS
   (retirer/renvoyer coûte de plus en plus cher) ; V3-018, validée au tri du Radar, dit
   « aucun étage de cooldowns ». Les deux ne peuvent pas être vrais. Quel est le coût réel de
   chaque branche pour une femme harcelée d'un côté, pour un utilisateur normal de l'autre ?

Et une question de méthode, pas de produit : **le BUSY se mesure-t-il honnêtement avec des
bots ?** Nous avons une ville simulée qui joue par les vraies fonctions ; mon propre challenge
du matin disait « ce mécanisme est invisible à trois testeurs ». Je l'ai codé quand même parce
que la ville permet de l'observer. Est-ce un raisonnement valide ou une auto-justification ?

**PREMIÈRE MESURE, ET CE QU'ELLE A COÛTÉ EN CRÉDIBILITÉ (27.08 nuit, `scripts/mesure-busy.mjs`)**
La même question a reçu QUATRE réponses successives, toutes fausses sauf la dernière :
① « ça ne coûte rien » (60 bots) : faux, seules 9 conversations étaient nées et presque
personne n'avait deux conversations à la fois, donc le mécanisme n'a jamais été exercé.
② « ça tient », puis dix minutes plus tard « ça coûte » : un tirage unique d'un monde
aléatoire raconte le hasard. ③ « ça coûte 7 à 10 points », sur trois tirages concordants,
donc apparemment solide : **faux aussi**, et c'est le plus instructif. Tous les ticks
tombaient dans la même seconde réelle ; un round dure 10 minutes, donc aucun round ne se
terminait jamais : un bot qui commençait une conversation restait « occupé » jusqu'à la fin
du monde. On mesurait un blocage permanent que le produit ne fabrique pas.
④ Horloge avancée de 5 min par tick (2 h de soirée simulée), 3 tirages : **+14, 0, −6 points.
Aucun effet détectable, et la mesure ne tranche pas.**
Ce qu'on en retient et qu'on te soumet : H-BUSY-2 n'est ni validée ni réfutée ; le seul
verdict acquis est méthodologique (une simulation d'un produit temporel doit faire avancer son
horloge, sinon tout état transitoire devient permanent, et le faux résultat est CRÉDIBLE parce
qu'il est reproductible). **Question au contradicteur : quel protocole rendrait cette question
décidable autrement que par l'observation d'humains ?**

## 6ter · L'AUDIT 014→022 A ÉTÉ JOUÉ (27.08 nuit) : 3 FAILLES SUR 7 ATTAQUES

Tout ce qui a été construit après la migration 013 n'avait jamais été attaqué. Ça l'a été,
et cette fois les attaques sont EXÉCUTABLES (`tests/integration/audit-014-022-server.mjs`) :
cet audit ne se relit pas, il se relance.

**Trouvé et fermé le soir même :**
① La ville simulée DÉBORDAIT sur les vrais gens : `is_qa` était un drapeau posé à la
fondation que personne ne lisait, donc une testeuse voyait 7 bots dans ses présences et
pouvait leur envoyer une étincelle. Une soirée de test avec des amis aurait été polluée de
faux profils. ② Un LIEN contournait le geste « masquer » : la personne masquée pouvait
rouvrir une conversation qui réapparaissait dans le Chat de celle qui l'avait masquée.
③ Le levier de config pouvait modifier SA PROPRE allowlist (l'admin s'élargissait depuis
l'app, sans migration ni revue) et bloquer toute la flotte avec un chiffre de trop.

**Deux aveux qui valent plus que les trois failles :**
· Au premier passage, l'attaque ① était VERTE. Non parce que le code filtrait, mais parce que
le hasard avait semé les bots dans d'autres villes et que le filtre géographique les cachait.
Il a fallu forcer un bot au même endroit que l'humaine pour voir le trou. **Un test qui passe
pour de mauvaises raisons est plus dangereux qu'un test absent.** Deux autres assertions
étaient fausses elles-mêmes (elles interrogeaient une fonction avec le service role, donc sans
identité : la réponse était « non authentifié » et l'assertion validait du vide).
· Mon correctif a CASSÉ la ville dans la foulée (les bots ne se voyaient plus entre eux, zéro
étincelle), attrapé en dix minutes par la suite de tests. La règle juste n'était pas « les
bots sont invisibles » mais « le laboratoire est visible du laboratoire ».

**Ce que l'audit ne prouve toujours pas, et qu'on te soumet :** le canal d'inférence du BUSY
reste ouvert et semble structurel. Quelqu'un qui note l'horaire annoncé d'une personne et
rafraîchit peut constater sa disparition AVANT la fin annoncée : la cause n'est pas exposée
(round, masquage ou annulation sont indistinguables), mais la disparition l'est. On ne sait
pas fermer ça sans mentir sur les horaires. **Y a-t-il une sortie qu'on ne voit pas ?**

## 7 · RISQUES CONNUS (on ne se ment pas)

**BUG-002 : CORRIGÉ le 25.08 au soir** (migration 007, 5 tests). · Mutuelle sans conversation possible quand le plafond est
atteint (jamais rattrapée, TODO assumé). · Anti-multi-comptes : email seul = FAIBLE (réduit,
pas empêché — chantier hérité Q-05). · Anti-oracle par timing : non mesuré (P1). ·
Report + suppression de compte absents (P0 avant externe).

**Deux écarts avec nos propres règles de fondation, mesurés le 27.08 nuit (personne ne nous
les a demandés, on les publie quand même)** : ① la règle 8 dit « les 66 tests d'invariants
hérités = la suite de naissance » — il y en a **18**, pas 66. Les invariants V2 n'ont jamais
été portés en bloc ; ce sont les 186 assertions d'intégration serveur qui font le travail, et
elles couvrent le comportement, pas la liste héritée. ② La règle 8 dit aussi « danger anticipé
→ test rouge → code → test vert » : cette nuit les tests ont été écrits APRÈS le code (ils
sont passés du premier coup, ce qui prouve moins qu'un test qu'on a vu échouer). Un seul
garde-fou a réellement mordu au rouge : l'auto-check anti-coordonnées de la migration 016,
qui a refusé ma propre migration. ③ Enfin `MapLeaflet.tsx` (758 lignes, hérité) contient
plusieurs `catch {}` silencieux — sur de l'affichage de carte, mais la règle 4 ne fait pas
d'exception écrite.

## 8sexies · DELTA v1.8 — PHOTOS, MODÉRATION ALLUMÉE, NOTIFICATIONS, ANIMATIONS (01.09)
Builds 29→32, migrations 047→053, tout poussé et sondé :
- **PHOTOS DE PROFIL** : une principale (upload verrouillé équipe), visages déterministes
  sur TOUS les bots (prénom accordé au genre — bug 032 corrigé), fiche profil au tap.
- **MODÉRATION PHOTO ALLUMÉE** : pipeline V2 porté tel quel (tolérance zéro, fail-closed,
  journal), fonction déployée, clé posée (saga des types de clés console 2026 : les clés
  « Personnel » exigent un workspace-id ; une clé « Espace de travail » créée DANS
  Default fonctionne sans), chaîne PROUVÉE verdict ok sur portrait réel.
- **PIÈCE NOTIFICATIONS née** : OneSignal app « Clutch V3 » créée (bundle app.clutch.v3),
  secrets posés, send-push déployée, entitlements APNs, init au login, INVITATION push
  vague quand la réponse part et que l'autre est absent. Premier test push : en attente
  de l'app ouverte sur le téléphone de David.
- **V4 vraiment appliqué** (048) : UN message chacun avant le round, testé.
- **Dynamique visuelle v1** : l'ÉCLAIR du démarrage (arc électrique « LE COURANT
  PASSE »), l'onde OUI+OUI, le battement des secondes · « 💬 Réponds-lui ! » en Présence ·
  prompt créatif GPT prêt (7 moments, panel imposé).
- **La CARTE DES IDÉES V2** dressée en deux parties (algo + tout le reste, ~340 idées
  inventoriées avec auteurs et sources) — rien n'était perdu.
- Profil épuré (préférences → créneau, décision David) · molette d'édition véridique.

## 8quinquies · DELTA v1.7 — LE DÉPART DU ROUND V2 EST CODÉ (nuit 31.08→01.09)
La faille « une réponse tardive confisque l'écran » a été instruite (challenge GPT →
tri → contre-tri → votes David V1-V4) et TRANCHÉE : le round ne démarre plus jamais du
seul fait d'écrire. Écrire ARME celui qui écrit (il est là) ; « ▶️ On y va » arme
l'autre ; départ ATOMIQUE quand les deux présences sont fraîches (`room_ready_fresh_
seconds=25` 🧪), entretenues par heartbeat — partir rassit tout seul (correction GPT
acceptée : un jeton de 5 min recréait le bug). La readiness de l'autre n'est JAMAIS
exposée ; résidu d'oracle assumé et tracé. Aussi codé cette nuit (migrations 043-046,
31 assertions neuves) : round raté = mutuelle morte + portage épuisé + la paire SORT du
créneau (hides) · « garder le lien » seulement après OUI+OUI (`opened_at`) · un seul
créneau (`max_windows=1`) · anti-flood (`max_consecutive_messages=30` 🧪) · messages
croisés = échange · limite ~ affichage temps approximatif. EN CONFLIT OUVERT (vote à
trois attendu) : le retrait d'étincelle vu par l'autre (instinct David au test) VS la loi
anti-oracle 027 votée. Dossiers : docs/TRI-SPEED-CHAT-V2-01sep.md · FOURNEE-TEST-2/3.
Amendement constitutionnel PROPOSÉ (non appliqué, degré 1) : « aucun fil asynchrone »
au lieu de « aucune messagerie asynchrone ».

## 8quater · DELTA v1.6 — DEUX TESTS LIVE DAVID×MEL + LES 7 PROCÈS TRANCHÉS (31.08)
Ce qui a changé depuis la v1.5, sur pièces (tout est dans `docs/LOIS-DU-COEUR.md`, le
document central des lois étincelle/mutuelle/chat, une ligne par loi, statut 🟢/🧪/⚪) :
- **Procès tranchés par David (+Mel)** : porte silencieuse après 2 étincelles ignorées par
  direction (`spark_ignored_max=2`) · la mutuelle SURVIT 3 occasions (`mutual_carry_max=3`,
  72 h par cycle) · quitter consomme la chance dans les deux sens pour le créneau · mots de
  sortie suggérés jamais bloquants · 3 conversations vivantes max · écran quasi-éphémère
  (rétention base pour la sécurité à câbler) · la fraîcheur d'activité n'est JAMAIS montrée
  aux autres (« Clutch doit savoir ; les gens, non »).
- **PIVOT REPRISE (décision David+Mel en test)** : la mutuelle portée ne rouvre JAMAIS
  l'ancienne conversation, aucun historique (« stalking ») ; la personne réapparaît en
  Présence, tout repasse par un premier message. Retrait de son étincelle d'une mutuelle :
  décidé, à coder. Détail : `docs/FOURNEE-TEST-FINAL-31aug.md`.
- **Brique 1 du composeur** livrée : départ verrouillé « maintenant », fins admissibles sur
  heures propres (domaine pur testé aux bords), lieu verrouillé, rayon 3-30 km, âges à
  molettes (écart min 5 ans), défaut d'intention 💬, GPS réparé (la clé Info.plist manquait
  depuis toujours — aucun build TestFlight n'a jamais eu le GPS avant le 26).
- **Faille produit OUVERTE trouvée en test** (à challenger en priorité) : une réponse
  tardive au premier message fait démarrer le speed chat et CONFISQUE l'écran de l'autre
  une heure plus tard, potentiellement en plein autre chat. Aucune réponse choisie.
- Build client 26 (web + TestFlight), migrations 035→042 poussées (départ déplaçable,
  centre obligatoire, signalement qui gèle les messages, coordonnées arrondies à la source,
  brique 1, rayon min, D10, portage ×3).

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
