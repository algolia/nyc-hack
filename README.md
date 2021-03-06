# nyc-hack

## The history

In the dark ages, before we had catered lunch, ordering lunch at office-nyc was a long and terrible affair. We could never decided want we wanted to order. Until.....

## Index builder

The `merge.js` script can merge restaurant data from a CSV file and a JSON file, in order to upload to an Algolia index.

### Usage

1. Download and unzip [project-files.zip](https://github.com/algolia/solutions-hiring-assignment/blob/master/project-files.zip)
2. Make sure Node.js is installed, and run `$ npm install`
3. Run `node merge.js > merged.json`

### Other restaurant data sources we considered

- http://opentable.herokuapp.com/ (example: https://opentable.herokuapp.com/api/restaurants?name=jerk)
- https://data.world/data-society/discover-the-menu
- http://curatingmenus.org/data_dictionary
- http://menus.nypl.org/data
- https://www.programmableweb.com/api/eatstreet
- https://developers.eatstreet.com/
- https://www.yelp.com/developers/documentation/v3/business_search
- https://www.yelp.com/developers/documentation/v3/all_category_list

## Personalization Concept

The original idea was to use the [Microsoft Azure Speaker Recognition API](https://azure.microsoft.com/en-us/services/cognitive-services/speaker-recognition/) to train on various speaker inputs (aka different voices) and then match these with user tokens used for personalization.  Due to technical difficulties we were not able to get this working ... yet. 


## Personalization Events Sender

### Usage

- From the Admin of your Algolia App, make sure that "personalization" and "click analytics" features are enabled. Keep in mind that these changes may take up to 10 minutes before the features are effectively enabled.

- Run the following script after pasting your `APP_ID` and `ADMIN_API_KEY` values:

```sh
$ APP_ID='' ADMIN_API_KEY='' ./send-perso-events.sh
```

This will create a `perso-events.json` file and display it.
After confirmation, the events will be submitted to Algolia Insights API.

- From the "Personalization" tab of the Dashboard, increase the "Personalization Impact" vlue to 100%, so that personalized matches are ranked higher.

- From your Index dashboard screen, test that it works by simulating a personlized query. In order to do that, click "Add query parameter", then click on the "Personalization" tab, enable personalization, and enter `adrien` as "User Token". After applying these query parameters, mexican restaurants should be highly ranked.


## Front-End

We used the [Roomba tool](https://github.com/algolia/roomba) to scrape the assets off https://www.seamless.com/.
In order to send in personalization in separate personalization tokens as query parameters, we created seperate html & js files in the profiles directory.

### Usage

Just open up an html file to check it out.


