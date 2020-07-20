const _ = {
    clamp(number, lower, upper) {
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        };
        if (start > end) {
            let swap = end;
            end = start;
            start = swap;
        };
        const isInRange = start <= number && number < end;
        return isInRange;
    },

    words(string) {
        const words = string.split(' ');
        return words;
    },

    pad(str, lth) {
        if (lth <= str.length) {
            return str;
        };
        const differenceLength = lth - str.length;
        const startPaddingLength = Math.floor(differenceLength / 2);
        const endPaddingLength = differenceLength - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
        return paddedString;
    },

    has(object, key) {
        const hasValue = object[key];
        if (hasValue !== undefined) {
            return true;
        }; 
        return false;
    },

    invert (obj) {
        let invertedObject = {};
        for (let key in obj) {
            const originalValue = obj[key];
            invertedObject = { originalValue: key };
        };
        return invertedObject;
    },

    findKey (object, predicate) {
        for (let key in object) {
            let value = object[key];
            let  predicateValue = predicate(value);
            if (predicateValue) {
                return key;
            };
        };
        return undefined;
    },

    drop (dropArray, dropItems) {
        if (dropItems === undefined) {
            dropItems = 1;
        }
        let droppedArray = dropArray.slice(dropItems);
        return droppedArray;
    },

    dropWhile (array, predicate) {
        const callback = (element, index) => {
            return !predicate(element, index, array);
        };
        let dropNumber = array.findIndex(callback);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },

    chunk (array, size) {
        if (size === undefined) {size = 1};
        arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
    },
}
// Do not write or modify code below this line.
module.exports = _;