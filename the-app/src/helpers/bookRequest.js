
// корректировка данных, полученных от API 
export const missingData = (data) => {
    const missData = data.items.map((item) => {
        if (item.volumeInfo.hasOwnProperty('imageLinks') === false) {
            item.volumeInfo['imageLinks'] = { thumbnail: 'http://placehold.it/128x190' };
        }
        if (item.volumeInfo.imageLinks.hasOwnProperty('thumbnail') === false) {
            item.volumeInfo.imageLinks['thumbnail'] = 'http://placehold.it/128x190';
        }
        if (item.volumeInfo.hasOwnProperty('categories') === false) {
            item.volumeInfo['categories'] = '';
        }
        if (item.volumeInfo.categories.length > 0) {
            item.volumeInfo.categories = item.volumeInfo.categories[0].split(' ')[0];
        }
        if (item.volumeInfo.hasOwnProperty('title') === false) {
            item.volumeInfo['title'] = '';
        }
        if (item.volumeInfo.hasOwnProperty('authors') === false) {
            item.volumeInfo['authors'] = '';
        }
        if (item.volumeInfo.authors.length > 1) {
            item.volumeInfo.authors = item.volumeInfo.authors.join(', ');
        }
        return item;
    })
    return missData;
}

