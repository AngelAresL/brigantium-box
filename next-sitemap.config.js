const siteUrl = 'https://brigantiumbox.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, 
  transform: async (config, path) => {
    
    return {
      loc: path, 
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  additionalPaths: async (config) => {
    const result = [
      {
        loc: `${siteUrl}/#contact`, 
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${siteUrl}/#about`, 
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${siteUrl}/#activities`, 
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${siteUrl}/#facilities`, 
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: `${siteUrl}/#pricing`, 
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ];
    return result;
  },
}