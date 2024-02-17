import {std} from "wow/wotlk"
const MODNAME = "Visuals" 

//have to merge ascension dbc with alastor dbc so i can use this



//  Do Not Forget to add
//  SpellVisual|custom:spellvisuals|1|17160|
//  SpellVisualKit|custom:spellvisualkits|1|16160|
//  to the ids.txt, otherwise visuals will not work.

// Barbarous Osteowings
const Visual0 = std.Spells.create(MODNAME, 'Visual0', 71856)
Visual0.Name.enGB.set('Barbarous Osteowings');
Visual0.Visual.set(25016)
Visual0.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')
Visual0.AuraDescription.enGB.set('Gives you')
Visual0.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Regrown Osteowings
const Visual1 = std.Spells.create(MODNAME, 'Visual1', 71856)
Visual1.Name.enGB.set('Regrown Osteowings');
Visual1.Visual.set(25017)
Visual1.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')
Visual1.AuraDescription.enGB.set('Gives you')
Visual1.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Regrown Osteowings
const Visual3 = std.Spells.create(MODNAME, 'Visual2', 71856)
Visual3.Name.enGB.set('Osteowings of the Necrolords');
Visual3.Visual.set(25018)
Visual3.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')
Visual3.AuraDescription.enGB.set('Gives you')
Visual3.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Harmonious Wings of the Ascended
const Visual4 = std.Spells.create(MODNAME, 'Visual4', 71856)
Visual4.Name.enGB.set('Harmonious Wings of the Ascended');
Visual4.Visual.set(25044)
Visual4.Icon.setPath('inv_cape_special_bastion_d_03.blp')
Visual4.AuraDescription.enGB.set('Gives you')
Visual4.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Selfless Wings of the Ascended
const Visual5 = std.Spells.create(MODNAME, 'Visual5', 71856)
Visual5.Name.enGB.set('Selfless Wings of the Ascended');
Visual5.Visual.set(25045)
Visual5.Icon.setPath('inv_cape_special_bastion_d_03.blp')
Visual5.AuraDescription.enGB.set('Gives you')
Visual5.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Discordant Wings of the Ascended
const Visual6 = std.Spells.create(MODNAME, 'Visual6', 71856)
Visual6.Name.enGB.set('Discordant Wings of the Ascended');
Visual6.Visual.set(25046)
Visual6.Icon.setPath('inv_cape_special_bastion_d_03.blp')
Visual6.AuraDescription.enGB.set('Gives you')
Visual6.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Reverant Wings of the Ascended
const Visual7 = std.Spells.create(MODNAME, 'Visual7', 71856)
Visual7.Name.enGB.set('Reverant Wings of the Ascended');
Visual7.Visual.set(25047)
Visual7.Icon.setPath('inv_cape_special_bastion_d_03.blp')
Visual7.AuraDescription.enGB.set('Gives you')
Visual7.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Skull of the Man'ari - Yellow 2
const Visual9 = std.Spells.create(MODNAME, 'Visual9', 71856)
Visual9.Name.enGB.set("Skull of the Man'ari - Yellow 2");
Visual9.Visual.set(21694)
Visual9.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual9.AuraDescription.enGB.set('Gives you')
Visual9.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Skull of the Man'ari - Yellow
const Visual8 = std.Spells.create(MODNAME, 'Visual8', 71856)
Visual8.Name.enGB.set("Skull of the Man'ari - Yellow");
Visual8.Visual.set(7341)
Visual8.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual8.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual9.ID)
)
Visual8.Description.enGB.set("Invoke the Skull of the Man'ari to circle you.")


// Skull of the Man'ari - Red 2
const Visual11 = std.Spells.create(MODNAME, 'Visual11', 71856)
Visual11.Name.enGB.set("Skull of the Man'ari - Red 2");
Visual11.Visual.set(21693)
Visual11.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual11.AuraDescription.enGB.set('Gives you')
Visual11.Attributes.HIDE_FROM_AURA_BAR.set(0)


// Skull of the Man'ari - Red
const Visual10 = std.Spells.create(MODNAME, 'Visual10', 71856)
Visual10.Name.enGB.set("Skull of the Man'ari - Red");
Visual10.Visual.set(7341)
Visual10.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual10.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual11.ID)
)
Visual10.Description.enGB.set("Invoke the Skull of the Man'ari to circle you.")

// Skull of the Man'ari - Purple 2 
const Visual13 = std.Spells.create(MODNAME, 'Visual13', 71856)
Visual13.Name.enGB.set("Skull of the Man'ari - Purple 2");
Visual13.Visual.set(21692)
Visual13.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual13.AuraDescription.enGB.set('Gives you')
Visual13.Attributes.HIDE_FROM_AURA_BAR.set(0)

// Skull of the Man'ari - Purple 
const Visual12 = std.Spells.create(MODNAME, 'Visual12', 71856)
Visual12.Name.enGB.set("Skull of the Man'ari - Purple ");
Visual12.Visual.set(7341)
Visual12.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual12.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual13.ID)
)
Visual13.Description.enGB.set("Invoke the Skull of the Man'ari to circle you.")

// Skull of the Man'ari - Green 2 
const Visual15 = std.Spells.create(MODNAME, 'Visual15', 71856)
Visual15.Name.enGB.set("Skull of the Man'ari - Green 2");
Visual15.Visual.set(21691)
Visual15.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')

// Skull of the Man'ari - Green 
const Visual14 = std.Spells.create(MODNAME, 'Visual14', 71856)
Visual14.Name.enGB.set("Skull of the Man'ari - Green ");
Visual14.Visual.set(7341)
Visual14.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual14.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual15.ID)
)


// Skull of the Man'ari - Normal 2 
const Visual17 = std.Spells.create(MODNAME, 'Visual17', 71856)
Visual17.Name.enGB.set("Skull of the Man'ari");
Visual17.Visual.set(19511)
Visual17.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')

// Skull of the Man'ari - Normal 
const Visual16 = std.Spells.create(MODNAME, 'Visual16', 71856)
Visual16.Name.enGB.set("Skull of the Man'ari ");
Visual16.Visual.set(7341)
Visual16.Icon.setPath('inv_offhand_1h_artifactskulloferedar_d_01.blp')
Visual16.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual17.ID)
)

// Demonic Aberrations
const Visual18 = std.Spells.create(MODNAME, 'Visual18', 71856)
Visual18.Name.enGB.set("Skull of the Man'ari");
Visual18.Visual.set(19511)
Visual18.Icon.set(25819)

// Demon Horns - Wide
const Visual19 = std.Spells.create(MODNAME, 'Visual19', 71856)
Visual19.Name.enGB.set("Demon Horns - Wide");
Visual19.Visual.set(21726)
Visual19.Icon.set(18543)

// Demon Horns - Ram
const Visual20 = std.Spells.create(MODNAME, 'Visual20', 71856)
Visual20.Name.enGB.set("Demon Horns - Ram");
Visual20.Visual.set(21724)
Visual20.Icon.set(18543)

// Demon Horns - Ram 2
const Visual21 = std.Spells.create(MODNAME, 'Visual21', 71856)
Visual21.Name.enGB.set("Demon Horns - Ram 2");
Visual21.Visual.set(21725)
Visual21.Icon.set(18543)

// Demon Horns - Oni
const Visual22 = std.Spells.create(MODNAME, 'Visual22', 71856)
Visual22.Name.enGB.set("Demon Horns - Oni");
Visual22.Visual.set(21722)
Visual22.Icon.set(18543)

// Demon Horns - Oni 2
const Visual23 = std.Spells.create(MODNAME, 'Visual23', 71856)
Visual23.Name.enGB.set("Demon Horns - Oni 2");
Visual23.Visual.set(21723)
Visual23.Icon.set(18543)

// Demon Horns - High
const Visual24 = std.Spells.create(MODNAME, 'Visual24', 71856)
Visual24.Name.enGB.set("Demon Horns - High");
Visual24.Visual.set(21721)
Visual24.Icon.set(18543)

// Demon Horns - Dreadlord
const Visual25 = std.Spells.create(MODNAME, 'Visual25', 71856)
Visual25.Name.enGB.set("Demon Horns - Dreadlord");
Visual25.Visual.set(21720)
Visual25.Icon.set(18543)

// Demon Horns - Curved
const Visual26 = std.Spells.create(MODNAME, 'Visual26', 71856)
Visual26.Name.enGB.set("Demon Horns - Curved");
Visual26.Visual.set(21719)
Visual26.Icon.set(18543)

// Demon Horns - Betrayer
const Visual27 = std.Spells.create(MODNAME, 'Visual27', 71856)
Visual27.Name.enGB.set("Demon Horns - Betrayer");
Visual27.Visual.set(21717)
Visual27.Icon.set(18543)

// Demon Horns - Betrayer 2
const Visual28 = std.Spells.create(MODNAME, 'Visual28', 71856)
Visual28.Name.enGB.set("Demon Horns - Betrayer 2");
Visual28.Visual.set(21718)
Visual28.Icon.set(18543)

// Demon Horns - Beast
const Visual29 = std.Spells.create(MODNAME, 'Visual29', 71856)
Visual29.Name.enGB.set("Demon Horns - Beast");
Visual29.Visual.set(21715)
Visual29.Icon.set(18543)

// Demon Horns - Beast 2
const Visual30 = std.Spells.create(MODNAME, 'Visual30', 71856)
Visual30.Name.enGB.set("Demon Horns - Beast 2");
Visual30.Visual.set(21716)
Visual30.Icon.set(18543)

// Pepe
const Visual31 = std.Spells.create(MODNAME, 'Visual31', 71856)
Visual31.Name.enGB.set("Pepe");
Visual31.Visual.set(19500)
Visual31.Icon.set(4664)

// Pepe
const Visual32 = std.Spells.create(MODNAME, 'Visual32', 71856)
Visual32.Name.enGB.set("Pepe");
Visual32.Visual.set(19510)
Visual32.Icon.set(4664)
Visual32.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual31.ID)
)

// Pepe - Christmas
const Visual33 = std.Spells.create(MODNAME, 'Visual33', 71856)
Visual33.Name.enGB.set("Christmas Pepe");
Visual33.Visual.set(21670)
Visual33.Icon.set(4664)

// Pepe - Christmas
const Visual34 = std.Spells.create(MODNAME, 'Visual34', 71856)
Visual34.Name.enGB.set("Christmas Pepe");
Visual34.Visual.set(19510)
Visual34.Icon.set(4664)
Visual34.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Visual33.ID)
)

// Kael's Dark Sinstone Chain
const Visual35 = std.Spells.create(MODNAME, 'Visual35', 71856)
Visual35.Name.enGB.set("Kael's Dark Sinstone Chain");
Visual35.Visual.set(25000)
Visual35.Icon.setPath('inv_cape_special_revendreth_d_03.blp')

//  Bronze-Bound Sinstone Chain
const Visual36 = std.Spells.create(MODNAME, 'Visual36', 71856)
Visual36.Name.enGB.set("Bronze-Bound Sinstone Chain");
Visual36.Visual.set(25001)
Visual36.Icon.setPath('inv_cape_special_revendreth_d_03.blp')

//  Glittering Gold Sinstone Chain
const Visual37 = std.Spells.create(MODNAME, 'Visual37', 71856)
Visual37.Name.enGB.set("Glittering Gold Sinstone Chain");
Visual37.Visual.set(25002)
Visual37.Icon.setPath('inv_cape_special_revendreth_d_03.blp')

//  Burnished Sinstone Chain
const Visual38 = std.Spells.create(MODNAME, 'Visual38', 71856)
Visual38.Name.enGB.set("Burnished Sinstone Chain");
Visual38.Visual.set(25003)
Visual38.Icon.setPath('inv_cape_special_revendreth_d_03.blp')

//  Bladesworn Battle Standard
const Visual39 = std.Spells.create(MODNAME, 'Visual39', 71856)
Visual39.Name.enGB.set("Bladesworn Battle Standard");
Visual39.Visual.set(25020)
Visual39.Icon.setPath('inv_cape_special_maldraxxus_d_01.blp')

//  Standard of the Necrolords
const Visual40 = std.Spells.create(MODNAME, 'Visual40', 71856)
Visual40.Name.enGB.set("Standard of the Necrolords");
Visual40.Visual.set(25021)
Visual40.Icon.setPath('inv_cape_special_maldraxxus_d_01.blp')

//  Standard of Death's Chosen
const Visual41 = std.Spells.create(MODNAME, 'Visual41', 71856)
Visual41.Name.enGB.set("Standard of Death's Chosen");
Visual41.Visual.set(25022)
Visual41.Icon.setPath('inv_cape_special_maldraxxus_d_01.blp')

//   Standard of Death's Chosen
const Visual42 = std.Spells.create(MODNAME, 'Visual42', 71856)
Visual42.Name.enGB.set("Standard of the Blackhound Warband");
Visual42.Visual.set(25023)
Visual42.Icon.setPath('inv_cape_special_maldraxxus_d_01.blp')

//  Death Fetish
const Visual43 = std.Spells.create(MODNAME, 'Visual43', 71856)
Visual43.Name.enGB.set("Death Fetish");
Visual43.Visual.set(25012)
Visual43.Icon.setPath('inv_cape_special_maldraxxus_d_03.blp')

//  Phylactery of the Dead Conniver
const Visual44 = std.Spells.create(MODNAME, 'Visual44', 71856)
Visual44.Name.enGB.set("Phylactery of the Dead Conniver");
Visual44.Visual.set(25013)
Visual44.Icon.setPath('inv_cape_special_maldraxxus_d_03.blp')

//  Tomalin's Seasoning Crystal
const Visual45 = std.Spells.create(MODNAME, 'Visual45', 71856)
Visual45.Name.enGB.set("Tomalin's Seasoning Crystal");
Visual45.Visual.set(25014)
Visual45.Icon.setPath('inv_cape_special_maldraxxus_d_03.blp')

//  Beckoner's Shadowy Crystal
const Visual46 = std.Spells.create(MODNAME, 'Visual46', 71856)
Visual46.Name.enGB.set("Beckoner's Shadowy Crystal");
Visual46.Visual.set(25015)
Visual46.Icon.setPath('inv_cape_special_maldraxxus_d_03.blp')

//  Ebony Crypt Keeper's Mantle
const Visual47 = std.Spells.create(MODNAME, 'Visual47', 71856)
Visual47.Name.enGB.set("Ebony Crypt Keeper's Mantle");
Visual47.Visual.set(25008)
Visual47.Icon.setPath('inv_cape_special_revendreth_d_01.blp')

//  Gleaming Crypt Keeper's Mantle
const Visual48 = std.Spells.create(MODNAME, 'Visual48', 71856)
Visual48.Name.enGB.set("Gleaming Crypt Keeper's Mantle");
Visual48.Visual.set(25010)
Visual48.Icon.setPath('inv_cape_special_revendreth_d_01.blp')

//  Burnished Crypt Keeper's Mantle
const Visual49 = std.Spells.create(MODNAME, 'Visual49', 71856)
Visual49.Name.enGB.set("Burnished Crypt Keeper's Mantle");
Visual49.Visual.set(25011)
Visual49.Icon.setPath('inv_cape_special_revendreth_d_01.blp')

//  Kassir's Crypt Keeper's Mantle
const Visual50 = std.Spells.create(MODNAME, 'Visual50', 71856)
Visual50.Name.enGB.set("Kassir's Crypt Keeper's Mantle");
Visual50.Visual.set(25009)
Visual50.Icon.setPath('inv_cape_special_revendreth_d_01.blp')

//  Mantle of Crimson Blades
const Visual51 = std.Spells.create(MODNAME, 'Visual51', 71856)
Visual51.Name.enGB.set("Mantle of Crimson Blades");
Visual51.Visual.set(25004)
Visual51.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')

//  Mantle of Burnished Blades
const Visual52 = std.Spells.create(MODNAME, 'Visual52', 71856)
Visual52.Name.enGB.set("Mantle of Burnished Blades");
Visual52.Visual.set(25005)
Visual52.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')

//  Mantle of Court Blades
const Visual53 = std.Spells.create(MODNAME, 'Visual53', 71856)
Visual53.Name.enGB.set("Mantle of Court Blades");
Visual53.Visual.set(25006)
Visual53.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')

//  Mantle of the Forgemaster's Dark Blades
const Visual54 = std.Spells.create(MODNAME, 'Visual54', 71856)
Visual54.Name.enGB.set("Mantle of the Forgemaster's Dark Blades");
Visual54.Visual.set(25007)
Visual54.Icon.setPath('inv_cape_special_maldraxxus_d_02.blp')

//  Spirit Tender's Branches
const Visual55 = std.Spells.create(MODNAME, 'Visual55', 71856)
Visual55.Name.enGB.set("Spirit Tender's Branches");
Visual55.Visual.set(25024)
Visual55.Icon.setPath('inv_cape_special_ardenweald_d_01.blp')

//  Night Courier's Branches
const Visual56 = std.Spells.create(MODNAME, 'Visual56', 71856)
Visual56.Name.enGB.set("Night Courier's Branches");
Visual56.Visual.set(25025)
Visual56.Icon.setPath('inv_cape_special_ardenweald_d_01.blp')

//  Faewoven Branches
const Visual57 = std.Spells.create(MODNAME, 'Visual57', 71856)
Visual57.Name.enGB.set("Faewoven Branches");
Visual57.Visual.set(25026)
Visual57.Icon.setPath('inv_cape_special_ardenweald_d_01.blp')

//  Winterwoven Branches
const Visual58 = std.Spells.create(MODNAME, 'Visual58', 71856)
Visual58.Name.enGB.set("Winterwoven Branches");
Visual58.Visual.set(25027)
Visual58.Icon.setPath('inv_cape_special_ardenweald_d_01.blp')

//  Faewoven Bulb
const Visual59 = std.Spells.create(MODNAME, 'Visual59', 71856)
Visual59.Name.enGB.set("Faewoven Bulb");
Visual59.Visual.set(25028)
Visual59.Icon.setPath('inv_cape_special_ardenweald_d_02.blp')

//  Spirit Tender's Bulb
const Visual60 = std.Spells.create(MODNAME, 'Visual60', 71856)
Visual60.Name.enGB.set("Spirit Tender's Bulb");
Visual60.Visual.set(25029)
Visual60.Icon.setPath('inv_cape_special_ardenweald_d_02.blp')

//  Winterwoven Bulb
const Visual61 = std.Spells.create(MODNAME, 'Visual61', 71856)
Visual61.Name.enGB.set("Winterwoven Bulb");
Visual61.Visual.set(25030)
Visual61.Icon.setPath('inv_cape_special_ardenweald_d_02.blp')

//  Winter Tender's Bulb
const Visual62 = std.Spells.create(MODNAME, 'Visual62', 71856)
Visual62.Name.enGB.set("Winter Tender's Bulb");
Visual62.Visual.set(25031)
Visual62.Icon.setPath('inv_cape_special_ardenweald_d_02.blp')

//  Winterwoven Pack
const Visual63 = std.Spells.create(MODNAME, 'Visual63', 71856)
Visual63.Name.enGB.set("Winterwoven Pack");
Visual63.Visual.set(25032)
Visual63.Icon.setPath('inv_cape_special_ardenweald_d_03.blp')

//  Spirit Tender's Pack
const Visual64 = std.Spells.create(MODNAME, 'Visual64', 71856)
Visual64.Name.enGB.set("Spirit Tender's Pack");
Visual64.Visual.set(25033)
Visual64.Icon.setPath('inv_cape_special_ardenweald_d_03.blp')

//  Spirit Tender's Pack
const Visual65 = std.Spells.create(MODNAME, 'Visual65', 71856)
Visual65.Name.enGB.set("Faewoven Pack");
Visual65.Visual.set(25034)
Visual65.Icon.setPath('inv_cape_special_ardenweald_d_03.blp')

//  Levanderwoven Pack
const Visual67 = std.Spells.create(MODNAME, 'Visual67', 71856)
Visual67.Name.enGB.set("Levanderwoven Pack");
Visual67.Visual.set(25035)
Visual67.Icon.setPath('inv_cape_special_ardenweald_d_03.blp')

//  Halo of the Harmonious
const Visual68 = std.Spells.create(MODNAME, 'Visual68', 71856)
Visual68.Name.enGB.set("Halo of the Harmonious");
Visual68.Visual.set(25036)
Visual68.Icon.setPath('inv_cape_special_bastion_d_01.blp')

//  Halo of the Selfless
const Visual69 = std.Spells.create(MODNAME, 'Visual69', 71856)
Visual69.Name.enGB.set("Halo of the Selfless");
Visual69.Visual.set(25037)
Visual69.Icon.setPath('inv_cape_special_bastion_d_01.blp')


//  Halo of the Discordant
const Visual70 = std.Spells.create(MODNAME, 'Visual70', 71856)
Visual70.Name.enGB.set("Halo of the Discordant");
Visual70.Visual.set(25038)
Visual70.Icon.setPath('inv_cape_special_bastion_d_01.blp')

//  Halo of the Reverant
const Visual71 = std.Spells.create(MODNAME, 'Visual71', 71856)
Visual71.Name.enGB.set("Halo of the Reverant");
Visual71.Visual.set(25039)
Visual71.Icon.setPath('inv_cape_special_bastion_d_01.blp')

//  Reverant Sigil of the Archon
const Visual72 = std.Spells.create(MODNAME, 'Visual72', 71856)
Visual72.Name.enGB.set("Reverant Sigil of the Archon");
Visual72.Visual.set(25040)
Visual72.Icon.setPath('inv_cape_special_bastion_d_02.blp')

//  Harmonious Sigil of the Archon
const Visual73 = std.Spells.create(MODNAME, 'Visual73', 71856)
Visual73.Name.enGB.set("Harmonious Sigil of the Archon");
Visual73.Visual.set(25041)
Visual73.Icon.setPath('inv_cape_special_bastion_d_02.blp')

//  Selfless Sigil of the Archon
const Visual74 = std.Spells.create(MODNAME, 'Visual74', 71856)
Visual74.Name.enGB.set("Selfless Sigil of the Archon");
Visual74.Visual.set(25042)
Visual74.Icon.setPath('inv_cape_special_bastion_d_02.blp')

//  Discordant Sigil of the Archon
const Visual75 = std.Spells.create(MODNAME, 'Visual75', 71856)
Visual75.Name.enGB.set("Discordant Sigil of the Archon");
Visual75.Visual.set(25042)
Visual75.Icon.setPath('inv_cape_special_bastion_d_02.blp')

//  Painbringer's Back-Prison
const Visual76 = std.Spells.create(MODNAME, 'Visual76', 71856)
Visual76.Name.enGB.set("Painbringer's Back-Prison");
Visual76.Visual.set(503000)
Visual76.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Cage of Tormented Souls
const Visual77 = std.Spells.create(MODNAME, 'Visual77', 71856)
Visual77.Name.enGB.set("Cage of Tormented Souls");
Visual77.Visual.set(503001)
Visual77.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Tormentor's Manacled Backplate
const Visual78 = std.Spells.create(MODNAME, 'Visual78', 71856)
Visual78.Name.enGB.set("Tormentor's Manacled Backplate");
Visual78.Visual.set(503002)
Visual78.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Gilded Agony Cage
const Visual79 = std.Spells.create(MODNAME, 'Visual79', 71856)
Visual79.Name.enGB.set("Gilded Agony Cage");
Visual79.Visual.set(503003)
Visual79.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Field Warden's Torture Kit
const Visual80 = std.Spells.create(MODNAME, 'Visual80', 71856)
Visual80.Name.enGB.set("Field Warden's Torture Kit");
Visual80.Visual.set(503004)
Visual80.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Cold Burden of the Damned
const Visual81 = std.Spells.create(MODNAME, 'Visual81', 71856)
Visual81.Name.enGB.set("Cold Burden of the Damned");
Visual81.Visual.set(503005)
Visual81.Icon.setPath('inv_cape_special_domination_c_01.blp')

//  Blackflame Skull Crescent
const Visual82 = std.Spells.create(MODNAME, 'Visual82', 71856)
Visual82.Name.enGB.set("Blackflame Skull Crescent");
Visual82.Visual.set(503006)
Visual82.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Gilded Skull Crescent
const Visual83 = std.Spells.create(MODNAME, 'Visual83', 71856)
Visual83.Name.enGB.set("Gilded Skull Crescent");
Visual83.Visual.set(503007)
Visual83.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Beastcaller's Skull Crescent
const Visual84 = std.Spells.create(MODNAME, 'Visual84', 71856)
Visual84.Name.enGB.set("Beastcaller's Skull Crescent");
Visual84.Visual.set(503008)
Visual84.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Exterminator's Crest of the Damned
const Visual85 = std.Spells.create(MODNAME, 'Visual85', 71856)
Visual85.Name.enGB.set("Exterminator's Crest of the Damned");
Visual85.Visual.set(503010)
Visual85.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Shadehunter's Crescent
const Visual86 = std.Spells.create(MODNAME, 'Visual86', 71856)
Visual86.Name.enGB.set("Shadehunter's Crescent");
Visual86.Visual.set(503011)
Visual86.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Jailers's Eye Crescent
const Visual87 = std.Spells.create(MODNAME, 'Visual87', 71856)
Visual87.Name.enGB.set("Jailers's Eye Crescent");
Visual87.Visual.set(503012)
Visual87.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Gilded Eye of Torment
const Visual89 = std.Spells.create(MODNAME, 'Visual89', 71856)
Visual89.Name.enGB.set("Gilded Eye of Torment");
Visual89.Visual.set(503013)
Visual89.Icon.setPath('inv_cape_special_domination_c_02.blp')


//  Gilded Eye of Torment
const Visual88 = std.Spells.create(MODNAME, 'Visual88', 71856)
Visual88.Name.enGB.set("Gilded Skull Crescent");
Visual88.Visual.set(503009)
Visual88.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Borrowed Eye Crescent
const Visual90 = std.Spells.create(MODNAME, 'Visual90', 71856)
Visual90.Name.enGB.set("Borrowed Eye Crescent");
Visual90.Visual.set(503014)
Visual90.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Borrowed Eye Crescent
const Visual91 = std.Spells.create(MODNAME, 'Visual91', 71856)
Visual91.Name.enGB.set("Gilded Eye Crescent");
Visual91.Visual.set(503015)
Visual91.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Watchful Eye of the Damned
const Visual92 = std.Spells.create(MODNAME, 'Visual92', 71856)
Visual92.Name.enGB.set("Watchful Eye of the Damned");
Visual92.Visual.set(503016)
Visual92.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Field Warden's Watchful Eye
const Visual93 = std.Spells.create(MODNAME, 'Visual93', 71856)
Visual93.Name.enGB.set("Field Warden's Watchful Eye");
Visual93.Visual.set(503017)
Visual93.Icon.setPath('inv_cape_special_domination_c_02.blp')

//  Demon Spikes - Disappears after like 3 seconds but stays active??
const Visual94 = std.Spells.create(MODNAME, 'Visual94', 71856)
Visual94.Name.enGB.set("Demon Spikes");
Visual94.Visual.set(989858)

//  Blessing of Holy Light
const Visual95 = std.Spells.create(MODNAME, 'Visual95', 71856)
Visual95.Name.enGB.set("Blessing of Holy Light");
Visual95.Visual.set(18020)

//  Headhunter's Backpack
const Visual96 = std.Spells.create(MODNAME, 'Visual96', 71856)
Visual96.Name.enGB.set("Headhunter's Backpack");
Visual96.Visual.set(18001)

//  Stylish Backpack
const Visual97 = std.Spells.create(MODNAME, 'Visual97', 71856)
Visual97.Name.enGB.set("Stylish Backpack");
Visual97.Visual.set(18002)

//  Traveler's Backpack
export const Visual98 = std.Spells.create(MODNAME, 'Visual98', 71856)
Visual98.Name.enGB.set("Traveler's Backpack");
Visual98.Visual.set(18003)

//  Wrathion's Backpack
export const Visual99 = std.Spells.create(MODNAME, 'Visual99', 71856)
Visual99.Name.enGB.set("Wrathion's Backpack");
Visual99.Visual.set(21041)