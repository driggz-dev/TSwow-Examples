const MODNAME = 'Necromancer'
import { SQL, std } from "wow/wotlk";

// Starting Gear Creation
const NECRO_STARTER_ROBE = std.Items
    .create(MODNAME,'NECROSTARTERROBE',10001)
    NECRO_STARTER_ROBE.Name.enGB.set("Apprentice Necromancer's Robes");
    NECRO_STARTER_ROBE.Quality.set("WHITE")
    NECRO_STARTER_ROBE.Stats.clearAll()
    NECRO_STARTER_ROBE.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_ROBE.Price.setAsCopper(1,1,1)
    NECRO_STARTER_ROBE.RequiredLevel.set(1)
    NECRO_STARTER_ROBE.Armor.set(3)

    const NECRO_STARTER_PANTS = std.Items
    .create(MODNAME,'NECROSTARTERPANTS',9999)
    NECRO_STARTER_PANTS.Name.enGB.set("Apprentice Necromancer's Pants");
    NECRO_STARTER_PANTS.Quality.set("WHITE")
    NECRO_STARTER_PANTS.Stats.clearAll()
    NECRO_STARTER_PANTS.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_PANTS.Price.setAsCopper(1,1,1)
    NECRO_STARTER_PANTS.RequiredLevel.set(1)
    NECRO_STARTER_PANTS.Armor.set(2)

    const NECRO_STARTER_BOOTS = std.Items.create( MODNAME, 'NECROSTARTERSHOES', 10026)
    NECRO_STARTER_BOOTS.Name.enGB.set("Apprentice Necromancer's Shoes");
    NECRO_STARTER_BOOTS.Quality.set("WHITE")
    NECRO_STARTER_BOOTS.Stats.clearAll()
    NECRO_STARTER_BOOTS.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_BOOTS.Price.setAsCopper(1,1,1)
    NECRO_STARTER_BOOTS.RequiredLevel.set(1)
    NECRO_STARTER_BOOTS.Armor.set(1)

    const NECRO_STARTER_SCYTHE = std.Items.create( MODNAME, 'NECROSTARTERSCYTHE', 20978)
    NECRO_STARTER_SCYTHE.Name.enGB.set("Apprentice's Scythe");
    NECRO_STARTER_SCYTHE.Quality.set("WHITE")
    NECRO_STARTER_SCYTHE.Bonding.NO_BOUNDS.set()
    NECRO_STARTER_SCYTHE.Stats.clearAll()
    NECRO_STARTER_SCYTHE.DisplayInfo.set(39287)
    NECRO_STARTER_SCYTHE.Price.setAsCopper(1,1,1)
    NECRO_STARTER_SCYTHE.RequiredLevel.set(1)
    NECRO_STARTER_SCYTHE.Damage.clearAll()
    NECRO_STARTER_SCYTHE.Damage.addPhysical(3,5)


/******************************************************************
 * Necromancer Class
 ******************************************************************/

// Class Creation & Description
export const NECROMANCER = std.Classes.create(MODNAME, 'Necromancer', 'MAGE')
NECROMANCER.Name.enGB.set('Necromancer');
NECROMANCER.Races.add(['HUMAN', 'DWARF', 'GNOME', 'ORC', 'UNDEAD', 'TROLL',])
NECROMANCER.UI.Color.set(0x770077);

NECROMANCER.UI.Info.add('- Role: Damage, Tank')
NECROMANCER.UI.Info.add('- Light Armor (Cloth)')
NECROMANCER.UI.Info.add('- Can control the dead')
NECROMANCER.UI.Info.add('- Master of the Dark Arts')
NECROMANCER.UI.Info.add('- Uses mana as a resource')
NECROMANCER.UI.Description
    .set("Necromancers have been feared in Azeroth long before the reign of destruction the Lich King has wrought upon the world's nations. They are said to once be mages, who have an unnatural talent and obsession with the Dark Arts and practice them in utmost secrecy. The most foul, Reanimation, is the most well known practice of Necromancy. This is not their only focus though, Necromancers also can specialize in Poison, Bones, Curses, and Blood Magic. There are rumors spreading that a group of subordinates under Kel'Thuzad have left the Cult of the Damned, and they joined forces with the Alliance and Horde factions to attempt to stop the Lich King's influence once and for all. One has to wonder though, is this their true goal?")



// Class Starting Skills
std.EquipSkills.Maces1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Swords1H.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Staves.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Daggers.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Cloth.enableAutolearn(NECROMANCER.Mask)
std.EquipSkills.Wands.enableAutolearn(NECROMANCER.Mask)

// Adding Starting Gear to Class
NECROMANCER.Races.forEach(x=>{
    x.Outfits.both(gear=>{
        gear.Items.clearAll()
        gear.Items.add(NECRO_STARTER_ROBE.ID)
        gear.Items.add(NECRO_STARTER_PANTS.ID)
        gear.Items.add(NECRO_STARTER_BOOTS.ID)
        gear.Items.add(NECRO_STARTER_SCYTHE.ID)
    })
})

// Allowing Necromancer to queue as a tank, DPS isn't needed since class is based upon mage. So now they can be DPS & Tank for RDF queues.
NECROMANCER.Roles.Tank.set(1)

/******************************************************************
 * Necromancer Skill Lines
 ******************************************************************/

export const REANIMATION = std.SkillLines
    .create(MODNAME, 'Reanimation-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Reanimation')
REANIMATION.Icon.set(120016)

export const POISON_AND_BONES = std.SkillLines
    .create(MODNAME, 'Poison-and-Bones-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Poison and Bones')
    POISON_AND_BONES.Icon.set(120019)

export const CURSES_AND_BLOOD = std.SkillLines
    .create(MODNAME, 'Curses-and-Blood-skill')
    .Category.CLASS.set()
    .RaceClassInfos.add([NECROMANCER.Mask])
    .Name.enGB.set('Curses and Blood')
    CURSES_AND_BLOOD.Icon.set(120017)

// Custom Weapon Type - Scythe
std.DBC.ItemSubClass.add(12, 14)
    .DisplayName.enGB.set('Scythe')
    .WeaponAttackSeq.set(293123)










/******************************************************************
 * Reanimation Spells
 ******************************************************************/

// Raise Skeleton Initiate (Lvl 1)
export const RAISE_SKELETON_INITIATE = std.Spells.create(MODNAME, 'Raise-Skeleton-Initiate', 688)
RAISE_SKELETON_INITIATE.Name.enGB.set('Reanimation: Skeleton Initiate');
RAISE_SKELETON_INITIATE.Description.enGB.set('Reanimate an Initiate Skeleton Warrior from its postmortem slumber. The skeleton will fight for the Necromancer until its demise.');
RAISE_SKELETON_INITIATE.Power.PowerCostPercent.set(50)
RAISE_SKELETON_INITIATE.Effects.get(0).PointsBase.set(1)
RAISE_SKELETON_INITIATE.CastTime.setSimple(0)
RAISE_SKELETON_INITIATE.Effects.get(0).PointsDieSides.set(1)
RAISE_SKELETON_INITIATE.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(2517)
    });
});
RAISE_SKELETON_INITIATE.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_OMNI.set()
    )
)
RAISE_SKELETON_INITIATE.SkillLines.add(REANIMATION.ID)
RAISE_SKELETON_INITIATE.AutoLearn.add(1, NECROMANCER.Mask)
export const SKELETONINITIATE = std.CreatureTemplates.create(MODNAME, 'Risen-Skeleton-Initiate', 11258)
SKELETONINITIATE.Name.enGB.set('Skeleton Initiate')
SKELETONINITIATE.Scale.set(1.1)
SQL.creature_equip_template.add(SKELETONINITIATE.ID, 1)
    .ItemID1.set(25)
    .ItemID2.set(1166)
SKELETONINITIATE.Type.UNDEAD.set()
SKELETONINITIATE.UnitClass.WARRIOR.set()
SKELETONINITIATE.Stats.DamageMod.set(4.5);
SKELETONINITIATE.Stats.HealthMod.set(1.0)
SKELETONINITIATE.AttackTime.MeleeBase.set(3400)
RAISE_SKELETON_INITIATE.Effects.get(0).MiscValueA.set(SKELETONINITIATE.ID)
RAISE_SKELETON_INITIATE.Effects.get(0).MiscValueB.set(3000)
RAISE_SKELETON_INITIATE.Icon.set(1611)
SKELETONINITIATE.Rank.NORMAL.set()
SKELETONINITIATE.row.PetSpellDataId.set(20000)

// Summon Abomination Spell (Talent)

export const SUMMON_ABOMINATION = std.Spells
    // base the spell on "Summon Imp"
    .create(MODNAME, 'Summon-Abomination', 688)
SUMMON_ABOMINATION.Name.enGB.set('Summon Abomination');
SUMMON_ABOMINATION.Description.enGB.set('Summon an Abomination under the command of the Necromancer');
// Changes the summoned creature
SUMMON_ABOMINATION.Effects.get(0).MiscValueA.set(8543);
SUMMON_ABOMINATION.SkillLines.add(REANIMATION.ID)
SUMMON_ABOMINATION.Icon.setFullPath('Interface\\Icons\\Achievement_Boss_patchwerk.blp')


// SkeletonMage 
export const SkeletonMage = std.CreatureTemplates.create(MODNAME, 'SkeletonMage', 29188)
SkeletonMage.Name.enGB.set("Skeleton Mage")
SkeletonMage.Scale.set(0.5)
SkeletonMage.MovementSpeed.set(1.0)
SkeletonMage.Stats.DamageMod.set(10)
SkeletonMage.Stats.HealthMod.set(0.5)
SkeletonMage.Rank.NORMAL.set()
SkeletonMage.row.PetSpellDataId.set(20002)


// SkeletonMage Spell
const Reanimation_SkeletonMage = std.Spells.create(MODNAME, 'Reanimation_ Skeletal_Mage', 688)
Reanimation_SkeletonMage.Name.enGB.set('Reanimation: Skeletal Mage');
Reanimation_SkeletonMage.SkillLines.add(REANIMATION.ID)
Reanimation_SkeletonMage.Effects.get(0).MiscValueB.set(3002)
Reanimation_SkeletonMage.CastTime.set(0)
Reanimation_SkeletonMage.Effects.get(0).MiscValueA.set(SkeletonMage.ID);
Reanimation_SkeletonMage.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(2517)
    });
});
Reanimation_SkeletonMage.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_OMNI.set()
    )
)



// Raise Skeleton Archer Spell
export const RAISE_SKELETON_Archer = std.Spells.create(MODNAME, 'RAISE_SKELETON_Archer', 688)
RAISE_SKELETON_Archer.Name.enGB.set('Reanimation: Skeleton Archer');
RAISE_SKELETON_Archer.Description.enGB.set('Reanimate a Skeleton Archer from its postmortem slumber. The skeleton will pelt enemies from afar for the Necromancer until its demise.');
RAISE_SKELETON_Archer.Power.PowerCostPercent.set(50)
RAISE_SKELETON_Archer.Effects.get(0).MiscValueB.set(1562)
RAISE_SKELETON_Archer.SkillLines.add(REANIMATION.ID)
RAISE_SKELETON_Archer.Duration.set(0)
RAISE_SKELETON_Archer.Effects.get(0).PointsBase.set(1)
RAISE_SKELETON_Archer.Effects.get(0).PointsDieSides.set(1)
RAISE_SKELETON_Archer.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((castKit) => {
        castKit.Sound.set(2517)
    });
});
RAISE_SKELETON_Archer.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_OMNI.set()
    )
)
RAISE_SKELETON_Archer.AutoLearn.add(15, NECROMANCER.Mask)

// Skeleton Archer Creature
export const SKELETONARCHER = std.CreatureTemplates.create(MODNAME, 'Risen-Skeleton-Archer', 11258)
SQL.creature_equip_template.add(SKELETONARCHER.ID, 1)
    .ItemID1.set(2504)
    SKELETONARCHER.Name.enGB.set('Skeleton Archer')
    SKELETONARCHER.Scale.set(1.0)
    SKELETONARCHER.Type.UNDEAD.set()
    SKELETONARCHER.Stats.DamageMod.set(8.0);
    SKELETONARCHER.Stats.HealthMod.set(0.7)
    SKELETONARCHER.AttackTime.RangedBase.set(2600)
    SKELETONARCHER.row.PetSpellDataId.set(20001)

    // Setting Icon and NPC for Skeleton Archer
    RAISE_SKELETON_Archer.Effects.get(0).MiscValueA.set(SKELETONARCHER.ID)
    RAISE_SKELETON_Archer.Effects.get(0).MiscValueB.set(3001);
    RAISE_SKELETON_Archer.Icon.set(1611)



/******************************************************************
 * Poison and Bones Spells
 ******************************************************************/



// --------- Grim Scythe (Rank 1) --------------------

export const Grim_Scythe = std.Spells.create(MODNAME, 'Grim_Scythe', 47994)
Grim_Scythe.Name.enGB.set('Grim Scythe');
Grim_Scythe.Rank.set(Grim_Scythe.ID,1)
Grim_Scythe.SkillLines.add(POISON_AND_BONES.ID)
Grim_Scythe.AutoLearn.add(1, NECROMANCER.Mask)
Grim_Scythe.Subtext.enGB.set('Rank 1')
Grim_Scythe.Rank.set(Grim_Scythe.ID,1)
Grim_Scythe.Description.enGB.set('Slice with your scythe, dealing $s1 Shadow damage to all targets within $r1 yards in front of you.')
Grim_Scythe.Power.PowerType.set("MANA")
Grim_Scythe.Icon.set(120013)
Grim_Scythe.Power.PowerCostBase.set(0)
Grim_Scythe.Power.PowerCostPercent.set(0)
Grim_Scythe.SchoolMask.SHADOW.set(1)
Grim_Scythe.Cooldown.set(2000,1500,1500,1500)
Grim_Scythe.Effects.get(0).Type.SCHOOL_DAMAGE.set()
Grim_Scythe.Effects.get(0).PointsBase.set(6)
Grim_Scythe.Effects.get(0).PointsDieSides.set(4)
const Grim_Scythe_VISUAL = Grim_Scythe.Visual.getRefCopy()
const FROST_STRIKE_VISUAL = std.Spells.load(49143).Visual.getRef()
const Spectral_Strike_VISUAL = std.Spells.load(72198).Visual.getRef()
// Cast Kit
Grim_Scythe_VISUAL.CastKit.set(FROST_STRIKE_VISUAL.CastKit.get())
// Impact Kit
Grim_Scythe_VISUAL.ImpactKit.set(Spectral_Strike_VISUAL.ImpactKit.get())

// Creating the New Sounds for Grim Scythe
std.DBC.SoundEntries.findById(44).clone(25000)
.Name.set('Grim Sythe')
.File.set(['Spell_DH_Shear_FelBlade_Cast_01.wav','Spell_DH_Shear_FelBlade_Cast_02.wav','Spell_DH_Shear_FelBlade_Cast_03.wav','Spell_DH_Shear_FelBlade_Cast_04.wav','Spell_DH_Shear_FelBlade_Cast_05.wav'])
.DistanceCutoff.set(25)
.Volumefloat.set(0.6)


// Setting the Sound
Grim_Scythe.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((CastKit) => {
        CastKit.Sound.set(25000)
    });
});

Grim_Scythe.Visual.modRefCopy((value) => {
    value.ImpactKit.modRefCopy((ImpactKit) => {
        ImpactKit.Sound.set(25000)
    });
});

// --------- Cursed Scythe & Trigger --------------------


export const Cursed_Scythe_Trigger = std.Spells.create(MODNAME, 'CursedScytheTrigger', 12738)
Cursed_Scythe_Trigger.Name.enGB.set('Grim Scythe');
Cursed_Scythe_Trigger.Power.PowerType.set("MANA")
Cursed_Scythe_Trigger.Power.PowerCostBase.set(0)
Cursed_Scythe_Trigger.Power.PowerCostPercent.set(0)
Cursed_Scythe_Trigger.Attributes.AREA_TARGET_CHAIN.set(1)
Cursed_Scythe_Trigger.Effects.get(0).ChainTarget.set(99)
Cursed_Scythe_Trigger.Effects.get(0).PointsBase.set(4)
Cursed_Scythe_Trigger.Effects.get(0).PointsDieSides.set(1)
Cursed_Scythe_Trigger.Range.setSimple(0,5)
Cursed_Scythe_Trigger.Duration.setSimple(8000)
Cursed_Scythe_Trigger.Icon.set(51088)
const Cursed_Scythe_Trigger_VISUAL = Grim_Scythe.Visual.getRefCopy()
const Corruption_VISUAL = std.Spells.load(30938).Visual.getRef()
Cursed_Scythe_Trigger.AuraDescription.enGB.set("The target is cursed, and they take 5% more damage from ALL sources.")
Cursed_Scythe_Trigger_VISUAL.StateKit.set(Corruption_VISUAL.StateKit.get())
Cursed_Scythe_Trigger.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.ATTACK2_H.set()
    )
)
Cursed_Scythe_Trigger.Visual.modRefCopy((value) => {
    value.ImpactKit.modRefCopy((ImpactKit) => {
        ImpactKit.Sound.set(266855)
    });
});


export const Cursed_Scythe = std.Spells.create(MODNAME, 'Cursed_Scythe', 66012)
Cursed_Scythe.Name.enGB.set('Cursed Scythe');
Cursed_Scythe.Rank.set(Cursed_Scythe.ID,1)
Cursed_Scythe.SkillLines.add(CURSES_AND_BLOOD.ID)
Cursed_Scythe.AutoLearn.add(3, NECROMANCER.Mask)
Cursed_Scythe.Description.enGB.set('Slice with your scythe after empowering it with cursed energy, dealing $s1% weapon damage as Shadow to all enemies infront of you within $r1 yards, and cursing them all to take 5% increased damage from ALL sources.')
Cursed_Scythe.Subtext.enGB.set('')
Cursed_Scythe.Visual.set(7684)
Cursed_Scythe.Icon.set(120009)
Cursed_Scythe.Power.PowerType.set("MANA")
Cursed_Scythe.Power.PowerCostBase.set(9)
Cursed_Scythe.Power.PowerCostPercent.set(2)
Cursed_Scythe.Cooldown.set(8000,1500,1500,1500)
Cursed_Scythe.Attributes.AREA_TARGET_CHAIN.set(1)
Cursed_Scythe.Effects.get(0).ChainTarget.set(50)
Cursed_Scythe.Effects.get(0).Type.WEAPON_PERCENT_DAMAGE.set()
Cursed_Scythe.SchoolMask.set("SHADOW")
Cursed_Scythe.Effects.get(0).PointsBase.set(99)
Cursed_Scythe.Effects.get(0).PointsDieSides.set(1)
Cursed_Scythe.Effects.get(1).clear()
Cursed_Scythe.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Cursed_Scythe_Trigger.ID)
)
Cursed_Scythe.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((CastKit) => {
        CastKit.Sound.set(25000)
    });
});
Cursed_Scythe.Visual.modRefCopy((value) => {
    value.ImpactKit.modRefCopy((ImpactKit) => {
        ImpactKit.Sound.set(25000)
    });
});
const Cursed_Scythe_VISUAL = Cursed_Scythe.Visual.getRefCopy()
const Haunt_VISUAL = std.Spells.load(48181).Visual.getRef()
Cursed_Scythe_VISUAL.ImpactKit.set(Haunt_VISUAL.ImpactKit.get())


// --------- Noxious Scythe & Trigger (Rank 1) --------------------



export const Noxious_Scythe_Trigger = std.Spells.create(MODNAME, 'Noxious_Scythe_Trigger', 6751)
Noxious_Scythe_Trigger.Name.enGB.set('Noxious Poison');
Noxious_Scythe_Trigger.Power.PowerType.set("MANA")
Noxious_Scythe_Trigger.AuraDescription.enGB.set('The target is poisoned, taking $s1 Nature damage every 3 seconds for $d1 seconds.')
Noxious_Scythe_Trigger.Power.PowerCostBase.set(0)
Noxious_Scythe_Trigger.Power.PowerCostPercent.set(0)
Noxious_Scythe_Trigger.SchoolMask.set("NATURE")
Noxious_Scythe_Trigger.Range.setSimple(0,5)
Noxious_Scythe_Trigger.Attributes.AREA_TARGET_CHAIN.set(1)
Noxious_Scythe_Trigger.Effects.get(0).ChainTarget.set(99)
Noxious_Scythe_Trigger.Icon.set(50563)
Noxious_Scythe_Trigger.Effects.get(0).PointsBase.set(79)
Noxious_Scythe_Trigger.Effects.get(0).PointsDieSides.set(1)
Noxious_Scythe_Trigger.Duration.setSimple(30000)
Noxious_Scythe_Trigger.Visual.modRefCopy((value) => {
    value.ImpactKit.modRefCopy((ImpactKit) => {
        ImpactKit.Sound.set(266854)
    });
});

export const Noxious_Scythe = std.Spells.create(MODNAME, 'Noxious_Scythe', 47994)
Noxious_Scythe.Name.enGB.set('Noxious Scythe');
Noxious_Scythe.SkillLines.add(POISON_AND_BONES.ID)
Noxious_Scythe.Subtext.enGB.set('Rank 1')
Noxious_Scythe.Description.enGB.set("Channel poison through your scythe, and slash all enemies within $r yards in front of you to deal $s1 Nature damage and poison them for 30 seconds.")
Noxious_Scythe.Rank.set(Noxious_Scythe.ID,1)
Noxious_Scythe.Power.PowerType.set("MANA")
Noxious_Scythe.Power.PowerCostBase.set(9)
Noxious_Scythe.SchoolMask.set("NATURE")
Noxious_Scythe.Icon.set(63833)
Noxious_Scythe.Power.PowerCostPercent.set(2)
Noxious_Scythe.Cooldown.set(6000,1500,1500,1500)
Noxious_Scythe.Effects.get(0).Type.SCHOOL_DAMAGE.set()
Noxious_Scythe.Effects.get(0).PointsBase.set(24)
Noxious_Scythe.Effects.get(0).PointsDieSides.set(1)
const Noxious_Scythe_VISUAL = Noxious_Scythe.Visual.getRefCopy()
const Noxious_Poison_VISUAL = std.Spells.load(26053).Visual.getRef()
Noxious_Scythe_VISUAL.ImpactKit.set(Noxious_Poison_VISUAL.ImpactKit.get())
Noxious_Scythe.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(Noxious_Scythe_Trigger.ID)
)
Noxious_Scythe.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((CastKit) => {
        CastKit.Sound.set(25000)
    });
});
Noxious_Scythe.Visual.modRefCopy((value) => {
    value.ImpactKit.modRefCopy((ImpactKit) => {
        ImpactKit.Sound.set(25000)
    });
});


// Devour
export const Devour = std.Spells.create(MODNAME, 'Devour', 59915)
Devour.Name.set({ enGB: 'Devour' })
Devour.SkillLines.add(CURSES_AND_BLOOD.ID)
Devour.Effects.get(0).PointsBase.set(14)
Devour.Effects.get(0).PointsDieSides.set(1)

// --------- Corpse Lance & Trigger (Rank 1) --------------------
export const SHATTERED_BONES = std.Spells.create(MODNAME, 'SHATTEREDBONES', 67996)
SHATTERED_BONES.Name.set({ enGB: 'Corpse Lance Visual Trigger' })
SHATTERED_BONES.Power.PowerType.set("MANA")
SHATTERED_BONES.Power.PowerCostPercent.set(0)
SHATTERED_BONES.Mana.PowerCostBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsBase.set(0)
SHATTERED_BONES.Effects.get(0).PointsDieSides.set(0)
SHATTERED_BONES.Visual.getRefCopy().cloneFromVisual(15032)
const SHATTERED_BONES_VISUAL = SHATTERED_BONES.Visual.getRefCopy()


export const Corpse_Lance = std.Spells.create(MODNAME, 'CorpseLance', 23922)
Corpse_Lance.Name.set({ enGB: 'Corpse Lance' })
Corpse_Lance.AutoLearn.add(18, NECROMANCER.Mask)
Corpse_Lance.SkillLines.add(POISON_AND_BONES.ID)
Corpse_Lance.Description.enGB.set('The Necromancer consumes a nearby corpse within 30 yards to summon five razor sharp bone spears to bypass armor and puncture $Ghis:her; target for $s2 damage as Physical. Requires a nearby corpse.')
Corpse_Lance.Power.PowerType.set("MANA")
Corpse_Lance.Mana.PowerCostPercent.set(0)
Corpse_Lance.Mana.PowerCostBase.set(55)
Corpse_Lance.Cooldown.set(16000)
Corpse_Lance.Range.setSimple(0, 30)
Corpse_Lance.CastTime.setSimple(0)
Corpse_Lance.CustomAttributes.IGNORE_ARMOR.set(1)
Corpse_Lance.Rank.set(1, 1)
Corpse_Lance.ItemEquips.set(-1, 0, 0)
Corpse_Lance.Effects.get(1).PointsBase.set(132)
Corpse_Lance.Effects.get(1).PointsDieSides.set(30)
Corpse_Lance.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Corpse_Lance.Visual.getRefCopy().cloneFromVisual(15032)
Corpse_Lance.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
const Corpse_Lance_VISUAL = Corpse_Lance.Visual.getRefCopy()
const REND_VISUAL = std.Spells.load(772).Visual.getRef()
Corpse_Lance.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(SHATTERED_BONES.ID)
)
Corpse_Lance_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
Corpse_Lance.Icon.set(120008)
SHATTERED_BONES_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())



// TRIGGER SPELL VISUAL FOR BONE SPEAR
export const NIGHTBANE_BONE_SPEAR = std.Spells.create(MODNAME, 'NIGHTBANEBONESPEAR', 67996)
NIGHTBANE_BONE_SPEAR.Name.set({ enGB: 'Bone Spear Visual Trigger' })
NIGHTBANE_BONE_SPEAR.Power.PowerType.set("MANA")
NIGHTBANE_BONE_SPEAR.Power.PowerCostPercent.set(0)
NIGHTBANE_BONE_SPEAR.Mana.PowerCostBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsBase.set(0)
NIGHTBANE_BONE_SPEAR.Effects.get(0).PointsDieSides.set(0)
std.Spells.load(48430).Visual.getRef().Missile.Model.getRef().Scale.set(.6, .6, .6)
NIGHTBANE_BONE_SPEAR.Visual.getRefCopy().cloneFromVisual(10772)

// Corpse Explosion (Rank 1) // Doesn't Work
export const Corpse_Explosion = std.Spells.create(MODNAME, 'CorpseExplosion', 49158)
Corpse_Explosion.Name.set({ enGB: 'Corpse Explosion' })
Corpse_Explosion.AutoLearn.add(18, NECROMANCER.Mask)
Corpse_Explosion.SkillLines.add(POISON_AND_BONES.ID)
Corpse_Explosion.Subtext.enGB.set('Rank 1')
Corpse_Explosion.Description.enGB.set('Detonate a corpse within 30 yards to deal $s1 Shadow damage to enemies within 10 yards of the explosion. Requires a nearby corpse.')
Corpse_Explosion.Power.PowerType.set("MANA")
Corpse_Explosion.Mana.PowerCostPercent.set(0)
Corpse_Explosion.Mana.PowerCostBase.set(55)
Corpse_Explosion.Range.setSimple(0, 30)
Corpse_Explosion.Rank.set(1, 1)
Corpse_Explosion.Icon.set(134)
Corpse_Explosion.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)

// Bone Spear (Rank 1)
export const BONE_SPEAR = std.Spells.create(MODNAME, 'Bone_Spear', 23922)
BONE_SPEAR.Name.set({ enGB: 'Bone Spear' })
BONE_SPEAR.AutoLearn.add(6, NECROMANCER.Mask)
BONE_SPEAR.SkillLines.add(POISON_AND_BONES.ID)
BONE_SPEAR.Description.enGB.set('The Necromancer summons a large, razor sharp bone spear to bypass armor and puncture the target for $s2 damage as Physical.')
BONE_SPEAR.Power.PowerType.set("MANA")
BONE_SPEAR.Mana.PowerCostPercent.set(2)
BONE_SPEAR.Mana.PowerCostBase.set(9)
BONE_SPEAR.Attributes.CANT_BE_REFLECTED.set(1)
BONE_SPEAR.Cooldown.set(8000)
BONE_SPEAR.Range.setSimple(0, 30)
BONE_SPEAR.CustomAttributes.IGNORE_ARMOR.set(1)
BONE_SPEAR.InterruptFlags.ON_MOVEMENT.set(1)
BONE_SPEAR.Rank.set(1, 1)
BONE_SPEAR.ItemEquips.set(-1, 0, 0)
BONE_SPEAR.Effects.get(1).PointsBase.set(14)
BONE_SPEAR.Effects.get(1).PointsDieSides.set(10)
BONE_SPEAR.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .PrecastKit.modRefCopy(kit => kit
        .Animation.SPELL_PRECAST.set()
    )
)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .PrecastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST.set()
    )
)
BONE_SPEAR.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_DIRECTED.set()
    )
)
// Attaching the Visual Trigger Spell
BONE_SPEAR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(NIGHTBANE_BONE_SPEAR.ID)
)
const BONE_SPEAR_VISUAL = BONE_SPEAR.Visual.getRefCopy()
const SB_VISUAL = std.Spells.load(75384).Visual.getRef()
BONE_SPEAR_VISUAL.ImpactKit.set(REND_VISUAL.ImpactKit.get())
BONE_SPEAR_VISUAL.PrecastKit.set(SB_VISUAL.PrecastKit.get())
BONE_SPEAR_VISUAL.CastKit.set(SB_VISUAL.CastKit.get())
BONE_SPEAR.Icon.set(120005)

// TRIGGER SPELL FOR Bone_Spikes
export const Bone_Spikes_TRIGGER_DAMAGE = std.Spells.create(MODNAME, 'Bone_SpikesTRIGGER', 54771)
Bone_Spikes_TRIGGER_DAMAGE.Name.set({ enGB: 'Bone Spikes' })
Bone_Spikes_TRIGGER_DAMAGE.Power.PowerType.set("MANA")
Bone_Spikes_TRIGGER_DAMAGE.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Bone_Spikes_TRIGGER_DAMAGE.Attributes.CANT_BE_REFLECTED.set(1)
Bone_Spikes_TRIGGER_DAMAGE.Power.PowerCostPercent.set(0)
Bone_Spikes_TRIGGER_DAMAGE.Mana.PowerCostBase.set(0)
Bone_Spikes_TRIGGER_DAMAGE.CustomAttributes.IGNORE_ARMOR.set(1)
Bone_Spikes_TRIGGER_DAMAGE.Effects.get(0).PointsBase.set(8)
Bone_Spikes_TRIGGER_DAMAGE.Effects.get(0).PointsDieSides.set(14)
Bone_Spikes_TRIGGER_DAMAGE.Visual.set(989861)
Bone_Spikes_TRIGGER_DAMAGE.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((CastKit) => {
        CastKit.Sound.set(266853)
    });
});


// Bone_Spikes
export const Bone_Spikes = std.Spells.create(MODNAME, 'Bone_Spikes', 54770)
Bone_Spikes.Name.set({ enGB: 'Bone Spikes' })
Bone_Spikes.AutoLearn.add(5, NECROMANCER.Mask)
Bone_Spikes.SkillLines.add(POISON_AND_BONES.ID)
Bone_Spikes.Description.enGB.set('The Necromancer summons razor sharp bone spikes from the ground that puncture the target 3 times for 8-22 Physical damage over 4 seconds.')
Bone_Spikes.Power.PowerType.set("MANA")
Bone_Spikes.Rank.set(Bone_Spikes.ID,1)
Bone_Spikes.Subtext.enGB.set('Rank 1')
Bone_Spikes.Icon.set(120022)
Bone_Spikes.Mana.PowerCostPercent.set(4)
Bone_Spikes.Mana.PowerCostBase.set(10)
Bone_Spikes.Effects.get(0).AuraPeriod.set(1000)
Bone_Spikes.Duration.setSimple(3980)
Bone_Spikes.Attributes.CANT_BE_REFLECTED.set(1)
Bone_Spikes.CustomAttributes.IGNORE_ARMOR.set(1)
Bone_Spikes.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Bone_Spikes.Effects.get(1).clear()
Bone_Spikes.Cooldown.set(14000)
Bone_Spikes.Range.setSimple(0, 15) 
Bone_Spikes.Effects.get(0).TriggerSpell.set(Bone_Spikes_TRIGGER_DAMAGE.ID)
Bone_Spikes.Visual.modRefCopy(visual => visual
    .ChannelKit.modRefCopy(kit => kit
        .Animation.CHANNEL_CAST_DIRECTED.set()
    )
)


// TRIGGER SPELL FOR Bone_Spikes
export const Bone_Spikes_TRIGGER_DAMAGE2 = std.Spells.create(MODNAME, 'Bone_SpikesTRIGGER2', 54771)
Bone_Spikes_TRIGGER_DAMAGE2.Name.set({ enGB: 'Bone Spikes' })
Bone_Spikes_TRIGGER_DAMAGE2.Power.PowerType.set("MANA")
Bone_Spikes_TRIGGER_DAMAGE2.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Bone_Spikes_TRIGGER_DAMAGE2.Attributes.CANT_BE_REFLECTED.set(1)
Bone_Spikes_TRIGGER_DAMAGE2.Power.PowerCostPercent.set(0)
Bone_Spikes_TRIGGER_DAMAGE2.CustomAttributes.IGNORE_ARMOR.set(1)
Bone_Spikes_TRIGGER_DAMAGE2.Mana.PowerCostBase.set(0)
Bone_Spikes_TRIGGER_DAMAGE2.Effects.get(0).PointsBase.set(16)
Bone_Spikes_TRIGGER_DAMAGE2.Effects.get(0).PointsDieSides.set(32)
Bone_Spikes_TRIGGER_DAMAGE2.Visual.set(989861)
Bone_Spikes_TRIGGER_DAMAGE2.Visual.modRefCopy((value) => {
    value.CastKit.modRefCopy((CastKit) => {
        CastKit.Sound.set(266853)
    });
});

// Bone_Spikes (Rank 2)
export const Bone_Spikes2 = std.Spells.create(MODNAME, 'Bone_Spikes2', 54770)
Bone_Spikes2.Name.set({ enGB: 'Bone Spikes' })
Bone_Spikes2.AutoLearn.add(12, NECROMANCER.Mask)
Bone_Spikes2.SkillLines.add(POISON_AND_BONES.ID)
Bone_Spikes2.Description.enGB.set('The Necromancer summons razor sharp bone spikes from the ground that puncture the target 3 times for 8-22 Physical damage over 4 seconds.')
Bone_Spikes2.Power.PowerType.set("MANA")
Bone_Spikes2.Rank.set(Bone_Spikes.ID,2)
Bone_Spikes2.Subtext.enGB.set('Rank 2')
Bone_Spikes2.Effects.get(0).AuraPeriod.set(1000)
Bone_Spikes2.Duration.setSimple(4500)
Bone_Spikes2.Icon.set(120022)
Bone_Spikes2.Mana.PowerCostPercent.set(4)
Bone_Spikes2.Mana.PowerCostBase.set(20)
Bone_Spikes2.Attributes.CANT_BE_REFLECTED.set(1)
Bone_Spikes2.Attributes.IMPOSSIBLE_TO_DODGE_PARRY_BLOCK.set(1)
Bone_Spikes2.Effects.get(0).PointsBase.set(5)
Bone_Spikes2.Effects.get(0).PointsDieSides.set(9)
Bone_Spikes2.Effects.get(1).clear()
Bone_Spikes2.Cooldown.set(14000)
Bone_Spikes2.Range.setSimple(0, 30) 
Bone_Spikes2.Effects.get(0).TriggerSpell.set(Bone_Spikes_TRIGGER_DAMAGE2.ID)

// Bone Armor (Rank 1)
const BONE_ARMOR = std.Spells.create(MODNAME, 'BoneArmor', 11445)
BONE_ARMOR.Name.enGB.set('Bone Armor');
const BONE_ARMOR_ABILITY = BONE_ARMOR.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR_ABILITY.AutoLearn.add(5, NECROMANCER.Mask)
BONE_ARMOR.Mana.PowerCostBase.set(0)
BONE_ARMOR.Mana.PowerCostPercent.set(0)
BONE_ARMOR.Rank.set(BONE_ARMOR.ID,1)
BONE_ARMOR.Subtext.enGB.set('Rank 1')
BONE_ARMOR.Effects.get(0).PointsBase.set(24)
BONE_ARMOR.Effects.get(0).PointsDieSides.set(8)
BONE_ARMOR.Cooldown.set(45000)
BONE_ARMOR.Duration.setSimple(120000)
BONE_ARMOR.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR.Icon.set(120033)

// Bone Armor (Rank 2)
const BONE_ARMOR2 = std.Spells.create(MODNAME, 'BoneArmor2', 11445)
BONE_ARMOR2.Name.enGB.set('Bone Armor');
const BONE_ARMOR2_ABILITY = BONE_ARMOR2.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR2_ABILITY.AutoLearn.add(10, NECROMANCER.Mask)
BONE_ARMOR2.Mana.PowerCostBase.set(0)
BONE_ARMOR2.Mana.PowerCostPercent.set(0)
BONE_ARMOR2.Rank.set(BONE_ARMOR.ID,2)
BONE_ARMOR2.Subtext.enGB.set('Rank 2')
BONE_ARMOR2.Effects.get(0).PointsBase.set(48)
BONE_ARMOR2.Effects.get(0).PointsDieSides.set(16)
BONE_ARMOR2.Cooldown.set(45000)
BONE_ARMOR2.Duration.setSimple(120000)
BONE_ARMOR2.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR2.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR2.Icon.set(120033)

// Bone Armor (Rank 3)
const BONE_ARMOR3 = std.Spells.create(MODNAME, 'BoneArmor3', 11445)
BONE_ARMOR3.Name.enGB.set('Bone Armor');
const BONE_ARMOR3_ABILITY = BONE_ARMOR3.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR3_ABILITY.AutoLearn.add(15, NECROMANCER.Mask)
BONE_ARMOR3.Mana.PowerCostBase.set(0)
BONE_ARMOR3.Mana.PowerCostPercent.set(0)
BONE_ARMOR3.Rank.set(BONE_ARMOR.ID,3)
BONE_ARMOR3.Subtext.enGB.set('Rank 3')
BONE_ARMOR3.Effects.get(0).PointsBase.set(96)
BONE_ARMOR3.Effects.get(0).PointsDieSides.set(32)
BONE_ARMOR3.Cooldown.set(45000)
BONE_ARMOR3.Duration.setSimple(120000)
BONE_ARMOR3.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR3.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR3.Icon.set(120033)

// Bone Armor (Rank 4)
const BONE_ARMOR4 = std.Spells.create(MODNAME, 'BoneArmor4', 11445)
BONE_ARMOR4.Name.enGB.set('Bone Armor');
const BONE_ARMOR4_ABILITY = BONE_ARMOR4.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR4_ABILITY.AutoLearn.add(20, NECROMANCER.Mask)
BONE_ARMOR4.Mana.PowerCostBase.set(0)
BONE_ARMOR4.Mana.PowerCostPercent.set(0)
BONE_ARMOR4.Rank.set(BONE_ARMOR.ID,4)
BONE_ARMOR4.Subtext.enGB.set('Rank 4')
BONE_ARMOR4.Effects.get(0).PointsBase.set(156)
BONE_ARMOR4.Effects.get(0).PointsDieSides.set(48)
BONE_ARMOR4.Cooldown.set(45000)
BONE_ARMOR4.Duration.setSimple(120000)
BONE_ARMOR4.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR4.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR4.Icon.set(120033)

// Bone Armor (Rank 5)
const BONE_ARMOR5 = std.Spells.create(MODNAME, 'BoneArmor5', 11445)
BONE_ARMOR5.Name.enGB.set('Bone Armor');
const BONE_ARMOR5_ABILITY = BONE_ARMOR5.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR5_ABILITY.AutoLearn.add(30, NECROMANCER.Mask)
BONE_ARMOR5.Mana.PowerCostBase.set(0)
BONE_ARMOR5.Mana.PowerCostPercent.set(0)
BONE_ARMOR5.Rank.set(BONE_ARMOR.ID,5)
BONE_ARMOR5.Subtext.enGB.set('Rank 5')
BONE_ARMOR5.Effects.get(0).PointsBase.set(226)
BONE_ARMOR5.Effects.get(0).PointsDieSides.set(48)
BONE_ARMOR5.Cooldown.set(45000)
BONE_ARMOR5.Duration.setSimple(120000)
BONE_ARMOR5.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR5.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR5.Icon.set(120033)

// Bone Armor (Rank 6)
const BONE_ARMOR6 = std.Spells.create(MODNAME, 'BoneArmor6', 11445)
BONE_ARMOR6.Name.enGB.set('Bone Armor');
const BONE_ARMOR6_ABILITY = BONE_ARMOR6.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR6_ABILITY.AutoLearn.add(40, NECROMANCER.Mask)
BONE_ARMOR6.Mana.PowerCostBase.set(0)
BONE_ARMOR6.Mana.PowerCostPercent.set(0)
BONE_ARMOR6.Rank.set(BONE_ARMOR.ID,6)
BONE_ARMOR6.Subtext.enGB.set('Rank 6')
BONE_ARMOR6.Effects.get(0).PointsBase.set(378)
BONE_ARMOR6.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR6.Cooldown.set(45000)
BONE_ARMOR6.Duration.setSimple(120000)
BONE_ARMOR6.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR6.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR6.Icon.set(120033)

// Bone Armor (Rank 7)
const BONE_ARMOR7 = std.Spells.create(MODNAME, 'BoneArmor7', 11445)
BONE_ARMOR7.Name.enGB.set('Bone Armor');
const BONE_ARMOR7_ABILITY = BONE_ARMOR7.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR7_ABILITY.AutoLearn.add(50, NECROMANCER.Mask)
BONE_ARMOR7.Mana.PowerCostBase.set(0)
BONE_ARMOR7.Mana.PowerCostPercent.set(0)
BONE_ARMOR7.Rank.set(BONE_ARMOR.ID,7)
BONE_ARMOR7.Subtext.enGB.set('Rank 7')
BONE_ARMOR7.Effects.get(0).PointsBase.set(578)
BONE_ARMOR7.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR7.Cooldown.set(45000)
BONE_ARMOR7.Duration.setSimple(120000)
BONE_ARMOR7.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR7.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR7.Icon.set(120033)

// Bone Armor (Rank 8)
const BONE_ARMOR8 = std.Spells.create(MODNAME, 'BoneArmor8', 11445)
BONE_ARMOR8.Name.enGB.set('Bone Armor');
const BONE_ARMOR8_ABILITY = BONE_ARMOR8.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR8_ABILITY.AutoLearn.add(60, NECROMANCER.Mask)
BONE_ARMOR8.Mana.PowerCostBase.set(0)
BONE_ARMOR8.Mana.PowerCostPercent.set(0)
BONE_ARMOR8.Rank.set(BONE_ARMOR.ID,8)
BONE_ARMOR8.Subtext.enGB.set('Rank 8')
BONE_ARMOR8.Effects.get(0).PointsBase.set(878)
BONE_ARMOR8.Effects.get(0).PointsDieSides.set(64)
BONE_ARMOR8.Cooldown.set(45000)
BONE_ARMOR8.Duration.setSimple(120000)
BONE_ARMOR8.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR8.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR8.Icon.set(120033)

// Bone Armor (Rank 9)
const BONE_ARMOR9 = std.Spells.create(MODNAME, 'BoneArmor9', 11445)
BONE_ARMOR9.Name.enGB.set('Bone Armor');
const BONE_ARMOR9_ABILITY = BONE_ARMOR9.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR9_ABILITY.AutoLearn.add(65, NECROMANCER.Mask)
BONE_ARMOR9.Mana.PowerCostBase.set(0)
BONE_ARMOR9.Mana.PowerCostPercent.set(0)
BONE_ARMOR9.Rank.set(BONE_ARMOR.ID,9)
BONE_ARMOR9.Subtext.enGB.set('Rank 9')
BONE_ARMOR9.Effects.get(0).PointsBase.set(1024)
BONE_ARMOR9.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR9.Cooldown.set(45000)
BONE_ARMOR8.Duration.setSimple(120000)
BONE_ARMOR9.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR9.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR9.Icon.set(120033)

// Bone Armor (Rank 10)
const BONE_ARMOR10 = std.Spells.create(MODNAME, 'BoneArmor10', 11445)
BONE_ARMOR10.Name.enGB.set('Bone Armor');
const BONE_ARMOR10_ABILITY = BONE_ARMOR10.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR10_ABILITY.AutoLearn.add(70, NECROMANCER.Mask)
BONE_ARMOR10.Mana.PowerCostBase.set(0)
BONE_ARMOR10.Mana.PowerCostPercent.set(0)
BONE_ARMOR10.Rank.set(BONE_ARMOR.ID,10)
BONE_ARMOR10.Subtext.enGB.set('Rank 10')
BONE_ARMOR10.Effects.get(0).PointsBase.set(1124)
BONE_ARMOR10.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR10.Cooldown.set(45000)
BONE_ARMOR10.Duration.setSimple(120000)
BONE_ARMOR10.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR10.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR10.Icon.set(120033)

// Bone Armor (Rank 11)
const BONE_ARMOR11 = std.Spells.create(MODNAME, 'BoneArmor11', 11445)
BONE_ARMOR11.Name.enGB.set('Bone Armor');
const BONE_ARMOR11_ABILITY = BONE_ARMOR11.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR11_ABILITY.AutoLearn.add(75, NECROMANCER.Mask)
BONE_ARMOR11.Mana.PowerCostBase.set(0)
BONE_ARMOR11.Mana.PowerCostPercent.set(0)
BONE_ARMOR11.Rank.set(BONE_ARMOR.ID,11)
BONE_ARMOR11.Subtext.enGB.set('Rank 11')
BONE_ARMOR11.Effects.get(0).PointsBase.set(1824)
BONE_ARMOR11.Effects.get(0).PointsDieSides.set(42)
BONE_ARMOR11.Cooldown.set(45000)
BONE_ARMOR11.Duration.setSimple(120000)
BONE_ARMOR11.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR11.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR11.Icon.set(120033)

// Bone Armor (Rank 12)
const BONE_ARMOR12 = std.Spells.create(MODNAME, 'BoneArmor12', 11445)
BONE_ARMOR12.Name.enGB.set('Bone Armor');
const BONE_ARMOR12_ABILITY = BONE_ARMOR12.SkillLines.add(POISON_AND_BONES.ID)
BONE_ARMOR12_ABILITY.AutoLearn.add(80, NECROMANCER.Mask)
BONE_ARMOR12.Mana.PowerCostBase.set(0)
BONE_ARMOR12.Mana.PowerCostPercent.set(0)
BONE_ARMOR12.Rank.set(BONE_ARMOR.ID,12)
BONE_ARMOR12.Subtext.enGB.set('Rank 12')
BONE_ARMOR12.Effects.get(0).PointsBase.set(2024)
BONE_ARMOR12.Effects.get(0).PointsDieSides.set(136)
BONE_ARMOR12.Cooldown.set(45000)
BONE_ARMOR12.Duration.setSimple(120000)
BONE_ARMOR12.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 3 bones, shielding $Ghim:her; for $s1 damage absorption for $d1. While the bone armor holds, spellcasting may not be interrupted by damage.')
BONE_ARMOR12.AuraDescription.enGB.set('A layer of 3 bones protects the Necromancer, absorbing $s1 damage for $d1 or until broken.')
BONE_ARMOR12.Icon.set(120033)

// Poison Nova Spell
const Poison_Nova = std.Spells.create(MODNAME, 'PoisonNova', 59842)
Poison_Nova.Name.enGB.set('Poison Nova ');
Poison_Nova.SkillLines.add(POISON_AND_BONES.ID)
Poison_Nova.Description.enGB.set("Expel an explosion outward from the Necromancer to deal $s1 Nature damage immediately to all enemies within 20 yards, and $s2 Nature damage every second for 10 seconds.")
Poison_Nova.Power.PowerType.set("MANA")
Poison_Nova.Icon.set(120021)
Poison_Nova.Cooldown.set(10000,1000,1000,1000)
Poison_Nova.Mana.PowerCostBase.set(200)
Poison_Nova.Mana.PowerCostPercent.set(15)
Poison_Nova.CastTime.setSimple(0)
Poison_Nova.Effects.get(0).PointsBase.set(256)
Poison_Nova.Effects.get(0).PointsDieSides.set(104)
Poison_Nova.Effects.get(1).PointsBase.set(120)
Poison_Nova.Range.setSimple(0,8)
Poison_Nova.Effects.get(1).PointsDieSides.set(68)
Poison_Nova.Visual.getRefCopy().cloneFromVisual(989859)
Poison_Nova.Visual.modRefCopy(visual => visual
    .CastKit.modRefCopy(kit => kit
        .Animation.SPELL_CAST_OMNI.set()
    )
)
Poison_Nova.Icon.set(2956)


/******************************************************************
 * Curses & Blood Spells
 ******************************************************************/

// Bloodbolt Spell (Starter Spell, Only Rank since % based)
export const BLOODBOLT = std.Spells.create(MODNAME, 'Bloodbolt', 686)
BLOODBOLT.Name.enGB.set('Bloodbolt');
const BLOODBOLT_ABILITY = BLOODBOLT.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOODBOLT_ABILITY.AutoLearn.add(2, NECROMANCER.Mask)
BLOODBOLT.Subtext.clear()
BLOODBOLT.Icon.set(120000)

const BLOODBOLT_VISUAL = BLOODBOLT.Visual.getRefCopy()
const VAMPIRIC_BOLT_VISUAL = std.Spells.load(51016).Visual.getRef()
const BLOOD_NOVA_VISUAL = std.Spells.load(73058).Visual.getRef()

// Precast Kit
BLOODBOLT_VISUAL.PrecastKit.set(BLOOD_NOVA_VISUAL.PrecastKit.get())

// Missile Kit
BLOODBOLT_VISUAL.Missile.Model.set(VAMPIRIC_BOLT_VISUAL.Missile.Model.get())

// Cast Kit
BLOODBOLT_VISUAL.CastKit.set(VAMPIRIC_BOLT_VISUAL.CastKit.get())

// Impact Visual Kit
BLOODBOLT_VISUAL.ImpactKit.set(VAMPIRIC_BOLT_VISUAL.ImpactKit.get())

//Spell Mods
BLOODBOLT_ABILITY.Power.PowerType.set("HEALTH")
BLOODBOLT.Power.PowerCostPercent.set(10)
BLOODBOLT.Description.enGB.set('Manifest Shadow energy, and empower it with your own blood. The act consumes 5% of your maximum health to deal double the amount of health lost as Shadow damage. You cannot cast this ability with less than 5% health.')
BLOODBOLT.CastTime.setSimple(1000)
BLOODBOLT.Rank.set(0, 0)
BLOODBOLT.Effects.get(0).PointsDieSides.set(0)

// Blood Rush
const BLOOD_RUSH = std.Spells.create(MODNAME, 'Blood Rush', 31439)
BLOOD_RUSH.Name.enGB.set('Blood Rush');
const BLOOD_RUSH_ABILITY = BLOOD_RUSH.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOOD_RUSH_ABILITY.AutoLearn.add(20, NECROMANCER.Mask)

const BLOOD_RUSH_VISUAL = BLOOD_RUSH.Visual.getRefCopy()

// Precast Kit
BLOOD_RUSH_VISUAL.PrecastKit.set(BLOOD_NOVA_VISUAL.PrecastKit.get())

// Cast Kit
BLOOD_RUSH_VISUAL.CastKit.set(BLOOD_NOVA_VISUAL.CastKit.get())

// Impact Visual Kit
BLOOD_RUSH_VISUAL.ImpactKit.set(VAMPIRIC_BOLT_VISUAL.ImpactKit.get())

//Spell Mods
BLOOD_RUSH_ABILITY.Power.PowerType.set("HEALTH")
BLOOD_RUSH.Power.PowerCostPercent.set(12.5)
BLOOD_RUSH.Cooldown.set(0)
BLOOD_RUSH.Icon.set(120002)
BLOOD_RUSH.Description.enGB.set('The necromancer sheds $Ghis:her; mortal flesh to reappear 20 yards in $Ghis:her; front facing direction.')

// Blood Siphon (Rank 1)
export const BLOOD_SIPHON = std.Spells.create(MODNAME, 'Blood_Siphon', 59015)
BLOOD_SIPHON.Name.set({ enGB: 'Blood Siphon' })
BLOOD_SIPHON.AutoLearn.add(15, NECROMANCER.Mask)
BLOOD_SIPHON.SkillLines.add(CURSES_AND_BLOOD.ID)
BLOOD_SIPHON.Description.enGB.set('The Necromancer siphons the blood from all enemies in a 25yd cone in front of $Ghim:her; dealing $s1 Shadow Damage, and healing the Necromancer for triple the damage dealt.')
BLOOD_SIPHON.Power.PowerType.set("MANA")
BLOOD_SIPHON.Rank.set(BLOOD_SIPHON.ID,1)
BLOOD_SIPHON.Subtext.enGB.set('Rank 1')
BLOOD_SIPHON.Mana.PowerCostPercent.set(0)
BLOOD_SIPHON.Mana.PowerCostBase.set(70)
BLOOD_SIPHON.Cooldown.set(45000)
BLOOD_SIPHON.Effects.get(0).PointsBase.set(14)
BLOOD_SIPHON.Effects.get(0).PointsDieSides.set(19)
BLOOD_SIPHON.Icon.set(120004)
BLOOD_SIPHON.Visual.getRefCopy().cloneFromVisual(9310)
const BLOOD_SIPHON_VISUAL = BLOOD_SIPHON.Visual.getRefCopy()
BLOOD_SIPHON_VISUAL.CastKit.set(BLOOD_NOVA_VISUAL.CastKit.get())

// Blood Siphon Visual Trigger
export const BLOOD_SIPHONVISUAL = std.Spells.create(MODNAME, 'Blood_Siphon_Visual', 59015)
BLOOD_SIPHONVISUAL.Name.set({ enGB: 'Blood Siphon Visual Trigger' })
BLOOD_SIPHONVISUAL.Effects.get(0).PointsBase.set(0)
BLOOD_SIPHONVISUAL.Mana.PowerCostBase.set(0)
BLOOD_SIPHONVISUAL.Effects.get(0).PointsDieSides.set(0)

// Attaching the Visual Trigger Spell
BLOOD_SIPHON.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(BLOOD_SIPHONVISUAL.ID)
)

// Decrepify Trigger
export const DECREPIFY_Trigger = std.Spells.create(MODNAME, 'DecrepifyTrigger', 38663)
DECREPIFY_Trigger.Name.enGB.set('Decrepify Trigger');
DECREPIFY_Trigger.Attributes.HIDE_FROM_AURA_BAR.set(1)
DECREPIFY_Trigger.Effects.get(0).PointsBase.set(-26)
DECREPIFY_Trigger.Effects.get(0).PointsDieSides.set(1)
DECREPIFY_Trigger.CastTime.set(0)
DECREPIFY_Trigger.Duration.setSimple(30000,0,30000)
DECREPIFY_Trigger.Effects.get(1).PointsBase.set(-31)
DECREPIFY_Trigger.Effects.get(1).PointsDieSides.set(1)
const CAST_VISUAL = std.Spells.load(58842).Visual.getRef()
const DECREPIFY_Trigger_VISUAL = DECREPIFY_Trigger.Visual.getRefCopy()
DECREPIFY_Trigger_VISUAL.CastKit.set(CAST_VISUAL.CastKit.get())


// Decrepify
export const DECREPIFY = std.Spells.create(MODNAME, 'Decrepify', 51340)
DECREPIFY.Name.enGB.set('Decrepify');
const DECREPIFY_ABILITY = DECREPIFY.SkillLines.add(CURSES_AND_BLOOD.ID)
DECREPIFY.Effects.get(0).PointsBase.set(-21)
DECREPIFY.Effects.get(0).PointsDieSides.set(1)
DECREPIFY.Duration.setSimple(30000,0,30000)
DECREPIFY.Description.enGB.set('Cast upon the target a devastating curse, reducing damage dealt by 20%, movement speed by 30%, and also reduces melee attack speed by 25%.')
DECREPIFY.AuraDescription.enGB.set('Damage dealt is reduced by $s1%, movement speed by 30%, and also reduces melee attack speed by 25%.')
DECREPIFY.Icon.set(120012)
DECREPIFY.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(DECREPIFY_Trigger.ID)
)
const DECREPIFY_VISUAL = DECREPIFY.Visual.getRefCopy()
DECREPIFY_VISUAL.CastKit.set(CAST_VISUAL.CastKit.get())

DECREPIFY_Trigger_VISUAL.ImpactKit.set(DECREPIFY_VISUAL.ImpactKit.get())
DECREPIFY_Trigger_VISUAL.StateKit.set(DECREPIFY_VISUAL.StateKit.get())












/******************************************************************
 * TRAINER
 ******************************************************************/
export const NECROMANCER_TRAINER_HUMAN = std.CreatureTemplates
    .create(MODNAME, 'Necromancer-Trainer', 28373)
    .Name.enGB.set('Necromancy Trainer')
    .Subname.enGB.set('Master of the Dark Arts')
    .NPCFlags.TRAINER.set(true)
    .FactionTemplate.NEUTRAL_PASSIVE.set()
    .Gossip.set(0)
const trainer = NECROMANCER_TRAINER_HUMAN.Trainer.getRef()
    .Greeting.enGB.set(`What do you require?`)
    .RequirementType.CLASS.set()
    .RequiredClass.set(NECROMANCER.ID)


NECROMANCER_TRAINER_HUMAN.Spawns.add( MODNAME, 'trainer-instance', { map: 0, x: -8898.656250, y: -130.632767, z: 81.285889, o: 1.766019 })

