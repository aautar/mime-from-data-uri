MIMEFromDataURI = (function () {
    return {
        getMIMEType: function (dataURI) {
            return dataURI.substring(5, dataURI.indexOf(';', 5));
        }
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = MIMEFromDataURI;
}
