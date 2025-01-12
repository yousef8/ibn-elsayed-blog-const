import type { I18nStrings } from "i18n/types";

const baseStrings = {
  "site.title": "AstroPaper",
};

const ENLocale: I18nStrings = {
  ...baseStrings,
  about: "About",
  socialLinks: "Social Links",
  home: "Home",
  posts: "Posts",
  "posts.desc": "All the articles I've posted.",
  tag: "Tag",
  "tag.desc": 'All the articles with the tag "{name}".',
  tags: "Tags",
  "tags.desc": "All the tags used in posts",
  archives: "Archives",
  "archives.desc": "All the articles I've archived.",
  featured: "Featured",
  recentPosts: "Recent Posts",
  tableOfContents: "Table of contents",
  "tableOfContents.desc": "Open Table of contents",
  allPosts: "All Posts",
  search: "Search",
  "search.desc": "Search any article",
  "search.placeholder": "Search for anything",
  pages: "Pages",
  page: "Page",
  "navigation.goBack": "Go back",
  "navigation.goBackHome": "Go Back Home",
  "navigation.backToTop": "Back to Top",
  "navigation.nextPost": "Next Post",
  "navigation.prevPost": "Previous Post",
  pageNotFound: "Page Not Found",
  rssFeed: "RSS Feed",
  suggestChanges: "Suggest Changes",
  toggleLightAndDark: "Toggles light & dark",
  "pagination.prev": "Prev",
  "pagination.next": "Next",
  "footer.text": "Copyright © {year} | All rights reserved",
  "date.published": "Published",
  "date.updated": "Updated",
  "date.month.1": "January",
  "date.month.2": "February",
  "date.month.3": "March",
  "date.month.4": "April",
  "date.month.5": "May",
  "date.month.6": "June",
  "date.month.7": "July",
  "date.month.8": "August",
  "date.month.9": "September",
  "date.month.10": "October",
  "date.month.11": "November",
  "date.month.12": "December",
  "socials.github": `${baseStrings["site.title"]} on Github`,
  "socials.facebook": `${baseStrings["site.title"]} on Facebook`,
  "socials.instagram": `${baseStrings["site.title"]} on Instagram`,
  "socials.linkedin": `${baseStrings["site.title"]} on LinkedIn`,
  "socials.mail": `Send an email to ${baseStrings["site.title"]}`,
  "socials.x": `${baseStrings["site.title"]} on X`,
  "socials.twitch": `${baseStrings["site.title"]} on Twitch`,
  "socials.youtube": `${baseStrings["site.title"]} on Youtube`,
  "socials.whatsapp": `${baseStrings["site.title"]} on Whatsapp`,
  "socials.snapchat": `${baseStrings["site.title"]} on Snapchat`,
  "socials.pinterest": `${baseStrings["site.title"]} on Pinterest`,
  "socials.tiktok": `${baseStrings["site.title"]} on TikTok`,
  "socials.codepen": `${baseStrings["site.title"]} on CodePen`,
  "socials.discord": `${baseStrings["site.title"]} on Discord`,
  "socials.gitlab": `${baseStrings["site.title"]} on GitLab`,
  "socials.reddit": `${baseStrings["site.title"]} on Reddit`,
  "socials.skype": `${baseStrings["site.title"]} on Skype`,
  "socials.steam": `${baseStrings["site.title"]} on Steam`,
  "socials.telegram": `${baseStrings["site.title"]} on Telegram`,
  "socials.mastodon": `${baseStrings["site.title"]} on Mastodon`,
  "sharePost.desc": "Share this post on",
  "sharePost.on": "Share this post on {media}",
  "sharePost.via": "Share this post via {media}",
  "a11y.skipToContent": "Skip to content",
  "a11y.rssFeed": "rss feed",
  "a11y.openMenu": "Open Menu",
  "a11y.closeMenu": "Close Menu",
  "a11y.archives": "archives",
  "a11y.search": "search",
  "a11y.themeButtonDefaultLabel": "auto",
  "a11y.breadcrumb": "breadcrumb",
};

export default ENLocale;
