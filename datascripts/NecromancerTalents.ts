import {SQL, std} from "wow/wotlk";
import {REDUCE_DAMAGE_DONE_BY_2, REDUCE_DAMAGE_DONE_BY_4, REDUCE_DAMAGE_DONE_BY_6, REDUCE_DAMAGE_DONE_BY_8, REDUCE_DAMAGE_DONE_BY_10}  from "./DamageReductionSpells"
import { POISON_AND_BONES, REANIMATION, CURSES_AND_BLOOD, BONE_SPEAR, NECROMANCER } from "./necromancer";
const MODNAME = 'NecromancerTalents'

/******************************************************************
 * Reanimation Talents
 ******************************************************************/
 export const Reanimation_TREE = NECROMANCER.TalentTrees
 .addGet(MODNAME,'Reanimation-talents',0)
 .Name.enGB.set('Reanimation')


 const NECROMANTIC_HEALING = std.Spells.create(MODNAME, 'NECROMANTICHEALING', 47230)
 NECROMANTIC_HEALING.Name.enGB.set('Necromantic Healing');
 NECROMANTIC_HEALING.Rank.set(NECROMANTIC_HEALING.ID,1)
 NECROMANTIC_HEALING.Subtext.enGB.set('Rank 1')
 NECROMANTIC_HEALING.Description.enGB.set('You have a 50% chance to heal your undead minion for 15% of the damage you deal with spells.')
 NECROMANTIC_HEALING.SkillLines.add(REANIMATION.ID)
 NECROMANTIC_HEALING.Attributes.IS_PASSIVE.set(1)
 NECROMANTIC_HEALING.Icon.set(88)

 const NECROMANTIC_HEALING2 = std.Spells.create(MODNAME, 'NECROMANTICHEALING2', 47231)
 NECROMANTIC_HEALING2.Name.enGB.set('Necromantic Healing');
 NECROMANTIC_HEALING2.Rank.set(NECROMANTIC_HEALING.ID,2)
 NECROMANTIC_HEALING2.Description.enGB.set('You have a 100% chance to heal your undead minion for 15% of the damage you deal with spells.')
 NECROMANTIC_HEALING2.Subtext.enGB.set('Rank 2')
 NECROMANTIC_HEALING2.SkillLines.add(REANIMATION.ID)
 NECROMANTIC_HEALING2.Attributes.IS_PASSIVE.set(1)
 NECROMANTIC_HEALING2.Icon.set(88)







/******************************************************************
 * Poison and Bones Talents (Tank or Dps)
 ******************************************************************/
 export const PoisonandBones_TREE = NECROMANCER.TalentTrees
 .addGet(MODNAME,'Poisonandbones-talents',0)
 .Name.enGB.set('Poison and Bones')


// Ancient Bones
const ANCIENT_BONES = std.Spells.create(MODNAME, 'ANCIENTBONES', 18697)
ANCIENT_BONES.Name.enGB.set('Ancient Bones');
ANCIENT_BONES.Rank.set(ANCIENT_BONES.ID,1)
ANCIENT_BONES.Subtext.enGB.set('Rank 1')
ANCIENT_BONES.SkillLines.add(POISON_AND_BONES.ID)
ANCIENT_BONES.Attributes.IS_PASSIVE.set(1)

const ANCIENT_BONES2 = std.Spells.create(MODNAME, 'ANCIENTBONES2', 18698)
ANCIENT_BONES2.Name.enGB.set('Ancient Bones');
ANCIENT_BONES2.Rank.set(ANCIENT_BONES.ID,2)
ANCIENT_BONES.Subtext.enGB.set('Rank 2')
ANCIENT_BONES2.SkillLines.add(POISON_AND_BONES.ID)
ANCIENT_BONES2.Attributes.IS_PASSIVE.set(1)

const ANCIENT_BONES3 = std.Spells.create(MODNAME, 'ANCIENTBONES3', 18699)
ANCIENT_BONES3.Name.enGB.set('Ancient Bones');
ANCIENT_BONES3.Rank.set(ANCIENT_BONES.ID,3)
ANCIENT_BONES.Subtext.enGB.set('Rank 3')
ANCIENT_BONES3.SkillLines.add(POISON_AND_BONES.ID)
ANCIENT_BONES3.Attributes.IS_PASSIVE.set(1)

// Lich Flesh R1 
const LICH_FLESH_R1 = std.Spells.create(MODNAME, 'LFpassiveR1', 16931)
LICH_FLESH_R1.Name.enGB.set('Lich Flesh');
LICH_FLESH_R1.Rank.set(1,1)
LICH_FLESH_R1.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R1.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R1.Effects.get(0).PointsBase.set(99)
LICH_FLESH_R1.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R1.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 2%.')
LICH_FLESH_R1.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_2.ID)
)
LICH_FLESH_R1.Icon.set(28205)

// Lich Flesh R2 
const LICH_FLESH_R2 = std.Spells.create(MODNAME, 'LFpassiveR2', 16931)
LICH_FLESH_R2.Name.enGB.set('Lich Flesh');
LICH_FLESH_R2.Rank.set(1,2)
LICH_FLESH_R2.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R2.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R2.Effects.get(0).PointsBase.set(199)
LICH_FLESH_R2.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R2.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 4%.')
LICH_FLESH_R2.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_4.ID)
)
LICH_FLESH_R2.Icon.set(28205)

// Lich Flesh R3 
const LICH_FLESH_R3 = std.Spells.create(MODNAME, 'LFpassiveR3', 16931)
LICH_FLESH_R3.Name.enGB.set('Lich Flesh');
LICH_FLESH_R3.Rank.set(1,3)
LICH_FLESH_R3.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R3.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R3.Effects.get(0).PointsBase.set(299)
LICH_FLESH_R3.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R3.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 6%.')
LICH_FLESH_R3.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_6.ID)
)
LICH_FLESH_R3.Icon.set(28205)

// Lich Flesh R4 
const LICH_FLESH_R4 = std.Spells.create(MODNAME, 'LFpassiveR4', 16931)
LICH_FLESH_R4.Name.enGB.set('Lich Flesh');
LICH_FLESH_R4.Rank.set(1,4)
LICH_FLESH_R4.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R4.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R4.Effects.get(0).PointsBase.set(399)
LICH_FLESH_R4.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R4.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 8%.')
LICH_FLESH_R4.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_8.ID)
)
LICH_FLESH_R4.Icon.set(28205)

// Lich Flesh R5 
const LICH_FLESH_R5 = std.Spells.create(MODNAME, 'LFpassiveR5', 16931)
LICH_FLESH_R5.Name.enGB.set('Lich Flesh');
LICH_FLESH_R5.Rank.set(1,5)
LICH_FLESH_R5.SkillLines.add(POISON_AND_BONES.ID)
LICH_FLESH_R5.Attributes.IS_PASSIVE.set(1)
LICH_FLESH_R5.Effects.get(0).PointsBase.set(499)
LICH_FLESH_R5.Effects.get(0).PointsDieSides.set(1)
LICH_FLESH_R5.Description.enGB.set('Increases your armor contribution from cloth items by $s1%, and reduces damage done by 10%.')
LICH_FLESH_R5.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(REDUCE_DAMAGE_DONE_BY_10.ID)
)
LICH_FLESH_R5.Icon.set(28205)

// Empowered Bone Armor Visual Trigger
const EMPOWERED_BONE_ARMOR_TRIGGER = std.Spells.create(MODNAME, 'EmpoweredBoneArmorVisual', 68335)
EMPOWERED_BONE_ARMOR_TRIGGER.Name.enGB.set('Empowered Curse Bones Armor Visual');
EMPOWERED_BONE_ARMOR_TRIGGER.Attributes.HIDE_FROM_AURA_BAR.set(1)
EMPOWERED_BONE_ARMOR_TRIGGER.Effects.get(0).PointsBase.set(-26)
EMPOWERED_BONE_ARMOR_TRIGGER.Effects.get(0).PointsDieSides.set(1)
const GRYPHON_BONE_ARMOR_VISUAL = std.Spells.load(54467).Visual.getRef()
const EMPOWERED_BONE_ARMOR_TRIGGER_VISUAL = EMPOWERED_BONE_ARMOR_TRIGGER.Visual.getRefCopy()
EMPOWERED_BONE_ARMOR_TRIGGER_VISUAL.StateKit.set(GRYPHON_BONE_ARMOR_VISUAL.StateKit.get())

// Empowered Bone Armor 
const EMPOWERED_BONE_ARMOR = std.Spells.create(MODNAME, 'EmpoweredBoneArmor', 49222)
EMPOWERED_BONE_ARMOR.Name.enGB.set('Empowered Curse Bones Armor');
EMPOWERED_BONE_ARMOR.SkillLines.add(POISON_AND_BONES.ID)
EMPOWERED_BONE_ARMOR.Power.PowerType.set("MANA")
EMPOWERED_BONE_ARMOR.Mana.PowerCostBase.set(0)
EMPOWERED_BONE_ARMOR.Mana.PowerCostPercent.set(10)
EMPOWERED_BONE_ARMOR.Cooldown.CategoryTime.set(1000)
EMPOWERED_BONE_ARMOR.Proc.Charges.set(1)
EMPOWERED_BONE_ARMOR.Proc.Chance.set(0)
EMPOWERED_BONE_ARMOR.Duration.setSimple(-1)
EMPOWERED_BONE_ARMOR.Attributes.DISPLAY_IN_STANCE_BAR.set(1)
EMPOWERED_BONE_ARMOR.Effects.get(0).PointsBase.set(-66)
EMPOWERED_BONE_ARMOR.Effects.get(0).PointsDieSides.set(1)
EMPOWERED_BONE_ARMOR.Effects.get(0).ImplicitTargetA.UNIT_CASTER.set()
EMPOWERED_BONE_ARMOR.Effects.get(1).clear()
EMPOWERED_BONE_ARMOR.Description.enGB.set('The necromancer incases $Ghimself:herself; with a layer of 4 empowered curse bones, shielding $Ghim:her; and reducing all damage taken by $s1% and reducing damage dealt by 25%. This ability lasts until cancelled.')
EMPOWERED_BONE_ARMOR.AuraDescription.enGB.set('The necromancer is surrounded by cursed bones, reducing $Ghis:her; damage taken by $s1% and damage dealt by 25%. This ability lasts until death.')
EMPOWERED_BONE_ARMOR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(EMPOWERED_BONE_ARMOR_TRIGGER.ID)
)
EMPOWERED_BONE_ARMOR.Effects.addMod(eff => eff
    .Type.TRIGGER_SPELL.set()
    .TriggerSpell.set(57339)
)
EMPOWERED_BONE_ARMOR.Icon.set(4075)
const EMPOWERED_BONE_ARMOR_VISUAL = EMPOWERED_BONE_ARMOR.Visual.getRefCopy()
const LIFE_TAP_VISUAL = std.Spells.load(1454).Visual.getRef()
EMPOWERED_BONE_ARMOR_VISUAL.CastKit.set(LIFE_TAP_VISUAL.CastKit.get())


const IMPROVED_FIREBALL1 = std.Spells.load(11069)
const IMPROVED_FIREBALL2 = std.Spells.load(12338)
const IMPROVED_FIREBALL3 = std.Spells.load(12339)
const IMPROVED_FIREBALL4 = std.Spells.load(12340)
const IMPROVED_FIREBALL5 = std.Spells.load(12341)
export const HASTENED_BONES = std.Spells.create(MODNAME,'HASTENED_BONES',11071)
HASTENED_BONES.Name.enGB.set(`Hastened Bones`);
HASTENED_BONES.Description.enGB.set(`Reduces the cast time of Bone Spear by 0.1 second.`);
HASTENED_BONES.Rank.set(HASTENED_BONES.ID,1)
HASTENED_BONES.Subtext.enGB.set('Rank 1')
// Class Mask matching the effect
BONE_SPEAR.ClassMask.match(IMPROVED_FIREBALL1.Effects.get(0))

export const HASTENED_BONES2 = std.Spells.create(MODNAME,'HASTENED_BONES2',11071)
HASTENED_BONES2.Name.enGB.set(`Hastened Bones`);
HASTENED_BONES2.Description.enGB.set(`Reduces the cast time of Bone Spear by 0.2 seconds.`);
HASTENED_BONES2.Rank.set(HASTENED_BONES.ID,2)
HASTENED_BONES2.Subtext.enGB.set('Rank 2')
// Class Mask matching the effect
BONE_SPEAR.ClassMask.match(IMPROVED_FIREBALL2.Effects.get(0))

export const HASTENED_BONES3 = std.Spells.create(MODNAME,'HASTENED_BONES3',11071)
HASTENED_BONES3.Name.enGB.set(`Hastened Bones`);
HASTENED_BONES3.Description.enGB.set(`Reduces the cast time of Bone Spear by 0.3 seconds.`);
HASTENED_BONES3.Rank.set(HASTENED_BONES.ID,3)
HASTENED_BONES3.Subtext.enGB.set('Rank 3')
// Class Mask matching the effect
BONE_SPEAR.ClassMask.match(IMPROVED_FIREBALL3.Effects.get(0))

export const HASTENED_BONES4 = std.Spells.create(MODNAME,'HASTENED_BONES4',11071)
HASTENED_BONES4.Name.enGB.set(`Hastened Bones`);
HASTENED_BONES4.Description.enGB.set(`Reduces the cast time of Bone Spear by 0.4 seconds.`);
HASTENED_BONES4.Rank.set(HASTENED_BONES.ID,4)
HASTENED_BONES4.Subtext.enGB.set('Rank 4')
// Class Mask matching the effect
BONE_SPEAR.ClassMask.match(IMPROVED_FIREBALL4.Effects.get(0))

export const HASTENED_BONES5 = std.Spells.create(MODNAME,'HASTENED_BONES5',11071)
HASTENED_BONES5.Name.enGB.set(`Hastened Bones`);
HASTENED_BONES5.Description.enGB.set(`Reduces the cast time of Bone Spear by 0.5 seconds.`);
HASTENED_BONES5.Rank.set(HASTENED_BONES.ID,5)
HASTENED_BONES5.Subtext.enGB.set('Rank 5')
// Class Mask matching the effect
BONE_SPEAR.ClassMask.match(IMPROVED_FIREBALL5.Effects.get(0))

// Setting the Talents into the tree

const AncientBones_Talent = PoisonandBones_TREE.Talents
.addGet(MODNAME,'Ancient-Bones-Talent')
.Spells.add([ANCIENT_BONES.ID,ANCIENT_BONES2.ID,ANCIENT_BONES3.ID])
.Position.set(0,0)

const LichFlesh_Talent = PoisonandBones_TREE.Talents
.addGet(MODNAME,'Lich-Flesh-Talent')
.Spells.add([LICH_FLESH_R1.ID,LICH_FLESH_R2.ID,LICH_FLESH_R3.ID,LICH_FLESH_R4.ID,LICH_FLESH_R5.ID])
.Position.set(0,1)





/******************************************************************
 * Curses and Blood
 ******************************************************************/
 export const CursesandBlood_TREE = NECROMANCER.TalentTrees
 .addGet(MODNAME,'Curses-and-Blood-talents',0)
 .Name.enGB.set('Curses and Blood')


// Sanguine Blessing
const SANGUINE_BLESSING = std.Spells.create(MODNAME, 'SANGUINEBLESSING', 16255)
SANGUINE_BLESSING.Name.enGB.set('Sanguine Blessing');
SANGUINE_BLESSING.Rank.set(SANGUINE_BLESSING.ID,1)
SANGUINE_BLESSING.Subtext.enGB.set('Rank 1')
SANGUINE_BLESSING.SkillLines.add(CURSES_AND_BLOOD.ID)

const SANGUINE_BLESSING2 = std.Spells.create(MODNAME, 'SANGUINEBLESSING2', 16302)
SANGUINE_BLESSING2.Name.enGB.set('Sanguine Blessing');
SANGUINE_BLESSING2.Rank.set(SANGUINE_BLESSING.ID,2)
SANGUINE_BLESSING2.Subtext.enGB.set('Rank 2')
SANGUINE_BLESSING2.SkillLines.add(CURSES_AND_BLOOD.ID)

const SANGUINE_BLESSING3 = std.Spells.create(MODNAME, 'SANGUINEBLESSING3', 16303)
SANGUINE_BLESSING3.Name.enGB.set('Sanguine Blessing');
SANGUINE_BLESSING3.Rank.set(SANGUINE_BLESSING.ID,3)
SANGUINE_BLESSING3.Subtext.enGB.set('Rank 3')
SANGUINE_BLESSING3.SkillLines.add(CURSES_AND_BLOOD.ID)

const SANGUINE_BLESSING4 = std.Spells.create(MODNAME, 'SANGUINEBLESSING4', 16304)
SANGUINE_BLESSING4.Name.enGB.set('Sanguine Blessing');
SANGUINE_BLESSING4.Rank.set(SANGUINE_BLESSING.ID,4)
SANGUINE_BLESSING4.Subtext.enGB.set('Rank 4')
SANGUINE_BLESSING4.SkillLines.add(CURSES_AND_BLOOD.ID)

const SANGUINE_BLESSING5 = std.Spells.create(MODNAME, 'SANGUINEBLESSING5', 16305)
SANGUINE_BLESSING5.Name.enGB.set('Sanguine Blessing');
SANGUINE_BLESSING5.Rank.set(SANGUINE_BLESSING.ID,5)
SANGUINE_BLESSING5.Subtext.enGB.set('Rank 5')
SANGUINE_BLESSING5.SkillLines.add(CURSES_AND_BLOOD.ID)