function readExtData (file) {
  console.error(`loading ${file}...`);
  return require(file).reduce((set, restaurant) => ({
    ...set,
    [restaurant.objectID]: restaurant
  }), {});
}

const restaurantsSet = readExtData('./restaurants_list.json');
// console.log(restaurantsSet['101422']);

/*
objectID: ///
name: 'Town',
address: '348 Main Street',
area: 'Denver / Colorado',
city: 'Carbondale',
country: 'US',
image_url: 'https://www.opentable.com/img/restimages/101422.jpg',
mobile_reserve_url: 'http://mobile.opentable.com/opentable/?restId=101422',
payment_options: [ 'AMEX', 'Discover', 'MasterCard', 'Visa' ],
phone: '9709636328',
postal_code: '81623',
price: 2,
reserve_url: 'http://www.opentable.com/single.aspx?rid=101422',
state: 'CO',
_geoloc: { lat: 39.400235, lng: -107.210373 } }
*/

const additionalFields = ['name', 'address', 'area', 'city', 'country', 'image_url', 'mobile_reserve_url', 'phone', 'postal_code', 'price', 'mobile_reserve_url', 'state', /*'_geoloc'*/]

const getRestaurantFields = id => {
  const restaurantData = restaurantsSet[id] || {};
  const values = additionalFields.map(key => restaurantData[key])
  //console.log(id, !!restaurantData, values);
  return values;
};

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('./restaurants_info.csv')
});

let header = null;

lineReader.on('line', function (line) {
  if (!header) {
    header = line.split(';').concat(additionalFields);
    console.log(header.map(str => `"${str}"`).join(','));
  } else {
    const [ id ] = line.split(';');
    console.log(line.split(';').concat(getRestaurantFields(id)).map(str => `"${str}"`).join(','));
  }
});

lineReader.on('close', function (line) {
  //console.log(first.split(';'));
});
