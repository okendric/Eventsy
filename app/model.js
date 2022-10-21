var _homeContent = ``;
var _aboutContent = ``;
var _toursContent = ``;
var _specialOffersContent = ``;
var _blogContent = ``;
var _contactContent = ``;

export function updateView(pageName){
// console.log("Model:" + pageName);
var pageContent = "_" + pageName;
$("#app").html(eval(pageContent));

// if(pageName == "homeContent") {
//   $("#nav-holder").removeClass("darkNav");
// } else {
//   $("#nav-holder").addClass("darkNav");
// }

// initListeners();
}
