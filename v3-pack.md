# PACK CONTRADICTEURS — CLUTCH V3 · v1 · 25.08.2026

> Document auto-suffisant pour un challenger externe (Claude conversationnel, GPT, ou un panel).
> Il est régénéré par Claude Code à chaque session de travail et publié à une URL fixe.
> RÈGLE DE RÉPONSE : rends des DELTAS (ce qui te paraît faux, manquant, dangereux, mieux),
> jamais une réécriture du tout. Tes réponses seront triées GARDÉ / VIRÉ sur pièces par
> Claude Code, qui a le code et la base sous les yeux. Aucune complaisance : bien = bien,
> moyen = moyen, pas bien = pas bien.

## 1 · Ce qu'est Clutch V3, en un paragraphe

Clutch V3 est « le réseau du temps partagé » : une app suisse (test à Lausanne) qui montre les
personnes qui possèdent réellement du temps disponible en commun maintenant, et laisse chaque
paire décider ce que ce temps devient : une conversation, une rencontre, ou les deux. Fenêtre
de disponibilité (maintenant ou ≤ 6 h), humeur souple du soir (discuter / on voit / sortir :
classe, n'exclut jamais), étincelle réciproque obligatoire avant tout contact, conversation
qui n'existe que pendant le temps commun des deux (round initial puis double choix secret de
continuer ; elle meurt avec la fenêtre), et « faire un Clutch » = le geste final où les deux
décident de se voir (zone équitable + dispositif de sécurité). Pas de messagerie asynchrone,
jamais. C'est la 3e génération : V2 Classic (meeting-first, 2,5 mois de travail) est figée et
sert de carrière de code débogué et de leçons (73 invariants → 66 tests de naissance V3).

## 2 · État RÉEL au 25.08.2026 (vérifié, pas déclaré)

- **Construit et testé** (28 tests d'intégration verts, base cloud Zurich + TestFlight builds 1→4) :
  comptes (DOB privée), fenêtres (max 2, commands serveur avec refus structurés), présence
  réelle (heartbeat throttlé, « publier n'est pas être là »), découverte temporelle avec la
  carte de présence dessinée par Mel (SVG exact porté), étincelle réciproque ATOMIQUE (verrou
  de paire : la course simultanée finit mutuelle), refus NEUTRES indistinguables (bloqué /
  genre / âge / sans-fenêtre = même code), quota 5 étincelles/fenêtre, blocage qui tue la
  paire, et la CONVERSATION : née du mutuel, round au premier échange réciproque, vote secret
  de continuation (variante B), OUI+OUI → vit jusqu'au bout du temps commun, sinon fin neutre ;
  mort par l'horloge serveur. Le composeur a récupéré la carte vivante V2 (pin, halos,
  curseur logarithmique) transplantée avec ses bugs payés.
- **Pas encore construit** : le geste Clutch (poke silencieux + « on se voit ? » + zone
  équitable) = slice 4, prochaine · photos de profil · favoris/« Liens » + réveil (slice 6) ·
  Angel (contact de confiance, check-in, SOS) = slice 5 · modération du chat (EN ATTENTE DU
  VOTE, rien de câblé, texte seul) · notifications push · le design final (le squelette
  d'abord ; le graphisme V2 revient écran par écran, Mel juge).
- **Équipe** : David (produit, non-dev) · Mel (design, co-fondatrice) · Dom (simulation/QA,
  co-fondateur) · Claude Code (dev). Testeurs actuels : David, Mel, et « Léa » (persona QA).

## 3 · Décisions VERROUILLÉES (ne pas re-débattre, sauf fait nouveau)

Constitution en 10 invariants (temps commun condition du live · réciprocité obligatoire ·
pas d'async · déclaré ≠ présent · refus jamais exposés · états de paire privés · jamais plus
d'info que l'audience choisie, jamais la position · pas d'optimisation du temps passé ·
sécurité s'active quand la rencontre devient réelle · préférences souples classent sans
éliminer, hypothèses en config). Architecture : nouveau repo/base, modular monolith 12 pièces,
commands serveur, résolution par l'horloge, Git source de vérité, SQL manuel interdit.
Paramètres actuels (configurables, pas des lois) : rooms max 2 · round 10 min · horizon 6 h ·
5 étincelles/fenêtre · 2 fenêtres max.

## 4 · OUVERT — et c'est LÀ qu'on attend les challengers

1. **Les 3 votes des fondateurs (Dom pas encore prononcé)** : ① une excellente conversation
   sans rencontre = succès de Clutch ? ② lieu+créneau saisis dans Clutch au moment « on se
   voit » (condition du dispositif de sécurité) ? ③ modération du chat : rien / filtre local
   sur l'appareil / examen sur signalement / scan serveur ?
2. **La slice 4 à dessiner finement** : le poke silencieux (l'autre voit son bouton s'allumer,
   jamais de notification « elle veut te voir ») : quelle est la MEILLEURE micro-interaction ?
3. **Le design** : thème blanc (charte Mel 20.06) vs sombre prune (V2) : question posée à Mel ;
   des arguments d'expérience nocturne/bar sont bienvenus.
4. **Les favoris/« Liens »** : à quel moment deviennent-ils utiles (notre réponse actuelle :
   quand des conversations se terminent) et quelle est la forme minimale digne ?
5. **La liquidité** : 6 simulations paramétrées attendent Dom (contrôle V2 vs V3 souple,
   ±présence réelle, rooms 1/2/3, ±fenêtres futures). Défis de protocole bienvenus.
6. **Tout ce qu'on n'a pas vu** : c'est ta vraie mission.

## 5 · Comment répondre (format imposé)

DELTAS numérotés, chacun : (a) ce que tu contestes ou ajoutes, (b) pourquoi, en une phrase,
(c) ce que tu proposes de PRÉCIS et testable. Marque HYPOTHÈSE ce qui n'est pas un fait.
Pas de réécriture générale, pas de compliments, pas de « ça dépend » sans dire de quoi.
