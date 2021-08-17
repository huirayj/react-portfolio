export const getCurrPage = () => {

  const pages = ['hero', 'portfolio', 'featured', 'resume', 'contact'];

  const { hash } = window.location;

  if (!hash) return pages[0];

  const hashValue = hash.split('#')[1];
  const index = pages.indexOf(hashValue);
  return pages[index];
};
