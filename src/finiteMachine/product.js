const selectPattern = /^\d+$/;

export function getIndexFromMessage (message) {
    message = message.trim();

    if (!selectPattern.test(message)) {
        return null;
    }

    return parseInt(message);
}

export function hasIndex(message) {
    return selectPattern.test(message);
}