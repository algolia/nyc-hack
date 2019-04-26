function hitTemplate(hit) {
    return `<div impressionid="302695" impressionranky="5" impressionrankx="1" at-regular-result-item="true" class="searchResult fadeIn u-line--light"><ghs-restaurant-card><div at-restaurant-list="true" class="restaurantCard-search clearfix u-background u-line-top u-line--light">
    <a id="302695" class="restaurantCard-searchAnchor"></a><div class="s-row restaurantCard-search-body--pickup restaurantCard-search-body--altLayout">
    <div class="s-col-xs-12 s-col-lg-6 u-flex-direction-xs-column"><div class="s-row">
    <ghs-restaurant-image class="restaurantCard-searchImage"><a class=""><img id="logo_for_302695" src="${hit.image_url}" alt="Hale &amp; Hearty Soups logo" width="90" class="u-clickable restaurantImage-img "></a></ghs-restaurant-image><div class="restaurantCard-detailsContainer u-flex u-flex-direction-xs-column s-col-xs">
    <div class="restaurantCard-primaryInfo"><div at-restaurant-card-title="true" class="s-card-title undefined">
    <a title="Hale &amp; Hearty Soups" href="https://www.seamless.com/menu/hale--hearty-soups-350-hudson-st-new-york/302695" id="ghs-search-results-restaurantId-302695" class="restaurant-name u-text-wrap"><h5 class="u-text-ellipsis">${hit.name}</h5></a><div class="restaurantCard-primaryInfo-item"><ghs-cuisines><span class="u-text-secondary restaurantCard-cuisines u-inline restaurantCard-search-cuisines">${hit.food_type}<ghs-popover tabindex="0"><a class="ellipsis u-clickable">...</a></ghs-popover></span></ghs-cuisines></div>
    </div></div>
    <ghs-card-secondary-info><div class="restaurantCard-secondaryInfo">${hit.dining_style}</div></ghs-card-secondary-info>
    </div>
    </div></div>
    <div class="restaurantCard-tertiaryInfo s-col-xs-12 s-col-lg-6 u-flex-direction-xs-column u-flex">
    <div class="s-row restaurantCard-tertiaryInfo-wrapper">
    <div class="restaurantCard-rating u-flex-align-xs--center restaurantCard-tertiaryInfo-rating restaurantCard-tertiaryInfo-item s-col-xs-3 u-flex"><ghs-popover tabindex="0"><div class="u-stack-x-1"><ghs-star-rating class=""><div at-starrating="true" class="u-flex u-flex-direction-column u-flex-align-xs--center">
    <ghs-stars class=""><div class="stars u-stack-y-1" style="background-position: 0px -128px;"></div></ghs-stars><span at-star-rating-text="true" class="u-text-secondary caption u-margin-cancel">${hit.reviews_count} <span>ratings</span></span>
    </div></ghs-star-rating></div></ghs-popover></div>
    <div class="restaurantCard-tertiaryInfo-price restaurantCard-tertiaryInfo-item s-col-xs-3"><ghs-price-rating class=""><div title="$$" class="price-scale priceRating">
    <div itemprop="" class="priceRating-value">${String(hit.price).split("").map(num => {
        let string = ""; for(let i = 0; i < num; i++) string+= "$"; return string;}).join("")}</div>
    <div class="priceRating-base">$$$$$</div>
    </div></ghs-price-rating></div>
    <div class="s-col-xs-3 restaurantCard-tertiaryInfo-item restaurantCard-deliveryStats-min"><ghs-restaurant-delivery-min><span class=""><span class="value h5">$10</span><span class="type u-text-secondary caption">minimum</span></span></ghs-restaurant-delivery-min></div>
    </div>
    <div class="restaurantCard-stats restaurantCard-stats--desktop s-hidden-sm caption u-text-secondary
                        u-flex u-flex-justify-xs--right u-flex-align-xs--bottom">
    <div class="restaurantCard-stats-each restaurantCard-stats-distance"><ghs-restaurant-pickup-distance><span class="" at-pickup-distance="true"><span at-pickup-distance-value="true" class="u-stack-x-1 u-stack-x-1">0.4<span class="" at-precision-value="true">3</span></span><span class="" at-pickup-distance-label="true">mi</span></span></ghs-restaurant-pickup-distance></div>
    <div class="restaurantCard-stats-each"><ghs-restaurant-time-estimate><span class="timeEstimate caption"><span><span class="value">55&#8211;65</span><span class="label"> mins</span></span></span></ghs-restaurant-time-estimate></div>
    </div>
    </div>
    </div>
    </div></ghs-restaurant-card></div>`;
}
  
  const search = instantsearch({
    appId: "TWTL3TNARC",
    apiKey: "497e150d08bedfa939097fc730a8dd44",
    indexName: "restaurants-v2",
    searchParameters: {
      hitsPerPage: 10,
      attributesToSnippet: ["content:20"],
      snippetEllipsisText: " [...]"
    }
  });
  
  // Uncomment the following widget to add hits list.
  
  search.addWidget(
    instantsearch.widgets.hits({
      container: "#hits",
      templates: {
        empty: "No results found.",
        item(hit) {
          return hitTemplate(hit);
        }
      }
    })
  );
  
  // Uncomment the following widget to add a search bar.
  
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: "#searchbox",
      placeholder: "Search foods...",
      autofocus: false
    })
  );
  
  // Uncomment the following widget to add categories list.
  
//   search.addWidget(
//     instantsearch.widgets.refinementList({
//       container: "#city",
//       attributeName: "city",
//       autoHideContainer: false,
//       templates: {
//         header: "City"
//       }
//     })
//   );
  
//   search.addWidget(
//     instantsearch.widgets.refinementList({
//       container: "#food_type",
//       attributeName: "food_type",
//       autoHideContainer: false,
//       templates: {
//         header: "Food Type"
//       }
//     })
//   );
  
//   search.addWidget(
//     instantsearch.widgets.refinementList({
//       container: "#dining_style",
//       attributeName: "dining_style",
//       autoHideContainer: false,
//       templates: {
//         header: "Dining Style"
//       }
//     })
//   );
  
  search.start();