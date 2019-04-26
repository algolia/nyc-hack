# This script will upload events from perso-events.json to Algolia Insights

API_URL='https://insights.algolia.io/1/events'
API_URL='https://httpbin.org/post' # for testing / dry-run

# APP_ID='TWTL3TNARC'
# ADMIN_API_KEY=''
INDEX_NAME='restaurants-v2'

gen_event () {
  #  \"timestamp\": 1528364634,
  #  \"queryID\": \"43b15df305339e827f0ac0bdc5ebcaa7\"
  echo "  {
    \"index\": \"${INDEX_NAME}\",
    \"eventType\": \"${EVENT_TYPE}\",
    \"eventName\": \"${EVENT_NAME}\",
    \"userToken\": \"${USER_TOKEN}\",
    \"objectIDs\": [\"${OBJECT_ID}\"]
  }"
}

gen_order () {
  EVENT_TYPE='conversion' EVENT_NAME='order' gen_event
}

gen_view () {
  EVENT_TYPE='click' EVENT_NAME='viewRestaurant' gen_event
}

# Generate and print JSON events
echo "[" > perso-events.json

USER_TOKEN='jack'
OBJECT_ID='63154' gen_order >> perso-events.json # 63154 = Kori Tribeca, Korean, Casual Dining, 2
echo "," >> perso-events.json
OBJECT_ID='63154' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='63154' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='35491' gen_order >> perso-events.json # 35491 = Bann Restaurant, Korean, Casual Dining, 3
echo "," >> perso-events.json
OBJECT_ID='35491' gen_order >> perso-events.json
echo "," >> perso-events.json

USER_TOKEN='adrien'
OBJECT_ID='12724' gen_order >> perso-events.json # 12724 = Papatzul, Mexican / Southwestern, Casual Elegant, 3
echo "," >> perso-events.json
OBJECT_ID='12724' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='12724' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='16822' gen_order >> perso-events.json # 16822 = El Rio Grande, Mexican / Southwestern, Casual Dining, 2
echo "," >> perso-events.json
OBJECT_ID='16822' gen_order >> perso-events.json
echo "," >> perso-events.json

USER_TOKEN='bram'
OBJECT_ID='27763' gen_order >> perso-events.json # 27763 = Red Egg, Chinese, Casual Dining, 2
echo "," >> perso-events.json
OBJECT_ID='27763' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='27763' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='27787' gen_order >> perso-events.json # 27787 = Macao Trading Company, Chinese, Home Style, 2
echo "," >> perso-events.json
OBJECT_ID='27787' gen_order >> perso-events.json
echo "," >> perso-events.json

USER_TOKEN='zysha'
OBJECT_ID='2508' gen_order >> perso-events.json # 2508 = Le Bernardin, French, Fine Dining, 4
echo "," >> perso-events.json
OBJECT_ID='2508' gen_order >> perso-events.json
echo "," >> perso-events.json
OBJECT_ID='21229' gen_order >> perso-events.json # 21229 = Marc Forgione, Contemporary American, Fine Dining, 3
echo "," >> perso-events.json
OBJECT_ID='21229' gen_order >> perso-events.json 
echo "," >> perso-events.json
OBJECT_ID='124642' gen_order >> perso-events.json # 124642 = Gato, Mediterranean, Casual Elegant, 4

echo "]" >> perso-events.json
cat perso-events.json

read -p "Are you sure you want to upload these events to Algolia Insights API? " -n 1 -r
echo    # (optional) move to a new line
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1 # handle exits from shell or function but don't exit interactive shell
fi

# send API request to Algolia Insights API
curl -X POST ${API_URL} \
  -H "x-algolia-api-key: ${ADMIN_API_KEY}" \
  -H "x-algolia-application-id: ${APP_ID}" \
  -H "Content-Type: application/json" \
  -d @perso-events.json
