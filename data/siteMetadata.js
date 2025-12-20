const siteMetadata = {
  title: "Billy's Blog",
  author: 'Andreas Billy',
  fullName: 'Andreas Billy Sutandi',
  headerTitle: "Billy's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://blog.andreasbilly.com',
  analyticsURL: 'https://cloud.umami.is/share/USGFJ9kotl0YGUrm',
  siteRepo: 'https://github.com/billy93/blog.andreasbilly.com',
  siteLogo: '/static/images/avatar.jpg',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/projects/karhdo-blog.png',
  email: 'billyfebram@gmail.com',
  github: 'https://github.com/billy93',
  facebook: 'https://www.facebook.com/billyandreas',
  linkedin: 'https://www.linkedin.com/in/billy93',
  twitter: 'https://x.com/billy_impact',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'billy93',
    linkedin: 'billy93',
    facebook: 'billyandreas',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

module.exports = siteMetadata;
