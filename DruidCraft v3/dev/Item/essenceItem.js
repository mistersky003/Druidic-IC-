EssenceCompusion.registerItem("molotTor", {
    name: "Mjomnir",
    texture: "melner",
    meta: 0,
    stack: 1,
}, true);



ToolAPI.addToolMaterial("light", {durability: 6000, level: 5, efficiency: 5, damage: 50, enchantability: 30});

ToolAPI.setTool(ItemID.molotTor, "light", ToolType.sword);

EssenceCompusion.melner(ItemID.molotTor);

EssenceCompusion.registerItem("gungnir", {
    name: "Gungnir",
    texture: "gungnir",
    meta: 0,
    stack: 1,
}, true);

ToolAPI.addToolMaterial("magic", {durability: 6000, level: 5, efficiency: 5, damage: 51, enchantability: 30});

ToolAPI.setTool(ItemID.gungnir, "magic", ToolType.sword);

EssenceCompusion.registerItem("megicBelt", {
    name: "Megic belt",
    texture: "megi_belt",
    meta: 0,
    stack: 1,
}, true);

EssenceCompusion.registerItem("Wings", {
    name: "Wings",
    texture: "wings",
    meta: 0,
    stack: 1,
}, true);

