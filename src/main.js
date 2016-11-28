window.MIMEFromDataURI = (function () {
    return {
        getMIMEType: function (dataURI) {
            return dataURI.substring(5, dataURI.indexOf(';', 5));
        }
    };
})();
