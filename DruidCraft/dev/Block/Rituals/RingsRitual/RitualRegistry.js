TileEntity.registerPrototype(BlockID.druidicAltar, {
	defaultValues: {
		item: 0
	},
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+1.02, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
		}
		
	},
	
	drop: function (){
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
	},
	
	tick: function (){
	},
	
	click: function (){
		var Item = Player.getCarriedItem();
		if (Item.count > 0){
		this.animation();
		} else if (Item.count <= 0){
			this.drop();
		}
	},
	
destroy: function(){
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
},

selfDestroy: function(){
	this.destroy();
}
});



TileEntity.registerPrototype(BlockID.druidicAltarController, {
		defaultValues: {
		progress: 0,
		active: false,
		charge: false,
		rings: 0,
		item: 0
	},
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+.41, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
				});
		this.animationItem.load();
	  }
	},
	
	
	drop: function (){
			this.data.active = false;
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
	},
	
	click: function (){
		var Item = Player.getCarriedItem();
		if (Item.count > 0){
		this.animation();
		} else if (Item.count <= 0){
			this.drop();
		}
	},
	
	destroy: function(){
	this.data.active = false;
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
},

selfDestroy: function(){
	this.destroy();
},


checkRitual: function (material, source, result){
	if (World.getBlock(this.x, this.y, this.z).id === BlockID.druidicAltarController){
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
		
	if(World.getTileEntity(this.x, this.y, this.z).data.item === source){
		if(World.getTileEntity(this.x-2, this.y, this.z).data.item === material){
		if(World.getTileEntity(this.x+2, this.y, this.z).data.item === material){
		if(World.getTileEntity(this.x, this.y, this.z-2).data.item === material){
		if(World.getTileEntity(this.x, this.y, this.z+2).data.item === material){
			this.data.active = true;
				this.data.item = result;
		 }
    }
		 }
		      }
	                }
	
	                     }
	                }
	          }
	     }
	}
},

result: function (){	
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	Entity.spawn(this.x-2, this.y+1, this.z, 93);
	World.getTileEntity(this.x-2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x-2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	Entity.spawn(this.x+2, this.y+1, this.z, 93);
	World.getTileEntity(this.x+2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x+2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	Entity.spawn(this.x, this.y+1, this.z-2, 93);
	World.getTileEntity(this.x, this.y, this.z-2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z-2).data.item = 0;
	}
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
	Entity.spawn(this.x, this.y+1, this.z+2, 93);
	World.getTileEntity(this.x, this.y, this.z+2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z+2).data.item = 0;
	}
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
},

Infernos: function (){
	Infernos+=10;
	if (Infernos >= 20000){
				   Infernos=20000;
				   this.data.charge = true;
			}
},

Aeris: function (){
	Aeris+=10;
			if (Aeris >= 20000){
				Aeris=20000;
				this.data.charge = true;
			}
},

Terros: function (){
	Terros+=10;
			if (Terros >= 20000){
				Terros=20000;
				this.data.charge = true;
			}
},

chargeCheck: function (rings, rune, type){
	
	if (World.getBlock(this.x, this.y, this.z).id === BlockID.druidicAltarController){
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
	
	if(World.getTileEntity(this.x, this.y, this.z).data.item === rings){
		if(World.getTileEntity(this.x-2, this.y, this.z).data.item === rune){
		if(World.getTileEntity(this.x+2, this.y, this.z).data.item === rune){
		if(World.getTileEntity(this.x, this.y, this.z-2).data.item === rune){
		if(World.getTileEntity(this.x, this.y, this.z+2).data.item === rune){
		
		switch(type){
			
		case Infernos:
		this.Infernos();
        break;
        case Aeris:
		this.Aeris();
		break;
		case Terros:
	    this.Terros();
		break;
		}
		
	}
	}}
		}}}
	         }}}}
	
},

getSource(){
	
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x-2, this.y+1, this.z, 93);
	World.getTileEntity(this.x-2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x-2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x+2, this.y+1, this.z, 93);
	World.getTileEntity(this.x+2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x+2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x, this.y+1, this.z-2, 93);
	World.getTileEntity(this.x, this.y, this.z-2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z-2).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x, this.y+1, this.z+2, 93);
	World.getTileEntity(this.x, this.y, this.z+2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z+2).data.item = 0;
	}
},

tick: function (){
	this.checkRitual(266, ItemID.ruby, ItemID.rubuRing);
	this.checkRitual(266, ItemID.saphire, ItemID.saphireRing);
	this.checkRitual(266, ItemID.nephrite, ItemID.nephriteRing);
	this.checkRitual(265, 265, ItemID.ironRing);
	
	
	this.chargeCheck(ItemID.rubuRing, ItemID.runehell, Infernos);
	this.chargeCheck(ItemID.saphireRing, ItemID.runeocean, Aeris);
	this.chargeCheck(ItemID.nephriteRing, ItemID.runeswamp, Terros);
	this.chargeCheck(ItemID.nephriteRing, ItemID.runedesert, Terros);
	
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runehell, Infernos);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runeocean, Aeris);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runedesert, Terros);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runeswamp, Terros);
	
	if(this.data.charge == true){
		this.getSource();
		this.data.charge = false;
	}
	
	if (this.data.active === true){
		this.result();
		this.data.active = false;
	}
	}
});