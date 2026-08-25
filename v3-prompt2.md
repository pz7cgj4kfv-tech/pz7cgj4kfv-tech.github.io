# PROMPT ADVERSE — PARTIE 2 : L'AMENDEMENT, L'ÉCONOMIE DE L'ÉTINCELLE, LES BOTS
# (Clutch V3, 25.08.2026 tard — complète la partie 1 : https://pz7cgj4kfv-tech.github.io/v3-prompt.md)

Même panel, mêmes règles anti-complaisance, même format DELTAS. L'état complet du projet :
https://pz7cgj4kfv-tech.github.io/v3-pack.md. Rien de ce qui suit ne sera codé avant d'avoir
été pensé ici : c'est du design en parallèle, les fondateurs veulent des réponses PRÊTES.

## G. L'AMENDEMENT CONSTITUTIONNEL — l'article 8 est remis en question (fondateurs, 25.08)

L'article 8 actuel : « le produit n'optimise jamais le temps passé ni le volume de
messages. » Il vient de l'ère meeting-first (l'app voulait sortir les gens de l'écran).
David, après le premier test du chat-central : « il faut sortir ce truc de dire qu'on ne
veut pas que les gens restent dans l'app — maintenant c'est plus ça. » Dans V3, du temps
passé À DISCUTER EN DIRECT est de la valeur produit, plus seulement un coût.

MISSION : produire une FICHE DE VOTE prête pour les trois fondateurs, avec 2 ou 3
formulations candidates de l'article 8 réécrit. Contraintes : la version réécrite doit
encore INTERDIRE clairement les mécaniques d'addiction (streaks, FOMO artificiel, variable
rewards, notifications de réengagement vides) tout en AUTORISANT d'optimiser la qualité et
la vitalité des conversations vivantes. Pour chaque candidate : ce qui devient permis, ce
qui reste interdit, et LA métrique-garde-fou mesurable qui déclenche l'alarme si on dérape
(ex. : ratio conversations→rencontres, taux d'ouvertures d'app sans fenêtre ouverte).
Dis aussi franchement à quoi ressemblerait Clutch dans 18 mois si on supprime l'article
sans garde-fou.

## H. L'ÉCONOMIE DE L'ÉTINCELLE (penser maintenant, coder après)

Les étincelles reçues sont visibles (mode bourrin). Problèmes anticipés à résoudre SUR LE
PAPIER, paramètres en config :
1. LE CLIGNOTEMENT : retirer/renvoyer une étincelle en boucle = harcèlement lumineux.
   Propose la règle exacte (cooldown après retrait ? combien ? par paire ou global ?
   l'étincelle retirée disparaît-elle instantanément chez l'autre ou s'éteint-elle
   silencieusement ?).
2. LES COOLDOWNS en général : renvoyer vers la même personne après expiration ? après un
   speed chat fermé ? après un « non » implicite ? Grille complète paire × événement.
3. LA VISIBILITÉ DE L'ENVIE : David veut que « les gens voient plus les gens qui ont plus
   envie » (classement par intensité de disponibilité/mood). Attaque le côté sombre :
   classement de la désespérance, prime au spam, biais de genre — et propose une version
   SAINE (signaux d'envie légitimes : fenêtre ouverte maintenant, présence fraîche, mood).
4. LE SWIPE-DÉGAGER : je ne veux plus voir cette personne. Sémantique exacte : durable ou
   par fenêtre ? réapparition un jour ? est-ce un signal négatif stocké (risque d'oracle) ?
   différence avec le blocage ?

## I. LA FLOTTE DE BOTS ET LA LOGISTIQUE DE TEST (penser maintenant, pour Dom)

Le co-fondateur Dom pilote simulation/QA. Règle héritée : les bots se comportent comme de
vraies personnes (tout se déclenche pareil). Conçois le PROTOCOLE :
1. Personas de bots pour attaquer le système réel : la spammeuse d'étincelles, le
   clignoteur, le sondeur d'oracle (qui teste qui l'a bloqué), le fantôme (jamais présent),
   la bavarde (rooms pleines), le récidiviste multi-comptes. Pour chacun : ce qu'il révèle,
   la garde attendue.
2. La logistique pour David (non-dev) : boutons de reset 1-clic (remettre la base de test à
   zéro, re-seeder N bots autour de Lausanne, avancer l'horloge), sans jamais toucher à la
   prod. Quels scénarios 1-clic en premier ?
3. Ce qui se mesure : les 6 simulations de liquidité déjà écrites (contrôle V2 vs V3,
   ±présence, rooms 1/2/3, ±fenêtres futures) — critique le protocole et fixe les seuils de
   mort à écrire AVANT les runs.

## J. SUGGESTIONS LIBRES POUR LA SUITE

Vous avez tout l'état. Proposez : les 3 prochaines choses à construire dans l'ordre (avec
pourquoi), les 3 pièges des 2 prochaines semaines, et ce que vous feriez tester à David et
Mel dès demain soir pour apprendre le plus vite. Marquez HYPOTHÈSE ce qui n'est pas un fait.

## FORMAT DE SORTIE
G : la fiche de vote (candidates + gardes-fous mesurables). H : règles exactes proposées,
valeurs par défaut en paramètres. I : protocole + seuils. J : listes courtes et tranchées.
Deltas numérotés partout ; pas de réécriture générale ; pas de compliments.
