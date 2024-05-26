module.exports = {
  locales: ['en', 'th'],
  defaultLocale: 'en',
  loader: false, // This deactivates the webpack loader that loads the namespaces
  pages: {
    '*': ['common'],
    '/404': ['error'],
    '/': ['home'],
    'rgx:^/portfolio': ['common'], // Ensures that /portfolio/ pages use 'home' namespace
  },
  loadLocaleFrom: async (locale, namespace) =>
    import(`./locales/${locale}/${namespace}`).then((m) => m.default),
};