// KINVEY STUFF
var Kinvey = require('/kinvey-titanium-0.9.8');
Ti.API.info('kinvey ' + JSON.stringify(Kinvey));

Kinvey.init({
	appKey : 'xxxxxxxxxxxxxx', // USE YOUR CREDENTIALS
	appSecret : 'xxxxxxxxxxxxxxxxxxxxxxxxxx' // USE YOUR CREDENTIALS
});

// create a user or login if the user already exists...
Kinvey.User.create({
	username : 'CI_ADMIN',
	password : 'password',
	name : 'CI_ADMIN'
}, {
	success : function(user) {
		// CI_ADMIN is now created and logged in.
		getLocationsInformationFromKinvey();
	},
	error : function(error) {
		// Oops. An error occured.
		new Kinvey.User().login('CI_ADMIN', 'password', {
			success : function(user) {
				getLocationsInformationFromKinvey();
			}
		});
	}
});

//
// KINVEY MAGIC - Get Hotels ao
//
function getLocationsInformationFromKinvey() {
	var query = new Kinvey.Query();

	query.on('_geoloc').nearSphere([-105.11993408203125, 39.924480438232422], 15)
	query.on('keyword').equal('hotels');

	var collection = new Kinvey.Collection('Locations');

	collection.setQuery(query);

	collection.fetch({

		success : function(d) {
			Ti.API.info(' locations ' + JSON.stringify(d));
			
			// create window object and open it
			var MV = require("/MapWindow").MapWindow;
			var MapWindow = new MV({
				data : d
			}).open();
		},

		error : function(d) {
			Ti.API.info(' error ' + JSON.stringify(d));
		}
	});
}
