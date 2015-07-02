# Hubspot-Infinite-Scroll

Include the JS file on your page.  Makes an XHR request to the next page.

1. Add an `a` element with an `href` attribute to the next page (for search engines).  Should look like this (use the data attributes too) `<a href="/blog/page/2" class="load-more-button" data-url-base="http://www.example.com/blog" data-page="2">Load More <i class="fa fa-caret-down"></i></a>`
2. The page itself needs to have a div (or other element) with the ID "blog-articles".  The load more link needs to be inside this element

## Todo:
1. Allow for more options,
2. Could infer data attributes based on the `href`
