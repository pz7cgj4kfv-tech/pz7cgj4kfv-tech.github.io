# CHALLENGE · L'ÉCRAN « OUVRIR MON CRÉNEAU » DE CLUTCH V3 (24.09.2026)
Tu es un contradicteur. Tu n'as accès qu'à ce prompt. Sois agressif, factuel, sans consensus mou. Réponds en français.

## Le produit, en une phrase
Clutch montre les personnes qui possèdent réellement une partie du même temps que toi (créneau déclaré, intersection
propre à chaque paire), permet une étincelle réciproque, un speed chat de 10 minutes, une conversation qui meurt avec le
temps commun, et un passage au réel outillé (plan, lieu équitable). Jamais de distance à une personne (seulement un
rayon déclaré), jamais « en ligne », jamais d'historique, jamais de score, jamais de swipe. Pilote : Lausanne, quelques
centaines de personnes, TestFlight externe fin septembre 2026. Apple 4.3(b) exige une expérience « meaningfully
different ». Références de goût du fondateur : Tesla, Apple. « Simple, utile, sûr, fun. »

## L'écran dont on parle : ouvrir son créneau = LE geste de l'app
Sans créneau ouvert, on ne voit personne et personne ne vous voit. C'est le premier écran après la connexion, et celui
qu'on refait chaque jour. Il règle CINQ choses, toutes déjà décidées et codées :
1. jusqu'à quelle heure je suis libre (de « maintenant » à +4 h dans l'offre, pas de 15 min ; le serveur accepte jusqu'à 12 h) ;
2. mon rayon (3 à 50 km, 20 au départ) autour de mon centre (ma position arrondie à 500 m, ou un lieu posé à la main) ;
3. qui je cherche : F · H · NB (au moins un allumé ; c'est un mur, décidé, ça ne se rediscute pas) ;
4. la fourchette d'âge (mur aussi, largeur minimale 5 ans) ;
5. mon envie du moment (30 signes, facultative) et mon humeur : discuter 💬 · se voir ⚡ · les deux (classe, n'exclut pas).
Un seul créneau à la fois. Ouvrir = un appel serveur qui répond ok ou une raison (trop court, horizon dépassé, plafond
d'ouvertures par jour…). On peut le modifier et le fermer ensuite depuis l'en-tête.

## Ce qui existe AUJOURD'HUI (deux écrans, au choix dans les réglages)
### Écran A « à la carte » (celui que le fondateur préfère)
```
┌──────────────────────────────┐
│ CLUTCH                       │  en-tête de l'app
│ ┌ Tu es libre comment ? ┐    │  titre posé sur la carte
│ │  ░░ CARTE DE VILLE ░░ │    │  carte (CARTO Voyager), mon centre, cercle du rayon en pointillé rose
│ │      ( ◌ moi  )       │    │  la carte se déplace au doigt, le centre reste
│ └───────────────────────┘    │
│ Jusqu'à  [14:00]  ●───── 20 km│  ligne 1 : molette de l'heure (on la fait rouler) + fader du rayon
│ (W)(M)(NB)         [27-37 ans]│  ligne 2 : qui + âge (tape → molettes)
│ (💬 chat  A drink? a walk?  +)│  ligne 3 : la bulle d'intention (tape → panneau : humeur + envie)
│              ( → )            │  le rond rose : ouvrir. Il prend une ligne à lui tout seul.
│  ◇     💬     ⟲     ☺        │  les 4 onglets
└──────────────────────────────┘
```
### Écran B « épuré » (fond prune, sans carte)
```
┌──────────────────────────────┐
│ Tu es libre comment ?        │
│        ( cercle pointillé )  │  un cercle abstrait, mon point au centre
│ ┌────────────────────────┐   │
│ │ DE          maintenant │   │
│ │ JUSQU'À ●──────  14:00 │   │  curseurs (le fondateur : « tu cliques dessus, ça bouge pas »)
│ │ RAYON   ●──     20 km  │   │
│ │ QUI     (F) (H) (NB)   │   │
│ │ ÂGE  [±5 ans]  32-52   │   │
│ │ [ Ouvrir jusqu'à 14:00 ✨ ] │   bouton pleine largeur
│ └────────────────────────┘   │
└──────────────────────────────┘
```
Le fondateur, ce matin, capture de B en main : « ça prend beaucoup trop de place… je préfère à la carte, c'est déjà
beaucoup mieux ». Un troisième dessin (panneau « replié » sur une ligne) : « jamais, jamais de la vie ». Donc : A.

## Ce que le fondateur veut maintenant (dicté le 24.09, à challenger, pas à flatter)
- Le titre « Tu es libre comment ? » un peu plus haut à gauche, et animé.
- Une DÉMONSTRATION AUTOMATIQUE à l'ouverture de l'écran, « comme ça les gens voient ce qu'ils peuvent changer » :
  les heures défilent toutes seules ; la distance défile de 50 à 20 km avec la carte qui se zoome en même temps ;
  F, H, NB clignotent ; les âges bougent. Puis l'écran se pose sur les valeurs par défaut.
- L'intention doit se lire comme un BOUTON : ombre portée dessous (règle de la designer, Mel : tout bouton porte une ombre).
- Le rond « → » qui prend une ligne : le remplacer par la pastille de la V2, « GO! CLUTCH » (dessin de Mel : anneau
  rose, rond vert, picto clutch), flottante, déplaçable, qu'on pose où on veut ; taper = ouvrir. Elle existe en SVG.
- « S'il manque quelque chose, il faut prévenir la personne » (une valeur pas réglée, une position refusée…).
- Carte blanche pour la question de fond : visuellement, comment quelqu'un qui arrive se connecte, s'inscrit, et se met
  en ligne ? Quel est le meilleur moyen ? Simple. Tesla. Apple.

## Contraintes qui ne bougent pas
- Rien de tout ça ne touche le serveur : le créneau reste une commande (ouvrir / ajuster / fermer), les murs restent.
- Accessibilité : prefers-reduced-motion respecté ; chaque état a un mot, pas seulement un mouvement (règle maison).
- Pas de dark pattern, pas de faux compteur, pas d'urgence artificielle. Pas d'onboarding en douze écrans.
- Le compte démo d'Apple doit pouvoir traverser l'écran en une minute sans aide.
- La palette est celle de Mel (prune, rose, vert), pas de noir.

## Ton panel : trois personnes qui se contredisent, puis tranchent
1. Une designer produit Apple (HIG par cœur : « une animation sans but est du bruit », « montre, ne dis pas », reduced motion).
2. Un designer d'interface Tesla (un écran, une action, zéro chrome ; ce qui n'aide pas à décider disparaît).
3. Une responsable produit d'app de rencontre qui a vu des milliers de premières sessions (où les gens décrochent,
   ce qui les fait revenir, ce qui les fait fuir).
Chacun attaque la démonstration automatique, la pastille flottante, et le nombre de réglages visibles. Puis ils tranchent.

## Format de sortie, imposé
1. **Verdict en 5 lignes** : ce qu'il faut faire de cet écran, sans détour.
2. **L'écran recommandé**, en ASCII (un seul, pas trois), avec ce qui est visible AVANT tout geste.
3. **La séquence d'arrivée**, seconde par seconde, de la connexion à « je suis en ligne » : ce qui bouge, ce qui parle,
   ce qui attend le doigt. Dire clairement si la démo automatique est gardée, coupée, ou remplacée (par quoi).
4. **Ce qu'on retire** de l'écran actuel, un par un, avec la raison.
5. **La pastille GO! CLUTCH** : gardée où, ou pas, et pourquoi (flottante ? fixe ? à la place de quoi ?).
6. **Les risques** : accessibilité, Apple (4.3(b), 2.1 compte démo), fatigue au 30ᵉ jour (on refait ce geste chaque jour).
7. **Trois questions** au fondateur, celles dont la réponse change le dessin.
Pas de généralités. Chaque affirmation sur « ce que font les autres » doit être datée ou marquée « de mémoire ».
