exports.linkResolver = function linkResolver(doc) {
    // Route for blog posts
    if (doc.type === 'project') {
        return '/work/' + doc.uid;
    }

    // Homepage route fallback
    return '/';
}