TileEntity.registerPrototype(BlockID.cloneAltar,{
    defaultValues: {
        progress: 0,
        item: null
    },
  
    click: function (){
         let item = Player.getCarriedItem();
           if (item.id > 0){
             this.data.item = item.id;
             Player.setCarriedItem(this.data.item, item.count-=1, 0);
           }
     },
     
     tick: function (){
     if (this.data.item > 0){
       this.data.progress++;
       if (this.data.progress++ >= 100){
       let item = this.data.item;
World.drop(this.x-1, this.y, this.z, item, 1);
World.drop(this.x+1, this.y, this.z, item, 1);
this.data.item = null;
this.data.progress = 0;
       }
     } 
     }


});
