if(__config__.access("Druidology language(RU - EN)") == true){

IDRegistry.genItemID("druidology"); 
Item.createItem("druidology", "Druidology", {name: "druidology", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeswamp, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeocean, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runehell, 0]);
    
        Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runedesert, 0]);
    
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
        
GuideAPI.registerGuide("druidology", { 
item: ItemID.druidology, 
debug: false, 
textures: { 
background: "druidogui", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 

                
pages: {
 
            "default": {
                nextLink: "test",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Items", size: 25, link: "items"},
                        {text: "Blocks", size: 25, link: "blocks"},
                        {text: "Rings and amulets", size: 25, link: "rings and amulets"},
                        {text: "Armor", size: 25, link: "armor"},
                        {text: "Weapons and tools", size: 25, link: "weapons_and_instruments"},
                        {text: "Rituals", size: 25, link: "rituals"},
                        {text: "Other", size: 25, link: "other"},
                        
                    ]
                }
            },
            
            "items": {
                preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rune", size: 25, link: "rune"},
                        {text: "Essences jars", size: 25, link: "bottles with essence"},
                        {text: "Gems", size: 25, link: "gems"},
                        {text: "Metals", size: 25, link: "metals"},
                    ]
                }
            },
            
//Rune

    "rune": {
                preLink: "items",
                nextLink: "rune_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.runeswamp, data: 0, clicker: {onClick: function(){alert("Rune swamp");}}},
     {id: ItemID.runeocean, data: 0, clicker: {onClick: function(){alert("Rune ocean");}}},
     {id: ItemID.runehell, data: 0, clicker: {onClick: function(){alert("Rune Hell");}}},
     {id: ItemID.runedesert, data: 0, clicker: {onClick: function(){alert("Rune desert");}}},

 ],
 elements: [
 {text: "Runes are needed to create essences. Types of runes: the rune of the ocean, hell, desert, swamp. To create essences, put the rune into the filler. slugs or iron ore", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runaboli}
                    ],
                    elements: [
                    {text: "Rune of pain", size: 20},
                        {text: "The rune of pain is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the hell rune, the bottom slot is the silver bar", size: 18}
                    ]
                },
    },
            
         
               "rune_1": {
                preLink: "rune",
                nextLink: "rune_2",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runastraha}
                    ],
                    elements: [
                    {text: "Rune of fear", size: 20},
                        {text: "The rune of fear is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot - the hell rune, the bottom slot - kobolt bar", size: 18}
                    ]
                },
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runestranght}
                    ],
                    elements: [
                    {text: "Rune stranght", size: 20},
                        {text: "The rune stranght is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of hell, the bottom slot is an adamantite ingot", size: 18}
                    ]
                },
    },
    
            
                    "rune_2": {
                preLink: "rune_1",
                nextLink: "items",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeThor}
                    ],
                    elements: [
                    {text: "Rune Thor", size: 20},
                        {text: "Rune Thor - rune created by the god Thor himself to create more powerful artifacts.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of the torus, the top left slot is the truadamantite ingot, the upper right lot is the truadamantite ingot, the lower slot is the truadamantite ingot", size: 18}
                    ]
                },
                
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeOdin}
                    ],
                    elements: [
                    {text: "Runa Odin", size: 20},
                        {text: "The rune of Odin, like the rune of Thor, was created to create more powerful artifacts, but was created not by Thor, but by his father Odin.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of hell, the bottom slot is an adamantite ingot", size: 18}
                    ]
                },
    },       
            
    "bottles with essence": {
                preLink: "items",
                nextLink: "bottles with essence_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.BottleEmpty}
                    ],
                    elements: [
                        {text: "An empty jar is mainly needed to save and use the essences.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["b", "", "b"],
 ["", "b", ""],
 ["", "", ""]
 ],
 materials: {
 "b": {id: BlockID.souldsGlass, data: 0}
 },
 result: {id: ItemID.BottleEmpty, count: 2}
 }
 ],
 elements: [
 ],
 }
},
 
 "bottles with essence_1": {
                preLink: "bottles with essence",
                nextLink: "items",
                left: {
 controller: PageControllers.ITEM_GRID_PAGE,
 columns: 3,
 item_size: 73,
 items: [
  {id: ItemID.BottleSbaerisFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbaeris");}}},
     {id: ItemID.BottleSbterrosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbterros");}}},
     {id: ItemID.BottleSbinfernosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbinfernos");}}},
 ],
 elements: [
 {text: "Jars with essence", size: 20},
 {text: "The essence can be poured into jars with a filler (jar in the upper slots). After drinking the essence, you will get the effects: Infernos - fire resistance, aeris - speed and jumping ability, terros - protection. The smaller the essence in a jar, the more effects you have.", size: 18}
 ]
                }
 },
 
 "gems": {
                preLink: "items",
                nextLink: "gems_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ruby}
                    ],
                    elements: [
                        {text: "Ruby is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - jar infernos, right and left secondary slot - gold ingot, lower diamond slot.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphire}
                    ],
                    elements: [
                        {text: "Sapphire is a precious stone needed in the craft of armor and tools. It can only be obtained in the rune altar.", size: 18}
                    ]
                }
      },
      
"gems_1": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephrite}
                    ],
                    elements: [
                        {text: "Nephrite is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. The recipe: the left and right first slots are a jar of terros, the right and left secondary slots are gold ingots, the bottom slot is a diamond.", size: 18}
                    ]
                },
      },
      
    
    "metals": {
                preLink: "items",
                nextLink: "metals_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - jar infernos, right and left second slot - iron ingot, lower slot ruby.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotCobolt}
                    ],
                    elements: [
                        {text: "Koboltovy ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - aeris jar, right and left second slot - iron ingot, lower sapphire slot.", size: 18}
                    ]
                }
      },
      
      
      "metals_1": {
                preLink: "items",
                nextLink: "metals_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotSilver}
                    ],
                    elements: [
                        {text: "Silver ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAmethist}
                    ],
                    elements: [
                        {text: "Amethyst ingot is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. Recipe: the top slot is a koboltian ingot, the right first slot is a silver ingot, the left first slot is an adamantium ingot.", size: 18}
                    ]
                }
      },
      
      "metals_2": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotTroadamantite}
                    ],
                    elements: [
                        {text: "A truamamantite ingot is a strong metal to be added to the modification. Strong armor and sharp weapons are crafted from it. amethyst ingot, lower middle slot - amethyst ingot", size: 18}
                    ]
                }
      },
      
    

    "blocks": {
                preLink: "default",
                nextLink: "blocks_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.souldsGlass}
                    ],
                    elements: [
                        {text: "Glass shower", size: 20},
                        {text: "With a glass shower you can craft bottles to store essences.", size: 18}
                    ]
                },
 
right: {
 controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Furnace recipe",
 type: 0,
 bar_texture: "furnace_bar_guide",
 recipes: [
 {
 input: {
 id: 88,
 data: 0
 },

 output: {
 id: BlockID.souldsGlass,
 data: 0,
 count: 1
 }
 }
 ],
 elements: [] 
        }
 },
 
 "blocks_1": {
                preLink: "blocks",
                nextLink: "blocks_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.altar}
                    ],
                    elements: [
                        {text: "Altar rune", size: 20},
                        {text: "It is in the altar of runes that stones, ingots, runes, armor, tools and weapons can be crafted. Recipes of objects in the altar can be found in their description.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "c", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.altar, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_2": {
                preLink: "blocks_1",
                nextLink: "blocks_3",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.CookingRack}
                    ],
                    elements: [
                        {text: "Cooking Rack", size: 20},
                        {text: "Cooking Rack serves to decompose runes into elements and fill them into jars.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "b", "a"],
 ["", "a", ""],
 ["c", "d", "c"]
 ],
 materials: {
 "a": {id: ItemID.BottleEmpty, data: 0},
 "b": {id: 280, data: 0},
 "d": {id: 379, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.CookingRack, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_3": {
                preLink: "blocks_2",
                nextLink: "blocks_4",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.adamentiteBlock},
                        {id: BlockID.amethystBlock},
                        {id: BlockID.coboltBlock},
                        {id: BlockID.nephriteBlock},
                        {id: BlockID.saphireBlock},
                        {id: BlockID.rubyBlock},
                        {id: BlockID.silverBlock},
                        {id: BlockID.trueadamantiteBlock},
                    ],
                    elements: [
                        {text: "Gemstone blocks of stones and metal bars", size: 20},
                        {text: "They serve only for convenient storage of ingots of metals and precious fires. They can also be decorated. They can be scrapped in the usual workbench from their own objects.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.windmillNapo}
                    ],
                    elements: [
                        {text: "Wind generator", size: 20},
                        {text: "A wind generator is a block that speeds up 2 times the decomposition of runes into fillers.", size: 18}
                    ]
                }
},

"blocks_4": {
                preLink: "blocks_3",
                nextLink: "default",
                left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["c", "a", "c"],
 ["a", "b", "a"],
 ["c", "a", "c"]
 ],
 materials: {
 "a": {id: 265, data: 0},
 "b": {id: 152, data: 0},
 "c": {id: 4, data: 0}
 },
 result: {id: BlockID.windmillNapo, count: 1}
 }
 ],
 elements: [
 ],
}
},

"rings and amulets": {
                preLink: "default",
                nextLink: "rings",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rings", size: 25, link: "rings"},
                        {text: "Amulets", size: 25, link: "amulets"}
                    ]
                }
            },
            
      
  "rings": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rings", size: 30},
                        {text: "Rings can be obtained using the ritual of the rings (read more in the rituals section). All the rings contain a certain amount of essences that are needed to use magical tools. most ritual (read more in the section rituals).", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.rubuRing}
                    ],
                    elements: [
                        {text: "Ruby ring", size: 20},
                        {text: "A ruby ring - contains in itself an essentia of infernos in the amount of 20,000. For its craft, you need to put a ruby on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
            },
            
            "rings_1": {
                preLink: "rings",
                nextLink: "rings_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphireRing}
                    ],
                    elements: [
                        {text: "Sapphire ring", size: 20},
                        {text: "The sapphire ring - stores in itself the sense of aeris in the amount of 20000. For its craft, you need to put sapphire on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephriteRing}
                    ],
                    elements: [
                        {text: "Nephrite ring", size: 20},
                        {text: "Nephrite ring - stores in itself the esense of terros in the amount of 20,000. For its craft, you need to put nephrite on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
            },
            
            "rings_2": {
                preLink: "rings_1",
                nextLink: "rings_3",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fullcolorRing}
                    ],
                    elements: [
                        {text: "Full color ring", size: 20},
                        {text: "Full-color ring - saves in itself all three essences of 20,000. It can be received on an ordinary workbench.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["a", "b", "c"],
 [" ", " ", " "]
 ],
 materials: {
 "a": {id: ItemID.rubuRing, data: 0},
 "b": {id: ItemID.saphireRing, data: 0},
 "c": {id: ItemID.nephriteRing, data: 0}
 },
 result: {id: ItemID.fullcolorRing, count: 1}
 }
 ],
 elements: [
 ],
}
     },
     
     "rings_3": {
                preLink: "rings_2",
                nextLink: "rings_4",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironRing}
                    ],
                    elements: [
                        {text: "Iron ring", size: 20},
                        {text: "From it you can in the usual altar, like iron armor, you can use scraft armor to armor. To craft it, you need to put an iron ingot on the controller and side altars.", size: 18}
                    ]
                },
          }, 
		  
		  
		  "rituals": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Ritual altar", size: 25, link: "Ritual_creation_of_rings"},
                    ]
                }
            },
			
			"Ritual_creation_of_rings": {
                preLink: "rituals",
                nextLink: "Ritual_creation_of_rings_1",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltar}
                    ],
                    elements: [
                        {text: "Ritual altar", size: 20},
                        {text: "The ritual altar is needed for the ritual of creating and recharging rings. It should be placed on all 4 sides of the altar controller with an indentation of 1 block.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltar, count: 1}
 }
 ],
 elements: [
 ],
}
            },
			
			"Ritual_creation_of_rings_1": {
                preLink: "Ritual_creation_of_rings",
                nextLink: "Ritual_creation_of_rings_2",
				
              left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Ritual of creating rings", size: 20},
                        {text: "To create rings, one should put on ritual altars on a gold ingot and put a ruby, jade or sapphire in the altar controller.", size: 18},
                        {text: "Ritual charging the rings", size: 20},
                        {text: "To charge the rings, you need to put a ring on the controller that will charge the bullet and put the runes around. To replenish different essences different runes", size: 18},
                    ]
                },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltarController}
                    ],
                    elements: [
                        {text: "Altar controller", size: 20},
                        {text: "Must be in the middle of the ritual altars.", size: 18},
                    ]
                },
            },
			
			"Ritual_creation_of_rings_2": {
                preLink: "Ritual_creation_of_rings_1",
                nextLink: "rituals",
				
                              left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["b", "a", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltarController, count: 1}
 }
 ],
 elements: [
 ],
}
            },
            
         

 "armor": {
                preLink: "default",
                nextLink: "Adamantite_armor",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Adamantite armor", size: 25, link: "Adamantite_armor"},
                        {text: "Silver armor", size: 25, link: "Silver_armor"},
                        {text: "Cobolt armor", size: 25, link: "Cobolt_armor"},
                        {text: "Amethist armor", size: 25, link: "Amethist_armor"},
                        {text: "Troadamantite armor", size: 25, link: "Troadamantite_armor"},
                    ]
                }
            },
    
    
"Adamantite_armor": {
                preLink: "armor",
                nextLink: "Adamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 165;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a hell-stone, the right and left upper slots are glass, all other slots are an adamantite ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 240;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are hell-stone, all other slots are adamantite ingot", size: 18}
                    ]
                }
},
    
                
"Adamantite_armor_1": {
               preLink: "Adamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite Leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 225;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are adamantite ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 195;", size: 18},
                        {text: "Recipe in the rune altar: top slot - adamantite ingot, right and left top slots - adamantite ingot", size: 18}
                    ]
                },
},

//
"Silver_armor": {
                preLink: "armor",
                nextLink: "Silver_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetSilver}
                    ],
                    elements: [
                        {text: "Silver helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 121;", size: 18},
                        {text: "The recipe in the rune altar: top slot - wood, right and left top slots - glass, all other slots - silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateSilver}
                    ],
                    elements: [
                        {text: "Silver chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 176;", size: 18},
                        {text: "The recipe in the rune altar: top slot - jade, right and left top slots - wood, all other slots - silver ingot", size: 18}
                    ]
                }
},
    
                
"Silver_armor_1": {
               preLink: "Silver_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsSilver}
                    ],
                    elements: [
                        {text: "Silver Leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 165;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsSilver}
                    ],
                    elements: [
                        {text: "Silver boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 143;", size: 18},
                        {text: "Recipe in the rune altar: top slot - silver bar, right and left top slots - silver bar", size: 18}
                    ]
                },
},

//
"Cobolt_armor": {
                preLink: "armor",
                nextLink: "Cobolt_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetCobolt}
                    ],
                    elements: [
                        {text: "Cobolt Helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 132;", size: 18},
                        {text: "The recipe in the rune altar: top slot - snow, right and left top slots - glass, all other slots - kobolt bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateCobolt}
                    ],
                    elements: [
                        {text: "Cobolt chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 192;", size: 18},
                        {text: "The recipe in the rune altar: top slot - sapphire, right and left top slots - snow, all other slots - kobolt bar", size: 18}
                    ]
                }
},
    
                
"Cobolt_armor_1": {
               preLink: "Cobolt_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsCobolt}
                    ],
                    elements: [
                        {text: "Cobolt leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 180;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsCobolt}
                    ],
                    elements: [
                        {text: "Cobolt boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 156;", size: 18},
                        {text: "Recipe in the rune altar: top slot - kobolt bar, right and left upper slots - kobolt bar", size: 18}
                    ]
                },
},

///
"Amethist_armor": {
                preLink: "armor",
                nextLink: "Amethist_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 209;", size: 18},
                        {text: "The recipe in the rune altar: top slot - gold bar, right and left top slots - glass, all other slots - amethyst bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 304;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are gold ingots, all other slots are amethyst ingots", size: 18}
                    ]
                }
},
    
                
"Amethist_armor_1": {
               preLink: "Amethist_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 285;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are gold ingot, all other slots are amethyst ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 247;", size: 18},
                        {text: "Recipe in the rune altar: top slot - amethyst ingot, right and left top slots - amethyst ingot", size: 18}
                    ]
                },
},

///
"Troadamantite_armor": {
                preLink: "armor",
                nextLink: "Troadamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 187;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a gold bar, the right and left top slots are glass, all other slots are a Troadamantite bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 10;", size: 18},
                        {text: "-durability 272;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are gold ingots, all other slots are Troadamantite ingots", size: 18}
                    ]
                }
},
    
                
"Troadamantite_armor_1": {
               preLink: "Troadamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 255;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are gold bar, all other slots are Troadamantite bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 221;", size: 18},
                        {text: "Recipe in the rune altar: top slot - labor-mantitic ingot, right and left top slots - Troadamantite ingot", size: 18}
                    ]
                },
},

"weapons_and_instruments": {
                preLink: "default",
                nextLink: "Adamantite_weapons_and_instruments",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Adamantite weapons and instruments", size: 25, link: "Adamantite_weapons_and_instruments"},
                        {text: "Silver weapons and instruments", size: 25, link: "Silver_weapons_and_instruments"},
                        {text: "Cobolt weapons and instruments", size: 25, link: "Cobolt_weapons_and_instruments"},
                        {text: "Amethist weapons and instruments", size: 25, link: "Amethist_weapons_and_instruments"},
                        {text: "Troadamantite weapons and instruments", size: 25, link: "Troadamantite_weapons_and_instruments"},
                        {text: "Magic weapons", size: 25, link: "Magic_weapons"},
                    ]
                }
            },
			
			
			"Magic_weapons": {
               preLink: "weapons_and_instruments",
                nextLink: "Magic_weapons_1",
           left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.molotTor}
                    ],
                    elements: [
                        {text: "Mjomnir", size: 20},
                        {text: "Mjolnir, the hammer of Thor is a magical weapon of unknown force that can invoke lightning. For this, you need to sit down and tap on any block. To call for lightning, you need to wear a full-color ring in a Baubles fashion masonry.", size: 18}	
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Kraft in the rune altar: top slot - Truadamantitovy ax, right and left upper slots - Bottle Infernos, right and left middle slots Truadamantitovy block, left bottom slot - Bottle AERIS, right lower slot - rune of the torus, bottom slot - Truadamantite sword", size: 18}
                    ]
                },
},

		"Magic_weapons_1": {
               preLink: "Magic_weapons",
                nextLink: "weapons_and_instruments",
           
		   left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.gungnir}
                    ],
                    elements: [
                        {text: "Gungnir", size: 20},
                        {text: "Gungnir - a magic spear from ancient mythology. To inflict a lot of damage. Crafts in the rune altar: top slot - Odin's rune, right and left upper slots - Truadamantite sword, right and left middle slots bottom slot - Aeris Bottle", size: 18}
                    ]
                },
		   
		   
		   right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.megicBelt}
                    ],
                    elements: [
                        {text: "Megdingjord", size: 20},
                        {text: "When dressing in a tab with the Baubles mod gives a power effect of level 5. Craft: top slot - power potion, right and left top slots - Truadamantitovy ingot, right and left middle slots - Truadamantitovy ingot, lower slot - Fear rune", size: 18}
						
                    ]
                },
},
            
///         
"Adamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Adamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 10;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - adamantite ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAdamantite}
                    ],
                    elements: [
                        {text: "pickaxe Adamantite", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: top slot - adamantite ingot, right and left upper slots - adamantite ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Adamantite_weapons_and_instruments_1": {
               preLink: "Adamantite_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - adamantite ingot, right and left upper slots - adamantite ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - adamantite ingot, - sticks, bottom slot - adamantite ingot", size: 18}
                    ]
                },
},

///

"Silver_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Silver_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordSilver}
                    ],
                    elements: [
                        {text: "Silver sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 10;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - diamond, right and left top slots - silver ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeSilver}
                    ],
                    elements: [
                        {text: "Silver pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - silver ingot, right and left upper slots - silver ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Silver_weapons_and_instruments_1": {
               preLink: "Silver_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelSilver}
                    ],
                    elements: [
                        {text: "Silver shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - silver ingot, right and left upper slots - silver ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeSilver}
                    ],
                    elements: [
                        {text: "Silver axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - silver ingot, - sticks, bottom slot - silver ingot", size: 18}
                    ]
                },
},

///

"Cobolt_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Cobolt_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordCobolt}
                    ],
                    elements: [
                        {text: "Cobolt sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - koboltovy ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeCobolt}
                    ],
                    elements: [
                        {text: "Cobolt pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: top slot - koboltovy ingot, right and left upper slots - koboltovy ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Cobolt_weapons_and_instruments_1": {
               preLink: "Cobolt_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelCobolt}
                    ],
                    elements: [
                        {text: "Cobolt shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: top slot - koboltovy ingot, right and left upper slots - koboltovy ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeCobolt}
                    ],
                    elements: [
                        {text: "Cobolt axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - stick, right and left lower slots - koboltovy ingot, - sticks, lower slot - koboltovy ingot", size: 18}
                    ]
                },
},

///

"Amethist_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Amethist_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 15;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - amethyst ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: top slot - amethyst ingot, right and left upper slots - amethyst ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Amethist_weapons_and_instruments_1": {
               preLink: "Amethist_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - amethyst ingot, right and left upper slots - amethyst ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - amethyst ingot, - sticks, bottom slot - amethyst ingot", size: 18}
                    ]
                },
},

///

"Troadamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a diamond, the right and left top slots are a truadamantite ingot, the bottom slot is a stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: top slot - labor-mantitus ingot, right and left upper slots - labor-mantitic ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Troadamantite_weapons_and_instruments_1": {
               preLink: "Troadamantite_weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - labor-mantitic ingot, right and left upper slots - labor-mantitic ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - stick, right and left lower slots - truadamantitovy ingot, - sticks, lower slot - truadamantitovy ingot", size: 18}
                    ]
                },
},


"other": {
               preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Wings", size: 25, link: "wings"},
                        {text: "Backpack", size: 25, link: "backpack"},  
                        {text: "Druidic Structure", size: 25, link: "druidic_strukture"},  
                        {text: "Features Druidic Craft", size: 25, link: "features"}  
                    ]
                }
},

"druidic_strukture": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        /*{id: ItemID.fenixFeather}*/
                    ],
                    elements: [
                        {text: "Druidic structure", size: 20},
                        {text: "Druidic structure is a multiblock structure, it is generated in different biomes besides empty leaves. In the center of the structure, if you break a half block, you can see a chest in which you can find some objects:", size: 18},
                        {text: "-diamond (chance: 20%, max count: 2)", size: 18},
                        {text: "-gold ingot (chance: 30%, max count: 4)", size: 18},
                        {text: "-iron ingot (chance: 90%, max count: 6)", size: 18},
                        {text: "-ruby (chance: 20%, max count: 2)", size: 18},
                        {text: "-sapphire (chance: 30%, max count: 2)", size: 18},
                        {text: "-nephrite (chance: 30%, max count: 2)", size: 18}
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "-rune swamp (chance: 80%, max count: 3)", size: 18},
                        {text: "-ocean rune (chance: 80%, max count: 3)", size: 18},
                        {text: "-rune of hell (chance: 80%, max count: 3)", size: 18},
                        {text: "-desert rune (chance: 80%, max count: 3)", size: 18},
                        {text: "Attention !!! If you are a developer, then you can use DruiditsAPI and add your items. DruiditsAPI is described in the documentation which can be found in the official mod group - https://vk.com/druidic_craft", size: 20, color: android.graphics.Color.RED}
						]
			 },
                 

},

"wings": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fenixFeather}
                    ],
                    elements: [
                        {text: "Phoenix Feather", size: 20},
                        {text: "The phoenix feather is needed for crafting wings.", size: 18},
                        {text: "Craft: left upper slot - chicken feather, right upper slot - bottle Infernos.", size: 18},
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.Wings}
                    ],
                    elements: [
                        {text: "Wings", size: 20},
                        {text: "Wings make it possible to fly.", size: 18},
                        {text: "To take off, you need to put wings on the Baubles tab in the body slot and the sapphire ring in the Baubles tab on the slot for the rings. Essencia aeris in the amount of 1 per teak is spent on flight.", size: 18},
                        {text: "Kraft: top slot - phoenix feather, left top slot - ametsista ingot, right upper slot - kobolt ingot, bottom slot - phoenix feather.", size: 18}
						]
			 },
                 

},

"backpack": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.DruidicBackpack}
                    ],
                    elements: [
                        {text: "Druidic backpack", size: 20},
                        {text: "Backpack for saving resources. It has 55 slots. You can get it in a usual workbench", size: 18},
						]
			 },
			 
			               right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["c", "b", "c"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 334, data: 0},
 "b": {id: ItemID.druidology, data: 0},
 "c": {id: ItemID.runeswamp, data: 0}
 },
 result: {id: ItemID.DruidicBackpack, count: 1}
 }
 ],
 elements: [
 ],
}               
},

"features": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "Features:", size: 19},
                        {text: " automatic replacement of broken tools (if any in the inventory) and empty stacks of items;", size: 18},
                        {text: "-If you sit down and tapnut with a vanilla instrument, or a mod tool will show the strength of the instrument;", size: 18},
						{text: "", size: 18},
                        {text: "Warning: all features are created for the passing game, but they have not been fully tested and may not work correctly. Therefore, they can be easily turned off in the config.", size: 18, color: android.graphics.Color.RED},
						]
			 },             
}
}   
});
});

}