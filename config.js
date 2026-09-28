// ============================================================
//  CONFIGURATION DU SITE — le SEUL fichier à adapter pour votre club
//  (voir GUIDE_INSTALLATION.pdf, étapes 3 et 5)
// ============================================================
const CONFIG = {
  // 1) Nom affiché dans les titres, l'en-tête et la barre latérale
  clubName: "Société de Tir Béziers",

  // 1bis) Sous-titre affiché sous le titre de la saisie (optionnel)
  subtitle: "Béziers",

  // 2) Identifiant technique = dossier des compétitions dans Firebase.
  //    SANS espaces ni accents (lettres, chiffres, _). Ne plus changer une fois des compétitions créées.
  clubKey: "TIR_BEZIERS",

  // 3) Adresse du site sur GitHub Pages (sert à fabriquer les QR codes)
  //    Forme : https://VOTRE-COMPTE.github.io/NOM-DU-DEPOT
  githubBase: "https://stbeziers.github.io/resultats",

  // 4) Clés Firebase — à copier depuis la console Firebase :
  //    Paramètres du projet ⚙️ → Général → Vos applications → Configuration du SDK (firebaseConfig)
  firebase: {
    apiKey: "AIzaSyAnmgkxds7Gu74Nc1oEQkgkj4ABL87BKYA",
    authDomain: "resultats-tir-beziers.firebaseapp.com",
    databaseURL: "https://resultats-tir-beziers-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "resultats-tir-beziers",
    storageBucket: "resultats-tir-beziers.firebasestorage.app",
    messagingSenderId: "912620160277",
    appId: "1:912620160277:web:1119b23799f2606ed0151c"
  }
};
