/*Name: "RingsHelper",
  Version: 0.4,
  Anchor: "Denys Dzhuhalik"
 */

 
var Infernos = 0;
var Aeris = 0;
var Terros = 0;


Saver.addSavesScope("BackpacksScope",
    function read(scope) {
        Infernos = scope.InfernosSaves || 0;
        Aeris = scope.AerisSaves || 0;
        Terros = scope.TerrosSaves || 0;
    },

    function save() {
        return {
            InfernosSaves: Infernos,
            AerisSaves: Aeris,
            TerrosSaves: Terros
        };
    }
);

var Special;
var elementType;
var Essence;

var RingsHelper = {
	
	registerRing: function (register, bool){
	let normal = bool;
		if (normal==true){
		IDRegistry.genItemID(register.id);	
        Item.createItem(register.id, register.name, {name: register.texture, meta: register.meta}, {stack: register.stack});

		}
	},
	
	
	registerInfernos: function (id, maxInfernos){
		Infernos = maxInfernos;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Infernos >= 0)){
			Game.tipMessage("Curren essence: " + Infernos + "/20000");
		}
		});
		
        },
		
			registerAeris: function (id, maxAeris){
		Aeris = maxAeris;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Aeris >= 0)){
			Game.tipMessage("Curren essence: " + Aeris + "/20000");
		}
		});
		
        },
		
				registerTerros: function (id, maxTerros){
		Terros = maxTerros;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Terros >= 0)){
			Game.tipMessage("Curren essence: " + Terros + "/20000");
		}
		});
		
        },
		
		registerFullColor: function (id, enable){
			if (enable === true){	
	Recipes.addShaped({id: id, count: 1, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.rubuRing, 0, 'b', ItemID.saphireRing, 0, 'c', ItemID.nephriteRing, 0]);
			
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)){
			Game.tipMessage("Curren essence: terros: " + Terros + ", aeris: " + Aeris + ", infernos: " + Infernos);
		}
		});
			}
		},
		
		registerRecipes: function (source, enable){
			if (enable === true){
				
    Recipes.addShaped({id: 302, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 303, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 304, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 305, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', source, 0]);	
	
			}
		}
};