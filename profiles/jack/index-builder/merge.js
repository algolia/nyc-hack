const fs = require('fs');
const csv2json = require('csv2json');

const CSV_FILE = 'restaurants_info.csv';

// parse a stringified JSON object, or return undefined if it's not valid JSON
const parseJSON = (str) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return undefined;
  }
}
 
// change types of some fields from the csv file
const transformRestData = (rest) => ({
  objectID: parseInt(rest.objectID, 10),
  food_type: rest.food_type,
  stars_count: parseFloat(rest.stars_count),
  reviews_count: parseInt(rest.reviews_count, 10),
  neighborhood: rest.neighborhood,
  phone_number: rest.phone_number,
  price_range: rest.price_range,
  dining_style: rest.dining_style
});

// read a JSON data file and returns a objectID->object set
function readExtData (file) {
  console.error(`loading ${file}...`);
  return require(file).reduce((set, restaurant) => ({
    ...set,
    [restaurant.objectID]: restaurant
  }), {});
}

const printEnrichedRecordsFromFile = ({ csvFile, restaurantsSet }) => new Promise((resolve, reject) => {
  let first = true;
  fs.createReadStream(csvFile)
    .pipe(csv2json({
      separator: ';' // (defaults to comma)
    }))
    .on('data', data => {
      const json = parseJSON(data.toString());
      if (typeof json !== 'object') return;
      const rest = transformRestData(json);
      const extData = restaurantsSet[rest.objectID];
      console.log((first ? '[' : ',') + JSON.stringify({
        ...rest,
        ...extData
      }));
      first = false;
    })
    .on('end', () => {
      console.log(']');
      resolve();
    })
    .on('error', reject);
});

// actual script
(async () => {
  const restaurantsSet = readExtData('./restaurants_list.json');
  // console.log(restaurantsSet['101422']);
  await printEnrichedRecordsFromFile({ csvFile: CSV_FILE, restaurantsSet });
})();
