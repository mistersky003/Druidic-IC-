var structure = FileTools.ReadJSON(__dir__+"/json/structure.json");

var generateItems =[
];

function addItemsToGenerateChest(id, random, count, data){
    random = random||1;
    count = count||{};
    count.min = count.min||1;
    count.max = count.max||1;
    data = data||0;
    generateItems.push({id:id, data:data, random:random, count:count});
}

addItemsToGenerateChest(264, 0.2, {max:3});

addItemsToGenerateChest(266, 0.6, {max:4});

addItemsToGenerateChest(265, 1, {max:6});

addItemsToGenerateChest(ItemID.ruby, 0.7, {max:2});
addItemsToGenerateChest(ItemID.saphire, 0.6, {max:2});
addItemsToGenerateChest(ItemID.nephrite, 0.5, {max:3});

addItemsToGenerateChest(ItemID.runeswamp, 1, {max:4});

addItemsToGenerateChest(ItemID.runeocean, 0.4, {max:4});
addItemsToGenerateChest(ItemID.runehell, 0.4, {max:3});

addItemsToGenerateChest(ItemID.runedesert, 0.8, {max:5});


function fillChest(x,y,z){
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for(var i in generateItems){
        if(random<generateItems[i].random){
            var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min;
            container.setSlot(slot, generateItems[i].id, count, generateItems[i].data);
            slot++;
        }
    }
}


function setStructure(coords){
   World.setBlock(coords.x, coords.y, coords.z, 54, 0);
   
    World.setBlock(coords.x-1, coords.y, coords.z, 4, 0);
     World.setBlock(coords.x+1, coords.y, coords.z, 4, 0);
      World.setBlock(coords.x, coords.y, coords.z-1, 4, 0);
       World.setBlock(coords.x, coords.y, coords.z+1, 4, 0);
       
        World.setBlock(coords.x+2, coords.y, coords.z, 4, 0);
         World.setBlock(coords.x-2, coords.y, coords.z, 4, 0);
          World.setBlock(coords.x, coords.y, coords.z+2, 4, 0);
           World.setBlock(coords.x, coords.y, coords.z-2, 4, 0);
           
           World.setBlock(coords.x+1, coords.y+1, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+1, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+1, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+1, coords.z-1, 4, 0);
           
            World.setBlock(coords.x+1, coords.y+2, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+2, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+2, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+2, coords.z-1, 4, 0);

        World.setBlock(coords.x+1, coords.y+3, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+3, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+3, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+3, coords.z-1, 4, 0);
           
           World.setBlock(coords.x, coords.y+3, coords.z+1, 4, 0);
         World.setBlock(coords.x, coords.y+3, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+3, coords.z, 4, 0);
           World.setBlock(coords.x+1, coords.y+3, coords.z, 4, 0);
           
            World.setBlock(coords.x, coords.y+4, coords.z, 44, 3);
            World.setBlock(coords.x, coords.y+1, coords.z, 44, 3);
            
             World.setBlock(coords.x-2, coords.y+1, coords.z+1, 44, 3);
         World.setBlock(coords.x-2, coords.y+1, coords.z+2, 44, 3);
         World.setBlock(coords.x-1, coords.y+1, coords.z+2, 44, 3);
         
         World.setBlock(coords.x-2, coords.y+1, coords.z-1, 44, 3);
         World.setBlock(coords.x-2, coords.y+1, coords.z-2, 44, 3);
         World.setBlock(coords.x-1, coords.y+1, coords.z-2, 44, 3);
         
          World.setBlock(coords.x+2, coords.y+1, coords.z-1, 44, 3);
         World.setBlock(coords.x+2, coords.y+1, coords.z-2, 44, 3);
         World.setBlock(coords.x+1, coords.y+1, coords.z-2, 44, 3);
         
          World.setBlock(coords.x+2, coords.y+1, coords.z+1, 44, 3);
         World.setBlock(coords.x+2, coords.y+1, coords.z+2, 44, 3);
         World.setBlock(coords.x+1, coords.y+1, coords.z+2, 44, 3);
       
         
         fillChest(coords.x, coords.y, coords.z);
       }
       
  


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 20);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 2){
            if (World.getBlock(coords.x+1, coords.y, coords.z).id == 2){
                if (World.getBlock(coords.x-1, coords.y, coords.z).id == 2){
                    if (World.getBlock(coords.x, coords.y, coords.z+1).id == 2){
                        if (World.getBlock(coords.x, coords.y, coords.z-1).id == 2){
                            setStructure(coords);
                            }
                        }
                    }
                }
            }               
});