
//Sbaeris Registry(1)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbaerisFull){
	Player.setCarriedItem(ItemID.BottleSbaerisFullA, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbaerisFullA){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 8, 1, 8000, true, true);
	Entity.addEffect(player, 1, 1, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbaeris3, 1, 0);
}
});
//Sbaeris Registry(2)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbaeris3){
	Player.setCarriedItem(ItemID.BottleSbaeris3A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbaeris3A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 8, 2, 8000, true, true);
	Entity.addEffect(player, 1, 2, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbaeris1, 1, 0);
}
});
//Sbaeris Registry(3)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbaeris1){
	Player.setCarriedItem(ItemID.BottleSbaeris1A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbaeris1A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 8, 3, 8000, true, true);
	Entity.addEffect(player, 1, 3, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbaeris0, 1, 0);
}
});
//Sbaeris Registry(4)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbaeris0){
	Player.setCarriedItem(ItemID.BottleSbaeris0A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbaeris0A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 8, 4, 8000, true, true);
	Entity.addEffect(player, 1, 4, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleEmpty, 1, 0);
}
});
//Sbterros Registry (1)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbterrosFull){
	Player.setCarriedItem(ItemID.BottleSbterrosFullA, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbterrosFullA){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 11, 1, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbterros2, 1, 0);
}
});
//Sbterros Registry (2)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbterros2){
	Player.setCarriedItem(ItemID.BottleSbterros2A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbterros2A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 11, 2, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbterros1, 1, 0);
}
});
//Sbterros Registry (3)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbterros1){
	Player.setCarriedItem(ItemID.BottleSbterros1A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbterros1A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 11, 3, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleSbterros0, 1, 0);
}
});
//Sbterros Registry (4)
Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == ItemID.BottleSbterros0){
	Player.setCarriedItem(ItemID.BottleSbterros0A, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == ItemID.BottleSbterros0A){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, 11, 4, 8000, true, true);
	Player.setCarriedItem(ItemID.BottleEmpty, 1, 0);
}
});
