# Kinvey TiKinveyGeoExample

This is a Appcelerator Titanium sample app integrated with Kinvey, to use make an account on
https://console.kinvey.com

Here is my original blog posting on Kinvey, and an older github project that needs to be updated to use 
the Kinvey Titanium Module, it is currently using my code http://bit.ly/LySOSb

For more details on integrating Kinvey and Foursquare as a data provider, see the blog post at http://goo.gl/9dyMm.


Also, you have to update `app-key` and `app-secret` in the file `app.js`
to your app-key and app-secret from the Kinvey console.


This example shows how to use a Foursquare Data Provider, the example is a work in progress 
and I will continue to update this project.

Please note that I am currently working through some issues with the kinvey appcelerator javascript module, I have 
sent the issues to kinvey support, but the verions included in this project has the fixes in it.

this code should run on IOS, still working IOS first then Android... Sorry Android Users

To enable Data Integration with this app, just 

* Create a new collection ![Create New Collection](https://raw.github.com/aaronksaunders/TiKinveyGeoExample/master/screenshots/create_collection.png "Create Collection")
* Select a provider (for example Foursquare) and enter credentials ![Select Foursquare](https://raw.github.com/aaronksaunders/TiKinveyGeoExample/master/screenshots/add_foursquare_creds.png "Select Foursquare")
* Enter your credentials, the run your app ![Running Application](https://raw.github.com/aaronksaunders/TiKinveyGeoExample/master/screenshots/test%20app.png "Enter Credentials")