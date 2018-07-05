var structure = FileTools.ReadJSON(__dir__+"/json/structure.json");

function setObject(array, position, bool){
    for(var i in array){
        var x = array[i].x;
        var y = array[i].y;
        var z = array[i].z;
            var id = array[i].id;
            var data = array[i].data;
            
            World.setBlock(x+position.x,y+position.y,z+position.z, id, data);
    }
}


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
 for(var i in structure){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 250);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        var x = structure[i].x;
        var y = structure[i].y;
        var z = structure[i].z;
            var id = structure[i].id;
            var data = structure[i].data;
            
            World.setBlock(x+coords.x,y+coords.y,z+coords.z, id, data);
    }
});