var BLOCK_TYPE_RACK = Block.createSpecialType({
	base: 4,
	destroytime: 4.2
});
IDRegistry.genBlockID("CookingRack");
Block.createBlockWithRotation("CookingRack", [
    {
        name: "Cooking Rack",
        texture: [["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
], BLOCK_TYPE_RACK);
RenderHelper.setRackRender(BlockID.CookingRack, true);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.CookingRack, count: 1, data: 0}, [
        "aba",
        " a ",
        "cdc"
    ], ['a', ItemID.BottleEmpty, 0, 'b', 280, 0, 'c', 264, 0, 'd', 379, 0]);
	
});

const guiRack = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Cooking Rack"}},
        inventory: {standart: true},
       background: {standart: true}
    },

    drawing: [
	{type: "bitmap", x: 500, y: 100, bitmap: "guinap", scale: 4.2},
	{type: "bitmap", x: 600, y: 100, bitmap: "guinap", scale: 4.2},
	{type: "bitmap", x: 700, y: 100, bitmap: "guinap", scale: 4.2}
    ],

    elements: {
		"infernosScale": {type: "scale", x: 500, y: 100, direction: 1, bitmap: "guinapinfernos", scale: 4.2},
		"napaerisScale": {type: "scale", x: 600, y: 100, direction: 1, bitmap: "guinapaeris", scale: 4.2},
		"terrosScale": {type: "scale", x: 700, y: 100, direction: 1, bitmap: "guinapterros", scale: 4.2},
		"slotResult1": {type: "slot", x: 530, y: 245, visual: true},
		"slotResult2": {type: "slot", x: 630, y: 245, visual: true},
		"slotResult3": {type: "slot", x: 730, y: 245, visual: true},
		"slotBottles1": {type: "slot", x: 530, y: 35},
		"slotBottles2": {type: "slot", x: 630, y: 35},
		"slotBottles3": {type: "slot", x: 730, y: 35},
		"slotSource": {type: "slot", x: 630, y: 351}
    }
});

TileEntity.registerPrototype(BlockID.CookingRack, {
	defaultValues: {
		progress: 0,
		progressMax: 430
	},
	
	getGuiScreen: function () {
        return guiRack;
    },
	
	init:function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+.70, this.z+.30);
		this.animation2 = new Animation.Item(this.x+.5, this.y+.70, this.z+.60);
	},

	tick:  function (){
		
	if((World.getBlock(this.x, this.y+1, this.z).id === BlockID.windmillNapo)){
			this.data.progressMax = 215;
		} else {
			this.data.progressMax = 430;
		}
		
		 var slotResult2 = this.container.getSlot("slotResult2");
		 var slotResult3 = this.container.getSlot("slotResult3");
         var slotResult1 = this.container.getSlot("slotResult1");
		  var slotBottles1 = this.container.getSlot("slotBottles1");
		 var slotBottles2 = this.container.getSlot("slotBottles2");
         var slotBottles3 = this.container.getSlot("slotBottles3");
	      var slotSource = this.container.getSlot("slotSource");
		  var slotSource1 = this.container.getSlot("slotSource1");
		  
		  if(World.getWorldTime()%2==0){
			if(slotBottles1.id > 0){
				this.animation1.describeItem({
			id: slotBottles1.id,
			count: 1,
			data: slotBottles1.data,
			size: 0.7,
			rotation: "x"
		});
		this.animation1.load();
			}else {
				this.animation1.destroy();
			}
		}
		
		if(World.getWorldTime()%2==0){
			if(slotBottles2.id > 0){
				this.animation2.describeItem({
			id: slotBottles2.id,
			count: 1,
			data: slotBottles2.data,
			size: 0.7,
			rotation: "x"
		});
		this.animation2.load();
			}else {
				this.animation2.destroy();
			}
		}
		  
		if (slotBottles1.id == ItemID.BottleEmpty && slotResult1.id == ItemID.infernos){
		slotResult1.count--;
		slotBottles1.count--;
		slotBottles1.id = ItemID.BottleSbinfernosFull;
		slotBottles1.count += 1;
		this.container.validateAll();
		}
		
		if (slotBottles2.id == ItemID.BottleEmpty && slotResult2.id == ItemID.aeris){
		slotResult2.count--;
		slotBottles2.count--;
		slotBottles2.id = ItemID.BottleSbaerisFull;
		slotBottles2.count += 1;
		this.container.validateAll();
		}
		
		if (slotBottles3.id == ItemID.BottleEmpty && slotResult3.id == ItemID.terros){
		slotResult3.count--;
		slotBottles3.count--;
		slotBottles3.id = ItemID.BottleSbterrosFull;
		slotBottles3.count += 1;
		this.container.validateAll();
		}
	
	this.container.setScale("infernosScale", this.data.progress / this.data.progressMax);
     this.container.setScale("napaerisScale", this.data.progress / this.data.progressMax);
	 this.container.setScale("terrosScale", this.data.progress / this.data.progressMax);

  var slotResult2 = this.container.getSlot("slotResult2");
		 var slotResult3 = this.container.getSlot("slotResult3");
         var slotResult1 = this.container.getSlot("slotResult1");
	      var slotSource = this.container.getSlot("slotSource");
		  var slotSource1 = this.container.getSlot("slotSource1");	
	
	 var output = RecipeRegistry.getRackRecipe(slotSource.id, slotSource.data);
	 if (output){
	this.data.progress++;
if (this.data.progress >= this.data.progressMax){	
this.data.progress = 0;
 slotSource.count--;
 
 if (slotResult1 && (!slotResult1.chance || Math.random() < slotResult1.chance)) {
	 slotResult1.id = output.result1.id;
	 slotResult1.count += output.result1.count;
	slotResult1.chance = output.result1.chance;
 }
	
if (slotResult2 && (!slotResult2.chance || Math.random() < slotResult2.chance)) {
	 slotResult2.id = output.result2.id;
	 slotResult2.count += output.result2.count;
	 slotResult2.chance = output.result2.chance;
	 }

if (slotResult3 && (!slotResult3.chance || Math.random() < slotResult3.chance)) {
	  slotResult3.id = output.result3.id;
	  slotResult3.count += output.result3.count;
	 slotResult3.chance = output.result3.chance;
	 }else if (slotSource.id == 0){
			this.data.progress = 0;
	 }
  }
}

	this.container.validateAll();

}
});

