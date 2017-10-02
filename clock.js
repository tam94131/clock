window.onload = function () {
	
	function Clock() {	
		var currentDate = new Date();

		this.hours = currentDate.getHours();
		this.minutes = currentDate.getMinutes();
		this.seconds = currentDate.getSeconds();
		this.meridium = 'AM';

		if (this.hours >= 12) {
			this.hours -= 12;
			this.meridium = 'PM';
		}
		if (this.hours === 0) {
			this.hours = 12;
		}
		
		if (this.hours < 10) {
			this.hours = "0" + this.hours;
		}
		if (this.minutes < 10) {
			this.minutes = "0" + this.minutes;
		}
		if (this.seconds < 10) {
			this.seconds = "0" + this.seconds;
		}

		var div = document.getElementById('clock');
		div.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds + " " + this.meridium;
	}

// var clock = new Clock();
setInterval(Clock,1000);

}