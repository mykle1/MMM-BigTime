# MMM-BigTime

A single module that occupies the entire display of your mirror.

## Uses

Meant to be used with some form of pages or as a live background.

You will have to play with the height and width values to make it work for you.

## Sample config entry

{
		module: 'MMM-BigTime',
		position: 'top_right',	                   // fullscreen_below for live background
		config: {
				height: "2300px",
				 width: "1800px",
				 timezone: "n179",                     // See Timezone chart at bottom
				 units: "2",                           // 1=no units, 2=units initial only, 3=units abbr singular, 4= units abbr plural, 5= units full name
				 countUp: "no",                       // Count up after timer ends
				 date: "2019-02-13",                   // YYYY-MM-DD format ONLY
				 time: "00:00:01",                     // (HH:MM:SS)    Exact time you want timer to end
				 text1: "Dove's BDay!",         // 2 lines of text during timer
				 text2: "I can't wait!",               // 2 lines of text during timer
				 text1Color: "FFFFFF",                 // Hex color codes
				 text2Color: "62FF00",                 // Hex color codes
				 timerColor: "FFFFFF",                 // Hex color codes
				 endText1: "", // "Happy BDay!",          // 2 lines of text when timer ends
				 endText2: "", // "You're 31!",       // 2 lines of text when timer ends
				 endText1Color: "FFFFFF",              // Hex color codes
				 endText2Color: "62FF00",              // Hex color codes
				 timerUpColor: "FFFFFF",               // Hex color codes
				 colorpc: "000",                       // color of the background 000 = black, t = transparent
			}
		},
