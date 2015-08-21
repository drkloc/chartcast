var appid = 'D8AEA46D';
var ns = ['com.chartcast.demo'];

var receiver = new cast.receiver.Receiver(appid, ns);

receiver.start();

window.addEventListener('load', function() {
  $("#map").text("Loaded!");
});
