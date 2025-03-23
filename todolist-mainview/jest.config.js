module.exports = {
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",  // Utilise babel-jest pour transformer les fichiers JS, JSX, TS et TSX
  },
  transformIgnorePatterns: [
    "/node_modules/(?!@mui/material)"  // Pour transformer les dépendances comme MUI
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",  // Si tu utilises des fichiers CSS, LESS, SCSS, etc.
  },
};

  