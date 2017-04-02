describe("MIMEFromDataURI", function() {
  var MIMEFromDataURI = require('../src/MIMEFromDataURI.js');
  
  it("should return MIME type", function() {
    var mimeType = MIMEFromDataURI.getMIMEType('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==');
    expect(mimeType).toBe('image/png');
  });
  
});
