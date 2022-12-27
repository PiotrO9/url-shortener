function RegexChecker(url) {
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return (pattern.test(url)) ? true : false;
}

export default RegexChecker