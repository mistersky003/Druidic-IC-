var currenDurb;

var ItemInfo = {

regiserInfo: function (name){
	
Callback.addCallback("ItemUse", function(){
	var item = Player.getCarriedItem();
		
		if ((item.id === name)){
			
			var maxDamage = Item.getMaxDamage(item.id);
			var damage = maxDamage;
			damage-= item.data;
		
		if (Entity.getSneaking(Player.get())) {
			 Game.tipMessage("Durability: " + damage + "/" + maxDamage);
		    }
		}
});
   }
};
