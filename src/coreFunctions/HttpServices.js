const getImage = (query) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_URL_NO_EDIT}${query}`)
            .then(response => response.json())
            .then(({ collection: { items } }) => resolve(items[Math.floor(Math.random() * items.length)]))
            .catch(err => reject(err));
    })
}

module.exports = {
    getImage
}