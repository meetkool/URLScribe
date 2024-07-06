/**
 * api.js
 *
 * API For encoding and decoding URL hash objects
 *
 * Created by meet bhanushali
 * July 2020
 */


/*******************************************************************************
 * Global Variables
 ******************************************************************************/

const LATEST_API_VERSION = "0.2.0";

var apiVersions = {};



/*******************************************************************************
 * API Version 0.2.0 (Latest)
 ******************************************************************************/

apiVersions["0.2.0"] = {

  VERSION: "0.2.0",

  /* Return a link to view the page */
  getViewLink: function(pageData) {
    var urlData = {
      version: this.VERSION,
      compressed: false,
      body: pageData,
    };

    const hashObject = b64.encode(JSON.stringify(urlData));
    return `https://url-scribe.vercel.app/#${hashObject}`;
  },

  /* Return the page data from the object */
  decode: function(urlData) {
    return urlData.body;
  },

}



/*******************************************************************************
 * API Version 0.0.1 (Original)
 ******************************************************************************/

apiVersions["0.0.1"] = {

  VERSION: "0.0.1",

  /* Return a link to view the page */
  getViewLink: function(pageData) {
    return `https://url-scribe.vercel.app/#${b64.encode(pageData)}`;
  },

}
