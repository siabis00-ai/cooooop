// Minimal declaration so TypeScript recognizes `process.env` in a Vite/browser project
declare const process: {
  env: {
    API_KEY?: string;
    NODE_ENV?: string;
  };
};
