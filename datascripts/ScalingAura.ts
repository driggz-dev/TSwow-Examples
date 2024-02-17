const MODNAME = 'Aura-mod'

import { std } from "wow/wotlk";

// Equillibrium (Scales Monsters)
export const EQUILLIBRIUM = std.Spells.create(MODNAME, 'Equillibrium', 35874)
EQUILLIBRIUM.Name.enGB.set('Equillibrium');
EQUILLIBRIUM.Tags.add(MODNAME,'Equillibrium')
EQUILLIBRIUM.Effects.get(1).Aura.MOD_DAMAGE_DONE.set()
EQUILLIBRIUM.Effects.get(0).Aura.MOD_INCREASE_HEALTH_PERCENT.set()
EQUILLIBRIUM.Effects.get(0).PointsBase.set(-18)
EQUILLIBRIUM.Effects.get(1).PointsBase.set(-80)
EQUILLIBRIUM.Effects.get(2).Aura.MOD_HIT_CHANCE.set()
EQUILLIBRIUM.Effects.get(2).PointsBase.set(49)
EQUILLIBRIUM.Attributes.HIDE_FROM_AURA_BAR.set(1)



