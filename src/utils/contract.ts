export let requireCheck = (func) => {
    try {
        func();
    }
    catch (e) {
        throw e;
    }

};

export let test = (message, func) => {
    if (func()) {
        return null;
    } else {
        throw new Error(message);
    }
}