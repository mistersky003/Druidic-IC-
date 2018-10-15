if(__config__.access("Druidology language(RU - EN)") == false){

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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Предметы", size: 25, link: "items"},
                        {text: "Блоки", size: 25, link: "blocks"},
                        {text: "Кольца и амулеты", size: 25, link: "rings and amulets"},
                        {text: "Броня", size: 25, link: "armor"},
                        {text: "Оружие  и инструменты", size: 25, link: "weapons_and_instruments"},
                        {text: "Ритуалы", size: 25, link: "rituals"},
                        {text: "Другое", size: 25, link: "other"},
                        
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Руны", size: 25, link: "rune"},
                        {text: "Баночки с эссенциями", size: 25, link: "bottles with essence"},
                        {text: "Драгоценные камни", size: 25, link: "gems"},
                        {text: "Металлы", size: 25, link: "metals"},
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
 {text: "Руны нужны для создания эссенций. Виды рун: руна океана, ада, пустыни, болота.Для создания эссенций положите руну в наполнитель.Руна океана падает со спрута или лазуритовой руды, ада - с мобов ада или адского камня, пустыни - с кадавров или песчаника и руна болота из ведьм и слизней или железной руды", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runaboli}
                    ],
                    elements: [
                    {text: "Руна боли", size: 20},
                        {text: "Руна боли нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - серебряный слиток", size: 18}
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
                    {text: "Руна страха", size: 20},
                        {text: "Руна страха нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - слиток кобольта", size: 18}
                    ]
                },
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runestranght}
                    ],
                    elements: [
                    {text: "Руна силы", size: 20},
                        {text: "Руна силы нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - адамантитовый слиток", size: 18}
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
                    {text: "Руна Тора", size: 20},
                        {text: "Руна Тора - руна созданая самим богом Тором для создания более мощных артефактов.", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна тора, верхний левий слот - слиток труадамантита, верхний правий лот - слиток труадамантита, нижний слот - слиток труадамантита", size: 18}
                    ]
                },
                
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeOdin}
                    ],
                    elements: [
                    {text: "Руна Одина", size: 20},
                        {text: "Руна Одина как и руна Тора создана для создания более мощных артефактов, но создана не Тором, а его отцом Одином.", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - адамантитовый слиток", size: 18}
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
                        {text: "Пустая банка в основном нужна для сохранения и использования ессенции", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
 {text: "Баночки с эссенцией", size: 20},
 {text: "Эссенцию можно налить в баночки с помощью наполнителя (баночку в верхние слоты). Выпив эссенцию вы получите эффекты:Инфернос - огнестойкость, аэрис - скорость и прыгучесть, террос - защита.Чем меньше в баночке ессенции, тем больше у вас уровень эффектов.", size: 18}
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
                        {text: "Рубин - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка инфернос, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphire}
                    ],
                    elements: [
                        {text: "Сапфир - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка аэрис, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
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
                        {text: "Нефрит - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка террос, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
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
                        {text: "Адамантитовый слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка инфернос, правый и левый вторие слота - слиток железа, нижний слот рубин.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовий слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка аэрис, правый и левый вторие слота - слиток железа, нижний слот сапфир.", size: 18}
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
                        {text: "Серебряный слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка террос, правый и левый вторие слота - слиток железа, нижний слот нефрит.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAmethist}
                    ],
                    elements: [
                        {text: "Аметистовый слиток - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: верхний слот - кобольтовий слиток, правый первый слот - серебряный слиток, левый первый слот - адамантиевий слиток.", size: 18}
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
                        {text: "Труадамантитовым слитком - сильный металл добавляемий модификациею.Из нее крафтяться крепкая броня и острые оружие.Рецепт: верхний середний слот - слиток адамантита, первий правий и левий слота - слиток адамантита, средний левый и правий слота - серебряный слиток, нижний левый и правий слота - аметистовый слиток, нижний середний слот - аметистовый слиток", size: 18}
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
                        {text: "Стекло душ", size: 20},
                        {text: "С стекла душ можно скрафтить бутылки для хранения эссенции", size: 18}
                    ]
                },
 
right: {
 controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Рецепт в печке",
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
                        {text: "Алтар рун", size: 20},
                        {text: "Именно в алтаре рун крафтяться камни, слитки, руны, броня, инструменти и оружие.Рецепты предметов в алтаре можно посмотреть в их описании.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Наполнитель", size: 20},
                        {text: "Наполнитель служит для разложения рун на элементы и наполнение их в банки.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Блоки драгоценных камней камней и слитков металлов", size: 20},
                        {text: "Они служат лишь для удобного хранения слитки металлов и драгоценных каминь.Так же могут быть декором.Скрафтиты их можно в обычном верстаке с их же предметов", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.windmillNapo}
                    ],
                    elements: [
                        {text: "Ветрогенератор", size: 20},
                        {text: "Ветрогенератор - блок который ускоряет в 2 раза разложения рун в наполнители.Для цьго нужно поставинты его сверху наполнителя.", size: 18}
                    ]
                }
},

"blocks_4": {
                preLink: "blocks_3",
                nextLink: "default",
                left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Кольца", size: 25, link: "rings"},
                        {text: "Амулети", size: 25, link: "amulets"}
                    ]
                }
            },
            
      
  "rings": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Кольца", size: 30},
                        {text: "Кольца можно получити с помощью ритуала колец(подробнее читайте в разделе ритуалы).Все кольца содержат определенное количество ессенции, которая нужна для использования магических инструментив.Если тапнуть кольцом по блоку, то можно увидеть количество ессенции в этом кольце.Кольца можно зарядить только на тем самым ритуале (подробнее читайте в разделе ритуалы).", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.rubuRing}
                    ],
                    elements: [
                        {text: "Рубиновое кольцо", size: 20},
                        {text: "Рубиновое кольцо - хранит в себе ессенцию инфернос в количестве 20000.Для его крафта нужно положить на контроллер ритуала рубин, а на крайние алтаре слиток золота.", size: 18}
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
                        {text: "Сапфировое кольцо", size: 20},
                        {text: "Сапфировое кольцо - хранит в себе ессенцию аерис в количестве 20000.Для его крафта нужно положить на контроллер ритуала сапфир, а на крайние алтаре слиток золота.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephriteRing}
                    ],
                    elements: [
                        {text: "Нефритовое кольцо", size: 20},
                        {text: "Нефритовое кольцо - хранит в себе ессенцию террос в количестве 20000.Для его крафта нужно положить на контроллер ритуала нефрит, а на крайние алтаре слиток золота.", size: 18}
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
                        {text: "Полноцветное кольцо", size: 20},
                        {text: "Полноцветное кольцо - сохраняет в себе все три ессенции по 20000 Его можно получити на обычном верстаке", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Железное кольцо", size: 20},
                        {text: "Из него можно в обычном алтаре аналогично железной броне можно скрафтиты кольчужную броню Для его крафта нужно положить на контроллер и боковые алтари железный слиток.", size: 18}
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Ритуальный алтарь", size: 25, link: "Ritual_creation_of_rings"},
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
                        {text: "Ритуальный алтарь", size: 20},
                        {text: "Ритуальный алтарь нужен для ритуала создания и подзарядки колец.Его нужно разместить во всех 4 сторонах от контроллера алтаря с отступом в 1 блок.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Ритуал создания колец", size: 20},
                        {text: "Для создания колец надо положить на ритуальные алтари по золотому слитку и в контроллера алтаря положить рубин, нефрит или сапфир.", size: 18},
                        {text: "Ритуал зарядки колец", size: 20},
                        {text: "Для зарядки колец надо положить на контроллер кольцо которое булем заряжать и вокруг положить руны. Для пополнения разных эссенций разные руны", size: 18},
                    ]
                },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltarController}
                    ],
                    elements: [
                        {text: "Контроллера алтаря", size: 20},
                        {text: "Должен находиться по середине ритуальных алтарей.", size: 18},
                    ]
                },
            },
			
			"Ritual_creation_of_rings_2": {
                preLink: "Ritual_creation_of_rings_1",
                nextLink: "rituals",
				
                              left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Адамантитовая броня", size: 25, link: "Adamantite_armor"},
                        {text: "Серебряная броня", size: 25, link: "Silver_armor"},
                        {text: "Кобольтовая броня", size: 25, link: "Cobolt_armor"},
                        {text: "Аметистовая броня", size: 25, link: "Amethist_armor"},
                        {text: "Труадамантитовая броня", size: 25, link: "Troadamantite_armor"},
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
                        {text: "Адамантитовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 165;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адский камень, правый и левый верхние слоты - стекло, все остальные слоты - слиток адамантита", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 240;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - адский камень, все остальные слоты - слиток адамантита", size: 18}
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
                        {text: "Адамантитовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 225;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пустой, правый и левый верхние слоты - адский камень, все остальные слоты - слиток адамантита", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 195;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - слиток адамантита, правый и левый верхние слоты - слиток адамантита", size: 18}
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
                        {text: "Серебряный шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 121;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - древесина, правый и левый верхние слоты - стекло, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateSilver}
                    ],
                    elements: [
                        {text: "Серебряный нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 176;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - нефрит, правый и левый верхние слоты - древесина, все остальные слоты - серебряный слиток", size: 18}
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
                        {text: "Серебряные поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 165;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пустой, правый и левый верхние слоты - адский камень, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsSilver}
                    ],
                    elements: [
                        {text: "Адамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 143;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток", size: 18}
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
                        {text: "Кобольтовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 132;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - снег, правый и левый верхние слоты - стекло, все остальные слоты - слиток кобольта", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 192;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - сапфир, правый и левый верхние слоты - снег, все остальные слоты - слиток кобольта", size: 18}
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
                        {text: "Кобольтовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 180;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - адский камень, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 156;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - слиток кобольта, правый и левый верхние слоты - слиток кобольта", size: 18}
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
                        {text: "Аметистовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 209;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - золотой слиток, правый и левый верхние слоты - стекло, все остальные слоты - аметистовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 304;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - слиток золота, все остальные слоты - аметистовый слиток", size: 18}
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
                        {text: "Аметистовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 285;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - золотой слиток, все остальные слоты - аметистовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 247;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток", size: 18}
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
                        {text: "Труадамантитовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 187;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - золотой слиток, правый и левый верхние слоты - стекло, все остальные слоты - труадамантитовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 10;", size: 18},
                        {text: "-прочность 272;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - слиток золота, все остальные слоты - труадамантитовый слиток", size: 18}
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
                        {text: "Труадамантитовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 255;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - золотой слиток, все остальные слоты - труадамантитовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 221;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток", size: 18}
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Адамантитовые оружие и инструменты", size: 25, link: "Adamantite_weapons_and_instruments"},
                        {text: "Серебряные оружие и инструменты", size: 25, link: "Silver_weapons_and_instruments"},
                        {text: "Кобольтовые оружие и инструменты", size: 25, link: "Cobolt_weapons_and_instruments"},
                        {text: "Аметистовые оружие и инструменты", size: 25, link: "Amethist_weapons_and_instruments"},
                        {text: "Труадамантитовые оружие и инструменты", size: 25, link: "Troadamantite_weapons_and_instruments"},
                        {text: "Магическое оружие", size: 25, link: "Magic_weapons"},
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
                        {text: "Мъёльнир, молот Тора - магическое оружие неизвестной силы, которое может призывать молнию.Для етого нужно присесть и тапнуть по любому блоку.Для призыва молнии нужно одеть Полноцветное кольцо в кладку мода Baubles.На 1 призыв молнии тратится по 2000 ессенции каждого элемента кольца.", size: 18}	
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Крафт в алтаре рун: верхний слот - Труадамантитовый топор, правый и левый верхние слоты - Бутылка Инфернос, правый и левый средние слоты Труадамантитовый блок, левый нижний слот - Бутылка АЭРИС, правый нижний слот - руна тора, нижний слот - Труадамантитовый меч", size: 18}
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
                        {text: "Гунгнир - магический копье с древней мифологии.Наносить очень большой урон.Крафт в алтаре рун: верхний слот - руна Одина, правый и левый верхние слоты - Труадамантитовый меч, правый и левый средние слоты Труадамантитовый блок, левый и правый нижние слоты - Бутылка Инфернос, нижний слот - Бутылка Аэрис", size: 18}
                    ]
                },
		   
		   
		   right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.megicBelt}
                    ],
                    elements: [
                        {text: "Мегингъёрд", size: 20},
                        {text: "При одевании в вкладку с мода Baubles дает эффект силы 5 уровня.Крафт: верхний слот - зелье силы, правый и левый верхние слоты - Труадамантитовый слиток, правый и левый средние слоты - Труадамантитовый слиток, нижний слот - руна Страха", size: 18}
						
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
                        {text: "Адамантитовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 10;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - адамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адамантитовый слиток, правый и левый верхние слоты - адамантитовый слиток,правый и левый средние слоты - палки", size: 18}
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
                        {text: "Адамантитовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адамантитовый слиток, правый и левый верхние слоты - адамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - адамантитовый слиток, - палки, нижний слот - адамантитовый слиток", size: 18}
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
                        {text: "Серебряный меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 10;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - серебряный слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeSilver}
                    ],
                    elements: [
                        {text: "Cеребряная кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток,правый и левый средние слоты - палки", size: 18}
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
                        {text: "Cеребряная лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeSilver}
                    ],
                    elements: [
                        {text: "Серебряный топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - серебряный слиток, - палки, нижний слот - серебряный слиток", size: 18}
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
                        {text: "Кобольтовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - кобольтовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - кобольтовый слиток, правый и левый верхние слоты - кобольтовый слиток,правый и левый средние слоты - палки", size: 18}
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
                        {text: "Кобольтовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - кобольтовый слиток, правый и левый верхние слоты - кобольтовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - кобольтовый слиток, - палки, нижний слот - кобольтовый слиток", size: 18}
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
                        {text: "Аметистовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 15;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - аметистовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAmethyst}
                    ],
                    elements: [
                        {text: "Аметист кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток,правый и левый средние слоты - палки", size: 18}
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
                        {text: "Аметист лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - аметистовый слиток, - палки, нижний слот - аметистовый слиток", size: 18}
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
                        {text: "Труадамантитовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - труадамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток,правый и левый средние слоты - палки", size: 18}
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
                        {text: "Труадамантитовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - труадамантитовый слиток, - палки, нижний слот - труадамантитовый слиток", size: 18}
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
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Крылья", size: 25, link: "wings"},
                        {text: "Рюкзак", size: 25, link: "backpack"},  
                        {text: "Druidic Структура", size: 25, link: "druidic_strukture"},  
                        {text: "Фичи Druidic Craft", size: 25, link: "features"}  
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
                        {text: "Друидик структура", size: 20},
                        {text: "Друидик структура - это мультиблочна структура, генруеться в различных биомов кроме пустини.В центре структуры если сломать полублок можно увидеть сундук в которой можно найти некоторые предметы:", size: 18},
                        {text: "-алмаз (шанс: 20%, макс. количество: 2)", size: 18},
                        {text: "-золото (шанс: 30%, макс. количество: 4)", size: 18},
                        {text: "-железный слиток (шанс: 90%, макс. количество: 6)", size: 18},
                        {text: "-рубин (шанс: 20%, макс. количество: 2)", size: 18},
                        {text: "-сапфир (шанс: 30%, макс. количество: 2)", size: 18},
                        {text: "-нефрит (шанс: 30%, макс. количество: 2)", size: 18}
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "-руна болота (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна океана (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна ада (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна пустыны (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "Внимание !!! Если вы разработчик, то вы можете использовать ДруидицAPI и добавлять свои предмети.ДруидицAPI описано в документации которую можно найти в официальной группе мода - https://vk.com/druidic_craft", size: 20, color: android.graphics.Color.RED}
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
                        {text: "Перо феникса", size: 20},
                        {text: "Перо феникса нужно для крафта крыльев.", size: 18},
                        {text: "Крафт: левый верхний слот - перо курицы, правый верхний слот - бутылка Инфернос.", size: 18},
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.Wings}
                    ],
                    elements: [
                        {text: "Крылья", size: 20},
                        {text: "Крылья дают возможность летать.", size: 18},
                        {text: "Чтобы взлететь нужно одеть крылья на вкладку Baubles в слот body и сапфировое кольцо в вкладку Baubles слот для колец.Пры полете тратится ессенсия аерис в количестве 1 в тик.", size: 18},
                        {text: "Крафт: верхний слот - перо феникса, левый верхний слот - слиток аметсиста, правый верхний слот - слиток кобольта, нижний слот - перо феникса.", size: 18}
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
                        {text: "Друидик рюкзак", size: 20},
                        {text: "Рюкзак для сохранения ресурсов.Имеет 55 слотов.Получиты можно в обычном верстаке", size: 18},
						]
			 },
			 
			               right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
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
                        {text: "Фичи:", size: 19},
                        {text: "-автоматическая замена сломанных инструментов (если таковые имеются в инвентарь) и Опустевший стаков предметов;", size: 18},
                        {text: "-если присесть и тапнуть ванильным инструментом, или инструментом мода покажется прочность инструмента;", size: 18},
						{text: "", size: 18},
                        {text: "Внимание: все фичи создан для полешення прохождения игры, но они не были до конца проверенные и могут работать некоректно.Поэтому их можно с легкостью выключить в конфиге.", size: 18, color: android.graphics.Color.RED},
						]
			 },             
}
}   
});
});

}