const comusion = 2000;
	
var ready = false; 

	
var EssenceCompusion = {
	
registerItem: function (id, value, enable){
	if (enable === true){
IDRegistry.genItemID(id);	
Item.createItem(id, value.name, {name: value.texture, meta: value.meta}, {stack: value.stack});
	}
 },
 
 melner: function (hammer){  
	 Callback.addCallback("ItemUse", function(coords, item){
		var item = Player.getCarriedItem();
		if (item.id === hammer){
			if ((Infernos >= comusion) && (Terros >= comusion) && (Aeris >= comusion)){	
			if (ready === true){
        if (Entity.getSneaking(Player.get())){
			Entity.addEffect(Player.get(), 12, 2, 10, true, true);
			Entity.spawn(coords.x, coords.y-1, coords.z, 93);
			Infernos-=comusion;
			Terros-=comusion;
			Aeris-=comusion;
		    }
		}
	}
}
	});
	 
 }
};
