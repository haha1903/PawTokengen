/**
 * @file Paw Extension for tokengen
 * @author Hai Chang <haichang@microsoft.com>
 */

// Extensions are implemented as JavaScript classes
var Tokengen = function() {
  this.evaluate = function() {
    const http_request = new NetworkHTTPRequest();
    http_request.requestUrl = "http://localhost:3000"
    http_request.send()
    return http_request.responseBody
  }
}
// set the Extension Identifier (must be same as the directory name)
Tokengen.identifier = "com.microsoft.PawExtensions.Tokengen";
// give a display name to your Dynamic Value
Tokengen.title = "Tokengen";
// link to the Dynamic Value documentation
Tokengen.help = "Tokengen";
// call to register function is required
registerDynamicValueClass(Tokengen)
