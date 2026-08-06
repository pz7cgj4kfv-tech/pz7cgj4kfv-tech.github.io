# public/parcours — les captures du scénario canonique

Les fichiers déposés ici sont lus par `/comment-ca-marche`, via le manifeste
`lib/parcours-manifest.ts` (source unique). Une capture n'apparaît que si son
nom est inscrit dans le manifeste, avec le BUILD où elle a été prise.

## Nommer une capture
`<num>-<id>-<qui>.png`  ·  ex. `04-etincelle-marc.png`, `04-etincelle-camille.png`

## Déposer une capture (2 gestes)
1. Poser le PNG ici.
2. Dans `lib/parcours-manifest.ts`, renseigner `fichier` ET `build` sur la
   capture concernée. Sans le build, la page ne peut pas signaler une capture
   périmée — et c'est toute la valeur du dispositif.

## Pourquoi le build est obligatoire
Une capture prise il y a plus de `CAPTURE_STALE_AFTER` builds s'affiche avec un
bandeau « périmée ». Un doc qui vieillit en silence est un mensonge ; un doc qui
annonce son âge est un outil. (Famille BUG-098.)
