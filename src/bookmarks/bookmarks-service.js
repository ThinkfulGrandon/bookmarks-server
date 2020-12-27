const BookmarksService = {
    getAllBookmarks(knex) {
        return knex
            .select('*')
            .from('bookmarks_test')
    },
}

module.exports = BookmarksService