import * as MODEL from "./model.js";


function initListeners() {
    $("nav a").click(function(e) {
        // this stores the id from the anchor tag
        let aID = e.currentTarget.id;
        let contentID = aID + "Content";

        MODEL.updateView(contentID);
    });
}


$(document).ready(function() {
    initListeners();
    MODEL.updateView("homeContent");
});