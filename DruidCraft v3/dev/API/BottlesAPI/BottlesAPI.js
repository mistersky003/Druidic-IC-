/*Name: "BottlesAPI",
  Version: 0.1,
  Anchor: "Denys Dzhuhalik"
 */
var BottlesAPI = {
	
	register: function (reg) {
		
	Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == reg.DISBottlesID){
	Player.setCarriedItem(reg.ACTBottlesID, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == reg.ACTBottlesID){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, reg.First_EffectID, reg.First_levelEffect, reg.FirstTime_Effect, true, true);
	Entity.addEffect(player, reg.Second_EffectID, reg.Second_levelEffect, reg.SecondTime_Effect, true, true);
	Player.setCarriedItem(reg.ResultBottleID, 1, 0);
}
});
	}
};