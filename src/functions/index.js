export function findObjectByName(name, jsonData) {
    for (const key in jsonData) {
        if (Array.isArray(jsonData[key])) {
            const foundObject = jsonData[key].find(item => item.name === name);
            if (foundObject) {
                return foundObject;
            }
        }
    }
    return null;
}