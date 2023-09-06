
// Global variable to store the gallery object. The gallery object is
// a container for all the visualisations.
var data;
var waffles = [];
var waffle;

// Preload the data. This function is called automatically by the
  // gallery when a visualisation is added.
function preload() {
	data = loadTable("for-waffle-poultry.csv", "csv", "header");
}

function setup() {
    // Create a canvas to fill the content div from index.html.
	createCanvas(1000, 1000);

	var action = ["Broilers E+W", "Broilers UK", "Boiling Fowl  E & W (a)", "Boiling Fowl UK (a)", "Turkeys E & W", "Turkeys UK",
		"Turkeys Fowl UK"
	];

	var range = ['Ultra low', 'Mid low', 'Very high', 'Mid high',
		'Ultra high', 'Very low'
	]

    //waffle = new Waffle(30, 30, 300, 300, 8, 8, data, "Monday", range);
    for(var i = 0; i < action.length; i++)
        {
            if(i < 4)
            waffles.push(new Waffle(20 + (i * 220), 20, 200, 200, 8, 8, data, action[i], range));
            else
            {
                waffles.push(new Waffle(120 + (i-4) * 220, 240, 200, 200, 8, 8, data, action[i], range))
            }
        }
    
}

function draw() {
	background(255);
    // for loop to draw waffles on canvas
    for(var i = 0; i < waffles.length; i++)
        {
            waffles[i].draw();
        }
    for(var i = 0; i < waffles.length; i++)
        {
            waffles[i].checkMouse(mouseX, mouseY)
        }
    
}