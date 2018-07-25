var InventoryTweaks = {
    
   ReplacementItems: function (){
       
       Callback.addCallback("DestroyBlock", function(){
           var unical = Player.getCarriedItem();
           var maxDamage = Item.getMaxDamage(unical.id);
           
        if (unical.id > 0){
            unical.data++;
            if (unical.data++ === maxDamage){
               for(var i = 0; i <= 36; i++){
                 var slot = Player.getInventorySlot(i);
                if ((slot.id === unical.id) && (slot.data++ < maxDamage)){
                    Player.setCarriedItem(slot.id, 1, 0);
                    Player.setInventorySlot(i, 0, -1, 0);
                    } 
                }
            }
        }
           
       });
      },
      
      ReplacementBlock: function (){
       
       Callback.addCallback("ItemUse", function(){

           var block = Player.getCarriedItem();
           
        if ((block.id > 0) && (block.count === 1)){
               for(var i = 0; i <= 36; i++){
                 var slot = Player.getInventorySlot(i);
                if ((slot.id === block.id) && (slot.count > 1)){
                    Player.setCarriedItem(block.id, slot.count+1, 0);
                    Player.setInventorySlot(i, 0, -slot.count, 0);
                }
               }
        }
           
       });
      }
};

if(__config__.access("Auto Replacement") == true){
InventoryTweaks.ReplacementItems();
InventoryTweaks.ReplacementBlock();
}