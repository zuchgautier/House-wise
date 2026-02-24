---
description: Déploie automatiquement les changements sur le site en ligne après chaque modification
---

# Workflow de déploiement automatique

Après chaque modification de code demandée par l'utilisateur, exécuter automatiquement :

// turbo-all

1. Ajouter les fichiers modifiés
```bash
git add .
```

2. Créer un commit avec un message descriptif du changement
```bash
git commit -m "Update: modifications automatiques"
```

3. Pousser vers GitHub (Vercel déploie automatiquement)
```bash
git push origin main
```

4. Confirmer à l'utilisateur que le changement est déployé
