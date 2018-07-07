/*

  ____              _     _
 |  _ \            | |   | |
 | |_) | __ _ _   _| |__ | | ___  ___
 |  _ < / _` | | | | '_ \| |/ _ \/ __|
 | |_) | (_| | |_| | |_) | |  __/\__ \
 |____/ \__,_|\__,_|_.__/|_|\___||___/

  by DDCompany (vk.com/forestry_pe)
 */
 
LIBRARY({
    name: "BaublesAPI",
    version: 1,
    shared: true,
    api: "CoreEngine",
});


let NativeAPI = java.lang.Class.forName("zhekasmirnov.launcher.api.NativeAPI", true, UI.getContext().getClass().getClassLoader()).newInstance();
let HEIGHT_CENTER = (UI.getScreenHeight() - 240) / 2 - 30;
let GUI = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: "Baubles"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [],
    elements: {
        //Column 1
        "amulet": {
            type: "slot", x: 400, y: HEIGHT_CENTER, bitmap: "baubles_slot_m.amulet",
            isValid: function (id) {
                return Baubles.getType(id) === "amulet";
            }
        },
        "ring0": {
            type: "slot", x: 400, y: HEIGHT_CENTER + 60, bitmap: "baubles_slot_m.ring", isValid: function (id) {
                return Baubles.getType(id) === "ring";
            }
        },
        "ring1": {
            type: "slot", x: 400, y: HEIGHT_CENTER + 120, bitmap: "baubles_slot_m.ring", isValid: function (id) {
                return Baubles.getType(id) === "ring";
            }
        },
        "belt": {
            type: "slot", x: 400, y: HEIGHT_CENTER + 180, bitmap: "baubles_slot_m.belt", isValid: function (id) {
                return Baubles.getType(id) === "belt";
            }
        },

        //Column 2
        "head": {
            type: "slot", x: 460, y: HEIGHT_CENTER, bitmap: "baubles_slot_m.head", isValid: function (id) {
                return Baubles.getType(id) === "head";
            }
        },
        "body": {
            type: "slot", x: 460, y: HEIGHT_CENTER + 60, bitmap: "baubles_slot_m.body", isValid: function (id) {
                return Baubles.getType(id) === "body";
            }
        },
        "charm": {
            type: "slot", x: 460, y: HEIGHT_CENTER + 120, bitmap: "baubles_slot_m.charm", isValid: function (id) {
                return Baubles.getType(id) === "charm";
            }
        }
    }
});

//Кнопка для классического интерфейса
let BUTTON_DESKTOP_GUI = new UI.Window({
    location: {
        x: 435,
        y: UI.getScreenHeight() / 2 - 190,
        width: 52,
        height: 52
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)}
    ],

    elements: {
        "btn": {
            type: "button", x: 0, y: 0, bitmap: "baubles_btn_d_up", bitmap2: "baubles_btn_d_down", scale: 45, clicker: {
                onClick: function () {
                    Baubles.openGui();
                }
            }
        }
    }
});

//Кнопка для карманного интерфейса
let BUTTON_MOBILE_GUI = new UI.Window({
    location: {
        x: 13,
        y: UI.getScreenHeight() - 382,
        width: 68,
        height: 75
    },

    drawing: [
        {type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)},
        {
            type: "frame",
            x: 0,
            y: 5,
            width: 1000,
            height: 1100,
            bitmap: "baubles_btn_frame",
            scale: 40
        }
    ],

    elements: {
        "texture": {
            type: "image", x: 5, y: 5, bitmap: "baubles_btn_d", scale: 55, clicker: {
                onClick: function () {
                    Baubles.openGui();
                }
            }
        }
    }
});

let Baubles = {
    container: new UI.Container(),
    btnContainer: new UI.Container(),
    isOpenedContainer: false,
    descriptions: {},
    baubles: {},

    registerBauble: function (obj) {
        this.descriptions[obj.id] = obj;
    },

    tick: function () {
        for (let i in this.baubles) {
            let bauble = this.baubles[i];

            if (!bauble)
                continue;

            if (bauble.tick)
                bauble.tick();
        }
    },

    cache: function () {
        let baubles = this.baubles;
        let baubles_old = {
            amulet: baubles.amulet,
            ring0: baubles.ring0,
            ring1: baubles.ring1,
            belt: baubles.belt,
            head: baubles.head,
            body: baubles.body,
            charm: baubles.charm
        };

        baubles.amulet = this.getDesc(this.container.getSlot("amulet").id);
        baubles.ring0 = this.getDesc(this.container.getSlot("ring0").id);
        baubles.ring1 = this.getDesc(this.container.getSlot("ring1").id);
        baubles.belt = this.getDesc(this.container.getSlot("belt").id);
        baubles.head = this.getDesc(this.container.getSlot("head").id);
        baubles.body = this.getDesc(this.container.getSlot("body").id);
        baubles.charm = this.getDesc(this.container.getSlot("charm").id);

        for (let i in baubles) {
            let bauble = baubles[i] || {};
            let bauble_old = baubles_old[i] || {};

            if (bauble.id !== bauble_old.id) {
                if (bauble.onEquip)
                    bauble.onEquip();

                if (bauble_old.onTakeOff)
                    bauble_old.onTakeOff();
            }
        }
    },

    openGui: function () {
        this.container.openAs(GUI);
    },

    getDesc: function (id) {
        return this.descriptions[id];
    },

    getType: function (id) {
        let desc = this.descriptions[id];

        if (!desc)
            return null;

        return desc.type;
    }
};

Saver.addSavesScope("Baubles",
    function read(scope) {

        if (Baubles.container = scope.container)
            Baubles.cache();
        else Baubles.container = new UI.Container();
    },
    function save() {
        return {container: Baubles.container};
    }
);

Callback.addCallback("tick", function () {
    let container = Baubles.container;
    if (!container)
        return;

    let isOpened = container.isOpened();

    if (!isOpened) {
        if (Baubles.isOpenedContainer)
            Baubles.cache();

        Baubles.tick();
    }

    Baubles.isOpenedContainer = isOpened;
});

Callback.addCallback("LevelLeft", function () {
    Baubles.baubles = {};
});

Callback.addCallback("EntityDeath", function (entity) {
    if (Entity.getType(entity) === 63) {
        for (let i in Baubles.baubles) {
            let bauble = Baubles.baubles[i];

            if (bauble) {
                let pos = Player.getPosition();
                Baubles.container.dropSlot(i, pos.x, pos.y, pos.z);

                if (bauble.onTakeOff)
                    bauble.onTakeOff();
            }
        }
    }
});

Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (screenName === "survival_inventory_screen" || screenName === "creative_inventory_screen") {
        if (NativeAPI.getUiProfile() === 1) {
            Baubles.btnContainer.openAs(BUTTON_MOBILE_GUI);
        } else if (screenName !== "creative_inventory_screen") Baubles.btnContainer.openAs(BUTTON_DESKTOP_GUI);
    } else Baubles.btnContainer.close();
});

ModAPI.registerAPI("BaublesAPI", {
    Baubles: Baubles,

    requireGlobal: function (command) {
        return eval(command);
    }
});

EXPORT("Baubles", Baubles);