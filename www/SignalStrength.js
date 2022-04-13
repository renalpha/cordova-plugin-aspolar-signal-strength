var argscheck = require('cordova/argscheck');

function SignalStrength() {

	// Get the signal strength as dBm
	this.getdBm = function (successCallback, errorCallback) {
		return cordova.exec(successCallback, errorCallback, 'SignalStrength', 'getdBm', []);
	};

	// Get the signal strength as percentage of signal 0%... 100%
	this.getPercentage = function (successCallback, errorCallback, options) {
		options = options || {};
		var typeNetwork = options.typeNetwork || 'notWifi';
		args = [typeNetwork];
		return cordova.exec(successCallback, errorCallback, 'SignalStrength', 'getPercentage', args);
	};

	// Get signal level from 0..4
	this.getLevel = function (successCallback, errorCallback) {
		return cordova.exec(successCallback, errorCallback, 'SignalStrength', 'getLevel', []);
	};
}

window.SignalStrength = new SignalStrength();
