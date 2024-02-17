import {std} from "wow/wotlk"
const MODNAME = "Mounts"

// Example of how to do mounts easily. Not plug and play unless you have my DBCs.

//***************************** */
// Xuen
//***************************** */

export const Siberian_Tiger_God_Creature = std.CreatureTemplates.create(MODNAME, 'XuenMount', 475)
std.SQL.creature_model_info.add(47672).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Siberian_Tiger_God_Creature.Name.enGB.set("Xuen, the White Tiger")
Siberian_Tiger_God_Creature.Models.clearAll()
Siberian_Tiger_God_Creature.Models.addIds(47672)
Siberian_Tiger_God_Creature.Scale.set(1.15)
Siberian_Tiger_God_Creature.Mount.set(1)
Siberian_Tiger_God_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Summon_Siberian_Tiger_God = std.Spells.create(MODNAME, 'Xuen', 42777)
Summon_Siberian_Tiger_God.Name.enGB.set("Xuen, the White Tiger");
Summon_Siberian_Tiger_God.Effects.get(0).MiscValueA.set(Siberian_Tiger_God_Creature.ID)
Summon_Siberian_Tiger_God.Icon.setPath('ability_monk_summontigerstatue.blp')
Summon_Siberian_Tiger_God.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(28232)
    });
});


export const Summon_Siberian_Tiger_God_MOUNT = std.Mounts.create( MODNAME, 'Xuen-mount', 1, undefined, false, true)
    .Name.enGB.set('Lightning-Infused Reigns of Xuen the White Tiger')
    .CastTime.setSimple(1500, 0, 1500)
    .CreatureTemplate.modRef((value) => {
        value
            .Name.enGB.set('Xuen')
            .Models.clearAll()
            .Models.addIds(Siberian_Tiger_God_Creature.ID)
    })
    .SpellVisual.modRef((value) => {
        value.cloneFromSpell(Summon_Siberian_Tiger_God.ID)
    })
    .AsSpell.mod((spell) => {
        spell
            .Description.enGB.set('Summons Xuen, the White Tiger as a mount. This is a very fast mount.')
            .AuraDescription.enGB.set('Increases speed by $s2%.');
    });

//***************************** */
// Darkmoon Bear
//***************************** */

export const Darkmoon_Bear_Mount_Creature = std.CreatureTemplates.create(MODNAME, 'Darkmoon_Bear_Mount_Creature', 24004)
std.SQL.creature_model_info.add(48510).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Darkmoon_Bear_Mount_Creature.Name.enGB.set("Darkmoon Bear")
Darkmoon_Bear_Mount_Creature.Models.clearAll()
Darkmoon_Bear_Mount_Creature.Models.addIds(48510)
Darkmoon_Bear_Mount_Creature.Scale.set(1)
Darkmoon_Bear_Mount_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Summon_Darkmoon_Bear_Mount = std.Spells.create(MODNAME, 'Darkmoon_Bear_Mount', 51412)
Summon_Darkmoon_Bear_Mount.Name.enGB.set("Darkmoon Bear");
Summon_Darkmoon_Bear_Mount.Effects.get(0).MiscValueA.set(Darkmoon_Bear_Mount_Creature.ID)
Summon_Darkmoon_Bear_Mount.Icon.setPath('ability_hunter_pet_bear.blp')


//***************************** */
// Vicious War Raptor
//***************************** */


export const Vicious_War_Raptor_Creature = std.CreatureTemplates.create(MODNAME, 'Vicious_War_Raptor_Creature', 475)
std.SQL.creature_model_info.add(60575).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Vicious_War_Raptor_Creature.Name.enGB.set("Witchdoctor's Raptor")
Vicious_War_Raptor_Creature.Models.clearAll()
Vicious_War_Raptor_Creature.Models.addIds(60575)
Vicious_War_Raptor_Creature.Scale.set(1)
Vicious_War_Raptor_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Vicious_War_Raptor_Mount = std.Spells.create(MODNAME, 'Vicious_War_Raptor', 22721)
Vicious_War_Raptor_Mount.Name.enGB.set("Witchdoctor's Raptor");
Vicious_War_Raptor_Mount.Effects.get(0).MiscValueA.set(Vicious_War_Raptor_Creature.ID)
Vicious_War_Raptor_Mount.Icon.setPath('ability_mount_viciouswarraptor.blp')

//***************************** */
// Ghostly Charger
//***************************** */

export const Ghostly_Charger_Creature = std.CreatureTemplates.create(MODNAME, 'Ghostly_Charger_Creature', 475)
std.SQL.creature_model_info.add(48014).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Ghostly_Charger_Creature.Name.enGB.set("Ghostly Charger")
Ghostly_Charger_Creature.Models.clearAll()
Ghostly_Charger_Creature.Models.addIds(48014)
Ghostly_Charger_Creature.Scale.set(1)
Ghostly_Charger_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Ghostly_Charger_Mount = std.Spells.create(MODNAME, 'Ghostly_Charger', 17481)
Ghostly_Charger_Mount.Name.enGB.set("Ghostly Charger");
Ghostly_Charger_Mount.Effects.get(0).MiscValueA.set(Ghostly_Charger_Creature.ID)
Ghostly_Charger_Mount.Icon.setPath('inv_ghostlycharger.blp')

//***************************** */
// Fox Mount
//***************************** */

export const Fox_Creature = std.CreatureTemplates.create(MODNAME, 'Fox_Creature', 475)
std.SQL.creature_model_info.add(69469).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Fox_Creature.Name.enGB.set("Swift Mountain Fox")
Fox_Creature.Models.clearAll()
Fox_Creature.Models.addIds(69469)
Fox_Creature.Scale.set(1)
Fox_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Fox_Mount = std.Spells.create(MODNAME, 'Fox_Mount', 22721)
Fox_Mount.Name.enGB.set("Swift Mountain Fox");
Fox_Mount.Effects.get(0).MiscValueA.set(Fox_Creature.ID)
Fox_Mount.Icon.setPath('foxmounticon.blp')
Fox_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});


//***************************** */
// Felstalker Mount
//***************************** */

export const Felstalker_Creature = std.CreatureTemplates.create(MODNAME, 'Felstalker_Creature', 475)
std.SQL.creature_model_info.add(64582).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Felstalker_Creature.Name.enGB.set("Felstalker")
Felstalker_Creature.Models.clearAll()
Felstalker_Creature.Models.addIds(64582)
Felstalker_Creature.Scale.set(1)
Felstalker_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Felstalker_Mount = std.Spells.create(MODNAME, 'Felstalker_Mount', 36702)
Felstalker_Mount.Name.enGB.set("Felstalker");
Felstalker_Mount.Effects.get(0).MiscValueA.set(Felstalker_Creature.ID)
Felstalker_Mount.Icon.setPath('inv_felstalkermount.blp')
Felstalker_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18227)
    });
});


//***************************** */
// Infernal Mounts
//***************************** */

export const Ice_Infernal_Creature = std.CreatureTemplates.create(MODNAME, 'Ice_Infernal_Creature', 475)
std.SQL.creature_model_info.add(70126).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Ice_Infernal_Creature.Name.enGB.set("Frostbit Infernal Core")
Ice_Infernal_Creature.Models.clearAll()
Ice_Infernal_Creature.Models.addIds(70126)
Ice_Infernal_Creature.Scale.set(1)
Ice_Infernal_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Ice_Infernal_Mount = std.Spells.create(MODNAME, 'Ice_Infernal_Mount', 36702)
Ice_Infernal_Mount.Name.enGB.set("Frostbit Infernal ");
Ice_Infernal_Mount.Effects.get(0).MiscValueA.set(Ice_Infernal_Creature.ID)
Ice_Infernal_Mount.Icon.setPath('inv_infernalmounice.blp')
Ice_Infernal_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(72174)
    });
});


export const Infernal_Creature = std.CreatureTemplates.create(MODNAME, 'Infernal_Creature', 475)
std.SQL.creature_model_info.add(48609).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Infernal_Creature.Name.enGB.set("Infernal Core")
Infernal_Creature.Models.clearAll()
Infernal_Creature.Models.addIds(48609)
Infernal_Creature.Scale.set(1)
Infernal_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Infernal_Mount = std.Spells.create(MODNAME, 'Infernal_Mount', 36702)
Infernal_Mount.Name.enGB.set("Infernal Core");
Infernal_Mount.Effects.get(0).MiscValueA.set(Infernal_Creature.ID)
Infernal_Mount.Icon.setPath('inv_infernalmountgreen.blp')
Infernal_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});


//***************************** */
// Swift Windsteed
//***************************** */

export const Swift_Windsteed_Creature = std.CreatureTemplates.create(MODNAME, 'Swift_Windsteed_Creature', 475)
std.SQL.creature_model_info.add(46729).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Swift_Windsteed_Creature.Name.enGB.set("Swift Windsteed")
Swift_Windsteed_Creature.Models.clearAll()
Swift_Windsteed_Creature.Models.addIds(46729)
Swift_Windsteed_Creature.Scale.set(1)
Swift_Windsteed_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Swift_Windsteed_Mount = std.Spells.create(MODNAME, 'Swift_Windsteed', 36702)
Swift_Windsteed_Mount.Name.enGB.set("Swift Windsteed");
Swift_Windsteed_Mount.Effects.get(0).MiscValueA.set(Swift_Windsteed_Creature.ID)
Swift_Windsteed_Mount.Icon.setPath('ability_mount_swiftwindsteed.blp')
Swift_Windsteed_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266836)
    });
});

//***************************** */
// Zeppelin Mount
//***************************** */

export const Zeppelin_Creature = std.CreatureTemplates.create(MODNAME, 'Zeppelin_Creature', 475)
std.SQL.creature_model_info.add(78112).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Zeppelin_Creature.Name.enGB.set("Swift Zeppelin")
Zeppelin_Creature.Models.clearAll()
Zeppelin_Creature.Models.addIds(78112)
Zeppelin_Creature.Scale.set(1)
Zeppelin_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Zeppelin_Mount = std.Spells.create(MODNAME, 'Zeppelin_Mount', 36702)
Zeppelin_Mount.Name.enGB.set("Swift Zeppelin");
Zeppelin_Mount.Effects.get(0).MiscValueA.set(Zeppelin_Creature.ID)
Zeppelin_Mount.Icon.setPath('inv_zeppelinmount.blp')
Zeppelin_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19542)
    });
});


//***************************** */
// Highwind Darkmane Mount
//***************************** */

export const Highwind_Darkmane_Creature = std.CreatureTemplates.create(MODNAME, 'Highwind_Darkmane_Creature', 475)
std.SQL.creature_model_info.add(93769).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Highwind_Darkmane_Creature.Name.enGB.set("Highwind Darkmane")
Highwind_Darkmane_Creature.Models.clearAll()
Highwind_Darkmane_Creature.Models.addIds(93769)
Highwind_Darkmane_Creature.Scale.set(1)
Highwind_Darkmane_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Highwind_Darkmane_Mount = std.Spells.create(MODNAME, 'Highwind_Darkmane_Mount', 36702)
Highwind_Darkmane_Mount.Name.enGB.set("Highwind Darkmane");
Highwind_Darkmane_Mount.Effects.get(0).MiscValueA.set(Highwind_Darkmane_Creature.ID)
Highwind_Darkmane_Mount.Icon.setPath('inv_wingedlion2mount_dark.blp')
Highwind_Darkmane_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266837)
    });
});

//***************************** */
// Fallen Charger
//***************************** */

export const Fallen_Charger_Creature = std.CreatureTemplates.create(MODNAME, 'Fallen_Charger_Creature', 475)
std.SQL.creature_model_info.add(99005).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Fallen_Charger_Creature.Name.enGB.set("Fallen Charger")
Fallen_Charger_Creature.Models.clearAll()
Fallen_Charger_Creature.Models.addIds(99005)
Fallen_Charger_Creature.Scale.set(1)
Fallen_Charger_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Fallen_Charger_Mount = std.Spells.create(MODNAME, 'Fallen_Charger_Mount', 23227)
Fallen_Charger_Mount.Name.enGB.set("Fallen Charger");
Fallen_Charger_Mount.Effects.get(0).MiscValueA.set(Fallen_Charger_Creature.ID)
Fallen_Charger_Mount.Icon.setPath('ability_mount_mawhorsespikes_yellow.blp')

//***************************** */
// Wraithbound Charger
//***************************** */

export const Wraithbound_Charger_Creature = std.CreatureTemplates.create(MODNAME, 'Wraithbound_Charger_Creature', 475)
std.SQL.creature_model_info.add(99004).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Wraithbound_Charger_Creature.Name.enGB.set("Wraithbound Charger")
Wraithbound_Charger_Creature.Models.clearAll()
Wraithbound_Charger_Creature.Models.addIds(99004)
Wraithbound_Charger_Creature.Scale.set(1)
Wraithbound_Charger_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Wraithbound_Charger_Mount = std.Spells.create(MODNAME, 'Wraithbound_Charger_Mount', 23227)
Wraithbound_Charger_Mount.Name.enGB.set("Wraithbound Charger");
Wraithbound_Charger_Mount.Effects.get(0).MiscValueA.set(Wraithbound_Charger_Creature.ID)
Wraithbound_Charger_Mount.Icon.setPath('ability_mount_mawhorsespikes_blue.blp')

//***************************** */
// Soulbound Charger
//***************************** */

export const Soulbound_Charger_Creature = std.CreatureTemplates.create(MODNAME, 'Soulbound_Charger_Creature', 475)
std.SQL.creature_model_info.add(99007).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Soulbound_Charger_Creature.Name.enGB.set("Soulbound Charger")
Soulbound_Charger_Creature.Models.clearAll()
Soulbound_Charger_Creature.Models.addIds(99007)
Soulbound_Charger_Creature.Scale.set(1)
Soulbound_Charger_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Soulbound_Charger_Mount = std.Spells.create(MODNAME, 'Soulbound_Charger_Mount', 23227)
Soulbound_Charger_Mount.Name.enGB.set("Soulbound Charger");
Soulbound_Charger_Mount.Effects.get(0).MiscValueA.set(Soulbound_Charger_Creature.ID)
Soulbound_Charger_Mount.Icon.setPath('ability_mount_mawhorsespikes_purple.blp')

//***************************** */
// Blue Phoenix
//***************************** */

export const Blue_Phoenix_Creature = std.CreatureTemplates.create(MODNAME, 'Blue_Phoenix_Creature', 475)
std.SQL.creature_model_info.add(99001).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Blue_Phoenix_Creature.Name.enGB.set("Sapphire Skyblazer")
Blue_Phoenix_Creature.Models.clearAll()
Blue_Phoenix_Creature.Models.addIds(99001)
Blue_Phoenix_Creature.Scale.set(1)
Blue_Phoenix_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Blue_Phoenix_Mount = std.Spells.create(MODNAME, 'Blue_Phoenix_Mount', 23227)
Blue_Phoenix_Mount.Name.enGB.set("Sapphire Skyblazer");
Blue_Phoenix_Mount.Effects.get(0).MiscValueA.set(Blue_Phoenix_Creature.ID)
Blue_Phoenix_Mount.Icon.setPath('inv_phoenix2mount_blue.blp')
Blue_Phoenix_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266838)
    });
});

//***************************** */
// Orange Phoenix
//***************************** */

export const Orange_Phoenix_Creature = std.CreatureTemplates.create(MODNAME, 'Orange_Phoenix_Creature', 475)
std.SQL.creature_model_info.add(99000).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Orange_Phoenix_Creature.Name.enGB.set("Orange Skyblazer")
Orange_Phoenix_Creature.Models.clearAll()
Orange_Phoenix_Creature.Models.addIds(99000)
Orange_Phoenix_Creature.Scale.set(1)
Orange_Phoenix_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Orange_Phoenix_Mount = std.Spells.create(MODNAME, 'Orange_Phoenix_Mount', 23227)
Orange_Phoenix_Mount.Name.enGB.set("Orange Skyblazer");
Orange_Phoenix_Mount.Effects.get(0).MiscValueA.set(Orange_Phoenix_Creature.ID)
Orange_Phoenix_Mount.Icon.setPath('inv_phoenix2mount_orange.blp')
Orange_Phoenix_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266838)
    });
});

//***************************** */
// Maw Hand Black
//***************************** */

export const Mawhand_Black_Creature = std.CreatureTemplates.create(MODNAME, 'Mawhand_Black_Creature', 475)
std.SQL.creature_model_info.add(939261).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mawhand_Black_Creature.Name.enGB.set("Blackened Hand of Nilganihmaht")
Mawhand_Black_Creature.Models.clearAll()
Mawhand_Black_Creature.Models.addIds(939261)
Mawhand_Black_Creature.Scale.set(1)
Mawhand_Black_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mawhand_Black_Mount = std.Spells.create(MODNAME, 'Mawhand_Black_Mount', 23227)
Mawhand_Black_Mount.Name.enGB.set("Blackened Hand of Nilganihmaht");
Mawhand_Black_Mount.Effects.get(0).MiscValueA.set(Mawhand_Black_Creature.ID)
Mawhand_Black_Mount.Icon.setPath('inv_70_quest_ring7a.blp')
Mawhand_Black_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(168902)
    });
});

//***************************** */
// Maw Hand Blue
//***************************** */

export const Mawhand_Blue_Creature = std.CreatureTemplates.create(MODNAME, 'Mawhand_Azure_Creature', 475)
std.SQL.creature_model_info.add(939262).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mawhand_Blue_Creature.Name.enGB.set("Azure Hand of Nilganihmaht")
Mawhand_Blue_Creature.Models.clearAll()
Mawhand_Blue_Creature.Models.addIds(939262)
Mawhand_Blue_Creature.Scale.set(1)
Mawhand_Blue_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mawhand_Blue_Mount = std.Spells.create(MODNAME, 'Mawhand_Azure_Mount', 23227)
Mawhand_Blue_Mount.Name.enGB.set("Azure Hand of Nilganihmaht");
Mawhand_Blue_Mount.Effects.get(0).MiscValueA.set(Mawhand_Blue_Creature.ID)
Mawhand_Blue_Mount.Icon.setPath('inv_70_quest_ring8c.blp')
Mawhand_Blue_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(168902)
    });
});


//***************************** */
// Maw Hand Gold
//***************************** */

export const Mawhand_Golden_Creature = std.CreatureTemplates.create(MODNAME, 'Mawhand_Golden_Creature', 475)
std.SQL.creature_model_info.add(939263).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mawhand_Golden_Creature.Name.enGB.set("Golden Hand of Nilganihmaht")
Mawhand_Golden_Creature.Models.clearAll()
Mawhand_Golden_Creature.Models.addIds(939263)
Mawhand_Golden_Creature.Scale.set(1)
Mawhand_Golden_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mawhand_Golden_Mount = std.Spells.create(MODNAME, 'Mawhand_Golden_Mount', 23227)
Mawhand_Golden_Mount.Name.enGB.set("Golden Hand of Nilganihmaht");
Mawhand_Golden_Mount.Effects.get(0).MiscValueA.set(Mawhand_Golden_Creature.ID)
Mawhand_Golden_Mount.Icon.setPath('inv_70_quest_ring7b.blp')
Mawhand_Golden_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(168902)
    });
});

//***************************** */
// Maw Hand Purple
//***************************** */

export const Mawhand_Purple_Creature = std.CreatureTemplates.create(MODNAME, 'Mawhand_Purple_Creature', 475)
std.SQL.creature_model_info.add(939265).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mawhand_Purple_Creature.Name.enGB.set("Purple Hand of Nilganihmaht")
Mawhand_Purple_Creature.Models.clearAll()
Mawhand_Purple_Creature.Models.addIds(939265)
Mawhand_Purple_Creature.Scale.set(1)
Mawhand_Purple_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mawhand_Purple_Mount = std.Spells.create(MODNAME, 'Mawhand_Purple_Mount', 23227)
Mawhand_Purple_Mount.Name.enGB.set("Purple Hand of Nilganihmaht");
Mawhand_Purple_Mount.Effects.get(0).MiscValueA.set(Mawhand_Purple_Creature.ID)
Mawhand_Purple_Mount.Icon.setPath('inv_70_quest_ring7c.blp')
Mawhand_Purple_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(168902)
    });
});

//***************************** */
// Maw Hand White
//***************************** */

export const Mawhand_White_Creature = std.CreatureTemplates.create(MODNAME, 'Mawhand_White_Creature', 475)
std.SQL.creature_model_info.add(939265).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mawhand_White_Creature.Name.enGB.set("Pale Hand of Nilganihmaht")
Mawhand_White_Creature.Models.clearAll()
Mawhand_White_Creature.Models.addIds(939265)
Mawhand_White_Creature.Scale.set(1)
Mawhand_White_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mawhand_White_Mount = std.Spells.create(MODNAME, 'Mawhand_White_Mount', 23227)
Mawhand_White_Mount.Name.enGB.set("Pale Hand of Nilganihmaht");
Mawhand_White_Mount.Effects.get(0).MiscValueA.set(Mawhand_White_Creature.ID)
Mawhand_White_Mount.Icon.setPath('inv_70_quest_ring7a.blp')
Mawhand_White_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(168902)
    });
});

//***************************** */
// New Swift Spectral Tiger
//***************************** */

export const Spectral_Tiger_Creature = std.CreatureTemplates.create(MODNAME, 'Spectral_Tiger_Creature', 475)
std.SQL.creature_model_info.add(470000).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Spectral_Tiger_Creature.Name.enGB.set("Swift Spectral Siberian Tiger")
Spectral_Tiger_Creature.Models.clearAll()
Spectral_Tiger_Creature.Models.addIds(470000)
Spectral_Tiger_Creature.Scale.set(1.15)
Spectral_Tiger_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Spectral_Tiger_Mount = std.Spells.create(MODNAME, 'Spectral_Tiger_Mount', 42777)
Spectral_Tiger_Mount.Name.enGB.set("Swift Spectral Siberian Tiger");
Spectral_Tiger_Mount.Effects.get(0).MiscValueA.set(Spectral_Tiger_Creature.ID)

//***************************** */
// Darkhound Black
//***************************** */

export const Darkhound_Black_Creature = std.CreatureTemplates.create(MODNAME, 'Darkhound_Black_Creature', 475)
std.SQL.creature_model_info.add(98222).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Darkhound_Black_Creature.Name.enGB.set("Black Darkhound")
Darkhound_Black_Creature.Models.clearAll()
Darkhound_Black_Creature.Models.addIds(98222)
Darkhound_Black_Creature.Scale.set(1)
Darkhound_Black_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Darkhound_Black_Mount = std.Spells.create(MODNAME, 'Darkhound_Black_Mount', 23227)
Darkhound_Black_Mount.Name.enGB.set("Black Darkhound");
Darkhound_Black_Mount.Effects.get(0).MiscValueA.set(Darkhound_Black_Creature.ID)
Darkhound_Black_Mount.Icon.setPath('inv_darkhoundmount_draka.blp')
Darkhound_Black_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266839)
    });
});


//***************************** */
// Darkhound Blue
//***************************** */

export const Darkhound_Blue_Creature = std.CreatureTemplates.create(MODNAME, 'Darkhound_Blue_Creature', 475)
std.SQL.creature_model_info.add(98223).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Darkhound_Blue_Creature.Name.enGB.set("Blue Darkhound")
Darkhound_Blue_Creature.Models.clearAll()
Darkhound_Blue_Creature.Models.addIds(98223)
Darkhound_Blue_Creature.Scale.set(1)
Darkhound_Blue_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Darkhound_Blue_Mount = std.Spells.create(MODNAME, 'Darkhound_Blue_Mount', 23227)
Darkhound_Blue_Mount.Name.enGB.set("Blue Darkhound");
Darkhound_Blue_Mount.Effects.get(0).MiscValueA.set(Darkhound_Blue_Creature.ID)
Darkhound_Blue_Mount.Icon.setPath('inv_darkhoundmount_draka_orange.blp')
Darkhound_Blue_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266839)
    });
});

//***************************** */
// Darkhound Green
//***************************** */

export const Darkhound_Green_Creature = std.CreatureTemplates.create(MODNAME, 'Darkhound_Green_Creature', 475)
std.SQL.creature_model_info.add(98224).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Darkhound_Green_Creature.Name.enGB.set("Green Darkhound")
Darkhound_Green_Creature.Models.clearAll()
Darkhound_Green_Creature.Models.addIds(98224)
Darkhound_Green_Creature.Scale.set(1)
Darkhound_Green_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Darkhound_Green_Mount = std.Spells.create(MODNAME, 'Darkhound_Green_Mount', 23227)
Darkhound_Green_Mount.Name.enGB.set("Green Darkhound");
Darkhound_Green_Mount.Effects.get(0).MiscValueA.set(Darkhound_Green_Creature.ID)
Darkhound_Green_Mount.Icon.setPath('inv_darkhoundmount_draka_green.blp')
Darkhound_Green_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266839)
    });
});

//***************************** */
// Battle Gargon Silessa
//***************************** */

export const Red_Deathwarg_Creature = std.CreatureTemplates.create(MODNAME, 'Red_Deathwarg_Creature', 475)
std.SQL.creature_model_info.add(97369).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Red_Deathwarg_Creature.Name.enGB.set("Battle Gargon Silessa")
Red_Deathwarg_Creature.Models.clearAll()
Red_Deathwarg_Creature.Models.addIds(97369)
Red_Deathwarg_Creature.Scale.set(1)
Red_Deathwarg_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Red_Deathwarg_Mount = std.Spells.create(MODNAME, 'Red_Deathwarg_Mount', 60114)
Red_Deathwarg_Mount.Name.enGB.set("Battle Gargon Silessa");
Red_Deathwarg_Mount.Effects.get(0).MiscValueA.set(Red_Deathwarg_Creature.ID)
Red_Deathwarg_Mount.Icon.setPath('inv_deathwargmount2red.blp')
Red_Deathwarg_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266840)
    });
});

//***************************** */
// Purple Armored Bloodwing
//***************************** */

export const Purple_Armored_Bloodwing_Creature = std.CreatureTemplates.create(MODNAME, 'Purple_Armored_Bloodwing_Creature', 475)
std.SQL.creature_model_info.add(97366).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Purple_Armored_Bloodwing_Creature.Name.enGB.set("Harvester's Dredwing")
Purple_Armored_Bloodwing_Creature.Models.clearAll()
Purple_Armored_Bloodwing_Creature.Models.addIds(97366)
Purple_Armored_Bloodwing_Creature.Scale.set(1)
Purple_Armored_Bloodwing_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Purple_Armored_Bloodwing_Mount = std.Spells.create(MODNAME, 'Purple_Armored_Bloodwing_Mount', 23227)
Purple_Armored_Bloodwing_Mount.Name.enGB.set("Harvester's Dredwing");
Purple_Armored_Bloodwing_Mount.Effects.get(0).MiscValueA.set(Purple_Armored_Bloodwing_Creature.ID)
Purple_Armored_Bloodwing_Mount.Icon.setPath('inv_giantvampirebatmount_purple.blp')
Purple_Armored_Bloodwing_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266841)
    });
});

//***************************** */
// Horrid Dredwing
//***************************** */

export const Green_Armored_Bloodwing_Creature = std.CreatureTemplates.create(MODNAME, 'Green_Armored_Bloodwing_Creature', 475)
std.SQL.creature_model_info.add(97367).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Green_Armored_Bloodwing_Creature.Name.enGB.set("Horrid Dredwing")
Green_Armored_Bloodwing_Creature.Models.clearAll()
Green_Armored_Bloodwing_Creature.Models.addIds(97367)
Green_Armored_Bloodwing_Creature.Scale.set(1)
Green_Armored_Bloodwing_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Green_Armored_Bloodwing_Mount = std.Spells.create(MODNAME, 'Green_Armored_Bloodwing_Mount', 23227)
Green_Armored_Bloodwing_Mount.Name.enGB.set("Horrid Dredwing");
Green_Armored_Bloodwing_Mount.Effects.get(0).MiscValueA.set(Green_Armored_Bloodwing_Creature.ID)
Green_Armored_Bloodwing_Mount.Icon.setPath('inv_giantvampirebatmount_white.blp')
Green_Armored_Bloodwing_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266841)
    });
});

//***************************** */
// Stone Armored Bloodwing
//***************************** */

export const Stone_Armored_Bloodwing_Creature = std.CreatureTemplates.create(MODNAME, 'Stone_Armored_Bloodwing_Creature', 475)
std.SQL.creature_model_info.add(97368).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Stone_Armored_Bloodwing_Creature.Name.enGB.set("Silvertip Dredwing")
Stone_Armored_Bloodwing_Creature.Models.clearAll()
Stone_Armored_Bloodwing_Creature.Models.addIds(97368)
Stone_Armored_Bloodwing_Creature.Scale.set(1)
Stone_Armored_Bloodwing_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Stone_Armored_Bloodwing_Mount = std.Spells.create(MODNAME, 'Stone_Armored_Bloodwing_Mount', 23227)
Stone_Armored_Bloodwing_Mount.Name.enGB.set("Silvertip Dredwing");
Stone_Armored_Bloodwing_Mount.Effects.get(0).MiscValueA.set(Stone_Armored_Bloodwing_Creature.ID)
Stone_Armored_Bloodwing_Mount.Icon.setPath('inv_giantvampirebatmount_silver.blp')
Stone_Armored_Bloodwing_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266841)
    });
});

//***************************** */
// Unarmored Red Deathwarg
//***************************** */

export const Unarmored_Red_Deathwarg_Creature = std.CreatureTemplates.create(MODNAME, 'Unarmored_Red_Deathwarg_Creature', 475)
std.SQL.creature_model_info.add(97158).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Unarmored_Red_Deathwarg_Creature.Name.enGB.set("Sinfall Gargon")
Unarmored_Red_Deathwarg_Creature.Models.clearAll()
Unarmored_Red_Deathwarg_Creature.Models.addIds(97158)
Unarmored_Red_Deathwarg_Creature.Scale.set(1)
Unarmored_Red_Deathwarg_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Unarmored_Red_Deathwarg_Mount = std.Spells.create(MODNAME, 'Unarmored_Red_Deathwarg_Mount', 60114)
Unarmored_Red_Deathwarg_Mount.Name.enGB.set("Sinfall Gargon");
Unarmored_Red_Deathwarg_Mount.Effects.get(0).MiscValueA.set(Unarmored_Red_Deathwarg_Creature.ID)
Unarmored_Red_Deathwarg_Mount.Icon.setPath('inv_deathwargmountred.blp')
Unarmored_Red_Deathwarg_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266840)
    });
});

//***************************** */
// Hopecrusher Gargon
//***************************** */

export const Unarmored_Black_Deathwarg_Creature = std.CreatureTemplates.create(MODNAME, 'Unarmored_Black_Deathwarg_Creature', 475)
std.SQL.creature_model_info.add(97157).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Unarmored_Black_Deathwarg_Creature.Name.enGB.set("Hopecrusher Gargon")
Unarmored_Black_Deathwarg_Creature.Models.clearAll()
Unarmored_Black_Deathwarg_Creature.Models.addIds(97157)
Unarmored_Black_Deathwarg_Creature.Scale.set(1)
Unarmored_Black_Deathwarg_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Unarmored_Black_Deathwarg_Mount = std.Spells.create(MODNAME, 'Unarmored_Black_Deathwarg_Mount', 60114)
Unarmored_Black_Deathwarg_Mount.Name.enGB.set("Hopecrusher Gargon");
Unarmored_Black_Deathwarg_Mount.Effects.get(0).MiscValueA.set(Unarmored_Black_Deathwarg_Creature.ID)
Unarmored_Black_Deathwarg_Mount.Icon.setPath('inv_deathwargmountblack.blp')
Unarmored_Black_Deathwarg_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266840)
    });
});

//***************************** */
// Vicious Alliance Spider
//***************************** */

export const Vicious_Alliance_Spider_Creature = std.CreatureTemplates.create(MODNAME, 'Vicious_Alliance_Spider_Creature', 475)
std.SQL.creature_model_info.add(96782).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Vicious_Alliance_Spider_Creature.Name.enGB.set("Vicious Alliance Spider")
Vicious_Alliance_Spider_Creature.Models.clearAll()
Vicious_Alliance_Spider_Creature.Models.addIds(96782)
Vicious_Alliance_Spider_Creature.Scale.set(1)
Vicious_Alliance_Spider_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Vicious_Alliance_Spider_Mount = std.Spells.create(MODNAME, 'Vicious_Alliance_Spider_Mount', 23227)
Vicious_Alliance_Spider_Mount.Name.enGB.set("Vicious Alliance Spider");
Vicious_Alliance_Spider_Mount.Effects.get(0).MiscValueA.set(Vicious_Alliance_Spider_Creature.ID)
Vicious_Alliance_Spider_Mount.Icon.setPath('inv_viciousalliancespider.blp')
Vicious_Alliance_Spider_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18024)
    });
});

//***************************** */
// Corridor Creeper
//***************************** */

export const Jailer_Hound_Creature = std.CreatureTemplates.create(MODNAME, 'Jailer_Hound_Creature', 475)
std.SQL.creature_model_info.add(96299).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Jailer_Hound_Creature.Name.enGB.set("Corridor Creeper")
Jailer_Hound_Creature.Models.clearAll()
Jailer_Hound_Creature.Models.addIds(96299)
Jailer_Hound_Creature.Scale.set(1)
Jailer_Hound_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Jailer_Hound_Mount = std.Spells.create(MODNAME, 'Jailer_Hound_Mount', 23227)
Jailer_Hound_Mount.Name.enGB.set("Corridor Creeper");
Jailer_Hound_Mount.Effects.get(0).MiscValueA.set(Jailer_Hound_Creature.ID)
Jailer_Hound_Mount.Icon.setPath('inv_jailerhoundmount_black.blp')
Jailer_Hound_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(158899)
    });
});


//***************************** */
// Bound Shadehound
//***************************** */

export const White_Jailer_Hound_Creature = std.CreatureTemplates.create(MODNAME, 'White_Jailer_Hound_Creature', 475)
std.SQL.creature_model_info.add(96293).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
White_Jailer_Hound_Creature.Name.enGB.set("Bound Shadehound")
White_Jailer_Hound_Creature.Models.clearAll()
White_Jailer_Hound_Creature.Models.addIds(96293)
White_Jailer_Hound_Creature.Scale.set(1)
White_Jailer_Hound_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const White_Jailer_Hound_Mount = std.Spells.create(MODNAME, 'White_Jailer_Hound_Mount', 23227)
White_Jailer_Hound_Mount.Name.enGB.set("Bound Shadehound");
White_Jailer_Hound_Mount.Effects.get(0).MiscValueA.set(White_Jailer_Hound_Creature.ID)
White_Jailer_Hound_Mount.Icon.setPath('inv_jailerhoundmount_white.blp')
White_Jailer_Hound_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(158899)
    });
});

//***************************** */
// Mechagon Peacekeeper
//***************************** */

export const Mechagon_Tank_Creature = std.CreatureTemplates.create(MODNAME, 'Mechagon_Tank_Creature', 475)
std.SQL.creature_model_info.add(94995).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Mechagon_Tank_Creature.Name.enGB.set("Mechagon Peacekeeper")
Mechagon_Tank_Creature.Models.clearAll()
Mechagon_Tank_Creature.Models.addIds(94995)
Mechagon_Tank_Creature.Scale.set(1)
Mechagon_Tank_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Mechagon_Tank_Mount = std.Spells.create(MODNAME, 'Mechagon_Tank_Mount', 17495)
Mechagon_Tank_Mount.Name.enGB.set("Mechagon Peacekeeper");
Mechagon_Tank_Mount.Effects.get(0).MiscValueA.set(Mechagon_Tank_Creature.ID)
Mechagon_Tank_Mount.Icon.setPath('inv_mechagonspidertank_brass.blp')
Mechagon_Tank_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266842)
    });
});

//***************************** */
// Azureshell Krolusk
//***************************** */

export const Blue_Trilobite_Creature = std.CreatureTemplates.create(MODNAME, 'Blue_Trilobite_Creature', 475)
std.SQL.creature_model_info.add(90393).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Blue_Trilobite_Creature.Name.enGB.set("Azureshell Krolusk")
Blue_Trilobite_Creature.Models.clearAll()
Blue_Trilobite_Creature.Models.addIds(90393)
Blue_Trilobite_Creature.Scale.set(1)
Blue_Trilobite_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Blue_Trilobite_Mount = std.Spells.create(MODNAME, 'Blue_Trilobite_Mount', 23227)
Blue_Trilobite_Mount.Name.enGB.set("Azureshell Krolusk");
Blue_Trilobite_Mount.Effects.get(0).MiscValueA.set(Blue_Trilobite_Creature.ID)
Blue_Trilobite_Mount.Icon.setPath('inv_trilobitemount_blue.blp')
Blue_Trilobite_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18131)
    });
});

//***************************** */
// Rubyshell Krolusk
//***************************** */

export const Red_Trilobite_Creature = std.CreatureTemplates.create(MODNAME, 'Red_Trilobite_Creature', 475)
std.SQL.creature_model_info.add(90394).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Red_Trilobite_Creature.Name.enGB.set("Rubyshell Krolusk")
Red_Trilobite_Creature.Models.clearAll()
Red_Trilobite_Creature.Models.addIds(90394)
Red_Trilobite_Creature.Scale.set(1)
Red_Trilobite_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Red_Trilobite_Mount = std.Spells.create(MODNAME, 'Red_Trilobite_Mount', 23227)
Red_Trilobite_Mount.Name.enGB.set("Rubyshell Krolusk");
Red_Trilobite_Mount.Effects.get(0).MiscValueA.set(Red_Trilobite_Creature.ID)
Red_Trilobite_Mount.Icon.setPath('inv_trilobitemount_red.blp')
Red_Trilobite_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18131)
    });
});

//***************************** */
// Golden Armored Raptor
//***************************** */

export const Golden_Raptor_Creature = std.CreatureTemplates.create(MODNAME, 'Golden_Raptor_Creature', 475)
std.SQL.creature_model_info.add(90163).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Golden_Raptor_Creature.Name.enGB.set("Gilded Ravasaur")
Golden_Raptor_Creature.Models.clearAll()
Golden_Raptor_Creature.Models.addIds(90163)
Golden_Raptor_Creature.Scale.set(1)
Golden_Raptor_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Golden_Raptor_Mount = std.Spells.create(MODNAME, 'Golden_Raptor_Mount', 22721)
Golden_Raptor_Mount.Name.enGB.set("Gilded Ravasaur");
Golden_Raptor_Mount.Effects.get(0).MiscValueA.set(Golden_Raptor_Creature.ID)
Golden_Raptor_Mount.Icon.setPath('inv_armoredraptor.blp')

//***************************** */
// Great Undercity Plaguewing
//***************************** */

export const Undercity_Bat_Creature = std.CreatureTemplates.create(MODNAME, 'Undercity_Bat_Creature', 475)
std.SQL.creature_model_info.add(89009).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Undercity_Bat_Creature.Name.enGB.set("Great Undercity Plaguebat")
Undercity_Bat_Creature.Models.clearAll()
Undercity_Bat_Creature.Models.addIds(89009)
Undercity_Bat_Creature.Scale.set(0.7)
Undercity_Bat_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Undercity_Bat_Mount = std.Spells.create(MODNAME, 'Undercity_Bat_Mount', 23227)
Undercity_Bat_Mount.Name.enGB.set("Great Undercity Plaguebat");
Undercity_Bat_Mount.Effects.get(0).MiscValueA.set(Undercity_Bat_Creature.ID)
Undercity_Bat_Mount.Icon.setPath('inv_felbatmountforsaken.blp')
Undercity_Bat_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266843)
    });
});

//***************************** */
// Honeyback Harvester
//***************************** */

export const Honeyback_Harvester_Creature = std.CreatureTemplates.create(MODNAME, 'Honeyback_Harvester_Creature', 475)
std.SQL.creature_model_info.add(88623).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Honeyback_Harvester_Creature.Name.enGB.set("Honeyback Harvester")
Honeyback_Harvester_Creature.Models.clearAll()
Honeyback_Harvester_Creature.Models.addIds(88623)
Honeyback_Harvester_Creature.Scale.set(0.7)
Honeyback_Harvester_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Honeyback_Harvester_Mount = std.Spells.create(MODNAME, 'Honeyback_Harvester_Mount', 23227)
Honeyback_Harvester_Mount.Name.enGB.set("Honeyback Harvester");
Honeyback_Harvester_Mount.Effects.get(0).MiscValueA.set(Honeyback_Harvester_Creature.ID)
Honeyback_Harvester_Mount.Icon.setPath('Inv_bee_default.blp')
Honeyback_Harvester_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18136)
    });
});

//***************************** */
// Westfall Donkey
//***************************** */

export const Westfall_Donkey_Creature = std.CreatureTemplates.create(MODNAME, 'Westfall_Donkey_Creature', 475)
std.SQL.creature_model_info.add(88571).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Westfall_Donkey_Creature.Name.enGB.set("Westfall Donkey")
Westfall_Donkey_Creature.Models.clearAll()
Westfall_Donkey_Creature.Models.addIds(88571)
Westfall_Donkey_Creature.Scale.set(1)
Westfall_Donkey_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Westfall_Donkey_Mount = std.Spells.create(MODNAME, 'Westfall_Donkey_Mount', 23227)
Westfall_Donkey_Mount.Name.enGB.set("Westfall Donkey");
Westfall_Donkey_Mount.Effects.get(0).MiscValueA.set(Westfall_Donkey_Creature.ID)
Westfall_Donkey_Mount.Icon.setPath('inv_horse3saddle008_donkey.blp')

//***************************** */
// Great Red Yeti
//***************************** */

export const Red_Yeti_Creature = std.CreatureTemplates.create(MODNAME, 'Red_Yeti_Creature', 475)
std.SQL.creature_model_info.add(87776).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Red_Yeti_Creature.Name.enGB.set("Great Red Yeti")
Red_Yeti_Creature.Models.clearAll()
Red_Yeti_Creature.Models.addIds(87776)
Red_Yeti_Creature.Scale.set(1)
Red_Yeti_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Red_Yeti_Mount = std.Spells.create(MODNAME, 'Red_Yeti_Mount', 23227)
Red_Yeti_Mount.Name.enGB.set("Great Red Yeti");
Red_Yeti_Mount.Effects.get(0).MiscValueA.set(Red_Yeti_Creature.ID)
Red_Yeti_Mount.Icon.setPath('inv_misc_pet_pandaren_yeti.blp')
Red_Yeti_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266844)
    });
});

//***************************** */
// Tainted Deathsteed
//***************************** */

export const Tainted_Deathsteed_Creature = std.CreatureTemplates.create(MODNAME, 'Tainted_Deathsteed_Creature', 475)
std.SQL.creature_model_info.add(75533).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Tainted_Deathsteed_Creature.Name.enGB.set("Tainted Deathsteed")
Tainted_Deathsteed_Creature.Models.clearAll()
Tainted_Deathsteed_Creature.Models.addIds(75533)
Tainted_Deathsteed_Creature.Scale.set(1)
Tainted_Deathsteed_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Tainted_Deathsteed_Mount = std.Spells.create(MODNAME, 'Tainted_Deathsteed_Mount', 23227)
Tainted_Deathsteed_Mount.Name.enGB.set("Tainted Deathsteed");
Tainted_Deathsteed_Mount.Effects.get(0).MiscValueA.set(Tainted_Deathsteed_Creature.ID)
Tainted_Deathsteed_Mount.Icon.setPath('inv_warlockmountshadow.blp')
Tainted_Deathsteed_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(4067)
    });
});

//***************************** */
// Tainted Felsteed
//***************************** */

export const Tainted_Felsteed_Creature = std.CreatureTemplates.create(MODNAME, 'Tainted_Felsteed_Creature', 475)
std.SQL.creature_model_info.add(74303).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Tainted_Felsteed_Creature.Name.enGB.set("Tainted Felsteed")
Tainted_Felsteed_Creature.Models.clearAll()
Tainted_Felsteed_Creature.Models.addIds(74303)
Tainted_Felsteed_Creature.Scale.set(1)
Tainted_Felsteed_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Tainted_FelsteedMount = std.Spells.create(MODNAME, 'Tainted_FelsteedMount', 23227)
Tainted_FelsteedMount.Name.enGB.set("Tainted Felsteed");
Tainted_FelsteedMount.Effects.get(0).MiscValueA.set(Tainted_Felsteed_Creature.ID)
Tainted_FelsteedMount.Icon.setPath('inv_warlockmount.blp')
Tainted_FelsteedMount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(4067)
    });
});


//***************************** */
// Warforged Nightmare
//***************************** */

export const Warforged_NM_Creature = std.CreatureTemplates.create(MODNAME, 'Warforged_NM_Creature', 475)
std.SQL.creature_model_info.add(48863).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Warforged_NM_Creature.Name.enGB.set("Warforged Nightmare")
Warforged_NM_Creature.Models.clearAll()
Warforged_NM_Creature.Models.addIds(48863)
Warforged_NM_Creature.Scale.set(1)
Warforged_NM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Warforged_NM_Mount = std.Spells.create(MODNAME, 'Warforged_NM_Mount', 23227)
Warforged_NM_Mount.Name.enGB.set("Warforged Nightmare");
Warforged_NM_Mount.Effects.get(0).MiscValueA.set(Warforged_NM_Creature.ID)
Warforged_NM_Mount.Icon.setPath('ability_mount_clockworkhorse.blp')
Warforged_NM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18197)
    });
});


//***************************** */
// Kor'kron Juggernaut
//***************************** */

export const Korkron_Creature = std.CreatureTemplates.create(MODNAME, 'Korkron_Creature', 475)
std.SQL.creature_model_info.add(48860).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Korkron_Creature.Name.enGB.set("Kor'kron Juggernaut")
Korkron_Creature.Models.clearAll()
Korkron_Creature.Models.addIds(48860)
Korkron_Creature.Scale.set(1)
Korkron_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Korkron_Mount = std.Spells.create(MODNAME, 'Korkron_Mount', 23227)
Korkron_Mount.Name.enGB.set("Kor'kron Juggernaut");
Korkron_Mount.Effects.get(0).MiscValueA.set(Korkron_Creature.ID)
Korkron_Mount.Icon.setPath('inv_mount_hordescorpiong.blp')
Korkron_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18201)
    });
});

//***************************** */
// Grinning Skullreaver
//***************************** */

export const GS_Creature = std.CreatureTemplates.create(MODNAME, 'GS_Creature', 475)
std.SQL.creature_model_info.add(55907).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GS_Creature.Name.enGB.set("Grinning Skullreaver")
GS_Creature.Models.clearAll()
GS_Creature.Models.addIds(55907)
GS_Creature.Scale.set(1)
GS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GS_Mount = std.Spells.create(MODNAME, 'GS_Mount', 23227)
GS_Mount.Name.enGB.set("Grinning Skullreaver");
GS_Mount.Effects.get(0).MiscValueA.set(GS_Creature.ID)
GS_Mount.Icon.setPath('ability_mount_ravager2mount.blp')
GS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(9424)
    });
});



//***************************** */
// Smoldering Emberwing
//***************************** */

export const Nightbane_Creature = std.CreatureTemplates.create(MODNAME, 'Nightbane_Creature', 475)
std.SQL.creature_model_info.add(48825).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Nightbane_Creature.Name.enGB.set("Smoldering Emberwing")
Nightbane_Creature.Models.clearAll()
Nightbane_Creature.Models.addIds(48825)
Nightbane_Creature.Scale.set(1)
Nightbane_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Nightbane_Mount = std.Spells.create(MODNAME, 'Nightbane_Mount', 23227)
Nightbane_Mount.Name.enGB.set("Smoldering Emberwing");
Nightbane_Mount.Effects.get(0).MiscValueA.set(Nightbane_Creature.ID)
Nightbane_Mount.Icon.setPath('inv_nightbane2mount.blp')
Nightbane_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266845)
    });
});


//***************************** */
// Squeakers
//***************************** */

export const Squakers_Creature = std.CreatureTemplates.create(MODNAME, 'Squakers_Creature', 475)
std.SQL.creature_model_info.add(48826).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Squakers_Creature.Name.enGB.set("Squeakers, the Trickster")
Squakers_Creature.Models.clearAll()
Squakers_Creature.Models.addIds(48826)
Squakers_Creature.Scale.set(1)
Squakers_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Squakers_Mount = std.Spells.create(MODNAME, 'Squakers_Mount', 23227)
Squakers_Mount.Name.enGB.set("Squeakers, the Trickster");
Squakers_Mount.Effects.get(0).MiscValueA.set(Squakers_Creature.ID)
Squakers_Mount.Icon.setPath('inv_ratmount2.blp')
Nightbane_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18051)
    });
});

//***************************** */
// Holy Owl
//***************************** */

export const Owl_Creature = std.CreatureTemplates.create(MODNAME, 'Owl_Creature', 475)
std.SQL.creature_model_info.add(48861).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Owl_Creature.Name.enGB.set("Highpriest's Lightsworn Seeker")
Owl_Creature.Models.clearAll()
Owl_Creature.Models.addIds(48861)
Owl_Creature.Scale.set(1)
Owl_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Owl_Mount = std.Spells.create(MODNAME, 'Owl_Mount', 23227)
Owl_Mount.Name.enGB.set("Highpriest's Lightsworn Seeker");
Owl_Mount.Effects.get(0).MiscValueA.set(Owl_Creature.ID)
Owl_Mount.Icon.setPath('inv_priestmount.blp')
Owl_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18210)
    });
});

//***************************** */
// Alpaca Mount
//***************************** */

export const Alpaca1_Creature = std.CreatureTemplates.create(MODNAME, 'Alpaca1_Creature', 475)
std.SQL.creature_model_info.add(48827).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Alpaca1_Creature.Name.enGB.set("Adventurer's Black Alpaca")
Alpaca1_Creature.Models.clearAll()
Alpaca1_Creature.Models.addIds(48827)
Alpaca1_Creature.Scale.set(1)
Alpaca1_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Alpaca1_Mount = std.Spells.create(MODNAME, 'Alpaca1_Mount', 23227)
Alpaca1_Mount.Name.enGB.set("Adventurer's Black Alpaca");
Alpaca1_Mount.Effects.get(0).MiscValueA.set(Alpaca1_Creature.ID)
Alpaca1_Mount.Icon.setPath('inv_alpacamount_black.blp')
Alpaca1_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18187)
    });
});

//***************************** */
// Alpaca Mount
//***************************** */

export const Alpaca2_Creature = std.CreatureTemplates.create(MODNAME, 'Alpaca2_Creature', 475)
std.SQL.creature_model_info.add(48828).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Alpaca2_Creature.Name.enGB.set("Adventurer's Brown Alpaca")
Alpaca2_Creature.Models.clearAll()
Alpaca2_Creature.Models.addIds(48828)
Alpaca2_Creature.Scale.set(1)
Alpaca2_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Alpaca2_Mount = std.Spells.create(MODNAME, 'Alpaca2_Mount', 23227)
Alpaca2_Mount.Name.enGB.set("Adventurer's Brown Alpaca");
Alpaca2_Mount.Effects.get(0).MiscValueA.set(Alpaca2_Creature.ID)
Alpaca2_Mount.Icon.setPath('inv_alpacamount_brown.blp')
Alpaca2_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18187)
    });
});

//***************************** */
// Alpaca Mount
//***************************** */

export const Alpaca3_Creature = std.CreatureTemplates.create(MODNAME, 'Alpaca3_Creature', 475)
std.SQL.creature_model_info.add(48829).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Alpaca3_Creature.Name.enGB.set("Adventurer's Ivory Alpaca")
Alpaca3_Creature.Models.clearAll()
Alpaca3_Creature.Models.addIds(48829)
Alpaca3_Creature.Scale.set(1)
Alpaca3_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Alpaca3_Mount = std.Spells.create(MODNAME, 'Alpaca3_Mount', 23227)
Alpaca3_Mount.Name.enGB.set("Adventurer's Ivory Alpaca");
Alpaca3_Mount.Effects.get(0).MiscValueA.set(Alpaca3_Creature.ID)
Alpaca3_Mount.Icon.setPath('inv_alpacamount_ivory.blp')
Alpaca3_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18187)
    });
});

//***************************** */
// Alpaca Mount
//***************************** */

export const Alpaca4_Creature = std.CreatureTemplates.create(MODNAME, 'Alpaca4_Creature', 475)
std.SQL.creature_model_info.add(48830).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Alpaca4_Creature.Name.enGB.set("Adventurer's White Alpaca")
Alpaca4_Creature.Models.clearAll()
Alpaca4_Creature.Models.addIds(48830)
Alpaca4_Creature.Scale.set(1)
Alpaca4_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Alpaca4_Mount = std.Spells.create(MODNAME, 'Alpaca4_Mount', 23227)
Alpaca4_Mount.Name.enGB.set("Adventurer's White Alpaca");
Alpaca4_Mount.Effects.get(0).MiscValueA.set(Alpaca4_Creature.ID)
Alpaca4_Mount.Icon.setPath('inv_alpacamount_white.blp')
Alpaca4_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18187)
    });
});

//***************************** */
// Alpaca Mount
//***************************** */

export const Alpaca5_Creature = std.CreatureTemplates.create(MODNAME, 'Alpaca5_Creature', 475)
std.SQL.creature_model_info.add(48831).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Alpaca5_Creature.Name.enGB.set("Adventurer's Yellow Alpaca")
Alpaca5_Creature.Models.clearAll()
Alpaca5_Creature.Models.addIds(48831)
Alpaca5_Creature.Scale.set(1)
Alpaca5_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Alpaca5_Mount = std.Spells.create(MODNAME, 'Alpaca5_Mount', 23227)
Alpaca5_Mount.Name.enGB.set("Adventurer's Yellow Alpaca");
Alpaca5_Mount.Effects.get(0).MiscValueA.set(Alpaca5_Creature.ID)
Alpaca5_Mount.Icon.setPath('inv_alpacamount_yellow.blp')
Alpaca5_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18187)
    });
});

//***************************** */
// Purple Fire Raven
//***************************** */

export const Umbral_Raven_Creature = std.CreatureTemplates.create(MODNAME, 'Umbral_Raven_Creature', 475)
std.SQL.creature_model_info.add(49010).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Umbral_Raven_Creature.Name.enGB.set("Darkflame Raven Lord")
Umbral_Raven_Creature.Models.clearAll()
Umbral_Raven_Creature.Models.addIds(49010)
Umbral_Raven_Creature.Scale.set(1)
Umbral_Raven_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Umbral_Raven_Mount = std.Spells.create(MODNAME, 'Umbral_Raven_Mount', 41252)
Umbral_Raven_Mount.Name.enGB.set("Darkflame Raven Lord");
Umbral_Raven_Mount.Effects.get(0).MiscValueA.set(Umbral_Raven_Creature.ID)
Umbral_Raven_Mount.Icon.setPath('ability_mount_fireravengodmountpurple.blp')

//***************************** */
// Dawnforge Ram
//***************************** */

export const Dawnforge_Ram_Creature = std.CreatureTemplates.create(MODNAME, 'Dawnforge_Ram_Creature', 475)
std.SQL.creature_model_info.add(49018).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Dawnforge_Ram_Creature.Name.enGB.set("Dawnforge Ram")
Dawnforge_Ram_Creature.Models.clearAll()
Dawnforge_Ram_Creature.Models.addIds(49018)
Dawnforge_Ram_Creature.Scale.set(1)
Dawnforge_Ram_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Dawnforge_Ram_Mount = std.Spells.create(MODNAME, 'Dawnforge_Ram_Mount', 41252)
Dawnforge_Ram_Mount.Name.enGB.set("Dawnforge Ram");
Dawnforge_Ram_Mount.Effects.get(0).MiscValueA.set(Dawnforge_Ram_Creature.ID)
Dawnforge_Ram_Mount.Icon.setPath('inv_dwarfpaladinram_gold.blp')
Dawnforge_Ram_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(4068)
    });
});

//***************************** */
// Felblood Talbuk
//***************************** */

export const FB_Talbuk_Creature = std.CreatureTemplates.create(MODNAME, 'FB_Talbuk_Creature', 475)
std.SQL.creature_model_info.add(48610).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FB_Talbuk_Creature.Name.enGB.set("Felblood Talbuk")
FB_Talbuk_Creature.Models.clearAll()
FB_Talbuk_Creature.Models.addIds(48610)
FB_Talbuk_Creature.Scale.set(1)
FB_Talbuk_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FB_Talbuk_Mount = std.Spells.create(MODNAME, 'FB_Talbuk_Mount', 34790)
FB_Talbuk_Mount.Name.enGB.set("Felblood Talbuk");
FB_Talbuk_Mount.Effects.get(0).MiscValueA.set(FB_Talbuk_Creature.ID)
FB_Talbuk_Mount.Icon.setPath('inv_argustalbukmount_purple.blp')

//***************************** */
// Mystic Runesaber
//***************************** */

export const Runesaber_Creature = std.CreatureTemplates.create(MODNAME, 'Runesaber_Creature', 475)
std.SQL.creature_model_info.add(48605).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Runesaber_Creature.Name.enGB.set("Mystical Runesaber")
Runesaber_Creature.Models.clearAll()
Runesaber_Creature.Models.addIds(48605)
Runesaber_Creature.Scale.set(1)
Runesaber_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Runesaber_Mount = std.Spells.create(MODNAME, 'Runesaber_Mount', 42777)
Runesaber_Mount.Name.enGB.set("Mystical Runesaber");
Runesaber_Mount.Effects.get(0).MiscValueA.set(Runesaber_Creature.ID)
Runesaber_Mount.Icon.setPath('inv_saber2mount.blp')
Runesaber_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18066)
    });
});

//***************************** */
// Corehound
//***************************** */

export const Corehound_Creature = std.CreatureTemplates.create(MODNAME, 'Corehound_Creature', 475)
std.SQL.creature_model_info.add(48600).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Corehound_Creature.Name.enGB.set("Molten Corehound")
Corehound_Creature.Models.clearAll()
Corehound_Creature.Models.addIds(48600)
Corehound_Creature.Scale.set(1)
Corehound_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Corehound_Mount = std.Spells.create(MODNAME, 'Corehound_Mount', 42777)
Corehound_Mount.Name.enGB.set("Molten Corehound");
Corehound_Mount.Effects.get(0).MiscValueA.set(Corehound_Creature.ID)
Corehound_Mount.Icon.setPath('ability_hunter_pet_corehound.blp')
Corehound_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(6819)
    });
});

//***************************** */
// Albino Hyena
//***************************** */

export const Hyena_Creature = std.CreatureTemplates.create(MODNAME, 'Hyena_Creature', 475)
std.SQL.creature_model_info.add(48603).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Hyena_Creature.Name.enGB.set("Warlord's Albino Hyena")
Hyena_Creature.Models.clearAll()
Hyena_Creature.Models.addIds(48603)
Hyena_Creature.Scale.set(1)
Hyena_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Hyena_Mount = std.Spells.create(MODNAME, 'Hyena_Mount', 42777)
Hyena_Mount.Name.enGB.set("Warlord's Albino Hyena");
Hyena_Mount.Effects.get(0).MiscValueA.set(Hyena_Creature.ID)
Hyena_Mount.Icon.setPath('inv_hyena2mount_light.blp')
Hyena_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18036)
    });
});


//***************************** */
// Fire Raven
//***************************** */

export const Fire_Raven_Creature = std.CreatureTemplates.create(MODNAME, 'Fire_Raven_Creature', 475)
std.SQL.creature_model_info.add(48616).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Fire_Raven_Creature.Name.enGB.set("Flame Raven Lord")
Fire_Raven_Creature.Models.clearAll()
Fire_Raven_Creature.Models.addIds(48616)
Fire_Raven_Creature.Scale.set(1)
Fire_Raven_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Fire_Raven_Mount = std.Spells.create(MODNAME, 'Fire_Raven_Mount', 41252)
Fire_Raven_Mount.Name.enGB.set("Flame Raven Lord");
Fire_Raven_Mount.Effects.get(0).MiscValueA.set(Fire_Raven_Creature.ID)
Fire_Raven_Mount.Icon.setPath('ability_mount_fireravengodmount.blp')

//***************************** */
// Vicious Golden King
//***************************** */

export const VGK_Creature = std.CreatureTemplates.create(MODNAME, 'VGK_Creature', 475)
std.SQL.creature_model_info.add(48620).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VGK_Creature.Name.enGB.set("Vicious Golden King")
VGK_Creature.Models.clearAll()
VGK_Creature.Models.addIds(48620)
VGK_Creature.Scale.set(1)
VGK_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VGKMount = std.Spells.create(MODNAME, 'VGKMount', 16055)
VGKMount.Name.enGB.set("Vicious Golden King");
VGKMount.Effects.get(0).MiscValueA.set(VGK_Creature.ID)
VGKMount.Icon.setPath('inv_viciousgoldenking.blp')
VGKMount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18030)
    });
});

//***************************** */
// Black Vicious War Steed
//***************************** */

export const Black_VWS_Creature = std.CreatureTemplates.create(MODNAME, 'Black_VWS_Creature', 475)
std.SQL.creature_model_info.add(48621).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Black_VWS_Creature.Name.enGB.set("Black Vicious War Steed")
Black_VWS_Creature.Models.clearAll()
Black_VWS_Creature.Models.addIds(48621)
Black_VWS_Creature.Scale.set(1)
Black_VWS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Black_VWS_Mount = std.Spells.create(MODNAME, 'Black_VWS_Mount', 23227)
Black_VWS_Mount.Name.enGB.set("Black Vicious War Steed");
Black_VWS_Mount.Effects.get(0).MiscValueA.set(Black_VWS_Creature.ID)
Black_VWS_Mount.Icon.setPath('ability_mount_alliancepvpmount.blp')

//***************************** */
// White Vicious Bonesteed
//***************************** */

export const White_VBS_Creature = std.CreatureTemplates.create(MODNAME, 'White_VBS_Creature', 475)
std.SQL.creature_model_info.add(48618).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
White_VBS_Creature.Name.enGB.set("Vicious White Bonesteed")
White_VBS_Creature.Models.clearAll()
White_VBS_Creature.Models.addIds(48618)
White_VBS_Creature.Scale.set(1)
White_VBS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const White_VBS = std.Spells.create(MODNAME, 'White_VBS', 17481)
White_VBS.Name.enGB.set("Vicious White Bonesteed");
White_VBS.Effects.get(0).MiscValueA.set(White_VBS_Creature.ID)
White_VBS.Icon.setPath('inv_skeletalwarhorse_01_purple.blp')

//***************************** */
// Steel Warhorse
//***************************** */

export const Steel_Warhorse_Creature = std.CreatureTemplates.create(MODNAME, 'Steel_Warhorse_Creature', 475)
std.SQL.creature_model_info.add(48617).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Steel_Warhorse_Creature.Name.enGB.set("Ironbound Wraithcharger")
Steel_Warhorse_Creature.Models.clearAll()
Steel_Warhorse_Creature.Models.addIds(48617)
Steel_Warhorse_Creature.Scale.set(1)
Steel_Warhorse_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Steel_Warhorse_Mount = std.Spells.create(MODNAME, 'Steel_Warhorse_Mount', 17481)
Steel_Warhorse_Mount.Name.enGB.set("Ironbound Wraithcharger");
Steel_Warhorse_Mount.Effects.get(0).MiscValueA.set(Steel_Warhorse_Creature.ID)
Steel_Warhorse_Mount.Icon.setPath('ability_mount_steelwarhorse.blp')

//***************************** */
// Vicious Black War Wolf
//***************************** */

export const VBWF_Creature = std.CreatureTemplates.create(MODNAME, 'VBWF_Creature', 475)
std.SQL.creature_model_info.add(48622).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VBWF_Creature.Name.enGB.set("Vicious Black War Wolf")
VBWF_Creature.Models.clearAll()
VBWF_Creature.Models.addIds(48622)
VBWF_Creature.Scale.set(1)
VBWF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VBWF_Mount = std.Spells.create(MODNAME, 'VBWF_Mount', 22724)
VBWF_Mount.Name.enGB.set("Vicious Black War Wolf");
VBWF_Mount.Effects.get(0).MiscValueA.set(VBWF_Creature.ID)
VBWF_Mount.Icon.setPath('ability_mount_hordepvpmount.blp')

//***************************** */
// Vicious Black Bonesteed
//***************************** */

export const Black_VBS_Creature = std.CreatureTemplates.create(MODNAME, 'Black_VBS_Creature', 475)
std.SQL.creature_model_info.add(48631).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Black_VBS_Creature.Name.enGB.set("Vicious Black Bonesteed")
Black_VBS_Creature.Models.clearAll()
Black_VBS_Creature.Models.addIds(48631)
Black_VBS_Creature.Scale.set(1)
Black_VBS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Black_VBS = std.Spells.create(MODNAME, 'Black_VBS', 17481)
Black_VBS.Name.enGB.set("Vicious Black Bonesteed");
Black_VBS.Effects.get(0).MiscValueA.set(Black_VBS_Creature.ID)
Black_VBS.Icon.setPath('inv_skeletalwarhorse_01_purple.blp')

//***************************** */
// Clan Wolf
//***************************** */

export const Clan_Wolf_Creature = std.CreatureTemplates.create(MODNAME, 'Clan_Wolf_Creature', 475)
std.SQL.creature_model_info.add(48630).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Clan_Wolf_Creature.Name.enGB.set("Magh'ar Direwolf")
Clan_Wolf_Creature.Models.clearAll()
Clan_Wolf_Creature.Models.addIds(48630)
Clan_Wolf_Creature.Scale.set(1)
Clan_Wolf_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Clan_Wolf_Mount = std.Spells.create(MODNAME, 'Clan_Wolf_Mount', 22724)
Clan_Wolf_Mount.Name.enGB.set("Magh'ar Direwolf");
Clan_Wolf_Mount.Effects.get(0).MiscValueA.set(Clan_Wolf_Creature.ID)
Clan_Wolf_Mount.Icon.setPath('inv_orcclanworg.blp')

//***************************** */
// Tomb Stalker
//***************************** */

export const Undead_Raptor_Creature = std.CreatureTemplates.create(MODNAME, 'Undead_Raptor_Creature', 475)
std.SQL.creature_model_info.add(48624).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Undead_Raptor_Creature.Name.enGB.set("Tomb Stalker")
Undead_Raptor_Creature.Models.clearAll()
Undead_Raptor_Creature.Models.addIds(48624)
Undead_Raptor_Creature.Scale.set(1)
Undead_Raptor_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const undead_Raptor_Mount = std.Spells.create(MODNAME, 'undead_Raptor_Mount', 22721)
undead_Raptor_Mount.Name.enGB.set("Tomb Stalker");
undead_Raptor_Mount.Effects.get(0).MiscValueA.set(Undead_Raptor_Creature.ID)
undead_Raptor_Mount.Icon.setPath('inv_armoredraptorundead.blp')

//***************************** */
// Vicious White Warsaber
//***************************** */

export const VWW_Creature = std.CreatureTemplates.create(MODNAME, 'VWW_Creature', 475)
std.SQL.creature_model_info.add(48640).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VWW_Creature.Name.enGB.set("Vicious White Warsaber")
VWW_Creature.Models.clearAll()
VWW_Creature.Models.addIds(48640)
VWW_Creature.Scale.set(1)
VWW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VWW_Mount = std.Spells.create(MODNAME, 'VWW_Mount', 63637)
VWW_Mount.Name.enGB.set("Vicious White Warsaber");
VWW_Mount.Effects.get(0).MiscValueA.set(VWW_Creature.ID)
VWW_Mount.Icon.setPath('ability_mount_warnightsaber.blp')

//***************************** */
// Red Valajar Stormwing
//***************************** */

export const VHSW_Creature = std.CreatureTemplates.create(MODNAME, 'VHSW_Creature', 475)
std.SQL.creature_model_info.add(48643).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VHSW_Creature.Name.enGB.set("Red Valajar Stormwing")
VHSW_Creature.Models.clearAll()
VHSW_Creature.Models.addIds(48643)
VHSW_Creature.Scale.set(1)
VHSW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VHSW_Mount = std.Spells.create(MODNAME, 'VHSW_Mount', 59569)
VHSW_Mount.Name.enGB.set("Red Valajar Stormwing");
VHSW_Mount.Effects.get(0).MiscValueA.set(VHSW_Creature.ID)
VHSW_Mount.Icon.setPath('inv_misc_stormdragonred.blp')

//***************************** */
// Sky Golem
//***************************** */

export const SkyGolem_Creature = std.CreatureTemplates.create(MODNAME, 'SkyGolem_Creature', 475)
std.SQL.creature_model_info.add(48650).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SkyGolem_Creature.Name.enGB.set("Sky Golem")
SkyGolem_Creature.Models.clearAll()
SkyGolem_Creature.Models.addIds(48650)
SkyGolem_Creature.Scale.set(1)
SkyGolem_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Sky_GolemMount = std.Spells.create(MODNAME, 'Sky_GolemMount', 60424)
Sky_GolemMount.Name.enGB.set("Sky Golem");
Sky_GolemMount.Effects.get(0).MiscValueA.set(SkyGolem_Creature.ID)
Sky_GolemMount.Icon.setPath('ability_mount_shreddermount.blp')

//***************************** */
// Obsidian Worldbreaker
//***************************** */

export const OW_Creature = std.CreatureTemplates.create(MODNAME, 'OW_Creature', 475)
std.SQL.creature_model_info.add(48731).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
OW_Creature.Name.enGB.set("Obsidian Worldbreaker")
OW_Creature.Models.clearAll()
OW_Creature.Models.addIds(48731)
OW_Creature.Scale.set(1)
OW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ow_Mount = std.Spells.create(MODNAME, 'ow_Mount', 59569)
ow_Mount.Name.enGB.set("Obsidian Worldbreaker");
ow_Mount.Effects.get(0).MiscValueA.set(OW_Creature.ID)
ow_Mount.Icon.setPath('achievment_boss_madnessofdeathwing.blp')

//***************************** */
// Pandaren Kite
//***************************** */

export const PK_Creature = std.CreatureTemplates.create(MODNAME, 'PK_Creature', 33030)
std.SQL.creature_model_info.add(49143).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
PK_Creature.Name.enGB.set("Pandaren Kite")
PK_Creature.Models.clearAll()
PK_Creature.Models.addIds(49143)
PK_Creature.Scale.set(1)
PK_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const PK_Mount = std.Spells.create(MODNAME, 'PK_Mount', 61309)
PK_Mount.Name.enGB.set("Pandaren Kite");
PK_Mount.Effects.get(0).MiscValueA.set(PK_Creature.ID)
PK_Mount.Icon.setPath('item_spellcloththread.blp')

//***************************** */
// infinite timereaver
//***************************** */

export const ITR_Creature = std.CreatureTemplates.create(MODNAME, 'ITR_Creature', 475)
std.SQL.creature_model_info.add(49123).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ITR_Creature.Name.enGB.set("Infinite Timereaver")
ITR_Creature.Models.clearAll()
ITR_Creature.Models.addIds(49123)
ITR_Creature.Scale.set(1)
ITR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ITR_Mount = std.Spells.create(MODNAME, 'ITR_Mount', 59569)
ITR_Mount.Name.enGB.set("Infinite Timereaver");
ITR_Mount.Effects.get(0).MiscValueA.set(ITR_Creature.ID)
ITR_Mount.Icon.setPath('inv_infinitedragonmount.blp')
ITR_Mount.Effects.get(1).PointsBase.set(-1)
ITR_Mount.Effects.get(1).PointsDieSides.set(1)

//***************************** */
// Heavenly Onyx Cloud Serpent
//***************************** */

export const HOCS_Creature = std.CreatureTemplates.create(MODNAME, 'HOCS_Creature', 475)
std.SQL.creature_model_info.add(49132).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HOCS_Creature.Name.enGB.set("Heavenly Onyx Cloud Serpent")
HOCS_Creature.Models.clearAll()
HOCS_Creature.Models.addIds(49132)
HOCS_Creature.Scale.set(1)
HOCS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HOCS_Mount = std.Spells.create(MODNAME, 'HOCS_Mount', 59569)
HOCS_Mount.Name.enGB.set("Heavenly Onyx Cloud Serpent");
HOCS_Mount.Effects.get(0).MiscValueA.set(HOCS_Creature.ID)
HOCS_Mount.Icon.setPath('inv_pandarenserpentgodmount_black.blp')
HOCS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18956)
    });
});

//***************************** */
// DK Mount Unholy
//***************************** */

export const VBV_Creature = std.CreatureTemplates.create(MODNAME, 'VBV_Creature', 475)
std.SQL.creature_model_info.add(73785).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VBV_Creature.Name.enGB.set("Decaying Vilebrood Vanquisher")
VBV_Creature.Models.clearAll()
VBV_Creature.Models.addIds(73785)
VBV_Creature.Scale.set(1)
VBV_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VBV_Mount = std.Spells.create(MODNAME, 'VBV_Mount', 59569)
VBV_Mount.Name.enGB.set("Decaying Vilebrood Vanquisher");
VBV_Mount.Effects.get(0).MiscValueA.set(VBV_Creature.ID)
VBV_Mount.Icon.setPath('ability_mount_dkmount.blp')

//***************************** */
// Shark Ray
//***************************** */

export const SR_Creature = std.CreatureTemplates.create(MODNAME, 'SR_Creature', 475)
std.SQL.creature_model_info.add(49136).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SR_Creature.Name.enGB.set("Silent Glider")
SR_Creature.Models.clearAll()
SR_Creature.Models.addIds(49136)
SR_Creature.Scale.set(1)
SR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SR_Mount = std.Spells.create(MODNAME, 'SR_Mount', 59569)
SR_Mount.Name.enGB.set("Silent Glider");
SR_Mount.Effects.get(0).MiscValueA.set(SR_Creature.ID)
SR_Mount.Icon.setPath('inv_sharkraymount_3.blp')
SR_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266846)
    });
});

//***************************** */
// Felfire Hawk
//***************************** */

export const FFH_Creature = std.CreatureTemplates.create(MODNAME, 'FFH_Creature', 475)
std.SQL.creature_model_info.add(49137).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FFH_Creature.Name.enGB.set("Felfire Hawk")
FFH_Creature.Models.clearAll()
FFH_Creature.Models.addIds(49137)
FFH_Creature.Scale.set(1)
FFH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FFH_Mount = std.Spells.create(MODNAME, 'FFH_Mount', 59569)
FFH_Mount.Name.enGB.set("Felfire Hawk");
FFH_Mount.Effects.get(0).MiscValueA.set(FFH_Creature.ID)
FFH_Mount.Icon.setPath('inv_misc_summerfest_braziergreen.blp')
FFH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18966)
    });
});

//***************************** */
// Vicious War Wolf
//***************************** */

export const VWF_Creature = std.CreatureTemplates.create(MODNAME, 'VWF_Creature', 475)
std.SQL.creature_model_info.add(49138).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VWF_Creature.Name.enGB.set("Vicious War Wolf")
VWF_Creature.Models.clearAll()
VWF_Creature.Models.addIds(49138)
VWF_Creature.Scale.set(1)
VWF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VWF_Mount = std.Spells.create(MODNAME, 'VWF_Mount', 22724)
VWF_Mount.Name.enGB.set("Vicious War Wolf");
VWF_Mount.Effects.get(0).MiscValueA.set(VWF_Creature.ID)
VWF_Mount.Icon.setPath('ability_mount_hordepvpmount.blp')

//***************************** */
// Shadowblade's Murderous Omen
//***************************** */

export const SBMO_Creature = std.CreatureTemplates.create(MODNAME, 'SBMO_Creature', 475)
std.SQL.creature_model_info.add(49145).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SBMO_Creature.Name.enGB.set("Shadowblade's Murderous Omen")
SBMO_Creature.Models.clearAll()
SBMO_Creature.Models.addIds(49145)
SBMO_Creature.Scale.set(1)
SBMO_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SBMO_Mount = std.Spells.create(MODNAME, 'SBMO_Mount', 22724)
SBMO_Mount.Name.enGB.set("Shadowblade's Murderous Omen");
SBMO_Mount.Effects.get(0).MiscValueA.set(SBMO_Creature.ID)
SBMO_Mount.Icon.setPath('inv_roguemount_blue.blp')
SBMO_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19004)
    });
});

//***************************** */
// Ny'alotha Allseer
//***************************** */

export const NA_Creature = std.CreatureTemplates.create(MODNAME, 'NA_Creature', 475)
std.SQL.creature_model_info.add(49146).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
NA_Creature.Name.enGB.set("Ny'alotha Allseer")
NA_Creature.Models.clearAll()
NA_Creature.Models.addIds(49146)
NA_Creature.Scale.set(1)
NA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const NA_Mount = std.Spells.create(MODNAME, 'NA_Mount', 22724)
NA_Mount.Name.enGB.set("Ny'alotha Allseer");
NA_Mount.Effects.get(0).MiscValueA.set(NA_Creature.ID)
NA_Mount.Icon.setPath('inv_eyeballjellyfishmount.blp')
NA_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19012)
    });
});

//***************************** */
// Glorious Felcrusher
//***************************** */

export const GF_Creature = std.CreatureTemplates.create(MODNAME, 'GF_Creature', 475)
std.SQL.creature_model_info.add(49160).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GF_Creature.Name.enGB.set("Glorious Felcrusher")
GF_Creature.Models.clearAll()
GF_Creature.Models.addIds(49160)
GF_Creature.Scale.set(1)
GF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GF_Mount = std.Spells.create(MODNAME, 'GF_Mount', 48027)
GF_Mount.Name.enGB.set("Glorious Felcrusher");
GF_Mount.Effects.get(0).MiscValueA.set(GF_Creature.ID)
GF_Mount.Icon.setPath('inv_lightforgedelekk.blp')

//***************************** */
// Wriggling Parasite
//***************************** */

export const MM_Creature = std.CreatureTemplates.create(MODNAME, 'MM_Creature', 475)
std.SQL.creature_model_info.add(49163).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
MM_Creature.Name.enGB.set("Wriggling Parasite")
MM_Creature.Models.clearAll()
MM_Creature.Models.addIds(49163)
MM_Creature.Scale.set(1)
MM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const MM_Mount = std.Spells.create(MODNAME, 'MM_Mount', 22724)
MM_Mount.Name.enGB.set("Wriggling Parasite");
MM_Mount.Effects.get(0).MiscValueA.set(MM_Creature.ID)
MM_Mount.Icon.setPath('inv_nzothserpentmount_purple.blp')
MM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19022)
    });
});

//***************************** */
// Highlord's Vigilant Charger
//***************************** */

export const VHVC_Creature = std.CreatureTemplates.create(MODNAME, 'VHVC_Creature', 475)
std.SQL.creature_model_info.add(49164).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VHVC_Creature.Name.enGB.set("Violet Highlord's Vigilant Charger")
VHVC_Creature.Models.clearAll()
VHVC_Creature.Models.addIds(49164)
VHVC_Creature.Scale.set(1)
VHVC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VHVC_Mount = std.Spells.create(MODNAME, 'VHVC_Mount', 34767)
VHVC_Mount.Name.enGB.set("Violet Highlord's Vigilant Charger");
VHVC_Mount.Effects.get(0).MiscValueA.set(VHVC_Creature.ID)
VHVC_Mount.Icon.setPath('inv_paladinmount_purple.blp')

//***************************** */
// Shark Ray
//***************************** */

export const SRB_Creature = std.CreatureTemplates.create(MODNAME, 'SRB_Creature', 475)
std.SQL.creature_model_info.add(90725).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SRB_Creature.Name.enGB.set("Ankoan Wavray")
SRB_Creature.Models.clearAll()
SRB_Creature.Models.addIds(90725)
SRB_Creature.Scale.set(1)
SRB_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SRB_Mount = std.Spells.create(MODNAME, 'SRB_Mount', 59569)
SRB_Mount.Name.enGB.set("Ankoan Wavray");
SRB_Mount.Effects.get(0).MiscValueA.set(SRB_Creature.ID)
SRB_Mount.Icon.setPath('inv_sharkraymount_1.blp')
SRB_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266846)
    });
});

//***************************** */
// Shark Ray
//***************************** */

export const SRR_Creature = std.CreatureTemplates.create(MODNAME, 'SRR_Creature', 475)
std.SQL.creature_model_info.add(90727).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SRR_Creature.Name.enGB.set("Crimson Wavray")
SRR_Creature.Models.clearAll()
SRR_Creature.Models.addIds(90727)
SRR_Creature.Scale.set(1)
SRR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SRR_Mount = std.Spells.create(MODNAME, 'SRR_Mount', 59569)
SRR_Mount.Name.enGB.set("Crimson Wavray");
SRR_Mount.Effects.get(0).MiscValueA.set(SRR_Creature.ID)
SRR_Mount.Icon.setPath('inv_sharkraymount_2.blp')
SRR_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266846)
    });
});

//***************************** */
// Shark Ray
//***************************** */

export const SRY_Creature = std.CreatureTemplates.create(MODNAME, 'SRY_Creature', 475)
std.SQL.creature_model_info.add(90729).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SRY_Creature.Name.enGB.set("Azshari Bloatray")
SRY_Creature.Models.clearAll()
SRY_Creature.Models.addIds(90729)
SRY_Creature.Scale.set(1)
SRY_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SRY_Mount = std.Spells.create(MODNAME, 'SRY_Mount', 59569)
SRY_Mount.Name.enGB.set("Azshari Bloatray");
SRY_Mount.Effects.get(0).MiscValueA.set(SRY_Creature.ID)
SRY_Mount.Icon.setPath('inv_sharkraymount_4.blp')
SRY_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266846)
    });
});

//***************************** */
// Nightsaber
//***************************** */

export const N_Creature = std.CreatureTemplates.create(MODNAME, 'N_Creature', 475)
std.SQL.creature_model_info.add(48746).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
N_Creature.Name.enGB.set("Kaldorei Nightsaber")
N_Creature.Models.clearAll()
N_Creature.Models.addIds(48746)
N_Creature.Scale.set(1)
N_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const N_Mount = std.Spells.create(MODNAME, 'N_Mount', 63637)
N_Mount.Name.enGB.set("Kaldorei Nightsaber");
N_Mount.Effects.get(0).MiscValueA.set(N_Creature.ID)
N_Mount.Icon.setPath('inv_nightsaber2mount.blp')

//***************************** */
// Crimsonback Harvester
//***************************** */

export const Red_Harvester_Creature = std.CreatureTemplates.create(MODNAME, 'Red_Harvester_Creature', 475)
std.SQL.creature_model_info.add(92491).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Red_Harvester_Creature.Name.enGB.set("Gingerback Harvester")
Red_Harvester_Creature.Models.clearAll()
Red_Harvester_Creature.Models.addIds(92491)
Red_Harvester_Creature.Scale.set(1)
Red_Harvester_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Red_Harvester_Mount = std.Spells.create(MODNAME, 'Red_Harvester_Mount', 23227)
Red_Harvester_Mount.Name.enGB.set("Gingerback Harvester");
Red_Harvester_Mount.Effects.get(0).MiscValueA.set(Red_Harvester_Creature.ID)
Red_Harvester_Mount.Icon.setPath('inv_beemount.blp')
Red_Harvester_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18136)
    });
});

//***************************** */
// Shadeback Harvester
//***************************** */

export const Black_Harvester_Creature = std.CreatureTemplates.create(MODNAME, 'Black_Harvester_Creature', 475)
std.SQL.creature_model_info.add(92492).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Black_Harvester_Creature.Name.enGB.set("Shadeback Harvester")
Black_Harvester_Creature.Models.clearAll()
Black_Harvester_Creature.Models.addIds(92492)
Black_Harvester_Creature.Scale.set(1)
Black_Harvester_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Black_Harvester_Mount = std.Spells.create(MODNAME, 'Black_Harvester_Mount', 23227)
Black_Harvester_Mount.Name.enGB.set("Shadeback Harvester");
Black_Harvester_Mount.Effects.get(0).MiscValueA.set(Black_Harvester_Creature.ID)
Black_Harvester_Mount.Icon.setPath('inv_bee_black.blp')
Black_Harvester_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18136)
    });
});

//***************************** */
// Explorer's Dunetrekker
//***************************** */

export const ED_Creature = std.CreatureTemplates.create(MODNAME, 'ED_Creature', 475)
std.SQL.creature_model_info.add(93203).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ED_Creature.Name.enGB.set("Explorer's Dunetrekker")
ED_Creature.Models.clearAll()
ED_Creature.Models.addIds(93203)
ED_Creature.Scale.set(0.7)
ED_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ED_Mount = std.Spells.create(MODNAME, 'ED_Mount', 60424)
ED_Mount.Name.enGB.set("Explorer's Dunetrekker");
ED_Mount.Effects.get(0).MiscValueA.set(ED_Creature.ID)
ED_Mount.Icon.setPath('ability_mount_camel_tan.blp')
ED_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18192)
    });
});


//***************************** */
// Silverwind Larian Mount
//***************************** */

export const SL_Creature = std.CreatureTemplates.create(MODNAME, 'SL_Creature', 475)
std.SQL.creature_model_info.add(93770).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SL_Creature.Name.enGB.set("Silverwind Larian")
SL_Creature.Models.clearAll()
SL_Creature.Models.addIds(93770)
SL_Creature.Scale.set(1)
SL_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SL_Mount = std.Spells.create(MODNAME, 'SL_Mount', 36702)
SL_Mount.Name.enGB.set("Silverwind Larian");
SL_Mount.Effects.get(0).MiscValueA.set(SL_Creature.ID)
SL_Mount.Icon.setPath('Inv_wingedlion2mount_silver.blp')
SL_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266837)
    });
});

//***************************** */
// Gilded Prowler Mount
//***************************** */

export const GP_Creature = std.CreatureTemplates.create(MODNAME, 'GP_Creature', 475)
std.SQL.creature_model_info.add(93771).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GP_Creature.Name.enGB.set("Gilded Prowler")
GP_Creature.Models.clearAll()
GP_Creature.Models.addIds(93771)
GP_Creature.Scale.set(1)
GP_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const gp_Mount = std.Spells.create(MODNAME, 'gp_Mount', 36702)
gp_Mount.Name.enGB.set("Gilded Prowler");
gp_Mount.Effects.get(0).MiscValueA.set(GP_Creature.ID)
gp_Mount.Icon.setPath('Inv_wingedlion2mount.blp')
gp_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266837)
    });
});

//***************************** */
// Ardenweald Runestag Mount
//***************************** */

export const AR_Creature = std.CreatureTemplates.create(MODNAME, 'AR_Creature', 475)
std.SQL.creature_model_info.add(94339).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AR_Creature.Name.enGB.set("Ardenweald Runestag")
AR_Creature.Models.clearAll()
AR_Creature.Models.addIds(94339)
AR_Creature.Scale.set(1)
AR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AR_Mount = std.Spells.create(MODNAME, 'AR_Mount', 39318)
AR_Mount.Name.enGB.set("Teal Ardenweald Runestag");
AR_Mount.Effects.get(0).MiscValueA.set(AR_Creature.ID)
AR_Mount.Icon.setPath('Inv_ardenwealdstagmount_teal.blp')

//***************************** */
// Ardenweald Runestag Mount
//***************************** */

export const ARB_Creature = std.CreatureTemplates.create(MODNAME, 'ARB_Creature', 475)
std.SQL.creature_model_info.add(94340).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ARB_Creature.Name.enGB.set("Ardenweald Runestag")
ARB_Creature.Models.clearAll()
ARB_Creature.Models.addIds(94340)
ARB_Creature.Scale.set(1)
ARB_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ARB_Mount = std.Spells.create(MODNAME, 'ARB_Mount', 39318)
ARB_Mount.Name.enGB.set("Dark Ardenweald Runestag");
ARB_Mount.Effects.get(0).MiscValueA.set(ARB_Creature.ID)
ARB_Mount.Icon.setPath('inv_ardenwealdstagmount_dark.blp')

//***************************** */
// Ardenweald Runestag Mount
//***************************** */

export const ARW_Creature = std.CreatureTemplates.create(MODNAME, 'ARW_Creature', 475)
std.SQL.creature_model_info.add(94341).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ARW_Creature.Name.enGB.set("White Ardenweald Runestag")
ARW_Creature.Models.clearAll()
ARW_Creature.Models.addIds(94341)
ARW_Creature.Scale.set(1)
ARW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ARW_Mount = std.Spells.create(MODNAME, 'ARW_Mount', 39318)
ARW_Mount.Name.enGB.set("White Ardenweald Runestag");
ARW_Mount.Effects.get(0).MiscValueA.set(ARW_Creature.ID)
ARW_Mount.Icon.setPath('inv_ardenwealdstagmount_white.blp')

//***************************** */
// Umbral Scythehorn
//***************************** */

export const USH_Creature = std.CreatureTemplates.create(MODNAME, 'USH_Creature', 475)
std.SQL.creature_model_info.add(94344).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
USH_Creature.Name.enGB.set("Umbral Scythehorn")
USH_Creature.Models.clearAll()
USH_Creature.Models.addIds(94344)
USH_Creature.Scale.set(1)
USH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const USH_Mount = std.Spells.create(MODNAME, 'USH_Mount', 36702)
USH_Mount.Name.enGB.set("Umbral Scythehorn");
USH_Mount.Effects.get(0).MiscValueA.set(USH_Creature.ID)
USH_Mount.Icon.setPath('inv_decomposermountblack.blp')
USH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266847)
    });
});

//***************************** */
// Azure Warshell
//***************************** */

export const AWS_Creature = std.CreatureTemplates.create(MODNAME, 'AWS_Creature', 475)
std.SQL.creature_model_info.add(94345).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AWS_Creature.Name.enGB.set("Azure Warshell")
AWS_Creature.Models.clearAll()
AWS_Creature.Models.addIds(94345)
AWS_Creature.Scale.set(1)
AWS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AWS_Mount = std.Spells.create(MODNAME, 'AWS_Mount', 36702)
AWS_Mount.Name.enGB.set("Azure Warshell");
AWS_Mount.Effects.get(0).MiscValueA.set(AWS_Creature.ID)
AWS_Mount.Icon.setPath('Inv_decomposermountblue.blp')
AWS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266847)
    });
});

//***************************** */
// Pale Acidmaw
//***************************** */

export const PAM_Creature = std.CreatureTemplates.create(MODNAME, 'PAM_Creature', 475)
std.SQL.creature_model_info.add(94348).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
PAM_Creature.Name.enGB.set("Pale Acidmaw")
PAM_Creature.Models.clearAll()
PAM_Creature.Models.addIds(94348)
PAM_Creature.Scale.set(1)
PAM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const PAM_Mount = std.Spells.create(MODNAME, 'PAM_Mount', 36702)
PAM_Mount.Name.enGB.set("Pale Acidmaw");
PAM_Mount.Effects.get(0).MiscValueA.set(PAM_Creature.ID)
PAM_Mount.Icon.setPath('Inv_decomposermountwhite.blp')
PAM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266847)
    });
});

//***************************** */
// Spinemaw Gladechewer
//***************************** */

export const SGC_Creature = std.CreatureTemplates.create(MODNAME, 'SGC_Creature', 475)
std.SQL.creature_model_info.add(94349).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SGC_Creature.Name.enGB.set("Spinemaw Gladechewer")
SGC_Creature.Models.clearAll()
SGC_Creature.Models.addIds(94349)
SGC_Creature.Scale.set(1)
SGC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SGC_Mount = std.Spells.create(MODNAME, 'SGC_Mount', 36702)
SGC_Mount.Name.enGB.set("Spinemaw Gladechewer");
SGC_Mount.Effects.get(0).MiscValueA.set(SGC_Creature.ID)
SGC_Mount.Icon.setPath('Inv_decomposermountyellow.blp')
SGC_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266847)
    });
});

//***************************** */
// Swift Gloomhoof
//***************************** */

export const SGH_Creature = std.CreatureTemplates.create(MODNAME, 'SGH_Creature', 475)
std.SQL.creature_model_info.add(94357).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SGH_Creature.Name.enGB.set("Swift Gloomhoof")
SGH_Creature.Models.clearAll()
SGH_Creature.Models.addIds(94357)
SGH_Creature.Scale.set(1)
SGH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SGH_Mount = std.Spells.create(MODNAME, 'SGH_Mount', 22717)
SGH_Mount.Name.enGB.set("Swift Gloomhoof");
SGH_Mount.Effects.get(0).MiscValueA.set(SGH_Creature.ID)
SGH_Mount.Icon.setPath('Inv_horse2ardenwealdmount_dark.blp')

//***************************** */
// Wandering Arden Doe
//***************************** */

export const WAD_Creature = std.CreatureTemplates.create(MODNAME, 'WAD_Creature', 475)
std.SQL.creature_model_info.add(94358).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
WAD_Creature.Name.enGB.set("Wandering Arden Doe")
WAD_Creature.Models.clearAll()
WAD_Creature.Models.addIds(94358)
WAD_Creature.Scale.set(1)
WAD_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const WAD_Mount = std.Spells.create(MODNAME, 'WAD_Mount', 22717)
WAD_Mount.Name.enGB.set("Wandering Arden Doe");
WAD_Mount.Effects.get(0).MiscValueA.set(WAD_Creature.ID)
WAD_Mount.Icon.setPath('Inv_horse2ardenwealdmount_doe.blp')

//***************************** */
// Ascended Skymane
//***************************** */

export const SMMR_Creature = std.CreatureTemplates.create(MODNAME, 'SMMR_Creature', 475)
std.SQL.creature_model_info.add(94359).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SMMR_Creature.Name.enGB.set("Ascended Skymane")
SMMR_Creature.Models.clearAll()
SMMR_Creature.Models.addIds(94359)
SMMR_Creature.Scale.set(1)
SMMR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SMMR_Mount = std.Spells.create(MODNAME, 'SMMR_Mount', 22717)
SMMR_Mount.Name.enGB.set("Ascended Skymane");
SMMR_Mount.Effects.get(0).MiscValueA.set(SMMR_Creature.ID)
SMMR_Mount.Icon.setPath('Inv_horse2bastionmount_blue.blp')

//***************************** */
// Dauntless Duskrunner
//***************************** */

export const DDR_Creature = std.CreatureTemplates.create(MODNAME, 'DDR_Creature', 475)
std.SQL.creature_model_info.add(94360).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DDR_Creature.Name.enGB.set("Dauntless Duskrunner")
DDR_Creature.Models.clearAll()
DDR_Creature.Models.addIds(94360)
DDR_Creature.Scale.set(1)
DDR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DDR_Mount = std.Spells.create(MODNAME, 'DDR_Mount', 22717)
DDR_Mount.Name.enGB.set("Dauntless Duskrunner");
DDR_Mount.Effects.get(0).MiscValueA.set(DDR_Creature.ID)
DDR_Mount.Icon.setPath('Inv_horse2bastionmount_purple.blp')

//***************************** */
// Sundancer
//***************************** */

export const S_Creature = std.CreatureTemplates.create(MODNAME, 'S_Creature', 475)
std.SQL.creature_model_info.add(94361).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
S_Creature.Name.enGB.set("Sundancer")
S_Creature.Models.clearAll()
S_Creature.Models.addIds(94361)
S_Creature.Scale.set(1)
S_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const S_Mount = std.Spells.create(MODNAME, 'S_Mount', 22717)
S_Mount.Name.enGB.set("Sundancer");
S_Mount.Effects.get(0).MiscValueA.set(S_Creature.ID)
S_Mount.Icon.setPath('Inv_horse2bastionmount_yellow.blp')

//***************************** */
// Dreamlight Runestag
//***************************** */

export const DRS_Creature = std.CreatureTemplates.create(MODNAME, 'DRS_Creature', 475)
std.SQL.creature_model_info.add(94362).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DRS_Creature.Name.enGB.set("Dreamlight Runestag")
DRS_Creature.Models.clearAll()
DRS_Creature.Models.addIds(94362)
DRS_Creature.Scale.set(1)
DRS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DRS_Mount = std.Spells.create(MODNAME, 'DRS_Mount', 39318)
DRS_Mount.Name.enGB.set("Dreamlight Runestag");
DRS_Mount.Effects.get(0).MiscValueA.set(DRS_Creature.ID)
DRS_Mount.Icon.setPath('Inv_ardenwealdstagmount_blue.blp')

//***************************** */
// Shadeleaf Runestag
//***************************** */

export const SLRS_Creature = std.CreatureTemplates.create(MODNAME, 'SLRS_Creature', 475)
std.SQL.creature_model_info.add(94363).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SLRS_Creature.Name.enGB.set("Shadeleaf Runestag")
SLRS_Creature.Models.clearAll()
SLRS_Creature.Models.addIds(94363)
SLRS_Creature.Scale.set(1)
SLRS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SLRS_Mount = std.Spells.create(MODNAME, 'SLRS_Mount', 39318)
SLRS_Mount.Name.enGB.set("Shadeleaf Runestag");
SLRS_Mount.Effects.get(0).MiscValueA.set(SLRS_Creature.ID)
SLRS_Mount.Icon.setPath('Inv_ardenwealdstagmount_dark.blp')

//***************************** */
// Dreamlight Runestag
//***************************** */

export const DLRS_Creature = std.CreatureTemplates.create(MODNAME, 'DLRS_Creature', 475)
std.SQL.creature_model_info.add(94364).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DLRS_Creature.Name.enGB.set("Dreamlight Runestag")
DLRS_Creature.Models.clearAll()
DLRS_Creature.Models.addIds(94364)
DLRS_Creature.Scale.set(1)
DLRS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DLRS_Mount = std.Spells.create(MODNAME, 'DLRS_Mount', 39318)
DLRS_Mount.Name.enGB.set("Dreamlight Runestag");
DLRS_Mount.Effects.get(0).MiscValueA.set(DLRS_Creature.ID)
DLRS_Mount.Icon.setPath('inv_ardenwealdstagmount2_blue.blp')

//***************************** */
// Winterborn Runestag
//***************************** */

export const WBRS_Creature = std.CreatureTemplates.create(MODNAME, 'WBRS_Creature', 475)
std.SQL.creature_model_info.add(94365).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
WBRS_Creature.Name.enGB.set("Winterborn Runestag")
WBRS_Creature.Models.clearAll()
WBRS_Creature.Models.addIds(94365)
WBRS_Creature.Scale.set(1)
WBRS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const WBRS_Mount = std.Spells.create(MODNAME, 'WBRS_Mount', 39318)
WBRS_Mount.Name.enGB.set("Winterborn Runestag");
WBRS_Mount.Effects.get(0).MiscValueA.set(WBRS_Creature.ID)
WBRS_Mount.Icon.setPath('inv_ardenwealdstagmount2_white.blp')

//***************************** */
// Ivory Caravan Hyena
//***************************** */

export const ICH_Creature = std.CreatureTemplates.create(MODNAME, 'ICH_Creature', 475)
std.SQL.creature_model_info.add(94762).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ICH_Creature.Name.enGB.set("Ivory Caravan Hyena")
ICH_Creature.Models.clearAll()
ICH_Creature.Models.addIds(94762)
ICH_Creature.Scale.set(1)
ICH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ICH_Mount = std.Spells.create(MODNAME, 'ICH_Mount', 22724)
ICH_Mount.Name.enGB.set("Ivory Caravan Hyena");
ICH_Mount.Effects.get(0).MiscValueA.set(ICH_Creature.ID)
ICH_Mount.Icon.setPath('Inv_vulperamount2.blp')
ICH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18036)
    });
});

//***************************** */
// Deathbringer's Flayedwing
//***************************** */

export const DBFW_Creature = std.CreatureTemplates.create(MODNAME, 'DBFW_Creature', 475)
std.SQL.creature_model_info.add(94926).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DBFW_Creature.Name.enGB.set("Deathbringer's Flayedwing")
DBFW_Creature.Models.clearAll()
DBFW_Creature.Models.addIds(94926)
DBFW_Creature.Scale.set(1)
DBFW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DBFW_Mount = std.Spells.create(MODNAME, 'DBFW_Mount', 22724)
DBFW_Mount.Name.enGB.set("Deathbringer's Flayedwing");
DBFW_Mount.Effects.get(0).MiscValueA.set(DBFW_Creature.ID)
DBFW_Mount.Icon.setPath('inv_maldraxxusflyermount_black.blp')
DBFW_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266848)
    });
});

//***************************** */
// Ivory Flayedwing
//***************************** */

export const IFW_Creature = std.CreatureTemplates.create(MODNAME, 'IFW_Creature', 475)
std.SQL.creature_model_info.add(94927).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
IFW_Creature.Name.enGB.set("Ivory Flayedwing")
IFW_Creature.Models.clearAll()
IFW_Creature.Models.addIds(94927)
IFW_Creature.Scale.set(1)
IFW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const IFW_Mount = std.Spells.create(MODNAME, 'IFW_Mount', 22724)
IFW_Mount.Name.enGB.set("Ivory Flayedwing");
IFW_Mount.Effects.get(0).MiscValueA.set(IFW_Creature.ID)
IFW_Mount.Icon.setPath('Inv_maldraxxusflyermount.blp')
IFW_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266848)
    });
});

//***************************** */
// Callow Flayedwing
//***************************** */

export const CFW_Creature = std.CreatureTemplates.create(MODNAME, 'CFW_Creature', 475)
std.SQL.creature_model_info.add(94928).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
CFW_Creature.Name.enGB.set("Callow Flayedwing")
CFW_Creature.Models.clearAll()
CFW_Creature.Models.addIds(94928)
CFW_Creature.Scale.set(1)
CFW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const CFW_Mount = std.Spells.create(MODNAME, 'CFW_Mount', 22724)
CFW_Mount.Name.enGB.set("Callow Flayedwing");
CFW_Mount.Effects.get(0).MiscValueA.set(CFW_Creature.ID)
CFW_Mount.Icon.setPath('inv_maldraxxusflyermount_green.blp')
CFW_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266848)
    });
});

//***************************** */
// Gruesome Flayedwing
//***************************** */

export const GFW_Creature = std.CreatureTemplates.create(MODNAME, 'GFW_Creature', 475)
std.SQL.creature_model_info.add(94929).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GFW_Creature.Name.enGB.set("Gruesome Flayedwing")
GFW_Creature.Models.clearAll()
GFW_Creature.Models.addIds(94929)
GFW_Creature.Scale.set(1)
GFW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GFW_Mount = std.Spells.create(MODNAME, 'GFW_Mount', 22724)
GFW_Mount.Name.enGB.set("Gruesome Flayedwing");
GFW_Mount.Effects.get(0).MiscValueA.set(GFW_Creature.ID)
GFW_Mount.Icon.setPath('inv_maldraxxusflyermount_blue.blp')
GFW_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Silky Shimmermoth
//***************************** */

export const SSM_Creature = std.CreatureTemplates.create(MODNAME, 'SSM_Creature', 475)
std.SQL.creature_model_info.add(95205).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SSM_Creature.Name.enGB.set("Silky Shimmermoth")
SSM_Creature.Models.clearAll()
SSM_Creature.Models.addIds(95205)
SSM_Creature.Scale.set(1.8)
SSM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SSM_Mount = std.Spells.create(MODNAME, 'SSM_Mount', 22724)
SSM_Mount.Name.enGB.set("Silky Shimmermoth");
SSM_Mount.Effects.get(0).MiscValueA.set(SSM_Creature.ID)
SSM_Mount.Icon.setPath('Inv_mothardenwealdmount_blue.blp')
SSM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19034)
    });
});

//***************************** */
// Duskflutter Ardenmoth
//***************************** */

export const DFAM_Creature = std.CreatureTemplates.create(MODNAME, 'DFAM_Creature', 475)
std.SQL.creature_model_info.add(95206).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DFAM_Creature.Name.enGB.set("Duskflutter Ardenmoth")
DFAM_Creature.Models.clearAll()
DFAM_Creature.Models.addIds(95206)
DFAM_Creature.Scale.set(1.8)
DFAM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DFAM_Mount = std.Spells.create(MODNAME, 'DFAM_Mount', 22724)
DFAM_Mount.Name.enGB.set("Duskflutter Ardenmoth");
DFAM_Mount.Effects.get(0).MiscValueA.set(DFAM_Creature.ID)
DFAM_Mount.Icon.setPath('Inv_mothardenwealdmount_dark.blp')
DFAM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19034)
    });
});

//***************************** */
// Vibrant Fluttermoth
//***************************** */

export const VFM_Creature = std.CreatureTemplates.create(MODNAME, 'VFM_Creature', 475)
std.SQL.creature_model_info.add(95207).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VFM_Creature.Name.enGB.set("Vibrant Fluttermoth")
VFM_Creature.Models.clearAll()
VFM_Creature.Models.addIds(95207)
VFM_Creature.Scale.set(1.8)
VFM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VFM_Mount = std.Spells.create(MODNAME, 'VFM_Mount', 22724)
VFM_Mount.Name.enGB.set("Vibrant Fluttermoth");
VFM_Mount.Effects.get(0).MiscValueA.set(VFM_Creature.ID)
VFM_Mount.Icon.setPath('Inv_mothardenwealdmount_mint.blp')
VFM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19034)
    });
});

//***************************** */
// Amber Ardenmoth
//***************************** */

export const AAM_Creature = std.CreatureTemplates.create(MODNAME, 'AAM_Creature', 475)
std.SQL.creature_model_info.add(95208).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AAM_Creature.Name.enGB.set("Amber Ardenmoth")
AAM_Creature.Models.clearAll()
AAM_Creature.Models.addIds(95208)
AAM_Creature.Scale.set(1.8)
AAM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AAM_Mount = std.Spells.create(MODNAME, 'AAM_Mount', 22724)
AAM_Mount.Name.enGB.set("Amber Ardenmoth");
AAM_Mount.Effects.get(0).MiscValueA.set(AAM_Creature.ID)
AAM_Mount.Icon.setPath('Inv_mothardenwealdmount_red.blp')
AAM_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19034)
    });
});

//***************************** */
// Blisterback Bloodtusk
//***************************** */

export const BB_Creature = std.CreatureTemplates.create(MODNAME, 'BB_Creature', 475)
std.SQL.creature_model_info.add(96452).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BB_Creature.Name.enGB.set("Blisterback Bloodtusk")
BB_Creature.Models.clearAll()
BB_Creature.Models.addIds(96452)
BB_Creature.Scale.set(0.2)
BB_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BB_Mount = std.Spells.create(MODNAME, 'BB_Mount', 22724)
BB_Mount.Name.enGB.set("Blisterback Bloodtusk");
BB_Mount.Effects.get(0).MiscValueA.set(BB_Creature.ID)
BB_Mount.Icon.setPath('Inv_maldraxxusboarmount_black.blp')
BB_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266849)
    });
});

//***************************** */
// Gorespine Bloodtusk
//***************************** */

export const GSBT_Creature = std.CreatureTemplates.create(MODNAME, 'GSBT_Creature', 475)
std.SQL.creature_model_info.add(96453).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GSBT_Creature.Name.enGB.set("Gorespine Bloodtusk")
GSBT_Creature.Models.clearAll()
GSBT_Creature.Models.addIds(96453)
GSBT_Creature.Scale.set(0.2)
GSBT_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GSBT_Mount = std.Spells.create(MODNAME, 'GSBT_Mount', 22724)
GSBT_Mount.Name.enGB.set("Gorespine Bloodtusk");
GSBT_Mount.Effects.get(0).MiscValueA.set(GSBT_Creature.ID)
GSBT_Mount.Icon.setPath('Inv_maldraxxusboarmount_green.blp')
GSBT_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266849)
    });
});

//***************************** */
// Bonecleaver's Skullboar
//***************************** */

export const BCSB_Creature = std.CreatureTemplates.create(MODNAME, 'BCSB_Creature', 475)
std.SQL.creature_model_info.add(96454).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BCSB_Creature.Name.enGB.set("Bonecleaver's Skullboar")
BCSB_Creature.Models.clearAll()
BCSB_Creature.Models.addIds(96454)
BCSB_Creature.Scale.set(0.2)
BCSB_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BCSB_Mount = std.Spells.create(MODNAME, 'BCSB_Mount', 22724)
BCSB_Mount.Name.enGB.set("Bonecleaver's Skullboar");
BCSB_Mount.Effects.get(0).MiscValueA.set(BCSB_Creature.ID)
BCSB_Mount.Icon.setPath('Inv_maldraxxusboarmount_grey.blp')
BCSB_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266849)
    });
});

//***************************** */
// Lurid Bloodtusk
//***************************** */

export const LBT_Creature = std.CreatureTemplates.create(MODNAME, 'LBT_Creature', 475)
std.SQL.creature_model_info.add(96455).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
LBT_Creature.Name.enGB.set("Lurid Bloodtusk")
LBT_Creature.Models.clearAll()
LBT_Creature.Models.addIds(96455)
LBT_Creature.Scale.set(0.2)
LBT_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const LBT_Mount = std.Spells.create(MODNAME, 'LBT_Mount', 22724)
LBT_Mount.Name.enGB.set("Lurid Bloodtusk");
LBT_Mount.Effects.get(0).MiscValueA.set(LBT_Creature.ID)
LBT_Mount.Icon.setPath('Inv_maldraxxusboarmount_purple.blp')
LBT_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266849)
    });
});

//***************************** */
// Colossal Slaughterclaw
//***************************** */

export const CSC_Creature = std.CreatureTemplates.create(MODNAME, 'CSC_Creature', 475)
std.SQL.creature_model_info.add(96781).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
CSC_Creature.Name.enGB.set("Colossal Slaughterclaw")
CSC_Creature.Models.clearAll()
CSC_Creature.Models.addIds(96781)
CSC_Creature.Scale.set(0.1)
CSC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const CSC_Mount = std.Spells.create(MODNAME, 'CSC_Mount', 22724)
CSC_Mount.Name.enGB.set("Colossal Slaughterclaw");
CSC_Mount.Effects.get(0).MiscValueA.set(CSC_Creature.ID)
CSC_Mount.Icon.setPath('Inv_rocmaldraxxusmountblack.blp')
CSC_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266850)
    });
});

//***************************** */
// Predatory Plagueroc
//***************************** */

export const PPR_Creature = std.CreatureTemplates.create(MODNAME, 'PPR_Creature', 475)
std.SQL.creature_model_info.add(97790).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
PPR_Creature.Name.enGB.set("Predatory Plagueroc")
PPR_Creature.Models.clearAll()
PPR_Creature.Models.addIds(97790)
PPR_Creature.Scale.set(0.1)
PPR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const PPR_Mount = std.Spells.create(MODNAME, 'PPR_Mount', 22724)
PPR_Mount.Name.enGB.set("Predatory Plagueroc");
PPR_Mount.Effects.get(0).MiscValueA.set(PPR_Creature.ID)
PPR_Mount.Icon.setPath('Inv_rocmaldraxxusmountgreen.blp')
PPR_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266850)
    });
});

//***************************** */
// Hulking Deathroc
//***************************** */

export const HDR_Creature = std.CreatureTemplates.create(MODNAME, 'HDR_Creature', 475)
std.SQL.creature_model_info.add(97791).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HDR_Creature.Name.enGB.set("Hulking Deathroc")
HDR_Creature.Models.clearAll()
HDR_Creature.Models.addIds(97791)
HDR_Creature.Scale.set(0.1)
HDR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HDR_Mount = std.Spells.create(MODNAME, 'HDR_Mount', 22724)
HDR_Mount.Name.enGB.set("Predatory Plagueroc");
HDR_Mount.Effects.get(0).MiscValueA.set(HDR_Creature.ID)
HDR_Mount.Icon.setPath('Inv_rocmaldraxxusmountpurple.blp')
HDR_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266850)
    });
});

//***************************** */
// Bonesewn Fleshroc
//***************************** */

export const BSFR_Creature = std.CreatureTemplates.create(MODNAME, 'BSFR_Creature', 475)
std.SQL.creature_model_info.add(97792).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BSFR_Creature.Name.enGB.set("Bonesewn Fleshroc")
BSFR_Creature.Models.clearAll()
BSFR_Creature.Models.addIds(97792)
BSFR_Creature.Scale.set(0.1)
BSFR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BSFR_Mount = std.Spells.create(MODNAME, 'BSFR_Mount', 22724)
BSFR_Mount.Name.enGB.set("Bonesewn Fleshroc");
BSFR_Mount.Effects.get(0).MiscValueA.set(BSFR_Creature.ID)
BSFR_Mount.Icon.setPath('Inv_rocmaldraxxusmountwhite.blp')
BSFR_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266850)
    });
});

//***************************** */
// Arboreal Gulper
//***************************** */

export const AG_Creature = std.CreatureTemplates.create(MODNAME, 'AG_Creature', 475)
std.SQL.creature_model_info.add(98498).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AG_Creature.Name.enGB.set("Arboreal Gulper")
AG_Creature.Models.clearAll()
AG_Creature.Models.addIds(98498)
AG_Creature.Scale.set(1)
AG_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AG_Mount = std.Spells.create(MODNAME, 'AG_Mount', 22724)
AG_Mount.Name.enGB.set("Arboreal Gulper");
AG_Mount.Effects.get(0).MiscValueA.set(AG_Creature.ID)
AG_Mount.Icon.setPath('Inv_toadardenwealdmount.blp')
AG_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18126)
    });
});

//***************************** */
// Vicious War Clefthoof
//***************************** */

export const VWC_Creature = std.CreatureTemplates.create(MODNAME, 'VWC_Creature', 475)
std.SQL.creature_model_info.add(85393).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VWC_Creature.Name.enGB.set("Vicious War Clefthoof")
VWC_Creature.Models.clearAll()
VWC_Creature.Models.addIds(85393)
VWC_Creature.Scale.set(0.7)
VWC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VWC_Mount = std.Spells.create(MODNAME, 'VWC_Mount', 74918)
VWC_Mount.Name.enGB.set("Vicious War Clefthoof");
VWC_Mount.Effects.get(0).MiscValueA.set(VWC_Creature.ID)
VWC_Mount.Icon.setPath('inv_vicioushordeclefthoof.blp')
VWC_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(771)
    });
});
//***************************** */
// Vicious War Grizzly (alliance)
//***************************** */

export const VWGA_Creature = std.CreatureTemplates.create(MODNAME, 'VWGA_Creature', 475)
std.SQL.creature_model_info.add(73805).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VWGA_Creature.Name.enGB.set("Vicious War Grizzly")
VWGA_Creature.Models.clearAll()
VWGA_Creature.Models.addIds(73805)
VWGA_Creature.Scale.set(1)
VWGA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VWGA_Mount = std.Spells.create(MODNAME, 'VWGA_Mount', 60118)
VWGA_Mount.Name.enGB.set("Vicious War Grizzly");
VWGA_Mount.Effects.get(0).MiscValueA.set(VWGA_Creature.ID)
VWGA_Mount.Icon.setPath('inv_mount_viciousalliancebearmount.blp')

//***************************** */
// Vicious War Grizzly (horde)
//***************************** */

export const VWGH_Creature = std.CreatureTemplates.create(MODNAME, 'VWGH_Creature', 475)
std.SQL.creature_model_info.add(73806).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VWGH_Creature.Name.enGB.set("Vicious War Grizzly")
VWGH_Creature.Models.clearAll()
VWGH_Creature.Models.addIds(73806)
VWGH_Creature.Scale.set(1)
VWGH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VWGH_Mount = std.Spells.create(MODNAME, 'VWGH_Mount', 60119)
VWGH_Mount.Name.enGB.set("Vicious War Grizzly");
VWGH_Mount.Effects.get(0).MiscValueA.set(VWGH_Creature.ID)
VWGH_Mount.Icon.setPath('inv_mount_vicioushordebearmount.blp')

//***************************** */
// Marsh Hopper
//***************************** */

export const MH_Creature = std.CreatureTemplates.create(MODNAME, 'MH_Creature', 475)
std.SQL.creature_model_info.add(81952).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
MH_Creature.Name.enGB.set("Marsh Hopper")
MH_Creature.Models.clearAll()
MH_Creature.Models.addIds(81952)
MH_Creature.Scale.set(1)
MH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const MH_Mount = std.Spells.create(MODNAME, 'MH_Mount', 60119)
MH_Mount.Name.enGB.set("Marsh Hopper");
MH_Mount.Effects.get(0).MiscValueA.set(MH_Creature.ID)
MH_Mount.Icon.setPath('ivn_toadloamount.blp')
MH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18126)
    });
});

//***************************** */
// Winter Wandering Ancient
//***************************** */

export const WWA_Creature = std.CreatureTemplates.create(MODNAME, 'WWA_Creature', 475)
std.SQL.creature_model_info.add(98756).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
WWA_Creature.Name.enGB.set("Winter Wandering Ancient")
WWA_Creature.Models.clearAll()
WWA_Creature.Models.addIds(98756)
WWA_Creature.Scale.set(0.8)
WWA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const WWA_Mount = std.Spells.create(MODNAME, 'WWA_Mount', 60119)
WWA_Mount.Name.enGB.set("Winter Wandering Ancient");
WWA_Mount.Effects.get(0).MiscValueA.set(WWA_Creature.ID)
WWA_Mount.Icon.setPath('inv_pet_ancientprotector_winter.blp')
WWA_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(298)
    });
});

//***************************** */
// Autumn Wandering Ancient
//***************************** */

export const FWA_Creature = std.CreatureTemplates.create(MODNAME, 'FWA_Creature', 475)
std.SQL.creature_model_info.add(98753).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FWA_Creature.Name.enGB.set("Autumn Wandering Ancient")
FWA_Creature.Models.clearAll()
FWA_Creature.Models.addIds(98753)
FWA_Creature.Scale.set(0.8)
FWA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FWA_Mount = std.Spells.create(MODNAME, 'FWA_Mount', 60119)
FWA_Mount.Name.enGB.set("Autumn Wandering Ancient");
FWA_Mount.Effects.get(0).MiscValueA.set(FWA_Creature.ID)
FWA_Mount.Icon.setPath('inv_pet_ancientprotector_fall.blp')
FWA_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(298)
    });
});

//***************************** */
// Spring Wandering Ancient
//***************************** */

export const SWA_Creature = std.CreatureTemplates.create(MODNAME, 'SWA_Creature', 475)
std.SQL.creature_model_info.add(98754).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SWA_Creature.Name.enGB.set("Spring Wandering Ancient")
SWA_Creature.Models.clearAll()
SWA_Creature.Models.addIds(98754)
SWA_Creature.Scale.set(0.8)
SWA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SWA_Mount = std.Spells.create(MODNAME, 'SWA_Mount', 60119)
SWA_Mount.Name.enGB.set("Spring Wandering Ancient");
SWA_Mount.Effects.get(0).MiscValueA.set(SWA_Creature.ID)
SWA_Mount.Icon.setPath('inv_pet_ancientprotector_spring.blp')
SWA_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(298)
    });
});

//***************************** */
// Summer Wandering Ancient
//***************************** */

export const SumWA_Creature = std.CreatureTemplates.create(MODNAME, 'SumWA_Creature', 475)
std.SQL.creature_model_info.add(98755).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SumWA_Creature.Name.enGB.set("Summer Wandering Ancient")
SumWA_Creature.Models.clearAll()
SumWA_Creature.Models.addIds(98755)
SumWA_Creature.Scale.set(0.8)
SumWA_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SumWA_Mount = std.Spells.create(MODNAME, 'SumWA_Mount', 60119)
SumWA_Mount.Name.enGB.set("Summer Wandering Ancient");
SumWA_Mount.Effects.get(0).MiscValueA.set(SumWA_Creature.ID)
SumWA_Mount.Icon.setPath('inv_pet_ancientprotector_summer.blp')
SumWA_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(298)
    });
});

//***************************** */
// Veridian Phasestalker
//***************************** */

export const VPS_Creature = std.CreatureTemplates.create(MODNAME, 'VPS_Creature', 475)
std.SQL.creature_model_info.add(98757).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VPS_Creature.Name.enGB.set("Veridian Phasestalker")
VPS_Creature.Models.clearAll()
VPS_Creature.Models.addIds(98757)
VPS_Creature.Scale.set(1)
VPS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VPS_Mount = std.Spells.create(MODNAME, 'VPS_Mount', 60119)
VPS_Mount.Name.enGB.set("Veridian Phasestalker");
VPS_Mount.Effects.get(0).MiscValueA.set(VPS_Creature.ID)
VPS_Mount.Icon.setPath('inv_warpstalkermountbc.blp')
VPS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(10054)
    });
});

//***************************** */
// Grimhowl
//***************************** */

export const GH_Creature = std.CreatureTemplates.create(MODNAME, 'GH_Creature', 475)
std.SQL.creature_model_info.add(98758).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GH_Creature.Name.enGB.set("Grimhowl")
GH_Creature.Models.clearAll()
GH_Creature.Models.addIds(98758)
GH_Creature.Scale.set(.8)
GH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GH_Mount = std.Spells.create(MODNAME, 'GH_Mount', 60119)
GH_Mount.Name.enGB.set("Grimhowl");
GH_Mount.Effects.get(0).MiscValueA.set(GH_Creature.ID)
GH_Mount.Icon.setPath('inv_darkhoundmount.blp')
GH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266839)
    });
});

//***************************** */
// Antoran Gloomhound
//***************************** */

export const AGH_Creature = std.CreatureTemplates.create(MODNAME, 'AGH_Creature', 475)
std.SQL.creature_model_info.add(48601).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AGH_Creature.Name.enGB.set("Antoran Gloomhound")
AGH_Creature.Models.clearAll()
AGH_Creature.Models.addIds(48601)
AGH_Creature.Scale.set(1)
AGH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AGH_Mount = std.Spells.create(MODNAME, 'AGH_Mount', 60119)
AGH_Mount.Name.enGB.set("Antoran Gloomhound");
AGH_Mount.Effects.get(0).MiscValueA.set(AGH_Creature.ID)
AGH_Mount.Icon.setPath('Inv_felhound3_shadow_mount.blp')
AGH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18020)
    });
});

//***************************** */
// Hellfire Infernal
//***************************** */

export const HI_Creature = std.CreatureTemplates.create(MODNAME, 'HI_Creature', 475)
std.SQL.creature_model_info.add(48657).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HI_Creature.Name.enGB.set("Hellfire Infernal")
HI_Creature.Models.clearAll()
HI_Creature.Models.addIds(48657)
HI_Creature.Scale.set(1)
HI_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HI_Mount = std.Spells.create(MODNAME, 'HI_Mount', 60119)
HI_Mount.Name.enGB.set("Hellfire Infernal");
HI_Mount.Effects.get(0).MiscValueA.set(HI_Creature.ID)
HI_Mount.Icon.setPath('inv_infernalmountred.blp')
HI_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Flarecore Infernal
//***************************** */

export const FI_Creature = std.CreatureTemplates.create(MODNAME, 'FI_Creature', 475)
std.SQL.creature_model_info.add(48656).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FI_Creature.Name.enGB.set("Flarecore Infernal")
FI_Creature.Models.clearAll()
FI_Creature.Models.addIds(48656)
FI_Creature.Scale.set(1)
FI_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FI_Mount = std.Spells.create(MODNAME, 'FI_Mount', 60119)
FI_Mount.Name.enGB.set("Flarecore Infernal");
FI_Mount.Effects.get(0).MiscValueA.set(FI_Creature.ID)
FI_Mount.Icon.setPath('inv_infernalmountlava.blp')
FI_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Coldflame Infernal
//***************************** */

export const CI_Creature = std.CreatureTemplates.create(MODNAME, 'CI_Creature', 475)
std.SQL.creature_model_info.add(48654).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
CI_Creature.Name.enGB.set("Coldflame Infernal")
CI_Creature.Models.clearAll()
CI_Creature.Models.addIds(48654)
CI_Creature.Scale.set(1)
CI_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const CI_Mount = std.Spells.create(MODNAME, 'CI_Mount', 60119)
CI_Mount.Name.enGB.set("Coldflame Infernal");
CI_Mount.Effects.get(0).MiscValueA.set(CI_Creature.ID)
CI_Mount.Icon.setPath('inv_infernalmountblue.blp')
CI_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// GMOD 
//***************************** */

export const GMOD_Creature = std.CreatureTemplates.create(MODNAME, 'GMOD_Creature', 475)
std.SQL.creature_model_info.add(48753).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GMOD_Creature.Name.enGB.set("G.M.O.D.")
GMOD_Creature.Models.clearAll()
GMOD_Creature.Models.addIds(48753)
GMOD_Creature.Scale.set(1)
GMOD_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GMOD_Mount = std.Spells.create(MODNAME, 'GMOD_Mount', 60424)
GMOD_Mount.Name.enGB.set("G.M.O.D.");
GMOD_Mount.Effects.get(0).MiscValueA.set(GMOD_Creature.ID)
GMOD_Mount.Icon.setPath('achievement_dungeon_coinoperatedcrowdpummeler.blp')

//***************************** */
// Tyrael's Charger
//***************************** */

export const TC_Creature = std.CreatureTemplates.create(MODNAME, 'TC_Creature', 475)
std.SQL.creature_model_info.add(39530).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
TC_Creature.Name.enGB.set("Tyrael's Charger")
TC_Creature.Models.clearAll()
TC_Creature.Models.addIds(39530)
TC_Creature.Scale.set(1)
TC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const TC_Mount = std.Spells.create(MODNAME, 'TC_Mount', 22717)
TC_Mount.Name.enGB.set("Tyrael's Charger");
TC_Mount.Effects.get(0).MiscValueA.set(TC_Creature.ID)
TC_Mount.Icon.setPath('ability_mount_tyraelmount.blp')

//***************************** */
// Wicked Swarmer
//***************************** */

export const WS_Creature = std.CreatureTemplates.create(MODNAME, 'WS_Creature', 475)
std.SQL.creature_model_info.add(49121).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
WS_Creature.Name.enGB.set("Wicked Swarmer")
WS_Creature.Models.clearAll()
WS_Creature.Models.addIds(49121)
WS_Creature.Scale.set(1)
WS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const WS_Mount = std.Spells.create(MODNAME, 'WS_Mount', 22717)
WS_Mount.Name.enGB.set("Wicked Swarmer");
WS_Mount.Effects.get(0).MiscValueA.set(WS_Creature.ID)
WS_Mount.Icon.setPath('inv_aqirflyingmount_red.blp')
WS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266846)
    });
});


//***************************** */
// Uncorrupted Voidwing
//***************************** */

export const UV_Creature = std.CreatureTemplates.create(MODNAME, 'UV_Creature', 475)
std.SQL.creature_model_info.add(49144).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
UV_Creature.Name.enGB.set("Uncorrupted Voidwing")
UV_Creature.Models.clearAll()
UV_Creature.Models.addIds(49144)
UV_Creature.Scale.set(1)
UV_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const UV_Mount = std.Spells.create(MODNAME, 'UV_Mount', 59569)
UV_Mount.Name.enGB.set("Uncorrupted Voidwing");
UV_Mount.Effects.get(0).MiscValueA.set(UV_Creature.ID)
UV_Mount.Icon.setPath('inv_voiddragonmount.blp')
UV_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(19016)
    });
});

//***************************** */
// Swift Pridelord
//***************************** */
// -- Mount Spell
export const SPMount = std.Spells.create(MODNAME, 'SPMount', 16055)
SPMount.Name.enGB.set("Swift Pridelord");
SPMount.Effects.get(0).MiscValueA.set(5828)
SPMount.Icon.setPath('inv_viciousgoldenking.blp')
SPMount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(10722)
    });
});

//***************************** */
// Swift Spirit of Loque'nahak
//***************************** */
// -- Mount Spell
export const SOLMount = std.Spells.create(MODNAME, 'SOLMount', 16055)
SOLMount.Name.enGB.set("Swift Spirit of Loque'nahak");
SOLMount.Effects.get(0).MiscValueA.set(32517)
SOLMount.Icon.setPath('inv_viciousgoldenking.blp')
SOLMount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(10722)
    });
});

//***************************** */
// Swift Spirit of Skoll
//***************************** */
// -- Mount Spell
export const SOKMount = std.Spells.create(MODNAME, 'SOKMount', 16055)
SOKMount.Name.enGB.set("Swift Spirit of Skoll");
SOKMount.Effects.get(0).MiscValueA.set(35189)
SOKMount.Icon.setPath('inv_viciousgoldenking.blp')
SOKMount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(10722)
    });
});

//***************************** */
// Predatory Bloodgazer
//***************************** */

export const PBG_Creature = std.CreatureTemplates.create(MODNAME, 'PBG_Creature', 475)
std.SQL.creature_model_info.add(48540).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
PBG_Creature.Name.enGB.set("Predatory Bloodgazer")
PBG_Creature.Models.clearAll()
PBG_Creature.Models.addIds(48540)
PBG_Creature.Scale.set(1)
PBG_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const PBG_Mount = std.Spells.create(MODNAME, 'PBG_Mount', 22717)
PBG_Mount.Name.enGB.set("Predatory Bloodgazer");
PBG_Mount.Effects.get(0).MiscValueA.set(PBG_Creature.ID)
PBG_Mount.Icon.setPath('inv_falcosaurosblack.blp')
PBG_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18932)
    });
});

//***************************** */
// Bloodgorged Crawg
//***************************** */

export const BGC_Creature = std.CreatureTemplates.create(MODNAME, 'BGC_Creature', 475)
std.SQL.creature_model_info.add(48652).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BGC_Creature.Name.enGB.set("Bloodgorged Crawg")
BGC_Creature.Models.clearAll()
BGC_Creature.Models.addIds(48652)
BGC_Creature.Scale.set(1)
BGC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BGC_Mount = std.Spells.create(MODNAME, 'BGC_Mount', 22717)
BGC_Mount.Name.enGB.set("Bloodgorged Crawg");
BGC_Mount.Effects.get(0).MiscValueA.set(BGC_Creature.ID)
BGC_Mount.Icon.setPath('inv_bloodtrollbeast_mount.blp')
BGC_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18217)
    });
});

//***************************** */
// Tan Vulpine Familiar
//***************************** */

export const TVF_Creature = std.CreatureTemplates.create(MODNAME, 'TVF_Creature', 475)
std.SQL.creature_model_info.add(48648).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
TVF_Creature.Name.enGB.set("Tan Vulpine Familiar")
TVF_Creature.Models.clearAll()
TVF_Creature.Models.addIds(48648)
TVF_Creature.Scale.set(1)
TVF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const TVF_Mount = std.Spells.create(MODNAME, 'TVF_Mount', 22717)
TVF_Mount.Name.enGB.set("Tan Vulpine Familiar");
TVF_Mount.Effects.get(0).MiscValueA.set(TVF_Creature.ID)
TVF_Mount.Icon.setPath('inv_encrypted0a.blp')
TVF_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Felsaber
//***************************** */

export const F_Creature = std.CreatureTemplates.create(MODNAME, 'F_Creature', 475)
std.SQL.creature_model_info.add(48644).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
F_Creature.Name.enGB.set("Felsaber")
F_Creature.Models.clearAll()
F_Creature.Models.addIds(48644)
F_Creature.Scale.set(1)
F_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const F_Mount = std.Spells.create(MODNAME, 'F_Mount', 22717)
F_Mount.Name.enGB.set("Felsaber");
F_Mount.Effects.get(0).MiscValueA.set(F_Creature.ID)
F_Mount.Icon.setPath('inv_dhmount_felsaber.blp')
F_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18176)
    });
});

//***************************** */
// Blue Vulpine Familiar
//***************************** */

export const BVF_Creature = std.CreatureTemplates.create(MODNAME, 'BVF_Creature', 475)
std.SQL.creature_model_info.add(48636).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BVF_Creature.Name.enGB.set("Blue Vulpine Familiar")
BVF_Creature.Models.clearAll()
BVF_Creature.Models.addIds(48636)
BVF_Creature.Scale.set(1)
BVF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BVF_Mount = std.Spells.create(MODNAME, 'BVF_Mount', 22717)
BVF_Mount.Name.enGB.set("Blue Vulpine Familiar");
BVF_Mount.Effects.get(0).MiscValueA.set(BVF_Creature.ID)
BVF_Mount.Icon.setPath('inv_encrypted09.blp')
BVF_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Luminous Starseeker
//***************************** */

export const LSS_Creature = std.CreatureTemplates.create(MODNAME, 'LSS_Creature', 475)
std.SQL.creature_model_info.add(48626).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
LSS_Creature.Name.enGB.set("Luminous Starseeker")
LSS_Creature.Models.clearAll()
LSS_Creature.Models.addIds(48626)
LSS_Creature.Scale.set(1)
LSS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const LSS_Mount = std.Spells.create(MODNAME, 'LSS_Mount', 63637)
LSS_Mount.Name.enGB.set("Luminous Starseeker");
LSS_Mount.Effects.get(0).MiscValueA.set(LSS_Creature.ID)
LSS_Mount.Icon.setPath('inv_shadowstalkerpanthermount.blp')

//***************************** */
// RoyalFang Widow
//***************************** */

export const RFW_Creature = std.CreatureTemplates.create(MODNAME, 'RFW_Creature', 475)
std.SQL.creature_model_info.add(48514).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
RFW_Creature.Name.enGB.set("Royalfang Widow")
RFW_Creature.Models.clearAll()
RFW_Creature.Models.addIds(48514)
RFW_Creature.Scale.set(1)
RFW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const RFW_Mount = std.Spells.create(MODNAME, 'RFW_Mount', 22717)
RFW_Mount.Name.enGB.set("Royalfang Widow");
RFW_Mount.Effects.get(0).MiscValueA.set(RFW_Creature.ID)
RFW_Mount.Icon.setPath('inv_spidermount.blp')

//***************************** */
// Spirit of Eche'ero
//***************************** */

export const SOE_Creature = std.CreatureTemplates.create(MODNAME, 'SOE_Creature', 475)
std.SQL.creature_model_info.add(48512).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SOE_Creature.Name.enGB.set("Spirit of Eche'ero")
SOE_Creature.Models.clearAll()
SOE_Creature.Models.addIds(48512)
SOE_Creature.Scale.set(1)
SOE_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const soe_Mount = std.Spells.create(MODNAME, 'soe_Mount', 22717)
soe_Mount.Name.enGB.set("Spirit of Eche'ero");
soe_Mount.Effects.get(0).MiscValueA.set(SOE_Creature.ID)
soe_Mount.Icon.setPath('inv_archaeology_70_spiritofechero.blp')
soe_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18040)
    });
});

//***************************** */
// Ratstallion
//***************************** */

export const RS_Creature = std.CreatureTemplates.create(MODNAME, 'RS_Creature', 475)
std.SQL.creature_model_info.add(48526).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
RS_Creature.Name.enGB.set("Ratstallion")
RS_Creature.Models.clearAll()
RS_Creature.Models.addIds(48526)
RS_Creature.Scale.set(1)
RS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const RS_Mount = std.Spells.create(MODNAME, 'RS_Mount', 22717)
RS_Mount.Name.enGB.set("Ratstallion");
RS_Mount.Effects.get(0).MiscValueA.set(RS_Creature.ID)
RS_Mount.Icon.setPath('inv_ratmount.blp')
RS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18051)
    });
});

//***************************** */
// Cindermane Charger
//***************************** */

export const IHS_Creature = std.CreatureTemplates.create(MODNAME, 'IHS_Creature', 475)
std.SQL.creature_model_info.add(48521).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
IHS_Creature.Name.enGB.set("Cindermane Charger")
IHS_Creature.Models.clearAll()
IHS_Creature.Models.addIds(48521)
IHS_Creature.Scale.set(1)
IHS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const IHS_Mount = std.Spells.create(MODNAME, 'IHS_Mount', 22717)
IHS_Mount.Name.enGB.set("Cindermane Charger");
IHS_Mount.Effects.get(0).MiscValueA.set(IHS_Creature.ID)
IHS_Mount.Icon.setPath('inv_lavahorse.blp')
IHS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18051)
    });
});

//***************************** */
// Highmountain Thunderhoof
//***************************** */

export const HTF_Creature = std.CreatureTemplates.create(MODNAME, 'HTF_Creature', 475)
std.SQL.creature_model_info.add(48602).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HTF_Creature.Name.enGB.set("Highmountain Thunderhoof")
HTF_Creature.Models.clearAll()
HTF_Creature.Models.addIds(48602)
HTF_Creature.Scale.set(1)
HTF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HTF_Mount = std.Spells.create(MODNAME, 'HTF_Mount', 22717)
HTF_Mount.Name.enGB.set("Highmountain Thunderhoof");
HTF_Mount.Effects.get(0).MiscValueA.set(HTF_Creature.ID)
HTF_Mount.Icon.setPath('inv_hmmoosemount.blp')
HTF_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18040)
    });
});

//***************************** */
// Highlord's Vigilant Charger
//***************************** */

export const HVC_Creature = std.CreatureTemplates.create(MODNAME, 'HVC_Creature', 475)
std.SQL.creature_model_info.add(48607).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HVC_Creature.Name.enGB.set("Highlord's Vigilant Charger")
HVC_Creature.Models.clearAll()
HVC_Creature.Models.addIds(48607)
HVC_Creature.Scale.set(1)
HVC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HVC_Mount = std.Spells.create(MODNAME, 'HVC_Mount', 34767)
HVC_Mount.Name.enGB.set("Highlord's Vigilant Charger");
HVC_Mount.Effects.get(0).MiscValueA.set(HVC_Creature.ID)
HVC_Mount.Icon.setPath('inv_paladinmount.blp')

//***************************** */
// Armored Iron Paw
//***************************** */

export const AIP_Creature = std.CreatureTemplates.create(MODNAME, 'AIP_Creature', 475)
std.SQL.creature_model_info.add(48615).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
AIP_Creature.Name.enGB.set("Armored Iron Paw")
AIP_Creature.Models.clearAll()
AIP_Creature.Models.addIds(48615)
AIP_Creature.Scale.set(1)
AIP_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const AIP_Mount = std.Spells.create(MODNAME, 'AIP_Mount', 63640)
AIP_Mount.Name.enGB.set("Armored Iron Paw");
AIP_Mount.Effects.get(0).MiscValueA.set(AIP_Creature.ID)
AIP_Mount.Icon.setPath('ability_mount_blackdirewolf.blp')


//***************************** */
// Felfused Soulhound
//***************************** */

export const FFSH_Creature = std.CreatureTemplates.create(MODNAME, 'FFSH_Creature', 475)
std.SQL.creature_model_info.add(48637).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FFSH_Creature.Name.enGB.set("Felfused Soulhound")
FFSH_Creature.Models.clearAll()
FFSH_Creature.Models.addIds(48637)
FFSH_Creature.Scale.set(1)
FFSH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FFSH_Mount = std.Spells.create(MODNAME, 'FFSH_Mount', 22717)
FFSH_Mount.Name.enGB.set("Felfused Soulhound");
FFSH_Mount.Effects.get(0).MiscValueA.set(FFSH_Creature.ID)
FFSH_Mount.Icon.setPath('inv_soulhoundmount_blue.blp')
FFSH_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18078)
    });
});

//***************************** */
// Mighty Caravan Brutosaur
//***************************** */

export const mcb_Creature = std.CreatureTemplates.create(MODNAME, 'mcb_Creature', 475)
std.SQL.creature_model_info.add(48646).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
mcb_Creature.Name.enGB.set("Mighty Caravan Brutosaur")
mcb_Creature.Models.clearAll()
mcb_Creature.Models.addIds(48646)
mcb_Creature.Scale.set(1)
mcb_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const mcb_Mount = std.Spells.create(MODNAME, 'mcb_Mount', 22717)
mcb_Mount.Name.enGB.set("Mighty Caravan Brutosaur");
mcb_Mount.Effects.get(0).MiscValueA.set(mcb_Creature.ID)
mcb_Mount.Icon.setPath('inv_brontosaurusmount.blp')
mcb_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18045)
    });
});

//***************************** */
// Royal Snapdragon
//***************************** */

export const RSNAP_Creature = std.CreatureTemplates.create(MODNAME, 'RSNAP_Creature', 475)
std.SQL.creature_model_info.add(48646).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
RSNAP_Creature.Name.enGB.set("Royal Snapdragon")
RSNAP_Creature.Models.clearAll()
RSNAP_Creature.Models.addIds(48646)
RSNAP_Creature.Scale.set(1)
RSNAP_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const RSNAP_Mount = std.Spells.create(MODNAME, 'RSNAP_Mount', 22717)
RSNAP_Mount.Name.enGB.set("Royal Snapdragon");
RSNAP_Mount.Effects.get(0).MiscValueA.set(RSNAP_Creature.ID)
RSNAP_Mount.Icon.setPath('inv_snapdragonmount01.blp')
RSNAP_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18222)
    });
});


//***************************** */
// Dark Hyena
//***************************** */

export const DHyena_Creature = std.CreatureTemplates.create(MODNAME, 'DHyena_Creature', 475)
std.SQL.creature_model_info.add(48739).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DHyena_Creature.Name.enGB.set("Warlord's Dark Hyena")
DHyena_Creature.Models.clearAll()
DHyena_Creature.Models.addIds(48739)
DHyena_Creature.Scale.set(1)
DHyena_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DHyena_Mount = std.Spells.create(MODNAME, 'DHyena_Mount', 42777)
DHyena_Mount.Name.enGB.set("Warlord's Dark Hyena");
DHyena_Mount.Effects.get(0).MiscValueA.set(DHyena_Creature.ID)
DHyena_Mount.Icon.setPath('inv_hyena2mount_dark.blp')
DHyena_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18036)
    });
});


//***************************** */
// Darnassian  Warsaber
//***************************** */

export const DWW_Creature = std.CreatureTemplates.create(MODNAME, 'DWW_Creature', 475)
std.SQL.creature_model_info.add(48754).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DWW_Creature.Name.enGB.set("Darnassian Warsaber")
DWW_Creature.Models.clearAll()
DWW_Creature.Models.addIds(48754)
DWW_Creature.Scale.set(1)
DWW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DWW_Mount = std.Spells.create(MODNAME, 'DWW_Mount', 63637)
DWW_Mount.Name.enGB.set("Darnassian Warsaber");
DWW_Mount.Effects.get(0).MiscValueA.set(DWW_Creature.ID)
DWW_Mount.Icon.setPath('ability_mount_warnightsaber.blp')

/***************************** */
// White Purple Bonesteed
//***************************** */

export const Purple_VBS_Creature = std.CreatureTemplates.create(MODNAME, 'Purple_VBS_Creature', 475)
std.SQL.creature_model_info.add(48755).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Purple_VBS_Creature.Name.enGB.set("Vicious Purple Bonesteed")
Purple_VBS_Creature.Models.clearAll()
Purple_VBS_Creature.Models.addIds(48755)
Purple_VBS_Creature.Scale.set(1)
Purple_VBS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Purple_VBS = std.Spells.create(MODNAME, 'Purple_VBS', 17481)
Purple_VBS.Name.enGB.set("Vicious Purple Bonesteed");
Purple_VBS.Effects.get(0).MiscValueA.set(Purple_VBS_Creature.ID)
Purple_VBS.Icon.setPath('inv_skeletalwarhorse_01_purple.blp')

/***************************** */
// Stonehide Elderhorn
//***************************** */

export const STE_Creature = std.CreatureTemplates.create(MODNAME, 'STE_Creature', 475)
std.SQL.creature_model_info.add(48756).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
STE_Creature.Name.enGB.set("Stonehide Elderhorn")
STE_Creature.Models.clearAll()
STE_Creature.Models.addIds(48756)
STE_Creature.Scale.set(1)
STE_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const STE_MOUNT = std.Spells.create(MODNAME, 'STE_MOUNT', 17481)
STE_MOUNT.Name.enGB.set("Stonehide Elderhorn");
STE_MOUNT.Effects.get(0).MiscValueA.set(STE_Creature.ID)
STE_MOUNT.Icon.setPath('inv_misc_moosehoof_black.blp')
STE_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18040)
    });
});

/***************************** */
// Snowfeather Hunter
//***************************** */

export const PBGAZ_Creature = std.CreatureTemplates.create(MODNAME, 'PBGAZ_Creature', 475)
std.SQL.creature_model_info.add(49014).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
PBGAZ_Creature.Name.enGB.set("Snowfeather Hunter")
PBGAZ_Creature.Models.clearAll()
PBGAZ_Creature.Models.addIds(49014)
PBGAZ_Creature.Scale.set(1)
PBGAZ_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const PBGAZ_MOUNT = std.Spells.create(MODNAME, 'PBGAZ_MOUNT', 17481)
PBGAZ_MOUNT.Name.enGB.set("Snowfeather Hunter");
PBGAZ_MOUNT.Effects.get(0).MiscValueA.set(PBGAZ_Creature.ID)
PBGAZ_MOUNT.Icon.setPath('inv_falcosauroswhite.blp')
PBGAZ_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18932)
    });
});

/***************************** */
// Briliant Direbeak
//***************************** */

export const BDB_Creature = std.CreatureTemplates.create(MODNAME, 'BDB_Creature', 475)
std.SQL.creature_model_info.add(49013).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
BDB_Creature.Name.enGB.set("Briliant Direbeak")
BDB_Creature.Models.clearAll()
BDB_Creature.Models.addIds(49013)
BDB_Creature.Scale.set(1)
BDB_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const BDB_MOUNT = std.Spells.create(MODNAME, 'BDB_MOUNT', 17481)
BDB_MOUNT.Name.enGB.set("Briliant Direbeak");
BDB_MOUNT.Effects.get(0).MiscValueA.set(BDB_Creature.ID)
BDB_MOUNT.Icon.setPath('inv_falcosaurosred.blp')
BDB_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18932)
    });
});

/***************************** */
// Viridian Sharptalon
//***************************** */

export const VST_Creature = std.CreatureTemplates.create(MODNAME, 'VST_Creature', 475)
std.SQL.creature_model_info.add(49012).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
VST_Creature.Name.enGB.set("Briliant Direbeak")
VST_Creature.Models.clearAll()
VST_Creature.Models.addIds(49012)
VST_Creature.Scale.set(1)
VST_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const VST_MOUNT = std.Spells.create(MODNAME, 'VST_MOUNT', 17481)
VST_MOUNT.Name.enGB.set("Briliant Direbeak");
VST_MOUNT.Effects.get(0).MiscValueA.set(VST_Creature.ID)
VST_MOUNT.Icon.setPath('inv_falcosaurosgreen.blp')
VST_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18932)
    });
});

/***************************** */
// Grey Riding Yak
//***************************** */

export const GRY_Creature = std.CreatureTemplates.create(MODNAME, 'GRY_Creature', 475)
std.SQL.creature_model_info.add(49017).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GRY_Creature.Name.enGB.set("Grey Riding Yak")
GRY_Creature.Models.clearAll()
GRY_Creature.Models.addIds(49017)
GRY_Creature.Scale.set(1)
GRY_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GRY_MOUNT = std.Spells.create(MODNAME, 'GRY_MOUNT', 17481)
GRY_MOUNT.Name.enGB.set("Grey Riding Yak");
GRY_MOUNT.Effects.get(0).MiscValueA.set(GRY_Creature.ID)
GRY_MOUNT.Icon.setPath('ability_mount_yakmountgrey.blp')
GRY_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18937)
    });
});

/***************************** */
// Faerie Dragon
//***************************** */

export const FDM_Creature = std.CreatureTemplates.create(MODNAME, 'FDM_Creature', 475)
std.SQL.creature_model_info.add(49122).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FDM_Creature.Name.enGB.set("Swift Faerie Dragon")
FDM_Creature.Models.clearAll()
FDM_Creature.Models.addIds(49122)
FDM_Creature.Scale.set(1)
FDM_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FDM_MOUNT = std.Spells.create(MODNAME, 'FDM_MOUNT', 59569)
FDM_MOUNT.Name.enGB.set("Swift Faerie Dragon");
FDM_MOUNT.Effects.get(0).MiscValueA.set(FDM_Creature.ID)
FDM_MOUNT.Icon.setPath('inv_faeriedragonmount.blp')

/***************************** */
// Galakras, Son of Galakrond
//***************************** */

export const GOG_Creature = std.CreatureTemplates.create(MODNAME, 'GOG_Creature', 475)
std.SQL.creature_model_info.add(49147).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
GOG_Creature.Name.enGB.set("Galakras, Son of Galakrond")
GOG_Creature.Models.clearAll()
GOG_Creature.Models.addIds(49147)
GOG_Creature.Scale.set(1)
GOG_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const GOG_MOUNT = std.Spells.create(MODNAME, 'GOG_MOUNT', 59569)
GOG_MOUNT.Name.enGB.set("Galakras, Son of Galakrond");
GOG_MOUNT.Effects.get(0).MiscValueA.set(GOG_Creature.ID)
GOG_MOUNT.Icon.setPath('inv_belt_44a.blp')


/***************************** */
// Spectral Gryphon
//***************************** */

export const SG_Creature = std.CreatureTemplates.create(MODNAME, 'SG_Creature', 475)
std.SQL.creature_model_info.add(39546).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SG_Creature.Name.enGB.set("Spectral Gryphon")
SG_Creature.Models.clearAll()
SG_Creature.Models.addIds(39546)
SG_Creature.Scale.set(1)
SG_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SG_MOUNT = std.Spells.create(MODNAME, 'SG_MOUNT', 61229)
SG_MOUNT.Name.enGB.set("Spectral Gryphon");
SG_MOUNT.Effects.get(0).MiscValueA.set(SG_Creature.ID)
SG_MOUNT.Icon.setPath('ability_mount_spectralgryphon.blp')

/***************************** */
// Spectral Windrider
//***************************** */

export const SW_Creature = std.CreatureTemplates.create(MODNAME, 'SW_Creature', 475)
std.SQL.creature_model_info.add(39547).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SW_Creature.Name.enGB.set("Spectral Windrider")
SW_Creature.Models.clearAll()
SW_Creature.Models.addIds(39547)
SW_Creature.Scale.set(1)
SW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SW_MOUNT = std.Spells.create(MODNAME, 'SW_MOUNT', 61230)
SW_MOUNT.Name.enGB.set("Spectral Windrider");
SW_MOUNT.Effects.get(0).MiscValueA.set(SW_Creature.ID)
SW_MOUNT.Icon.setPath('ability_mount_spectralwyvern.blp')

/***************************** */
// Swift Alliance Riverbeast
//***************************** */

export const SAH_Creature = std.CreatureTemplates.create(MODNAME, 'SAH_Creature', 475)
std.SQL.creature_model_info.add(39547).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SAH_Creature.Name.enGB.set("Swift Alliance Riverbeast")
SAH_Creature.Models.clearAll()
SAH_Creature.Models.addIds(39547)
SAH_Creature.Scale.set(1)
SAH_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SAH_MOUNT = std.Spells.create(MODNAME, 'SAH_MOUNT', 61230)
SAH_MOUNT.Name.enGB.set("Swift Alliance Riverbeast");
SAH_MOUNT.Effects.get(0).MiscValueA.set(SAH_Creature.ID)
SAH_MOUNT.Icon.setPath('inv_viciousalliancehippo.blp')

/***************************** */
// Brinedeep Bottom-Feeder
//***************************** */

export const SSCSW_Creature = std.CreatureTemplates.create(MODNAME, 'SSCSW_Creature', 475)
std.SQL.creature_model_info.add(68849).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SSCSW_Creature.Name.enGB.set("Brinedeep Bottom-Feeder")
SSCSW_Creature.Models.clearAll()
SSCSW_Creature.Models.addIds(68849)
SSCSW_Creature.Scale.set(1)
SSCSW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SSCSW_MOUNT = std.Spells.create(MODNAME, 'SSCSW_MOUNT', 61230)
SSCSW_MOUNT.Name.enGB.set("Brinedeep Bottom-Feeder");
SSCSW_MOUNT.Effects.get(0).MiscValueA.set(SSCSW_Creature.ID)
SSCSW_MOUNT.Icon.setPath('inv_fishmount.blp')

/***************************** */
// Dark Phoenix
//***************************** */

export const DP_Creature = std.CreatureTemplates.create(MODNAME, 'DP_Creature', 475)
std.SQL.creature_model_info.add(37145).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
DP_Creature.Name.enGB.set("Dark Phoenix")
DP_Creature.Models.clearAll()
DP_Creature.Models.addIds(37145)
DP_Creature.Scale.set(1)
DP_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const DP_MOUNT = std.Spells.create(MODNAME, 'DP_MOUNT', 61230)
DP_MOUNT.Name.enGB.set("Dark Phoenix");
DP_MOUNT.Effects.get(0).MiscValueA.set(DP_Creature.ID)
DP_MOUNT.Icon.setPath('inv_mount_darkphoenixa.blp')
DP_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(10888)
    });
});


/***************************** */
// Niuzao, the Black Ox
//***************************** */

export const NTBO_Creature = std.CreatureTemplates.create(MODNAME, 'NTBO_Creature', 475)
std.SQL.creature_model_info.add(939289).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
NTBO_Creature.Name.enGB.set("Niuzao, the Black Ox")
NTBO_Creature.Models.clearAll()
NTBO_Creature.Models.addIds(939289)
NTBO_Creature.Scale.set(1)
NTBO_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const NTBO_MOUNT = std.Spells.create(MODNAME, 'NTBO_MOUNT', 17481)
NTBO_MOUNT.Name.enGB.set("Niuzao, the Black Ox");
NTBO_MOUNT.Effects.get(0).MiscValueA.set(NTBO_Creature.ID)
NTBO_MOUNT.Icon.setPath('inv_pet_yakgod.blp')
NTBO_MOUNT.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266851)
    });
});

/***************************** */
// Heavenly Ruby Cloud Serpent
//***************************** */

export const HRCS_Creature = std.CreatureTemplates.create(MODNAME, 'HRCS_Creature', 475)
std.SQL.creature_model_info.add(939291).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HRCS_Creature.Name.enGB.set("Heavenly Ruby Cloud Serpent")
HRCS_Creature.Models.clearAll()
HRCS_Creature.Models.addIds(939291)
HRCS_Creature.Scale.set(1)
HRCS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HRCS_Mount = std.Spells.create(MODNAME, 'HRCS_Mount', 59569)
HRCS_Mount.Name.enGB.set("Heavenly Ruby Cloud Serpent");
HRCS_Mount.Effects.get(0).MiscValueA.set(HRCS_Creature.ID)
HRCS_Mount.Icon.setPath('inv_pandarenserpentgodmount_red.blp')
HRCS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18956)
    });
});

/***************************** */
// Heavenly Azure Cloud Serpent
//***************************** */

export const HACS_Creature = std.CreatureTemplates.create(MODNAME, 'HACS_Creature', 475)
std.SQL.creature_model_info.add(939290).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HACS_Creature.Name.enGB.set("Heavenly Azure Cloud Serpent")
HACS_Creature.Models.clearAll()
HACS_Creature.Models.addIds(939290)
HACS_Creature.Scale.set(1)
HACS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HACS_Mount = std.Spells.create(MODNAME, 'HACS_Mount', 59569)
HACS_Mount.Name.enGB.set("Heavenly Azure Cloud Serpent");
HACS_Mount.Effects.get(0).MiscValueA.set(HACS_Creature.ID)
HACS_Mount.Icon.setPath('inv_bluegodcloudserpent.blp')
HACS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18956)
    });
});

/***************************** */
// Heavenly Gold Cloud Serpent
//***************************** */

export const HGCS_Creature = std.CreatureTemplates.create(MODNAME, 'HGCS_Creature', 475)
std.SQL.creature_model_info.add(939292).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
HGCS_Creature.Name.enGB.set("Heavenly Golden Cloud Serpent")
HGCS_Creature.Models.clearAll()
HGCS_Creature.Models.addIds(939292)
HGCS_Creature.Scale.set(1)
HGCS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const HGCS_Mount = std.Spells.create(MODNAME, 'HGCS_Mount', 59569)
HGCS_Mount.Name.enGB.set("Heavenly Golden Cloud Serpent");
HGCS_Mount.Effects.get(0).MiscValueA.set(HGCS_Creature.ID)
HGCS_Mount.Icon.setPath('inv_pandarenserpentgodmount_gold.blp')
HGCS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(18956)
    });
});

/***************************** */
// Yu'lon, the Jade Serpent
//***************************** */

export const YTJS_Creature = std.CreatureTemplates.create(MODNAME, 'YTJS_Creature', 475)
std.SQL.creature_model_info.add(71590).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
YTJS_Creature.Name.enGB.set("Yu'lon, the Jade Serpent")
YTJS_Creature.Models.clearAll()
YTJS_Creature.Models.addIds(71590)
YTJS_Creature.Scale.set(1)
YTJS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const YTJS_Mount = std.Spells.create(MODNAME, 'YTJS_Mount', 59569)
YTJS_Mount.Name.enGB.set("Yu'lon, the Jade Serpent");
YTJS_Mount.Effects.get(0).MiscValueA.set(YTJS_Creature.ID)
YTJS_Mount.Icon.setPath('inv_pandarenserpentgodmount_gold.blp')
YTJS_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266852)
    });
});

/***************************** */
// Chi-Ji, the Red Crane
//***************************** */

export const CJTRC_Creature = std.CreatureTemplates.create(MODNAME, 'CJTRC_Creature', 475)
std.SQL.creature_model_info.add(40924).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
CJTRC_Creature.Name.enGB.set("Chi-Ji, the Red Crane")
CJTRC_Creature.Models.clearAll()
CJTRC_Creature.Models.addIds(40924)
CJTRC_Creature.Scale.set(1)
CJTRC_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const CJTRC_Mount = std.Spells.create(MODNAME, 'CJTRC_Mount', 59569)
CJTRC_Mount.Name.enGB.set("Chi-Ji, the Red Crane");
CJTRC_Mount.Effects.get(0).MiscValueA.set(CJTRC_Creature.ID)
CJTRC_Mount.Icon.setPath('Inv_pet_cranegod.blp')
CJTRC_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(266852)
    });
});

/***************************** */
// Meat Wagon
//***************************** */

export const MW_Creature = std.CreatureTemplates.create(MODNAME, 'MW_Creature', 475)
std.SQL.creature_model_info.add(88123).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
MW_Creature.Name.enGB.set("Meat Wagon")
MW_Creature.Models.clearAll()
MW_Creature.Models.addIds(88123)
MW_Creature.Scale.set(1)
MW_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const MW_Mount = std.Spells.create(MODNAME, 'MW_Mount', 59569)
MW_Mount.Name.enGB.set("Meat Wagon");
MW_Mount.Effects.get(0).MiscValueA.set(MW_Creature.ID)
MW_Mount.Icon.setPath('inv_encrypted05.blp')
MW_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(13880)
    });
});

/***************************** */
// Hogrus, Swine of Fortune
//***************************** */

export const Hogrus_Creature = std.CreatureTemplates.create(MODNAME, 'Hogrus_Creature', 475)
std.SQL.creature_model_info.add(90398).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
Hogrus_Creature.Name.enGB.set("Hogrus, Swine of Good Fortune")
Hogrus_Creature.Models.clearAll()
Hogrus_Creature.Models.addIds(90398)
Hogrus_Creature.Scale.set(1)
Hogrus_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const Hogrus_Mount = std.Spells.create(MODNAME, 'Hogrus_Mount', 59569)
Hogrus_Mount.Name.enGB.set("Hogrus, Swine of Good Fortune");
Hogrus_Mount.Effects.get(0).MiscValueA.set(Hogrus_Creature.ID)
Hogrus_Mount.Icon.setPath('inv_encrypted06.blp')
Hogrus_Mount.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(3036)
    });
});

/***************************** */
// Fossilized Raptor
//***************************** */

export const FR_Creature = std.CreatureTemplates.create(MODNAME, 'FR_Creature', 475)
std.SQL.creature_model_info.add(33410).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
FR_Creature.Name.enGB.set("Fossilized Raptor")
FR_Creature.Models.clearAll()
FR_Creature.Models.addIds(33410)
FR_Creature.Scale.set(1)
FR_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const FR_Mount = std.Spells.create(MODNAME, 'FR_Mount', 24242)
FR_Mount.Name.enGB.set("Fossilized Raptor");
FR_Mount.Effects.get(0).MiscValueA.set(FR_Creature.ID)
FR_Mount.Icon.setPath('ability_mount_fossilizedraptor.blp')

/***************************** */
// Armored Skyscreamer
//***************************** */

export const ASS_Creature = std.CreatureTemplates.create(MODNAME, 'ASS_Creature', 475)
std.SQL.creature_model_info.add(47256).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
ASS_Creature.Name.enGB.set("Armored Skyscreamer")
ASS_Creature.Models.clearAll()
ASS_Creature.Models.addIds(47256)
ASS_Creature.Scale.set(1)
ASS_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const ASS_Mount = std.Spells.create(MODNAME, 'ASS_Mount', 59569)
ASS_Mount.Name.enGB.set("Armored Skyscreamer");
ASS_Mount.Effects.get(0).MiscValueA.set(ASS_Creature.ID)
ASS_Mount.Icon.setPath('ability_mount_pterodactylmount.blp')

/***************************** */
// Sunwarmed Furline
//***************************** */

export const SWF_Creature = std.CreatureTemplates.create(MODNAME, 'SWF_Creature', 475)
std.SQL.creature_model_info.add(99008).BoundingRadius.set(0).CombatReach.set(0).Gender.set(2).DisplayID_Other_Gender.set(0)
SWF_Creature.Name.enGB.set("Sunwarmed Furline")
SWF_Creature.Models.clearAll()
SWF_Creature.Models.addIds(99008)
SWF_Creature.Scale.set(1)
SWF_Creature.MovementSpeed.set(1.0)

// -- Mount Spell
export const SWF_Mount = std.Spells.create(MODNAME, 'SWF_Mount', 24242)
SWF_Mount.Name.enGB.set("Sunwarmed Furline");
SWF_Mount.Effects.get(0).MiscValueA.set(SWF_Creature.ID)
SWF_Mount.Icon.setPath('ability_mount_fossilizedraptor.blp')