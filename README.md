# nyc-hack

## Index builder

The `merge.js` script can merge restaurant data from a CSV file and a JSON file, in order to upload to an Algolia index.

### Usage

1. Download and unzip [project-files.zip](https://github.com/algolia/solutions-hiring-assignment/blob/master/project-files.zip)
2. Make sure Node.js is installed, and run `$ npm install`
3. Run `node merge.js > merged.json`

### Other restaurant data sources

- http://opentable.herokuapp.com/ (example: https://opentable.herokuapp.com/api/restaurants?name=jerk)
- https://data.world/data-society/discover-the-menu
- http://curatingmenus.org/data_dictionary
- http://menus.nypl.org/data
- https://www.programmableweb.com/api/eatstreet
- https://developers.eatstreet.com/
- https://www.yelp.com/developers/documentation/v3/business_search
- https://www.yelp.com/developers/documentation/v3/all_category_list
