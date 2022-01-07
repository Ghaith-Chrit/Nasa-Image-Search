const key = 'fav';

const testLocalStorage = () => {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

const addToFav = data => {
    if (!testLocalStorage()) 
        return false;    
    localStorage.setItem(key, JSON.stringify(data));
    return true;
}

const getFav = () => {
    return JSON.parse(localStorage.getItem(key))
}

module.exports = {
    addToFav,
    getFav
}