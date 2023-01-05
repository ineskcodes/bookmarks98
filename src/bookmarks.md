---
layout: 'layouts/base.html'
permalink: '/category/{{ category | slugify }}/index.html'
pagination:
  data: categories
  alias: category
  size: 1
addAllPagesToCollections: true
isWindowVisible: true
pageType: 'bookmarks'
eleventyComputed:
  title: '{{ category }} - {{ site.name }}'
  mainHeading: '{{ category }} bookmarks'
---
