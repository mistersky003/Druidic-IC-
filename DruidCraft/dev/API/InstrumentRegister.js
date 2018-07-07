ToolAPI.addToolMaterial("adamantite", {durability: 780, level: 5, efficiency: 12, damage: 10, enchantability: 20});
ToolAPI.addToolMaterial("amethyst", {durability: 1001, level: 4, efficiency: 14, damage: 15, enchantability: 20});
ToolAPI.addToolMaterial("cobolt", {durability: 800, level: 4, efficiency: 11, damage: 11, enchantability: 20});
ToolAPI.addToolMaterial("silver", {durability: 750, level: 4, efficiency: 11, damage: 10, enchantability: 20});
ToolAPI.addToolMaterial("troadamantite", {durability: 3000, level: 6, efficiency: 18, damage: 18, enchantability: 20});

var MaterialRegistry = {

    defineMaterial: function (vanilla, name, armor, durabilityModifier, blockTexture) {

        if (!vanilla) {

            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("pickaxe" + name);
            Item.createItem("pickaxe" + name, name + " pickaxe", {
                name: "pickaxe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("shovel" + name);
            Item.createItem("shovel" + name, name + " shovel", {
                name: "shovel_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("sword" + name);
            Item.createItem("sword" + name, name + " sword", {
                name: "sword_" + name.toLowerCase(), meta: 0}, {stack: 1});
				
            IDRegistry.genItemID("helmet" + name);
            Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                type: "helmet",
                armor: armor[0],
                durability: durabilityModifier * 11,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("chestplate" + name);
            Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                type: "chestplate",
                armor: armor[1],
                durability: durabilityModifier * 16,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("leggings" + name);
            Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                type: "leggings",
                armor: armor[2],
                durability: durabilityModifier * 15,
                texture: "armor/"+name.toLowerCase() + "_2.png"
            });

            IDRegistry.genItemID("boots" + name);
            Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                type: "boots",
                armor: armor[3],
                durability: durabilityModifier * 13,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });
            
            ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
            ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
            ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
            ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
			
			ItemInfo.regiserInfo(ItemID["axe" + name]);
			ItemInfo.regiserInfo(ItemID["pickaxe" + name]);
			ItemInfo.regiserInfo(ItemID["shovel" + name]);
			ItemInfo.regiserInfo(ItemID["sword" + name]);
			
			if(__config__.access("Show durability") == true){
				
			var vanilaItem = [269, 270, 271, 273, 274, 275, 277, 278, 279, 284, 285, 286, 256, 257, 258];
			
			var magicItem = [ItemID.molotTor, ItemID.gungnir];
			
			for (var i=0; i<=magicItem.length; i++){
				ItemInfo.regiserInfo(magicItem[i]);
			}
			
			for (var i=0; i<=vanilaItem.length; i++){
			ItemInfo.regiserInfo(vanilaItem[i]);
			     }
			}
	
        }


    }

};

MaterialRegistry.defineMaterial(false, "Adamantite", [6, 8, 6, 6], 15, "adamentiteblock");
MaterialRegistry.defineMaterial(false, "Amethyst", [7, 8, 8, 7], 19, "amethystblock");
MaterialRegistry.defineMaterial(false, "Cobolt", [6, 7, 6, 6], 12, "coboltblock");
MaterialRegistry.defineMaterial(false, "Silver", [6, 7, 6, 6], 11, "silverblock");
MaterialRegistry.defineMaterial(false, "Troadamantite", [8, 10, 8, 8], 17, "silverblock");

