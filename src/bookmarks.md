---
layout: 'layouts/base.html'
pagination:
  data: categories
  alias: category
  size: 1
permalink: '/category/{{ category | slugify }}/index.html'
addAllPagesToCollections: true
pageHook: 'bookmarks'
eleventyComputed:
  title: '{{ category }} - {{ site.name }}'
  mainHeading: '{{ category }} bookmarks'
---
