/* global Module */

/* Magic Mirror
 * Module: iFrame
 *
 * By Ben Williams http://desertblade.com
 * MIT Licensed.
 */

Module.register("MMM-BigTime",{
		// Default module config.
		defaults: {
				height: "",
				width: "",
		},


  //var iframe = '<iframe src="+ urlstring +">';
	// Override dom generator.
	getDom: function() {
		var iframe = document.createElement("IFRAME");
		iframe.style = "border:0"
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		iframe.src =  "http://free.timeanddate.com/countdown/i6m1ex0a/" + this.config.timezone + "/cf12/cm0/cu4/ct" + this.config.units + "/cs0/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw" + this.config.width + "/szh" + this.config.height + "/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time;
		return iframe;
	}

});
