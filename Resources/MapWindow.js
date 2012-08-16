var MapWindow = function(options) {
	this.initialized = false;
	var that = this;

	/// Main Window
	this.window = Ti.UI.createWindow({
		modal : false,
		backgroundColor : '#fff',
		navBarHidden : true,
		orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});
	this.window.addEventListener('android:back', function() {
		that.close();
	});

	this.mapView = Ti.Map.createView({
		height : '100%',
		width : '100%',
	})

	if (options.data) {
		this.addAnnotation(options.data);
	}

	this.window.add(this.mapView);

	return this;

}
/*
 * Adds a anotation on a given address
 */
MapWindow.prototype.addAnnotation = function(_data) {
	var that = this;

	if (( _data instanceof Array)) {
		for (var i in _data) {
			addIt(_data[i]);
		}
	} else {
		addIt(_data);
	}

	function addIt(_map_data) {
		var fr = _map_data.get('fullResults');
		var annotate = Ti.Map.createAnnotation({
			latitude : fr.location.lat,
			longitude : fr.location.lng,
			//subtitle : fr.subtitle || '',
			pincolor : _map_data.color || Ti.Map.ANNOTATION_RED,
			title : fr.name || '',
			animate : true
		});
		that.mapView.region = {
			latitude : fr.location.lat,
			longitude : fr.location.lng,
			latitudeDelta : 0.05,
			longitudeDelta : 0.05
		}
		that.mapView.addAnnotation(annotate)
	}

}

MapWindow.prototype.close = function() {
	this.mapView && this.window.remove(this.mapView);
	this.window && this.window.close();
	this.window = null;
	this.initialized = false;
}

MapWindow.prototype.open = function() {
	this.window && this.window.open();
}

exports.MapWindow = MapWindow;
