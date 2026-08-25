# PROMPT ADVERSE — CLUTCH V3 APRÈS LE PREMIER TEST RÉEL (25.08.2026)

Tu vas auditer les décisions prises HIER SOIR par les fondateurs d'une app, pendant leur
premier test réel. Tu ne connais rien au projet : tout le contexte nécessaire est ici, plus
l'état complet à l'URL https://pz7cgj4kfv-tech.github.io/v3-pack.md (lis-la d'abord).

## RÈGLES ANTI-COMPLAISANCE
Aucune flatterie. Hypothèse ≠ fait (marque HYPOTHÈSE). Chiffre inventé = interdit (marque
ESTIMATION). Réponds en DELTAS numérotés : (a) ce que tu contestes, (b) pourquoi en une
phrase, (c) une proposition PRÉCISE et testable. Ta réponse sera triée GARDÉ/VIRÉ sur pièces
par l'ingénieur qui a le code sous les yeux. « Ça dépend » sans dire de quoi = invalide.

## LE PANEL (réfléchissez séparément, PUIS confrontez-vous)
1. LE PRODUIT SCEPTIQUE — a vu 20 apps de dating mourir ; cherche le mécanisme qui ne
   survivra pas au contact de 200 vrais utilisateurs lausannois.
2. LA PSYCHOLOGUE DES INTERACTIONS — POV femme 23 ans, seule, un soir de semaine ; juge
   chaque mécanique à l'aune du malaise, de la pression sociale et du plaisir réel.
3. L'EXPERT TRUST & SAFETY — harcèlement, sondage d'oracle, captures d'écran, récidive ;
   « que fait un malveillant avec cette feature ? »
4. L'ARCHITECTE TEMPS RÉEL — latence, états dérivés, vieux clients, notifications ; « ce
   mécanisme tient-il à 10 000 paires simultanées ? »

## CE QUI S'EST DÉCIDÉ AU TEST (à attaquer)
A. MODE BOURRIN : les étincelles reçues sont désormais VISIBLES dans la liste des présences
   (« ça motive à répondre »). Le double-aveugle est aboli. Les refus restent neutres.
   Quota : 5 étincelles par créneau. → Attaque : pression sociale, spam d'attention,
   étincelle-comme-inbox, asymétrie homme/femme, retrait-renvoi clignotant (limite à définir).
B. SPEED CHAT ASSUMÉ : au premier échange réciproque, un round de ~10 min démarre, CHRONO
   VISIBLE (minutes restantes), chacun vote en secret « continuer » ; OUI+OUI ouvre le chat
   IMMÉDIATEMENT (sans attendre la fin du round) ; un seul OUI à l'échéance = fin neutre.
   → Attaque : le chrono visible recrée-t-il l'anxiété qu'on voulait tuer ? le OUI+OUI
   immédiat tue-t-il un temps de maturation utile ?
C. LA MAIN INVISIBLE : des bulles au CENTRE du chat (comme une tierce bienveillante) —
   aujourd'hui un simple rappel à 3 min de la fin du round si on n'a pas voté ; demain des
   suggestions (« en tête-à-tête ? »), personnalisées, jusqu'à des partenaires locaux (rabais
   + QR code scanné sur place). → Attaque : où est la ligne entre aide et dark pattern
   d'engagement ? (contrainte constitutionnelle : le produit n'optimise JAMAIS le temps passé).
D. GARDER LE LIEN : geste privé depuis une conversation ; secret tant que pas réciproque ;
   mutuel = LIEN durable (se retrouver quand les temps se recroisent). Le blocage éteint le
   lien. → Attaque : le lien devient-il un outil de traque douce ? le réveil (à construire)
   peut-il fuiter la présence ?
E. L'ALBUM PRIVÉ (idée non codée) : profil = personne publique + personne privée ; dans le
   chat on ne partage QUE depuis un album pré-modéré (jamais caméra/pellicule en direct).
   → Attaque : consentement, révocation d'accès, captures, faux sentiment de sécurité.
F. QUESTIONS OUVERTES : indicateurs « en ligne »/« en train d'écrire » (sympa ou
   surveillance ?) · anti-capture d'écran (iOS ne peut que DÉTECTER — vendre quoi,
   honnêtement ?) · avertissement au partage de numéro/adresse · fins expliquées quand la
   cause est l'horloge (« votre temps commun est terminé ») vs neutres quand elle est
   humaine · swipe-dégager quelqu'un (durée ? réapparition ?).

## CONTRAINTES DURES (ne les « corrige » pas, travaille AVEC)
Temps commun réel = condition de tout live · pas de messagerie asynchrone · refus jamais
exposés · jamais la position · pas d'optimisation du temps passé · paramètres en config
(round, quotas) · serveur décide, client affiche · Lausanne d'abord, monde-compatible.

## FORMAT DE SORTIE IMPOSÉ
1. VERDICT GLOBAL en 3 lignes (le test valide-t-il le pivot ? oui/non/nuancé, et POURQUOI).
2. Pour A→F : verdict GARDER / CORRIGER / TUER + le delta précis.
3. TOP 3 des risques que PERSONNE n'a vus (ni les fondateurs, ni ce prompt).
4. LA question à trancher en premier, et le test le moins cher pour la trancher.
