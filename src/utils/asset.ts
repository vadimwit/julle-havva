/** Prepends the Vite base URL so paths work both locally and on GitHub Pages */
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
