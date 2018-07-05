/*
 _ _                   _       _   _             _ _ _      _ _
|  _ \                |_|     | | |_|           |_ _ _|   / _ _|                
| | | |  _ _   _   _   _     _| |  _     _        | |    | |       
| | | | |  _| | | | | | |  / _  | | |  / _|       | |    | |       
| |_| | | |   | |_| | | | | |_| | | | | |_       _|_|_   | |_ _   
|_ _ /  |_|    \_ _ | |_|  \ _ _| |_|  \ _|     |_ _ _|   \ _ _|

by Denys Dzhuhalik (https://vk.com/id235887284);

*/

importLib("ToolType", "*");
IMPORT ("BackpackAPI", "BackpackRegistry");
IMPORT ("BaublesAPI", "Baubles");

Callback.addCallback("LevelLoaded", function () {
Game.message("Druidic Craft Loaded!");
});

const empty = 0;

IDRegistry.genItemID("fenixFeather"); 
Item.createItem("fenixFeather", "Fenix feather", {name: "fenix", meta: 0}, {stack: 16});