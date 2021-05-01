var countryCode, countryName, imageUrl;

$.getJSON('https://freegeoip.app/json/', function (data) {
    //Find country name and country code
    countryCode = data.country_code;
    countryName = data.country_name;

    countryCode = "" + countryCode;
    countryCode = countryCode.toLowerCase();

    //Get image of the national flag
    imageUrl = "https://cdn.jsdelivr.net/gh/hampusborgos/country-flags@main/svg/" + countryCode + ".svg";
    //Check image source
    imageUrl = CheckImageUrl(imageUrl);

    //Display country name and flag
    $('#countryFlag').css('background-image', 'url(' + imageUrl + ')');
    $('#countryName').text(countryName);
});

//This method checks the status of web page
//If there is a problem, source changes
function CheckImageUrl(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, false);
    request.send(null);

    if (request.status != 200)
        url = "international-flag-of-planet-Earth.png";

    return url;
}