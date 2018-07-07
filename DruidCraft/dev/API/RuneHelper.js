var RuneRegistry = {
	
registerRune: function (r){
IDRegistry.genItemID(r.RuneID);	
Item.createItem(r.RuneID, r.Name, {name: r.Texture, meta: 0}, {stack: 64});
 },
 
 dropMobs: function (drop) {
  Callback.addCallback("EntityDeath", function(entity){
    if(Entity.getType(entity) == drop.MobsID){
 		var coords = Entity.getPosition(entity);
	if (coords && (!drop.Сhance || Math.random() < drop.Сhance)) {  
      World.drop(coords.x, coords.y, coords.z, drop.ResultID, 1, 0);
  }
	}
  });
 },
 
  dropBlock: function (block) {
	 Block.registerDropFunction(block.BlockID, function(coords, blockID, blockData, level, enchant){
  var source = [[block.BlockID, 1, 0]];
if (source && (!block.Сhance || Math.random() < block.Сhance)) {
		 World.drop(coords.x, coords.y, coords.z, block.DropID, 1, 0);
		 World.drop(coords.x, coords.y, coords.z, block.BlockID, 1, 0);
      } else {
return source;
}
});
 }
};