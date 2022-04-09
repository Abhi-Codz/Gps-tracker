function setup() 
{
  createCanvas(400, 400);
  frameRate(5);
}

function draw() 
{
  background(220);	
  navigator.geolocation.getCurrentPosition(

    // Success callback
    function(position) 
    {
	 background(0);
	 textSize(32);
     fill('lime');
	 text("latitude: " + position.coords.latitude, 5, 100);
	 text("longitude: " + position.coords.longitude, 5, 200);
    },

    // Optional error callback
    function(error)
    {
    }
);
	
}