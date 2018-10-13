var fly = false;		
	
Baubles.registerBauble({
    id: ItemID.fullcolorRing,
    type: "ring",
    onEquip: function () {
		ready = true;
        EssenceCompusion.melner(ItemID.molotTor);
    },
    onTakeOff: function () {
        ready = false;
        EssenceCompusion.melner(ItemID.molotTor);
    }
});



Baubles.registerBauble({
    id: ItemID.megicBelt,
    type: "belt",
    tick: function () {
        Entity.addEffect(Player.get(), 5, 5, 5, true, true);
    }
});


Baubles.registerBauble({
    id: ItemID.saphireRing,
    type: "ring",
    onEquip: function () {
		fly = true;
    },
    onTakeOff: function () {
        fly = false;
    }
});
	 
   Baubles.registerBauble({
    id: ItemID.Wings,
    type: "body",
	onTakeOff: function () {
        Player.setFlyingEnabled(false);
    },
    tick: function () {
		let flying = Player.getFlying();
		let velocity = Player.getVelocity();
        if ((Aeris >= 1) && (fly === true)){
			Player.setFlyingEnabled(true);
		}
		if ((Aeris >= 1) && (fly === true) && (flying === true)){
			Aeris--;
		}
		if ((Aeris < 1) || (fly === false)){
			Player.setFlyingEnabled(false);
						Player.setVelocity(velocity.x, -0.1, velocity.z);
		}
	
    }
});


var Wings = {
	
	registerBaubleWings: function (id, count){
		
		Baubles.registerBauble({
    id: id,
    type: "body",
	onTakeOff: function () {
        Player.setFlyingEnabled(false);
    },
    tick: function () {
		let flying = Player.getFlying();
		let velocity = Player.getVelocity();
        if ((Aeris >= count) && (fly === true)){
			Player.setFlyingEnabled(true);
		}
		if ((Aeris >= count) && (fly === true) && (flying === true)){
			Aeris -=count;
		}
		if ((Aeris < 1) || (fly === false)){
			Player.setFlyingEnabled(false);
						Player.setVelocity(velocity.x, -0.1, velocity.z);
		}
	
    }
		});
  }
};

IDRegistry.genItemID("testW");
Item.createItem("testW", "NoNe", {name: null, meta: 0}, {stack: 1});

Wings.registerBaubleWings(ItemID.testW, 5, true);

