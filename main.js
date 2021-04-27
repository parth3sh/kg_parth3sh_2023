function sayNumbers(arguments){
    var result = "";
    var dict = {
        '1': "One",
        '2': "Two",
        '3': "Three",
        '4': "Four",
        '5': "Five",
        '6': "Six",
        '7': "Seven",
        '8': "Eight",
        '9': "Nine"
      };
    for (var i = 2; i < arguments.length; i++){
        var numString = arguments[i].toString();
        for (var j = 0; j < numString.length; j++){
            result = result.concat(dict[numString.charAt(j)]);
        }
        if (i != arguments.length - 1){
            result = result.concat(",");
        }
    }
    console.log(result);
}

sayNumbers(process.argv);