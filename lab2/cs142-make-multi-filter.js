function cs142MakeMultiFilter(originalArray) {
    var currentArray = originalArray.slice();
    function arrayFilterer (filterCriteria, callback) {
        if(typeof filterCriteria !== 'function')
           { return currentArray; }
        var i;
        for(i=0; i<currentArray.length; i++)
        {   if(!filterCriteria(currentArray[i])){
                currentArray.splice(i, 1);
                i--;
            }
        }
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    }
    return arrayFilterer;
}